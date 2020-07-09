import React, { Component } from 'react';

import Card from '../../Components/Card/Card';
import AboutCard from '../../Components/AboutCard/AboutCard'
import './AboutPage.scss'

import git from './assets/git.png';


class AboutPage extends Component {
    constructor() {
        super();
        this.state = {
            member1: {
                name: 'Евгений',
                description: 'Ментор',
                href: ['https://github.com/ZennKa', '#'],
                classCSS: 'AboutCard-pic1'
            },
            member2: {
                name: 'Алексей',
                description: 'Тим лид',
                href: ['https://github.com/Krukovich',
                    'https://krukovich.github.io/rsschool-cv/'],
                classCSS: 'AboutCard-pic2'
            },
            member3: {
                name: 'Александр',
                description: 'Участник',
                href: ['https://github.com/alexger95',
                    'https://alexger95.github.io/rsschool-cv/'],
                classCSS: 'AboutCard-pic3'
            },
            member4: {
                name: 'Дарья',
                description: 'Участник',
                href: ['https://github.com/DaryaYa',
                    'https://daryaya.github.io/rsschool-cv/'],
                classCSS: 'AboutCard-pic4'
            },
            member5: {
                name: 'Павел',
                description: 'Участник',
                href: ['https://github.com/FightingRobot',
                    'https://fightingrobot.github.io/rsschool-cv/'],
                classCSS: 'AboutCard-pic5'
            },
            member6: {
                name: 'Юрий',
                description: 'Участник',
                href: ['https://github.com/fizik003',
                    'https://fizik003.github.io/rsschool-cv/'],
                classCSS: 'AboutCard-pic6'
            },
            member7: {
                name: 'Николай',
                description: 'Участник',
                href: ['https://github.com/Nickolay-Dudaryk',
                    'https://nickolay-dudaryk.github.io/rsschool-cv/'],
                classCSS: 'AboutCard-pic7'
            },
        }
    }

    render() {
        const member1 = this.state.member1;
        const member2 = this.state.member2;
        const member3 = this.state.member3;
        const member4 = this.state.member4;
        const member5 = this.state.member5;
        const member6 = this.state.member6;
        const member7 = this.state.member7;

        return (
            <div className="MinigamesPage row p-3">
                <div className="col-md-12">
                    <div className="Cards row pt-5">
                        <div className="Cards-Wrapper col-md-4 h-100">
                            <AboutCard
                                pic={member1.classCSS}
                                name={member1.name}
                                description={member1.description}
                                href={member1.href}
                            />
                        </div>
                        <div className="Cards-Wrapper col-md-4 h-100">
                            <AboutCard
                                pic={member2.classCSS}
                                name={member2.name}
                                description={member2.description}
                                href={member2.href}
                            />
                        </div>
                        <div className="Cards-Wrapper col-md-4 ">
                            <AboutCard
                                pic={member3.classCSS}
                                name={member3.name}
                                description={member3.description}
                                href={member3.href}
                            />
                        </div>
                    </div>
                    <div className="Cards row pt-2">
                        <div className="Cards-Wrapper col-md-4 h-100">
                            <AboutCard
                                pic={member4.classCSS}
                                name={member4.name}
                                description={member4.description}
                                href={member4.href}
                            />
                        </div>
                        <div className="Cards-Wrapper col-md-4 h-100">
                            <AboutCard
                                pic={member5.classCSS}
                                name={member5.name}
                                description={member5.description}
                                href={member5.href}
                            />
                        </div>
                        <div className="Cards-Wrapper col-md-4 ">
                            <AboutCard
                                pic={member6.classCSS}
                                name={member6.name}
                                description={member6.description}
                                href={member6.href}
                            />
                        </div>
                    </div>
                    <div className="Cards row pt-2">
                        <div className="Cards-Wrapper col-md-4 h-100">
                            <AboutCard
                                pic={member7.classCSS}
                                name={member7.name}
                                description={member7.description}
                                href={member7.href}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage
