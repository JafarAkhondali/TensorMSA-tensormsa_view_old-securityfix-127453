Wdnn Test Sequence
1. common - nninfo - post
def common_nninfo_post():
    resp = requests.post('http://' + url + '/api/v1/type/common/nninfo/',
                         json={
                             "nn_id": "nn0000091",
                             "category": "MES",
                             "subcate" : "csv",
                             "name": "CENSUS_INCOME",
                             "desc" : "INCOME PREDICT"
                         })
    data = json.loads(resp.json())
    print("evaluation result : {0}".format(data))

2. dataframe - table - post
    resp = requests.post('http://' + url + '/api/v1/type/dataframe/base/mes/table/tb_test_data01/')
    data = json.loads(resp.json())
    print("evaluation result : {0}".format(data))

3. CSV(use ui http://localhost:8989/view/ftptest)

6. dataframe - format - post
    resp = requests.post('http://' + url + '/api/v1/type/dataframe/base/scm/table/tb_census_data01/format/nn0000100/',
                         json={"label":
                                    {"income_bracket": "LABEL"}
                                , "Transformations":
                                    {"col1": {"boundaries": [18, 25, 30, 35, 40, 45, 50, 55, 60, 65], "column_name": "age"}}
                                , "cross_cell": {"col12": {"column2_0": "native_country", "column2_1": "occupation"}
                                        , "col1": {"column_1": "occupation", "column_0": "education"}}
                                , "cell_feature":
                                    {"hours_per_week": {"column_type": "CONTINUOUS"}
                                    , "capital_loss": {"column_type": "CONTINUOUS"}
                                    , "age": {"column_type": "CONTINUOUS"}
                                    , "capital_gain": {"column_type": "CONTINUOUS"}
                                    ,"education_num": {"column_type": "CONTINUOUS"}
                                    , "education": {"column_type": "CATEGORICAL"}
                                    , "occupation": {"column_type": "CATEGORICAL"}
                                    , "workclass": {"column_type": "CATEGORICAL"}
                                    , "gender": {"keys": ["female", "male"]
                                    , "column_type": "CATEGORICAL_KEY"}
                                    , "native_country": {"column_type": "CATEGORICAL"}
                                    ,"relationship": {"column_type": "CATEGORICAL"}
                                    , "marital_status": {"column_type": "CATEGORICAL"}
                                    , "race": {"column_type": "CATEGORICAL"}

                                    }
                                })

8.wdnn - conf - post
    resp = requests.post('http://' + url + '/api/v1/type/wdnn/conf/nn0000100/',
                         json={
                                 "layer":[100,50]
                             })
    data = json.loads(resp.json())
    print("evaluation result : {0}".format(data))

10. wdnn - train - post
    resp = requests.post('http://' + url + '/api/v1/type/wdnn/train/nn0000100/')
    data = json.loads(resp.json())
    print("evaluation result : {0}".format(data))

11. wdnn - predict- post
    resp = requests.post('http://' + url + '/api/v1/type/wdnn/predict/nn0000100/')
    data = json.loads(resp.json())
    print("evaluation result : {0}".format(data))