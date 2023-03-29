import classNames from 'classnames'
import type { AppProps } from 'next/app'
import { Lora, Nunito } from 'next/font/google'

import '@/styles/globals.scss'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<main className={classNames(nunito.className, lora.className, 'font-sans')}>
			<Component {...pageProps} />
		</main>
	)
}

export default App
