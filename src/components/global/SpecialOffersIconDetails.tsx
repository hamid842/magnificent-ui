// Material ui
import {Grid, Stack} from "@mui/material";
// Project imports
import SwitzerText from "@/components/css-texts/SwitzerText";
import AppIcon from "@/components/global/AppIcon";

type SpecialOffersIconDetailsProps = {
    bedsNumber: number,
    squareMeters: number
}

//===================|| Each last minute deal item details (icons) ||==========================

const SpecialOffersIconDetails = ({bedsNumber, squareMeters}: SpecialOffersIconDetailsProps) => {
    const detailsStyles = {color: 'gray', paddingLeft: 0.5}
    return (

        <Grid container alignItems={'center'} spacing={0.5} sx={{paddingTop: 1, mt: 'auto'}}>
            <Grid item xs={4} sm={4} lg={4}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppIcon name={'bed'}/>
                    <SwitzerText variant={'caption'} sx={detailsStyles}
                                 text={`${bedsNumber ? bedsNumber : "-"} Beds`}/>
                </Stack>
            </Grid>
            <Grid item xs={4} sm={4} lg={4}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppIcon name={'hotel'}/>
                    <SwitzerText variant={'caption'} sx={detailsStyles}
                                 text={`${bedsNumber ? bedsNumber : "-"} Sleeps`}/>
                </Stack>
            </Grid>
            <Grid item xs={4} sm={4} lg={4}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppIcon name={'aspect_ratio'}/>
                    <SwitzerText variant={'caption'} sx={detailsStyles}
                                 text={`${squareMeters ? squareMeters : "-"} Sq Ft`}/>
                </Stack>
            </Grid>
        </Grid>
    )
}
export default SpecialOffersIconDetails;