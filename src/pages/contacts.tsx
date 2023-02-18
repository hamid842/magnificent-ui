// Next.js
import Image from "next/image";
// Material ui
import {Box, Grid, Typography} from "@mui/material";
// Project imports
import homePagePicture from "../../public/home-page-pic.png";
import manager from "../../public/general-manager.jpg";
import specialist from "../../public/specialist.jpg";
import chief from "../../public/chief.jpg";
import officer from "../../public/officer.jpg";
import sales from "../../public/sales.jpg";
import {ReactElement} from "react";
import Layout from "@/components/global/Layout";
import AppContainer from "@/components/global/AppContainer";
import colors from "@/assets/colors";
import rentImage from "../../public/8/8-2-1.jpg";

//=========================|| Contact us ||===========================

const Contacts = () => {
    return (
        <AppContainer>
            <Grid container spacing={2} mt={20}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography variant={"h4"} sx={{fontWeight: 700}}>
                        Contact Us
                    </Typography>
                    <Typography sx={{textAlign: "justify"}}>
                        <p>
                            We offer full-service ultra-luxury vacation rentals that deliver
                            the highest standard of excellence and unforgettable experiences
                            in Dubai to all travelers who wish to be cocooned in luxury. We
                            take the concept of ‘a home away from home’ quite literally. Each
                            vacation house is hand-picked, meticulously furnished, and
                            elegantly designed with unrivaled amenities and impeccable service
                            to exceed the expectations of even the most discerning guests.
                        </p>
                        <p>
                            Reinventing luxury is what we do here at ‘Magnificent properties’;
                            we know how to make high-end chic home rentals work as exciting
                            go-to holiday destinations.
                        </p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{
                        p: 2,
                        width: '100%',
                        height: '100%',
                        backgroundColor: colors.mainColor,
                        borderTopLeftRadius: 50,
                        boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
                    }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 50,
                        }}>
                            <Image src={homePagePicture} alt={"Pic"} width={400}
                                   style={{
                                       background: "transparent",
                                       borderTopLeftRadius: 50,
                                       borderBottomRightRadius: 50,
                                       width: '100%',
                                       height:'100%'
                                   }}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={5}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography
                        variant={"h4"}
                        textAlign={"center"}
                        sx={{fontWeight: 700}}
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
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
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
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
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
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
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
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
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
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                John Doe
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppContainer>

    );
};
export default Contacts;

Contacts.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
