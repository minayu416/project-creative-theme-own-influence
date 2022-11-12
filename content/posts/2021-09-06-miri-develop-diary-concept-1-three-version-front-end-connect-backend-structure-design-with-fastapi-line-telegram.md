---
author: minayu416
title: "[產品使用技術][Python] Miri的前端與後端接口、整體程式架構介紹 | FastApi x Line Bot x Telegram Bot | 開發概念系列(1)"
date: 2021-09-06T19:32:09+08:00
status: published
categories:
- '資訊那些事 IT Things'
- '[新創日記] Miri 機器人算命師 - 做產品哪有這麼簡單!'
type: "post"
description: "在2021年2月離職後，我用了半年的時間用Python開發自己的占卜機器人作品，在這版本的開發有很大幅度的變動，我將原本的Flask框架改為FastApi，由原本只有Line Bot平台，新增Telegram的平台，無論是程式開發還是這篇文章都是自己綜合實力、努力、堅強跟嘗試的心血，它帶給我很多心靈上跟實力上的進步，現在我就來分享這半年實作技術方面的點點滴滴。"
slug: miri-develop-technology-1-frontend-design-connect-backend-with-fastapi-line-bot-telegram-bot
tags:
- '資訊那些事 IT Things'
- '[新創日記] Miri 機器人算命師 - 做產品哪有這麼簡單!'
keywords:
- python
- fastapi
- line bot
- telegram bot
- heroku
featured: "screen-shot-2021-09-06-at-4.55.08-pm.png"
featuredalt: ""
featuredpath: "https://minayu0416.files.wordpress.com/2021/09/"
#linktitle: ""
---

由於本人健康問題，再加上這幾天有其他事情比較重要，還有就是一下把開發感想寫完，寫文章的靈感突然全無，所以跟技巧還有概念設計相關的文章就拖到了現在才有靈感撰寫。

<!--more-->

再將近一週內心的沈澱後，我想應該可以好好的撰寫本系列的文章了，我應該會分成三到四篇來撰寫。

這篇主要介紹的是Miri的前端設計，以及和後端API接口的程式設計。

***整篇文章非常的長，以下為整篇文章的目錄***

目錄如下：

- 概念: 前端設計
- 重構: API及後端整體架構設計
- 實作: 期望與模擬的後端API層架構實作
- 實作: FastApi (含Heroku部署程式碼)
- 實作: Line Bot
    - 事件Event
    - 訊息型別 Message Type
    - 實作: Api & handler
    - 選單 Menu
    - Line Bot的一些注意細節
- 實作: Telegram Bot
    - 訊息處理者 Handler
    - Message Type 訊息型別
    - 創建一個Telegram Bot
    - 實作 Api & Handler
    - Telegram Bot的一些注意細節
    - 選單 Menu
- 困難克服: 訊息於不同平台的呈現方式

那麼就開始吧！

<br>
<br>

# <span id="concept-frontend">概念: 前端設計</span>

Miri 在之前跟第三版本的規劃中，是沒有要將前端獨立出來開發的計畫，因為本人當初還只是很菜鳥的後端工程師，連後端開發都吃力了，要怎麼去學習前端。所以從Miri剛開始出生時，我就是先是打算利用`Line Bot Api`的功能，讓Line代替前端的功能，使我能夠更專注的在開發後端，將Miri做成一個Line的聊天機器人。

但是，在規劃第三版本時，我希望能夠朝向更國際化的市場前進，說白了一點就是希望能找國外的工作，讓外國的面試官看到這個作品，所以想要新增其他新的Bot平台，畢竟Line目前還是在東亞洲地區比較興盛，除此之外的地區都不是Line的主要地盤，所以若是要開發一個面向英文使用者的平台，就要另外找其他通訊軟體的Bot功能。

最一開始我有想過`What's App` 跟 `Facebook 的 Messenger`，但經過研究跟實際實作時，我發現要開發起來十分困難，會有些障礙，而且比較難克服。在一個外國朋友的推薦下，後來選擇了`Telegram`當作第二個可以連接到Miri的平台。

仔細看了 `Telegram Bot Api`後，發現他有和`Line Bot Api`相似的功能，也許在圖像化或者前端畫面豐富性沒有像Line那樣的齊全，但作為Miri另外一個連接的Bot平台，功能也夠了。

(才怪，我當初可是擔心死了，害怕在Line上能呈現的效果，在Telegram上到底要怎麼呈現qq)

<br>

# <span id="refactor-backend">重構: 後端及API架構設計</span>

有了要接兩個不同前端的平台的邏輯後，後端的程式架構就必須得做一些改變，我們先來看看第二版以前的Miri程式架構。

