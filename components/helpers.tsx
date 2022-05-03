import {signIn, signOut} from 'next-auth/client';

export function sIn() {
	signIn();
}

export function sOut() {
	signOut();
}

