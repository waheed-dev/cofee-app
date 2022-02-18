import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    // @ts-ignore
    return (
        <Html>
            <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
                          rel="stylesheet"/>
            <body className={'bg-gradient-to-r from-green-500 to-fuchsia-500'}>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}