![](https://minayu0416.files.wordpress.com/2021/09/screen-shot-2021-09-06-at-4.42.38-pm.png)

在第二版以及之前的架構中，由於本身還只是年幼的後端工程師，再加上所經歷的專案跟產品經驗不多，也沒有單獨設計程式架構的經驗，所以在當時連Api是什麼都很吃力理解的狀態下，硬是兜了簡單的架構。(就是隨便做)

從圖中可以看到的是第二版是使用`Flask`的框架來實作，而由於當初的前端平台只有Line，所以就把 `Flask` 跟 `Line` 的程式碼混在一起。

後端功能上非常簡單，當初並沒有需要紀錄帳號的功能，也沒有像現在這樣需要不同平台，所以基本上Line接收進來的訊息，直接丟進`NLTK`或`Jieba`切詞後，去功能面簡單撈一下回答就把回覆送回給客戶端。

<br>

那麼看一下第三版的程式架構圖

![](https://minayu0416.files.wordpress.com/2021/09/screen-shot-2021-09-06-at-4.55.08-pm.png)

比起上一個版本，由於要串接兩個不同的平台，所以在後端API中勢必得將不同平台的API入口分割開來，如圖中的架構，當然也因為為了相容兩種不同平台而做出的重構，在未來若有規劃想要開發出獨立的前端像是`前端網頁`或者`app mobile行動端`都可以相容，而不用再做出這麼大幅度的更動。

再來還有一個很重要的點就是，由於目前是有兩種不同的平台而來的訊息，收到的訊息模式跟型別也會不同，在規劃上會特地多一個 `process`的步驟，主要是用來處理

- 將收到訊息統一處理為另外一種訊息物件可以不分平台差異傳送到後面的`功能層面` 取得回覆
- 將從`功能層面`取到的回覆傳回指定平台的`process`處理成可以傳回客戶端的訊息模板/型態

<br>

這是後端其中一個比較大幅度需要更改的重構部分。

而另外一個部分則是`功能層面`，因為Miri在第三版本確定會往`命理跟占卜`方向前進，所以比較大的主題功能會落於`命理及占卜`，把這個部分作為主要功能，而另外一個`溝通功能`則是保留若未來需要類似`聊天/溝通`的功能，還可以在這塊規劃的地區做開發。

主要主題是`命理跟占卜`，所以基本上功能面就是依照這個主題去展開程式架構，然後由每個功能去單獨和資料庫互動取出需要的資訊，詳細情形就不多說。

還有一個功能在圖中沒有呈現，就是關於`系統層面`的功能，像是`帳號管理`、`使用者引導`跟`切換語言`等其他功能，也會一併規劃在`功能層面`。

<br>

<br>

# <span id="implement">實作: 期望與模擬的後端API層架構實作</span>

我的程式碼沒有公開，也不會在部落格撰寫具體是怎麼實作，所以我設計了一個貼近真實實作的程式碼架構模擬，Miri內部大致上也是照著這樣去實作的。

接下來的部分就是實作後端API層架構層，那麼期望的實作架構與程式碼如下：

```
Miri
├── api
│   ├── line
│   │   ├── __init__.py
│   │   └── process.py
│   └── telegram
|       ├── __init__.py
│       └── process.py
│
├── features
│   ├── divination
│   │   └── ?
│   ├── conversation
│   │   └── ?
│   └── system
│       └── ?
│
└── Procfile
└── main.py
```

規劃上會將`FastApi`的程式碼實作在 `main.py` 作為Api接口的大門，然後line跟telegram會分開放在`api`資料夾中，分別將Api程式碼寫在各自資料夾的`__init__.py`中，在用`FastApi`的`rounter`功能將分開在不同檔案的Api路徑註冊進api的名單中，這樣即便api路徑在不同檔案，也能一併成為接口，接收request啦！

<br>

# <span id="fastapi">實作: FastApi</span>

這個部分要換成`Flask`還是`Django`或者其他的WebApi套件都可以，基本上會使用FastApi主要只是因為要離職時同事跟我說過這是目前最快的Api套件，基於好奇，就直接拿來使用在Miri身上，但我目前在Miri身上使用到FastApi功能沒有很多，所以就算之後要替換成其他WebApi套件，也很簡單。

在專案的根部底層創立`main.py`成為整個程式驅動的主程式，也就是說當架設於伺服器上時，只要跑`main.py`就能將整個程式跑起來，將api架起來，前端就能使用了

**main.py**

```py
import uvicorn
from fastapi import FastAPI

from api import line, telegram

app = FastAPI()

app.include_router(line.line_api)
app.include_router(telegram.telegram_api)


@app.get("/")
def read_root():
    return {"Hello": "World"}

# Production Setting
# Run on Heroku/ Procfile, run terminal directly
# web: uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}

# Development Setting
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

```

原則上和Flask用法很像，先初始化一個`app`，而這個`app`就是代表整個程式及api的出入口，然後是將之後會寫在line跟telegram的api路徑註冊進`app`中，這樣即便api沒有寫在主程式，但也會自動將處在不同資料夾的api列進能使用的api。

```py
# 初始化一個app，代表整個專案程式的web入口
app = FastAPI()

# 將分散在line跟telegram的 api rounte 註冊進app
app.include_router(line.line_api)
app.include_router(telegram.telegram_api)
```

再來寫了一個`hello_world`來測試架起來後可否呼叫到api，接著是當正在撰寫程式碼時，需要開啟debug模式所寫的設定。

```py
@app.get("/")
def read_root():
    return {"Hello": "World"}

# Production Setting
# Run on Heroku/ Procfile, run terminal directly
# web: uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}

# Development Setting
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

```

<br>

最後要提及一下，之後怎麼部署於 `Heroku` 伺服器上，當所有程式都完成了，要部署於Heroku上時，需要把用於開發真錯的程式暫時註解掉。

```py
# Development Setting
# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000)
```

接著需要在根部底層創一個 `Procfile` 檔，是部署Heroku時，會使用到的部署檔，沒有副檔名！！

接著直接將一行程式貼進`Procfile`就好

**Procfile**

```
web: uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}
```

在Heroku中，是將程式執行於 `0.0.0.0` 並非 `127.0.0.1`。

之後使用Github連接自動部署就能自動將FastApi執行起來。

FastApi的部分就到這為止，我並沒有使用太多功能，只是拿來當 web api的大門接口而已

<br>

# <span id="linebot">實作: Line Bot</span>

再來進到 Line Bot Api 中，我一直在想要怎麼撰寫Line跟Telegram的教學會比較好，因為其實網路上已經蠻多人撰寫這方面的文章。

但我還是根據自己使用到的功能，加上一些開發需要注意的地方來撰寫此篇幅。

![](https://minayu0416.files.wordpress.com/2021/09/screen-shot-2021-09-06-at-7.23.10-pm.png)

這個是我自己畫的架構圖，基本上最左邊是FastApi的api大門，而line的api只有一個，就自訂吧，我這邊是定為`/api/line/callback`。可能會想問，如果Line的`api`只有一個，那要怎麼分辨不同的訊息？這個時候`事件Event`跟`訊息型別MessageType`就很重要了。在Line中即便api rounte路徑只有一個，但主要是依靠訊息的`事件Event`跟`訊息型別MessageType`來接收跟回覆不同的訊息。

<br>

## <span id="line-event">事件Event</span>

Event是比訊息還上一層的概念，我們來看看Line中有哪些事件：
- MessageEvent
- FollowEvent
- UnfollowEvent
- JoinEvent
- PostbackEvent

還有一些我沒寫上去，基本上Event比較像是`加入群組`, `離開群組`, `訊息動作`或其他類似的動作，也就是說一種`Event`需要一個或多個`handler`處理程式去處理它，如果你要做的Event或者接收到的Event沒有特別寫handler來處理的話，後端程式也就不會接收到傳過來的Event事件，訊息就會卡在api層然後報錯。

而我基本上只用到兩個Event: `MessageEvent`, `PostbackEvent`，所以只寫了3個handler:

- MessageEvent, message=TextMessage
- MessageEvent, message=StickerMessage
- PostbackEvent

剛剛有提到一個Event需要`一個或多個`handler，主要就是在於`MessageEvent`能有不同的`訊息型別Message Type`，而每個訊息模式也都需要有一個handler來處理。

<br>

## <span id="line-message">訊息型別 Message Type</span>

Line的訊息型別蠻多種的，詳細的型別給大家列在下方

**[Message types](https://developers.line.biz/en/docs/messaging-api/message-types/)**

基本上，從Api最開始收到的會是一種Line的訊息型別(Message Type)，**而當程式要回傳給Line客戶端時，也必須要將訊息包裝成Line的Message Type，才能回傳給客戶端。** 所以就是一律用Line的Message物件去做溝通傳遞，也請放心即便傳來的是`Message物件`，裡面也一定夾帶一堆參數，可以讀取其中的訊息或檔案。

在Miri當中，我大量的使用 `TextMessage` 跟 `Template message`。

`TextMessage`指的是文字訊息，所以如果只要發文字訊息的話，只要將字串包成`TextMessage`物件再發出去就可以了

而`Template message`中，我在實作占卜流程時大量運用到了：

- [Buttons template](https://developers.line.biz/en/docs/messaging-api/message-types/#buttons-template)
- [Carousel template](https://developers.line.biz/en/docs/messaging-api/message-types/#carousel-template)

這兩個訊息點擊按鈕後觸發的事件叫做`PostbackEvent`，所以如果有需要用到`Template message`來回覆訊息的話，記得加上`PostbackEvent`的handler來處理使用者按下按鈕之後的操作。

<br>

總之Line Bot也是一門有趣的學問，我可能只用到了20-30%Line Bot的功能來實作Miri的前端，有興趣的人可以多加鑽研，而我的文章也沒有說撰寫的很詳細，因為主要是紀錄Miri使用了哪些功能，不過只要有架構圖跟api的實作做完後，基本上後續的施工就依照每個人需求不同的功能各自去研究。

<br>


## <span id="line-implement">實作: Api & handler</span>

以上講了很多，接下來就實作api的部分，來看一下上面的架構圖

```
Miri
├── api
│   ├── line
│   │   ├── __init__.py
│   │   └── process.py
│   └── telegram
|       ├── __init__.py
│       └── process.py
...
...
└── Procfile
└── main.py
```

先前已經將FastApi實作於`main.py`，這次要將Line Api實作於 `./api/line/__init__.py` 當中

`./api/line/__init__.py`

```py
import configparser
from datetime import datetime

from fastapi import APIRouter, HTTPException, Request

from linebot.models import *

from linebot import (
    LineBotApi, WebhookHandler
)
from linebot.exceptions import (
    InvalidSignatureError
)

from log import logger
from process import processor, MsgEvent


# Load data from config.ini file
# 通常重要資訊不會寫死在程式碼，會用環境變數檔存著，所以用此套件讀取出重要資訊
config = configparser.ConfigParser()
config.read('config.ini')

# Access Token 跟 Secret 要去Line網頁中，你創的頻道內的設定觀看
# Channel Access Token
line_bot_api = LineBotApi(config['LINE']['ACCESS_TOKEN'])

# Channel Secret
handler = WebhookHandler(config['LINE']['CHANNEL_SECRET'])

# 這個部分就是開一個FastApi的Router，所有使用Router的Api Url都會註冊成為可以使用的api
line_api = APIRouter()

# 將 /api/line/callback 註冊進 line_api Router內
# 主要的api入口，接收所有的request
@line_api.post("/api/line/callback")
async def callback(request: Request):

    # get X-Line-Signature header value
    # 這個部分是要從header取得Line特有的參數或簽名參數，需要和Line官方比對，有誤就會報錯
    signature = request.headers['X-Line-Signature']

    # get request body as text
    body = await request.body()
    body = body.decode('utf-8', 'replace')

    # 這是我寫的logger, 可以刪除
    logger().debug("Request body: " + body)

    # handle webhook body
    # 透過接收到的訊息類型來分配到要進入哪個handler
    try:
        handler.handle(body, signature)

    except Exception as e:
        logger().error("ERROR: " + str(e))

    except InvalidSignatureError:
        HTTPException(400)
    return 'OK'


# 處理文字訊息
@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    """
    TextSendMessage(text = type(str))
    """

    # 基本上各項元素都包在Event物件中
    user_id = event.source.user_id
    user_type = event.source.type
    send_time = datetime.fromtimestamp(event.timestamp / 1000)
    msg_type = event.message.type
    message = event.message.text
    
    # 這個我寫的，主要是因為我需要將傳來的事件統一變成另外一個我自己寫的物件，方便和後端溝通
    msg_event = MsgEvent("line", user_type, user_id, send_time, msg_type, message)
    response = processor.analyze(msg_event)

    # logger 也是我寫的
    logger().debug("Reply response: " + str(response))

    # 這一步就是回覆給客戶端，注意response 是 list型別
    line_bot_api.reply_message(event.reply_token, response)


# 處理貼圖訊息
@handler.add(MessageEvent, message=StickerMessage)
def handle_message(event):
    import random
    # 貼圖的部分沒怎麼做，就是從1-21個表情包隨便選一個回覆，使用者傳貼圖，我也回傳貼圖
    message = StickerSendMessage(
        package_id='1',
        sticker_id='{}'.format(random.randint(1, 21))
    )
    logger().debug("Reply response: " + str(message))
    line_bot_api.reply_message(event.reply_token, message)


@handler.add(PostbackEvent)
def handle_message(event):
    import json
    # 基本上 Template Message 傳出去前先要將每個按鈕的訊息壓成json
    # 所以Postback回傳的訊息會是json
    data = event.postback.data
    data = json.loads(data)
    user_id = event.source.user_id
    user_type = event.source.type
    send_time = datetime.fromtimestamp(event.timestamp / 1000)

    # 處理訊息的部分，你可以替換成任何你想怎麼處理訊息就怎麼處理訊息
    msg_event = MsgEvent("line", user_type, user_id, send_time, "option", data)
    response = msg_processor.analyze(msg_event)

    # 自己寫的logger
    logger().debug("Reply response: " + str(response))

    # 回覆給客戶端，注意response 是 list型別
    line_bot_api.reply_message(event.reply_token, response)

```

很長一段，但大部分的步驟都有寫上註解了，將幾個比較重要的地方寫出來。

1. Line 的 Access Token 跟 Secret

這兩個Token 能夠在你在Line網頁上管理機器人的頁面設定中找到，建議最好不要寫死在程式碼中，最好是使用類似`.ini`,`.config`,`.env`之類的隱藏檔案做開發，或者加密儲存在資料庫，因為當這兩個token被偷走後，機器人頻道就等於整個被偷走。

2. APIRouter

記得在實作Line api接口時，要創建FastApi的router，我們用code展現一下

**line/__init__.py**

```py
from fastapi import APIRouter

# 我們在Line的api檔案中開一個FastApi的Router，用來將api串進fastapi接口，使其可使用
line_api = APIRouter()

# 將 /api/line/callback 註冊進 line_api Router內
@line_api.post("/api/line/callback")
async def callback(request: Request):
    pass

```

接著回到先前就已經實作過的FastApi `main.py`

```py
from api import line, telegram

app = FastAPI()

# 可以看到我們將上面在line檔案中實作的api rounter註冊進app中，使其可以使用
app.include_router(line.line_api)

# Telegram 也是一樣的道理
app.include_router(telegram.telegram_api)

```

3. handler & event

根據上方程式碼，我們可以看到我寫了三個handler

```py

# 處理文字訊息
@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    """
    TextSendMessage(text = type(str))
    """

    # 基本上各項元素都包在Event物件中
    user_id = event.source.user_id
    user_type = event.source.type
    send_time = datetime.fromtimestamp(event.timestamp / 1000)
    msg_type = event.message.type
    message = event.message.text
    
    # TODO 看你怎麼處理他囉！但是要記得response要是list型別
    response = processor.analyze(msg_event)

    # 這一步就是回覆給客戶端，注意response 是 list型別
    line_bot_api.reply_message(event.reply_token, response)


# 處理貼圖訊息
@handler.add(MessageEvent, message=StickerMessage)
def handle_message(event):
    # TODO 處理
    line_bot_api.reply_message(event.reply_token, message)


@handler.add(PostbackEvent)
def handle_message(event):
    # 處理
    line_bot_api.reply_message(event.reply_token, response)
```

在每一個處理的函式中，你需要用裝飾器decorator來標示這個函式是一個Line訊息的handler，接著要在handler的參數中標明這個handler是要處理什麼事件/訊息。

```py
@handler.add(MessageEvent, message=TextMessage)
```

這個部分是回覆訊息，程式處理完的回覆記得將他依照需求變成Line Message 物件，然後放進list中

```py
line_bot_api.reply_message(event.reply_token, response)
```

簡單來說 `response = [message_obj, message_obj]`

接著，傳來的event會夾帶一些參數，大致上需要用到的參數都會有

```py
def handle_message(event):
    # ---------------^ 就是這個傳來的event
    pass
```

基本上傳來的事件參數可得知：

- 使用者ID
- 使用者型別, 私人或是群組
- 傳訊息的時間
- 訊息類別
- 訊息本身

這邊要特別說一件事是Line的時間，我研究很久，因為他既很像timestamp，但是轉換過來的時間又不正確，Line的文件是寫 `Unix Time`，我最後是將讀到的時間除以1000再將其從timestamp轉為datetime才取到正常時間，不過是UTC時間，所以台灣時間是`+8小時`，記得要+上8小時再使用它。

<br>

## <span id="line-menu">選單 Menu</span>

Line 的選單有兩種方式可以做成

- Line 官方帳號管理網頁設定
- 透過 Line Bot Api 設定

很抱歉讓你們失望了，身為後端工程師！！！

我沒有使用 Line Bot Api做成選單XD，因為當時我給自己實作Miri的時間已經超過了，再加上我覺得看起來選單這個功能如果用Line Bot Api做，不熟，看不懂，感覺很難XD，在Deadline大敵將至，我還是決定用第一個方式做哈哈！

這是我做的選單，也是現在Miri在用的，也有被我朋友砲轟說是要做多簡單，乾脆他幫我畫！

畫畫不是我的強項！！！我用Mac的KeyNote拉出了我覺得可以接受的選單頁面就好，總之功能先到位比較重要！

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_7816.jpg" width="400"/>

如果是用`Line 官方帳號管理網頁設定`來做選單就會比較簡單，請到 **[Line 官方帳號管理網頁](https://manager.line.biz/)**，登入後，選擇你之前創建的Bot帳號。

`主頁` > `聊天室相關` > `圖文選單`，接著就能找到創建圖文選單的地方。

點選`建立`，建立新的選單，比較重要的就是版型，目前官方提供像是圖中這麼多種版型，就依照個人需求選擇

<img src="https://mingjungyu.files.wordpress.com/2021/09/screen-shot-2021-09-07-at-5.17.43-pm.png" width="400"/>

我先隨便選了一個版型，接著右邊就有對應版型的動作類型可以選擇，然後左邊的設定也能夠上傳照片

![](https://mingjungyu.files.wordpress.com/2021/09/screen-shot-2021-09-07-at-5.18.59-pm.png)

`按鈕動作`提供了6~7種，但對我幫助比較大的只有文字，我還在妄想有沒有可能可以設定CallBack按鈕qq，所以最後我做的選單只有按下去發送文字，然後Miri再根據文字去判斷要回送什麼訊息。

<br>

## <span id="line-detail">Line Bot的一些注意細節</span>

1. 如果程式處理時間太久，會被Line判定超過時效，不會回覆使用者訊息

我常常會用debug模式去追我程式到底哪邊寫錯，有時候甚至會直接在錯誤的地方一步一步看傳遞的參數，結果就發現如果訊息太久沒有回給客戶端，Line就會有時間到期的問題，而直接跳錯，不會回覆。

感覺這算Line比較嚴謹的地方，所以估計Line Bot後面的程式也不太適合拿來做大量的運算或者複雜的功能，目前沒測過最久能接受多久，但如果在Debug模式或者程式跑太久後報錯，可能就是反應時間超過Line定的時效囉！

<br>

2. 可以一次回上限五個訊息

不管是Line還是Telegram，回覆是使用list中可包含許多Message物件，所以代表可以回覆多個訊息，比方說小明對Bot丟了一個 `Hello`，則機器人可以回說: `Hello 您好！`, `請問要選擇哪個食物？`, `食物的Carousel template message`。

```py
response = [msg, msg, msg]
```

上限是五個訊息，超過就會報錯！

<br>

3. Template Message的字數問題

我承認！在開發時，我沒有好好看api文章XD

要記得在開發Template Message相關的訊息型別時，參考一下api文件，因為他的每個參數都會有一些限制。

例如: 

- Carousel template 的 columns 最多只能放10個
- Button template 的 button actions 最多只能放4個按鈕
- Button template 的 title 最多只能40個字(40個中文或日文字當標題應該完全足夠，慘的是英文字母，所以感覺Line不太適合給英文使用者開發XD，因為我光要想辦法把英文要能詞達意又要限制在固定的字數中，花了很大的功夫)

總之就是開發時或者規劃時多看一下api文件就是！

但最令人羨慕的是 Button 的 Postback action 竟然可以多達300個字！！等於在action中塞一個很長一串的dictionary 或者json都沒事，這個部分在Telegram非常麻煩，因為Telegram的postback有限字數XDD

<br>

4. 訊息處理失敗了就重新從前端/Line訊息平台重新發一次Request

這個部分基本上沒什麼問題，就是如果在開發時反覆測試，每次都從Line聊天室發訊息來後端測試功能，如果失敗了就是request直接失效，那就再從Line聊天室再發一次訊息。

為什麼提到這點，主要是因為 ...

***Telegram 就算程式處理失敗了，發過的Request若沒有處理或回覆的話，短時間內將會一直流浪在網路上，直到你的程式寫好/修好之前，他都會不斷的是同一個request往程式的api發，不斷的發。***

<br>

# <span id="telegram">實作: Telegram Bot</span>

接下來就來寫 Telegram Bot的部分啦！

Telegram bot 是此次的新功能之一，我覺得它的bot機制和Line其實蠻相似的，所以實作邏輯不會有太大的問題，但訊息型別的精緻度會稍微比Line差一點點，還有一個特點是`PostBack`的`callback_data`參數字數不能超過64個字，所以幾乎隨便塞一個dictionary進`callback_data`，很快就爆了，方法我待會會在下面說。

Telegram Bot 說是和 Line Bot 相似也能說不太相似，總之邏輯都是Bot，所以Api接口的寫法都蠻像的，但是深入核心的部分就會發現這兩種Bot會是呈現兩種完全不同的功能，倒也不是說不能整合，只是需要做一點轉換。

還有就是我發現我看不太懂Telegram的文件XD

<br>

## <span id="telegram-handler">訊息處理者 Handler</span>

和Line一樣，Telegram也會有訊息Handler，如果沒有撰寫函式處理相對應的動作或事件，Bot也是一樣不會有反應。

這邊舉例兩個我用的Handler:

- MessageHandler: 顧名思義就是處理任何訊息的訊息
  - filter.text
  - filter.audio
  - filter.command
  - filter.document
- CallbackQueryHandler: 處理任何透過按鈕觸發的Callback動作
  - handle_callback

這個概念跟Line很相似，`MessageHandler`是一個 `Handler`，但還是要特別標注他是處理哪種訊息，比方說 `filter.text` 專門處理文字，`filter.audio`專門處理音訊。

所以假設你要一個Bot處理`文字`，`檔案`，`音訊`，就變成要增加三個Handler:

- MessageHandler(Filters.text, handle_message)
- MessageHandler(filter.document, handle_message)
- MessageHandler(filter.audio, handle_message)

詳細程式碼下面會寫

<br>

## <span id="telegram-message">Message Type 訊息型別</span>

一些基本的訊息型別會有，包含`文字`，`圖像`，`影片`，還有一些其他的訊息型別

有興趣再麻煩參照 **[Telegram Bot Api 文件](https://core.telegram.org/bots/api#available-types)** 啦！

比較讓我燒腦的是Telegram Bot沒有像Line的 `Carousel Template`的訊息，有提供的是`InlineKeyboardMarkup`跟`InlineKeyboardButton`型別，來看一下他的效果為何？

<br>

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8021.jpg" width="400"/>

***想不想來占卜一下？ 哈哈***

總之`InlineKeyboardMarkup`跟`InlineKeyboardButton` 是擁有按鈕的訊息，上面那個照片中其實是兩個訊息: `Photo` + (`InlineKeyboardMarkup` + `InlineKeyboardButton`)，所以真實的效果是沒有照片的，而圖片中的整組訊息就是我想出來可以代替 Line 的 Button Template 訊息呈現於 Telegram的替代方案，這個部分下方會說明。

總之，也許有其他訊息型別更適合，但就待各位去官方文件挖寶了。

<br>

## <span id="telegram-bot">創建一個Telegram Bot</span>

Telegram Bot 的創建和Line有一點點不一樣，Telegram沒有像Line一樣完整的官方帳號管理頁面，也許本來這兩個機器人面對的客群就不同，要創建Telegram Bot你需要先找到他爸爸！

**[BotFather](https://t.me/BotFather)**

不是跟你開玩笑吧XD

進去之後，BotFather就會寄很多創建Bot相關的指令，創建Bot跟刪除Bot蠻簡單的，所以如果操作不當就刪掉重創吧！

從`/newbot`開始

- 先取名字
- 再取 username，他會像是唯一的`@` id
- 創建後，會給你一串Token

比較需要注意的是bot 的 username，就是類似Bot的Id，用`@`包裝的Id，這個名字一定要含`bot`，所以你可以取 `TetrisBot` 或 `tetris_bot` 就看個人發揮，就是要有bot字在裡面。

然後那串token很重要，是未來需要連接Bot到後端程式所需要的Token，丟了也可以透過BotFather再創建，不用擔心！

接下來就進入到實作APi的部分！

<br>

## <span id="telegram-implement">實作 Api & Handler</span>

接下來一樣進到實作的部分，來看一下上面的架構圖

```
Miri
├── api
│   ├── line
│   │   ├── __init__.py
│   │   └── process.py
│   └── telegram
|       ├── __init__.py
│       └── process.py
...
...
└── Procfile
└── main.py
```

先前已經將FastApi實作於`main.py`，這次要將Telegram Api實作於 `./api/telegram/__init__.py` 當中

`./api/telegram/__init__.py`

```py
import configparser
from datetime import timedelta

from fastapi import APIRouter, HTTPException, Request

import telegram
from telegram import Update, Bot
from telegram.ext import Dispatcher, MessageHandler, CallbackQueryHandler, Filters, CallbackContext

from process import MsgEvent, processor


# 建議將Token存入環境變數檔或者資料庫中
config = configparser.ConfigParser()
config.read('config.ini')

# 一樣需要用FastApi的Router功能初始化telegram_api
telegram_api = APIRouter()

# 還記得上面說的Token嗎？要寫在這邊
bot = telegram.Bot(token=(config['TELEGRAM']['ACCESS_TOKEN']))

# 這邊一樣，將 /api/telegram/hook 註冊於 rounter中
@telegram_api.post('/api/telegram/hook')
async def webhook_handler(request: Request):
    """Set route /hook with POST method will trigger this method."""
    body = await request.json()

    update = telegram.Update.de_json(body, bot)

    # 需要將來的事件丟進handler
    dispatcher.process_update(update)
    return 'ok'


def handle_message(update: Update, context: CallbackContext):
    """Reply message."""
    text = update.message.text
    user_id = update.message.chat.id
    user_type = update.message.chat.type

    send_time = update.message.date + timedelta(hours=8)

    # 處理的部分
    msg_event = MsgEvent("telegram", user_type, user_id, send_time, "text", text)
    response = msg_processor.analyze(msg_event)
    
    # 這邊示範寄出照片跟文字訊息
    bot.send_photo(update.message.chat_id, photo=response.photo)
    bot.send_message(update.message.chat_id, response.text)


def handle_callback(update: Update, context: CallbackContext):
    """Reply message."""
    data = update.callback_query.data
    user_id = update.callback_query.message.chat.id
    user_type = update.callback_query.message.chat.type

    send_time = update.callback_query.message.date + timedelta(hours=8)

    # 處理的部分，請各位自由發揮
    msg_event = MsgEvent("telegram", user_type, user_id, send_time, "option", data)
    response = msg_processor.analyze(msg_event)

    # 這邊示範寄出照片跟文字訊息
    bot.send_photo(update.callback_query.message.chat_id, photo=response.photo)
    bot.send_message(update.callback_query.message.chat_id, response.text)


# New a dispatcher for bot
dispatcher = Dispatcher(bot, None)

# 需要新增 Handler 來處理特定的訊息跟動作
dispatcher.add_handler(MessageHandler(Filters.text, handle_message))
dispatcher.add_handler(CallbackQueryHandler(handle_callback))

```

跟上方的Line Api實作方式很相似，幾個注意的要點，一樣提醒大家

1. Telegram token 建議使用 `config`, `.env`檔案儲存或者存入資料庫

記得利用token初始化一個telegram的bot，會需要使用bot做回覆訊息的功能

```py
# 還記得上面說的Token嗎？要寫在這邊，初始化你的Telegram Bot
bot = telegram.Bot(token=(config['TELEGRAM']['ACCESS_TOKEN']))
```

<br>

2. 記得要新增你想處理的訊息/動作的Handler

```py
# 需要新增 Handler 來處理特定的訊息跟動作
dispatcher.add_handler(MessageHandler(Filters.text, handle_message))
dispatcher.add_handler(CallbackQueryHandler(handle_callback))
```

以這個例子來說是處理 `訊息動作` 的 `文字訊息`跟 `Callback動作`

- MessageHandler(Filters.text, handle_message)
- CallbackQueryHandler(handle_callback)

所以假設你要處理客戶端傳來音訊，那就是以此類推：

- MessageHandler(Filters.audio, handle_message)

詳細情況再麻煩爬文Python的 **[Telegram套件](https://github.com/python-telegram-bot/python-telegram-bot)**

<br>

3. 記得要將Telegram的api route透過 FastApi APIRouter 加入路徑

```py
telegram_api = APIRouter()

@telegram_api.post('/api/telegram/hook')
async def webhook_handler(request: Request):
    pass

```

4. 注意由一般訊息來的參數跟從callback動作來的參數會在不同地方

```py
# 以取user_id為例

# 一般訊息從update.message來 
user_id = update.message.chat.id

# Callback 的參數會在callback_query內
user_id = update.callback_query.message.chat.id

```

5. 寄出去的訊息型別

在Telegram中傳送文字訊息跟圖片不用特別轉換成另外一種訊息物件，寄圖片有寄圖片的函式`send_photo`，重送訊息也有傳送訊息的函式 `send_message`，只是參數中無論是photo還是 text都要塞字串。

```py
bot.send_photo(update.message.chat_id, photo=response.photo)
bot.send_message(update.message.chat_id, response.text)
```

再來，我用的按鈕訊息，也是用`send_message`來發送訊息，唯一不同的是，需要多帶一個參數

```py

# 你需要用`InlineKeyboardMarkup`跟`InlineKeyboardButton`兩個物件做出你要的訊息模式，再帶入reply_markup中，所以資訊會長這樣

markup = 
InlineKeyboardMarkup([
    InlineKeyboardButton("button1", "{'action': push}"),
    InlineKeyboardButton("button2", "{'action': pull}"),
    InlineKeyboardButton("button3", "{'action': cut}")
])

bot.send_message(chat_id, text, reply_markup=markup)

```

換你實作啦！

<br>

## <span id="telegram-detail">Telegram Bot的一些注意細節</span>

- Request若沒得到回應，會一直重複對api發送

這點和Line不同，Telegram的Request沒有短時效問題，所以如果Request沒有得到回覆（也就是可能在跑程式的某個地方報錯），那那個Request會一直循環在網路雲端中，然後不斷地往api發送直到取得答案為止，我有點忘記時效多少，但我記得好像...一天內失敗的Request都會活著。

如果不幸在測試程式時，發送Request太多失敗，那就Debug模式繼續開著等剛剛發送的Request會延遲幾秒後再次自動向api發送。

- CallBack Data 參數有限制

如果要用 `InlineKeyboardButton`當作按鈕做出 Callback行為，要注意一下 `callback_data`不能超過64的字，由於我是塞字典，所以一下就爆字數了，文件在此 [InlineKeyboardButton](https://core.telegram.org/bots/api#inlinekeyboardbutton)。

我的參數：

```py
# 隨隨便便寫的字典就48個字了
InlineKeyboardButton(callback_data=str({"category": "communication", "action": "flirt"}))
```
當然你也可以直接就寫文字，例如: 

```py
# 寫中文字完全OK
InlineKeyboardButton(callback_data=str("會話，調情"))
```

看個人發揮，我個人是塞字典，比較好我後端程式後續的程式操作，但又很容易爆字！

所以我的一個作法是，我在CallBack訊息傳出去跟傳回來時做了一個`壓縮器/加密器`，將超過長度的 `callback_data`透過演算法或加密法壓縮成64個字內，回來時再用一樣的方式解密，這樣就能夠解決64個字限制的問題！

<br>

- InlineKeyboardButton 按鈕寬度跟排列

在實作Button訊息時，老實說我也有遇到如果我的按鈕字數太長，他就會被遮住，比方說：

```
# 例如這樣字就會被壓縮到！

[Runes][Tarot][Leno..][Moon..]

```

可是我希望字可以全部顯示，希望能夠將按鈕加寬。Telegram沒能讓按鈕加寬，但可以透過按鈕的排列來使按鈕加寬，這邊給些例子參考

```
# 假設完整是這樣
markup = 
InlineKeyboardMarkup([
    InlineKeyboardButton("button1", "{'action': push}"),
    InlineKeyboardButton("button2", "{'action': pull}"),
    InlineKeyboardButton("button3", "{'action': cut}")
])
```
```

# 我們將一些字簡略，比較好展示

Markup(
    [Button(), Button()]
)

```

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8023.jpg" width="400"/>

<br>

```

# 我們將一些字簡略，比較好展示

Markup(
    [
        [Button()], 
        [Button()],
        [Button()],
        [Button()],
        [Button()],
        [Button()]
        ]
)

```

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8024.jpg" width="400"/>

<br>

```

# 我們將一些字簡略，比較好展示

Markup(
    [
        [Button()], 
        [Button(), Button()],
        [Button(), Button()],
        ]
)

```

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8022.jpg" width="400"/>


**簡單來說就是用list來去分割按鈕**

<br>

## <span id="telegram-menu">選單 Menu</span>

再來也是Telegram的選單，Telegram的選單基本上沒有像Line那樣的華麗，如圖，這是Miri的選單


<img src="https://mingjungyu.files.wordpress.com/2021/09/img_7852.jpg" width="400"/>

蠻乾淨簡單的，是用 `/command`的動作作為選單按鈕，然後最一開始 Menu會向上方圖一樣，在文字輸入匡左方會多一個Menu，然後可以縮放跟展開。

Menu的設定也是呼叫 機器人的爸爸XD，**[BotFather](https://t.me/BotFather)**，來設定選單

在Telegram中不是Set Menu，而是`setcommands`。

格式如下：

```
command1 - Description
command2 - Another description
```

你可以一次把要設定的command打齊一次送出去！

就有美美簡約的選單囉！

<br>


## <span id="overcome">困難克服: 訊息於不同平台的呈現方式</span>

在實作於Line Bot跟Telegram Bot遇到的一個困難是，由於這兩個後端是共用程式，所以期望上希望兩者呈現的功能要一致，簡單來說就是當點下`占卜`按鈕時，要跳出六個`占卜方法`，我希望是圖文並茂，這在Line Bot上，用`Carousel message`可以完美辦到:

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8025.jpg" width="400"/>

但是在 Telegram就不是這麼一回事了，因為Telegram沒有 `Carousel message`，所以在這個單元想來介紹一下，我是怎麼改動流程盡量讓兩邊平台訊息一致的。

首先是選單目錄，在Line使用`Carousel message`，在Telegram用`InlineKeyboardMarkup`

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8026.jpg" width="400"/>

***可以往右滑***

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8022.jpg" width="400"/>

***在Telegram的呈現上會稍微遜色，畢竟沒有圖片輔佐***

所以在規劃使用者流程時，我會特地讓Line `Carousel message`變成像是`列表`的邏輯，當點進去單個項目，才是進到那個項目的動作，來展現一下

點選`Click`後，兩邊訊息會一致

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8028.jpg" width="300"/>

***Line點選後會進到Button Message，用一個感覺多此一舉的步驟來緩和Telegram沒有辦法圖文兼具的窘境。***

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8027.jpg" width="300"/>

***接著我們來看一下Telegram方，使用了Photo + InlineKeyboardMarkup 兩個訊息的Combo連發達成像Line的效果，緩和解決了沒有圖片的問題。***

<br>

由於本人算是第一次做這種前端有兩個以上的平台，先前都是後端對到前端，我相信很多厲害的app或網站，兩者兼具的軟體都需要具備這種面對兩種平台以上的後端程式設計，而這是我第一次面對，所以難免在處理上會比較尷尬一點。

也許這也就能夠理解為什麼有些軟體有些功能在網頁上是沒有的，但是在app上有，也許就是因為沒辦法做到兩邊展現同樣的效果跟體驗，所以必須有一方是犧牲的。

這是我目前短暫想出的方式，也許會讓Line使用者在使用上有點多此一舉跟卡卡的感覺。期望未來如果我實作前端網頁跟mobile版本後，就不需要糾結於這個問題，但也有可能未來即便出了網頁跟手機端，還是會保留機器人版本(說不定喔！)

<br>

好啦，這篇應該是產品技術文章中最長的文章，能看到這邊的人也蠻厲害的了(還是只會有我看得到XD)

多謝支持啦！
