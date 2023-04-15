# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aliya.kanani/lotide`

**Require it:**

`const _ = require('@aliya.kanani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: A function to compare two arrays and print success or fail message
* `assertEqual`: A function to compare two values and print success or fail message
* `assertObjectsEqual`: A function to compare two objects and print success or fail message
* `countLetters`: A function to count letters in a string and return the results as an object
* `countOnly`: A function to take in an array and return the count for a given subset of the array
* `eqArrays`: A function to check if arrays are equal to each other
* `eqObjects`: A function to check if objects are equal to each other
* `findKey`: A function that takes in an object and a callback and returns the key for which the callback returns a truthy value, or undefined
* `findKeyByValue`: A function that takes in an object and value and returns the first key within the object that contains that value
* `flatten`: A function to take in an array with nested arrays and return one flat array
* `head`: A function to return the first item in an array
* `letterPositions`: A function to determine the indexes of each letter in a sentence
* `map`: A function to perform the same action to every item in an array 
* `middle`: A function to return the middle (or middle two) items in an array
* `tail`: A function to return everything in array except the first item
* `takeUntil`: A function that returns a slice of an array from the beginning, until one of the elements returns a truthy value in the callback function
* `without`: A function to remove items from an array and return new array without those items