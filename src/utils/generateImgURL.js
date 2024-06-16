const KEY = import.meta.env.VITE_BACKEND_API_KEY;

const generateImgURL = async (prompt, colors) => {
  let url;
  // format prompt and colors for URL query
  prompt = prompt.replace(/\s/g, "+"); //
  colors = colors.toString().replace(/\s/g, "+");
  try {
    if (!prompt || !colors) {
      console.warn("Prompt and colors are required");
    }
    if (!KEY) {
      console.warn("Missing or incorrectly set BACKEND_API_KEY environment variable");
      return `https://via.placeholder.com/1024/${colors[0]}/${color[1]}}&text=Error%20Generating%20Image`;
    }
    import.meta.env.MODE === "production"
      ? (url = await fetch(
          `https://openai-api-u24k.onrender.com/v49/${KEY}/${prompt}/${colors}`
        ).then((res) => res.json()))
      : (url = await fetch(
          `http://localhost:3000/v49/${KEY}/${prompt}/${colors}`
        ).then((res) => res.json()));
    return url;
  } catch (error) {
    console.error("Error fetching image URL: ", error);
  }
};

export default generateImgURL;