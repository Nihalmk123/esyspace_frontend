import React from 'react'
import Layout from "../../components/Layouts/Layout"
import BlogCards from '../../components/BologCards'
import '../../Styles/BlogStyles.css';

export default function Blog(props) {
  return (
    <Layout>
      <BlogCards/>
    </Layout>
  )
}
