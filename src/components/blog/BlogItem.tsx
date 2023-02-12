import Image from "next/image";
import {Box, Button, Grid, Paper, Stack, Typography} from "@mui/material";
import {IBlogPostsData} from "@/utils/blog-post-type";
import EuclidText from "@/components/css-texts/EuclidText";
import blogOneImage from '../../../public/blogs-1.jpg'
import blogTwoImage from '../../../public/blogs-2.jpg'
import blogThreeImage from '../../../public/blogs-3.jpg'
import blogFourImage from '../../../public/blogs-4.jpg'
import colors from "@/assets/colors";

type BlogItemProps = {
    blogData: IBlogPostsData
}

const BlogItem = ({blogData}: BlogItemProps) => {
    const {attributes} = blogData;
    const IMAGE_WIDTH = 100;
    const IMAGE_HEIGHT = 100;
    const imageStyles = {width: '100%', height: 200, borderTopRightRadius: 6, borderTopLeftRadius: 6}
    return (
        <Paper elevation={3}
               sx={{
                   position: 'relative',
                   width: '100%',
                   height: {xs: 'csl(100% + 20px)', sm: 500, md: 420, lg: 420},
                   borderRadius: 2,
                   p: 1
               }}>
            <Grid container>
                <Grid item xs={12}>
                    <Box>
                        {blogData.id === 1 &&
                            <Image src={blogOneImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                                   style={imageStyles}/>}
                        {blogData.id === 2 &&
                            <Image src={blogTwoImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                                   style={imageStyles}/>}
                        {blogData.id === 3 &&
                            <Image src={blogThreeImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                                   style={imageStyles}/>}
                        {blogData.id === 4 &&
                            <Image src={blogFourImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                                   style={imageStyles}/>}
                        {blogData.id === 5 &&
                            <Image src={blogOneImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                                   style={imageStyles}/>}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack alignItems={'center'}>
                        <EuclidText textAlign={'center'} text={attributes.title.toLowerCase()}
                                    sx={{fontWeight: 700,my:1, fontSize: 14, textTransform: 'capitalize !important'}}/>
                        <Box>
                            <Typography variant={'caption'}
                                        sx={{fontSize: 10, textAlign: 'justify'}}>{attributes.summary}</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Button sx={{
                color: colors.mainColor,
                textTransform: 'none',
                fontSize: 12,
                position: 'absolute',
                right: 0,
                bottom: 0
            }} >Read more</Button>
        </Paper>
    )
}
export default BlogItem;