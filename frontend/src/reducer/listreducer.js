const initialState=[
        {
        title:"1st",
        id:`list-${0}`,
        cards:[
            {
                id:0,
                text:'1st created'
            },
            {
                id:1,
                text:'2st created'
            },
            {
                id:2,
                text:'3st created'
            }
        ]
    },
        {
        title:"2st",
        id:`list-${1}`,
        cards:[
            {
                id:3,
                text:'1st crea'
            },
            {
                id:4,
                text:'2st crea'
            },
            {
                id:5,
                text:'3st creahkjnl kj;loj;lk;k'
            }
        ]
    },
        {
        title:"3rd",
        id:`list-${2}`,
        cards:[
            {
                id:6,
                text:'1st crea'
            },
            {
                id:7,
                text:'2st crea'
            },
            {
                id:8,
                text:'3st crea'
            }
        ]
    },
]




export default function listreducer (state={initialState},action){
    switch(action.type){
        default:
            return state
    }
}
