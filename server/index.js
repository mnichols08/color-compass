const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function returnNewImage(prompt,colors) {
  let promptObj
  (process.env.MODE === 'production') ? promptObj = {
    model: "dall-e-3",
    prompt: `Generate an image of a ${prompt} using the following colors: ${colors}`,
    n: 1,
    size: "1024x1024",
  } : promptObj = {
    model: "dall-e-2", // use a smaller model while developing
    prompt: `Generate an image of a ${prompt} using the following colors: ${colors}`,
    n: 1,
    size: "256x256", // restrict image size to 256x256 while developing
  }
  
  if (!promptObj) return
  try {
    const response = await openai.images.generate(promptObj);
    return response.data[0].url;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('API limit reached');
      return `https://via.placeholder.com/1024&text=API%20limit%20reached`;
    } else {
      console.error('Error generating image', error);
      return `https://via.placeholder.com/1024&text=Error%20Generating%20Image`;
    }
  }
  
}

app.use(cors());

app.get('/v49/:key/:prompt/:colors', async (req, res) => {
  let placeholderImg;
  if (!req.params.prompt || !req.params.colors) {
    placeholderImg = `https://via.placeholder.com/1024&text=Missing%20Prompt%20or%20Colors`
    console.error('Missing or incorrectly set BACKEND_API_KEY environment variable')
    return res.status(400).json(placeholderImg);
  }
  const {prompt, colors} = req.params;
  if (req.params.key !== process.env.BACKEND_API_KEY) {
    placeholderImg = `https://via.placeholder.com/1024&text=Unauthorized%20Request`
    console.error('Missing or incorrectly set BACKEND_API_KEY environment variable')
    return res.status(401).json(placeholderImg);
  }
 const imgUrl = await returnNewImage(prompt,colors);
  res.status(200).json( imgUrl );   
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
