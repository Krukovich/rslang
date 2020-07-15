import React, { Component } from 'react';
import { Translation } from 'react-i18next';

import AboutCard from '../../Components/AboutCard/AboutCard'
import './AboutPage.scss'


class AboutPage extends Component {
    constructor() {
        super();
        this.state = {
            members: [
                {
                    name: 'team.1.1',
                    description: 'team.1.2',
                    href: ['https://github.com/ZennKa', 'https://github.com/ZennKa'],
                    classCSS: 'AboutCard-pic1'
                },
                {
                    name: 'team.2.1',
                    description: 'team.2.2',
                    href: ['https://github.com/Krukovich',
                        'https://krukovich.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic2'
                },
                {
                    name: 'team.3.1',
                    description: 'team.3.2',
                    href: ['https://github.com/alexger95',
                        'https://alexger95.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic3'
                },
                {
                    name: 'team.4.1',
                    description: 'team.4.2',
                    href: ['https://github.com/DaryaYa',
                        'https://daryaya.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic4'
                },
                {
                    name: 'team.5.1',
                    description: 'team.5.2',
                    href: ['https://github.com/FightingRobot',
                        'https://fightingrobot.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic5'
                },
                {
                    name: 'team.6.1',
                    description: 'team.6.2',
                    href: ['https://github.com/fizik003',
                        'https://fizik003.github.io/rsschool-cv/'],
                    classCSS: 'AboutCard-pic6'
                },
                {
                    name: 'team.7.1',
                    description: 'team.7.2',
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
