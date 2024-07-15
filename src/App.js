import { useState } from "react";
import PostList from './components/PostList';
import Header from './components/Header'

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <div className="bg-indigo-700 min-h-screen">
        <Header showModalHandler={showModalHandler} />
        <PostList modalIsVisible={modalIsVisible} hideModalHandler={hideModalHandler} />
      </div>
    </>
  );
}

export default App;     
