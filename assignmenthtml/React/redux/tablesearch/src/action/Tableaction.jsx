export const searchCount = (query)=>{
    return{
        type: "SEARCH_QUERY",
        payload:query
    }
}

export const createProduct = (product)=>{
    return{
        type:"CREATE_PRODUCT",
        payload: product
    }
}

export const readProduct = (product)=>{
    return{
        type: 'READ_PRODUCT',
        payload: product
    }
}


export const editProduct = (product)=>{
    return{
        type:"EDIT_PRODUCT",
        payload :product
    }
}


export const deleteProduct = (productId)=>{
    return{
        type:"DELETE_PRODUCT",
        payload: productId
    }
}