import {Box, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import rentImage from '../../public/rent-main.png'
import OurPartnership from "@/components/OurPartnership";
import RentSlider from "@/components/rent-your-place/RentSlider";

const RentYourPlace = () => {
    return (
        <>
            <Grid container spacing={5} pl={5}>
                <Grid item xs={12} sm={6} lg={5}>
                    <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant={'h4'} sx={{fontWeight: 600, mt: 12}}>Rent it !</Typography>
                        <Box>
                            <Typography sx={{mt: 2}}>You could earn</Typography>
                            <Typography align={'center'}>$1.200 USD</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{mt: 2}}>7 nights at an estimated $218</Typography>
                            <Typography align={'center'}>USD a night</Typography>
                        </Box>
                        <RentSlider/>
                    </Stack>
                    <Box mt={5}>
                        <OurPartnership/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={7} sx={{textAlign: 'right'}}>
                    <Image src={rentImage} width={600} height={500} alt={'Rent'}/>
                </Grid>
            </Grid>
        </>
    )
}
export default RentYourPlace;