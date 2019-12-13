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

/**
 * 汉字数字
 * @param num - 数字
 * @returns String - 汉字数字
 * TODO 当前适合轮数小于100
 */
function chineseNumber(num) {
    let theNum = num.toString()
    let theNumLength = theNum.length
    let chineseNum = ''
    for(let i = 0 ; i < theNumLength; i ++ ) {
        if(i == 1) {
            if(chineseNum == '一') {
                chineseNum = ''
            }
            chineseNum = chineseNum + '十'
        }
        chineseNum = chineseNum + toChinese(theNum[i])
    }
    return chineseNum
}

/**
 * 数字转换
 * @param num - 数字
 */
function toChinese(string) {
    switch(string) {
        case '0' :
            return ''
        case '1':
            return '一'
        case '2':
            return '二'
        case '3':
            return '三'
        case '4':
            return '四'
        case '5':
            return '五'
        case '6':
            return '六'
        case '7':
            return '七'
        case '8':
            return '八'
        case '9':
            return '九'
    }
}

/**
 * 字母序号
 * @param num - 数字
 */
function toEnglish(num) {
    switch(parseInt(num)) {
        case 0 :
            return 'A'
        case 1 :
            return 'B'
        case 2 :
            return 'C'
        case 3 :
            return 'D'
        case 4 :
            return 'E'
        case 5 :
            return 'F'
    }
}

/**
 * 正则匹配链接
 * @param string - 链接
 * @returns {boolean}
 */
function verLinkBool(string) {
    let reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/
    return reg.test(string)
}

/**
 * 正则匹配身份证号码
 * @param string - 身份证号码
 * @returns {boolean}
 */
function verIdCardBool(string) {
    let reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    return reg.test(string)
}

/**
 * 正则匹配手机号码
 * @param string - 手机号码
 * @returns {boolean}
 */
function verPhoneBool(string) {
    let reg = /^[1][1,2,3,4,5,6,7,8,9,0][0-9]{9}$/
    return reg.test(string)
}

/**
 * 正则匹配邮箱
 * @param string - 邮箱
 * @returns {boolean}
 */
function verEmailBool(string) {
    let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    return reg.test(string)
}

/**
 * 正则匹配正整数
 * @param string - 数字
 * @returns {boolean}
 */
function verNumBool(string) {
    if(!parseInt(string)) {
        return false
    }
    let reg = /^[0-9]*[1-9][0-9]*$/
    return reg.test(string)
}

/**
 * 正则匹配非负数整数
 * @param string - 数字
 * @returns {boolean}
 */
function verNumBool2(string) {
    let reg = /^\d+$/
    return reg.test(string)
}

/**
 * 正则匹配非负数
 * @param string - 数字
 * @returns {boolean}
 */
function verNumBool3(string) {
    let reg = /^\d+(\.{0,1}\d+){0,1}$/ 
    return reg.test(string)
}

/**
 * 正则匹配由数字、26个英文字母或者下划线组成的字符串
 * @param string - 字符串
 * @returns {boolean}
 */
function verEnBool(string) {
    let reg = /([^A-Za-z0-9\s\(\)]+)+/
    return !string.match(reg)
}

/**
 * 正则匹配字母数字
 * @param string - 字符串
 * @returns {boolean}
 */
function noCnBool(string) {
    let reg = /([^A-Za-z0-9\s\-\(\)]+)+/
    return !string.match(reg)
}

/**
 * 时间不满十位数在前边添加0
 * @param Number - 数字
 * @returns {{String}}
 */
function timeString(num) {
    let string = num.toString()
    if(string.length == 1) {
        string = '0' + string
    }
    return string
}



export {
    timestampToTime,
    timesToTimetamp,
    timeDifference,
    chineseNumber,
    timeString,
    noCnBool,
    verEnBool,
    verNumBool3,
    verNumBool2,
    verNumBool,
    verEmailBool,
    verPhoneBool,
    verIdCardBool,
    verLinkBool,
    toEnglish
}