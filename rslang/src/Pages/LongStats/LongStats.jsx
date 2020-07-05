import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
// import showStats from '../../Store/Longs/actions';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './longStats.scss';
import BtnsBar from './BtnsBar/BtnsBar';

const miniGameStats = (store) => {
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
  const { minigameSavannaStats } = store.savanna;
  const { counter } = store.sprintGame;
  return {
    minigameSavannaStats: minigameSavannaStats,
    counter: counter,
=======
  const { newWordsCount } = store.appSettings;
  return {
    newWordsCount: newWordsCount,
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
}}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
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
<<<<<<< HEAD
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
  let stats = content.optional.optional;
=======
=======
<<<<<<< HEAD
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
  console.log(content);
  let stats = content.optional.optional.wordStat;

  console.log(stats);
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
>>>>>>> fix: data from server:rslang/src/Pages/LongStats/LongStats.js
=======
=======
  let stats = content.optional.optional;
>>>>>>> mini games BTNs
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
=======
  let stats = content.optional.optional;
>>>>>>> fix, refactor
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
<<<<<<< HEAD
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
      clicked: false,
      wordsNow: 0, // Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
=======
      wordsNow: Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
>>>>>>> fix: data from server:rslang/src/Pages/LongStats/LongStats.js
=======
      wordsNow: 0,// Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
>>>>>>> fix, refactor
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
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
        { 'id': 1, label: 'Аудио Вызов', 'visible': false },
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
        { 'id': 2, label: 'Спринт', 'visible': false },
=======
        { 'id': 2, label: 'Паззлы', 'visible': false },
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
        { 'id': 3, label: 'Саванна', 'visible': false }
=======
        { 'id': 1, label: 'Audio Call', 'visible': false },
        { 'id': 2, label: 'Game Puzzle', 'visible': false },
        { 'id': 3, label: 'Savanna', 'visible': false }
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
      ]
    }
  }

<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
  render() {
    return (
      <React.Fragment>
        <div className="graph longStatsElem pt-5">
=======
          data: [], //...props.dailyNew
          fill: false,
        }
      ]
    };
=======
=======
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
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
          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.counter}`);
          break;
        case 3: 
          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.minigameSavannaStats}`); 
          break; 
        default: 
          break; 
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
      console.log(`Clicked ${id} ${items[id-1].label}`);
      return { items };
    })
  }

>>>>>>> mini games BTNs
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
  asideToggle = () => {
    this.setState({ clicked: !this.state.clicked });
  }
=======
  // asideToggle = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // }
>>>>>>> mini games BTNs

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
<<<<<<< HEAD
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
=======
>>>>>>> fix, refactor
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
<<<<<<< HEAD
=======
        const resultWords = result.map((item) => {
=======
        const resultWords = result.wordStat.map((item) => {
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
          const elem = item.newWords;
          return elem;
        }); 
        const resultDate = result.wordStat.map((item) => {
          const date = new Date(item.timestamp).toString().slice(4, 15);
          return date;
        })
        console.log(resultWords)
        this.state.datasets[0].data = this.getSum(resultWords);
        this.state.datasets[1].data = resultWords;
        this.state.labels = resultDate;
>>>>>>> fix: data from server:rslang/src/Pages/LongStats/LongStats.js
=======
>>>>>>> fix, refactor
        this._asyncRequest = null;
        this.setState({result});
      }
    );
  }

  componentWillUnmount() {
    if(this._asyncRequest) {
      this._asyncRequest.cancel();
    }
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
           </div> 
            <div className="longStatsElem">
<<<<<<< HEAD
            <BtnsBar items={items} showStats={this.showStats} />
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
            <div className="longStatsElem-field"></div>
            </div>         
=======
            </div>
            
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
          </div>
=======
              <BtnsBar items={items} showStats={this.showStats} />
              <div className="longStatsElem-field"></div>
            </div>         
>>>>>>> fix, refactor
        </div>
      </React.Fragment>
    );
  }
}

export default connect(miniGameStats)(LongStats);