# Fido

> Fido is a Slack app that displays images of cute dogs.


## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Demo](#demo)


## Usage

Type `/fido` in any channel and hit enter. No parameters are needed.

After the slash command is entered, the app queries the RESTful [Dog CEO API](https://dog.ceo/dog-api/about.php) and returns an image of a dog. Along with the image, the dog's breed is also displayed.

<a href="https://slack.com/oauth/authorize?scope=commands&client_id=270174729505.272275352931"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>

This is a demo app and it's currently not distributed. The above button is simply for demo purposes. If you want to add this app to your team, follow the steps under [Install](#install).


## Install
The app uses the serveless framework with AWS Lambda and API Gateway, so the following steps assume that you have a AWS account (a free tier is available).
+ Start by [creating a Slack app](https://api.slack.com/slack-apps)
+ Find your app under `Your Apps` and click it: here you'll find the app credentials that are needed later
+ Install the serverless framework `npm install -g serverless`
+ In your AWS Console, create an IAM User and give it `programmatic access`
+ Give the IAM user `AdministratorAccess` permissions
+ This will give you access to the user's `Access Key ID` and `Secret Access Key`
+ Switch back to your terminal and type `serverless config credentials --provider aws --key <YOUR_KEY> --secret <YOUR_SECRET>` (make sure to keep the keys safe and hidden)
+ Clone this repository `git clone https://github.com/HigitusFigitus/fido.git`
+ `cd` into `serverless-fido`, create a `.env` file and add your `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET` here
+ Download the dependencies for the app `npm install`
+ Deploy to AWS `serverless deploy -v`
+ After the deploy is done, note that two endpoints are provided
+ Copy the GET endpoint, return to your app's configuration page, and paste it under `Add a New redirect URL` in the OAuth & Permissions section 
+ Copy the POST endpoint, return to your app's configuration page, and in the Slash Commands section paste it under `Request URL` when you `Create New Command` called `/fido`
+ [Create a button](https://api.slack.com/docs/slack-button) for your app
+ Click on the button and authorize the app for your team
+ The app is now in your team and the slash command can be used in any channel


## Demo

![Fido Demo](/images/fido_gif.gif)
