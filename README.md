# Testovik

## Overview

Testovik is a project for creating and passing tests, developed during the [Salt & Pepper's](https://snp.agency/ru) internship.

### Two roles

There are two roles to work with:

-   admin that creates and modifies the tests
-   user that passes the tests

You can choose your role during signing up process.

All the routes are protected from unauthorized users, so you need to sign in before either creating or passing tests.

## Home page

When you are logged in, you will see a list of tests to pass, or edit if you are an admin:

![List of tests](/assets/home.png)

## Redux architecture

There is a modular structure for redux features.
Which means that...

1. strict module boundaries
2.
3.

### Motivation

-   You can select which functions are public in file index.ts, so users of the module won't use internal-only functions.
-   When the project is growing up, it's getting harder to navigate through large amount of files. When you need to either make a fix or add a new feature, you know that everything you need is grouped inside one specified folder.

Inspired by:
[Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

## Authentication

## Data fetching

## Proxying

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
