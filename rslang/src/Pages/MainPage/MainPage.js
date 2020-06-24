import React, { Component } from 'react';

import Card from '../../Components/Card/Card';

import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      trainingCard: {
        title: 'Training',
        description: 'Study English',
        href: '#',
        class: 'Card-Image_training',
        pic: pic1
      },
      learningCard: {
        title: 'Learning',
        description: 'Learn English',
        href: 'PlayZonePage',
        class: 'Card-Image_learning',
        pic: pic2
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
                <div className="row pt-5">
                  <div className="col-md-6">
                    <Card
                      class={trainingCard.class}
                      pic={trainingCard.pic}
                      href={trainingCard.href}
                      title={trainingCard.title}
                      description={trainingCard.description}
                    />
                  </div>
                  <div className="col-md-6">
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
            </div>
    )
  }
}

export default MainPage
