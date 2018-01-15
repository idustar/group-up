const util = require('../util/httpUtil.js')

function createTask (name, content, creatorId, memberId, progressId, file, ddl) {
  return util.httpPost(util.baseURL + 'task', {
    name: name,
    content: content,
    creatorId: creatorId,
    memberIds: memberIds,
    progressId: progressId,
    file: file,
    ddl: ddl
  })
}

function deleteTask (projectId, taskId, userId) {
  return util.httpDel(util.baseURL + 'task', {projectId: projectId, taskId: taskId, userId: userId})
}

function getTaskList (projectId, userId) {
  return util.httpGet(util.baseURL + 'task/list?projectId=” + = projectId “&userId=“ + userId')
}

function updateInfo (taskId, executorId, userId) {
  return util.httpPut(util.baseURL + 'task/item', {
    taskId: taskId,
    executorId: executorId,
    userId: userId
  })
}

function getInfo (projectId, taskId) {
  return util.httpGet(util.baseURL + 'task/item?projectId=” + = projectId “&taskId” += taskId')
}

function updateState (taskId, userId) {
  return util.httpPut(util.baseURL + 'task/state', {
    taskId: taskId,
    userId: userId
  })
}

function createSubTask (subtaskContent, taskId, userId) {
  return util.httpPost(util.baseURL + 'subtask', {
    subtaskContent: subtaskContent,
    taskId: taskId,
    userId: userId
  })
}

function deleteSubTask (subtaskId, userId) {
  return util.httpDel(util.baseURL + 'subtask', {subtaskId: subtaskId, userId: userId})
}

function getSubtaskList (subtaskId) {
  return util.httpGet(util.baseURL + 'subtask/list/?subtaskId=” += subtaskId')
}

function updateSubtaskInfo (subtaskId, subtaskExecutorId) {
  return util.httpPut(util.baseURL + 'subtask', {
    subtaskId: subtaskId,
    subtaskExecutorId: subtaskExecutorId
  })
}

function updateSubtaskState (subtaskId, userId) {
  return util.httpPut(util.baseURL + 'subtask/state', {
    subtaskId: subtaskId,
    userId: userId
  })
}

function addMember (taskId, participatorIds) {
  return util.httpDel(util.baseURL + 'task/participator', {
    taskId: taskId,
    participatorIds: participatorIds
  })
}

function deleteMember (taskId, participatorIds) {
  return util.httpDel(util.baseURL + 'task/participator', {
    taskId: taskId,
    participatorIds: participatorIds
  })
}

function getMemberList (taskId) {
  return util.httpGet(util.httpGet + 'task/participator/list?taskId=“ + taskId')
}

module.exports = {
  createTask,
  deleteTask,
  getTaskList,
  updateInfo,
  getInfo,
  updateState,
  createSubTask,
  deleteSubTask,
  getSubtaskList,
  updateSubtaskInfo,
  updateSubtaskState,
  addMember,
  deleteMember,
  getMemberList
}
