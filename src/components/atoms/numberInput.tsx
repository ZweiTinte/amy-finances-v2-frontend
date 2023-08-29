import * as React from "react";

const NumberInput = ({
  value,
  setValue,
  step = "0.01",
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  step?: string;
}) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type="number"
      step={step}
    />
  );
};

export default NumberInput;
