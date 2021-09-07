import React from "react"

const Loading = ({ visible }) => {
    return(
        <div>
            { visible === true ? "Loading..." : ""}
        </div>
    )
}

export default Loading