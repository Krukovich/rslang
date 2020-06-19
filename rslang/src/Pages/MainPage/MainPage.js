import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import './MainPage.scss';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            games: [
                {
                    title: 'Training',
                    description: 'Study English',
                    href: '#',
                },
                {
                    title: 'Learning',
                    description: 'Learn English',
                    href: 'PlayZonePage',
                },
            ]
        }
    }

    render() {
        const games = this.state.games;

        return (
            <div className="row no-gutters">
                <Sidebar />
                <div className="col-md-12">
                    <div className="row no-gutters">
                        <Header />
                    </div>
                    <div className="row p-3">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <Card href={games[0].href} title={games[0].title} description={games[0].description} />
                                </div>
                                <div className="col-md-6">
                                    <Card href={games[1].href} title={games[1].title} description={games[1].description} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage