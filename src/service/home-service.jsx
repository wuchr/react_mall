import Util from 'util/util.jsx';
let util = new Util();
class HomeService{
    /*
    获取总数
     */
    getStatistics(){
       return util.doRequest({
            type:"GET",
            url:"/api/getStatistics.do"
        });
    }
}
export default HomeService