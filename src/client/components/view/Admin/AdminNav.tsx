import * as React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';


const AdminNav: React.FC = () => {

	return <>
    <section className="card border-dark mt-2 mb-3 shadow">
        <div className="card-header border-dark shadow-sm">Choose Action</div>
        <div className="card-body border-dark shadow d-flex justify-content-around">
        <Link to={'/admin/blogsList'} className={`btn btn-${config.button.color} border-dark shadow-sm`}>List of Blogs</Link>
        <Link to={'/admin/addBlog'} className={`btn btn-${config.button.color} border-dark shadow-sm`}>Add Blog</Link>
        </div>
    </section>
</>;

};


export default AdminNav;
