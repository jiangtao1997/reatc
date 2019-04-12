import axios from 'axios';

export const getListData = (data)=>{
    return{
        type:"GET_NEWS_LISTS",
        payload:data
    }
}


export function fetchLists(params = {page:1}){
    return dispatch=>{
        var url = `http://localhost:3000/news?_page=${params.page}&_limit=10&_sort=Id&_order=desc`;
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