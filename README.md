# News Reels

News Reels is a React-based web application that fetches news articles from the Inshorts API and displays them in a visually appealing, scrollable carousel format. Users can search for news articles based on keywords and filter them by categories. The application supports both vertical and horizontal scrolling views for news cards and provides infinite scrolling functionality to continuously load more articles as the user scrolls.

## Features

- **Infinite Scrolling**: Automatically loads more news articles as you scroll.
- **Search and Filter**: Search for news articles by keywords and filter by categories.
- **Vertical and Horizontal View**: Toggle between vertical and horizontal views for news cards.
- **Dynamic Background**: News card backgrounds are dynamically set to the image of the article.
- **Responsive Design**: Optimized for various screen sizes.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/karansingh21202/Newsreel.git
   cd Newsreel
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Project Structure

```
Newsreel/
├── src/
│   ├── components/
│   │   ├── BlogCarousel.jsx   # Component for rendering the news cards in a carousel format
│   │   ├── SearchBar.jsx      # Component for the search bar and category selection dropdown
│   ├── App.jsx               # Main application component
│   ├── App.css               # Main stylesheet
│   ├── components/
│   │   ├── BlogCarousel.css  # Stylesheet for BlogCarousel component
│   │   ├── SearchBar.css     # Stylesheet for SearchBar component
```

## Usage

1. **Search for News**
   - Use the search bar to enter keywords and search for specific news articles.
   - Use the category dropdown to filter news by categories such as Sports, Business, Technology, etc.

2. **Toggle View**
   - Use the "Toggle Horizontal/Vertical" button to switch between vertical and horizontal scrolling views for the news cards.

3. **Infinite Scrolling**
   - The application will automatically load more news articles as you scroll to the bottom of the page.

4. **Double Click to Read More**
   - Double-click on a news card to open the full article in a new tab.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
- [react-slick](https://react-slick.neostack.com/) - Carousel component built with React.
- [slick-carousel](https://kenwheeler.github.io/slick/) - The last carousel you'll ever need.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Inshorts API](https://github.com/cyberboysumanjay/Inshorts-News-API) - API for fetching news articles.
- [Google Fonts](https://fonts.google.com/) - Library of free licensed font families.

