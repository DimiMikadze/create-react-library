# Contributing to Create React Library

Create React Library is a open source project maintained by [udilia](https://udilia.com/).

All efforts to contribute are highly appreciated, we recommend you talk to a maintainer prior to spending a lot of time making a pull request that may not align with the project roadmap.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first if somebody else is already working on this or the core developers think your feature is in-scope for Create React Library. Generally always have a related issue with discussions for whatever you are including.

## Folder Structure

create-react-library is divided into two independent sub-packages. Overview of directory structure:

```
lib
template
```

#### [template](https://github.com/udilia/create-react-library/tree/master/template)

Is a Create React App's template that is modified to build NPM Libraries with React.

#### [lib](https://github.com/udilia/create-react-library/tree/master/lib)

This package includes Node.js command line script that is published to NPM as a `@udilia/create-react-library` that helps users to install the template with one command.

## Development Workflow

1. Clone the repo with `git clone https://github.com/udilia/create-react-library.git`
2. cd into `create-react-library/template` run `yarn` to install dependencies.
3. and then run `yarn start`

## Reporting an issue

Before submitting an issue you need to make sure:

- You have already searched for related [issues](https://github.com/udilia/create-react-library/issues), and found none open (if you found a related closed issue, please link to it from your post).
- Your issue title is concise and on-topic.
- You can and do provide steps to reproduce your issue.
- Make sure the [issue template](https://github.com/udilia/create-react-library/tree/master/.github/ISSUE_TEMPLATE) is respected.
- Make sure your issue body is readable and [well formated](https://guides.github.com/features/mastering-markdown/).
