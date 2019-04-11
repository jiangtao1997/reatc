

const initialState = {
    lists:[],
    total:''
}
//2.仓库的初始化   将初始的值传给仓库   state是一个状态  action是一个动作用来接收方法传过来的值
function counter(state = initialState,action){
    switch(action.type){
        case "GETLISTS":
            return {...state,lists:action.payload.lists,total:action.payload.total}
        default:
            return state;
    }
}

export default counter;