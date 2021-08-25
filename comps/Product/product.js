import Image from 'next/image'
import styles from './product.module.css'
// import add from '../../Redux/actions/main'
// import min from '../../Redux/actions/main'
import { sizing } from '@material-ui/system';
import { useDispatch, useSelector } from 'react-redux';
// import rootReducer from '../Redux/Reducer/rootReducer';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';


const Product = (props) => {


    // console.log(props.id)

    // const onAdd = (id) =>{
    //     dispatch(add(id))
    // }
    // const onMin = (id) => {
    //     dispatch(min(id))
    // }


    return (
        <div className={styles.product}>
            <img className={styles.image} src={props.image} />
            <h6 className={styles.itemName}>{props.item}</h6>
            <div className={styles.price}>
            <AttachMoneyOutlinedIcon style={{width:"15px" , height:"15px"}}/>
            <h6>{props.price}</h6>
            <LocalOfferOutlinedIcon style={{width:"15px" , height:"15px"}} />
            </div>
            <div className={styles.addOkam}>
                <button onClick={props.add} >+</button>
                <div>{props.count}</div>
                <button onClick={props.min} >-</button>
            </div>
        </div>
    )
}
export default Product;