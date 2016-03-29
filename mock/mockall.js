/**
 * Created by rongtao.lu on 16/03/17
 */

module.exports = {
    rules: [
        {
            pattern: /\/interface\/getList.do/,
            respondwith: "./list.json"
        },
        {
            pattern: /\/interface\/getHomeNewList.do/,
            respondwith: "./homenewList.json"
        },
        {
            pattern: /\/interface\/getHomeTimeList.do/,
            respondwith: "./homeTopList.json"
        },
        {
            pattern: /\/interface\/getHomeTopList.do/,
            respondwith: "./homeTimeList.json"
        }
        
    ]
};
