import pdfHelper from '../../lib/pdfHelper.js'
import Technologies from '../../components/Technologies.js'

export default async (req, res) => {
    const buffer = await pdfHelper.componentToPDFBuffer(
        <>
            <h1>Dominik Madarász</h1>
            <h2>Software Engineer</h2>
            <ul>
                <li><b>E-Mail: </b>contact@madaraszd.net</li>
                <li><b>Phone: </b>***REMOVED***</li>
                <li><b>GitHub: </b>https://github.com/zaklaus</li>
                <li><b>LinkedIn: </b>https://linkedin.com/in/zaklaus</li>
            </ul>

            <p>
                Born: <b>3. February 1997</b> in Zvolen, Slovak Republic.
            </p>

            <p>
                Experienced in back-end, front-end and full-stack development, application architecture development, code
structure development, game development, product management, team management, online marketing.
            </p>

            <h2>Experience</h2>

            <p>
                Please, visit: <b>https://madaraszd.net/#portfolio</b> for list of all projects.
            </p>

            <Technologies />

            <h2>Occupation</h2>
            <ul>
                <li>2018 - 2019 at <b>PEMIBA, s.r.o.</b>
                    <ul>
                        <li><b>Position: </b>Software Developer</li>
                        <li><b>Technologies: </b>PHP, Nette Framework, JavaScript, jQuery</li>
                    </ul>
                </li>
            </ul>

            <h2>Education</h2>
            <ul>
                <li>2013 - 2017 at <b>Gymnázium Ľudovíta Štúra</b>, Zvolen, Banskobystrický Kraj, Slovak Republic
                    <ul>
                        <li>High School Diploma</li>
                        <li>Computational Science and Engineering coursework</li>
                        <li>Information Technology coursework</li>
                    </ul>
                </li>
            </ul>

            <h2>Spoken Languages</h2>

            <ul>
                <li>English</li>
                <li>Slovak</li>
                <li>Czech</li>
            </ul>

            <h2>Additional Skills</h2>

            <ul>
                <li>Blender</li>
                <li>Adobe Photoshop</li>
                <li>Inkscape</li>
                <li>Audio & Video Editing</li>
                <li>Microsoft Office</li>
                <li>Networking</li>
            </ul>
        </>
    )

    res.setHeader('Content-Type', 'application/pdf')
    res.end(buffer)
}
