import {ReactElement} from "react";
// Next.js
import dynamic from "next/dynamic";
// Material ui
import {Grid, Typography} from "@mui/material";
// Project imports
import manager from "../../public/contact-us/general-manager.jpg";
import specialist from "../../public/contact-us/specialist.jpg";
import chief from "../../public/contact-us/chief.jpg";
import officer from "../../public/contact-us/officer.jpg";
import sales from "../../public/contact-us/sales.jpg";

const Layout = dynamic(() => import("@/components/global/Layout"))
const AppContainer = dynamic(() => import("@/components/global/AppContainer"))
const FirstSection = dynamic(() => import("@/components/contact/FirstSection"))
const SecondSection = dynamic(() => import("@/components/contact/SecondSection"))
const ZoomableImage = dynamic(() => import("@/components/global/ZoomableImage"))

//=========================|| Contact us ||===========================

const ContactUs = () => {

    const imageStyles = {
        width: "100%",
        height: "auto",
        borderRadius: 5,
        boxShadow:
            "rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px",
    }

    const boxHeight = {xs: 400, sm: 350, md: 220, lg: 230}
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
                    <Grid container spacing={1.5}>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={manager}
                                boxHeight={boxHeight}
                                alt={"Pic"}
                                sizes="90vw"
                                style={imageStyles}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>Ehsan Pakroo</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                General Manager
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={sales}
                                boxHeight={boxHeight}
                                alt={"Pic"}
                                sizes="90vw"
                                style={imageStyles}
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
                                boxHeight={boxHeight}
                                alt={"Pic"}
                                sizes="90vw"
                                style={imageStyles}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>Mahmoud Habib</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                Chief Accountant
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={officer}
                                boxHeight={boxHeight}
                                alt={"Pic"}
                                sizes="90vw"
                                style={imageStyles}
                            />
                            <Typography sx={{fontWeight: 600}} mt={2}>Manish Mohan</Typography>
                            <Typography variant={"caption"} sx={{color: "gray"}}>
                                Operations & Excellence Manager
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2.4} lg={2.4}>
                            <ZoomableImage
                                src={specialist}
                                boxHeight={boxHeight}
                                alt={"Pic"}
                                sizes="90vw"
                                style={imageStyles}
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
