import { ReactElement } from "react";
// Material ui
import { Box, Grid, Stack, Typography } from "@mui/material";
// Next.js
import Image from "next/image";
import { useRouter } from "next/router";
// Project imports
import OurPartnership from "@/components/global/OurPartnership";
import RentSlider from "@/components/rent-your-place/RentSlider";
import { ColorButton } from "@/components/global/Header";
import Layout from "@/components/global/Layout";
import AppContainer from "@/components/global/AppContainer";
import EuclidText from "@/components/css-texts/EuclidText";
import RentImageList from "@/components/rent-your-place/RentImageList";
import colors from "@/assets/colors";
import travelPic from "../../public/rent-place/ship.png";
import cityPic from "../../public/rent-place/city.png";
import islandPic from "../../public/rent-place/beach.png";
import explorePic from "../../public/rent-place/explore.png";
import { NextSeo } from "next-seo";

const RentYourPlace = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Best Luxury Vacation Rental Homes in Downtown Dubai | Property Management Companies- Magnificent."
        description="View our listings of luxury vacation apartment rentals and luxury vacation rental homes in downtown dubai. Book apartments and luxury holiday homes for your stay in downtown dubai - magnificent"
        canonical="https://magnificent.ae/"
        openGraph={{
          locale: "en_US",
          type: "article",
          title:
            "Best Luxury Vacation Rental Homes in Downtown Dubai | Property Management Companies- Magnificent.",
          description:
            "View our listings of luxury vacation apartment rentals and luxury vacation rental homes in downtown dubai. Book apartments and luxury holiday homes for your stay in downtown dubai - magnificent",
          url: "https://magnificent.ae/list-your-home/",
          site_name: "Magnificent Holiday",
          article: {
            modifiedTime: "2023-01-07T09:01:41+00:00",
          },
        }}
        twitter={{
          cardType: "summary_large_image",
          //   label1: 'Est. reading time',
          //   data1: '22 minutes',
        }}
      />

      <AppContainer>
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
        <Grid container spacing={3} my={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <RentImageList />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} mt={2}>
            <Typography variant={"caption"} sx={{ fontWeight: 600 }}>
              Rent your place
            </Typography>
            <Typography variant={"h6"} sx={{ fontWeight: 700, marginY: 2 }}>
              One-to-one guidance from a superhost
            </Typography>
            <Typography variant={"caption"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, assumenda et facilis in inventore ipsa maxime neque
              quibusdam rem saepe, suscipit ullam veritatis! Cum fugit nam
              nostrum sint! Distinctio, minus.
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
              onClick={() => router.push("/our-homes/form")}
            >
              Rent your place
            </ColorButton>
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"space-between"} py={5}>
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
