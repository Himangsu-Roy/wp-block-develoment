import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import { useState } from "react";

const MyUsefulNumberControl = () => {
  const [value, setValue] = useState(10);
  console.log(value);

  return (
    <NumberControl
      __next40pxDefaultSize
      // isShiftStepEnabled={true}
      onChange={setValue}
      // shiftStep={10}
      value={value}
      label="Age"
    />
  );
};

export default MyUsefulNumberControl;
