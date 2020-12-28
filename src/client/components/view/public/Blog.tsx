import * as React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { json } from '../../../utils/api';
import config from '../../../config';

export interface IBlog {
    blogid: number,
    tagname: string,
    tagid: number,
    firstname: string,
    lastname: string,
    email: string,
	authorid: number,
	title: string,
	content: string,
	publishdate: string,
	created: string;
}

export interface IBlogParams {
    id: string;
}

const Blog: React.FC = (props: AppProps) => {
    const { id } = useParams<IBlogParams>();
    const [blog, setBlog] = React.useState<IBlog>();

	React.useEffect(() => {
		(async () => {
			try {
                const blog = await json(`/api/blogs/${id}`);
                console.log(blog);
                setBlog(blog[0]);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

    if(blog === undefined) {
        return <>Loading...</>;
    } else {
        console.log(blog.tagname)
        return (
            <>
            <div className="d-flex justify-content-center align-items-center">
                {
                        <article key={blog.blogid} className="card m-2 border-dark shadow" style={{width: '100%'}}>
                            <h3 className="card-header">{blog.title}</h3>
                            <div className="m-1 d-flex justify-content-start"><span className={`badge badge-${config.blogPost.tagColor}`}>{blog.tagname}</span></div>
                            <p className="card-title m-1">Written by {blog.firstname} {blog.lastname} on {moment(blog.created).utc().format('MMM Do YYYY')}</p>
                            <p className="card-body">{blog.content}</p>
                            <div className="card-footer p-1 d-flex justify-content-around border-dark shadow-sm">
                                <button onClick={() => history.back() } className={`btn btn-${config.button.color} border-dark shadow-sm`}>Go Back</button>
                            </div>
                        </article>
                    }
            </div>
            </>
        );
    }
}

interface AppProps {}

export default Blog;
