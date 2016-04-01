unique-coloring
===============

A small function to generate random distinguishable colors to humans. Many thanks to
Scelesto

## Installation
  npm install unique-coloring --save

## Usage

  var uniqueColoring = require('unique-coloring');

  colors = uniqueColoring.generateRandomColors(10);
  addNewColor = uniqueColoring.generateRandomColors(1, colors);

## Tests

  node test.js

