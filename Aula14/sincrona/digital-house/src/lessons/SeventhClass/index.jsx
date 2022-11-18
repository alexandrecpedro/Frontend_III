import { useState } from 'react';
import { SeventhClassCardProduct } from '../../components/SeventhClassCardProduct';
import { products } from './database'
import './style.scss'

export function SeventhClass() {
	/** REACT HOOK **/
	// useState
	const [allProducts, setAllProducts] = useState(products)

	const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

	/** FUNCTION **/
	const addNewProduct = () => {
		// allProducts.push(newProduct)
		setAllProducts([...allProducts, newProduct])
	}

    return (
		<main className="seventh-class-component">
			<div className="tittle-wrapper">
                <h1>Products</h1>
                <button onClick={addNewProduct}>Add new product</button>
            </div>

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