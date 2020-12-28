import * as React from 'react';
import { Link } from 'react-router-dom';
import { json } from '../../../utils/api';
import { IBlog } from '../public/Blog';
import moment from 'moment';
import config from '../../../config';

const BlogList: React.FC<{userid:string}> = ({userid}) => {

    const [blogsList, setBlogsList] = React.useState<IBlog[]>([]);

    React.useEffect(() => {
        (async() => {
                try {
                    let blogs = await json(`/api/blogs/author_blogs/${userid}`);
                    setBlogsList(blogs);
                } catch (e) {
                    console.log(e);
                }
        })();
    }, []);

        return <div className="container d-flex justify-content-start flex-wrap">
            {blogsList?.map(blog => {
            return (
                <article key={blog.blogid} style={{width: '22rem'}} className="card border-dark mr-2 mb-2 shadow">
                    <h5 className="card-header border-dark p-1 shadow-sm"><Link style={{textDecoration: 'none', color: 'black'}} to={`/blogs/${blog.title}/${blog.blogid}`} >{blog.title}</Link></h5>
                    <div className="card-body">
                        <p>{blog.content.substr(0, 150)}...</p>
            <p>Published on: {moment(blog.publishdate).format('MMM Do YY')}</p>    
                    </div>
                    <div className="card-footer border-dark p-1 d-flex justify-content-end shadow-sm">
                        <Link to={`/admin/editBlog/${blog.blogid}`} className={`btn btn-${config.button.color} border-dark shadow`}>Edit Blog</Link>
                    </div>
                </article>
            );
        })}
        </div>;
}

export default BlogList;
