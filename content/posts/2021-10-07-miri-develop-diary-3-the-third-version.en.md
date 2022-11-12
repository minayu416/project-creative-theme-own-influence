---
author: minayu416
title: "[Product Development Diary] The third version of Miri | The development life in this half year | 
Series(2) | Story"
date: 2021-10-07T16:45:33+08:00
status: published
categories:
- 'IT Things and Development'
- '[Start-Up Diary] Miri Robot Fortune Teller - Making Product Is Not Easy!'
type: "post"
description: "With enthusiasm and less powerful programming ability, I began to try to develop my own software product. Record stories about the development of third version in this half year, what are new features? What problems I faced and What affected my insistance of dream."
slug: miri-development-series-2-the-third-version-en
tags:
- 'IT Things and Development'
- '[Start-Up Diary] Miri Robot Fortune Teller - Making Product Is Not Easy!'
keywords:
- python
- product
- start-up
- divination
- fortune telling
featured: "img_0453-e1630242161993.jpg"
featuredalt: ""
featuredpath: "https://minayu0416.files.wordpress.com/2021/08/"
#linktitle: ""
---

Recalling this life period, it seems all things are just happened yesterday, time passed quickly.

The experience of this period gave me big harvest, although I used to doubt my decision, but I insisted to keep it until finish.

<!--more-->

In English version, I will not write as long as Chinese version, because writing style are different and some description of different languages are not same, but I still keep important points.

So, that's begin the story in this half year!

<br>

# Chapter 4 - Motivated from colleague

**Ahh, I feel if this atmosphere continue, maybe I will quit job next year.**

2020 October 16, I smelt that our department might be dismissed, this situation like I faced at first job, everything was gradually stopped, lacked of any direction and supervisor lead us to do some meaningless things.

So future is unpredict, you never know what will happend in next second, next hour, next day or next week.

when I was noticed by my supervisor, he told me it's time to pick a good time and leave.

I discussed a good time with my Human Resources friend, we worked together both in first and second companies.

**Sorry, I really don't know this thing, this announcement didn't pass here.**

That's ok, I already feel it, when the top and high levels supervisors have been changed many people and many elders retired, I can feel the thing will happend.

<br>

When the time of leaving has been checked, I have about 2-3 weeks can enjoy my last days in company. Our company is very near beach, if I quit, I think I will not have many chance to visit the beach. 

So at the Saturday, I decided to visit the beach with my designer colleague. We went to a beautiful restaurant, with cool weather and dressed light dress skirt, it represented we put down the huge stress of work.

We talked about things of company, previous days and we discussed the business of `Miri`. `Miri` in that moment is a Line social media robot and there was only one easy divination feature, Runes, the user guide was a mess, but the divination feature at least can activate, getting result and imperfact explanation.

**Miri is good innovative idea, you should conitnue develop it!**

I have already introduced Miri to my designer colleague, she played Miri many times, I never think Miri is funny before, I just thought it was only a divination feature with imperfact code and structure plans.

**I suddently recalled, I have a project which has been online for 2 years and being stable, I can show it when chat or interview, it is Miri!**

She motivated me, I began to think about continue developing Miri, to continue my dream: make a divination and fortune-telling product.

So, after I quitted job, I decided to give myself half year to develop Miri and release it a new version.

<br>

# Chapter 5 - The third version

In last story, I refered that Miri was in the second version, which only included a divination feature.

The days before I quit job, I have began to plan the next features and decided it will be the third version.

I recalled that I first position Miri as a chat bot, but I needed a specific feature for showing to interviewers, so I developed one divination feature. After it, the position of Miri tend to divination and fortune-telling, thus I decided to change the position of Miri from chat bot to a divination product offically.

I gave myself half year to plan and implement the third version, the following features are the objectives:

- Refactor and Re-design the back-end structure
- Extend divination methods since 1 to 6.
- Optimize the explanation and description of divination results
- Add another platform to use (the original is Line social app)
- Account management and different languages
- More completed user guide (menu, document, flow)
- Optimize divination flow

The plan can make Miri more complete than before and this will be the big improvement than the last version.

<br>

In third version, because I have learned how to design structure, so I first I redesigned the structure and refactor the code for suit the development of new features.

Then I extended more divination methods for having more choices and more fun. Optimized the explanation of results because the vision arrangement was very bad and there were many wrong words in old explanations. Redesigned the divination flow, made it more fluently for users.

In third version, I considered that I want Miri can be seen for more users except in Taiwan or Asia, so I decided to develop telegram platform and English dialogue which my Russian programmer friend suggested me. I used to compare `What's app` and `Messanger`, but `Telegram` is the last winner, it has similar features with Line bot and it has totally different target customers with Line. However, considered that I want to push Miri to more users, I think I will plan website and mobile apps in the future.

