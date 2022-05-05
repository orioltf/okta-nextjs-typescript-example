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
		async signin(...args) {
			console.log('signin', args);
			return true;
		},
		async session(...args) {
			console.log('session', args);
			return Promise.resolve({...args })
		},
		/**
		 * This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
		 * @param token
		 * @param user - The claims in Okta
		 * @param account - Large object with all info from the JWT
		 * @param profile - Same as user, without `id`
		 * @param {boolean} isNewUser
		 * @param {[]} rest - should be empty
		 */
		async jwt(token, user, account, profile, isNewUser, ...rest) {
			console.log('jwt', token, user, account, profile, isNewUser, rest.length, rest);
			const newToken = {...token};
			if (!newToken.claims) {
				newToken.claims = user;
				newToken.access_token = account.access_token;
				newToken.accessToken = account.accessToken;
			}
			return newToken;
		},
	},
}

export default (req, res) => NextAuth(req, res, options)
