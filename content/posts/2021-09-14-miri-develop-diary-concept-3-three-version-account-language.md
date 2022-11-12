---
author: minayu416
title: "[產品概念介紹] Miri的第三版新功能: 帳號管理、語言紀錄與切換介紹 | 開發概念系列(3)"
date: 2021-09-14T17:12:02+08:00
status: published
categories:
- '資訊那些事 IT Things'
- '[新創日記] Miri 機器人算命師 - 做產品哪有這麼簡單!'
type: "post"
description: "在2021年2月離職後，我用了半年的時間用Python開發自己的占卜機器人作品，在這版本的開發有很大幅度的變動。新的版本添加了語言設定與切換的功能，並新增英文可供使用者多一種語言選擇。而為了紀錄使用者預設語言，也新增開發了帳號功能，無論是未來需要新增帳號相關的設定或者開發註冊與管理功能，都可從帳號功能延伸。本篇將介紹語言功能跟帳號功能的設計概念與技術實現。"
slug: miri-develop-concept-3-new-feature-account-language
tags:
- '資訊那些事 IT Things'
- '[新創日記] Miri 機器人算命師 - 做產品哪有這麼簡單!'
keywords:
- 占卜
- divination
- product
- 軟體開發
- heroku
featured: "screen-shot-2021-09-14-at-4.39.59-pm.png"
featuredalt: ""
featuredpath: "https://mingjungyu.files.wordpress.com/2021/09/"
#linktitle: ""
---

這篇開發概念應該會是這陣子的最後一篇，第三版本的新功能與概念設計就到這篇為止，給自己半年的時間把Miri將原本只是個小玩具專案的規模，建築為具有發展性的產品，接著開發的工作會暫時打住，並開始規劃未來的實作方向。

至於為什麼和上一篇撰寫日期差了有一週，因為本人在這週施打了新冠肺炎AZ疫苗，受到疫苗年輕人之認證，躺著高燒兩天外加幾天全身肌肉與神經痠痛，還有誤吃含有咖啡因的退燒藥兩天通宵沒睡，所以將近一週的時間完全沒辦法在電腦前撰寫文章。

<!--more-->

<br>

在第三版本還有兩個新的功能，雖然使用者不會有太明顯的感受，卻在後續軟體開發跟維護中佔了很大的作用，那就是帳號功能與語言功能。



當初是`語言功能`最先被列入規劃開發的行列中，因為我在將Miri展現給我的外國朋友看時，我發現他們只能就第二版功能的錄影來觀賞`功能面`的呈現。因為我大部分的外國人朋友是沒有使用Line通訊軟體，除了當初並沒有做除了Line之外的通訊軟體，語言也只有中文一個語言而已。

所以，雖然`客群`只有我一小部分外國人朋友，但考量到Miri再經過半年後的開發後，一定會被拿來當作作品展現，到時候除了台灣的公司外，也考慮試試看國外公司，因此，在第三版本我決定新開發`語言功能`並添加`英文`為第二種可選擇的語言。

由於前端完全由Line處理，所以沒有機會將`語言`的紀錄跟`社群軟體的帳號`綁在一起，因此在後端跟資料庫，我必須自行創建一個`帳號功能`，去紀錄使用者是在哪個平台使用Miri，以及他選擇的預設語言是什麼，接下來Miri的每封訊息都會是根據使用者選擇的語系去抓出對應語系的內容。

<br>

因此，我規劃的開發內容包括:

- 實作帳號功能
- 實作訊息內容依據帳號綁定的語系決定的功能
- 實作設定語系的功能
- 實作切換語系的功能
- 填寫不同語系的訊息內容

這中間稍微有一點難度的是第二項: `實作訊息內容依據帳號綁定的語系決定的功能`，會需要思考與設計，也是當初覺得最困難的地方。

接著就陸續介紹各個部分如何實作

<br>

# 帳號功能

Miri目前是基於兩個社交聊天軟體 `Line` 及 `Telegram`的 Bot Api 功能，所以只要有使用這兩個聊天的軟體的人一定會有帳號，然而帳號是在這兩個平台的資料庫上，我沒辦法施加其他我想要整合的功能進去，所以我決定在Miri後端的部分也設計帳號功能。

我的作法是

- 於資料庫開設紀錄 `帳號的TABLE`
- 在每個使用者`第一次`使用Miri時，將他的資料紀錄於`TABLE`中
- 實作`帳號功能`處理程式

如此一來，無論是`使用語言`的紀錄或者是未來需要做到`註冊及登入`，都可從帳號功能去做延伸。

## 帳號資料庫TABLE設計

