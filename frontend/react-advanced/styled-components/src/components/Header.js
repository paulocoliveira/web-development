import styled from "styled-components"

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
`

const Rectangle = styled.section`
    width: 500px;
    height: 300px;
    background-color: red;
`

const Link = styled.a`
    color: white;
`

const Header = () => {
    return (
        <>
            <Rectangle>
                <Box>
                    <Link href="http://www.disney.com">Lorem Ipsum</Link>
                </Box>
            </Rectangle>
        </>
    )
}

export default Header
