import { signIn } from 'next-auth/client'
import {sIn} from './helpers';

export default function Unauthorized() {

	return (
		<div className="row">
			<div className="col-lg-10 col-offset-1">
				<p>Hey There, looks like you reached an area you don't have access to.</p>

				<p>Please sign in here.</p>

				<p><button className="btn btn-secondary" onClick={sIn}>Sign in</button></p>
			</div>
		</div>
	)
}
