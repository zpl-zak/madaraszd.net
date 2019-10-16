const fs = require('fs')
const path = require('path')
const fetch = require('isomorphic-unfetch')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = 63423
const app = next({ dev: true })
const handle = app.getRequestHandler()

const main = async () => {
    await app.prepare()

    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        handle(req, res, parsedUrl)
    })

    server.listen(port, err => {if (err) throw err})

    let res = await fetch(`http://localhost:${port}/api/generate-resume`)
    let data = await res.buffer()

    fs.writeFileSync(path.join(__dirname, '../static/', 'resume.pdf'), data)

    res = await fetch(`http://localhost:${port}/api/generate-resume-sk`)
    data = await res.buffer()

    fs.writeFileSync(path.join(__dirname, '../static/', 'resume_sk.pdf'), data)

    console.log('[pre-commit] saved pdf file, stopping temp server')

    server.close()
    process.exit(0)
}

main().catch(err => {
    console.error(err)
    process.exit(1)
})
