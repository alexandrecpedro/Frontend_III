import { useState } from 'react';
import { SeventhClassCardProduct } from '../../components/SeventhClassCardProduct';
import { products } from './database'
import './style.scss'

export function EighthClass() {
	/** REACT HOOK **/
	// useState
	const [allProducts, setAllProducts] = useState(products)
    // const [productName, setProductName] = useState("")
    // const [productPrice, setProductPrice] = useState("")
    // const [productPicture, setProductPicture] = useState("")
    const [product, setProduct] = useState({
        name: "",
        price: "",
        picture: ""
    })
    const [formsError, setFormsError] = useState(false)

	// const newProduct = {
    //     id: 4,
    //     name: 'Playstation 4',
    //     price: '2.000',
    //     picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    // }

	/** FUNCTION **/
	// const addNewProduct = () => {
	// 	// allProducts.push(newProduct)
	// 	setAllProducts([...allProducts, newProduct])
	// }

    const registerProduct = (event) => {
        event.preventDefault()
        const newRegisteredProduct = {
            name: product.name,
            price: product.price,
            picture: product.picture
        }

        if (product.name.trim() === "" || product.price <= 0 || product.price.trim() === "") {
            setFormsError(true)
        } else {
            setFormsError(false)

            setAllProducts([...allProducts, newRegisteredProduct])

            setProduct({ name: "", price: "", picture: ""})
            // setProductName("")
            // setProductPrice("")
            // setProductPicture("")
        }
    }

    return (
		<main className="seventh-class-component">
			<div className="tittle-wrapper">
                <h1>Products</h1>
                {/* <button onClick={addNewProduct}>Add new product</button> */}
            </div>

            <form action="" className={formsError && "form-error"} onSubmit={event => registerProduct(event)}>
                <div>
                    <label htmlFor="productName">Name</label>
                    <input type="text" id="productName" value={product.name} onChange={event => setProduct({
                        name: event.target.value,
                        ...product
                    })} />
                </div>

                <div>
                    <label htmlFor="productPrice">Price</label>
                    <input type="text" id="productPrice" value={product.price} onChange={event => setProduct({
                        ...product,
                        price: event.target.value,
                    })} />
                </div>

                <div>
                    <label htmlFor="productPicture">Picture</label>
                    <input type="text" id="productPicture" value={product.picture} onChange={event => setProduct({
                        ...product,
                        picture: event.target.value
                    })} />
                </div>

                {/* <button type="submit" onClick={event => registerProduct(event)}>Register product</button> */}
                <button type="submit">Register product</button>
                <button type="reset">Clear fields</button>
            </form>

            {
                formsError && <span>Your form contain errors!</span>
            }

            <section className='products'>
                {allProducts.map(({ id, picture, name, price }) => (
                    <SeventhClassCardProduct
						key={id}
                        picture={picture}
						name={name}
						price={price}
                    />
                ))}
            </section>
		</main>
	)
}