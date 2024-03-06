import Select from "react-select";

export const SelectInput = ({ options, ...props }) => {
  return (
    <Select
      id="service"
      aria-label="services"
      options={options}
      {...props}
      isSearchable={false}
      placeholder="Services *"
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
          border: state.isFocused ? "1px solid #7dd3fc" : "1px solid black",
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
            isFocused || isHovered || isSelected ? "black" : "transparent",
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
        colors: {
          ...theme.colors,
          neutral50: "#525252",
        },
      })}
      required
    />
  );
};
