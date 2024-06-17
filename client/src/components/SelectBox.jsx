import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none", // Remove the box shadow
    borderColor: "transparent", // Set border color to transparent
    "&:hover": {
      borderColor: "transparent", // Ensure hover state also has transparent border
    },
  }),
};

const SelectBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={customStyles}
      className=""
    />
  );
};

export default SelectBox;
