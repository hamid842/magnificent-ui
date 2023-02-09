// Next.js
import Image from 'next/image';
import {useRouter} from "next/router";
// Material-ui
import {Box, Button, Container, Grid} from "@mui/material";
// Project imports
import {Property} from "@/utils/property-type";
import SpecialOffersItem from "@/components/SpecialOffersItem";
import ActivityList from "@/components/home/ActivityList";
import SearchDestination from "@/components/SearchDestination";
import RentPlaceSection from "@/components/home/RentPlaceSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import homePagePicture from '../../public/home-page.png';
import {instance} from "@/config/axiosConfig";
import TitleSeparator from "@/components/TitleSeparator";
import AppContainer from "@/components/AppContainer";
import colors from "@/assets/colors";

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
    const {data} = await instance(`/properties?${query}`)
    const properties = data.data;
    return {
        props: {
            properties
        }
    }
}

type Props = {
    properties: Property[]
}

const HomePage = ({properties}: Props) => {
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
                <Grid container spacing={5}>
                    {!properties?.length ? <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center', py: 10}}>
                        Loading... </Grid> : properties?.map((property: Property) => {
                        return (
                            <Grid key={property.id} item xs={12} sm={6} lg={4}>
                                <SpecialOffersItem data={property}/>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                        <Button variant={'contained'}
                                sx={{backgroundColor: colors.mainColor, width: 120, borderRadius: 25, textTransform: 'none'}}
                                onClick={() => router.push('/last-minute-deals')}>See
                            more</Button>
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