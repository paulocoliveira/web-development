import React from "react"
import Header from "../partials/Header"
import Nav from "../partials/Nav"

const Template = ({ children, pages, activePage, onChangePage}) => {

    const title = pages[activePage].text

    return(
        <>
            <Nav pages={pages} onChangePage={onChangePage}/>
            <Header title={title}/>
            {children}
        </>    
    )
}

export default Template