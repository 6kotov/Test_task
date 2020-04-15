import React, { useState } from "react";
import "./index.less";
import Profile from "./components/profile";
import Comments from "./components/coments";
import AddComment from "./components/addComment";

function App() {
  const profile = {
    imgSrc: "avatar.jpg",
    name: "Вероника Ростова",
    position: "Менеджер по продажам",
    description:
      "Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны",
    booking: 11,
    tours: 3,
    hotels: 1,
    total: 15,
  };
  const initComments = [
    {
      name: "Самуил",
      text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
      date: "13 октября 2011",
    },
    {
      name: "Лилия Семёновна",
      text:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
      date: "14 октября 2011",
    },
    {
      name: "Лилия Семёновна",
      text:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
      date: "14 октября 2011",
    },
  ];

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
      rowDate.getDay() +
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
