import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
	const URL = "https://ideabox-server.onrender.com";
	const googleAuth = () => {
		window.open(
			`${URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Login</h1>
			
				<div className={styles.inputForm}>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Login</button>
					<p className={styles.text}>or</p>
					<button className={styles.googleBtn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Login with Google</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			
		</div>
	);
}

export default Login;
