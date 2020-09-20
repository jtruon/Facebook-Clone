import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://wallpaperaccess.com/full/1261028.jpg"
        profileSrc="https://static.zerochan.net/Kamado.Tanjirou.full.2579684.jpg"
        title="Kamado Tanjirou"
      />
      <Story
        image="https://i.pinimg.com/originals/b8/84/4e/b8844e894381ad9a1ee3ad4cffeebfc6.jpg"
        profileSrc="https://s1.zerochan.net/Kamado.Nezuko.600.2579685.jpg"
        title="Kamado Nezuko"
      />
      <Story
        image="https://wallpapercave.com/wp/wp4819833.jpg"
        profileSrc="https://s1.zerochan.net/Agatsuma.Zenitsu.600.2579686.jpg"
        title="Agatsuma Zenitsu"
      />
      <Story
        image="https://i.pinimg.com/originals/53/b4/a8/53b4a8f57b56779bc195e9835401389b.jpg"
        profileSrc="https://s1.zerochan.net/Hashibira.Inosuke.600.2579687.jpg"
        title="Hashibira Inosuke"
      />
      <Story
        image="https://wallpapercave.com/wp/wp6723281.jpg"
        profileSrc="https://s1.zerochan.net/Tomioka.Giyuu.600.2579688.jpg"
        title="Tomioka Giyuu"
      />
      <Story
        image="https://i.pinimg.com/736x/70/f8/e6/70f8e6b209996fdffa8c744ea97745e6.jpg"
        profileSrc="https://s1.zerochan.net/Rengoku.Kyoujurou.600.2579689.jpg"
        title="Rengoku Kyoujurou"
      />
    </div>
  );
}

export default StoryReel;
