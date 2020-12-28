import * as React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { json, User } from '../../../utils/api';
import FetchData from '../../FetchData';
import { IAuthors, ITag } from '../../FetchData';
import { IBlog } from '../public/Blog';
import { debug } from '../../../../utils/debug';
import { IAddBlog } from './AddBlog';
import config from '../../../config';

interface IUseParams {
    blogid: string;
}
const Edit: React.FC = () => {
    
    const [blog, setBlog] = React.useState<IBlog>();
    const [authorList, setAuthorList] = React.useState<IAuthors[]>([]);
    const [tagList, setTagList] = React.useState<ITag[]>([]);
    const [editedBlog, setEditedBlog] = React.useState<IAddBlog>({ authorid: undefined, tagid: undefined, title: '', content: '' });

    const { blogid } = useParams<IUseParams>();
    const { authorid, tagid, title, content } = editedBlog;
    const history = useHistory();

    React.useEffect(() => {
        (async() => {
            setAuthorList(await FetchData.getAuthors());
            setTagList(await FetchData.getTags());
        })();
        (async () => {
            if(blogid) {
                try {
                    const res = await fetch(`/api/blogs/${blogid}`);
                    const blog = await res.json();
                    setEditedBlog({authorid: blog[0].authorid, tagid: blog[0].tagid, title: blog[0].title, content: blog[0].content});
                    setBlog(blog[0]);
                } catch (error) {
                    console.log(error);
                }
            } else history.push('/admin'); // something went wrong, go back
        })();
    }, []);

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setEditedBlog({
            ...editedBlog,
            [name]: value
        });
    };

    const handlePut = async() => {
        const r = await json(`/api/blogs/${blog.blogid}/update`, 'PUT', editedBlog);
        if(r.status === 'complete') {
            debug.log(`Blog of id: ${blogid} succesfully updated. src/client/components/view/Admin/Edit.tsx`);
            history.push('/admin/blogsList');
        } else {
            debug.log(`Blog of id: ${blogid} failed to update. src/client/components/view/Admin/Edit.tsx`);
        }
    }

    const handleDelete = async() => {
        let confirmDelete = confirm('Are you sure you want to delete this Blog Post?');
        if(confirmDelete) {
            const r = await json(`/api/blogs/${blog.blogid}/delete`, 'DELETE');
            if(r.status === 'complete') {
                debug.log(`Blog of id: ${blogid} succesfully deleted. src/client/components/view/Admin/Edit.tsx`);
                history.push('/admin/blogsList');
            } else {
                debug.log(`Blog of id: ${blogid} failed to delete. src/client/components/view/Admin/Edit.tsx`);
            }
        } else {
            // deletion canceled
        }
    } 
    
	return (
        <section className="card mt-1 border border-dark shadow">
            <h5 className="card-title m-1">Edit Blog Post</h5>
            <div className="card-body">
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text border-dark shadow-sm" id="">Choose Author</span>
                </div>
                <select className="border-dark shadow-sm" onChange={handleChange} value={authorid} name="authorid">
                    {authorList?.map(author => {
                        if(author.id !== parseInt(User.userid)) {
                            return <option key={author.id} value={author.id} disabled>{author.firstname} {author.lastname}</option>;
                        } else {
                            return <option key={author.id} value={author.id}>{author.firstname} {author.lastname}</option>;
                        }
                    })}
                </select> 
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Title</span>
                    </div>
                    <input type="text" placeholder="Blog Title" name="title" value={title} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Choose Tag</span>
                    </div>
                    <select className='border-dark shadow-sm' name="tagid" onChange={handleChange} value={tagid}>
                        {tagList?.map(tag => {
                            return (<option key={tag.id} value={tag.id}>{tag.name}</option>);
                        })}
                    </select>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Content</span>
                    </div>
                    <textarea name="content" onChange={handleChange} className="form-control border-dark shadow-sm" rows={10} id="" value={content}></textarea>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-around  border-dark shadow">
                <Link to={'/admin/blogsList'} className={`btn btn-${config.button.color} border-dark shadow`}>Back</Link>
                <button onClick={handleDelete} className={`btn btn-${config.button.color} border-dark shadow`}>Delete Blog</button>
                <button onClick={handlePut} className={`btn btn-${config.button.color} border-dark shadow`}>Submit Edit</button>
            </div>
        </section>
    );

};

export default Edit;
