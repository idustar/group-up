/**
 * Created by kanxuan on 2017/7/11.
 */

const util = require('../util/httpUtil.js')

function login (email, password) {
  return util.httpPost(util.baseURL + 'login', {email: email, password: password})
}

function authority (token) {
  return util.httpPost(util.baseURL + 'authority', {token: token})
}

function logout (user_id, token) {
  return util.httpDel(util.baseURL + 'login', {id: user_id, token: token})
}

function register (email, password) {
  return util.httpPost(util.baseURL + 'user', {email: email, password: password})
}

function getUserInformation (id, token) {
  return util.httpGet(util.baseURL + 'user/?id=' + id + '&token=' + token)
}

function changeUserInformation (id, token, name, address, gender, phonenumber, job, website, birthday) {
  return util.httpPut(util.baseURL + 'user/', {
    id: id,
    token: token,
    name: name,
    address: address,
    gender: gender,
    phonenumber: phonenumber,
    job: job,
    website: website,
    birthday: birthday
  })
}

//接口参数不全
function changeAvatar (avatar_url) {
  return util.httpPut(util.baseURL + 'user/avator', {avatar_url: avatar_url})
}

function changePassword (id, fromPassword, toPassword) {
  return util.httpPut(util.baseURL + 'user/pwd', {
    userId: id,
    passwordFrom: fromPassword,
    passwordTo: toPassword
  })
}

module.exports = {
  login,
  authority,
  logout,
  register,
  getUserInformation,
  changeUserInformation,
  changeAvatar,
  changePassword
}