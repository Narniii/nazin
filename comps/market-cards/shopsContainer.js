import styles from './shopsContainer.module.css'
import Link from 'next/link';

  
const ShopsContainer = ({shops}) => {
    return (
        <div className={styles.shopsContainer}>
            {shops.map((shop) =>
                <Link href={`/shops/${shop.name}`} key={shop.name}>
                    <div className={styles.card}>
                        <p className={styles.shopName}>{shop.name}</p>
                        <p>{shop.address}</p>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default ShopsContainer;