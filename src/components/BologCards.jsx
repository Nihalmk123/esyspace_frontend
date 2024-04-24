import React from 'react';
import blogsData from '../Blog.json';

export default function BlogCards() {
  // Accessing the "blogs" array from blogsData
  const blogs = blogsData.blogs;

  return (
    <>
    <h2 className='text-center mt-5'>Blogs</h2>
    <div className="container">
      <div className="col-md-12 col-lg-12">
        <article className="post vt-post">
            {blogs.map((blog, index) => (
              <>
          <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
          <div className="post-type post-img">
            <a href="#"><img src={blog.imageSrc} className="img-responsive" alt="image post" /></a>
          </div>
          <div className="author-info author-info-2">
            <ul className="list-inline">
              <li>
                <div className="info">
                  <p></p>
                  <p>Mar 21, 2015</p></div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
          <div className="caption">
            <h4 className=""><a href="#">{blog.title}</a></h4>
            <p>{blog.para}</p>
            <a className="btn hover_button"  href="#" role="button">Read More</a> </div>
        </div>
          </div>
             </>
            ))}
        </article>
        <div className="pagination-wrap">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    </>
  );
}
