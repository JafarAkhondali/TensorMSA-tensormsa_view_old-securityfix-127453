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

    postCommonNNInfo(opt_url, params) {
        let url='/api/v1/type/common/nninfo/';
        return this.api.post(url, params).then((data) => {
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
        let url='/api/v1/type/imgpreview/nnid/';//local test for JSON
        return this.api.get(url, params + "/").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getTableList(params) {
        let url='/api/v1/type/imagefile/';//local test for JSON
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
            console.log(data);
           return data;
        });
    }

    postTableList(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;//local test for JSON
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    deleteTableList(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;//local test for JSON
        return this.api.delete(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    getImageFormatData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;//local test for JSON
        return this.api.get(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }

    postImageFormatData(opt_url, params) {
        let url='/api/v1/type/imagefile/' + opt_url;//local test for JSON
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
        let url = '/api/v1/type/dataframe/base/scm/table/tb_data_cokes100/data/'
        return this.api.get(url, "").then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }
    postWdnnDataFrameFormat(opt_url, params) {
        //let url='/api/v1/type/imagefile/' + opt_url ;
        ///api/v1/type/dataframe/base/scm/table/tb_data_cokes100/data/
        console.log(params)


        let key_set = Object.keys(params)
        for(let key of key_set){
            //console.log("lookup dictionary")
            //console.log(selectedValue.target.value)
            //console.log(key);
            console.log(key +"---->"+ params[key]);
         }
        let url = '/api/v1/type/dataframe/base/scm/table/tb_data_cokes100/format/nn0000102/'
        return this.api.post(url, params).then((data) => {
            data = JSON.parse(data);
           return data;
        });
    }
}