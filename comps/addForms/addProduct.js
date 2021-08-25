import { useState } from 'react';
import styles from './addProduct.module.css'

const addProduct = () => {

    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [image, setImage] = useState('');
    const [isPending, setIsPending] = useState(false);
    // const history = useHistory();

    const handleSubmit = async event => {
        e.preventDefault();
        setIsPending(true);

        const addProduct = await fetch(
            'http://192.168.1.114:8080/nazin/shop/add-shop',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                price: JSON.stringify({
                    name: event.target.name.value,
                    address: event.target.address.value,
                    price: event.target.price.value
                })
            })
            const addedProducts = await addProduct.json()
            .then(() => {
                console.log('new product added')
                setIsPending(false)
            })

    }

    return (
        <div className={styles.addProduct}>
            <form onSubmit={handleSubmit}>
                <label>product name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>product price</label>
                <input
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>product image</label>
                <input
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                {!isPending && <button>Add product</button>}
                {isPending && <button disabled>Adding product..</button>}
            </form>
        </div>
    );
}

export default addProduct;