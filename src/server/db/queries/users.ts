import { Query } from '../index';

const getAlls = async() => Query('SELECT * FROM users');

const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);

const findOneById = async (id: number) => Query('SELECT * FROM users where id = ? LIMIT 1', [id]);

const insert = async (user: any) => {
    return Query('INSERT INTO users (email, firstname, lastname, password) VALUES (?, ?, ?, ?)', [user.email, user.firstname, user.lastname, user.password]);
}

export default {
    getAlls,
    findOneByEmail,
    findOneById,
    insert
}