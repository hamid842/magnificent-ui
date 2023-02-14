// Next.js
import Image from "next/image";
// Material ui
import { Box, Grid, Stack, Typography } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
// Project imports
import homePagePicture from "../../public/home-page-pic.png";
import manager from "../../public/general-manager.jpg";
import specialist from "../../public/specialist.jpg";
import chief from "../../public/chief.jpg";
import officer from "../../public/officer.jpg";
import sales from "../../public/sales.jpg";
import { ReactElement } from "react";
import Layout from "@/components/global/Layout";
import HomePage from "@/pages/index";

//=========================|| Contact us ||===========================

const Contacts = () => {
  return (
    <>
      {/*<Box sx={{textAlign: 'center', position: 'relative'}}>*/}
      {/*    <Image*/}
      {/*        src={homePagePicture}*/}
      {/*        alt={'Pic'}*/}
      {/*        sizes="90vw"*/}
      {/*        style={{*/}
      {/*            width: '100%',*/}
      {/*            height: 250*/}
      {/*        }}/>*/}
      {/*    <Typography variant={'h3'} sx={{position: 'absolute', bottom: 30, left: 40, color: 'white'}}>Contact*/}
      {/*        Us</Typography>*/}
      {/*</Box>*/}
      <Grid container px={20} py={10} spacing={5} pt={20}>
        <Grid item xs={12} sm={12} lg={8}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            About Us
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            <p>
              We offer full-service ultra-luxury vacation rentals that deliver
              the highest standard of excellence and unforgettable experiences
              in Dubai to all travelers who wish to be cocooned in luxury. We
              take the concept of ‘a home away from home’ quite literally. Each
              vacation house is hand-picked, meticulously furnished, and
              elegantly designed with unrivaled amenities and impeccable service
              to exceed the expectations of even the most discerning guests.
            </p>
            <p></p>
            <p>
              Reinventing luxury is what we do here at ‘Magnificent properties’;
              we know how to make high-end chic home rentals work as exciting
              go-to holiday destinations.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Image
            src={homePagePicture}
            alt={"Pic"}
            style={{
              width: "100%",
              height: "50vh",
              boxShadow:
                "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
            }}
          />
        </Grid>
      </Grid>
      <Grid container px={20} py={10} spacing={5}>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography
            variant={"h4"}
            textAlign={"center"}
            sx={{ fontWeight: 700 }}
          >
            Our team
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} lg={2.4}>
              <Image
                src={manager}
                alt={"Pic"}
                sizes="90vw"
                style={{
                  width: "100%",
                  height: "80%",
                  boxShadow:
                    "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                }}
              />
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant={"caption"} sx={{ color: "gray" }}>
                John Doe
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2.4}>
              <Image
                src={sales}
                alt={"Pic"}
                sizes="90vw"
                style={{
                  width: "100%",
                  height: "80%",
                  boxShadow:
                    "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                }}
              />
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant={"caption"} sx={{ color: "gray" }}>
                John Doe
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2.4}>
              <Image
                src={chief}
                alt={"Pic"}
                sizes="90vw"
                style={{
                  width: "100%",
                  height: "80%",
                  boxShadow:
                    "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                }}
              />
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant={"caption"} sx={{ color: "gray" }}>
                John Doe
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2.4}>
              <Image
                src={officer}
                alt={"Pic"}
                sizes="90vw"
                style={{
                  width: "100%",
                  height: "80%",
                  boxShadow:
                    "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                }}
              />
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant={"caption"} sx={{ color: "gray" }}>
                John Doe
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2.4}>
              <Image
                src={specialist}
                alt={"Pic"}
                sizes="90vw"
                style={{
                  width: "100%",
                  height: "80%",
                  boxShadow:
                    "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                }}
              />
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant={"caption"} sx={{ color: "gray" }}>
                John Doe
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Contacts;

Contacts.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
