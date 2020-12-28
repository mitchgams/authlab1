import { Query, pool } from '../index';

interface IBlog {
    title: string,
    content: string,
    authorid: number,
    tagid: number;
}

const getAll = async () => Query('SELECT b.id as blogid, b.content, b.publishdate, b.title, b.authorid, u.firstname, u.lastname, u.email, u.role FROM blogs b JOIN users u on u.id = b.authorid');

const getSingleBlog = async (id: number) => Query('SELECT t.tagid as tagid, tags.name as tagname, b.id as blogid, b.content as content, b.created as created, b.title as title, b.authorid as authorid, u.firstname as firstname, u.lastname as lastname, u.email as email FROM blogs b JOIN users u on u.id = b.authorid JOIN blogtags t on t.blogid = b.id JOIN tags on tags.id = t.tagid WHERE b.id = ?', [id]);

const getBlogsOfUserId = async (userid: number) => Query('SELECT b.id as blogid, b.authorid, b.title, b.content, b.publishdate, u.email, u.firstname, u.lastname, u.role FROM blogs b JOIN users u on u.id = b.authorid WHERE b.authorid = ?', [userid]);

const postBlog = async(blog: IBlog) => {
    let post: any = await Query('INSERT INTO blogs (authorid, title, content, publishdate) VALUES (?, ?, ?, current_timestamp)', [blog.authorid, blog.title, blog.content]);
    return Query('INSERT INTO blogtags (blogid, tagid) VALUES (?, ?)', [post.insertId, blog.tagid]);
}

const deleteBlog = async(id: number) => {
    let deleteTag = await Query('DELETE FROM blogtags WHERE blogid = ?', [id]);
    return Query('DELETE FROM blogs WHERE id = ?', [id]);

}

const updateBlog = async(blog: IBlog, id: number) => {
    let update = await Query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [blog.title, blog.content, id]);
    return Query('UPDATE blogtags set tagid = ? WHERE blogid = ?', [blog.tagid, id]);
}


export default {
    getAll,
    getSingleBlog,
    getBlogsOfUserId,
    postBlog, 
    deleteBlog,
    updateBlog
}