import _ from "lodash";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const SliderPrice = ({ price, onChange }) => {
  const value = [_.min(price), _.max(price)];
  const [valueSlider, setValueSlider] = useState(value);

  return (
    <div className="container-fix">
      <p className="fw-bold">Цена</p>
      <Slider
        range
        min={value[0]}
        max={value[1]}
        defaultValue={value}
        allowCross={false}
        onChange={(val) => {
          setValueSlider(val);
          onChange(val);
        }}
      />
      <div className="mt-2 d-flex justify-content-evenly align-items-center user-select-none text-center">
        <div className="searchline w-25">{valueSlider[0]} ₽</div>—
        <div className="searchline w-25">{valueSlider[1]} ₽</div>
      </div>
    </div>
  );
};

export default SliderPrice;
