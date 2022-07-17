import request from '@/utils/request'
/** *
 *
 * 获取组织架构数据
 * **/
 export function getDepartments() {
    return request({
      url: '/company/department'
    })
  }
  export function delDepartments(id){
      return request({
          url:`/company/department/${id}`
      })
  }

  /**
 *  新增部门接口
 *
 * ****/
export function addDepartments(data) {
    return request({
      url: '/company/department',
      method: 'post',
      data
    })
  }
  