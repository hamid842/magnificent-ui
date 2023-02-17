import {Grid, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import profileImage from "../../../public/profile.png";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from "../../../dictionaries/en.json";
import { IReview } from "@/utils/property-type";

type TProps = {
    reviews: IReview[]
};

const ReviewsSectionLastMin = ({reviews}: TProps) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Grid container spacing={2}>
            { reviews && reviews.map((review: IReview) => {
                    return(
                    <Grid key={review.id} item xs={12} sm={6} md={4} lg={4} m={1}>
                        <Paper elevation={5} sx={{borderRadius: 3}}>
                            <Stack direction={'column'} alignItems={'center'} p={2}>
                                <Image 
                                    src={review.attributes.userPhoto} 
                                    alt={'Profile'} 
                                    width={50} 
                                    height={50}
                                    style={{borderRadius: 50}}/>
                                <SwitzerText 
                                    text={review.attributes.text}
                                    variant={'caption'} 
                                    pt={1} 
                                    sx={{textOverflow: 'ellipsis'}}/>
                                <Typography 
                                    variant={'caption'} 
                                    pt={1}>
                                    <b>
                                        {review.attributes.userName}
                                    </b>
                                </Typography>
                            </Stack>
                        </Paper>
                    </Grid>);
                }) }
            </Grid>
        </Paper>
    )
}
export default ReviewsSectionLastMin;