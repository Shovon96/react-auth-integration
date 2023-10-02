import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // login user in firebae
        loginUser(email, password)
            .then(() => {
                // console.log(result.user);
                e.target.reset()
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const handleLoginGoogle = () => {
        signInWithGoogle()
            .then()
            .catch(error => alert(error?.message))
    }



    return (
        <div className="hero min-h-[88vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="px-8 py-2">
                        <div className="mb-2">
                            <button onClick={handleLoginGoogle} className="btn border rounded-md">Google</button>
                        </div>
                        <p>New here? <a className="hover:text-blue-600 text-fuchsia-600 underline my-4" href="/register">Register now</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;