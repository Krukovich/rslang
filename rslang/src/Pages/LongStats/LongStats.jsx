import React from 'react';
import './longStats.scss';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { setSavannaStats } from '../../Store/Savanna/actions';
import { getCookie } from '../../Components/Tools/getCookie';

import ProgressBar from 'react-bootstrap/ProgressBar';
import BtnsBar from './BtnsBar/BtnsBar';
import MiniStats from './MiniStats/MiniStats';

const miniGameStats = (store) => {
  const { statsSavanna } = store.savanna;
  const { difficulty } = store.fortuneGame;
  const { level } = store.sprintGame;

  return {
    statsSavanna: statsSavanna,
    difficulty: difficulty,
    level: level,
}}

const changeMiniStats = {
  setSavannaStats,
}

const getStats = async () => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${getCookie("userId")}/statistics`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${getCookie("token")}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const content = await rawResponse.json();
  let stats = content.optional;
  console.log(stats)
  return stats;
};

const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">Изучено слов из словаря</div>
  )
}

class LongStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsNow: 0,// Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
      labels: [], // props.dataLabels,
      datasets: [
        {
          label: 'Прогресс',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'darkcyan',
          borderWidth: 2,
          data: [] //...props.totalNewWords
        },
        {
          label: 'Слов изучено в день',
          borderColor: 'darkblue',
          backgroundColor: 'darkblue',
          data: [], //...props.dailyNew,
          fill: false,
        }
      ],
      items: [
        { 'id': 1, label: 'Аудио Вызов', 'visible': false },
        { 'id': 2, label: 'Спринт', 'visible': false },
        { 'id': 3, label: 'Саванна', 'visible': false },
        { 'id': 4, label: 'Паззл', 'visible': false },
        { 'id': 5, label: 'Скажи Слово', 'visible': false },
        { 'id': 6, label: 'Поле Чудес', 'visible': false },
      ],
      count: [
        {1593114322795: 7},
        {1593224622795: 2},
        {1593375922795: 5},
      ],

    }
    // this.count = 0;
  }

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ]
  };

  showStats = (id) => {
    this.setState((state) => {
      const items = this.toggleProp(state.items, id, 'visible');
      switch (id) {
        case 1:
          state.count =  [{1591114322795: 17}];
          break;
        case 2 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
        
          break;
        case 3:
          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.level}`);
          break;
        case 4 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
          // state.count = this.props.statsSavanna;
          break;
        case 5 :
          state.count = this.props.statsSavanna;
          break;
        case 6 :
          console.log(`${id} ${items[id-1].label} ${this.props.difficulty}`);
          // state.count = this.props.difficulty;
          break;
      }
      return { items };
    })
  }

  getSum(arr) {
    let prev = 0;
    return arr.map((elem) => {
      prev += elem;
      return prev;
    })
  }

  componentDidMount() {
    this._asyncRequest = getStats().then(
      result => {
        console.log(result.appStats)
        
        const resultWords = Object.values(result.appStats);
        const resultDate = Object.keys(result.appStats).map((item) => {
          const data = Number(item);
          const date = new Date(data).toString().slice(4, 15);
          console.log(date)
          return date;
        });
        this.state.datasets[0].data = this.getSum(resultWords);
        this.state.datasets[1].data = resultWords;
        this.state.labels = resultDate;
        this.state.wordsNow = Math.ceil((this.state.datasets[0].data[this.state.datasets[0].data.length-1] * 100) / this.props.totalWords);
        this._asyncRequest = null;
        this.setState({result});
      }
    );
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
      <div className="graph longStatsElem col-md-9">
          <Line
            data={this.state}
            options={{
              title: {
                display: true,
                text: 'Все слова',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              tooltips: {
                mode: 'index',
                intersect: true
              }
            }}
          />
        </div>
        <div className="longStatsElem row d-flex justify-content-center">
          <div className="col-md-8">
            <ProgressBar variant="info" min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
            <ProgressLabel />

            <div className="longStatsElem">
              <BtnsBar items={items} showStats={this.showStats} />
              <div className="longStatsElem-field">
              <MiniStats count={this.state.count} />
              </div>
            </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(miniGameStats, changeMiniStats)(LongStats);
