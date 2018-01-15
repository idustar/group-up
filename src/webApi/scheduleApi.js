const util = require('../util/httpUtil.js')

function createSchedule (scheduleName, scheduleContent, location, startTime, endTime, repeatDaily, repeatWeekly, participatorsId) {
  return util.httpPost(util.baseURL + 'schedule/', {
    scheduleName: scheduleName,
    scheduleContent: scheduleContent,
    location: location,
    startTime: startTime,
    endTime: endTime,
    repeatDaily: repeatDaily,
    repeatWeekly: repeatWeekly,
    participatorsId: participatorsId
  })
}

function deleteSchedule (scheduleId, operatorId) {
  return util.httpDel(util.baseURL + 'schedule/', {
    scheduleId: scheduleId,
    operatorId: operatorId
  })
}

function updateSchedule (scheduleId, scheduleName, scheduleContent, location, startTime, endTime, repeatDaily, repeatWeekly, participatorsId, operatorId) {
  return util.httpPut(util.baseURL + 'schedule/', {
    scheduleId: scheduleId,
    scheduleName: scheduleName,
    scheduleContent: scheduleContent,
    location: location,
    startTime: startTime,
    endTime: endTime,
    repeatDaily: repeatDaily,
    repeatWeekly: repeatWeekly,
    participatorsId: participatorsId,
    operatorId: operatorId
  })
}

function getSchedule (scheduleId) {
  return util.httpGet(util.baseURL + 'schedule/?scheduleId=' + scheduleId)
}

function getScheduleList (userId) {
  return util.httpGet(util.baseURL + 'schedule/list/?scheduleId=' + scheduleId)
}

function addParticipator (scheduleId, participatorsId, operatorId) {
  return util.httpPut(util.baseURL + 'schedule/participator', {
    scheduleId: scheduleId,
    participatorsId: participatorsId,
    operatorId: operatorId
  })
}

function deleteParticipator (scheduleId, participatorsId, operatorId) {
  return util.httpDel(util.baseURL + 'schedule/participator', {
    scheduleId: scheduleId,
    participatorsId: participatorsId,
    operatorId: operatorId
  })
}

function getParticipatorList (scheduleId) {
  return util.httpGet(util.httpGet + 'schedule/participator/list?scheduleId=' + scheduleId)
}

module.exports = {
  createSchedule,
  deleteSchedule,
  updateSchedule,
  getSchedule,
  getScheduleList,
  addParticipator,
  deleteParticipator,
  getParticipatorList
}