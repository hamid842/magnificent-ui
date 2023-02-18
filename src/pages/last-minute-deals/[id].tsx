import { useEffect, useState } from "react";
// Next.js
import { GetServerSideProps } from "next";
// Material ui
import { Grid, Stack, Typography } from "@mui/material";
// Third party
import moment from "moment";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Project imports
import AppCarousel from "@/components/last-minute-deals/Carousel";
import GeneralInformation from "@/components/last-minute-deals/GeneralInformation";
import Explanation from "@/components/global/Explanation";
import Features from "@/components/last-minute-deals/Features";
import BookingCalculationSection from "@/components/last-minute-deals/BookingCalculationSection";
import AccessibleInformation from "@/components/last-minute-deals/AccessibleInformation";
import LocationInformation from "@/components/last-minute-deals/LocationInformation";
import AppContainer from "@/components/global/AppContainer";
import { instance } from "@/config/axiosConfig";
import { DATE_FORMAT, IProperty } from "@/utils/property-type";
import colors from "@/assets/colors";
import { ReactElement } from "react-markdown/lib/react-markdown";
import Layout from "@/components/global/Layout";
import ReviewsSectionLastMin from "@/components/last-minute-deals/ReviewsSectionLastMin";
import AppIcon from "@/components/global/AppIcon";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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

type TCalendarDay = { date: string; isAvailable: 0 | 1 };

/**
 * This function retrieves the list of dates on which the property is not available
 * @returns an array of dates on which the property is not available
 */
const getBlockedDates = async (propertyId: string): Promise<string[]> => {
  let blockedDates: string[] = [];
  // Get calendar data
  const startDate: moment.Moment = moment(new Date()); // Now
  const endDate: moment.Moment = moment(new Date()).add(1, "year"); // Next Year
  //------------------------------------------------------------------------------------

  try {
    const reqData = {
      startDate: startDate.format(DATE_FORMAT),
      endDate: endDate.format(DATE_FORMAT),
      onlyBlocked: true // Just get the calendar dates which are blocked (not available)
    };
    const result = await instance.get(`/properties/${propertyId}/calendar`, {
      params: reqData
    });
    const { data } = result;
    if (data) {
      // NOTE: Because we are just getting blocked dates from API, we can add all of them to 'blockedDates' array
      blockedDates = data.map((item: TCalendarDay) => item.date);
    }
  } catch (error) {
    console.log(`[ERROR: while retrieving calendar details] ->\n ${error}`);
  }
  return blockedDates;
};
//============================================================================================

const LivingSpaceItem = ({ property }: LastMinuteDealsProps) => {
  const { attributes } = property;

  //============================================================================================
  // TODO: The current procedure of handling calendar and blockedDates must change
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      setBlockedDates(await getBlockedDates(property.id));
    })();
  }, []);
  //============================================================================================

  return (
    <AppContainer>
      <Typography variant={"h6"} sx={{ mt: 20 }}>
        {attributes?.Title}
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"} pb={2}>
        <Stack direction={"row"} alignItems={"center"}>
          <AppIcon name={'location_on'} />
          <Typography variant={"caption"}>UAE, Dubai</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <AppIcon name={'sell'}
          />
          <Typography variant={"subtitle1"} sx={{ fontWeight: 600 }}>
            {attributes.price} AED / night
          </Typography>
        </Stack>
      </Stack>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7.5} lg={7.5}>
          <AppCarousel images={attributes?.images} />
          <GeneralInformation data={property} />
          <Features amenities={property.attributes.amenities} />
          <Explanation explanation={attributes.explanation} />
          <LocationInformation />
          <AccessibleInformation />
          <ReviewsSectionLastMin reviews={property.attributes.reviews.data}/>
        </Grid>
        <Grid item xs={12} sm={4.5} lg={4.5}>
          <BookingCalculationSection
            property={property}
            blockedDates={blockedDates}
          />
        </Grid>
      </Grid>
    </AppContainer>
  );
};
export default LivingSpaceItem;

LivingSpaceItem.getLayout = (page: ReactElement) => <Layout> {page}</Layout>;
