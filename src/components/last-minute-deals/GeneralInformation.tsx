import {Grid, Paper, Typography} from "@mui/material";
import GeneralInfoTitleAndValue from "@/components/last-minute-deals/GeneralInfoTitleAndValue";
import dayjs from "dayjs";
import {Property} from "@/utils/property-type";

type Props = {
    data: Property
}

const GeneralInformation = ({data}: Props) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Typography variant={'subtitle1'} sx={{fontWeight: 600}}>General Information</Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Published Date'}
                                              value={dayjs(data.attributes.publishedAt).format("DD MMMM YYYY")}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Floor Location'} value={''}/>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Housing Shape'} value={''}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Available for Rent'} value={''}/>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Room + Living Number'} value={''}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Furnished'} value={''}/>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Cooling Type'} value={''}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Swap'} value={''}/>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Building Age'} value={''}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <GeneralInfoTitleAndValue title={'Front'} value={''}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default GeneralInformation;