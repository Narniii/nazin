import { useState } from 'react';
import styles from './addShop.module.css'

// const AddShop = () => {

//     const [status, setStatus] = useState(500);
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState(' ');
//     const [image, setImage] = useState(' ');
//     const [rate_average, setRate_average] = useState(' ')
//     const [rate_count, setRate_count] = useState(' ')
//     const [isPending, setIsPending] = useState(false);
//     // const history = useHistory();

//     const PostShop = async (e) => {
//         e.preventDefault();
//         const shop = { name: name, address: address, image: image, rate_average: rate_average, rate_count: rate_count }
//             setIsPending(true)
//             console.log(isPending)
//             await fetch(
//                 'http://192.168.1.114:8080/nazin/shop/add-shop',
//                 {
//                     method: 'POST',
//                     mode: 'no-cors',
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(shop)
//                 })
//                 .then(res => setStatus(res.status))
//                 .then(
//                     console.log('new shop added'),
//                     console.log(status)
//                     // setIsPending(false)
//                 )
//     }
//     return (
//         <div className={styles.addShop}>
//             <h2>Add a new shop</h2>
//             <div >
//                 <label>shop name</label>
//                 <input
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <label>shop address</label>
//                 <input
//                     required
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                 />
//                 <label>shop image</label>
//                 <input

//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                 />
//                 <label>rate average</label>
//                 <input

//                     value={rate_average}
//                     onChange={(e) => setRate_average(e.target.value)}
//                 />
//                 <label>rate count</label>
//                 <input

//                     value={rate_count}
//                     onChange={(e) => setRate_count(e.target.value)}
//                 />

//                 {!isPending && <button type="submit" onClick={PostShop}>Add shop</button>}
//                 {isPending && <button disabled>Adding shop..</button>}
//             </div>
//         </div>
//     );
// }

// export default AddShop;

const AddShop = ({ shop }) => {
    const [status, setStatus] = useState(500);
    const [name, setName] = useState('');
    const [address, setAddress] = useState(' ');
    const [image, setImage] = useState(' ');
    const [rate_average, setRate_average] = useState(' ')
    const [rate_count, setRate_count] = useState(' ')
    const [isPending, setIsPending] = useState(false);

    const PostShop = async event => {
        event.preventDefault()
        const shop = { name: name, address: address, image: image, rate_average: rate_average, rate_count: rate_count }
        setIsPending(true);
        fetch('http://192.168.1.114:8080/nazin/shop/add-shop',
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(shop)
            }
        ).then((response) => {
            setIsPending(false);
            // response.json()
            console.log(response)
        }).catch((err) => {
            setTimeout(() => {
                const erroresh = err.toString()
                console.log(erroresh);
            }, 500);
        });
    }

    return (
        <div className={styles.addShop}>
            <h2>Add a new shop</h2>
            <div >
                <label>shop name</label>
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>shop address</label>
                <input
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>shop image</label>
                <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label>rate average</label>
                <input
                    value={rate_average}
                    onChange={(e) => setRate_average(e.target.value)}
                />
                <label>rate count</label>
                <input
                    value={rate_count}
                    onChange={(e) => setRate_count(e.target.value)}
                />

                {!isPending && <button type="submit" onClick={PostShop}>Add shop</button>}
                {isPending && <button disabled>Adding shop..</button>}
            </div>
        </div>
    );
}
export default AddShop;