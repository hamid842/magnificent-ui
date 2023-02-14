// Next.js
// noinspection JSUnusedGlobalSymbols
import Image from "next/image";
// Material ui
import {Box, Grid, Paper, Stack} from "@mui/material";
import AddchartIcon from '@mui/icons-material/Addchart';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
// Project imports
import homePagePicture from "../../public/home-page-pic.png";
import EuclidText from "@/components/css-texts/EuclidText";
import AppContainer from "@/components/global/AppContainer";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../dictionaries/en.json';
import TitleSeparator from "@/components/global/TitleSeparator";
import colors from "@/assets/colors";
import {ReactElement} from "react";
import Layout from "@/components/global/Layout";
import HomePage from "@/pages/index";

//=========================|| About us ||===========================

const About = () => {

    const paperStyles = {
        p: 1,
        width: '100%',
        height: 220,
        borderRadius: 5
    }
    const iconStyles = {
        color: colors.mainColor,
        fontSize: 50,
        my: 1
    }
    const contentStyle = {
        fontSize: 12,
        color: 'gray',
        my: 2,
        width: '90%',
        textTransform: 'justify'
    }

    return (
        <>
            <Box sx={{textAlign: 'center', position: 'relative'}}>
                <Image
                    src={homePagePicture}
                    alt={'Pic'}
                    sizes="90vw"
                    style={{
                        width: '100%',
                        height: 250
                    }}/>
                <EuclidText variant={'h3'} sx={{position: 'absolute', bottom: 30, left: 40, color: 'white'}}
                            text={'About Us'}/>
            </Box>
            <AppContainer>
                <TitleSeparator separatorTitle={'Your Trusted Property Manager'}
                                title={'Why Homeowners Choose Magnificent Properties?'}/>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={2} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText variant={'subtitle1'} text={'Your rental income amplified'}
                                            sx={{fontWeight: 700}}/>
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.income}
                                             sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
                                <CameraOutdoorIcon sx={iconStyles}/>
                                <EuclidText text={'Your home is in safe hands'} sx={{fontWeight: 700}}/>
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.safe}
                                             sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
                                <OtherHousesRoundedIcon sx={iconStyles}/>
                                <EuclidText text={'Flexible Lease'} sx={{fontWeight: 700}}/>
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.flexible}
                                             sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
                <TitleSeparator separatorTitle={'Holiday Homes in Dubai'}
                                title={'Embrace The Grandeur'}/>
            </AppContainer>
        </>
    )
}
export default About;

About.getLayout = (page:ReactElement)=><Layout>{page}</Layout>