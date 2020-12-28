import * as express from 'express';
import { isAdmin } from '../../utils/security/isAdmin';
import * as DB from '../../db';
import { debug } from '../../../utils/debug';
const router = express.Router();

router.get('/:id?', async(req, res, next) => {
    let id = req.params.id;
    try {
        if(id) {
            let blog = await DB.default.Blogs.getSingleBlog(parseInt(id));
            res.send(blog);
        } else {
            let blogs = await DB.default.Blogs.getAll();
            res.send(blogs);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/author_blogs/:userid?', isAdmin, async(req, res, next) => {
    let userid = req.params.userid;
    try {
        const blogs = await DB.default.Blogs.getBlogsOfUserId(parseInt(userid));
        res.send(blogs);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.post('/post', isAdmin, async(req, res, next) => {
    const blog = req.body;
    try {
        let post = await DB.default.Blogs.postBlog(blog);
        res.send({"status": "complete"});
    } catch (e) {
        console.log(e);
        res.status(500).send('Blog failed to post: src/server/routes/api/blogs.ts || ../../db/queries/blogs.ts');
    }
});

router.put('/:id?/update', isAdmin, async(req, res, next) => {
    const blog = req.body;
    const { id } = req.params;
    debug.log(`Update blog: ${id} with: ${blog} src/server/routes/api/blogs.tsx`);
    try {
        let post = await DB.default.Blogs.updateBlog(blog, parseInt(id));
        res.status(200).send({"status": "complete"});
    } catch (e) {
        console.log(e);
        res.status(500).send('Blog failed to update: src/server/routes/api/blogs.ts || ../../db/queries/blogs.ts');
    }
});

router.delete('/:id?/delete', isAdmin, async(req, res, next) => {
    const { id } = req.params;
    try {
        let deleteBlog = DB.default.Blogs.deleteBlog(parseInt(id));
        res.send({"status": "complete"});
    } catch (e) {
        console.log(e);
        res.status(500).send('Blog failed to delete: src/server/routes/api/blogs.ts || ../../db/queries/blogs.ts');
    }
})



export default router;