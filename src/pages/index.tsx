import AudioFile from '@/components/general/AudioFile'
import Loading from '@/components/general/Loading'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<AudioFile audioFile="/resources/sounds/Theme.mp3" />
				<Loading />
			</>
		</>
	)
}
