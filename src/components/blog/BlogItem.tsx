import Image from "next/image";
import {Box, Button, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {IBlogPostsData} from "@/utils/blog-post-type";
import EuclidText from "@/components/css-texts/EuclidText";
import blogOneImage from "../../../public/Blogs/11/02-S.jpg";
import blogTwoImage from "../../../public/Blogs/11/3-b.jpg";
import blogThreeImage from "../../../public/Blogs/11/4-b.jpg";
import blogFourImage from "../../../public/Blogs/11/04-S.jpg";
import blogImageFive from "../../../public/Blogs/11/1-b.jpg";
import colors from "@/assets/colors";

type BlogItemProps = {
    blogData: IBlogPostsData;
};

const BlogItem = ({blogData}: BlogItemProps) => {
const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down('md'))
    const {attributes} = blogData;
    const IMAGE_WIDTH = 200;
    const IMAGE_HEIGHT = 200;
    const imageLargeStyles = {
        width: "100%",
        height: 220,
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6,
    };
    const imageSmStyles = {
        width: "100%",
        height: 220,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
    };
    return (
        <Paper
            elevation={3}
            sx={{
                position: "relative",
                width: "100%",
                borderRadius: 2,
                height: {xs: 420, sm: 410, md: 220, lg: 220},
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                        {blogData.id === 1 && (
                            <Image
                                src={blogOneImage}
                                alt={"Pic"}
                                width={IMAGE_WIDTH}
                                height={IMAGE_HEIGHT}
                                style={sm ? imageSmStyles : imageLargeStyles}
                            />
                        )}
                        {blogData.id === 2 && (
                            <Image
                                src={blogTwoImage}
                                alt={"Pic"}
                                width={IMAGE_WIDTH}
                                height={IMAGE_HEIGHT}
                                style={sm ? imageSmStyles : imageLargeStyles}
                            />
                        )}
                        {blogData.id === 3 && (
                            <Image
                                src={blogThreeImage}
                                alt={"Pic"}
                                width={IMAGE_WIDTH}
                                height={IMAGE_HEIGHT}
                                style={sm ? imageSmStyles : imageLargeStyles}
                            />
                        )}
                        {blogData.id === 4 && (
                            <Image
                                src={blogFourImage}
                                alt={"Pic"}
                                width={IMAGE_WIDTH}
                                height={IMAGE_HEIGHT}
                                style={sm ? imageSmStyles : imageLargeStyles}
                            />
                        )}
                        {blogData.id === 5 && (
                            <Image
                                src={blogImageFive}
                                alt={"Pic"}
                                width={IMAGE_WIDTH}
                                height={IMAGE_HEIGHT}
                                style={sm ? imageSmStyles : imageLargeStyles}
                            />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} p={1}>
                    <Grid container sx={{height:'100%'}}>
                        <Grid item xs={12}>
                            <EuclidText
                                textAlign={"center"}
                                text={attributes.title.toLowerCase()}
                                sx={{
                                    fontWeight: 700,
                                    my: 0.5,
                                    fontSize: 14,
                                    textTransform: "capitalize !important",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant={"caption"}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    lineClamp: 5,
                                    WebkitLineClamp: 5,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {attributes.summary}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{textAlign:'right',mt:'auto !important'}}>
                            <Button
                                sx={{
                                    color: colors.mainColor,
                                    textTransform: "none",
                                    fontSize: 12,
                                    mt:'auto !important'
                                }}
                            >
                                Read more
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <style jsx>{`
              .summary {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            `}</style>
        </Paper>
    );
};
export default BlogItem;
