# 外食先決定API

## プロダクトの紹介
何を食べたい気持ちか入力することで外食先を決定する。

## 機能
サーバー起動後、以下リクエストを送信。  
curl -X POST -H "Content-Type: application/json" -d "{\"eat\":\"＊＊＊\"}" localhost:3001/eat  
「＊＊＊」箇所には  
ASSARI、KOTTERI、NANDEMO  
のどれかを入力。  

実行例  
curl -X POST -H "Content-Type: application/json" -d "{\"eat\":\"NANDEMO\"}" localhost:3001/eat  
↓  
{"status":200,"result":{"PLACE":"JOYFUL"}}

## 疑問
日本語は文字化けしてしまう。  
ターミナル環境（Git Bash）が原因？