const initalstate = {
  searchquery: "",
  products: [],
  selectproduct: null,
};

const Tablereducer = (state = initalstate, action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return {
        ...state,searchquery: action.payload
      };

    case 'CREATE_PRODUCT':
        return{
            ...state, products:[...state.products, action.payload]
        };

    case "READ_PRODUCT":
        return{
            ...state, selectproduct: action.payload
        };

    case "EDIT_PRODUCT":
        return{
            ...state , products: state.products.map((product)=>{
              return product.id === action.payload.id? action.payload : product
            })        
          };

    case "DELETE_PRODUCT":
        return{
            ...state, products: state.products.filter((product)=>product.id !== action.payload )
        };
    default:
      return state;
  }
};


export default Tablereducer;