# 外食先決定API

## プロダクトの紹介
何を食べたい気持ちか入力することで外食先を決定する。

## 機能
サーバー起動後、以下リクエストを送信。  
「＊＊＊」箇所には  
ASSARI、KOTTERI、NANDEMO  
のどれかを入力。  
curl -X POST -H "Content-Type: application/json" -d "{\"eat\":\"＊＊＊\"}" localhost:3001/eat  

実行例  
curl -X POST -H "Content-Type: application/json" -d "{\"eat\":\"NANDEMO\"}" localhost:3001/eat  
↓  
{"status":200,"result":{"PLACE":"JOYFUL"}}