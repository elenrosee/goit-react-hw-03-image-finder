import React, { Component } from "react";

import "./App.scss";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
