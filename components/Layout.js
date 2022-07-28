// component folder is for all the pages that dont want to be routed with the child apis
// we use the _app.js to get a layout template for each of the pages and sets the pattern on how each page should look like

import Navbar from './Navbar'

// here children is the pageprops of each child page
const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className="flex h-screen bg-pack-train">
            <div className="m-auto bg-red">
            {children}
            </div>    
            </div>
        </>

    )
}