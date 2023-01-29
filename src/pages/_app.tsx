import { AppProps } from 'next/app'

function Magnificent({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default Magnificent