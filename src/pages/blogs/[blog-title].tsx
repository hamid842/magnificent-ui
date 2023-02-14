import {ReactElement} from "react";
// Next.js
import {GetServerSideProps} from "next";
import {useRouter} from "next/router";
// Material ui
import {Box, Stack} from "@mui/material";
// Third party
import ReactMarkdown from "react-markdown";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import {switzerFont} from "@/assets/fonts";
import AppContainer from "@/components/global/AppContainer";
import {IBlogPostsData} from "@/utils/blog-post-type";
import {instance} from "@/config/axiosConfig";
import Image from "next/image";
import blogOneImage from "../../../public/Blogs/11/02.jpg";
import blogTwoImage from "../../../public/Blogs/11/3-b.jpg";
import blogThreeImage from "../../../public/Blogs/11/4-b.jpg";
import blogFourImage from "../../../public/Blogs/11/04-1170x280.jpg";
import blogFiveImage from "../../../public/Blogs/11/1-b.jpg";
import Layout from "@/components/global/Layout";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const {data} = await instance.get(`/blog-posts/${query.id}`)
    const blogPosts = data.data
    return {
        props: {
            blogPosts
        }
    }
}

type BlogProps = {
    blogPosts: IBlogPostsData
}

//=======================|| Each Blogs Post Page ||=======================

const BlogTitle = ({blogPosts}: BlogProps) => {
    const router = useRouter();
    const {attributes} = blogPosts
    const IMAGE_WIDTH = 500;
    const IMAGE_HEIGHT = 500;
    const imageStyles = {width: '100%', height: 'auto'}
    return (
        <AppContainer>
            <Stack mt={20} alignItems={'center'}>
                <EuclidText variant={'h5'} align={'center'} text={attributes.title} sx={{fontWeight: 700, mb:3}}/>
                <Box sx={{width:'100%'}}>
                    {router.query.id === '1' &&
                        <Image src={blogOneImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                               style={imageStyles}/>}
                    {router.query.id === '2' &&
                        <Image src={blogTwoImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                               style={imageStyles}/>}
                    {router.query.id === '3' &&
                        <Image src={blogThreeImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                               style={imageStyles}/>}
                    {router.query.id === '4' &&
                        <Image src={blogFourImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                               style={imageStyles}/>}
                    {router.query.id === '5' &&
                        <Image src={blogFiveImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                               style={imageStyles}/>}
                </Box>
                <Stack alignItems={'center'} className={switzerFont.className}
                       sx={{textTransform: 'justify !important'}}>
                    <ReactMarkdown>{attributes.content.toString().split("      ").join(" ")}</ReactMarkdown>
                </Stack>
            </Stack>
        </AppContainer>
    )
}
export default BlogTitle;

BlogTitle.getLayout = (page:ReactElement) => <Layout>{page}</Layout>