//权限管理
import Layout from '@/layout'
export default{
    path:'/permission',
    name:'permission',
    component:Layout,
    children:[
    {
        path:'',
        component:()=>import('@/views/permission'),
        meta:{
            title:'员工管理',
            icon:'people'
        }
    }
    ]
}