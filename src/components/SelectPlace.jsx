import React from "react";
import Select from 'react-select';

const options = [
  { value: 'co-med', label: 'Medellín' },
  { value: 'co-car', label: 'Cartagena' },
  { value: 'co-bog', label: 'Bogotá' },
  { value: 'co-barraq', label: 'Barranquilla' },
  { value: 'co-ibg', label: 'Ibagué' },
];

const SelectPlace = (props) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const handleChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder={props.placeholder}
    />
  );
};

export default SelectPlace;