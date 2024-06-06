import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo2.png" sizes="any" />
        <meta name="theme-color" content="#ff774d" />
        <meta name="google-site-verification" content="vSWLUOfzaGmniX0J55YW3eB1xePdFkyD6_jSK6___Ww" />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/duotone.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
