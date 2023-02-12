// noinspection JSUnusedGlobalSymbols

import Image from "next/image";
import homePagePicture from "../../public/home-page-pic.png";
import {Box, Grid, Paper, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import AppContainer from "@/components/global/AppContainer";
import AddchartIcon from '@mui/icons-material/Addchart';
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../dictionaries/en.json';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import TitleSeparator from "@/components/global/TitleSeparator";
import colors from "@/assets/colors";


const About = () => {

    const paperStyles = {
        p: 1,
        width: '100%',
        height: 220,
        borderRadius:5
    }
    const iconStyles = {
        color: colors.mainColor,
        fontSize: 50,
        my:1
    }
    const contentStyle = {
        fontSize: 12,
        color:'gray',
        my:2,
        width: '90%',
        textTransform:'justify'
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
            {/*<Box sx={{py: 15, px: 25}}>*/}
            {/*    <Grid container spacing={5}>*/}
            {/*        <Grid item xs={12} sm={6} lg={3}>*/}
            {/*            <Descriptions DescIcon={<LocalOfferIcon fontSize={'large'}/>} title={'Get best price'}/>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={12} sm={6} lg={3}>*/}
            {/*            <Descriptions DescIcon={<SupportAgentIcon fontSize={'large'}/>}*/}
            {/*                          title={'24/7 Customer service'}/>*/}
            {/*        </Grid>*/}

            {/*        <Grid item xs={12} sm={6} lg={3}>*/}
            {/*            <Descriptions DescIcon={<LocationCityIcon fontSize={'large'}/>}*/}
            {/*                          title={'Provide best locations'}/>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={12} sm={6} lg={3}>*/}
            {/*            <Descriptions DescIcon={<VrpanoIcon fontSize={'large'}/>} title={'Best Views'}/>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Box>*/}
            {/*<Box sx={{py: 6, px: 10}}>*/}
            {/*    <Facilities/>*/}
            {/*</Box>*/}
            {/*<Box sx={{py: 15, px: 10}}>*/}
            {/*    <OurServices/>*/}
            {/*</Box>*/}
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
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.income} sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
                                <CameraOutdoorIcon sx={iconStyles}/>
                                <EuclidText text={'Your home is in safe hands'} sx={{fontWeight: 700}}/>
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.safe} sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
                                <OtherHousesRoundedIcon sx={iconStyles}/>
                                <EuclidText text={'Flexible Lease'} sx={{fontWeight: 700}}/>
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.flexible} sx={contentStyle}/>
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