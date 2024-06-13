import Wrapper from "./Wrapper";
import ColorPicker from "../components/ColorPicker";
import InputForm from "../components/InputForm";
import TextArea from "../components/TextArea";

const options = {
  width: 422,
  height: 484,
  borderWidth: 4,
  borderColor: "#ffffff",
}; //options for color picker

function InputSection({
  setters,
  handleChange,
  formData,
  hexColor,
  handleClick,
  usageEmpty,
}) {
  return (
    <main>
      <section className="bg-[url('/src/img/input-section-bg.png')] bg-cover bg-center w-full border-y border-secondary-color">
        <Wrapper>
          <div className="md:grow text-sm md:text-base block lg:flex w-full items-center space-y-1 text-center text-primary-dark mt-80">
            <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2">
              <ColorPicker options={options} setters={setters} />
              <InputForm
                handleChange={handleChange}
                formData={formData}
                hexColor={hexColor}
              />
            </div>

            <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2 block w-full h-full">
              <TextArea
                handleChange={handleChange}
                formData={formData}
                handleClick={handleClick}
                usageEmpty={usageEmpty}
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

export default InputSection;
