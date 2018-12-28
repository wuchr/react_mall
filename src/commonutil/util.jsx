
/*
    公共方法
 */

class Util{

    //错误提示
    errInfoTip(errMsg){
        alert(errMsg)
    }

    /*
    获取url参数
     */
    getUrlParam(name){
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    }
    /*
    ajax 请求的封装
     */
    doRequest(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                url:   param.url || "",
                type:  param.type || "get",
                dataType: param.dataType || "json",
                data: param.data || {},
                success: res => {
                    console.log(res);
                    if(res.status == 0){
                        console.log(res);
                        resolve(res);
                    }else if(res.status == "10"){
                        console.log("没有登录 去做登录操作");

                    }else if(res.status == "1"){
                        reject(res);
                    }
                },
                error: error =>{
                    console.log("err");
                    reject(error.statusTexts);
                }
            })
        })

    }
    /*
        时间格式化
     */
    dateFormate(date){
        var yyyy = date.getFullYear();
        var mm = date.getMonth()+1;
        var dd = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return yyyy + "-" + mm + "-" + dd + " " + h+":"+m+":"+s;
    }

}

export default Util;