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
import blogOneImage from "../../../public/blogs-1.jpg";
import blogTwoImage from "../../../public/blogs-2.jpg";
import blogThreeImage from "../../../public/blogs-3.jpg";
import blogFourImage from "../../../public/blogs-4.jpg";
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
    const IMAGE_WIDTH = 100;
    const IMAGE_HEIGHT = 200;
    const imageStyles = {width: '100%', height: 200}
    return (
        <AppContainer>
            <Stack mt={15} alignItems={'center'}>
                <EuclidText variant={'h4'} align={'center'} text={attributes.title} sx={{fontWeight: 700, mb:3}}/>
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
                        <Image src={blogOneImage} alt={'Pic'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
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