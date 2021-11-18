import { ADD_PRODUCT,DELETE_PRODUCT } from "./Type"

const initialState =  {
  productList : []
}

export const VegetableReducer = (state = initialState, action) => 
{
  switch (action.type) 
  {
      case ADD_PRODUCT:
          {
              const product = action.payload;
              return {
                  ...state,
                  productList: state.productList.concat({
                      product_id:Math.random(),
                      product_name:product.product_name,
                      product_price:product.product_price,
                      product_category:product.product_category,
                      product_quantity:product.product_quantity,
                      product_totalprice:product.product_totalprice
                  }),
                 
                };   
          }
      case DELETE_PRODUCT:
          {
              return {
                  ...state,
                  productList: state.productList.filter((item) =>
                    item.product_id !== action.product_id)
                }; 
            }
      default:
          return state;
  }
}


