import Image from "next/image";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { IBlogPostsData } from "@/utils/blog-post-type";
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

const BlogItem = ({ blogData }: BlogItemProps) => {
  const { attributes } = blogData;
  const IMAGE_WIDTH = 100;
  const IMAGE_HEIGHT = 100;
  const imageStyles = {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  };
  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: 2,
        height: 200,
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
                style={imageStyles}
              />
            )}
            {blogData.id === 2 && (
              <Image
                src={blogTwoImage}
                alt={"Pic"}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                style={imageStyles}
              />
            )}
            {blogData.id === 3 && (
              <Image
                src={blogThreeImage}
                alt={"Pic"}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                style={imageStyles}
              />
            )}
            {blogData.id === 4 && (
              <Image
                src={blogFourImage}
                alt={"Pic"}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                style={imageStyles}
              />
            )}
            {blogData.id === 5 && (
              <Image
                src={blogImageFive}
                alt={"Pic"}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                style={imageStyles}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} p={1}>
          <Stack alignItems={"center"}>
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
            <Box>
              <Typography
                variant={"caption"}
                sx={{ fontSize: 10, textAlign: "justify" }}
              >
                {attributes.summary.substring(
                  0,
                  attributes.summary.length - 200
                )}
              </Typography>
            </Box>
          </Stack>
          <Button
            sx={{
              color: colors.mainColor,
              textTransform: "none",
              fontSize: 12,
            }}
          >
            Read more
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default BlogItem;
