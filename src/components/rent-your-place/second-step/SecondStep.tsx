import {Container, Grid, Paper, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GeneralInfoTitleAndValue from "@/components/global/GeneralInfoTitleAndValue";
import Explanation from "@/components/global/Explanation";
import AdvertiseFeatures from "@/components/rent-your-place/first-step/AdvertiseFeatures";

const SecondStep = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{p: 2}}>
                <Typography variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}}>Rent Information</Typography>
                <Stack direction={'row'} alignItems={'center'}>
                    <LocationOnIcon fontSize={'small'} sx={{color: '#FECD4C'}}/>
                    <Typography variant={'caption'} sx={{color: 'gray', fontSize: 10}}>Dubai, UAE</Typography>
                </Stack>
                <Typography variant={'body2'} sx={{fontWeight: 600, mt: 1, fontSize: 12}}>General
                    Information (Title here)</Typography>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={6}>
                        <GeneralInfoTitleAndValue title={'Information No.'} value={'1234'}/>
                        <GeneralInfoTitleAndValue title={'Published Date'} value={'2 January 2023'}/>
                        <GeneralInfoTitleAndValue title={'Advertise Status'} value={'Creating'}/>
                        <GeneralInfoTitleAndValue title={'Housing Shape'} value={'Apartment'}/>
                        <GeneralInfoTitleAndValue title={'Rooms + Living Number'} value={'3 + 1'}/>
                        <GeneralInfoTitleAndValue title={'Square Meters'} value={'150 M2'}/>
                        <GeneralInfoTitleAndValue title={'Building Age'} value={'10'}/>
                        <GeneralInfoTitleAndValue title={'Floor location'} value={'3'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <GeneralInfoTitleAndValue title={'Price'} value={'3000 AED'}/>
                        <GeneralInfoTitleAndValue title={'Person Capacity'} value={'2 persons'}/>
                        <GeneralInfoTitleAndValue title={'Bedrooms Number'} value={'3'}/>
                        <GeneralInfoTitleAndValue title={'Beds Number'} value={'3'}/>
                        <GeneralInfoTitleAndValue title={'Bathrooms Number'} value={'3'}/>
                        <GeneralInfoTitleAndValue title={'Minimum Nights'} value={'1'}/>
                        <GeneralInfoTitleAndValue title={'Maximum Nights'} value={'14'}/>
                        <GeneralInfoTitleAndValue title={'Floor location'} value={'3'}/>
                    </Grid>
                </Grid>
            </Paper>
            <Explanation
                explanation={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque fugit labore optio! Aperiam aspernatur illum laudantium, quia temporibus velit? Aliquid at laudantium nihil nisi quod reprehenderit sunt velit voluptatibus?'}/>
        <AdvertiseFeatures />
        </Container>
    )
}
export default SecondStep;