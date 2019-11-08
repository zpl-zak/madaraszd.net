import { useRouter } from 'next/router'
import pdfHelper from '../../lib/pdf-helper.js'
import resumeFactory from '../../lib/resume-factory.js'
import { parse } from 'url'

export default async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { query: { lang } } = parsedUrl

    const buffer = await pdfHelper.componentToPDFBuffer(resumeFactory.generateComponent(lang))

    res.setHeader('Content-Type', 'application/pdf')
    res.end(buffer)
}
