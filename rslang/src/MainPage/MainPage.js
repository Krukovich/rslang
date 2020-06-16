import React, { Component } from 'react';
import Card from './Card/Card';
import './MainPage.scss';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            games: [
                { title: 'English Puzzle', description: 'Learn English to solve puzzles' },
                { title: 'SpeakIt', description: 'Listen English words' },
                { title: 'Savannah', description: 'Description placeholder' },
                { title: 'Sprint', description: 'Description placeholder' },
            ]
        }
    }

    render() {
        const games = this.state.games;

        return (
            <div className="MainPage-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <Card title={games[0].title} description={games[0].description} />
                    </div>
                    <div className="col-md-6">
                        <Card title={games[1].title} description={games[1].description} />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <Card title={games[2].title} description={games[2].description} />
                    </div>
                    <div className="col-md-6">
                        <Card title={games[3].title} description={games[3].description} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage