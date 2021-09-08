# ☑ atlassian tasks

_During an interview with [Atlassian][atlassian], I was asked to implement a UI based on a few [images][images] and a rough description of an API. Here is the final result._

[![vercel][vercel-badge]][vercel]
[![github actions][github-actions-badge]][github-actions]
[![codecov][codecov-badge]][codecov]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

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

[vercel]: https://vercel.com/bradgarropy/atlassian-tasks
[vercel-badge]: https://img.shields.io/github/deployments/bradgarropy/atlassian-tasks/production?label=vercel&style=flat-square
[github-actions]: https://github.com/bradgarropy/atlassian-tasks/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/atlassian-tasks/%F0%9F%A7%AA%20test?style=flat-square
[codecov]: https://app.codecov.io/gh/bradgarropy/atlassian-tasks
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/atlassian-tasks?style=flat-square
[contributing]: https://github.com/bradgarropy/atlassian-tasks/blob/master/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-Contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/atlassian-tasks?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[atlassian]: https://atlassian.com
[images]: /images
[tasks]: images/tasks.png
[tasks-expanded]: images/tasks-expanded.png
