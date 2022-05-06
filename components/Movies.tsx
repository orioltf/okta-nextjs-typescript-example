import {useSession} from 'next-auth/client';

export default function Movies() {

	// status can be "loading" | "authenticated" | "unauthenticated"
	const [session, /* status */] = useSession();

	return (
		<div className="row">
			<div className="col-sm">
				<div className="card">
					<img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/91gDYZG%2BzDL._AC_SL1500_.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Die Hard</h5>
						<p className="card-text">He's the only chance anyone has got.</p>
					</div>
				</div>
			</div>

			<div className="col-sm">
				<div className="card">
					<img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Die Hard 2</h5>
						<p className="card-text">They say lightning never strikes twice... They were wrong</p>
					</div>
				</div>
			</div>

			<div className="col-sm">
				<div className="card">
					<img className="card-img-top" src="https://belgianfilmfreak.files.wordpress.com/2017/01/d0.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Die Hard: With a Vengence</h5>
						<p className="card-text">Think Fast, Look Alive, Die Hard</p>
					</div>
				</div>
			</div>

			<div>
				<div className="card">
					<div className="card-body">
						<pre>{JSON.stringify(session, null, '\t')}</pre>
					</div>
				</div>
			</div>
		</div>
	)
}