![](https://minayu0416.files.wordpress.com/2021/09/img_8130.jpg)

一開始開設欄位紀錄帳號資訊，包括

- platform 使用平台: 由哪個社交軟體進入，其社群平台
- user_type 使用者型別，私人還是群組(不過好像使用不到，只是根據平台傳來的參數先記著)
- user_id 使用者辨別號: 使用者的 id
- lang 語言: 紀錄使用的語言
- register_time 註冊時間: 第一次使用Miri的時間
- user_name 使用者姓名: 由社交軟體傳來的姓名

而主要Key 由 `使用平台 platform` + `使用者辨別號 user_id` 組成獨一的Key。

## 取得使用者資訊

無論是 Line 還是 Telegram 平台，在接收到使用者的訊息時，都能同時接收到使用者的資訊，像是使用者id, 名字, 傳訊息的時間。

第一次會將使用者的資訊存入資料庫保存作為辨別，而第二次使用者傳訊息則會依據訊息中使用者的資訊，找出紀錄於後端的使用者設定之語系，回覆對應語系之訊息內容。

## 帳號功能程式

實作一個帳號功能物件來處理任何和帳號操作相關的功能

此為 Demo 版本

```py
class AccountHandler(object):

    def language(self):
        """Language guide message (CN/EN)
        
        [Line] Button Template Message
        [Telegram] InlineKeyboardButton Message

        Args:
            event(Event):

        Returns:
            message(Message)

        """
        pass

    def switch_language(self, event):
        """Switch language
        1. Update database
        2. Change account language cache in Redis/Dict
        3. Change account language in event object

        Args:
            event(Event):

        Returns:

        """
        pass

    def register(self, event):
        """Register account for first login user.
        
        Account: platform + user_type + user_id + register_time
        Platform: 0: Line, 1: Telegram
        User_type: 0: person, 1: group
        Unique Key: platform + user_id

        Args:
            event(Event):

        Returns:
            True(bool): Success
            False(bool): Fail

        """
        pass

    @exception_handle
    def process(self, event: Event) -> Response:
        """Process each operation of account

        Args:
            event (Event):

        Returns:
            Response (object)

        """
        pass

```

<br>

# 設定語系

設定語言可分為

- 第一次註冊帳號時，會順便設定預設語言(由使用者設定)
- 之後可透過切換語言，來切換預設語言(有提供功能)

`初次設定語系`跟`切換語系`，兩個功能共用同一個程式，基本上這兩個功能的邏輯是一樣的。

邏輯的話是:

    1. INSERT/UPDATE 資料庫
    2. 將存在暫存的帳號與語系做更換
    3. 將Event事件物件中的語系做更換

範例程式:

```py
class AccountHandler(object):

    def switch_language(self, event):
        """Switch language
        1. Update database
        2. Change account language cache in Redis/Dict
        3. Change account language in event object

        Args:
            event(Event):

        Returns:

        """
        pass
```

判斷帳號是否為初次註冊，就在使用者初次註冊帳號的時候，當註冊完畢時，順便丟出選擇語言的訊息即可。

<br>

[訊息] 第一次選擇語言

<img src="https://minayu0416.files.wordpress.com/2021/09/img_8132.jpg" width="400"/>

<br>

[訊息] 切換語言

<img src="https://minayu0416.files.wordpress.com/2021/09/img_8131.jpg" width="400"/>


想要切換語言的話，選單 Menu 跟 功能層面都提供按鈕。

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_7816.jpg" width="400"/>

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_7852.jpg" width="400"/>

<img src="https://mingjungyu.files.wordpress.com/2021/09/img_8022.jpg" width="400"/>

<br>

# 實作訊息內容依據帳號綁定的語系決定

無論是帳號存放的地方還是設定語系的功能都實作完畢，最後一個步驟是實現使用者每次的訊息都能依據先前設定的預設語言來回覆相對語言的訊息內容。

因為上面提到紀錄語言的地方並非前端，而是後端，所以用一個圖來展現概念:

![](https://mingjungyu.files.wordpress.com/2021/09/screen-shot-2021-09-14-at-4.39.59-pm.png)

前端 (Line/Telegram平台)，使用者傳來的訊息(Message)並不會挾帶預設語言，所以我們必須從傳來的訊息取出使用者的資訊(使用平台 Platform + 使用者辨識Id User_id)，接著去後端儲存的地方取得該使用者先前使用的語言，然後根據語言來回傳內容。

如圖中，在軟體伺服器run起來的當下，會先將資料庫(Database)中所有的帳號紀錄以及其設定語言都取出儲存於(Redis)或者任何可供暫存的地方，接著如上句所說，每次傳來使用者的訊息，從訊息挾帶的使用者資訊取得其id然後進Redis查找並取出使用者先前預設的語言。

若偵測到使用者是要切換語系，則一樣透過傳來的訊息，取出使用者的id，然後依照callback回傳的參數(欲切換的語系)，來同步更新資料庫中使用者的語言設定跟存於Redis的使用者預設語言。

以上就是這次實作語言功能跟帳號功能的解說。

<br>

通常語言選擇會是前端的部分處理，但是因為這次實作Miri，前端是使用社交軟體的Bot功能來呈現，所以如果要額外紀錄語言的話，只能自己在後端這邊自行紀錄。壞處就是如果未來帳號資訊過多或者訊息過多，那後端的暫存空間會使用越來越多，讀取暫存的次數也會越多，相反的如果是由前端傳入使用者預設語言的話，就不需要暫存來存放語言的紀錄，訊息的傳遞速度跟程式的運作也許會變得比較快。

不過總之，這些規劃跟解決方法也都會一併列入下一次開發版本優化或開發的功能之一。