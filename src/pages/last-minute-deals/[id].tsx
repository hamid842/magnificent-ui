import {useEffect, useRef, useState} from "react";
// Next.js
import {GetServerSideProps} from "next";
// Material ui
import {Box, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
// Third party
import moment from "moment";
import {ReactElement} from "react-markdown/lib/react-markdown";
// Project imports
import AppCarousel from "@/components/last-minute-deals/Carousel";
import GeneralInformation from "@/components/last-minute-deals/GeneralInformation";
import Explanation from "@/components/global/Explanation";
import Features from "@/components/last-minute-deals/Features";
import BookingCalculationSection from "@/components/last-minute-deals/BookingCalculationSection";
import AccessibleInformation from "@/components/last-minute-deals/AccessibleInformation";
import LocationInformation from "@/components/last-minute-deals/LocationInformation";
import AppContainer from "@/components/global/AppContainer";
import {instance} from "@/config/axiosConfig";
import {DATE_FORMAT, IProperty, TCalendarDay} from "@/utils/property-type";
import Layout from "@/components/global/Layout";
import ReviewsSectionLastMin from "@/components/last-minute-deals/ReviewsSectionLastMin";
import AppIcon from "@/components/global/AppIcon";
import {useTheme} from "@mui/material/styles";
import AppButton from "@/components/global/AppButton";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const response = await instance(`/properties/${query.id}?populate=*`);
    const property = response.data?.data;
    return {
        props: {
            property
        },
    };
};

type LastMinuteDealsProps = {
    property: IProperty;
};

//============================================================================================

/**
 * This function retrieves a list of calendar dates for the property with extra information
 * @returns an array of TCalendarDay objects for every day of the selected range of dates
 */
const getCalendar = async (propertyId: string): Promise<TCalendarDay[]> => {
    let calendar: TCalendarDay[] = [];
    // Get calendar data
    const startDate: moment.Moment = moment(new Date()); // Now
    const endDate: moment.Moment = moment(new Date()).add(1, "year"); // Next Year
    //------------------------------------------------------------------------------------

    try {
        const reqData = {
            startDate: startDate.format(DATE_FORMAT),
            endDate: endDate.format(DATE_FORMAT),
            // onlyBlocked: true // Just get the calendar dates which are blocked (not available)
        };
        const result = await instance.get(`/properties/${propertyId}/calendar`, {
            params: reqData
        });
        const {data} = result;
        if (data) {
            calendar = data;
        }
    } catch (error) {
        console.log(`[ERROR: while retrieving calendar details] ->\n ${error}`);
    }
    return calendar;
};
//============================================================================================

const LivingSpaceItem = ({property}: LastMinuteDealsProps) => {
    const theme = useTheme();
    const ref = useRef<HTMLInputElement>(null)
    const sm = useMediaQuery(theme.breakpoints.down('sm'))
    const {attributes} = property;

    //============================================================================================
    // TODO: The current procedure of handling calendar and blockedDates must change
    const [calendar, setCalendar] = useState<TCalendarDay[]>([]);
    useEffect(() => {
        (async () => {
            setCalendar(await getCalendar(property.id));
        })();
    }, [property.id]);
    //============================================================================================

    return (
        <AppContainer>
            <Box sx={{position: 'relative'}}>
                <Typography variant={"h6"} sx={{mt: 20}}>
                    {attributes?.Title}
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"} pb={2}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <AppIcon name={'location_on'}/>
                        <Typography variant={"caption"}>UAE, Dubai</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"}>
                        <AppIcon name={'sell'}
                        />
                        <Typography variant={"subtitle1"} sx={{fontWeight: 600}}>
                            {attributes.price} AED / night
                        </Typography>
                    </Stack>
                </Stack>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={7.5} lg={7.5}>
                        <AppCarousel images={attributes?.images}/>
                        <GeneralInformation data={property}/>
                        <Features amenities={property.attributes.amenities}/>
                        <Explanation explanation={attributes.explanation}/>
                        <LocationInformation/>
                        <AccessibleInformation/>
                        <ReviewsSectionLastMin propertyReviews={property.attributes.reviews.data}/>
                    </Grid>
                    <Grid item xs={12} sm={4.5} lg={4.5} ref={ref} id={'booking'}>
                        <BookingCalculationSection
                            property={property}
                            calendar={calendar}
                        />
                    </Grid>
                </Grid>
                {sm && <Stack alignItems={'center'} sx={{position: 'sticky', bottom: 10}}>
                    <AppButton
                        label={'Book Now'}
                        onClick={() => {
                            ref.current?.scrollIntoView({behavior: 'smooth'})
                        }}
                    />
                </Stack>}
            </Box>
        </AppContainer>
    );
};
export default LivingSpaceItem;

LivingSpaceItem.getLayout = (page: ReactElement) => <Layout> {page}</Layout>;
