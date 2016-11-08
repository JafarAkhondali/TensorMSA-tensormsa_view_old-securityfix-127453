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
        return this.api.get(`api/v1/type/common/nninfo/nn0000012/category/MES/subcate/M60/`, params).then((data) => {
            data = JSON.parse(data);
            console.log(data.result[0].fields);
           return data.result[0].fields;
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

    getNetConfigInfo(params) {
        return this.api.get('/api/v1/type/common/nninfo/${params}/category//subcate//', params).then((data) => {
            console.log(data);
           return data;
        });
    }
}