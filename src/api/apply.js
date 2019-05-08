import request from '../utils/request'

export function getApplyToUser(userid) {
  return request.get('apply')
}

/**
 *查询指定用户的申请
 *
 * @export
 * @param {*} userid
 * @returns
 */
export function fromUser(userid) {
  return request({
    url: '/apply/fromUser',
    method: 'get',
    userid
  })
}

/**
 * 提交基本信息
 * @param {*} data 基本信息参数
 */
export function postBaseInfo(data) {
  return request.post('/apply/BaseInfo', data)
}

/**
 * 提交请求信息
 * @param {*} data 请求参数
 */
export function postRequestInfo(data) {
  return request.post('/apply/RequestInfo', data)
}

/**
 * 提交申请
 * @param {
   {
    "BaseId": String,
    "RequestId": String,
    "Verify":{
      "Code": String
    }
  } data 申请的参数，包含基本信息和请求返回的两个id
 */
export function submitApply(data) {
  return request.post('/apply/Submit', data)
}

/**
 *查询用户管辖单位下需要审核的申请
 *
 * @export
 * @param {json} data
 *      {string} data.code 单位代码
 *      {string} data.id 用户id
 * @returns
 */
export function toUser(data) {
  return request({
    url: '/apply/toUser',
    method: 'get',
    data
  })
}

/**
 *查询指定单位的申请
 *
 * @export
 * @param {*} companyCode
 * @returns
 */
export function fromCompany(companyCode) {
  return request({
    url: '/apply/fromUser',
    method: 'get',
    companyCode
  })
}

/**
 *查询需要指定单位审核的申请
 *
 * @export
 * @param {*} companyCode
 * @returns
 */
export function toCompany(companyCode) {
  return request({
    url: '/apply/toCompany',
    method: 'get',
    companyCode
  })
}

/**
 *查询申请详情
 *
 * @export
 * @param {*} id
 * @returns
 */
export function detail(id) {
  return request({
    url: '/apply/detail',
    method: 'get',
    id
  })
}