---
author: minayu416
title: "[Product Concept] Miri's connection between front-end and back-end and intruduction of system structure | FastApi x Line Bot x Telegram Bot | 
Series(1)"
date: 2021-10-11T18:56:51+08:00
status: draft
categories:
- 'IT Things and Development'
- '[Start-Up Diary] Miri Robot Fortune Teller - Making Product Is Not Easy!'
type: "post"
description: ""
slug: miri-develop-technology-1-frontend-design-connect-backend-with-fastapi-line-bot-telegram-bot-en
tags:
- 'IT Things and Development'
- '[Start-Up Diary] Miri Robot Fortune Teller - Making Product Is Not Easy!'
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

In this article, I will introduce the implement between front-end and back-end in Miri by FastApi, Line Bot, Telegram Bot.

<!--more-->

<br>

Considered that readers will click this article by search engine, I will introduce the background.

`Miri` is an immature product which is developing by myself and in the third version now, I don't have many resrouces currently, so I develop it alone. This article will show how do I design the structure of Miri and what's skill I used in Miri, especially the front-end parts and APIs, developed it by FastApi, Line Bot, Telegram Bot. 

<br>

So this article will be very long, you can refer the following table of contents.

- Concept: The design of front-end
- Refactor: APIs and the design of back-end structure
- Implement: The expaction and simulation of back-end APIs
- Implement: FastApi (Includes Heroku deployment)
- Implement: Line Bot
    - Event
    - Message Type
    - Implement: Api & handler
    - Menu
    - Details need to notice
- Implement: Telegram Bot
    - 訊息處理者 Handler
    - Message Type 訊息型別
    - Create a Telegram Bot
    - Implement: Api & handler
    - Details need to notice
    - Menu
- Challenge: connect with different front-end

That's begin!

# <span id="concept-frontend">Concept: The design of front-end</span>

Before the plan of the third version, I didn't have plan to develop independent front-end for Miri, I was junior back-end and learned back-end knowledge first. When Miri was born, I decided to use Line chatbot to instead the development of front-end, that I can focus development of back-end.

When I was planning the third version, I want Miri can face users more international, so after discuss with my Russian programmer friend, I decided to use Telegram Bot as the second front-end platform of Miri.

I have considered `What's App` and `Messenger`, but they seem inconvenient to develop. Telegram Bot is totally similar with Line Bot which can be more easy to learn and develop more quickly.

(Well, I used to worry that effects in Line can not be perform well in Telegram)

<br>

# <span id="refactor-backend">Refactor: APIs and the design of back-end structure</span>

In third version, I planed to add Telegram bot as the second front-end, the original back-end structure should be refactored for multiple front-end.

That's see the structure before third version

![](https://minayu0416.files.wordpress.com/2021/09/screen-shot-2021-09-06-at-4.42.38-pm.png)

In the structure of second version, I designed simple structure which only connect to Line Bot and developed by Flask because I was junior and lacked experience.

I wrote Flask and Line Bot Api in same file and only designed simple reply feature, according the messages from users. 

So when users send messages to Miri, it cut the sentences to words by `NLTK` or `Jieba`, then reply set sentences by words.

<br>

That's see the structure of the third version

![](https://minayu0416.files.wordpress.com/2021/09/screen-shot-2021-09-06-at-4.55.08-pm.png)

Compared with the second version, in order to connect different front-end bots, I re-designed the structure:

- Separated API root routes of Web and API routes of Bots
- Added process part for processing message from different bots seperately
- Integrated messages from different bots to a specific object for proccess easily in core program

It is more flexible in connection of front-end, which means it can be added other front-end more easily, like website or app. 

Added process program for separate the responsibility of process messages from different bots, and keep code readable.

<br>

In the main part, I have decided to locate Miri as a divination service, so I designed the main feature is divination and fortune-telling, keep the part of communication (chat).

In this version, I changed Flask to FastApi.

<br>

# <span id="implement">Implement: The expaction and simulation of back-end APIs</span>

I don't share the code of Miri on GitHub, so I designed a simulation structure for demo the implement, which is similar with the structure of Miri.

In this part, I will show the simulation structure and explain how I did in following parts.

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

This is the back-end strcuture design accord to the structure photo.

In plan, I implemented FastApi at `main.py` as the main gate of API, the APIs of Line and Telegram were put at `api/__init__.py` saperately, it used `rounter` feature in FastApi for connect all API routes in different program files.

<br>

# <span id="fastapi">Implement: FastApi (Includes Heroku deployment)</span>

`main.py` is at the root of project, which means the main program and main gate of api, execute this file to activate whole project.

I initialized an app by FastApi in `main.py`, the code is in the following:

**main.py**

```py
import uvicorn
from fastapi import FastAPI

from api import line, telegram

app = FastAPI()

# Use FastApi router to add routes api in other files
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

The implement is similiar to Flask, initialize an app, add api route and other setting with it.

Use `APIRouter` in FastApi package can include api routes in other files. (in this code, include APIs by `include_router`), about `APIRouter`, I will show in next part. 

I wrote a basic reply `Hello World` for testing route `/`.

When you are in developing, just excute `python main.py` and it will run at localhost, port: 8000.

If you want to deploy on Heroku, please open `Procfile` at the root of project, the code is:

`Procfile`

```
web: uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}
```

In deployment on Heroku, please change ip from `127.0.0.1` to `0.0.0.0` and port to: 5000, I stuck here for 2 days.

I comment code in `main.py` for remember the code.

<br>

# <span id="linebot">Implement: Line Bot</span>

