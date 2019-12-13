# Todo List - Sequelize

學期3 A28:To-do List using Sequelize

## 功能列表

- 使用者可以email和自訂密碼註冊、登入，也可藉由facebook快速註冊、登入
- 於註冊、登入頁面提供提示訊息
- 使用者可一次新增一筆todo事項
- 首頁列出所有todo事項，點選Edit按鈕後可對該事項的待辦狀態和文字內容進行修改，點選Delete後跳出警語視窗，避免誤刪，於警語視窗點選Confirm可刪除todo事項
- 於首頁點選Edit按鈕進入編輯模式，可點選Save按鈕儲存變更或點選Cancel按鈕放棄編輯，導回首頁
- 於首頁點選Detail可查看詳細資訊，於Detail頁面可點選Back返回首頁; 點選Edit進行編輯，點選Cancel放棄編輯返回Detail頁面; 點選Delete跳出警語視窗，確認刪除todo事項後，返回首頁

## 環境建置
1. MongoDB v8.0.18
2. Node.js

## 專案安裝流程
1. 開啟terminal，將此專案clone至本機

```
git clone https://github.com/StephHan232430/S3A28_todo_sequelize.git
```

2. 進入專案資料夾

```
cd S3A28_todo_sequelize
```

3. 安裝專案所需套件

```
npm install
```

4. 於terminal輸入指令匯入種子資料

```
npm run seeder
```

5. 待terminal出現下列訊息，表示種子資料已新增至資料庫，按下 <kbd>command</kbd> + <kbd>c</kbd> 結束執行

```
seeded!
```

6. 執行專案
```
npm run dev
```

7. 開啟網頁瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 測試帳號

| Name  | Email             | Password |
| :---: | :---------------: | :------: |
| user1 | user1@example.com | 12345    |
| user2 | user2@example.com | 54321    |

## 使用工具

- [bcryptjs v2.4.3](https://www.npmjs.com/package/bcryptjs)
- [body-parser v1.19.0](https://www.npmjs.com/package/body-parser)
- [connect-flash v0.1.1](https://www.npmjs.com/package/connect-flash)
- [dotenv v8.2.0](https://www.npmjs.com/package/dotenv)
- [express v4.17.1](https://expressjs.com/zh-tw/)
- [express-Handlebars v3.1.0](https://github.com/ericf/express-handlebars)
- [express-session v1.17.0](https://www.npmjs.com/package/express-session)
- [method-override v3.0.0](https://www.npmjs.com/package/method-override)
- [MySQL v8.0.18](https://dev.mysql.com/downloads/mysql/)
- [mysql2 v2.0.2](https://www.npmjs.com/package/mysql2)
- [Node.js v12.13.0](https://nodejs.org/en/)
- [passport v0.4.0](https://www.npmjs.com/package/passport)
- [passport-facebook v3.0.0](https://www.npmjs.com/package/passport-facebook)
- [passport-local v1.0.0](https://www.npmjs.com/package/passport-local)
- [sequelize v5.21.2](https://www.npmjs.com/package/sequelize)
- [sequelize-cli v5.5.1](https://www.npmjs.com/package/sequelize-cli)
- [Visual Studio Code v1.39.2](https://code.visualstudio.com/)