// Next.js
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
// Material ui
import { Grid } from "@mui/material";
// Project imports
import { instance } from "@/config/axiosConfig";
import { IBlogPostsData } from "@/utils/blog-post-type";
import BlogItem from "@/components/blog/BlogItem";
import AppContainer from "@/components/global/AppContainer";
import TitleSeparator from "@/components/global/TitleSeparator";
import { ReactElement } from "react";
import Layout from "@/components/global/Layout";
import HomePage from "@/pages/index";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await instance.get(`/blog-posts`);
  const blogPosts = data.data;
  return {
    props: {
      blogPosts,
    },
  };
};

type BlogProps = {
  blogPosts: IBlogPostsData[];
};

//========================|| Blogs ||=============================

const Blogs = ({ blogPosts }: BlogProps) => {
  const router = useRouter();
  return (
    <AppContainer>
      <TitleSeparator separatorTitle={""} title={"Blogs"} mt={8} />
      <Grid container spacing={2}>
        {blogPosts?.map((post) => (
          <Grid
            key={post.id}
            item
            xs={12}
            sm={6}
            lg={6}
            onClick={() =>
              router.push(
                {
                  pathname: `/blogs/${post.id}`,
                  query: { id: JSON.stringify(post.id) },
                },
                `/blogs/${post.id}`
              )
            }
            sx={{ cursor: "pointer" }}
          >
            <BlogItem blogData={post} />
          </Grid>
        ))}
      </Grid>
    </AppContainer>
  );
};
export default Blogs;

Blogs.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
