## アプリの立ち上げ方
まずはじめにsectio7に行く
frontend: frontendのフォルダに移動→npm start
backend:  backendフォルダに移動→　uvicorn main:app --reload

##　学んだこと
- APIとフロントエンドの連携
  - APIはバリデーションが大事
  - 出力はresponsemodelで定義
  - 特定の文字列はenumを継承する
  - 入力もclassを作って作成
- データの受け渡しの形式が大事
- hooksにする力
- コンポーネント設計の工夫
  - hooksでよく使う関数をかく
  - pageでかくところとelementで書くところで分割して書く

[FastAPI×React資料.pdf](https://github.com/user-attachments/files/24834372/FastAPIxReact.pdf)