About adding English dialogue, I binded it with back-end side which means I need to design accounts feature for store the user and its language. Because  I used social apps as the front-end part temporarily and I can not add remembering langauge feature inside it.

The last part is user guide and user flow. I considered that the user flow was very bad at last version, users need to type `Runes` and activated the feature, so I designed better flow than before. Also there was not any user guide and menu, I made them in this time.

<br>

# Chapter 6 - Develop product is not easy

My totally tasks and sequences were:

- [APIs] Check the brige of front-end and back-end
  - Because of my previous colleague recommand, so I decided to change Flask to FastApi
  - For adding Telegram platform, refactor the old APIs structure
  - Redesig Line APIs and process program
  - Plan and design Telegram APIs and process program

- [Divination] Extend different divination methods
  - Integrate divination flow
  - Delete or add flow according to different divination method
  - Implement new divination methods

- [Accounts and Language] Develop accounts management and language feature
  - Plan and implement accounts feature
  - Plan and implement setting language and switching language
  - Implement binding account to language
  - Implement according account to give messages of default language

- [Divination Explanation] Write divination explanation (After most big features finish)
  - Design and fill up explanation of each card
  - Plan and implement other explanation features
  - Optimize arrangement of explanation

- [User Guide] User flow, messages flow, introduction and menu
  - Choose language before first login
  - User guide message
  - User guide document
  - Menu

  Making product is more hard than I thought before, I thought I only need to write code and achieve the features, but there were other parts I need to consider not only the code.
  
  The following parts, I begin to describe what kind of problems and obstacles I met and how to solve them.

  <br>

## The importance of UI/User Flow

I believe the experience of this half year bring me a big harvest, not only the skills of back-end. As a back-end engineer, I always stand in the back-end aspect for seeing things, but in this period, I found I can not only stand at it, I should switch my role to UI designer, users and other roles to consider this product.

***Why need us?***

Before describe my experience, I want to arise a concept, why company need us? In social value and the scene created by news and reporters, employees are always be the side of selection, so this make all employees need to improve themselves constantly to suit the requirement of companies.

However the work of us is making product from plan to reality and operate it. So every roles in team are important, the critical points should be:

- Each role need to maxsize their ability and efficacy which are best suit for product
- Communicate and cooperate with team for come up with the best results and solutions

So it is not only one's responsibility and it's not the thing about who is powerful or who can insist the extreme method but not suit to team and the development.

<br>

After I planned which features I want to develop in the third version, I immediately began to refactor the back-end code, because it was written when I was not mature of back-end, then I want to achieve the features quickly, so I didn't consider more and wrote code quickly everyday.

Untill one day, I opened client side (Line or Telegram) and I want to test features I completed, I found that I only can use few features and reply less messages, even there are many features have done in back-end.

I confused, I changed code while testing on client step by step, and I realized that I can not continue this. Thus I know I need to switch my role from back-end to user or UI designer, I need to know what kind of effects I want to see at front-end and what is the flow, as a user, then switch to UI designer to plan the user flow and story according requirements.

**I realized that every roles in software development are important.**

Without UI designers or the roles who plan or design the projects, even we are the programmer, we have skills can make the plan to reality, but we don't have direction and objectives, even we complete features but it might not be integrated with back-end and front-end, it might not be confirm to the requirements of users or customers.

This is what I learned in this experience, after the confused period, I swich myself to user and designer, draw the flow and imagination actions on paper then saw the draw to plan how to do it by code. I developed Miri more fluent. 

This concept maybe seems very easy, but to be honest, as backend engineer for long while, my aspect limit in back-end gradually, so my thinking and my consideration will put back-end at the first.

**Before make a plan to reality, switch to user role, think about what kind of features want to see, then going to design the user flow and interface, the final is programmers implement features according to requirements**

<br>

## The integration of different front-end platform

Adding Telegram platform is the new in the third version, Line is the original front-end platform, now Miri has been designed for providing two platforms. Since before to now, I only have experience of processing one platform, it is front-end website, so every featues of back-end and APIs only need to be designed for the only front-end page, the task of 2 platforms will be the new challenge.

The features perform in Line and Telegram are a little different, for example a special message type called `Template message` exist in Line, but not be provided from Telegram. I want to have same user experience in both platform, so I planned:

- As UI role, I designed two platforms message present can be same as possible.
- As Back-end, I designed the structure for suit multiple message type objects and increased flexibility of message composition.

So that's see how to realize.

<img src="https://minayu0416.files.wordpress.com/2021/08/img_7982.jpg" width="500"/>

***Line的Template Message***

