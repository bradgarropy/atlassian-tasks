# ☑ atlassian tasks

_During an interview with [Atlassian][atlassian], I was asked to implement a UI based on a few [images][images] and a rough description of an API. Here is the final result._

## ❓ question

Given these two [images][images] and the API detailed below, implement the UI in your framework of choice. Be vocal about any design decisions you make.

![tasks][tasks]
![expanded tasks][tasks-expanded]

The following endpoints describe a REST API containing the data needed to for the tasks UI.

```
GET /tasks?id

GET /assignee?taskId

GET /labels?taskId
```

## 🤔 assumptions

No assumptions were made as the task was very clear.

## 💀 execution

```bash
git clone https://github.com/bradgarropy/atlassian-tasks.git
cd atlassian-tasks
npm install
npm start
```

[atlassian]: https://atlassian.com
[images]: /images
[tasks]: images/tasks.png
[tasks-expanded]: images/tasks-expanded.png
