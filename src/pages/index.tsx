import {ReactElement} from "react";
// Next.js
import Image from 'next/image';
import {useRouter} from "next/router";
// Material-ui
import {Box, Grid} from "@mui/material";
// Project imports
import {IProperty, IReview} from "@/utils/property-type";
import SpecialOffersItem from "@/components/global/SpecialOffersItem";
import ActivityList from "@/components/home/ActivityList";
import SearchDestination from "@/components/global/SearchDestination";
import RentPlaceSection from "@/components/home/RentPlaceSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import homePagePicture from '../../public/home-page.png';
import {instance} from "@/config/axiosConfig";
import TitleSeparator from "@/components/global/TitleSeparator";
import AppContainer from "@/components/global/AppContainer";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/global/Layout";

const qs = require('qs');
const query = qs.stringify({
    populate: '*',
    pagination: {
        pageSize: 3,
        page: 1,
    }
}, {
    encodeValuesOnly: true
});

export async function getServerSideProps() {
    const {data} = await instance.get(`/properties?${query}`)
    const properties = data.data;
    // TODO: Remove limit later (when horizontal scrolling is added)
    const reviewsResponse = await instance.get(`/reviews?filters[inHomePage][$eq]=true&pagination[limit]=3`);
    const reviews = reviewsResponse.data.data;
    return {
        props: {
            properties,
            reviews
        }
    }
}

type HomePageProps = {
    properties: IProperty[],
    reviews: IReview[]
}

const HomePage = ({properties, reviews}: HomePageProps) => {
    const router = useRouter();


    return (
        <>
            <Box sx={{textAlign: 'center', position: 'relative'}}>
                <Image
                    src={homePagePicture}
                    alt={'Pic'}
                    sizes="90vw"
                    priority
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover'
                    }}
                />
                <SearchDestination position={'absolute'}/>
            </Box>
            <AppContainer>
                <TitleSeparator separatorTitle={'Get our'} title={'Special Offers'}/>
                <Grid container spacing={3}>
                    {!properties?.length ? <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center', py: 10}}>
                        Loading... </Grid> : properties?.map((property: IProperty) => {
                        return (
                            <Grid key={property.id} item xs={12} sm={6} md={4} lg={4}>
                                <SpecialOffersItem data={property}/>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                        <AppButton label={'See more'}
                                   onClick={() => router.push('/last-minute-deals')}/>
                    </Grid>
                </Grid>
                <ActivityList/>
                <RentPlaceSection/>
                { (reviews && reviews.length) && <ReviewsSection reviews={reviews} />}
            </AppContainer>
        </>
    )
}
export default HomePage;

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>