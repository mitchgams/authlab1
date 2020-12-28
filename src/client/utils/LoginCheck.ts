import { User } from './api';
import { debug } from '../../utils/debug';


const isLoggedIn = (loginRedirect: () => void, notAdminRedirect: () => void, page: string = 'public') => {
    if(User.role !== 'admin'|| Object.keys(User).length < 1 || User.userid === null) {
        loginRedirect();
        debug.log('User must login to continue: src/client/util/LoginCheck.ts');
    } else if(User.role !== 'admin' && page === 'admin') {
        notAdminRedirect();
        debug.log('User not admin, redirect to home page: src/client/util/LoginCheck.ts');
    } else {
        debug.log('User logged in and has permission to stay: src/client/util/LoginCheck.ts');
    }
}

export default {
    isLoggedIn
}