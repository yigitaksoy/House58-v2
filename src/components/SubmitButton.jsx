"use client";

import { GoArrowUpRight } from "react-icons/go";
import { BiSolidError } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const SubmitButton = ({ sending, formSubmitted, error }) => {
  return (
    <div className="mt-2 grid grid-cols-2 gap-5">
      <div>
        <button
          className="flex group relative w-40 items-center justify-between rounded-lg py-4 bg-black border-2 border-house-black mt-2 mb-4 font-bold leading-none text-house-whitewarm transition-transform duration-500 hover:bg-house-black"
          type="submit"
          disabled={formSubmitted}
        >
          {!sending && !formSubmitted && !error && (
            <>
              <span className="font-bold ml-5 group-hover:text-house-whitewarm group-hover:-translate-x-1 transition-transform duration-500">
                Submit
              </span>
              <div className="absolute group right-[25%] translate-x-1/2 top-1/2 -translate-y-1/2 w-10 text-house-whitewarm overflow-hidden flex items-center justify-center">
                <span className="group-hover:text-house-bluelight group-hover:rotate-45 group-hover:translate-x-2 group-hover:animate-pulse transition-transform duration-500">
                  <GoArrowUpRight className="text-2xl" />
                </span>
              </div>
            </>
          )}
          {sending && (
            <div className="py-2">
              <div className="absolute inset-0 flex justify-center items-center">
                <ImSpinner2 className="w-6 h-6 text-house-bluelight fill-house-bluelight animate-spin" />
              </div>
            </div>
          )}
          {formSubmitted && (
            <div className="py-2">
              <div className="absolute inset-0 flex justify-center items-center">
                <FaCheckCircle className="w-6 h-6 text-house-black fill-house-green " />
              </div>
            </div>
          )}
          {error && !sending && !formSubmitted && (
            <div className="py-2">
              <div className="absolute inset-0 flex justify-center items-center">
                <BiSolidError className="w-6 h-6 text-yellow-400 " />
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="grid items-center justify-center">
        {formSubmitted && <p className="text-sm font-bold">Thank you!</p>}
        {error && !sending && !formSubmitted && (
          <p className="text-sm font-bold">Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default SubmitButton;
