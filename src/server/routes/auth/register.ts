import * as express from 'express';
import DB from '../../db';

import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';
import { debug } from '../../../utils/debug';

const router = express.Router();

router.post('/', async(req, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let result: any = await DB.Users.insert(user);
        
        let token = await CreateToken({ userid: result.insertId });
        debug.log(`email: ${user.email}, password: ${user.password} collected, account created token received: ${token}: src/server/routes/auth/register.ts`);
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (e) {
        if(e.code === 'ER_DUP_ENTRY') {
            res.send({"status":"duplicate_email"});
        }
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;