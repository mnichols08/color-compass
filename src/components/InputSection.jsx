import { useEffect, useMemo, useRef, useState } from "react";
import askGroq from "../utils/groq";
import Wrapper from "./Wrapper";
import ColorPicker from "./ColorPicker";
import InputForm from "./InputForm";
import TextArea from "./TextArea";
import { randomPrompt } from "../utils/randomItem";

function InputSection({ setColors, setPrompt }) {
  const [hexColor, setHexColor] = useState("#f00");
  const [trigger, setTrigger] = useState(false);
  const formDataRef = useRef({
    usage: randomPrompt,
    colorScheme: "complimentary",
  });
  const [promptState, setPromptState] = useState(formDataRef.current.usage);
  const colorArrRef = useRef([]);
  const promptRef = useRef(formDataRef.current.usage);

  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [trigger]);
  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [formDataRef.current.usage]);

  const handleClick = async () => {
    try {
      const schemeObj = await askGroq(hexColor, formDataRef);
      colorArrRef.current = schemeObj;
      setColors(schemeObj);
      setPrompt(promptState);
    } catch (error) {
      console.error(error.message);
    }
  };

  const setters = useMemo(
    () => ({
      onChangeColor(color) {
        setHexColor(color.hexString);
      },
    }),
    []
  );
  const handleChange = (e) => {
    e.preventDefault?.();
    const changedField = e.target.name;
    const newValue = e.target.value;
    const breakingChars = /[^a-zA-Z0-9 ]/g;
    if (!breakingChars.test(newValue)) {
      formDataRef.current = {
        ...formDataRef.current,
        [changedField]: newValue,
      };
      setTrigger((prev) => prev + 1);
      setPromptState(newValue);
    }
  };
  let bg = `linear-gradient(-45deg,${hexColor}60, ${hexColor}06)`;
  useEffect(() => {
    bg = `linear-gradient(45deg,${hexColor}60, ${hexColor}06)`;
    document.body.style.background = bg;
  }, [hexColor])
  return (
    <section className="bg-[url('/src/img/input-section-bg.png')] bg-cover bg-center w-full lg:h-[calc(100vh-60px)] border-y border-secondary-color animate-slideIn">
      <div style={{background: bg }} className="font-display m-auto flex items-center justify-center h-screen sm:mt-5">
        <Wrapper>
          <div className="md:grow text-sm md:text-base block lg:flex w-full items-center space-y-1 text-center text-primary-dark ">
            <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2">
              <ColorPicker setters={setters} />
              <InputForm hexColor={hexColor} formData={formDataRef} />
            </div>

            <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2 block w-full h-full">
              <TextArea
                handleChange={handleChange}
                handleClick={handleClick}
                promptState={promptState}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default InputSection;
