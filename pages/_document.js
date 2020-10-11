import Document, {Head, Main, NextScript} from 'next/document'

export default class PersonalDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head />
            <body>
              <Main />
              <NextScript />
            </body>
          </html>
        )
    }
}
