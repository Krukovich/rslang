import React, { Component } from 'react';

import Card from '../../Components/Card/Card';
import './MiniGamesPage.scss';

import pic1 from './assets/pic1.jpg';
import FortuneLogo from './assets/logo-turbo.jpg';

class MiniGamesPage extends Component {
  constructor() {
    super();
    this.state = {
      sprintCard: {
        title: 'Sprint',
        description: '',
        href: 'SprintGame',
        class: 'Card-Image_training',
        pic: pic1
      },
      audiocallCard: {
        title: 'Audiocall',
        description: '',
        href: 'audiocall',
        class: 'Card-Image_learning',
        pic: pic1
      },
      fortuneCard: {
        title: 'Turbo Wheel of Fortune',
        description: '',
        href: 'FortuneGame',
        class: 'Card-Image_learning',
        pic: FortuneLogo
      },
      savannahCard: {
        title: 'Savannah',
        description: '',
        href: 'Savannah',
        class: 'Card-Image_learning',
        pic: pic1
      },
      englishpuzzleCard: {
        title: 'English Puzzle',
        description: '',
        href: 'englishpuzzle',
        class: 'Card-Image_learning',
        pic: pic1
      },
      speakitCard: {
        title: 'Speak It',
        description: '',
        href: 'speakit',
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
    const sprintCard = this.state.sprintCard;
    const audiocallCard = this.state.audiocallCard;
    const savannahCard = this.state.savannahCard;
    const fortuneCard = this.state.fortuneCard;
    const englishpuzzleCard = this.state.englishpuzzleCard;
    const speakitCard = this.state.speakitCard;

    return (
      <div className="MinigamesPage row p-3">
        <div className="col-md-12">
          <div className="Cards row pt-5">
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={sprintCard.class}
                pic={sprintCard.pic}
                href={sprintCard.href}
                title={sprintCard.title}
                description={sprintCard.description}
              />
            </div>
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={audiocallCard.class}
                pic={audiocallCard.pic}
                href={audiocallCard.href}
                title={audiocallCard.title}
                description={audiocallCard.description}
              />
            </div>
          </div>
          <div className="Cards row pt-2">
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={savannahCard.class}
                pic={savannahCard.pic}
                href={savannahCard.href}
                title={savannahCard.title}
                description={savannahCard.description}
              />
            </div>
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={englishpuzzleCard.class}
                pic={englishpuzzleCard.pic}
                href={englishpuzzleCard.href}
                title={englishpuzzleCard.title}
                description={englishpuzzleCard.description}
              />
            </div>
          </div>
          <div className="Cards row pt-2">
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={speakitCard.class}
                pic={speakitCard.pic}
                href={speakitCard.href}
                title={speakitCard.title}
                description={speakitCard.description}
              />
            </div>
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={fortuneCard.class}
                pic={fortuneCard.pic}
                href={fortuneCard.href}
                title={fortuneCard.title}
                description={fortuneCard.description}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MiniGamesPage
