//公司设置
import Layout from '@/layout'
export default{
    path:'/setting',
    name:'setting',
    component:Layout,
    children:[
    {
        path:'',
        component:()=>import('@/views/setting'),
        meta:{
            title:'角色管理',
            icon:'people'
        }
    }
    ]
}