// Next.js
import Image from 'next/image';
import {useRouter} from "next/router";
// Material-ui
import {Box, Button, Container, Grid} from "@mui/material";
// Project imports
import {Property} from "@/utils/property-type";
import SpecialOffersItem from "@/components/global/SpecialOffersItem";
import ActivityList from "@/components/home/ActivityList";
import SearchDestination from "@/components/global/SearchDestination";
import RentPlaceSection from "@/components/home/RentPlaceSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import homePagePicture from '../../public/home-page.png';
import {instance} from "@/config/axiosConfig";
import TitleSeparator from "@/components/global/TitleSeparator";
import AppContainer from "@/components/global/AppContainer";
import colors from "@/assets/colors";
import AppButton from "@/components/global/AppButton";

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
    console.log("HOme page data fetched",data)
    return {
        props: {
            properties
        }
    }
}

type HomePageProps = {
    properties: Property[]
}

const HomePage = ({properties}: HomePageProps) => {
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
                        Loading... </Grid> : properties?.map((property: Property) => {
                        return (
                            <Grid key={property.id} item xs={12} sm={6} md={4} lg={4}>
                                <SpecialOffersItem data={property}/>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                        <AppButton label={'See more'} sx={{width: 120,mt:2}} onClick={() => router.push('/last-minute-deals')}/>
                    </Grid>
                </Grid>
                <ActivityList/>
                <RentPlaceSection/>
                <ReviewsSection/>
            </AppContainer>
        </>
    )
}
export default HomePage;