"use client";

import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { SelectInput } from "@/components/ui/SelectInput";
import { TextInput } from "@/components/ui/TextInput";
import SubmitButton from "@/components/ui/SubmitButton";

const ContactForm = () => {
  const main = useRef();
  const form = useRef();
  const [selectedService, setSelectedService] = useState(null);
  const [sending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const options = [
    { value: "Web Design", label: "Web Design" },
    { value: "Web Development", label: "Web Development" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Maintanence", label: "Maintanence" },
    { value: "Collaboration", label: "Collaboration" },
    { value: "Other", label: "Other" },
  ];

  const input = [
    {
      id: "name",
      label: "Name *",
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email *",
      type: "email",
      required: true,
    },
    {
      id: "company",
      label: "Company",
      type: "text",
      required: false,
    },
  ];

  useEffect(() => {
    const hiddenInput = form.current.querySelector('input[name="service"]');
    if (hiddenInput && selectedService) {
      hiddenInput.value = selectedService.value;
    }
  }, [selectedService]);

  const sendEmail = (e) => {
    e.preventDefault();
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

  return (
    <div ref={main} className="w-full md:px-4">
      <div className="mx-auto max-w-lg rounded-xl bg-white px-5 py-9 md:px-10 lg:mr-0 lg:px-8 animate">
        <h3 className="mb-8 text-3xl font-bold tracking-tight">
          <span className="text-black">Contact us</span>
        </h3>
        <form ref={form} action="POST" onSubmit={sendEmail}>
          {input.map((input) => (
            <TextInput
              key={input.id}
              id={input.id}
              type={input.type}
              label={input.label}
              name={input.id}
              autoComplete={input.id}
              required={input.required}
            />
          ))}
          <SelectInput options={options} onChange={setSelectedService} />
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
              className="pointer-events-none absolute left-6 top-1/2 -mt-9 origin-left text-base/6 text-neutral-600 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-50 peer-focus:font-semibold peer-focus:text-house-bluelight peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-50 peer-[:not(:placeholder-shown)]:font-heavy peer-[:not(:placeholder-shown)]:text-house-black"
            >
              How can we help you? *
            </label>
          </div>
          <SubmitButton
            sending={sending}
            formSubmitted={formSubmitted}
            error={error}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
