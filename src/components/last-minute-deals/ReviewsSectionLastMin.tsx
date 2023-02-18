import {Grid, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import SwitzerText from "@/components/css-texts/SwitzerText";
import {IReview} from "@/utils/property-type";
import EuclidText from "@/components/css-texts/EuclidText";

type TProps = {
    propertyReviews: IReview[]
};

const ReviewsSectionLastMin = ({propertyReviews}: TProps) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText
                variant={"subtitle1"}
                sx={{ fontWeight: 600 }}
                text={"Reviews"}
            />
            <Grid container spacing={2} mt={1}>
                {propertyReviews?.map((propertyReview: IReview) => {
                    return (
                        <Grid key={propertyReview.id} item xs={12} sm={6} md={6} lg={6}>
                            <Paper elevation={3} sx={{borderRadius: 3}}>
                                <Stack direction={'column'} alignItems={'center'} p={1}>
                                    <Image
                                        src={propertyReview.attributes.userPhoto}
                                        alt={'Profile'}
                                        width={50}
                                        height={50}
                                        style={{borderRadius: 50}}/>
                                    <SwitzerText
                                        text={propertyReview.attributes.text}
                                        variant={'caption'}
                                        pt={1}
                                        sx={{textOverflow: 'ellipsis'}}/>
                                    <Typography
                                        variant={'caption'}
                                        pt={1}>
                                        <b>
                                            {propertyReview.attributes.userName}
                                        </b>
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Grid>);
                })}
            </Grid>
        </Paper>
    )
}
export default ReviewsSectionLastMin;