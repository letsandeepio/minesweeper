[![minesweeper build status](https://img.shields.io/circleci/build/github/letsandeepio/minesweeper)](https://github.com/letsandeepio/minesweeper) [![code coverage](https://badgen.net/badge/coverage/95%25/green)](https://github.com/letsandeepio/minesweeper)

# Minesweeper

A popular minesweeper game is written in Pure React.

## Demo

The app is built using Continuous Integration Provided by Circle CI & is continuously deployed on Netlify at https://quirky-hoover-b70e75.netlify.app/

## Feature Details

- Dynamically generate a 16x16 board of tiles. Fully extensible in future to allow for Easy, Medium & Hard difficulties (for e.g 10x10 board)
- Randomly hide 40 bombs behind the tiles. Again, fully customizable in future to support different kinds of gameplays.
- Allows the user to flag a tile containing the bomb and remove it. The user is able to track the number of flags remaining.
- Show the number of adjacent tiles containing a bomb for the revealed tiles.
- Reveal all empty tiles nearby if the user clicks an empty tile.
- Allow users to restart the game if they ever step on a bomb.
- The built-in timer that starts & stops with the gameplay. Can be used as a basis for the calculation of High Scores in the future.

## Technical Details

A single-page app written using React. Uses React Context-API & a custom useReducer hook for managing the state ala Redux style. Extensive test coverage using Unit & Integration testing on top of the Jest & react testing library (currently at 95%). Implements the Flood Fill algorithm for recursively revealing empty tiles if the user ever clicks one. Uses NES.css framework for giving retro look to the game.

## Screenshot

[![minesweeper](https://raw.githubusercontent.com/letsandeepio/minesweeper/master/documentation/minesweeper.png?token=ALTCEDSBPOSD6TMB7FEEYU27NPIUS)](https://github.com/letsandeepio/minesweeper)

## Copyright

MIT License 2020, Sandeep Kumar Chopra
