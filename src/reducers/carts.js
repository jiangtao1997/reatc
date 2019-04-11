var initialState = [];
var _ = require('lodash');
function carts(state=initialState,action){
    switch(action.type){

        case "ADDTOCARTS":
            var pos = _.findIndex(state,{id:action.payload.id});
            if(pos !== -1){
               state[pos].quantity = state[pos].quantity + 1;
               state[pos].subTotal = state[pos].quantity * state[pos].star.number;
               return [...state];
            }else{
                action.payload.quantity = 1;
                action.payload.subTotal = action.payload.star.number;
                return [...state,action.payload];
            }
        default:
            return state;
    }
}

export default carts;