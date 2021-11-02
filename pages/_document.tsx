import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
            <meta charSet="UTF-8"/>
            <title>Product Page</title>
            <html lang="en" />
        <body className="bg-gray-50 dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
