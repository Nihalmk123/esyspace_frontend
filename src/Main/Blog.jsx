import React from 'react'
import Layout from "../../src/components/Layouts/Layout"
import BlogCards from '../../src//components/BologCards'
import '../../src/Styles/BlogStyles.css';

export default function Blog(props) {
  return (
    <Layout>
      <BlogCards/>
    </Layout>
  )
}
