import { Box, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SwitzerText from "@/components/css-texts/SwitzerText";
import colors from "@/assets/colors";

const ReSlider = styled(Slider)({
  color: "black",
  marginTop: 10,
  marginBottom: 10,
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    color: "black",
  },
  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    backgroundColor: colors.mainColor,
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const RentSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <>
      <Box>
        <SwitzerText sx={{ mt: 2 }} text={"You could earn"} />
        <SwitzerText align={"center"} text={"18,000 AED"} />
      </Box>
      <Box>
        <SwitzerText
          sx={{ mt: 2 }}
          text={`${sliderValue} nights at an estimated ${
            sliderValue * 1800
          } AED per night for 3 BR in Down Town, Dubai`}
        />
        <SwitzerText align={"center"} text={"Have it at 1800 AED per night"} />
      </Box>
      <ReSlider
        min={0}
        max={10}
        value={sliderValue}
        onChange={handleChangeSlider}
      />
    </>
  );
};
export default RentSlider;
