import Meta from './Meta.js'
import Header from './Header.js'

const Layout = ({ children }) => {
    return (
        <div className="main">
            <Meta />
            <Header />
            <div className="page">{children}</div>
        </div>
    )
}

export default Layout
