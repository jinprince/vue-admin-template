// 社保
import Layout from '@/layout'
export default{
    path:'/social',
    name:'social',
    component:Layout,
    children:[
    {
        path:'',
        component:()=>import('@/views/social'),
        meta:{
            title:'员工管理',
            icon:'people'
        }
    }
    ]
}