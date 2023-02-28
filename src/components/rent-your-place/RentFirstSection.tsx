// Next.js
import dynamic from "next/dynamic";
// Material ui
import { Box, Grid, Stack } from "@mui/material";
// Project imports
const EuclidText = dynamic(() => import("@/components/css-texts/EuclidText"));
const RentSlider = dynamic(
  () => import("@/components/rent-your-place/RentSlider")
);
const OurPartnership = dynamic(
  () => import("@/components/global/OurPartnership")
);
const RentImageList = dynamic(
  () => import("@/components/rent-your-place/RentImageList")
);

//=====================|| Rent Your Place Page First Section ||========================

const RentFirstSection = () => {
  return (
    <Grid container spacing={3} mt={15}>
      <Grid item xs={12} sm={6} lg={6}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <EuclidText
            variant={"h4"}
            sx={{ fontWeight: 600, mt: 3 }}
            text={"Rent it !"}
          />
          <RentSlider />
        </Stack>
        <Box mt={3}>
          <OurPartnership />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <RentImageList />
      </Grid>
    </Grid>
  );
};
export default RentFirstSection;
