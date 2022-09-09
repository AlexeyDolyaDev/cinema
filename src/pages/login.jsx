import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <h1>This is login page!</h1>
            <nav>
                <Link to="/sign-up">About</Link>
            </nav>
        </>
    );
}

export default Login;
