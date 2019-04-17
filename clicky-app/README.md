# **React Clicky Application**

## **Overview**

This app is a memory game with React. In this game, the user must click on each of my favorite albums only ONCE to win the game. If the user clicks on the same album twice, it's game over. 

**Deploy App**

Visit this site to deploy the app: 

## **Technical Details**
**Technologies Used**

- React
- Javascript ES6
- CSS

This application is made up of an App.js file that interacts with the following components:
- Navbar - displays the title, score, and win/lose status
- Instructions - displays brief instructions on how to play the game
- AlbumCard - displays each album image and information
- Wrapper - formats the placement of each image

**Installations**

To create your own react application to play this game, navigate to the root of your project and run the following in your terminal:
- npm create-react-app my-app (my-app = your app name)
- cd my-app
- npm start

Then, replace the "src" file with the version included in this repository.

**Explanation**

The application renders album cover images to the screen. Each image listens for a click event.

The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.

Every time an image is clicked, the images rendered to the page shuffle in a random order.

Once the user's score is reset after an incorrect guess, the game will restart!

## **Screenshot**

![Game](./public/images/screenshot.png)

**Thank you for visiting my React Clicky Game project!**

## **Author**

**Ashley Shaw** - https://ashbshaw.github.io/Ashley-Shaw-Portfolio/