import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./pages/body";

function App() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/socialMedia");
      // Flatten the nested posts arrays into a single array
      const flattenedPosts = response.data.reduce((acc, user) => [...acc, ...user.posts], []);
      // Sort the posts by created_at in descending order
      const sortedPosts = flattenedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      console.log(sortedPosts);
      setAllPosts(sortedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Body posts={allPosts} />
      <Footer />
    </>
  );
}

export default App;
