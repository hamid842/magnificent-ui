import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import {Property} from "@/utils/property-type";
import {Box, Button, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {SellOutlined} from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppCarousel from "@/components/last-minute-deals/Carousel";
import GeneralInformation from "@/components/last-minute-deals/GeneralInformation";
import Explanation from "@/components/last-minute-deals/Explanation";
import Features from "@/components/last-minute-deals/Features";


const LivingSpaceItem = () => {
    const router = useRouter();
    const getPropertyFromRouter = router?.query?.propertyItem as string;
    const propertyItem: Property = JSON.parse(getPropertyFromRouter);
    const {attributes} = propertyItem;
    return (
        <Layout>
            <Box px={20}>
                <Typography variant={'h6'}>{attributes?.Title}</Typography>
                <Stack direction={'row'} justifyContent={'space-between'} pb={2}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <LocationOnIcon sx={{color: '#A47C30'}} fontSize={'small'}/>
                        <Typography variant={'caption'}>UAE, Dubai</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Typography variant={'body2'}>28 October - 1 November</Typography>
                        <SellOutlined fontSize={'small'} sx={{color: '#A47C30', ml: 1}}/>
                        <Typography variant={'subtitle1'} sx={{fontWeight: 600}}>{attributes.price} AED</Typography>
                    </Stack>
                </Stack>
                <AppCarousel images={attributes?.images}/>
                <GeneralInformation data={propertyItem}/>
                <Explanation explanation={attributes.explanation}/>
                <Stack alignItems={'center'}>
                    <Button variant={'contained'} size={'small'}
                            sx={{backgroundColor: "#A47C30", width: 150, borderRadius: 2, textTransform: 'none'}}
                    >Confirm Booking</Button>
                </Stack>
                <Features amenities={propertyItem.attributes.amenities}/>
                {/*<Location />*/}
            </Box>
        </Layout>
    )
}
export default LivingSpaceItem;