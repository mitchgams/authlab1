import * as React from 'react';
import { AccessToken, User } from '../../../utils/api';
import BlogsList from './BlogList';
import AddBlog from './AddBlog';
import AdminNav from './AdminNav';
import LoginCheck from '../../../utils/LoginCheck';
import Edit from './Edit';
import { debug } from '../../../../utils/debug';
import { Route, Switch, useHistory } from 'react-router-dom';

const Admin: React.FC = () => {

    const history = useHistory();

    React.useEffect(() => {
        
        (() => {
            debug.log(`User: ${User.userid} of role: ${User.role} loaded with token: ${AccessToken} src/client/components/view/Admin/index.tsx`);
            const loginRedirect = () => history.push('/login');
            const notAdminRedirect = () => history.push('/');
            LoginCheck.isLoggedIn(loginRedirect, notAdminRedirect, "admin");
        })();
    }, []);

	return (
            <>
            <AdminNav />
				<Switch>
                <Route path="/admin/blogsList"><BlogsList userid={User.userid} /></Route>
                <Route path="/admin/addBlog"><AddBlog /></Route>
                <Route path="/admin/editBlog/:blogid"><Edit /></Route>
				</Switch>
            </>
	);

}

export default Admin;
