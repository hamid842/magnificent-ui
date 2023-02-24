// Next.js
import Image from "next/image";
// Material ui
import {Box, Paper, Stack, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
// Third party
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Project imports
import SwitzerText from "@/components/css-texts/SwitzerText";
import colors from "@/assets/colors";
import {IReview} from "@/utils/property-type";

//=========================|| Slider Arrows ||=========================

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: colors.mainColor, borderRadius: 25}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: colors.mainColor, borderRadius: 25}}
            onClick={onClick}
        />
    );
}

//====================|| Reviews ||========================

type ReviewsSliderProps = {
    reviews: IReview[],
    slidesToShow:number
};

const ReviewsSlider = ({reviews,slidesToShow}:ReviewsSliderProps)=>{
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('sm'))
    const settings = {
        infinite: true,
        autoPlay:true,
        speed: 1000,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: slidesToShow || xs ? 1 : 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
        <Slider {...settings}>
            {reviews && reviews.map((review: IReview) =>
                <Box key={review.id} p={1} px={3}>
                    <Paper elevation={3}
                           sx={{borderRadius: 3, height: {xs: 250, sm: 220, md: 270, lg: 270}}}>
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
                                sx={{textOverflow: 'ellipsis', textAlign: 'justify'}}/>
                            <Typography
                                variant={'caption'}
                                pt={1}>
                                <b>
                                    {review.attributes.userName}
                                </b>
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
            )}

        </Slider>
    )
}
export default ReviewsSlider;