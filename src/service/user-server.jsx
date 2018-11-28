
/*
 用户的操作
 */
import Util from 'util/util.jsx';
var util = new Util();
class User{
    userLogin(loginInfo){
        util.doRequest({
            type:'post',
            url: "http://www.baidu.com",
            data: loginInfo
        });
    }
}