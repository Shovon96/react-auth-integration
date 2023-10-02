import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegistetion = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user in firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error)
        })

    }

    return (
        <div className="hero min-h-[88vh] bg-base-200">
            <div className="hero-content flex-col w-3/5">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Registetion now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistetion} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Registetion</button>
                        </div>
                    <p>Already have an account? <a className="hover:text-blue-600 text-fuchsia-600 underline" href="/login">LogIn</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;