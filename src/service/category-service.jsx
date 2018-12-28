
/*
 用户的操作
 */
import Util from 'util/util.jsx';
var util = new Util();
class Category{
    loadCategoryList(params){
        return util.doRequest({
            type:'post',
            url: "/manager/category/get_category.do",
            data:params
        });
    }
}

export default Category;