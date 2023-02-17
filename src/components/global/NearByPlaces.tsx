import {Grid, Stack} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";
import AppIcon from "@/components/global/AppIcon";

type NearByPlacesProps = {
    locationName: string,
    taxiDistance: string,
    busDistance: string,
    walkingDistance: string
}

const NearByPlaces = ({locationName, taxiDistance, busDistance, walkingDistance}: NearByPlacesProps) => {
    return (
        <Grid container>
            <Grid item xs={3}>
                <SwitzerText
                    sx={{marginLeft: 1, fontSize: 12, marginRight: 1}}
                    text={locationName}
                />
            </Grid>
            <Grid item xs={3}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppIcon name={'local_taxi'}/>
                    <SwitzerText
                        sx={{marginLeft: 1, fontSize: 8}}
                        text={taxiDistance}
                    />
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppIcon name={'directions_bus'}/>
                    <SwitzerText
                        sx={{marginLeft: 1, fontSize: 8}}
                        text={busDistance}
                    />
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppIcon name={'directions_walk'}/>
                    <SwitzerText
                        sx={{marginLeft: 1, fontSize: 8}}
                        text={walkingDistance}
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}
export default NearByPlaces;