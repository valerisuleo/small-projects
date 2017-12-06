---
title: Express API and Angular AJAX EDITED
type: CODE TEST
duration: 3H
creator:
    name: Valerio Risuleo
---

# Express API with Angular `

## Part 1: The API

Build out an Express API running on `http://localhost:3000`

The App should have only one route:

| Route  | Method | Path |
|:-------|:-------|:-----|
| Index  | GET    | `/states` |

The model should contain the following data:

## - `fridge: Number `
## - `temperature: Number `
## - `coffee: Number`
## - `mood: String`

Once I have built out the API, **I must test it using insomnia before starting the next part.**

## Part 2: The Frontend

Now that I have created your API, I can make a public folder and add `index.html`, `js/app.js` and `css/style.css` files.

Add Angular to the `index.html` using the CDN link (it's quicker) and display all the widgets on the homepage using Angular's `$http` module.