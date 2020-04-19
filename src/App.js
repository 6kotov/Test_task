import React, { useState } from "react";
import "./index.less";
import Profile from "./components/profile";
import Comments from "./components/coments";
import AddComment from "./components/addComment";
import { initComments } from "./models/initComments";
import { profile } from "./models/profile";

function App() {
  const [comments, setComments] = useState(initComments);

  function addComment(text, name = "Гость") {
    const month = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      " Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];
    const rowDate = new Date();
    const date =
      rowDate.getDate() +
      " " +
      month[rowDate.getMonth()] +
      " " +
      rowDate.getFullYear();
    setComments([...comments, { name, text, date }]);
  }
  return (
    <div className="container">
      <Profile profile={profile} />
      <Comments commentsList={comments} />
      <AddComment addComment={addComment} />
    </div>
  );
}

export default App;
