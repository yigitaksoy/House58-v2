import { useId } from "react";
import { FadeIn } from "@/components/FadeIn";

function TextInput({ label, ...props }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10 py-3">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-house-dim rounded-xl bg-transparent px-6 pb-4 md:pt-6 pt-6 text-base/6 text-black ring-4 ring-transparent transition  focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-50 peer-focus:font-semibold peer-focus:text-house-bluelight peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-heavy peer-[:not(:placeholder-shown)]:text-house-black"
      >
        {label}
      </label>
    </div>
  );
}

const ContactForm = () => {
  return (
    <FadeIn>
      <div className="w-full md:px-4">
        <div className="mx-auto max-w-xl rounded-xl bg-white px-5 py-12 md:px-10 lg:mr-0 lg:px-8">
          <h3 className="mb-8 text-3xl font-bold tracking-tight">
            <span className="text-black">Contact Us</span>
          </h3>
          <form action="POST">
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
            <div className="group relative z-0 transition-all focus-within:z-10 py-3">
              <textarea
                required
                type="textarea"
                id="message"
                placeholder=" "
                rows="3"
                className="peer block w-full border border-house-dim rounded-xl bg-transparent px-6 pb-4 md:pt-6 pt-6 text-base/6 text-black ring-4 ring-transparent transition  focus:outline-none"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-6 top-1/2 -mt-9 origin-left text-base/6 text-neutral-500 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-50 peer-focus:font-semibold peer-focus:text-house-bluelight peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-heavy peer-[:not(:placeholder-shown)]:text-house-black"
              >
                Message *
              </label>
            </div>
            <button
              className="block w-full rounded-lg bg-black border-2 border-house-black px-8 py-5 mt-12 text-center font-bold leading-none text-white transition-all duration-300 hover:bg-house-green hover:text-black"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactForm;
