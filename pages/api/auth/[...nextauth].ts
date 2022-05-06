import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
	// Configure one or more authentication providers
	providers: [
		Providers.Okta({
			clientId: process.env.OKTA_CLIENTID,
			clientSecret: process.env.OKTA_CLIENTSECRET,
			domain: process.env.OKTA_DOMAIN,
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn(userOrProfile, account, OAuthProfile, ...rest) {
			console.log('signIn', userOrProfile, account, OAuthProfile, rest.length, rest);
			// return a string with a url to perform a redirect
			return true;
		},
		async session(defaultJwtPayload, session, ...rest) {
			console.log('session', defaultJwtPayload, session, rest.length, rest);
			return {
				...session,
				expires: defaultJwtPayload.expires,
			};
		},
		/**
		 * This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
		 * @param defaultJwtPayload
		 * @param user - The claims in Okta
		 * @param account - Large object with all info from the JWT
		 * @param OAuthProfile - Same as user
		 * @param {boolean} isNewUser
		 * @param {[]} rest - should be empty
		 */
		async jwt(defaultJwtPayload, user, account, OAuthProfile, isNewUser, ...rest) {
			console.log('jwt', defaultJwtPayload, user, account, OAuthProfile, isNewUser, rest.length, rest);

			let newToken = {
				...defaultJwtPayload,
				...user,
			};

			if (account?.accessToken) {
				newToken.accessToken = account.accessToken;
			}

			return newToken;
		},
	},
}

export default (req, res) => NextAuth(req, res, options)
