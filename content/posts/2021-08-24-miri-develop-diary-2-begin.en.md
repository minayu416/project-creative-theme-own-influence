---
author: minayu416
title: "[Product Development Diary] The motivation and origin of Miri | 
Series(1) | Story"
date: 2021-08-24T16:52:06+08:00
status: published
categories:
- 'IT Things and Development'
- '[Start-Up Diary] Miri Robot Fortune Teller - Making Product Is Not Easy!'
type: "post"
description: "With enthusiasm and less powerful programming ability, I began to try to develop my own software product. Record stories since the beginning of the inspiration, the implementation, until now I have the final picture of the product, and continue to work hard to move forward."
slug: miri-development-series-2-begin-en
tags:
- 'IT Things and Development'
- '[Start-Up Diary] Miri Bot Fortune Teller - Making Product Is Not Easy!'
keywords:
- python
- product
- start-up
- divination
- fortune telling
featured: ""
featuredalt: ""
featuredpath: ""
#linktitle: ""
---

I wrote the story of how Miri was conceived in the Github README originally.

But when I recently completed the development of the third version and was about to rewrite the README, I found that I should move the description here, plus I want to record my motivation and story of making Miri.

<!--more-->

Due to I am a person who easily forgets the past, I hope to record stories of Miri development through blog articles. Whether I succeed in the future or not, it will be an interesting story.

<br>

# Chapter 1 - The Birth of Miri

