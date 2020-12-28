import * as express from 'express';
import * as DB from '../../db';
const router = express.Router();


router.get('/', async(req, res, next) => {
    try {
        let tags = await DB.default.Tags.getAll();
        res.send(tags);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;