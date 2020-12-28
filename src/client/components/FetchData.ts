import { json } from '../utils/api';

export interface IAuthors {
    id: number,
    firstname: string,
    lastname: string,
    email: string;
}

const getAuthors = async() => {
    try {
        let authors = await json('/api/users/authors');
        return authors;
    } catch (e) {
        console.log(e);
    }
}

export interface ITag {
    blogid: number,
    id: number,
    name: string
}

const getTags = async() => {
    try {
        let tags = await json('/api/tags/');
        return tags;
    } catch (e) {
        console.log(e);
    }
}

export default {
    getAuthors,
    getTags
}