import * as express from 'express';
import * as DB from '../../db';
import { isAdmin } from '../../utils/security/isAdmin';
import { debug } from '../../utils/debug';
const router = express.Router();



router.get('/', isAdmin, async(req, res, next) => {
    try {
        let users = await DB.default.Users.getAlls();
        res.send(users);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;