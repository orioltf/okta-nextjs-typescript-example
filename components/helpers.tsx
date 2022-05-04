import {signIn, signOut} from 'next-auth/client';

export function sIn() {
	signIn('okta');
}

export function sOut() {
	signOut();
}

