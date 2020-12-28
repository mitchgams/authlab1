import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { json, SetAccessToken } from '../../../utils/api';


interface IUser {
    email: string,
    firstname: string,
    lastname: string,
    password: string;
}

const Register: React.FC = () => {

    const history = useHistory();
    const [user, setUser] = React.useState<IUser>({email: '', firstname: '', lastname: '', password: ''});
    const [errorField, setErrorField] = React.useState<string>('');


    const { email, firstname, lastname, password } = user;

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleRegistration = async() => {
        if(!email || !firstname || !lastname || !password) {
            setErrorField('Please make sure all fields have been filled to register');
        } else if(password.length < 8) {
            setErrorField('Please use at least 8 characters for your password.');
        } else {
            try {
                let result = await json('/auth/register', 'POST', user);
                if(result && result.status === 'duplicate_email') {
                    setErrorField('The email address you entered is already being used on a different account. Please use a different email.');
                } else if(result) {
                    SetAccessToken(result.token, { userid: result.userid, role: result.role });
                    if(result.role === 'admin') {
                        history.push('/admin');
                    } else {
                        history.push('/');
                    }
                } else {
                    // checking a login status
                }
            } catch (e) {
                throw e;
            }
        }
    };



	return (
        <section className="card mt-2 border border-dark shadow">
            <h5 className="card-header">Register</h5>
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
                        <span className="input-group-text border-dark shadow-sm" id="">First Name</span>
                    </div>
                    <input type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Email</span>
                    </div>
                    <input type="text" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text border-dark shadow-sm" id="">Password</span>
                    </div>
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} className="form-control border-dark shadow-sm"/>
                </div>
                </div>
            <div className="card-footer d-flex justify-content-around border-dark shadow-sm">
                        <Link to={'/login'} className="btn btn-secondary border-dark shadow">Back</Link>
                        <button onClick={handleRegistration} className="btn btn-secondary border-dark shadow">Set Up Account</button>
            </div>
        </section>
	);
};

export default Register;
