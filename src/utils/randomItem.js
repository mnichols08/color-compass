const greetings = [
    "Hello!",
    "Hi!",
    "Hey!",
    "Hola!",
    "Bonjour!",
    "Ciao!",
    "Namaste!",
    "Greetings!",
    "Salutations!",
    "Welcome!",
    "Howdy!",
    "Ahoy!",
    "Hello there!",
    "Hi there!",
    "Hey there!",
    "Good day!",
    "What's up?",
    "Hiya!",
    "Yo!",
    "Hey, friend!"
  ]
  const suffixes = [
    "Welcome!",
    "How are you?",
    "Great to see you!",
    "Nice to meet you!",
    "How's it going?",
    "Hope you're well!",
    "What's new?",
    "Glad you're here!",
    "Nice to see you!",
    "How's your day?",
    "How's everything?",
    "Pleased to meet you!",
    "Good to see you!",
    "How have you been?",
    "Hope all is well!",
    "What's up?",
    "Nice to have you here!",
    "How are things?",
    "Hope you're doing great!",
    "Glad to meet you!"
  ]
  const prefix = [
    "How can I help you?",
    "What's on your mind?",
    "What's up?",
    "What's the plan?",
    "What's the story?",
  ];
  const titles = [
    "Color Guru",
    "Shade Seeker",
    "Hue Master",
    "Palette Pro",
    "Tint Wizard",
    "Tone Expert",
    "Spectrum Sage",
    "Chromatic Ace",
    "Pigment Picker",
    "Shade Savant",
    "Color Connoisseur",
    "Tint Titan",
    "Hue Hunter",
    "Palette Artist",
    "Tone Virtuoso",
    "Color Crafter",
    "Chromatic Genius",
    "Pigment Prodigy",
    "Shade Specialist",
    "Color Aficionado"
  ]
  const messages = [
    "Explore the world of vibrant hues and discover your perfect shade. Creativity knows no bounds with endless possibilities.",
    "Unleash your imagination with a spectrum of colors. Each shade tells a story, creating a masterpiece in every space.",
    "Dive into the universe of colors and find your unique palette. Transform your vision into reality with stunning shades.",
    "Colors have the power to change moods and create ambiance. Choose the perfect hue to express your style and personality.",
    "From soft pastels to bold primaries, colors can elevate any design. Experiment with shades to find the perfect balance.",
    "The right color can turn a simple room into a captivating space. Discover shades that inspire and bring your ideas to life.",
    "A splash of color can breathe new life into any project. Find the perfect hue to complement your creative journey.",
    "Colors can evoke emotions and set the tone for any environment. Choose hues that resonate with your vision and goals.",
    "Every shade has a story and can transform a blank canvas. Explore the beauty of colors and create something extraordinary.",
    "Finding the right color is an art. Let your creativity flow and experiment with shades to find your perfect match."
  ]
  const questions = [ "Describe the setting for this color",
  "Where will you apply this color?",
  "Explain the context for this color choice",
  "Tell us where you plan to use this color",
  "Specify the location for this color",
  "Where do you envision this color?",
  "Describe the environment for this color",
  "Where will this color make its mark?",
  "Mention the area for this color",
  "Where do you want to see this color?"];
  const prompts = [
    "Create a color scheme for my room",
    "Generate a palette for my website",
    "Design colors for my logo",
    "Compose a color scheme for my artwork",
    "Develop a palette for my presentation",
    "Coordinate colors for my wedding",
    "Generate a scheme for my interior design",
    "Design colors for my brand",
    "Create a palette for my digital art",
    "Compose a scheme for my event",
    "Coordinate colors for my project",
    "Generate a palette for my UI/UX design",
    "Design colors for my marketing campaign",
    "Create a scheme for my product packaging",
    "Coordinate colors for my illustration",
    "Generate a palette for my app interface",
    "Design colors for my flyer",
    "Compose a scheme for my banner",
    "Coordinate colors for my social media graphics",
    "Generate a palette for my game design"
];
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
  const randomSuffix = randomItem(suffixes);
  const randomPrefix = randomItem(prefix);
  const randomTitle = randomItem(titles);
  const randomIntro = `${randomGreeting} ${randomSuffix} ${randomPrefix}`;
  const randomQuestion = randomItem(questions);
  const randomMessage = randomItem(messages);
  const randomPrompt = randomItem(prompts);

export default randomItem;
export { randomTitle, randomIntro, randomQuestion, randomMessage, randomPrompt }