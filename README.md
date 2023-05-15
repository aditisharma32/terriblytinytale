# Terribly Tiny Tales Word Frequency Analyzer

This project is a React application that fetches the contents of a text file, analyzes the frequency of each word, and displays a histogram chart of the top 20 most occurring words. It also provides an option to export the histogram data as a CSV file.

## Features

- Fetches the contents of the text file from the Terribly Tiny Tales website.
- Parses the content to calculate the frequency of occurrence of each word.
- Displays a histogram chart of the top 20 most occurring words.
- Allows the user to export the histogram data as a CSV file.

## Libraries and Plugins Used

- React: A JavaScript library for building user interfaces.
- Papa Parse: A powerful CSV parsing and processing library.
- axios: A popular JavaScript library for making HTTP requests.
- Recharts: A charting library built on top of React components.

## Installation

1. Clone the repository to your local machine.
2. Install the dependencies using the package manager of your choice. Run `npm install` or `yarn install`.
3. Start the development server. Run `npm start` or `yarn start`.
4. Open your browser and navigate to `http://localhost:3000` (or the URL provided by the development server).

## Usage

1. Click the "Submit" button to fetch the contents of the text file and analyze the word frequencies.
2. Once the analysis is complete, a histogram chart will be displayed showing the top 20 most occurring words.
3. Click the "Export" button to download a CSV file containing the histogram data.

## Project Structure

- **src/App.js**: The main component of the application that handles the logic and rendering of the word frequency analysis.
- **src/index.js**: The entry point of the application where the React app is rendered.
- **public/index.html**: The HTML template file for the React app.
