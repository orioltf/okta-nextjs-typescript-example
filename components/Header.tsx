import Link from 'next/link';
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
				<nav className="navbar navbar-expand navbar-light bg-light">
					<div className="container-fluid">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link href="/">
										<a className="nav-link active">Home</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/dashboard">
										<a className="nav-link">Dashboard (protected)</a>
									</Link>
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
