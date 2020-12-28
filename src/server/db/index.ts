import * as mysql from 'mysql';
import config from '../config';

import Blogs from './queries/blogs';
import Users from './queries/users';
import AccessTokens from './queries/tokens';
import Tags from './queries/tags';

export const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if(err) reject(err);
            return resolve(results);
        });
    });
};

export default {
    Blogs,
    Users,
    AccessTokens,
    Tags
}