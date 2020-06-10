This project is the backend part of the feeling-app based on nodejs

## Pre-requirements
Be sure to have node version 12.16.2 and npm version 6.14.4

## Available Scripts

In the project directory, you can run:

### `npm install`

Load the dependencies necessary to have a working project

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Routes availables

POST /my-feelings to add a new feeling
This is taking three parameters in the body
`{
	selectedMood: int
	selectedFeelings: array of String
	otherComments: string
}`

GET /my-feelings to get the feeling historic and statistics

## Improvements

Here is the list of the possible improvements
- Adding date and time for a feeling
- Adding a feeling model
- Adding test coverage
- Adding RAML spec for the backend/frontend alignment
- Percentages calculation can be moved into that layout to simplify the code
