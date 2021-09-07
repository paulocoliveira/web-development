import React, { useEffect, useState } from "react"
import Loading from "../components/Loading"

const Albums = () => {
  
    const [isLoading, setIsLoading] = useState(false)
    const [albums, setAlbums] = useState([])

    useEffect(()=> {
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => {
            setAlbums(data)
            setIsLoading(false)
        })
    },[])
    
    return (
        <>
            <Loading visible={isLoading} />
            {
                albums.map(album => {
                    return(
                    <div>
                        <span>{album.title} - id: {album.id}</span>
                    </div>
                    )
                })
            }
        </>
        )
    }

export default Albums