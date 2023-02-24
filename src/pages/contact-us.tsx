// Next.js
import Image from "next/image";
// Material ui
import {Grid, Typography} from "@mui/material";
// Project imports
import manager from "../../public/general-manager.jpg";
import specialist from "../../public/specialist.jpg";
import chief from "../../public/chief.jpg";
import officer from "../../public/officer.jpg";
import sales from "../../public/sales.jpg";
import {ReactElement} from "react";
import Layout from "@/components/global/Layout";
import AppContainer from "@/components/global/AppContainer";
import FirstSection from "@/components/contact/FirstSection";
import SecondSection from "@/components/contact/SecondSection";
import ZoomableImage from "@/components/global/ZoomableImage";

//=========================|| Contact us ||===========================

const ContactUs = () => {
    return (
        <AppContainer>
            <FirstSection/>
            <SecondSection/>
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
                    <Grid container spacing={1.5    }>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={manager}
                                boxHeight={{xs:220,sm:220,md:220,lg:230}}
                                alt={"Pic"}
                                sizes="90vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    boxShadow:
                                        "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                                }}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>Ehsan Pakroo</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                General Manager
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={sales}
                                boxHeight={{xs:220,sm:220,md:220,lg:230}}
                                alt={"Pic"}
                                sizes="90vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    boxShadow:
                                        "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                                }}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>
                                Caitlin Camilleri
                            </Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                Sales & Marketing Manager
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={chief}
                                boxHeight={{xs:220,sm:220,md:220,lg:230}}
                                alt={"Pic"}
                                sizes="90vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    boxShadow:
                                        "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                                }}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>Mahmoud Habib</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                Chief Accountant
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={officer}
                                boxHeight={{xs:220,sm:220,md:220,lg:230}}
                                alt={"Pic"}
                                sizes="90vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    boxShadow:
                                        "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                                }}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>Manish Mohan</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                Operations & Excellence Manager
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={specialist}
                                boxHeight={{xs:220,sm:220,md:220,lg:230}}
                                alt={"Pic"}
                                sizes="90vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    boxShadow:
                                        "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
                                }}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>
                                JHarish Allakonda
                            </Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                Guest Relation Associate
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppContainer>
    );
};
export default ContactUs;

ContactUs.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
