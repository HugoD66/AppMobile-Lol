import {ButtonOne} from "../../components/button/ButtonOne";
import React from "react";
import {Slide} from "./Slides";
export default function FourthSlide() {

    return (
      <Slide
        imageSource={require('../../../assets/intro/intro-fourthSlide.png')}
        title="Élevez votre elo rapidement"
        description="Bienvenue dans l'application qui vous emmènera au niveau suivant dans le jeu League of Legend."
        button= { <ButtonOne /> }
      />
    );
}
