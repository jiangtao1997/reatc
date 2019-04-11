
const Mock = require('mockjs');
const _ = require('lodash');

module.exports = function(){
    return{
        people:_.times(50,function(n){
            return{
                id:n,
                name:Mock.Random.cname(),
                text:Mock.Random.cparagraph(),
                image:Mock.Random.image('300x200',Mock.Random.color()),
                data:Mock.Random.date('yyyy-MM-dd'),
                star:Mock.mock({
                    'number|1-100':100
                })
            }
        }),
        news:_.times(50,function(n){
            return{
                id:n,
                title:Mock.Random.cname(),
                text:Mock.Random.cparagraph(),
                image:Mock.Random.image('300x200',Mock.Random.color()),
                data:Mock.Random.date('yyyy-MM-dd')
            }
        })
    }

}

