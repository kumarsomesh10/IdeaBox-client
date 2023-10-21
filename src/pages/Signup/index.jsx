import { Link } from "react-router-dom";
import styles from "./styles.module.css";


function Signup() {
	const URL = "https://ideabox-server.onrender.com";
	const googleAuth = () => {
		window.open(
			`${URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div>
			<div className={styles.container}>
			<h1 className={styles.heading}>Create an Account</h1>
				<div className={styles.inputForm}>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} placeholder="Email" />
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}>SignUp</button>
					<p className={styles.text}>or</p>
					<button className={styles.googleBtn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Signup with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
		</div>
		</div>
	);
}

export default Signup;
