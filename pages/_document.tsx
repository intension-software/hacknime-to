import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class _Document extends Document {

  render() {
    return (
      <Html>
        <Head title="Sedentarism Alert - PWA">
          <link
            rel="shortcut icon"
            href="alarm-clock.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="../public/images/logo.svg"></link>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#317EFB"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}