![](https://mingjungyu.files.wordpress.com/2021/08/599743_544968448866799_1105772966_n.jpg)

`Miri Robot Fortune Teller` - Miri is a fictitious 10-year-old girl with a character set like she was gifted and intelligent since childhood, and interest in mathematics and numerology. She help questioners who are confused get the results and suggestion.

In fact, Miri was not intended to be a robot fortune-teller at the beginning. I originally hoped to develop Miri in the direction of artificial intelligence as a management, assistant or housekeeper.

Before studying in graduate school, I lost my goal in life and felt very confused for the future. During that time I had time to watch some movies and dramas, so I watched `Iron Man` and `Resident Evil`. I saw that there was `Friday` artificial intelligence in the Iron Man movie as assistant, following Stark's instructions, Friday was able to collect data, analyze data and display it by fictitious visual interface in the third dimension space, Friday always help Stark manage some things or report progress. In Resident Evil, the artificial intelligence "Red Queen" that appeared in the first episode also aroused my enthusiasm. The Red Queen helped control the entire company and later developed self-aware artificial intelligence.

Affected by the Iron Man's `Friday` and the `Resident Evil "Red Queen"`, I was inspired to artificial intelligence, hoping to study artificial intelligence or enter the powerful development research room in the future, work with great engineers from all over the world develop artificial intelligence together.

<br>

`Artificial intelligence` sounds like a super cool technological term. I touched [りんな](https://www.rinna.jp/) when I was in the master degree, `りんな` is artificial intelligence made by a Japanese company, connects with Line social media, so I can chat with her on Line, and there are some interesting features can be used. I felt surprised because I thought my dream is to create another `りんな`. 

I firstly decided to set the dream of artificial intelligence towards the chat robot, and chosen Line bot api as the first step of my artificial intelligence dream. (Now go to the official website of `りんな` and the company has developed many different new functions, and they developed feature of divination! 

Divination and numerology are really a novel market. I feel that if I don’t start planning the implementation, there will be many people occupy the market)

However, when I was in master degree, my programming skills had just started. I had no experience in software development at all, and I had no relevant knowledge, so I didn’t know how to start.

Finally, there was an opportunity. Our university department requested a teacher to teach how to implement Line chat robots with only one class time, which gave me a chance to step into the development of chat robots, who didn't know how to start at the time. It was at this time that the Line account of `Miri` was created.

`Miri` is born!

<br>

Why is it called `Miri`?

Because at the time, only Apple’s `Siri` was like a personal assistant with artificial intelligence technology, and I created this chatbot with the original intention because I wanted to make artificial intelligence. I added the abbreviation of my name `M` to `Siri` formed `Miri` as the name of my artificial intelligence assistant.

How did the avatar of `Miri` come from?

In 2010, Facebook had an external plug-in software that could make a portrait picture by myself. I made a cute picture similar to myself according to my appearance at the time and put it on Facebook.

Later, I thought that photo looked like a young girl, and `Miri` sounded like a cute girl's name, so I decided to put the photo as avatar of Miri.

When Miri was first born, most of the time was in shutdown state. As mentioned above, the teacher who taught the Line chatbot only spent one class for teaching the implementation, plus my programming ability was just started. The basic abilities are completely 0, so the initial Miri feature only received messages from users and send same messages back to users, like Echo.

I didn't know how to set up a server, if I didn't excute program on my computer, Miri was in shutdown state and did not react at all.

At that time, I only registered Line account of Miri and used Line bot api code provided by the teacher and I used Ngrok to connect localhost. Only a very simple program was built, and even didn't understand the Line bot api program.

<br>

# Chapter 2 - Miri Basic Development

Since most of the projects I implemented in master degree are related to website front-end pages, and there was a serious lack of back-end knowledge, so I had no idea that after I created Miri, How do I continue to develop her? How do I make her become an artificial intelligence assistant like `Friday` and the `Red Queen`? The development of Miri has been temporarily stopped. It has been suspended for 1-2 years without planning any development.

After graduation, in order to achieve my dream of developing artificial intelligence, fortunately, I entered the American startup company that develops artificial intelligence. During that time, I improved my python programming ability a lot and learning a lot of artificial intelligence knowledge.

After half a year of training in a high-pressure environment, I found that I have more background and technical skills than before to support me to continue to develop Miri.

So, I restarted Miri, which has been stopped for 2 years, and then tried to use the knowledge and technology I learned to plan Miri's first version program architecture, and add artificial intelligence sentense analysis packages `nltk` and `jieba` to implement simple feature of receiving messages and  reply the sentences which have been setted by coming messages.

The technoligies I used are flask structure, nltk, jieba and understood basic implement of line bot api.
And the response message was initially set up some greeting terms like `Good morning`, `Good night` and other basic terms. Of course, I also thought about making Miri to a lover chat robot, so I also set up a few flirting sentences, such as `Like you`, `Love you`, you are so beautiful... etc.

<img src="https://minayu0416.files.wordpress.com/2019/10/img_0112.jpg" width="500"/>

***So the first version only have chinese reply sentences, basically there were some basic sentences like "good morning", "hi"***

Also because after understanding the operating principle behind artificial intelligence, I found that artificial intelligence is not as dreamy as I imagined at the beginning. Most of them rely on a large number of input sentence content, or training vocabulary and store it in the database, and reply messages which are setted with each word.

Of course, it is also possible that I have not explored deeper or core artificial intelligence knowledge, so my understanding of artificial intelligence implementation only stops at this.

So the only method of training Miri is inputing amount of sentences and cutting into words by `nltk` 或 `jieba`, then setting the features/ reply messages for each word.

If I want to develop Miri as personal assistant, there will need to connect extended features, like notes app, weather app or other features.

Developing artificial intelligence to personal assistant like in movies, there must need teamworks of a lot of reseachers, scientists, programmers. Rely on 1 person team is not possible, in addition even the current technoligy of artificial intelligence is not familir.

Hmm.. so just watch movies and have fun, those cool technology still need a long road to achieve. Although for artificial intelligence, I already don't have much enthusiasm than before, but created `Miri` also opened the road of software development by myself.

<br>

Although want to develop Miri to chat bot or personal assistant, but I thought Miri lack of a main subject product concept.

- What kind of chat bot?
- What kind of features does she has?

I didn't have any idea, I wanted to make Miri like a virtual lover, also wanted to make as assistant like Friday, this time it seems I pick needle in sea, lack of main concept, can not imagine the final state of Miri and can not have plans of development and implement. 

<br>

# Chapter 3 - Towards To Divination And Numerology

On Aug 15, 2019, I left my first job. I have to prepare for the second job interview. I have a period of time to prepare the resume and side-projects. Because I already have software development experience and technical abilities, so I adjusted the code of the previous programs and were uploaded to github, I also deployed some projects on the heroku server, and put them in resume.

Due to my first job was in a start-up company, the company’s product development process was very turbulent, lacking major directions and major product owners, and the product had to be re-planned and reworked time and time again. I have participated in many web projects and main product of company, but there is no project or product are online that can be shown to future interviewers.

At this time, I thought that I can continue develop Miri, I hoped I can use all the technologies and skills I learned in my first job to Miri, and Miri can represent collection of skills and experience learned in the first job.

I didn't arrange a lot of time to develop Miri, I only gave myself 1-2 months to develop Miri, and then I was ready to find the next job.

<br>

I must to complete a version of phased results in two months, so it can not like `chat bot` which has opened and widely concepts. I must make a main concept and limit scope. And in same time, I need to use some new abilities which I learned and been trained at first job, not some sentences which were setted.

After I took long term consideration, driven by my persinality, I don't want Miri to be normal chatbot, I decided to make some unique and novel concepts. I recalled that I learned Runes (one divination) in my leisure time, it is an unique and mysterious concept, I had confident to achieve the phased results in 2 months, it is enough to show to the next interviewer.

Thus, I decided to extend development based on original design on Line bot api, making a new unique feature (runes divination), adding new Line api message type `Template` for guiding users to do divination. Using SQLite to store static runes data and explanation, then reply to users when they click button.

I refered program structure design which I observed at first job, simple designed strucutre which can extend divination feature and keeping the originally basic conversation.

<img src="https://minayu0416.files.wordpress.com/2019/10/img_0111.jpg" width="500"/>

***So this version only have chinese language too, basically there was new template message type for guiding users and its content is runes.***

I totally spent only three weeks and complete the target, this is the second version of Miri.

Then learned how to build it on heroku server, so that Miri was officially online and users can play it.

Although there was simple runes divination, but it was enough that I can raise it to interviewers when I was in interviews and even I can show it to my colleagues. My friends and colleagues sometimes played Miri.

This is the development story of Miri, which moment was setted at an artificial intelligence and turned into divination robot then being to robot fortune-teller.

<br>

The above is the story for me from the first steps of ​​Miri, until I started to implement it, and then decided the concept. 

Now I recalled I never thought Miri is important to me. But I always want to develop her while every time I learned new skills or quitting jobs. I always want to develop Miri by all skills I learned. Developing let me understand what abilities and skills I lacked, what I need to learn can continue develop Miri.

Maybe it was because I have worked 2 years and in 2 different company, but still don't have any projects and products online. Suddenly found Miri has online and operating 2 years stably and I can show to people any time.

I lacked enough abilities to develop Miri to the final state in my heart. In this time I quitted job, I developed Miri for 6 months because inspiration from my ex-collegues, now Miri is important to me now.

These experience will be write at next article.

<br>

While I am writing this article, I compared `Miri` and `りんな`. I understood some important concepts. 

I think the most important thing is clear the definition of product:

- What is main concept?
- Target users/ customers
- How widely scope want to implement?

Before making product, it is necessaru that check these things though these questions, because the results will decide it need how many team members, what skills it need, which area, region need to market, and many many other things.

As a developer since first job, I only observe the implement aspects and stayed at the basic positions. I understood many concepts while I began to develop Miri widely at this time for 6 months, I found that I always used the developer/programmer aspect to think about things.

It is not suit to consider the whole aspect of product.

Developing Miri alone bring me:

- What skills/abilities I lack now
- What skills/abilities I need to learn next
- How one product make and operation, design, program, marketing
- How important to main concept and limited scope of one product
- Change thinking perspective between different characters (sometimes designer, sometimes programer, sometimes being PM and sometimes being Product Owner, think about target customers and how to market it.)

And many different things.

I enjoy it and I'm very happy I spent 6 months to develop Miri and understaning many things.

So about story of these, please expect next article :)
