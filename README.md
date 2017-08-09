![https://d3vv6lp55qjaqc.cloudfront.net/items/153G2k1T1U443t1D1z2L/reactify-logo-2.png?X-CloudApp-Visitor-Id=d40749865873d7b5ab32c80852150f74&v=8b3ec22a](https://d3vv6lp55qjaqc.cloudfront.net/items/153G2k1T1U443t1D1z2L/reactify-logo-2.png?X-CloudApp-Visitor-Id=d40749865873d7b5ab32c80852150f74&v=8b3ec22a)

A React/GraphQL/Next.js boilerplate for Shopify

## Getting Started

First, clone this repo. Then install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)):

```bash
now
```

Also refer to the [Endpoint API documentation](https://help.shopify.com/api/storefront-api). 

## Goals

### The Problem

Shopify has one of the most user-friendly ecommerce back-ends out there, as well as an amazing range of plugins and extensions. But when it comes to developer workflow, it doesn't quite measure up to the modern JavaScript ecosystem. 

Some of the issues include:

- Local theme development still requires a connection to preview your changes.
- Deploying to staging requires manually switching to a different theme.
- Using ES6/etc. requires running a build tool separately.
- No support for more advanced front-end tools like React, Redux, etc.
- No access to modern developer testing tools like [Storybook](http://storybook.js.org).

### The Solution

This boilerplate project gives you a ready-made front-end for your Shopify store that will connect to your store's GraphQL endpoint. You can then host your front-end separately from your Shopify back-end, while benefiting from all the awesome JavaScript tools and libraries you're used to. 

## Overview

### React

[React](https://facebook.github.io/react/) has quickly established itself as a new standard for web and mobile development and its component-based approach is a perfect fit for complex ecommerce sites.

### GraphQL

[GraphQL](http://graphql.org) is a new data querying syntax that lets you ask your back-end for what you need in a very granular and precise fashion. 

### Apollo

[Apollo Client](https://github.com/apollographql/apollo-client) is the GraphQL client used by this boilerplate. It will query your GraphQL endpoint, and then insert the results in the Redux store. 

### Redux

[Redux](http://redux.js.org/) helps manage your app's global state. It's used transparently by Apollo, but can also be used manually to keep track of things like UI state (cart shown/hidden, etc.).

### Next.js

[Next.js](https://github.com/zeit/next.js) is used as a build tool and server, and takes care of server-side rendering. Alternatively, it can also export your site as a [static app](https://github.com/zeit/next.js#static-html-export), letting you host your front-end on static hosts like GitHub pages. 

### Storybook

[Storybook](http://storybook.js.org) is a component explorer for React. It lets you view all your components separately from your main app, which makes it much easier to keep track of them and test out their different states. 
