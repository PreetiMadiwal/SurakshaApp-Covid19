# Suraksha

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://callforcode.org/slack) [![Website](https://img.shields.io/badge/View-Website-blue)](https://code-and-response.github.io/Project-Sample/)

*Read this in other languages: [English](README.md).*

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Running the tests](#running-the-tests)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Versioning](#versioning)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

Difficult to track people at covid-19 risk if the symptoms are not visible or the people who have not followed govt. guidelines. 

### How can technology help?

Traces the user travel history to identify if user visited any covid-19 containment zone or any time came in contact with a person tested positive with covid-19. This status check can be used as one of the deciding factor to allow a person to enter a premisis in order to avoid covid-19 spreading. Hence one can keep the community safe

### The idea

Additional check can be added to temperature check at offices, appartment, busstop etc., - "Safety Status check"
This safety status check is based on the travel history of the person- shows Safe (green) or At risk (red) indication on his mobile
anybody can easily identify the user status (safe/at-risk). We are targeting this app to reach people who are illiterare, blind person to help them identify the risk by providing an alert voice message before entering the contaminated zone.  

## Demo video

[![Watch the video](https://github.com/PreetiMadiwal/SurakshaApp-Covid19/blob/master/Suraksha_docsToSubmit/suraksha%20demo.avi) or  (https://youtu.be/rU7VqI01Y1Q)]

## The architecture

![Video transcription/translation app]( https://github.com/PreetiMadiwal/SurakshaApp-Covid19/blob/master/Suraksha_docsToSubmit/Architure%20diagram.png)

## The database diagram
![Database Diagram]
(https://github.com/PreetiMadiwal/SurakshaApp-Covid19/blob/master/Suraksha_docsToSubmit/DatabaseDiagram.png)

## Long description

Current Challenges
1. The symptoms are not always evident, we are unsure how safe is the person we are in contact(Maid/co-passenger/co-worker/any visitor)
2. People migrating from different cities not everyone following the govt   guidelines.
3. Most of the people unsure of the containment zones 

Impact
  1. This  is the major cause of the fast spread of Covid-19
  2. Maids and other workers are not allowed for work since we unsure of their travel history/ how safe are they.


## Project roadmap

![Roadmap](https://github.com/PreetiMadiwal/SurakshaApp-Covid19/blob/master/Suraksha_docsToSubmit/Road%20Map.jpg)

1.Same can be developed as a plug in and integrated to existing app like Arogya setu where we already have real time data.
2.For those who don’t have a smart phone we can design a device which is affordable by everyone to show this Safety status.
3. The feature can be further extended to change the safety status check when a Covid-19 infected person is close to us.


## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

local machine should have install 
Node js
Ionic Cordova
Asp.net Core
SQL Server

```bash
npm install -g  @ionic/cli
npm install -g @angular/cli
```

### Installing

A step by step series of examples that tell you how to get a development env running

Execute the below command to deploy the application

```bash
server :  ionic serve -l
ionic cordova build android
```

## Built with
Node js - for UI
Ionic Cordova - for UI
Asp.net Core -To Create Web Api
SQL Server - Data Base
IBM Cloud - to deploy the Web Api

## Contributing

## Versioning

## Authors

* **Suguna K** - *Initial work* 

other contributors:
Amrutha T
Kokila R
Preeti M

## License
None

## Acknowledgments

