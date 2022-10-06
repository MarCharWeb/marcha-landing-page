import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
            rel="preload"
            href="../fonts/Agrandir-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin
            />
        <link
            rel="preload"
            href=".../fonts/Agrandir-TextBold.otf"
            as="font"
            type="font/otf"
            crossOrigin
            />
        <link
            rel="preload"
            href="../fonts/Agrandir-GrandHeavy.otf"
            as="font"
            type="font/otf"
            crossOrigin
            />
        <link
            rel="preload"
            href=".../fonts/Agrandir-GrandLight.otf"
            as="font"
            type="font/otf"
            crossOrigin
            />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}