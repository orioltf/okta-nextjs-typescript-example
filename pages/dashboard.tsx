import React from 'react'

import Head from 'next/head'

import Header from '../components/Header'
import Unauthorized from '../components/Unauthorized'
import Movies from '../components/Movies'

import { useSession } from 'next-auth/client'

export default function Dashboard() {

	const [session, loading] = useSession();

	var content = loading
		? (
			<div className="row mb-4">
				Loading…
			</div>
		)
		: session
			? <Movies></Movies> : <Unauthorized></Unauthorized>

	return (
		<div className="container">
			<Head>
				<title>Movies By Nik - Find Your Next Movie</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header></Header>

			{content}

		</div>
	)
}
