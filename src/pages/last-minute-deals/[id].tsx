import {useRouter} from "next/router";
import {Property} from "@/utils/property-type";
import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {SellOutlined} from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppCarousel from "@/components/last-minute-deals/Carousel";
import GeneralInformation from "@/components/last-minute-deals/GeneralInformation";
import Explanation from "@/components/global/Explanation";
import Features from "@/components/last-minute-deals/Features";
import BookingCalculationSection from "@/components/last-minute-deals/BookingCalculationSection";
import AccessibleInformation from "@/components/last-minute-deals/AccessibleInformation";
import LocationInformation from "@/components/last-minute-deals/LocationInformation";
import moment from "moment";
import axios from "axios";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";

//============================================================================================
const BASE_URL: string = 'http://localhost:1337/';
const DATE_FORMAT = 'YYYY-MM-DD';

type TCalendarDay = { date: string, isAvailable: 0 | 1 };

/**
 * This function retrieves the list of dates on which the property is not available
 * @returns an array of dates on which the property is not available
 */
const getBlockedDates = async (propertyId: string): Promise<string[]> => {
    let blockedDates: string[] = [];
    // Get calendar data
    const startDate: moment.Moment = moment(new Date()); // Now
    const endDate: moment.Moment = moment(new Date()).add(1, 'year'); // Next Year
    //------------------------------------------------------------------------------------
    const priceRequestURL: URL = new URL(`/api/properties/${propertyId}/calendar`, BASE_URL);
    priceRequestURL.searchParams.set('startDate', startDate.format(DATE_FORMAT));
    priceRequestURL.searchParams.set('endDate', endDate.format(DATE_FORMAT));
    // Just get the calendar dates which are blocked (not available)
    priceRequestURL.searchParams.set('onlyBlocked', 'true');

    try {
        const result = await axios.get(priceRequestURL.toString());
        const { data } = result;
        if (data) {
            // NOTE: Because we are just getting blocked dates from API, we can add all of them to 'blockedDates' array
            blockedDates = data.map((item: TCalendarDay) => item.date);
        }
    } catch (error) {
        console.log(`[ERROR: while retrieving calendar details] ->\n ${error}`); 
    }
    return blockedDates;
}
//============================================================================================

const LivingSpaceItem = () => {
    const router = useRouter();
    const getPropertyFromRouter = router?.query?.propertyItem as string;
    const propertyItem: Property = JSON.parse(getPropertyFromRouter);
    const { attributes } = propertyItem;

    //============================================================================================
    // TODO: The current procedure of handling calendar and blockedDates must change
    const [blockedDates, setBlockedDates] = useState<string[]>([]);
    useEffect(() => {
        (async () => {
            setBlockedDates(
                await getBlockedDates(propertyItem.id)
            );
        })();
    }, []);
    //============================================================================================

    return (
        <>
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
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9} lg={8} >
                        <AppCarousel images={attributes?.images}/>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={4}>
                    <BookingCalculationSection property={propertyItem} blockedDates={blockedDates} />
                    </Grid>
                </Grid>
                <GeneralInformation data={propertyItem}/>
                <Explanation explanation={attributes.explanation}/>
                <Stack alignItems={'center'}>
                    <Button variant={'contained'} size={'small'}
                            sx={{backgroundColor: "#A47C30", width: 150, borderRadius: 2, textTransform: 'none'}}
                    >Confirm Booking</Button>
                </Stack>
                <Features amenities={propertyItem.attributes.amenities}/>
                <LocationInformation />
                <AccessibleInformation />
            </Box>
        </>
    )
}
export default LivingSpaceItem;