# Battleship Game

## Links

- [Live site on Heroku](https://playbattleship.herokuapp.com/)
- [Back end GitHub repository](https://github.com/caldric/battleship-api/)

## Technologies

- MERN stack (Mongo, Express, React, Node)
- HTML
- CSS
- JavaScript

## Features

- Event listeners and handlers
- Document Object Model (DOM) manipulation
- Asynchronous JavaScript with async and await
- User information storage and password encryption using Bcrypt
- User sign up and log in functionality
- Full CRUD functionality
- RESTful API

## Wireframe

![Wireframe](./public/wireframe.png)

## Approach

Our team took an Agile approach.

- Daily standups
- Retrospectives
- Sprint planning
- Sprint review

## Known Issues

- Sign up does not automatically log in user
- Profile does not keep track of user statistics
- No indication when a enemy ship is sunk, only when you hit/miss
- Randomly generated enemy ships can potentially overlap
- Your ships can be placed more than once
- Your ships can overlap
- Ships don't display when placed, only representational X's
- When placing ships, if you rotate it you must click place again for the direction to actually change when placed
- Game does not end unless you click end game
- Games can be accessed publicly if you have the URL
- You can only play against the computer, not friends (if you have ones to play with)
- If you accidentally leave the game page you can't return to it unless you have the URL
- Username has to be unique so you can't create an account if your desired name already exists
- If sign up/login doesn't work there is no error message

##### Authors/Developers:

[Claude Aldric](https://github.com/caldric),
[Senthil Kannan](https://github.com/spk2dc),
[Likitha Duggirala](https://github.com/likithaaa)

##### Last Updated: 7/28/2020
