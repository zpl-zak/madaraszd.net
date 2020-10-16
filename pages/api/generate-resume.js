import componentToPDFBuffer from '../../lib/pdf-helper.js'
import generateComponent from '../../lib/resume-factory.js'
import { parse } from 'url'

export default async (req, res) => {
    const { query: { lang } } = parse(req.url, true)
    const buffer = await componentToPDFBuffer(generateComponent(lang))

    res.setHeader('Content-Type', 'application/pdf')
    res.end(buffer)
}
