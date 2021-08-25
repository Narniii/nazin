export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_QUANTITY = "ADD_QUANTITY"
export const MIN_QUANTITY = "MIN_QUANTITY"
export const ADD_PRICE = "ADD_PRICE"
export const MIN_PRICE = "MIN_PRICE"

export const add = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})
export const min = (product) => ({
    type: DELETE_PRODUCT,
    payload: product

})
export const addPrice = (price) => ({
    type: ADD_PRICE,
    payload: price
})
export const minPrice = (price) => ({
    type: MIN_PRICE,
    payload: price
})