import * as React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { json } from '../../../utils/api';
import config from '../../../config';
import { IBlog } from './Blog';

const Blogs: React.FC = (props: AppProps) => {
	const [blogs, setBlogs] = React.useState<IBlog[]>([]);

	React.useEffect(() => {
		(async () => {
			try {
				let blogs = await json('/api/blogs');
				setBlogs(blogs);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<>
		<div className="d-flex justify-content-center flex-wrap align-items-center">
			{blogs?.map(blog => {
				return (
					<article key={blog.blogid} className="card m-2 border-dark shadow" style={{width: '20rem'}}>
                        <img src={config.blogPost.avatar} alt="" className="card-img-top"/>
						<h5 className="card-title m-1">{blog.title}</h5>
						<p className="card-text m-1">Published by {blog.firstname} {blog.lastname} on {moment(blog.publishdate).utc().format('MM/DD/YY')}</p>
						<div className="card-footer p-1 border-dark d-flex justify-content-start"><Link to={`/blogs/${blog.title}/${blog.blogid}`} className={`btn btn-${config.button.color} border-dark shadow-sm`}>View Blog</Link></div>
					</article>
				);
			})}
		</div>
		</>
	);
};

interface AppProps {}

export default Blogs;
