// Next.js
import Image from "next/image";
import dynamic from "next/dynamic";
// Material ui
import {Box, Grid, Stack} from "@mui/material";
// Project imports
import colors from "@/assets/colors";

const EuclidText = dynamic(() => import("@/components/css-texts/EuclidText"));
const RentSlider = dynamic(() => import("@/components/rent-your-place/RentSlider"));
const OurPartnership = dynamic(() => import("@/components/global/OurPartnership"));

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
                        sx={{fontWeight: 600, mt: 3}}
                        text={"Rent it !"}
                    />
                    <RentSlider/>
                </Stack>
                <Box mt={3}>
                    <OurPartnership/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <Box
                    sx={{
                        p: 2,
                        width: "100%",
                        height: "80%",
                        backgroundColor: colors.mainColor,
                        borderTopRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        boxShadow:
                            "rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderTopRightRadius: 50,
                        }}
                    >
                        <Image
                            src={
                                "https://cdn.leonardo.ai/users/2dc5dbea-cfc5-4a04-a311-747595418e49/generations/fc058562-9c90-488e-9c44-6d003fc800ba/Leonardo_Creative_Home_rental_about_us_page_photo_0.jpg"
                            }
                            width={200}
                            height={200}
                            alt={"Rent"}
                            style={{
                                background: "transparent",
                                borderTopRightRadius: 50,
                                borderBottomLeftRadius: 50,
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default RentFirstSection;