import { useEffect, useMemo, useRef, useState } from "react";
import askGroq from "../utils/groq";
import Wrapper from "./Wrapper";
import ColorPicker from "./ColorPicker";
import InputForm from "./InputForm";
import TextArea from "./TextArea";
import ResultsSection from "./ResultsSection";

const options = {
  width: 422,
  height: 484,
  borderWidth: 4,
  borderColor: "#ffffff",
}; //options for color picker

function InputSection({}) {
  const [hexColor, setHexColor] = useState("#f00");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [usageEmpty, setUsageEmpty] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const formDataRef = useRef({
    usage: "Coordinate colors for my outfit",
    colorScheme: "complimentary",
  });
  const colorArrRef = useRef([]);
  const promptRef = useRef(formDataRef.current.usage);

  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [trigger]);
  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [formDataRef.current.usage]);
  const colors = useMemo(() => colorArrRef.current, [colorArrRef.current]);
  const prompt = useMemo(() => promptRef.current, [promptRef.current]);

  const handleClick = async () => {
    if (formDataRef.current.usage === "") {
      setUsageEmpty(true);
      return;
    }
    try {
      const schemeObj = await askGroq(hexColor, formDataRef);
      setButtonClicked(true);
      colorArrRef.current = schemeObj;
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
      setUsageEmpty(false);
    }
  };
  return (
    <>
      {!buttonClicked &&       <section className="bg-[url('/src/img/input-section-bg.png')] bg-cover bg-center w-full h-screen border-y border-secondary-color animate-slideIn">
        <Wrapper>
          <div className='md:grow text-sm md:text-base block lg:flex w-full items-center space-y-1 text-center text-primary-dark'>
            <div className='md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2'>
              <ColorPicker options={options} setters={setters} />
              <InputForm
                handleChange={handleChange}
                formData={formDataRef.current}
                hexColor={hexColor}
                usageEmpty={usageEmpty}
              />
            </div>

            <div className='md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2 block w-full h-full'>
              <TextArea
                handleChange={handleChange}
                formData={formDataRef.current}
                handleClick={handleClick}
              />
            </div>
          </div>
        </Wrapper>
      </section>}
      {buttonClicked && <ResultsSection colors={colors} prompt={prompt} />}
    </>
  );
}

export default InputSection;
