# Burrito Builder

Simple app to compare nutrition information for Chipotle Burritos.

## Why

There already exists a [Chipotle nutrition calculator](https://www.chipotle.com/nutrition-calculator), but I was
interested in Sodium levels and Sugar content which the calculator didn't have.

So I built a quick little React app based off of a 2000 calorie diet.

## Architecture

You can add items and change the nutrition types in the `./src/burrito/data.json`. The app
is built dynamically off of that data. (Note: additional nutrition types outside of 2000 calorie diet
aren't supported since I haven't added a diet picker).

## TODO

- [ ] Diet picker
- [ ] Handle non-numeric schema types
