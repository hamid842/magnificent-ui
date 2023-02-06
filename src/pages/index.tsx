import Image from 'next/image';
import homePagePicture from '../../public/home-page-pic.png'
import {Box, Button, Grid, Typography} from "@mui/material";
import SearchDestination from "@/components/SearchDestination";
import axios from "axios";
import {Property} from "@/utils/property-type";
import SpecialOffersItem from "@/components/SpecialOffersItem";
import {useRouter} from "next/router";
import ActivityList from "@/components/home/ActivityList";
import RentPlaceSection from "@/components/home/RentPlaceSection";
import ReviewsSection from "@/components/home/ReviewsSection";

const qs = require('qs');
const query = qs.stringify({
    populate: '*',
    pagination: {
        pageSize: 3,
        page: 1,
    }
}, {
    encodeValuesOnly: true, // prettify URL
});

export async function getServerSideProps() {
    const {data} = await axios(`http://localhost:1337/api/properties?${query}`)
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
                        width: '90%',
                        height: '75vh',
                        left: '90px',
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                    }}/>
                <SearchDestination position={'absolute'}/>
                <Typography variant={'h3'} sx={{paddingY: 9}}>Special Offers</Typography>
            </Box>
            <Grid container spacing={5} px={20} pb={10}>
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
                            sx={{backgroundColor: "#A47C30", width: 120, borderRadius: 25, textTransform: 'none'}}
                            onClick={() => router.push('/last-minute-deals')}>See
                        more</Button>
                </Grid>
            </Grid>
            <Box mt={8} sx={{textAlign:'center'}} px={5} mb={3}>
                <div style={{
                    height: 1,
                    background: "repeating-linear-gradient(to right,transparent,transparent 10px,gray 10px,gray 20px)",
                    width: '100%',
                }}/>
            </Box>
            <ActivityList />
            <RentPlaceSection />
            <ReviewsSection />
        </>
    )
}
export default HomePage;