This is **[Buttons Template Message Type](https://developers.line.biz/en/docs/messaging-api/message-types/#buttons-template)** in Line, it is one message which contains photo, title, short description and button, but not be provided by Telegram.

<img src="https://minayu0416.files.wordpress.com/2021/08/img_7983.jpg" width="500"/>

***Desgined similar message type in Telegram, refered from Line***

In Telegram, my solution is composing photo, text and button (which called **[InlineKeyboardButton](https://python-telegram-bot.readthedocs.io/en/stable/telegram.inlinekeyboardbutton.html)** in Telegram) to present the feature similar to Line template message.

There are more these design, I will describe them in later articles.

<br>

## The balance of skills and user usage

It is like as programmers, we want to use the newest and cool skills to do back-end side, but sometimes it's not requests from users.

When I developed Miri, I always thought I have done many features and code in back-end, but they can not present totally in front-end, this made me confused. When I was in my past work life, the back-end always be complicated and be vast, but present in front-end page very less.

So it means any solutions can achieve projects, but need to according the time spending, the cooperation with front-end, UI design, requirement from users and other conditions. Instead of pursuing the extreme or newest skills.

As back-end, we all know the construction of back-end is vast, maybe it can not be present totally at front-end, but every back-end need to know how much efforts they spend.

<br>

## Operation and Maintenance

I underestimated the operation part. In whole development, I tested Miri by hosted on localhost, so it was totally impeccable at local environment. I finished all features and tested all tests, then I decided to deploy Miri on Heroku server. It happend many things, delayed the time I set originally.

The first is the environment and package dependency on Heroku, the last deployment was 2 years ago, the version of heroku was very old, I have to delete it and create another new engine for deployment. Another problem I faced is dependency, the specific heroku version limit the version of Python and Packages, so I have to change the python version I used in Miri and changed the package version. It was good, after I changed versions, it still suit Miri, it didn't happend any big problems.

The critical point is that I didn't notice the free plan of heroku will restart the server and re-deploy the project every day which cause cache or variable data will be delete or miss.

The original design of accounts management was store user data in SQLite, which puts with other code and will be deleted by server re-starting every day, so I need to come up with other solution for store accounts data in other side.

This costed me much time to debug and fix because I didn't have any ideas why data will be deleted on server and be saved on localhost, I was sure the code on server and local are same. So the problem is server-side, I took some solutions at first time, but didn't solve it, I observed for almost 2 weeks which delayed the schedule and I finally found the information on heruku page and took many methods to test the bug, got the root problem.

If I have more knowledge of operation or I can test Miri on server more early, I think these problems can be found more early and I can design Miri more perfact. At the first time I changed code many times but after I found the root problem, then I know those changes were in vain.

**When problems can not be solved immediately, don't be nervous, it is because you don't understand it, give yourself more time to observe and research.**

<br>

## The lack of programming skills

When I was in last company, I used Redis and dictionary type to store cache or temporary data.

I wanted to use dictionary to store accounts data for getting default language of user quickly and reducing the usage of database. However, I don't know why I store data in dictionary and the data will be changed constantly on heroku server (on local is success), and it is unstable if any user change their default language.

The origin is:

```py

{
    "Sam": "EN",
    "Jerry": "JP"
}
```

But after Sam changed his default langauge, the dictioanry should be:

```py

{
    "Sam": "CN",
    "Jerry": "JP"
}
```

However, it change constantly, in this time, it is "CN", but in next time, it will be "EN" and constantly change.

I haven't gotten any root problem even now, this is because I haven't enough familiar with my programming skills, there are always some small but critical details need to be awared.

I believe that use Redis and dictionary to store temporary data is good solution to reducing the utilization of performance but I can not achieve it this time, I need to improve my skills.

<br>

# Chapter 7 - The confused feeling before success

Final chapter in this article, the psychology problems always be hard to human. In the progress of development, I used to doubt myself. 

**Is it worth? should I need to continue? Or I should stop it and find a job...**

**Why I have written many back-end code and they can not present by front-end totally? What interviewers will think? What other people will think? Will they think I'm a loser?**

I doubted myself many times in this road, especially near the success, only need to insist a while. 

This affected me a lot, because this is my dream, only I know everything, nobody knows this will be good or not, so I need to have powerful inside heart to keep it go ahead. (I didn't have much confidence before)

If other people doubted myself, I followed them to doubt myself too, sometimes it affected me and shaked my insistance.

What supported me and insisted me? 

**I tell myself, don't think too much, I have many tasks in my TODO list, they all need to be completed, I only need to think how to complete tasks, not doubt them.**

Finally I completed Miri and I am writing the stories of Miri now. When face any challenges, obstacles and problems, sometimes we will be confused and afraid of it, but I learned those fears are imagined by ourselves, the only solution is beginning to do it and keeping do it until finish.
