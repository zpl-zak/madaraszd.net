import Document, {Head, Main, NextScript} from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

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
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                     ym(56141104, "init", {
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true,
                          webvisor:true
                    });
                  `
                }}
              />
            </body>
          </html>
        )
    }
}
