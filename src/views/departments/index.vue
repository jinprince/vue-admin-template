<template>
  <div class="departments-container">
  <div class="app-container">
    <el-card class="tree-card">
    <tree-tools :tree-node="company" :isRoot="true"/>
    <el-tree :data="departs" :props="defaultProps" default-expand-all>
    <tree-tools slot-scope="{data}" :tree-node="data" @delDepts="getDepartments" @addDepts="addDepts"/>
    </el-tree>
    </el-card>
  </div>
     <!-- 放置新增弹层组件  -->
    <add-dept :show-dialog="showDialog"  :tree-node="node"/>
  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
import AddDept from './components/add-dept' // 引入新增部门组件
import {getDepartments} from '@/api/departments'
import {tranListToTreeData} from '@/utils/index'


export default {
  components: { treeTools,AddDept },
  name: 'Departments',
  data(){
    return {
      departs:[],
      defaultProps:{
        label:'name'
      },
      company: { },
      showDialog: false, // 显示窗体
      node:null
    }
  },
  created(){
    this.getDepartments()
  },
  methods: {
    async getDepartments(){
      const result=await getDepartments()
      this.company={name:result.companyName,manager:'负责人'}
      this.departs=tranListToTreeData(result.depts,'')
      this.companyName={name:result.companyName,manager:'负责人',id:''}
      console.log(result,11111)
    },
     addDepts(node) {
      this.showDialog = true // 显示弹层
      // 因为node是当前的点击的部门， 此时这个部门应该记录下来,
      this.node = node
    }
  },

}
</script>

<style scoped>
.tree-card {
  padding: 30px  140px;
  font-size:14px;
}
</style>