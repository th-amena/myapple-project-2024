import React from "react";

import Header from "./Components/Header/Header";

import Main from "./Components/Main/Main";

import Footer from "./Components/Footer/Footer";
import YoutubeVideos from "./Components/YouTube/YoutubeVideos";
import { Route, Routes } from "react-router-dom";
import Mac from "./Components/AllPages/Mac";
import Iphone from "./Components/AllPages/Iphone";
import Ipad from "./Components/AllPages/Ipad";

function App() {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="mac" element={<Mac />} />
            <Route path="iphone" element={<Iphone />} />
            <Route path="ipad" element={<Ipad />} />
         </Routes>

         {/* <Main /> */}
         <YoutubeVideos />

         <Footer />
      </div>
   );
}

export default App;
