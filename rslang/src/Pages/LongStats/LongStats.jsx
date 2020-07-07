import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
import './longStats.scss';
>>>>>>> fix
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
<<<<<<< HEAD
=======
import { setSavannaStats } from '../../Store/Savanna/actions';
import { getCookie } from '../../Components/Tools/GetCoocke';

<<<<<<< HEAD
>>>>>>> fix: data from server
=======
=======
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
// import showStats from '../../Store/Longs/actions';
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
>>>>>>> fix
import ProgressBar from 'react-bootstrap/ProgressBar';
<<<<<<< HEAD
import './longStats.scss';
=======
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
>>>>>>> mini games BTNs
import BtnsBar from './BtnsBar/BtnsBar';
<<<<<<< HEAD
<<<<<<< HEAD
import { setSavannaStats } from '../../Store/Savanna/actions';
=======
>>>>>>> fix: data from server
=======
import { setSavannaStats } from '../../Store/Savanna/actions';
>>>>>>> mini stats from redux
import MiniStats from './MiniStats/MiniStats';

const miniGameStats = (store) => {
  const { minigameSavannaStats } = store.savanna;
<<<<<<< HEAD
<<<<<<< HEAD
  
  const { difficulty } = store.fortuneGame;
  return {
    minigameSavannaStats: minigameSavannaStats,
    difficulty: difficulty,
}}
=======
import './longStats.scss';
import BtnsBar from './BtnsBar/BtnsBar';
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js

<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
const changeMiniStats = {
  setSavannaStats,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
const miniGameStats = (store) => {
  const { newWordsCount } = store.appSettings;
  return {
    newWordsCount: newWordsCount,
=======
  const { counter } = store.sprintGame;
=======
  
>>>>>>> mini stats from redux
  const { difficulty } = store.fortuneGame;
  return {
    minigameSavannaStats: minigameSavannaStats,
    difficulty: difficulty,
>>>>>>> add: buttons
}}

const changeMiniStats = {
  setSavannaStats,
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
>>>>>>> fix
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
=======
>>>>>>> fix: data from server
}

const token = getCookie("token");
const userId = getCookie("userId");

const getStats = async () => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const content = await rawResponse.json();
  let stats = content.optional.optional;
  return stats;
};

const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">Изучено слов из словаря</div>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
=======
>>>>>>> mini stats from redux
// const ShowTest = ({ count }) => {
//   return(
//     <p>{count}</p>
//   )
// }

<<<<<<< HEAD
=======
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
>>>>>>> fix
=======
>>>>>>> mini stats from redux
class LongStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
      wordsNow: 0,// Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
=======
      clicked: false,
      wordsNow: 0, // Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
      labels: [], // props.dataLabels,
      datasets: [
        {
          label: 'Прогресс',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'orange',
          borderWidth: 2,
          data: [] //...props.totalNewWords
        },
        {
          label: 'Слов изучено в день',
          borderColor: 'tomato',
          backgroundColor: 'tomato',
          data: [], //...props.dailyNew,
          fill: false,
        }
      ],
      items: [
        { 'id': 1, label: 'Аудио Вызов', 'visible': false },
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
        { 'id': 2, label: 'Спринт', 'visible': false },
        { 'id': 3, label: 'Саванна', 'visible': false },
        { 'id': 4, label: 'Паззл', 'visible': false },
        { 'id': 5, label: 'Скажи Слово', 'visible': false },
        { 'id': 6, label: 'Поле Чудес', 'visible': false },
<<<<<<< HEAD
<<<<<<< HEAD
      ],
<<<<<<< HEAD
=======

>>>>>>> mini stats test
      count: [
        {"timestamp":1593114322795,"newWords":7},
        {"timestamp":1593224622795,"newWords":2},
        {newWords: 4, timestamp: 1593375922795},
      ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>> fix: data from server
=======
      
=======
>>>>>>> mini stats test
<<<<<<< HEAD
>>>>>>> mini stats test
=======
=======
        { 'id': 2, label: 'Паззлы', 'visible': false },
        { 'id': 3, label: 'Саванна', 'visible': false }
=======
>>>>>>> add: buttons
      ]
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
>>>>>>> fix
=======
      ],
      count: [1,2,3],
>>>>>>> mini stats from redux
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
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
      switch (id) {
        case 2 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
<<<<<<< HEAD
          state.count = this.state.count;
<<<<<<< HEAD
<<<<<<< HEAD

          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.counter}`);
<<<<<<< HEAD

=======
>>>>>>> fix: data from server
=======
=======
          state.count = this.props.counter;
>>>>>>> mini stats test
>>>>>>> mini stats test
=======
          state.count = this.props.counter;
>>>>>>> mini stats from redux
          break;
        case 3: 
          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.minigameSavannaStats}`); 
          break; 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> mini stats from redux
        case 4 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
          this.props.setSavannaStats([10,20,30]);
          console.log(`${this.props.minigameSavannaStats}`);
          break;  
        case 5 :
<<<<<<< HEAD
          state.count = (state.count).map(elem => elem.newWords + 2);
          break;
        case 6 : 
          console.log(`${id} ${items[id-1].label} ${this.props.difficulty}`);
          state.count = this.props.minigameSavannaStats;
          break;  
=======
        case 6 : 
        console.log(`${id} ${items[id-1].label} ${this.props.difficulty}`)  
>>>>>>> add: buttons
=======
          state.count = (state.count).map(elem => elem+2);
          break;
        case 6 : 
          console.log(`${id} ${items[id-1].label} ${this.props.difficulty}`);
          break;  
>>>>>>> mini stats from redux
      }   
      return { items };  
=======
      console.log(`Clicked ${id} ${items[id-1].label} ${this.props.newWordsCount}`);
      return { items };
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
    })
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  asideToggle = () => {
    this.setState({ clicked: !this.state.clicked });
  }

=======
>>>>>>> mini stats from redux
>>>>>>> mini stats from redux
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
        const resultWords = result.wordStat.map((item) => {
          const elem = item.newWords;
          return elem;
        }); 
        const resultDate = result.wordStat.map((item) => {
          const date = new Date(item.timestamp).toString().slice(4, 15);
          return date;
        })
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
            <ProgressBar variant="success" min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
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

<<<<<<< HEAD
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
<<<<<<< HEAD
export default connect(miniGameStats, changeMiniStats)(LongStats);
=======
<<<<<<< HEAD
export default connect(miniGameStats, changeMiniStats)(LongStats);
=======
export default connect(miniGameStats, changeMiniStats)(LongStats);
>>>>>>> mini stats test
>>>>>>> mini stats test
=======
export default connect(miniGameStats)(LongStats);
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
=======
export default connect(miniGameStats, changeMiniStats)(LongStats);
>>>>>>> mini stats from redux
