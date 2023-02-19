import {ReactElement} from "react";
// Material ui
import {Box, Grid, Stack, Typography} from "@mui/material";
// Next.js
import Image from "next/image";
import {useRouter} from "next/router";
// Project imports
import OurPartnership from "@/components/global/OurPartnership";
import RentSlider from "@/components/rent-your-place/RentSlider";
import rentMiddleImage from '../../public/rent-page-middle.png'
import travelPic from '../../public/ship.png';
import cityPic from '../../public/city.png';
import islandPic from '../../public/beach.png';
import explorePic from '../../public/explore.png';
import {ColorButton} from "@/components/global/Header";
import Layout from "@/components/global/Layout";
import AppContainer from "@/components/global/AppContainer";
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";

const RentYourPlace = () => {
    const router = useRouter()

    return (
        <>
            <AppContainer>
                <Grid container spacing={3} mt={15}>
                    <Grid item xs={12} sm={6} lg={5}>
                        <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'}>
                            <EuclidText variant={'h4'} sx={{fontWeight: 600, mt: 12}} text={'Rent it !'}/>
                            <RentSlider/>
                        </Stack>
                        <Box mt={5}>
                            <OurPartnership/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={7}>
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
                                <Image
                                    src={'https://cdn.leonardo.ai/users/2dc5dbea-cfc5-4a04-a311-747595418e49/generations/fc058562-9c90-488e-9c44-6d003fc800ba/Leonardo_Creative_Home_rental_about_us_page_photo_0.jpg'}
                                    width={200} height={200} alt={'Rent'} style={{
                                    background: "transparent",
                                    borderTopLeftRadius: 50,
                                    borderBottomRightRadius: 50,
                                    width: '100%',
                                    height: '100%'
                                }}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} my={5}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Image src={rentMiddleImage} width={400} height={400} alt={'Rent'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Typography variant={'caption'} sx={{fontWeight: 600}}>Rent your place</Typography>
                        <Typography variant={'h6'} sx={{fontWeight: 700, marginY: 2}}>One-to-one guidance from a
                            superhost</Typography>
                        <Typography variant={'caption'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto, assumenda et
                            facilis in inventore ipsa maxime neque quibusdam rem saepe, suscipit ullam veritatis! Cum
                            fugit
                            nam nostrum sint! Distinctio, minus.</Typography>
                        <Grid container my={2}>
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 600}}>100+</Typography>
                                <Typography variant={'caption'} sx={{fontSize: 10, lineHeight: 2}}>Lorem</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 600}}>172</Typography>
                                <Typography variant={'caption'} sx={{fontSize: 10, lineHeight: 2}}>Places</Typography>
                            </Grid>
                            <Grid item xs={6} py={1}>
                                <Typography sx={{fontWeight: 600}}>68</Typography>
                                <Typography variant={'caption'} sx={{fontSize: 10, lineHeight: 2}}>Lorem</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 600}}>32M+</Typography>
                                <Typography variant={'caption'} sx={{fontSize: 10, lineHeight: 2}}>We help to find your
                                    dream place</Typography>
                            </Grid>
                        </Grid>
                        <ColorButton size={'small'} variant={'contained'}
                                     sx={{borderRadius: 25, m: 1, textTransform: "capitalize"}}
                                     onClick={() => router.push('/rent-your-place/form')}>Rent
                            your place</ColorButton>
                    </Grid>
                </Grid>
                <Stack direction={'row'} justifyContent={'space-between'} pb={5}>
                    <Stack direction={'column'} alignItems={'center'} sx={{color: '#A8A7AB'}}>
                        <Image src={travelPic} alt={'Travel'} width={100} height={100}/>
                        <Typography mt={1}>TRAVEL</Typography>
                    </Stack>
                    <Stack direction={'column'} alignItems={'center'} sx={{color: 'gray'}}>
                        <Image src={cityPic} alt={'Travel'} width={100} height={100}/>
                        <Typography mt={1}>CITY TOUR</Typography>
                    </Stack>
                    <Stack direction={'column'} alignItems={'center'} sx={{color: 'gray'}}>
                        <Image src={islandPic} alt={'Travel'} width={100} height={100}/>
                        <Typography mt={1}>ISLAND TOUR</Typography>
                    </Stack>
                    <Stack direction={'column'} alignItems={'center'} sx={{color: 'gray'}}>
                        <Image src={explorePic} alt={'Travel'} width={100} height={100}/>
                        <Typography mt={1}>EXPLORE WORLD</Typography>
                    </Stack>
                </Stack>
            </AppContainer>
        </>
    )
}
export default RentYourPlace;

RentYourPlace.getLayout = (page: ReactElement) =>
    <Layout>{page}</Layout>