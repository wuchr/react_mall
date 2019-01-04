
/*
 用户的操作
 */
import Util from 'util/util.jsx';
var util = new Util();
class Product{
    loadProductList(pageNum){
        return util.doRequest({
            type:'GET',
            url: "/nodeServer/product/productList",
            data:pageNum
        });
    }

    /*
    商品保存
     */
    saveProduct(saveInfo){
        return util.doRequest({
            type:'GET',
            url: "/nodeServer/product/saveProduct",
            data: saveInfo
        });
    }
}

export default Product;