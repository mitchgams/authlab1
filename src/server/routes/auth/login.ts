import * as express from 'express';
import * as passport from 'passport';
import { debug } from '../../../utils/debug';

import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();


router.post('/', passport.authenticate('local'), async(req: any, res, next) => {
    debug.log(req.body);
    try {
        let token = await CreateToken({ userid: req.user.id });
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})



export default router;