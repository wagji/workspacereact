var timestamp = new Date().getTime();
console.log(timestamp);// 결과 : 1675397128114


// timestamp Date 객체로 변환 출력
var currentDate = new Date('1675397344299');
console.log(currentDate);

// 결과 : Fri Feb 03 2023 13:10:05 GMT+0900 (한국 표준시)


function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}


var currentDate = new Date('1675397344299');

// timestamp를 yyyy-MM-dd HH:mm:ss 로 출력
var currentFormatDate = dateFormat(currentDate);
console.log(currentFormatDate);

// 결과 : 2023-02-03 13:21:36


function getDateObject(time) {

    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);
    var sec = time.substr(12,2);
   
    return new Date(year,month,day, hour, min, sec);
}


var currentDate = '20230203132136';
var dateObj = getDateObject(currentDate);
console.log(dateObj);

// 결과 : Fri Feb 03 2023 13:10:05 GMT+0900 (한국 표준시)



function getTimeStamp(time) {

    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);
    var sec = time.substr(12,2);
   
    return new Date().getTime();
}


var currentDate = '20230203132136';
var dateObj = getTimeStamp(currentDate);
console.log(dateObj);

// 결과 : 1675398959636