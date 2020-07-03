---
title: how to make a pr using git bash or terminal?
type: "faq"
priority: "46"
tags: ["pr", "pull request", "git"]
---

First go and fork
1. ```console
    ~$ git clone <your-forked-URL>
    ```
2.  Make changes
3. ```console
    ~$ git checkout -b branch-name
    ```
4. ```console
    ~$ git add .
    ```
5. ```console
    ~$ git commit -m "commit message"
    ```
6. ```console
    ~$ git push origin master
    ```
    
    This pushes it to your fork. 

Now go to your github and create a PR. It will create against the main repo.

When you want to get changes of the main repo and not the fork. 
1. ```console
    ~$ git remote add upstream <original-repo-URL>
   ```
   eg: In this challenge it will be 
   ```console
    ~$ git remote add upstream https://github.com/tanaypratap/teamtanay.jobchallenge.dev.git
   ```
2. ```console
    ~$ git pull upstream master
   ```
   this will update your local project with the latest changes







