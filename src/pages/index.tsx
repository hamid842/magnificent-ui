import Layout from '@/components/Layout'
import Image from 'next/image';
import homePagePicture from '../../public/home-page-pic.png'
import {Box, Grid, Typography} from "@mui/material";
import SearchDestination from "@/components/SearchDestination";
import SpecialOffers from "@/components/SpecialOffers";
import axios from "axios";
import {Property} from "@/utils/property-type";
import SpecialOffersItem from "@/components/SpecialOffersItem";

const qs = require('qs');
const query = qs.stringify({
    populate: '*',
    fields: ['title'],
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
    properties:Property[]
}

const HomePage = ({properties}:Props) => {
    return (
        <Layout>
            <Box sx={{textAlign: 'center', position: 'relative'}}>
                <Image
                    src={homePagePicture}
                    alt={'Pic'}
                    sizes="90vw"
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
            <Grid container spacing={5} px={20}>
                {!properties?.length ? <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center', py: 10}}>
                    Loading... </Grid> : properties?.map((property: Property) => {
                    return (
                        <Grid key={property.id} item xs={12} sm={6} lg={4}>
                            <SpecialOffersItem data={property}/>
                        </Grid>
                    )
                })}

            </Grid>
        </Layout>
    )
}
export default HomePage;