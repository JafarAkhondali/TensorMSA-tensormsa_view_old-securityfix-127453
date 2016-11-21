export default class ReportRepository {
    constructor(api) {
        this.api = api;
    }

    getConfigs(param) {
        return this.api.get(`/config/nn/${param}/param`).then((data) => {
            return data;
        });
    }

    getCommonNNInfo(params) {
        return this.api.get(`/api/v1/type/common/nninfo//category//subcate//`, "").then((data) => {
           data = JSON.parse(data);
           return data.result;
        });
    }

    postCommonNNInfo(opt_url, id, params) {
        let url='/api/v1/type/common/nninfo/';
        console.log("키값은 : " + id);
        params["nn_id"] = id;
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }

    deleteCommonNNInfo(params) {
        let url='/api/v1/type/common/nninfo/' + params + '/';
        return this.api.delete(url, "").then((data) => {
            data = JSON.parse(data);
            return data;
        });
    }

    getCategoryList(opt_url, params) {
        let url='/api/v1/type/common/item/' + opt_url + '/';
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }

    getSubCategoryList(opt_url, params) {
        let url='/api/v1/type/common/item/subcategory/' + opt_url + '/';
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }

    getConfigNnCnn(params) {
        return this.api.get(`/api/v1/type/cnn/config/`, params).then((data) => {
            console.log(data);
           return data;
        });
    }

    putConfigNnCnn(params) {
        return this.api.put(`/api/v1/type/cnn/config/`, params).then((data) => {
            console.log(data);
           return data;
        });
    }

    postDataNnCnn(params) {
        return this.api.post(`/api/v1/type/cnn/data/`, params).then((data) => {
            console.log(data);
           return data;
        });
    }

    getDataNnCnn(params) {
        return this.api.get(`/api/v1/type/cnn/data/`, params).then((data) => {
            console.log(data);
           return data;
        });
    }

    putDataNnCnn(params) {
        return this.api.put(`/api/v1/type/cnn/data/`, params).then((data) => {
            console.log(data);
           return data;
        });
    }

    postTrainNnCnn(params) {
        return this.api.post(`/api/v1/type/cnn/train/`, params).then((data) => {
           return data;
        });
    }

    postPredictNnCnn(params) {
        return this.api.post(`/api/v1/type/cnn/predict/`, params).then((data) => {
           return data;
        });
    }

    getJsonTestData(params) {
        let url='http://localhost:8888/json/testData.json';//local test for JSON
        return this.api.getJson(url, params).then((data) => {
           return data;
        });
    }

    // getPreviewImagePath(params) {
    //     let url='http://localhost:8888/json/image_preview_test.json';//local test for JSON
    //     return this.api.getJson(url, params).then((data) => {
    //        return data;
    //     });
    // }

    getPreviewImagePath(params) {
        let url='/api/v1/type/imgpreview/nnid/';
        return this.api.get(url, params + "/").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getTableList(params) {
        let url='/api/v1/type/imagefile/';
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }

    postTableList(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    deleteTableList(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;
        return this.api.delete(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getImageFormatData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    postImageFormatData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getNetBaseInfo(opt_url, params) {
        let url='/api/v1/type/common/nninfo/' + opt_url + '/category//subcate//';
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getImageLabelData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url ;
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    postImageLabelData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url ;
        return this.api.post(url, "").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    deleteImageLabelData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url ;
        return this.api.delete(url, "").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getWdnnTableDataFromHbase(opt_url, params) {
        //let url='/api/v1/type/imagefile/' + opt_url ;
        ///api/v1/type/dataframe/base/scm/table/tb_data_cokes100/data/
        
        let url = '/api/v1/type/dataframe/base/' + opt_url;
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }
    postWdnnDataFrameFormat(opt_url, params) {
        console.log(params)
        let key_set = Object.keys(params)
        for(let key of key_set){
            console.log(key +"---->"+ params[key]);
         }
        let url='/api/v1/type/dataframe/base/' + opt_url; 
        //let url = '/api/v1/type/dataframe/base/' + databaseName + '/table/' + tableName + '/format/' + nnid + '/'
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getTableListOnDataConfig(opt_url, params) {
        let url='/api/v1/type/dataframe/base/' + opt_url +'/table/';
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }
    getDataBaseOnDataConfig(params) {
        //getDataBaseOnDataConfig
        let url='/api/v1/type/dataframe/base/';//local test for JSON
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }
    getDataFrameOnNetworkConfig(opt_url, params) {

        //opt_url = 'nn0000102/type/cell_feature/'
        //opt_url = 'nn0000102/type/label/'
        opt_url = 'nn0000102/type/all/'
        let url='/api/v1/type/dataframe/format/'+opt_url
        console.log(url)
        return this.api.get(url).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }
    postWdnnConf(opt_url, params) {
        params = {}
        params["layer"] = [10,20,30,40]
        opt_url = "nn0000102/"
        console.log(params)
        let key_set = Object.keys(params)
        for(let key of key_set){
            console.log(key +"---->"+ params[key]);
         }
        let url='/api/v1/type/wdnn/conf/' + opt_url; 
        //let url = '/api/v1/type/dataframe/base/' + databaseName + '/table/' + tableName + '/format/' + nnid + '/'
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    postCnnTrain(opt_url, params) {
        opt_url = "mesm10cnn61110/";
        params = { epoch :"12", testset : "10"}
        let url='/api/v1/type/cnn/train/' + opt_url; 
        //let url = '/api/v1/type/wdnn/train/'
        return this.api.post(url, params).then((data) => {
            //data = JSON.parse(data);
        });
    }

    postCnnEval(opt_url, params) {
        opt_url = "mesm10cnn61110/"
        params = { samplenum :"12", samplenethod : ""}
        let url='/api/v1/type/cnn/eval/' + opt_url; 
        //let url = '/api/v1/type/wdnn/eval/'
        return this.api.post(url, params).then((data) => {
            //data = JSON.parse(data);
        });
    }

    postWdnnTrain(opt_url, params) {
        opt_url = "nn0000102/"
        let url='/api/v1/type/wdnn/train/' + opt_url; 
        //let url = '/api/v1/type/wdnn/train/'
        return this.api.post(url, params).then((data) => {
            //data = JSON.parse(data);
        });
    }

    postWdnnEval(opt_url, params) {
        opt_url = "nn0000102/"
        let url='/api/v1/type/wdnn/eval/' + opt_url; 
        //let url = '/api/v1/type/wdnn/eval/'
        return this.api.post(url, params).then((data) => {
            //data = JSON.parse(data);
        });
    }


    getCategoryList() {
        let url='/api/v1/type/common/item/category//';
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }

    getSubCategoryList(cate) {
        let url='/api/v1/type/common/item/subcategory/' + cate + '/';
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }   

    getNameSpaceList(datatype, preprocess , category, subcategory) {
        let url='/api/v1/type/schema/datatype/' +datatype+'/preprocess/'+preprocess+'/category/'+category+'/subcategory/'+subcategory+'/'
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }
    
    getNetConfigBasicInfo(nnid) {
        console.log(nnid);
        let url = '/api/v1/type/common/nninfo/'+ nnid +'/category//subcate//'
        return this.api.get(url).then((data) => {
            console.log(data);
           return data;
        });
    }
    
    getNetConfigFormatInfo(params, nnid) {
        let url = '/api/v1/type/imagefile/base/'+params.dir+'/table/'+params.table+'/format/'+nnid+'/';
        return this.api.get(url).then((data) => {
            console.log(data);
           return data;
        });
    }  

    postNNNetConfigInfo(params) {
        //let url = '/api/v1/type/imagefile/base/'+params.dir+'/table/'+params.table+'/format/'+nnid+'/';

        console.log("postNNNetConfigInfo!!!");
        // return this.api.get(url).then((data) => {
        //     console.log(data);
        //    return data;
        // });
    }      
}

  