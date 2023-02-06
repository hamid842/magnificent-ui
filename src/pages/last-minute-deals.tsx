import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import SearchDestination from "@/components/SearchDestination";
import FilterDialog from "@/components/last-minute-deals/FilterDialog";
import SortByDropdown from "@/components/last-minute-deals/SortByDropdown";
import axios from "axios";
import SpecialOffersItem from "@/components/SpecialOffersItem";
import {Property} from "@/utils/property-type";
import {useRouter} from "next/router";

export async function getServerSideProps() {
    const {data} = await axios('http://localhost:1337/api/properties?populate=*')
    const properties = data.data;
    return {
        props: {
            properties
        }
    }
}

type Props = {
    properties: Property[],
}

const LastMinuteDeals = ({properties}: Props) => {
    const router = useRouter();
    return (
        <>
            <Typography variant={'h3'} py={10} align={'center'} sx={{fontWeight: 700}}>Last Minute Deals</Typography>
            <SearchDestination position={'relative'}/>
            <Box px={15}>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={6} sm={6} lg={6}>
                        <Button variant={"outlined"} sx={{
                            border: "solid 1px #A47C30",
                            color: "#A47C30",
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
                <Grid container spacing={5}>
                    {!properties?.length ? <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center', py: 10}}>
                        Loading... </Grid> : properties?.map((property: Property) => {
                        return (
                            <Grid key={property.id} item xs={12} sm={6} lg={4}
                                  onClick={() => router.push({
                                      pathname: `/last-minute-deals/${property.id}`,
                                      query: {propertyItem: JSON.stringify(property)}
                                  }, `/last-minute-deals/${property.id}`)} sx={{cursor: 'pointer'}}>
                                <SpecialOffersItem data={property}/>
                            </Grid>
                        )
                    })}

                </Grid>
                {/*<Stack alignItems={'center'} py={10}>*/}
                {/*    <Pagination/>*/}
                {/*</Stack>*/}
            </Box>
        </>
    )
}
export default LastMinuteDeals;