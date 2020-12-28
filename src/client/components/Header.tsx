import * as React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const Header: React.FC = () => {

    return (
        <nav className={`card m-0 p-2 bg-${config.header.bg_color} border-dark shadow`}>
            <div className="row">
                <div className="col-md-8 d-flex justify-content-start">
                    <h3 style={{display: "inline"}}>This is a Blog</h3>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <Link className={`btn btn-${config.button.color} border-dark shadow-sm mr-1`} to="/">Blogs</Link>
                    <Link className={`btn btn-${config.button.color} border-dark shadow-sm`} to="/admin/">Admin</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;