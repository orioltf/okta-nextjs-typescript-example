import { useSession } from 'next-auth/client'
import {sIn, sOut} from './helpers';

export default function Header() {

	const [session, loading] = useSession();

	let button;

	if (session) {
		button = <button className="btn btn-secondary" onClick={sOut}>Logout</button>;
	} else {
		button = <button className="btn btn-primary" onClick={sIn}>Login</button>;
	}

	return (
		<div className="row mb-4">
			<div className="col-lg-12">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<a className="navbar-brand" href="#">Home</a>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="dashboard">Movies</a>
								</li>
							</ul>
							<div className="d-flex">
								{button}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}
