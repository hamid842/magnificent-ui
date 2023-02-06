import {Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import homePagePic from '../../../public/home-page-pic.png'
import OurPartnership from "@/components/OurPartnership";

const ActivityList = () => {
    return (
        <Grid container pl={8}>
            <Grid item xs={12} sm={6} lg={6}>
                <Typography variant={'h4'}>Spend your</Typography>
                <Typography variant={'h4'}>vacation with our</Typography>
                <Typography variant={'h4'}>activities & places</Typography>
                <Typography variant={'body2'} mt={3} sx={{fontStyle: 'italic'}}>The traveller where you can select
                    your</Typography>
                <Typography variant={'body2'} sx={{fontStyle: 'italic'}}>desired activity destinations of
                    your</Typography>
                <Typography variant={'body2'} sx={{fontStyle: 'italic'}}>choice for vacations.</Typography>
                <Typography variant={'body2'} mt={3} sx={{fontWeight: 600}}>ACTIVITY LIST</Typography>
                <Stack direction={'row'} justifyContent={'space-between'} my={2}>
                    <Image src={homePagePic} alt={"Pic"} width={100} height={130}/>
                    <Image src={homePagePic} alt={"Pic"} width={100} height={130}/>
                    <Image src={homePagePic} alt={"Pic"} width={100} height={130}/>
                </Stack>
                <OurPartnership/>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}></Grid>
        </Grid>
    )
}
export default ActivityList;