import React from 'react';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'react-bootstrap/ProgressBar';


import './longStats.scss';
\
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjExOTlhYWEyNDVlMDAxN2E1NzhmMCIsImlhdCI6MTU5MzAwNDY3NiwiZXhwIjoxNTkzMDE5MDc2fQ.4bChZYLqFi411oUYRTQqyMEfBfb3g962YysjdPqSfkc";
const userId = "5ef1199aaa245e0017a578f0";

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
  console.log(content);
  let stats = content.optional.optional.wordStat;

  console.log(stats);
  return stats;
};


const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">Изучено слов из словаря</div>
  )
}

// getStats().then(result => {
//   console.log(result)});

export default class LongStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordsNow: Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
      labels: props.dataLabels,

      labels: [], // props.dataLabels,

      datasets: [
        {
          label: 'Прогресс',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'orange',
          borderWidth: 2,
          data: props.totalNewWords,
        },
        {
          label: 'Слов изучено в день',
          borderColor: 'tomato',
          backgroundColor: 'tomato',

          data: props.dailyNew,
          fill: false,
        }
      ],
      items: [
        { 'id': 1, label: 'Audio Call', 'visible': false },
        { 'id': 2, label: 'Game Puzzle', 'visible': false },
        { 'id': 3, label: 'Savanna', 'visible': false }
      ]
    }
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
        const resultWords = result.wordStat.map((item) => {
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
      <div>
        <div className="graph longStatsElem">

          <Line
            data={this.state}
            // getElementAtEvent={dataset => console.log(dataset, dataset[0]._index)} // shows the dataset elements
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
          <div className="col-md-8 ">
            <ProgressBar variant="success" animated min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
            <ProgressLabel />
            <div className="longStatsElem">
            <BtnsBar items={items} showStats={this.showStats} />
            </div>
            
          </div>
        </div>
     </div>
    );
  }
}
