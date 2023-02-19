// Next.js
// Material ui
// noinspection JSUnusedGlobalSymbols
import {Grid, Paper, Stack, Typography} from "@mui/material";
import AddchartIcon from '@mui/icons-material/Addchart';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import AppContainer from "@/components/global/AppContainer";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../dictionaries/en.json';
import TitleSeparator from "@/components/global/TitleSeparator";
import colors from "@/assets/colors";
import {ReactElement} from "react";
import Layout from "@/components/global/Layout";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

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
            <AppContainer>
                <TitleSeparator separatorTitle={'Your Trusted Property Manager'}
                                title={'Why Homeowners Choose Magnificent Properties?'} pt={20}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
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
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
                                <CameraOutdoorIcon sx={iconStyles}/>
                                <EuclidText text={'Your home is in safe hands'} sx={{fontWeight: 700}}/>
                                <SwitzerText variant={'caption'} align={'center'} text={dictionaries.aboutUs.safe}
                                             sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
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

                <TitleSeparator separatorTitle={'Why choose us?'}
                                title={'These popular destinations have a lot to offer?'}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Paper elevation={3} sx={{p: 1, borderRadius: 5}}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <VerifiedUserOutlinedIcon sx={{color: "#A47C30", fontSize: 100}}/>
                                <Typography variant={'subtitle1'} sx={{fontWeight: 600, py: 2}}>Best Price
                                    Guarantee</Typography>
                                <Typography variant={'body2'} align={'center'}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Ab at consectetur consequatur corporis, cum dolorum et ex illo illum,
                                    in, obcaecati odio quaerat quisquam rem velit. Ex reprehenderit sequi
                                    voluptatum!</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Paper elevation={3} sx={{p: 1, borderRadius: 5}}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <ScheduleSendOutlinedIcon sx={{color: "#A47C30", fontSize: 100}}/>
                                <Typography variant={'subtitle1'} sx={{fontWeight: 600, py: 2}}>Best Price
                                    Guarantee</Typography>
                                <Typography variant={'body2'} align={'center'}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Ab at consectetur consequatur corporis, cum dolorum et ex illo illum,
                                    in, obcaecati odio quaerat quisquam rem velit. Ex reprehenderit sequi
                                    voluptatum!</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Paper elevation={3} sx={{p: 1, borderRadius: 5}}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <SupportAgentOutlinedIcon sx={{color: "#A47C30", fontSize: 100}}/>
                                <Typography variant={'subtitle1'} sx={{fontWeight: 600, py: 2}}>Customer Service
                                    24h/7d</Typography>
                                <Typography variant={'body2'} align={'center'}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Ab at consectetur consequatur corporis, cum dolorum et ex illo illum,
                                    in, obcaecati odio quaerat quisquam rem velit. Ex reprehenderit sequi
                                    voluptatum!</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
                <TitleSeparator separatorTitle={'Holiday Homes in Dubai'} title={'Embrace The Grandeur'}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText text={'ENJOY MORE SPACE'} sx={{fontWeight: 700}}/>
                                <SwitzerText align={'center'}
                                             text={'Why book a room when you can enjoy full kitchens, laundry, pools, yards and more?'}
                                             sx={contentStyle}/>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText text={'LUXURIOUS ACCOMMODATIONS'} sx={{fontWeight: 700}}/>
                                <SwitzerText align={'center'}
                                             text={'Fully furnished and well-outfitted by high-end designers, our homes exude luxury and opulence.'}
                                             sx={contentStyle}/>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText text={'LIVE LIKE A LOCAL'} sx={{fontWeight: 700}}/>
                                <SwitzerText align={'center'}
                                             text={'Enjoy local neighborhoods and experience shopping, food, entertainment and much more.'}
                                             sx={contentStyle}/>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText text={'WE’RE SECURE'} sx={{fontWeight: 700}}/>
                                <SwitzerText align={'center'}
                                             text={'Our holiday homes are located in secured and private communities with 24/7 security surveillance.'}
                                             sx={contentStyle}/>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText text={'A HOME AWAY FROM HOME'} sx={{fontWeight: 700}}/>
                                <SwitzerText align={'center'}
                                             text={'Warmth and comfort of a fully-furnished home, with all the amenities of a 5-star hotel.'}
                                             sx={contentStyle}/>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper elevation={3} sx={paperStyles}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <AddchartIcon sx={iconStyles}/>
                                <EuclidText text={'PRIME LOCATION'} sx={{fontWeight: 700}}/>
                                <SwitzerText align={'center'}
                                             text={'Live in thriving Downtown Dubai and get to be in the midst of all the action and entertainment.'}
                                             sx={contentStyle}/>
                            </Stack>

                        </Paper>
                    </Grid>
                </Grid>
            </AppContainer>
        </>
    )
}
export default About;

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>