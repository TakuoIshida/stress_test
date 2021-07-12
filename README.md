# 概要

負荷テストにk6 CLIを使用しました。
Install方法、使用方法、出力方法について記載します。


# Install

Ubuntu, CentOS, Dockerがサポートされています。
https://k6.io/docs/getting-started/installation/

Dockerは処理が重たいので、軽いCLIを使用します。

# 設定

例１：一定のUser数・期間で負荷を与える場合
同時接続user数10人,期間30秒でどのくらい反復できるか？を計測します。
```
export let options = {
  vus: 10, //virtual user 
  duration: '30s', //実施期間
};
```

例２：負荷に傾斜をかける場合
```
  stages: [
    { duration: '10s', target: 20 }, //10sで20人のUserに増加させる。
    { duration: '0m30s', target: 10 }, //30秒で10人のUserに減少させる
    { duration: '10s', target: 0 }, //10秒で0人のUserに減少させる
  ],
```

# 負荷テスト実行

```
k6 run stress.js
```

# ファイル出力

```
#json
k6 run --out json=test.json stress.js
#csv
k6 run --out csv=csv.json stress.js
```
