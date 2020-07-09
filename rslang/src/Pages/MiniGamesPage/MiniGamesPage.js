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
      audioCallCard: {
        title: 'Audiocall',
        description: '',
        href: 'audiocall',
        class: 'Card-Image_learning',
        pic: pic1
      },
      fortuneCard: {
        title: 'Turbo Wheel of Fortune',
        description: '',
        href: 'fortune-game',
        class: 'Card-Image_learning',
        pic: FortuneLogo
      },
      savannaCard: {
        title: 'Savanna',
        description: '',
        href: 'Savanna',
        class: 'Card-Image_learning',
        pic: pic1
      },
      englishPuzzleCard: {
        title: 'English Puzzle',
        description: '',
        href: 'englishpuzzle',
        class: 'Card-Image_learning',
        pic: pic1
      },
      speakItCard: {
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
    const audioCallCard = this.state.audioCallCard;
    const savannaCard = this.state.savannaCard;
    const fortuneCard = this.state.fortuneCard;
    const englishPuzzleCard = this.state.englishPuzzleCard;
    const speakItCard = this.state.speakItCard;

    return (
      <div className="MiniGamesPage row p-3">
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
                class={audioCallCard.class}
                pic={audioCallCard.pic}
                href={audioCallCard.href}
                title={audioCallCard.title}
                description={audioCallCard.description}
              />
            </div>
          </div>
          <div className="Cards row pt-2">
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={savannaCard.class}
                pic={savannaCard.pic}
                href={savannaCard.href}
                title={savannaCard.title}
                description={savannaCard.description}
              />
            </div>
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={englishPuzzleCard.class}
                pic={englishPuzzleCard.pic}
                href={englishPuzzleCard.href}
                title={englishPuzzleCard.title}
                description={englishPuzzleCard.description}
              />
            </div>
          </div>
          <div className="Cards row pt-2">
            <div className="Cards-Wrapper col-md-6 h-100">
              <Card
                class={speakItCard.class}
                pic={speakItCard.pic}
                href={speakItCard.href}
                title={speakItCard.title}
                description={speakItCard.description}
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
