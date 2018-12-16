
/*
 用户的操作
 */
import Util from 'util/util.jsx';
var util = new Util();
class User{
     userLogin(loginInfo){
      return util.doRequest({
            type:'POST',
            url: "/manager/user/login.do",
            data: loginInfo
        });
    }
    logout(){
        return util.doRequest({
            type:'POST',
            url: "/api/userLogout.do",
        });
    }
    loadUserList(){
        return util.doRequest({
            type:'GET',
            url: "/api/getUserList.do",
        });
    }
}

export default User;