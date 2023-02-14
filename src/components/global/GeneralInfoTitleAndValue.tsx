import {Grid, Typography} from "@mui/material";

type Props = {
    title: string,
    value: any
}

const GeneralInfoTitleAndValue = ({title, value}: Props) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} sm={6} lg={6}>
                <Typography variant={'caption'} sx={{fontSize: 14}}>{title}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
                <Typography variant={'caption'}
                            sx={{fontWeight: 600, fontSize: 14}}>{value}</Typography>
            </Grid>
        </Grid>
    )
}

export default GeneralInfoTitleAndValue;