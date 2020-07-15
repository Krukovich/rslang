import React from 'react';
import i18n from "../../i18n";
import { Translation } from 'react-i18next';

import { PromoCard } from '../../Components/Promo/PromoCard';
import { GamesCard } from '../../Components/Promo/GamesCard';

import './Promo.scss'

class Promo extends React.Component {

  handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer pt-5">
                <div className="jumbotron settingsContainer-jumbotron">
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => this.handleClick('en')}>EN</button>
                    <button className="btn btn-primary" onClick={() => this.handleClick('ru')}>RU</button>
                  </div>
                  <p className="mt-3">{
                      <Translation>
                      {
                        (t) => <>{t('promo.1')}</>
                      }
                    </Translation>
                  }
                </p>
                </div>
                <PromoCard
                  cardTitle={
                    <Translation>
                      {
                        (t) => <>{t('promo.2')}</>
                      }
                    </Translation>
                  }
                  classN={'PromoCard-Learn'}
                  cardText={
                    <Translation>
                      {
                        (t) => <>{t('promo.3')}</>
                      }
                    </Translation>
                  }
                  btnText={
                    <Translation>
                      {
                        (t) => <>{t('promo.4')}</>
                      }
                    </Translation>
                  }
                  link="/play-zone"
                />

                <PromoCard
                  cardTitle={
                    <Translation>
                      {
                        (t) => <>{t('promo.5')}</>
                      }
                    </Translation>
                  }
                  classN={'PromoCard-Stats'}
                  cardText={
                    <Translation>
                      {
                        (t) => <>{t('promo.6')}</>
                      }
                    </Translation>
                  }
                  btnText={
                    <Translation>
                      {
                        (t) => <>{t('promo.7')}</>
                      }
                    </Translation>
                  }
                  link="/long-stats"
                />

                <PromoCard
                  cardTitle={
                    <Translation>
                      {
                        (t) => <>{t('promo.8')}</>
                      }
                    </Translation>
                  }
                  // cardImg={voc}
                  classN={'PromoCard-Voc'}
                  cardText={
                    <Translation>
                      {
                        (t) => <>{t('promo.9')}</>
                      }
                    </Translation>
                  }
                  btnText={
                    <Translation>
                      {
                        (t) => <>{t('promo.10')}</>
                      }
                    </Translation>
                  }
                  link="learning-words"
                />
                <div className="row justify-content-center mt-4 mb-4">
                  <h2 className='tx' >
                    <Translation>
                        {
                          (t) => <>{t('promo.11')}</>
                        }
                      </Translation>
                  </h2>
                </div>
                <div className="row">
                  <GamesCard
                    gameTitle='Sprint'
                    gameDescription={
                      <Translation>
                        {
                          (t) => <>{t('promo.12')}</>
                        }
                      </Translation>
                    }
                    gameLink='/SprintGame'
                  />
                  <GamesCard
                    gameTitle='Savanna'
                    gameDescription={
                      <Translation>
                        {
                          (t) => <>{t('promo.14')}</>
                        }
                      </Translation>
                    }
                    gameLink='/Savanna'
                  />
                  <GamesCard
                    gameTitle='Speak It'
                    gameDescription={
                      <Translation>
                        {
                          (t) => <>{t('promo.15')}</>
                        }
                      </Translation>
                    }
                    gameLink='/speakIt-start'
                  />
                  <GamesCard
                    gameTitle={
                      <Translation>
                        {
                          (t) => <>{t('promo.16')}</>
                        }
                      </Translation>
                    }
                    gameDescription={
                      <Translation>
                        {
                          (t) => <>{t('promo.17')}</>
                        }
                      </Translation>
                    }
                    gameLink='/fortune-game'

                  />
                  <GamesCard
                    gameTitle='English Puzzle'
                    gameDescription={
                      <Translation>
                        {
                          (t) => <>{t('promo.18')}</>
                        }
                      </Translation>
                    }
                    gameLink='/english-puzzle'
                  />

                  <GamesCard
                    gameTitle='Audiocall'
                    gameDescription={
                      <Translation>
                        {
                          (t) => <>{t('promo.19')}</>
                        }
                      </Translation>
                    }
                    gameLink='/audiocall'
                  />

                </div>
                <div className="video row justify-content-center mt-4 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hoOlURkumCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Promo;