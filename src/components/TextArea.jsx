import { Link } from "react-router-dom";
import {
  randomMessage,
  randomIntro,
  randomQuestion,
  randomTitle,
  randomCallToAction,
} from "../utils/randomItem";

function TextArea({ handleClick, handleChange, promptState }) {
  const usageState = promptState === "";
  return (
    <div className="flex flex-col space-y-2 py-20 bg-white sm:pt-20">
      <h1 className="text-4xl font-bold sticky lg:-mt-32 text-orange-500">
        {randomTitle}
      </h1>

      <p className="text-gray-600 p-10 w-3/4 mx-auto my-auto pb-4">
        {randomIntro}
      </p>
      <p className="text-gray-600 p-10 w-3/4 mx-auto my-auto pb-4">
        {randomMessage}
      </p>

      <p className="text-green-600">HEX: #b19cd9</p>
      <p className="text-green-600">RGB: rgb(177, 156, 217)</p>
      <p className="text-green-600">HSL: hsl(261, 45%, 73%)</p>

      <label
        className="block text-base font-semibold mb-1 w-2/3 mx-auto"
        htmlFor="usage"
      >
        {randomQuestion}
      </label>
      <textarea
        id='usage'
        name='usage'
        className='w-2/3 max-h-48 px-3 py-2 resize-none overflow-y-auto border border-primary-white rounded-[20px] shadow-shape focus:outline-none mx-auto bg-primary-color'
        rows='4'
        onChange={handleChange}
        value={promptState}
      />
      {usageState && <p className='text-brand-red'>Cannot be empty! </p>}
      <Link
        to="/result"
        onClick={handleClick}
        className='py-3 px-7 bg-transparent text-brand-green border border-brand-green rounded-full hover:bg-primary-color hover:text-brand-red hover:border-brand-red hover:shadow-shape mx-auto transition-all duration-500'
      >
        {randomCallToAction}
      </Link>
    </div>
  );
}

export default TextArea;
