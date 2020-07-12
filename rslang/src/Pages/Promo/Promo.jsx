import React from 'react';

import { PromoCard } from '../../Components/Promo/PromoCard';
import { GamesCard } from '../../Components/Promo/GamesCard';

import './Promo.scss'

class Promo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer pt-5">
                <div className="jumbotron">
                  <p>
                    Играть и изучать английский одновременно?
                    Легко! Особенно вместе c  rslang. Чем удобно
                    это приложение? Все самое необходимое для
                    увлекательного изучения английского языка
                    в одном месте. Обо всем по порядку.
                </p>
                </div>
                <PromoCard
                  cardTitle='ИЗУЧЕНИЕ СЛОВ'
                  classN={'PromoCard-Learn'}
                  cardText='Каждый раз вспоминания то или иное 
                            слово на английском, хочется, чтобы оно 
                            не вертелось где-то на языке, а сразу же 
                            красиво вливалось в речь. Именно поэтому так важно 
                            пополнять свой словарный запас. Раздел «Изучение слов» 
                            поможет как следует встряхнуть ваш активный и пассивный 
                            словарь. Здесь необходимо правильно вписать подходящее по смыслу 
                            слово в предложении. Отличная возможность проверить орфографию! 
                            После написания слова можно проверить себя, а также прослушать 
                            верный вариант на английском. В случае затруднения можно нажать 
                            на «показать ответ» и произнести вслух то самое «Я так и знал!»'
                  btnText='Попробовать'
                  link="/play-zone"
                />

                <PromoCard
                  cardTitle='СТАТИСТИКА'
                  classN={'PromoCard-Stats'}
                  cardText='М-мотивация! Ключ к успеху в любом деле! Не терять свою 
                            мотивацию в изучении английского поможет отслеживание результатов 
                            в разделе «Статистика». Простой для восприятия график покажет ваш 
                            прогресс: изученные слова в день, новые слова из словаря. 
                            Шаг за шагом на пути к успеху!'
                  btnText='Ваши успехи'
                  link="/long-stats"
                />

                <PromoCard
                  cardTitle='СЛОВАРЬ'
                  // cardImg={voc}
                  classN={'PromoCard-Voc'}
                  cardText='Куда без него? Словарь с транскрипцией и примерами употребления 
                            слов в контексте. Для лучшего запоминания есть наглядности в виде картинок, 
                            а также звуковое оформление слов. Формула проста: прослушал +прочел 
                            в предложении +увидел = 100% запоминание!'
                  btnText='Посмотреть'
                  link="learning-words"
                />
                <div className="row justify-content-center mt-4 mb-4"><h2 className='tx' >Мини игры</h2></div>
                <div className="row">
                  <GamesCard
                    gameTitle='Sprint'
                    gameDescription='Как играть: дано слово на английском 
                                      и его перевод. Если они совпадают, нажми "Yes", 
                                      если нет, нажми "No". Комбо из четырёх правильных 
                                      ответов удваивает награду. Три ошибки ведут к проигрышу. 
                                      Можно выставлять уровень сложности. Ох и мозговая встряска! '
                    gameLink='/SprintGame'
                  />
                  <GamesCard
                    gameTitle='Savanna'
                    gameDescription='Все просто: чем больше слов знаете, 
                                    тем больше очков зарабатываете. Идеально для прокачки 
                                    словарного запаса.'
                    gameLink='/Savanna'
                  />
                  <GamesCard
                    gameTitle='Speak It'
                    gameDescription='Говорить как носитель английского языка? 
                                      Все возможно!  Практика устной речи при помощи 
                                      технологии распознавания речи Google Web Speech 
                                      API для проверки правильности произношения. It’s easy!'
                    gameLink='/speakIt-start'
                  />
                  <GamesCard
                    gameTitle='Поле Чудес'
                    gameDescription='Открывая правильные буквы на табло, 
                                    чувствуешь себя суперфиналистом знаменитой телевизионной 
                                    игры. Так и хочется крутануть барабан!'
                  gameLink='/fortune-game'

                  />
                  <GamesCard
                    gameTitle='English Puzzle'
                    gameDescription=' Строить красивое и правильное предложение 
                                      на английском языке поможет именно эта игра. 
                                      Находим каждому слову свое место, как при 
                                      складывании пазла!'
                    gameLink='/english-puzzle'
                  />
                  <GamesCard
                    gameTitle='Audiocall'
                    gameDescription="Проверить свой английский на слух поможет 
                                      эта игра. Вы уже точно не забудете, 
                                      как звучит то или иное слово на английском, 
                                      и, конечно, обогатите свой словарный запас! Let's start!"
                    gameLink='/audiocall'
                  />

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