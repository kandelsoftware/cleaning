import React from "react";
import Header from "./components/header";
import Service from "./components/service";
import Contact from "./components/contact";
import Review from "./components/review";
import Environment from "./components/environment";
import Feature from "./components/feature";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Feature />
      <Environment />
      <Service />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
