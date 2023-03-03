import {Box, Grid, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import RentSlider from "@/components/rent-your-place/RentSlider";
import OurPartnership from "@/components/global/OurPartnership";
import RentForm from "@/components/rent-your-place-1/RentForm";

const RentFirstSection = ()=>{
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
                        sx={{fontWeight: 600, mt: 3}}
                        text={"Rent your property out with us !"}
                    />
                    <RentSlider/>
                </Stack>
                <Box mt={5}>
                    <OurPartnership/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <RentForm/>
            </Grid>
        </Grid>
    )
}
export default RentFirstSection;