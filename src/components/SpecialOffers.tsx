import {Container, Grid, Stack} from "@mui/material";
import data from '../data/data'
import SpecialOffersItem from "@/components/SpecialOffersItem";
import {ColorButton} from "@/components/Header";

const SpecialOffers = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                {data?.map(item => {
                    return (
                        <Grid key={item.id} item xs={12} sm={4} lg={4}>
                            <SpecialOffersItem data={item}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Stack sx={{paddingY:10}} alignItems={'center'}>
                <ColorButton variant={'contained'} sx={{width:100,textTransform: 'none',borderRadius:25}}>See more</ColorButton>
            </Stack>
        </Container>
    )
}
export default SpecialOffers;