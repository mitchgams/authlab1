import { Query } from '../index';

const getAll = async () => Query('SELECT * FROM blogs');

const getSingleBlog = async (id: number) => Query('SELECT * FROM blogs WHERE id = ?', [id]);

export default {
    getAll,
    getSingleBlog
}