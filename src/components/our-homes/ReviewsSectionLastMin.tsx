import {Box, Paper} from "@mui/material";
import {IReview} from "@/utils/property-type";
import EuclidText from "@/components/css-texts/EuclidText";
import ReviewsSlider from "@/components/global/ReviewsSlider";

type TProps = {
    propertyReviews: IReview[]
};

const ReviewsSectionLastMin = ({propertyReviews}: TProps) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText
                variant={"subtitle1"}
                sx={{fontWeight: 600}}
                text={"Reviews"}
            />
            <Box p={3}>
            <ReviewsSlider reviews={propertyReviews} slidesToShow={1}/>
            </Box>
        </Paper>
    )
}
export default ReviewsSectionLastMin;