import React, { Component } from 'react';

import AboutCard from '../../Components/AboutCard/AboutCard'
import './AboutPage.scss'


class AboutPage extends Component {
    constructor() {
        super();
        this.state = {
            members: [
                {
                    name: 'Евгений',
                    description: 'Ментор. Спасение утопающих',
                    href: ['https://github.com/ZennKa', 'https://github.com/ZennKa'],
                    classCSS: 'AboutCard-pic1'
                },
                {
                    name: 'Алексей',
                    description: 'Тим лид. Настройка проекта, тренировка, изучение слов, english puzzle, SpeakIt, координация',
                    href: ['https://github.com/Krukovich',
                        'https://krukovich.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic2'
                },
                {
                    name: 'Александр',
                    description: 'Роутер, логин и регистрация, audiocall, саванна',
                    href: ['https://github.com/alexger95',
                        'https://alexger95.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic3'
                },
                {
                    name: 'Дарья',
                    description: 'Страница статистики и связанная с ней логика',
                    href: ['https://github.com/DaryaYa',
                        'https://daryaya.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic4'
                },
                {
                    name: 'Павел',
                    description: 'Спринт, Поле Чудес, общая стилизация и разметка, саванна',
                    href: ['https://github.com/FightingRobot',
                        'https://fightingrobot.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic5'
                },
                {
                    name: 'Юрий',
                    description: 'Страница настроек, связанная с ней логика и промо',
                    href: ['https://github.com/fizik003',
                        'https://fizik003.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic6'
                },
                {
                    name: 'Николай',
                    description: 'Lingualeo,Lingvist, словарь и связанная логика, промо-ролик',
                    href: ['https://github.com/Nickolay-Dudaryk',
                        'https://nickolay-dudaryk.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic7'
                },
            ],
        }
    }

    spawnCards = () => {
        const members = this.state.members;
        const content = [];

        for (let i = 0; i < 7; i += 1) {
            content.push(
                <div key={"card" + i} className="d-flex justify-content-center Cards-Wrapper mt-2 col-md-4 col-xl-3 col-xs-12 col-sm-6 h-100">
                    <AboutCard
                        pic={members[i].classCSS}
                        name={members[i].name}
                        description={members[i].description}
                        href={members[i].href}
                    />
                </div>
            )
        }

        return content
    }

    render() {
        return (
            <div className="MinigamesPage row p-3">
                <div className="col-md-12">
                    <div className="Cards row pt-5">
                        {this.spawnCards()}
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage
