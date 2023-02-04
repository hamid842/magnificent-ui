import {Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import homePagePic from '../../../public/home-page-pic.png'
import travelLogo from '../../../public/traveloka.png'
import ticketLogo from '../../../public/ticket.png'
import airbnbLogo from '../../../public/airbnb.png'
import tripLogo from '../../../public/trip.png'

const ActivityList = ()=>{
    return(
        <Grid container pl={8}>
            <Grid item xs={12} sm={6} lg={6}>
                <Typography variant={'h4'}>Spend your</Typography>
                <Typography variant={'h4'}>vacation with our</Typography>
                <Typography variant={'h4'}>activities & places</Typography>
                <Typography variant={'body2'} mt={3} sx={{fontStyle:'italic'}}>The traveller where you can select your</Typography>
                <Typography variant={'body2'} sx={{fontStyle:'italic'}}>desired activity destinations of your</Typography>
                <Typography variant={'body2'} sx={{fontStyle:'italic'}}>choice for vacations.</Typography>
                <Typography variant={'body2'} mt={3} sx={{fontWeight:600}}>ACTIVITY LIST</Typography>
                <Stack direction={'row'} justifyContent={'space-between'} my={2}>
                    <Image src={homePagePic} alt={"Pic"} width={100} height={130}/>
                    <Image src={homePagePic} alt={"Pic"} width={100} height={130}/>
                    <Image src={homePagePic} alt={"Pic"} width={100} height={130}/>
                </Stack>
                <Typography variant={'caption'} sx={{color:'gray'}}>Our Partnership</Typography>
                <Stack direction={'row'} alignItems={'center'} mt={2}>
                    <Image src={travelLogo} alt={"Pic"} width={80} height={30} style={{marginRight:20 , background:'transparent'}}/>
                    <Image src={ticketLogo} alt={"Pic"} width={80} height={20} style={{marginRight:20 , background:'transparent'}}/>
                    <Image src={airbnbLogo} alt={"Pic"} width={80} height={18} style={{marginRight:20 , background:'transparent'}}/>
                    <Image src={tripLogo} alt={"Pic"} width={80} height={20}/>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}></Grid>
        </Grid>
    )
}
export default ActivityList;