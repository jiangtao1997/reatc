import axios from 'axios';

//方法的传递  传递个仓库的初始化
export const increase = () =>{
    return{
        type:"INCREASE"
    }
}

export const decrease = () =>{
    return{
        type:"DECREASE"
    }
}

export const getListData = (data)=>{
    return{
        type:"GETLISTS",
        payload:data
    }
}


export function fetchList(){
    return dispatch=>{
        var url = `http://129.204.206.178:3000/counter`;
        return axios({
            url:url,
            method:'post'
        }).then(res=>{
            var total = res.headers['x-total-count'];
            var lists = res.data;
            var data =  {
                total,
                lists
            }
            dispatch(getListData(data));
        })
    }
}