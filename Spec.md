## Network Configuration Page

### 초기 데이터 조회 Flow
1. 네트워크 데이터 조회 
    - 기본정보 조회: dir, table, datasets
2. Input Layer 데이터
    - x, y 축 사이즈
    - 2columns, 1row 데이터 출력 
3. Output Layer 데이터 
    - 1의 datasets를 output으로 출력
    - single table

### node click시 Hidden Layer 테이블 변경
### 가로축 node가 10개로 증가하도록 개선(11.16)
    - Hidden Layers 아래의 경계선 길이 증가

### Node의 갯수 증가에 따른 Node의 속성 Type 매칭 기능 구현 - Done

### Hidden Layer의 마지막 노드에서 오른쪽 link 삭제 -Done
 - 주석처리: drawLink(link, node2coord, network, container, i === 0, i, node.inputLinks.length);

## 12월 1일 
### WDNN Network 조회 시 초기데이터 조회 기능 구축
 - http://52.78.19.96:8989/api/v1/type/dataframe/format/scm_default_wdnn_92741/type/all/  ==> getDataFrameOnNetworkConfig
 - http://52.78.19.96:8989/api/v1/type/dataframe/format/scm_default_wdnn_92741/type/label/ ==> getDataFrameOnNetworkConfig
 - http://52.78.19.96:8989/api/v1/type/wdnn/conf/nnid/json/ ==> postWDNNConfig