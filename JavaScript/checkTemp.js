// 0-20 liiga külm -1
//21-40 paras 0
//41-60 liiga kuum 1
//checkTemp(temp)
//checkTemp.js

//github.com

function checkTemp(temp) {
    if (temp <= 20) {
    console.log("Liiga külm");
    return -1
} else if (temp <=40){
    console.log("Paras");
    return 0
} else if (temp <= 60) {
    console.log("Liiga kuum");
    return 1
}
}