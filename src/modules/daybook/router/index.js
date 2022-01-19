export default {
    name: 'daybook',
    component:()=> import(/* webpackChunkName: "DayBook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),  
    children:[
        {
            path:'',
            name:'no-entry',
            component: ()=> import(/* webpackChunkName: "NoEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path:':id',
            name:'entry',
            component: ()=> import(/* webpackChunkName: "EntrySelected" */ '@/modules/daybook/views/EntryView.vue'),
        },
    ]
}