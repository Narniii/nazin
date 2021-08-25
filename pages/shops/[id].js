// const getShop = async (id) => {
//     const res = await fetch(`http://192.168.1.114:8080/nazin/shop/get/${id}`)
//     const shop =await res.json()
//     return shop;
// }
// export const getStaticPaths = async () => {

//     const res = await fetch("http://192.168.1.114:8080/nazin/shop")
//     const shops = await res.json()
//     const paths = shops.map((shop) => (
//         {
//             params : {id : shop.name}
//         }
//     ))
//     return {
//         paths , 
//         fallback: false,
//     }
// }
// export const getStaticProps = async ({ params }) => {

//     const shop = await getShop(params.id)

//     return {
//         props: {
//             shop,
//         }
//     }
// }

const Shop = ({ shop }) => {
    return (
        <div> shop details</div>
    )
}
export default Shop;