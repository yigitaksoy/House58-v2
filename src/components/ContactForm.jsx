"use client";

import { useId } from "react";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { GoArrowUpRight } from "react-icons/go";
import { BiSolidError } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

import Select from "react-select";

function TextInput({ label, ...props }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10 py-2">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-house-dim rounded-lg bg-transparent px-6 pb-4 pt-4 text-md text-house-black transition focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3.5 origin-left text-md text-neutral-500 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-50 peer-focus:font-semibold peer-focus:text-house-bluelight peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-50 peer-[:not(:placeholder-shown)]:font-heavy peer-[:not(:placeholder-shown)]:text-house-black"
      >
        {label}
      </label>
    </div>
  );
}

const ContactForm = () => {
  const main = useRef();
  const form = useRef();
  const [selectedService, setSelectedService] = useState(null);
  const [isInitial, setIsInitial] = useState(true);
  const [sending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);
  const [error, setError] = useState(false);

  const submitTextRef = useRef();
  const arrowRef = useRef();
  const spinnerRef = useRef();
  const successIconRef = useRef();
  const errorIconRef = useRef();

  // Update the hidden input whenever the selected option changes
  useEffect(() => {
    const hiddenInput = form.current.querySelector('input[name="service"]');
    if (hiddenInput && selectedService) {
      hiddenInput.value = selectedService.value;
    }
  }, [selectedService]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsInitial(false);
    setIsSending(true);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setIsSending(false);
        },
      );
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      let mm = gsap.matchMedia();
      let animate = gsap.utils.selector(main.current)(".animate");

      mm.add("(min-width: 800px)", () => {
        gsap.fromTo(
          animate,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: -15,
            opacity: 1,
            duration: 0.7,
            delay: 0.8,
          },
        );
      });

      return () => {
        mm.revert();
      };
    },
    { scope: main },
  );

  const options = [
    { value: "Web Design", label: "Web Design" },
    { value: "Web Development", label: "Web Development" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Maintanence", label: "Maintanence" },
    { value: "Collaboration", label: "Collaboration" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div ref={main} className="w-full md:px-4">
      <div className="mx-auto max-w-lg rounded-xl bg-white px-5 py-9 md:px-10 lg:mr-0 lg:px-8 animate">
        <h3 className="mb-8 text-3xl font-bold tracking-tight">
          <span className="text-black">Contact us</span>
        </h3>
        <form ref={form} action="POST" onSubmit={sendEmail}>
          <TextInput
            id="name"
            label="Name *"
            name="name"
            autoComplete="name"
            required
          />
          <TextInput
            id="email"
            label="Email *"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            id="company"
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <Select
            id="service"
            options={options}
            isSearchable={false}
            placeholder="Services *"
            onChange={setSelectedService}
            classNames={{
              control: () => "p-2.5 text-md rounded-md my-1.5",
            }}
            styles={{
              input: (base) => ({
                ...base,
                "input:focus": {
                  boxShadow: "none",
                },
              }),
              control: (base, state) => ({
                ...base,
                border: state.isFocused
                  ? "1px solid #7dd3fc"
                  : "1px solid black",
                boxShadow: state.isFocused ? "0px 0px .5px #7dd3fc" : "none",
                "&:hover": {
                  border: "1px solid #3f3f46",
                },
              }),
              menu: (base) => ({
                ...base,
                border: "1px solid black",
                borderRadius: "8px",
              }),
              option: (base, { isHovered, isFocused, isSelected }) => ({
                ...base,
                backgroundColor:
                  isFocused || isHovered || isSelected
                    ? "black"
                    : "transparent",
                color: isFocused || isHovered || isSelected ? "white" : "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                fontWeight: "700",
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: "white",
              }),
              multiValueRemove: (styles, { data }) => ({
                ...styles,
                color: data.color,
                ":hover": {
                  backgroundColor: "#e0a4ff",
                  color: "black",
                  borderRadius: "0px 5px 5px 0px",
                },
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: "5",
            })}
            required
          />
          <input type="hidden" name="service" />
          <div className="group relative z-0 transition-all focus-within:z-10 py-3 mb-5">
            <textarea
              id="message"
              name="message"
              type="textarea"
              placeholder=" "
              rows="3"
              required
              className="peer block w-full border rounded-md border-house-dim bg-transparent px-6 pb-4 md:pt-6 pt-6 text-base/6 text-black ring-4 ring-transparent transition  focus:outline-none"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-6 top-1/2 -mt-9 origin-left text-base/6 text-neutral-500 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-50 peer-focus:font-semibold peer-focus:text-house-bluelight peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-50 peer-[:not(:placeholder-shown)]:font-heavy peer-[:not(:placeholder-shown)]:text-house-black"
            >
              How can we help you? *
            </label>
          </div>
          <button
            className="flex group relative w-40 items-center justify-between rounded-lg py-4 bg-black border-2 border-house-black mt-2 mb-4 font-bold leading-none text-house-whitewarm transition-transform duration-500 hover:bg-house-black"
            type="submit"
            disabled={formSubmitted}
          >
            {!sending && !formSubmitted && !error && (
              <>
                <span
                  ref={submitTextRef}
                  className="font-bold ml-5 group-hover:text-house-whitewarm group-hover:-translate-x-1 transition-transform duration-500"
                >
                  Submit
                </span>
                <div
                  ref={arrowRef}
                  className="absolute group right-[25%] translate-x-1/2 top-1/2 -translate-y-1/2 w-10 text-house-whitewarm overflow-hidden flex items-center justify-center"
                >
                  <span className="group-hover:text-house-green group-hover:rotate-45 group-hover:translate-x-2 transition-transform duration-500">
                    <GoArrowUpRight className="text-2xl" />
                  </span>
                </div>
              </>
            )}
            {sending && (
              <div className="py-2">
                <div
                  ref={spinnerRef}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <ImSpinner2 className="w-6 h-6 text-house-bluelight fill-house-bluelight animate-spin" />
                </div>
              </div>
            )}
            {formSubmitted && (
              <div className="py-2">
                <div
                  ref={successIconRef}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <FaCheckCircle className="w-6 h-6 text-house-black fill-house-green " />
                </div>
              </div>
            )}
            {error && !sending && !formSubmitted && (
              <div className="py-2">
                <div
                  ref={errorIconRef}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <BiSolidError className="w-6 h-6 text-yellow-400 " />
                </div>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
