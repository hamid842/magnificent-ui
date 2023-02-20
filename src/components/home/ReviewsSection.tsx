// Material-ui
import {Box} from "@mui/material";
// Project imports
import TitleSeparator from "@/components/global/TitleSeparator";
import ReviewsSlider from "@/components/global/ReviewsSlider";
import {IReview} from "@/utils/property-type";

//====================|| Reviews ||========================

type TProps = {
    reviews: IReview[]
};

const ReviewsSection = ({reviews}: TProps) => {
    return (
        <Box p={3}>
            <TitleSeparator separatorTitle={'Your Feedback'} title={'Reviews'} mb={2}/>
            <ReviewsSlider reviews={reviews} slidesToShow={0}/>
        </Box>
    )
}
export default ReviewsSection;