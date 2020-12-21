import { Query } from '../index';

const findOne = async(id: string, token: string) => Query('SELECT * FROM tokens WHERE id = ? AND token = ?', [id, token]);

const insert = async(userid: number) => {
    await Query('DELETE FROM tokens WHERE userid = ?' , [userid]); // clear tokens of userid before creating new one
    return Query('INSERT INTO tokens (userid) VALUES (?)', [userid]);
}

const update = async(id: number, token: string) => Query('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);

export default {
    findOne,
    insert,
    update
}