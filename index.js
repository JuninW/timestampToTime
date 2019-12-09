/**
 * 时间戳转显示时间
 * @param String - 时间戳
 * @returns String - 显示时间
 */
function timestampToTime(timestamp,type='y-y-d') {
    if(timestamp == '0') {
        return '-'
    }
    if(timestamp == '999999999') {
        return '至今'
    }
    let timer = ''
    let date = new Date(parseInt(timestamp) * 1000)
    if(type == 'y-y-d') {
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth()+1 < 10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1) + '-'
        let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        timer = Y+M+D
    }
    if(type == 'y-y-d-time') {
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth()+1 < 10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1) + '-'
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
        timer = Y+M+D+h+m
    }

    return timer
}

/**
 * 显示时间转时间戳
 * @param String - 时间
 * @returns String - 时间戳
 */
function timesToTimetamp(time='nowTime') {
    let date = null
    if(time == 'nowTime') {
        date = new Date()
    }
    else {
        date = new Date(time)
    }
    return Math.round(date.getTime()/1000)
}

/**
 * 计算两个时间戳差
 * @param String - 时间1
 * @param String - 时间2
 * @returns String - 时间差
 */
function timeDifference(time,time2) {
    let dataL = 0
    let dataR = 0
    if(time > time2) {
        dataL = time2
        dataR = time
    } else if(time < time2) {
        dataL = time
        dataR = time2
    } else {
        return  '0小时0分钟'
    }
    let timeDiff = dataR - dataL
    let min = parseInt(timeDiff/60)
    let hour = Math.floor(min/60)
    min = min%60
    return hour + '小时' + min + '分钟'
}