import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { json, SetAccessToken } from '../../../utils/api';
import { AccessToken, User } from '../../../utils/api';


interface IUser {
    email: string,
    password: string;
}

const Login: React.FC = () => {

    const history = useHistory();
    const [user, setUser] = React.useState<IUser>({email: '', password: ''});
    const [errorField, setErrorField] = React.useState<string>('');


    React.useEffect(() => {
        /**************
         * User is logged in and is not an 
         * admin. redirect to home page.
         */
        if(User && User.role === 'guest') {
           history.push('/');
        }
    }, []);

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleLogin = async() => {
        try {
            let result = await json('/auth/login', 'POST', user);
            if(result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if(result.role === 'admin') {
                    history.push('/admin');
                } else {
                    history.push('/');
                }
            } else {
                setErrorField('The email or password you have entered is incorrect. Please try again.');
            }
        } catch (e) {
            throw e;
        }
    };



	return (
        <section className="card mt-2 border border-dark shadow">
            <h5 className="card-header">Login</h5>
            <div className="card-header text-danger pl-2">{errorField ? `* ${errorField}` : ''}</div>
            <div className="card-body">
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Email</span>
                    </div>
                    <input type="text" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Password</span>
                    </div>
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                </div>
                <div className="float-right ml-3">Don't have an account? <Link style={{textDecoration: 'none', color: 'black'}} to={'/register'}>Register</Link></div>
            <div className="card-footer d-flex justify-content-around border-dark shadow-sm">
                        <Link to={'/'} className="btn btn-secondary border-dark shadow">Back</Link>
                        <button onClick={handleLogin} className="btn btn-secondary border-dark shadow">Login</button>
            </div>
        </section>
	);
};

export default Login;
