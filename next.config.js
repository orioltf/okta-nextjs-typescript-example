// Before defining your Security Headers
// add Content Security Policy directives using a template string.

const ContentSecurityPolicy = `
	default-src 'self';
	script-src 'self' https://www.google.com https://www.gstatic.com;
	frame-src 'self' https://www.google.com;
	object-src 'none';
	img-src 'self' data:;
	style-src 'self' https://fonts.googleapis.com;
	font-src 'self' https://fonts.gstatic.com;
	frame-ancestors 'none';
	sandbox allow-forms allow-same-origin allow-scripts;
	base-uri 'self';
	upgrade-insecure-requests;
`;

module.exports = {
	reactStrictMode: true,
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					// From previous IDP
					{
						key: 'ContentSecurityPolicy',
						value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
					},
					{
						key: 'ReferrerPolicy',
						value: 'no-referrer',
					},
					{
						key: 'XFrameOptions',
						value: 'true', // better with 'SAMEORIGIN'. Prevents against clickjacking attacks. This header has been superseded by CSP's frame-ancestors option, which has better support in modern browsers.
					},
					{
						key: 'NoSniff',
						value: 'true',
					},

					// controls DNS prefetching, allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					// informs browsers it should only be accessed using HTTPS, instead of using HTTP
					// Automatically added if deployed to Vercel, except when headers are specified, like here
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload'
					},
					// Prevent cross-site scripting (XSS) attacks and inline scripts
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					},
				],
			},
		]
	}
}
