# Build a Next.js Application with TypeScript

This is the companion code for [this blog post](https://developer.okta.com/blog/2020/11/13/nextjs-typescript).

## Getting Started

Clone the repository:

```sh
git clone https://github.com/oktadev/okta-nextjs-typescript-example.git
cd okta-nextjs-typescript-example
```

Get all the dependencies:

```sh
npm install
```

Install the [Okta CLI](https://cli.okta.com) and run `okta apps create`. Use `Next.js` for the app name, choose **Web**, and press **Enter**.

Use `http://localhost:3000/api/auth/callback/okta` for the Redirect URI and accept the default Logout Redirect URI of `http://localhost:3000`.

Your issuer, client ID, and client secret will be stored in an `.okta.env` file in your current directory.

Create a `.env.local` in the root directory and copy the values from `.okta.env` into it.

```JSON
OKTA_CLIENTID={yourClientId}
OKTA_CLIENTSECRET={yourClientSecret}
OKTA_DOMAIN={yourOktaIssuer}
NEXTAUTH_URL=http://localhost:3000
```

**NOTE**: The `{yourOktaIssuer}` value should not have an `https://` prefix. For example, `dev-133337.okta.com/oauth2/default`.

Run the application:

```sh
npm run dev
```

## Getting Help

You can post questions about this blog post in the comments.

If you have more generic questions about Okta, you can post them in the [DevForum](https://devforum.okta.com/)

## License

[Apache 2.0](LICENSE)
