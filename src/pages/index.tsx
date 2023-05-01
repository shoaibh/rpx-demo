import * as React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useAuth } from '@clerk/nextjs'
import LandingPage from './landing'
import Loading from '@/components/general/Loading'
import { useRouter } from 'next/router'

// TODO: Fix popin related to router push
// TODO: Rethink this structure once we've got user data; redirect needs to be role based
export default function Home() {
	const { isLoaded, isSignedIn, signOut } = useAuth()
	const router = useRouter()

	React.useEffect(() => {
		if (isSignedIn) {
			router.push('/app/initial-intake')
		}
	}, [isSignedIn])

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Loading />
			</>
		</>
	)
}
