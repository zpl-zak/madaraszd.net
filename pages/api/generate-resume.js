import pdfHelper from '../../lib/pdf-helper.js'
import resumeFactory from '../../lib/resume-factory.js'

export default async (req, res) => {
    const buffer = await pdfHelper.componentToPDFBuffer(resumeFactory.generateComponent('en'))

    res.setHeader('Content-Type', 'application/pdf')
    res.end(buffer)
}
