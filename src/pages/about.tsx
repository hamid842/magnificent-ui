// noinspection JSUnusedGlobalSymbols

import Layout from "@/components/Layout";
import Image from "next/image";
import homePagePicture from "../../public/home-page-pic.png";
import {Box, Grid, Typography} from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import Descriptions from "@/components/about/Descriptions";
import Facilities from "@/components/about/Facilities";
import OurServices from "@/components/about/OurServices";


const About = () => {
    return (
        <Layout>
            <Box sx={{textAlign: 'center', position: 'relative'}}>
                <Image
                    src={homePagePicture}
                    alt={'Pic'}
                    sizes="90vw"
                    style={{
                        width: '100%',
                        height: '25vh'
                    }}/>
                <Typography variant={'h3'} sx={{position: 'absolute', bottom: 40, left: 40, color: 'white'}}>About
                    Us</Typography>
            </Box>
            <Box sx={{py: 15, px: 25}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Descriptions DescIcon={<LocalOfferIcon fontSize={'large'}/>} title={'Get best price'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Descriptions DescIcon={<SupportAgentIcon fontSize={'large'}/>}
                                      title={'24/7 Customer service'}/>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                        <Descriptions DescIcon={<LocationCityIcon fontSize={'large'}/>}
                                      title={'Provide best locations'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Descriptions DescIcon={<VrpanoIcon fontSize={'large'}/>} title={'Best Views'}/>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{py: 6, px: 10}}>
                <Facilities/>
            </Box>
            <Box sx={{py: 15, px: 10}}>
                <OurServices />
            </Box>
        </Layout>
    )
}
export default About;