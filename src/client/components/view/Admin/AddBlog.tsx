import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FetchData from '../../FetchData';
import { IAuthors, ITag } from '../../FetchData';
import { json, User } from '../../../utils/api';
import { debug } from '../../../../utils/debug';
import config from '../../../config';


export interface IAddBlog {
    authorid: number;
    tagid: number;
    title: string;
    content: string;
}

const AddBlog: React.FC = (props: AppProps) => {

    
    const history = useHistory();
    const [authorList, setAuthorList] = React.useState<IAuthors[]>([]);
    const [tagList, setTagList] = React.useState<ITag[]>([]);
    const [blog, setBlog] = React.useState<IAddBlog>({ authorid: undefined, tagid: undefined, title: '', content: '' });
    const [errorField, setErrorField] = React.useState<string>('');
    let { authorid, tagid, title, content } = blog;


    /***************
     * I initially had 4 different useStates for blog
     * I'm happy about this.
     */
    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setBlog({
            ...blog,
            [name]: value
        });
    };

    React.useEffect(() => {
        (async() => {
            setAuthorList(await FetchData.getAuthors());
            setBlog({
                ...blog,
                authorid: User.userid
            });
            setTagList(await FetchData.getTags());
        })();
    }, []);

    const inputLengthMin = {title: 10, content: 200};

    const handlePost = async() => {
        if(!authorid || !tagid || !title || !content) {
            setErrorField('All fields must be filled out to post the blog.');
        } else if(config.blogPost.titleMinimum > title.length || config.blogPost.contentMinimum > content.length) {
            setErrorField(`The blog title has a minimum length of ${config.blogPost.titleMinimum} characters, and the blog body has a minimum of ${config.blogPost.contentMinimum} characters.`);
        } else {
            let r = await json('/api/blogs/post', 'POST', blog);
        debug.log(r);
            if(r.status === 'complete') {
                debug.log('Blog posted successfully: src/client/components/view/Admin/AddBlog.tsx');
                history.push('/admin/blogsList');
            }
        }
    }

	return (
        <section className="card mt-0 border border-dark shadow">
            <h5 className="card-header">Create Blog Post</h5>
            <h6 className="card-header pl-2 text-danger">{errorField ? `* ${errorField}` : '' }</h6>
            <div className="card-body">
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text border-dark shadow-sm" id="">Choose Author</span>
                </div>
                <select name="authorid" onChange={handleChange}  value={User.userid} className="border-dark shadow-sm">
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
                    <input type="text" name="title" placeholder="Blog Title" value={title} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Choose Tag</span>
                    </div>
                    <select name="tagid" onChange={handleChange} defaultValue={'DEFAULT'} className="border-dark shadow-sm">
                        <option value="DEFAULT" disabled>Select Tag</option>
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
            <div className="card-footer d-flex justify-content-around border-dark shadow-sm">
                        <Link to={'/admin/'} className={`btn btn-${config.button.color} border-dark shadow-sm`}>Back</Link>
                        <button onClick={handlePost} className={`btn btn-${config.button.color} border-dark shadow-sm`}>Submit Blog</button>
            </div>
        </section>
    );
    
 
};

interface AppProps {}

export default AddBlog;
