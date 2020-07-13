import React, { Component } from 'react';

import Card from '../../Components/Card/Card';
import './MainPage.scss'

import pic1 from './pic1.png';
import pic2 from './pic2.png';

import {addMoreUserWords} from '../../Components/Tools/userWordsApi'

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      trainingCard: {
        title: 'Тренировка',
        description: 'Повторяем Английский',
        href: 'training',
        class: 'Card-Image_training',
        pic: pic2
      },
      learningCard: {
        title: 'Изучение',
        description: 'Учим Английский',
        href: 'play-zone',
        class: 'Card-Image_learning',
        pic: pic1
      },
      clicked: false,
    }
    this.asideToggle = this.asideToggle.bind(this);
  }

  asideToggle() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const trainingCard = this.state.trainingCard;
    const learningCard = this.state.learningCard;

    return (
      <div className="row p-3">
        <div className="col-md-12">
          <div className="Cards row pt-5">
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={trainingCard.class}
                pic={trainingCard.pic}
                href={trainingCard.href}
                title={trainingCard.title}
                description={trainingCard.description}
              />
            </div>
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={learningCard.class}
                pic={learningCard.pic}
                href={learningCard.href}
                title={learningCard.title}
                description={learningCard.description}
              />
            </div>
          </div>
        </div>
        <button onClick={() => addMoreUserWords(5, 3)}>Добавит 5 слов</button>
      </div>
    )
  }
}

export default MainPage
