import {ChangeEvent, ReactElement, useEffect, useState} from "react";
// Next.js
import {Router, useRouter} from "next/router";
// Material ui
import {Box, Grid, Pagination, Stack, Typography} from "@mui/material";
// Project imports
import FilterDialog from "@/components/our-homes/FilterDialog";
import SortByDropdown from "@/components/our-homes/SortByDropdown";
import SpecialOffersItem from "@/components/global/SpecialOffersItem";
import EuclidText from "@/components/css-texts/EuclidText";
import {IProperty} from "@/utils/property-type";
import {instance} from "@/config/axiosConfig";
import AppContainer from "@/components/global/AppContainer";
import {GetServerSideProps} from "next";
import Layout from "@/components/global/Layout";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const page = query.page || 1;
    const response = await instance(`/properties?populate=*&pagination[page]=${page}&pagination[pageSize]=9`)
    const properties = response.data?.data;
    return {
        props: {
            properties
        }
    }
}

type LastMinuteDealsProps = {
    properties: IProperty[],
}

//======================|| Last Minute Deals ||============================

const OurHomes = ({properties}: LastMinuteDealsProps) => {
    const [isLoading, setLoading] = useState(false);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    const router = useRouter();

    useEffect(() => {
        Router.events.on('routeChangeStart', startLoading);
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, [])


    const paginationHandler = (event: ChangeEvent<unknown>, value: number) => {
        const path = router.pathname
        const query = router.query
        query.page = value.toString()
        router.push({
            pathname: path,
            query: query,
        }).then(() => {
        })
    };


    return (
        <Box mt={16}>
            <EuclidText variant={'h4'} align={'center'} sx={{fontWeight: 700, mb: 5}} text={'Our Homes'}/>
            {/*<SearchDestinationLastMin position={'relative'}/>*/}
            <AppContainer>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={6} sm={6} lg={6}>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                            <FilterDialog/>
                            <Typography>Sort by</Typography>
                            <SortByDropdown/>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={3} pb={8}>
                    {!properties?.length ? <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                        Loading... </Grid> : properties?.map((property: IProperty) => {
                        return (
                            <Grid key={property.id} item xs={12} sm={6} md={4} lg={4}
                                  onClick={() => router.push({
                                      pathname: `/last-minute-deals/${property.id}`,
                                      query: {propertyId: JSON.stringify(property.id)}
                                  }, `/last-minute-deals/${property.id}`)} sx={{cursor: 'pointer'}}>
                                <SpecialOffersItem data={property}/>
                            </Grid>
                        )
                    })}

                </Grid>
                <Stack alignItems={'center'} pb={3}>
                    <Pagination shape="rounded" onChange={paginationHandler} count={2}/>
                </Stack>
            </AppContainer>
        </Box>
    )
}
export default OurHomes;

OurHomes.getLayout = (page: ReactElement) => <Layout>{page}</Layout>