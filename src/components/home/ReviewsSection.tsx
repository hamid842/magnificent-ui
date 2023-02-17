// Next.js
import Image from "next/image";
// Material-ui
import {Box, Grid, Paper, Stack, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Project imports
// import profileImage from '../../../public/profile.png';
import TitleSeparator from "@/components/global/TitleSeparator";
// import dictionaries from '../../../dictionaries/en.json';
import SwitzerText from "@/components/css-texts/SwitzerText";
import { IReview } from "@/utils/property-type";

//=========================|| Reviews Section ||=========================

type TProps = {
    reviews: IReview[]
};

const ReviewsSection = ({reviews}: TProps) => {
    return (
        <Box>
            <TitleSeparator separatorTitle={'Your Feedback'} title={'Reviews'}/>
            <Stack direction={'row'} sx={{width: '100%', height: 250, pb: 10}} alignItems={'center'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                    backgroundColor: "#A47C30",
                    border: 'none',
                    mx:2
                }}>
                    <KeyboardArrowLeftIcon sx={{color: 'white'}}/>
                </Box>
                <Grid container wrap='nowrap' spacing={3} sx={{ overflow: 'hidden' }}>
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
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                    backgroundColor: "#A47C30",
                    border: 'none',
                    mx:2
                }}>
                    <KeyboardArrowRightIcon sx={{color: 'white'}}/>
                </Box>
            </Stack>
        </Box>
    )
}
export default ReviewsSection;