import "./InputForm.css";
import Wrapper from "./Wrapper";
import { setContrastText } from "../utils/setContrastText";

export default function InputForm({ hexColor }) {
   return (
    <Wrapper>
      <div className="scheme-container bg-primary-color space-y-2.5 my-3 py-2.5 ">
        <div className="flex justify-center mx-2.5 gap-x-0.5 scheme-buttons-container">
          <div className="flex justify-center mx-2.5 gap-x-0.5 scheme-buttons-container">
            <div>
              <button className="rounded-full border-white border-2 scheme-button bg-brand-red text-white w-32">
                Analogue
              </button>
            </div>
            <div>
              <button className="rounded-full border-white border-2 scheme-button bg-brand-light-green text-white w-32">
                Triadic
              </button>
            </div>
            <div>
              <button className="rounded-full border-white border-2 scheme-button bg-primary-dark text-white w-36">
                Complimentary
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-pink-50 flex justify-center mx-2.5 scheme-hexCodes-container">
          <div
            style={{ background: hexColor, borderRadius: "40px 0 0 40px", color: setContrastText(hexColor) }}
            className="flex justify-center items-center border-white border-2 hex-codes"
          >
            {hexColor}
          </div>
          <div
            style={{ background: hexColor, color: setContrastText(hexColor) }}
            className="flex justify-center items-center border-white border-2  hex-codes"
          >
            {hexColor}
          </div>
          <div
            style={{ background: hexColor, borderRadius: " 0 40px 40px 0", color: setContrastText(hexColor)}}
            className="flex justify-center items-center border-white border-2 hex-codes"
          >
            {hexColor}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
