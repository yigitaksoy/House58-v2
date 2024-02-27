export const TextInput = ({ label, id, ...props }) => {
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
};
