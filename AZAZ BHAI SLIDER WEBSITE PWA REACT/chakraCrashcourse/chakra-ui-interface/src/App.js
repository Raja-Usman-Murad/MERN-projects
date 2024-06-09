import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import PostPage from "./pages/PostPages/PostPage";
import NavBar from "./components/Navigation/NavBar";
import PostPage1 from "./pages/PostPages/PostPage1";
import PostPage2 from "./pages/PostPages/PostPage2";
import PostGallery from "./pages/PostPages/PostGallery";
import ImageGalleryOne from "./pages/PostPages/ImageGalleryOne";
import ImageGalleryTwo from "./pages/PostPages/ImageGalleryTwo";
import ImageGalleryThree from "./pages/PostPages/ImageGalleryThree";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post" element={<PostPage />}/>
        <Route path="/post1" element={<PostPage1 />}/>
        <Route path="/post2" element={<PostPage2 />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/gallery" element={<PostGallery />} />
        <Route path="/galleryOne" element={<ImageGalleryOne/>}/>
        <Route path="/galleryTwo" element={<ImageGalleryTwo/>}/>
        <Route path="/galleryThree" element={<ImageGalleryThree/>}/>

      </Routes>
    </Router>

  );
}

export default App;
