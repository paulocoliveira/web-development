import Link from "next/link"

const Index = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            <br />
            <Link href="/category/products">
                <a>Products Page</a>
            </Link>
        </div>
    )
}

export default Index