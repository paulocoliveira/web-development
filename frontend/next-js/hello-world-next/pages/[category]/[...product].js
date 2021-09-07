import { useRouter } from "next/router"

const Product = () => {
    const router = useRouter()

    console.log(router)
    
    return (
        <div>
            <h1>Product</h1>
            <h2>{ router.query.category }</h2>
            <h3>{ router.query.product }</h3>
        </div>
    )
}

export default Product