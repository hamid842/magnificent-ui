import {ChangeEvent, useEffect, useState} from "react";
// Next.js
import {Router, useRouter} from "next/router";
// Material ui
import {Button, Grid, Pagination, Stack, Typography} from "@mui/material";
// Project imports
import SearchDestination from "@/components/global/SearchDestination";
import FilterDialog from "@/components/last-minute-deals/FilterDialog";
import SortByDropdown from "@/components/last-minute-deals/SortByDropdown";
import SpecialOffersItem from "@/components/global/SpecialOffersItem";
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import {IPagination, Property} from "@/utils/property-type";
import {instance} from "@/config/axiosConfig";
import AppContainer from "@/components/global/AppContainer";

const qs = require('qs');
const query = qs.stringify({
    populate: '*',
    pagination: {
        pageSize: 9,
        page: 1,
    }
});

export async function getServerSideProps() {
    const response = await instance(`/properties?${query}`)
    const properties = response.data?.data;
    const pagination = response.data.meta.pagination;
    return {
        props: {
            properties,
            pagination
        }
    }
}

type Props = {
    properties: Property[],
    pagination:IPagination
}

//======================|| Last Minute Deals ||============================

const LastMinuteDeals = ({properties,pagination}: Props) => {
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

        const currentPath = router.pathname;
        const currentQuery:any = router.query;
        currentQuery.page =value;
        console.log("Current query",currentQuery)

        router.push({
            pathname: currentPath,
            query: currentQuery,
        }).then(() =>{});

    };


    return (
        <>
            <EuclidText variant={'h4'} py={10} align={'center'} sx={{fontWeight: 700}} text={'Last Minute Deals'}/>
            <SearchDestination position={'relative'}/>
            <AppContainer>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={6} sm={6} lg={6}>
                        <Button variant={"outlined"} sx={{
                            border: "solid 1px #A47C30",
                            color: colors.mainColor,
                            borderRadius: 2,
                            textTransform: 'none'
                        }}>Show on map</Button>
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
                        Loading... </Grid> : properties?.map((property: Property) => {
                        return (
                            <Grid key={property.id} item xs={12} sm={6} md={4} lg={4}
                                  onClick={() => router.push({
                                      pathname: `/last-minute-deals/${property.id}`,
                                      query: {propertyItem: JSON.stringify(property)}
                                  }, `/last-minute-deals/${property.id}`)} sx={{cursor: 'pointer'}}>
                                <SpecialOffersItem data={property}/>
                            </Grid>
                        )
                    })}

                </Grid>
                <Stack alignItems={'center'} pb={8}>
                    <Pagination shape="rounded" onChange={paginationHandler} count={2}/>
                </Stack>
            </AppContainer>
        </>
    )
}
export default LastMinuteDeals;