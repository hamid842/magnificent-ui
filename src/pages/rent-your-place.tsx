import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import rentImage from "../../public/rent-main.png";
import OurPartnership from "@/components/global/OurPartnership";
import RentSlider from "@/components/rent-your-place/RentSlider";
import rentMiddleImage from "../../public/rent-page-middle.png";
import travelPic from "../../public/ship.png";
import cityPic from "../../public/city.png";
import islandPic from "../../public/beach.png";
import explorePic from "../../public/explore.png";
import { ColorButton } from "@/components/global/Header";
import { useRouter } from "next/router";
import LastMinuteDeals from "@/pages/last-minute-deals";
import { ReactElement } from "react";
import Layout from "@/components/global/Layout";
import AppContainer from "@/components/global/AppContainer";

const RentYourPlace = () => {
  const router = useRouter();
  return (
    <>
      <Grid container spacing={5} pl={5} mt={10}>
        <Grid item xs={12} sm={6} lg={5}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant={"h4"} sx={{ fontWeight: 600, mt: 12 }}>
              Rent it !
            </Typography>
            <Box>
              <Typography sx={{ mt: 2 }}>You could earn</Typography>
              <Typography align={"center"}>$1.200 USD</Typography>
            </Box>
            <Box>
              <Typography sx={{ mt: 2 }}>
                7 nights at an estimated $218
              </Typography>
              <Typography align={"center"}>USD a night</Typography>
            </Box>
            <RentSlider />
          </Stack>
          <Box mt={5}>
            <OurPartnership />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={7} sx={{ textAlign: "right" }}>
          <Image src={rentImage} width={600} height={500} alt={"Rent"} />
        </Grid>
      </Grid>
      <AppContainer>
        <Grid container spacing={2} my={5}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Image
              src={rentMiddleImage}
              width={450}
              height={400}
              alt={"Rent"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            {/* <Typography variant={"caption"} sx={{ fontWeight: 600 }}>
              Rent your place
            </Typography> */}
            <Typography
              variant={"h6"}
              sx={{ fontWeight: 700, marginY: 2 }}
              textAlign="center"
            >
              We Got It Covered!
            </Typography>
            <Typography variant={"caption"}>
              So, you are looking to explore the world of short-term rental, but
              looking at an empty, run-down property has you feeling
              overwhelmed! Relax. Our turnkey services allow owners a hands-off
              experience, so you can sit back and let the rentals happen with
              ease!
            </Typography>
            <Grid container my={2}>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 600 }}>100+</Typography>
                <Typography
                  variant={"caption"}
                  sx={{ fontSize: 10, lineHeight: 2 }}
                >
                  Lorem
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 600 }}>172</Typography>
                <Typography
                  variant={"caption"}
                  sx={{ fontSize: 10, lineHeight: 2 }}
                >
                  Places
                </Typography>
              </Grid>
              <Grid item xs={6} py={1}>
                <Typography sx={{ fontWeight: 600 }}>68</Typography>
                <Typography
                  variant={"caption"}
                  sx={{ fontSize: 10, lineHeight: 2 }}
                >
                  Lorem
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 600 }}>32M+</Typography>
                <Typography
                  variant={"caption"}
                  sx={{ fontSize: 10, lineHeight: 2 }}
                >
                  We help to find your dream place
                </Typography>
              </Grid>
            </Grid>
            <ColorButton
              size={"small"}
              variant={"contained"}
              sx={{ borderRadius: 25, m: 1, textTransform: "capitalize" }}
              onClick={() => router.push("/rent-your-place/form")}
            >
              Rent your place
            </ColorButton>
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"space-between"} pb={5}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{ color: "#A8A7AB" }}
          >
            <Image src={travelPic} alt={"Travel"} width={100} height={100} />
            <Typography mt={1}>TRAVEL</Typography>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{ color: "gray" }}
          >
            <Image src={cityPic} alt={"Travel"} width={100} height={100} />
            <Typography mt={1}>CITY TOUR</Typography>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{ color: "gray" }}
          >
            <Image src={islandPic} alt={"Travel"} width={100} height={100} />
            <Typography mt={1}>ISLAND TOUR</Typography>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{ color: "gray" }}
          >
            <Image src={explorePic} alt={"Travel"} width={100} height={100} />
            <Typography mt={1}>EXPLORE WORLD</Typography>
          </Stack>
        </Stack>
      </AppContainer>
    </>
  );
};
export default RentYourPlace;

RentYourPlace.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
