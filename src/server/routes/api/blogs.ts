import * as express from 'express';
import { isAdmin } from '../../utils/security/isAdmin';
import * as DB from '../../db';
const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        let blogs = await DB.default.Blogs.getAll();
        res.send(blogs);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', isAdmin, async(req, res, next) => {
    let id = req.params.id;
    try {
        let blog = await DB.default.Blogs.getSingleBlog(parseInt(id));
        res.send(blog);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;