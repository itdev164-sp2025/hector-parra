import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { H1 } from "../components/Heading"; 

const BlogPost = ({ data }) => {
    const { title } = data?.contentfulBlogPost || {};

    return (
        <Layout>
                <H1>{title}</H1>
                <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.body.childMarkdownRemark.html,}}>
                </div>
        </Layout>
    );

}

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostQuery($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;