import {Grid, Typography} from "@mui/material";

type Props = {
    title: string,
    value: any
}

const BookingDetailsTitleAndValue = ({title, value}: Props) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} sm={6} lg={6}>
                <Typography variant={'caption'} sx={{fontWeight: 600,fontSize: 12}}>{title}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
                <Typography variant={'caption'}
                            sx={{ fontSize: 12}}>{value}</Typography>
            </Grid>
        </Grid>
    )
}

export default BookingDetailsTitleAndValue;