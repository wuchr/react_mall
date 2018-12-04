
/*
 用户的操作
 */
import Util from 'util/util.jsx';
var util = new Util();
class Product{
    loadProductList(){
        return util.doRequest({
            type:'GET',
            url: "/api/getUserList.do",
        });
    }
}

export default Product;