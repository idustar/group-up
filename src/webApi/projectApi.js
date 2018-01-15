/**
 * Created by kanxuan on 2017/7/11.
 */

const util = require('../util/httpUtil')

function listProgress (projectId) {
  return util.httpGet(util.baseURL + 'project/progress/list?projectId=' + projectId)
}

//progresses sample: [{\"progressId\":21,\"order\":1},{\"progressId\":23,\"order\":2},{\"progressId\":24,\"order\":\"3\"}]
function changeOrder (projectid, userid, token, progresses) {
  return util.httpPut(util.baseURL + 'project/progress/order', {
    projectId: projectid,
    userId: userid,
    userToken: token,
    progresses: progresses
  })
}

function changeProgressName (projectid, userid, token, progressname) {
  return util.httpPut(util.baseURL + 'project/progress/name', {
    projectId: projectid,
    userId: userid,
    userToken: token,
    processName: progressname
  })
}

function delProgress (progressid, userid, usertoken) {
  return util.httpDel(util.baseURL + 'project/progress', {
    progressId: progressid,
    userId: userid,
    userToken: usertoken
  })
}

function createProgress (progressName, projectId, userid, usertoken) {
  return util.httpDel(util.baseURL + 'project/progress', {
    progressName: progressName,
    projectId: projectId,
    userId: userid,
    userToken: usertoken
  })
}

function changePermission (projectId, userId, permission) {
  return util.httpPut(util.baseURL + 'project/permission', {
    projectId: projectId,
    userId: userId,
    permission: permission
  })
}

//参数未定
function getPermission () {
  return util.httpGet(util.baseURL + 'project/permission')
}

// 参数未定
function getPersonList (projectId) {
  return util.httpGet(util.baseURL + 'project/member/list?projectId=' + projectId)
}

function delPerson (projectId, ownerId, ownerToken, memberId) {
  return util.httpDel(util.baseURL + 'project/member', {
    projectId: projectId,
    ownerId: ownerId,
    ownerToken: ownerToken,
    memberId: memberId
  })
}

function addPerson (projectid, ownid, ownertoken, memberid) {
  return util.httpPost(util.baseURL + 'project/member', {
    projectId: projectid,
    ownerId: ownid,
    ownerToken: ownertoken,
    memberId: memberid
  })
}

function moveProject (projectid, ownid, ownertoken, ownIdTo) {
  return util.httpPut(util.baseURL + 'project/owner', {
    projectId: projectid,
    ownerId: ownid,
    ownerToken: ownertoken,
    ownerIdTo: ownIdTo
  })
}

function getProjectList (ownid, ownertoken) {
  return util.httpGet(util.baseURL + 'project/list?ownerId=' + ownid + '&ownerToken=' + ownertoken)
}

function changeProjectInfo (projectId, ownerId, ownerToken, projectName, projectDiscription) {
  return util.httpPut(util.baseURL + 'project', {
    projectId: projectId,
    ownerId: ownerId,
    ownerToken: ownerToken,
    projectName: projectName,
    projectDiscription: projectDiscription
  })
}

function getProjectInformation (projectId) {
  return util.httpGet(util.baseURL + 'project?projectId=' + projectId)
}

function delProject (projectId, ownerId, ownerToken) {
  return util.httpDel(util.baseURL + 'project', {
    projectId: projectId,
    ownerId: ownerId,
    ownerToken: ownerToken
  })
}

function addProject (ownerId, ownerToken, projectName, projectDiscription) {
  return util.httpPost(util.baseURL + 'project', {
    ownerId: ownerId,
    ownerToken: ownerToken,
    projectName: projectName,
    projectDescription: projectDiscription
  })
}

module.exports = {
  listProgress,
  changeOrder,
  changeProgressName,
  delProgress,
  createProgress,
  changePermission,
  getPermission,
  getPersonList,
  delPerson,
  addPerson,
  moveProject,
  getProjectList,
  changeProjectInfo,
  getProjectInformation,
  delProject,
  addProject
}
