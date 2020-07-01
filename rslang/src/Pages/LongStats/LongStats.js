import React from 'react';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'react-bootstrap/ProgressBar';
<<<<<<< HEAD
=======
import './longStats.scss';

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
>>>>>>> feat: stats from server BETA

<<<<<<< HEAD
import './longStats.scss';
=======
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
  let stats = content.optional.optional.wordStat;
  return stats;
};
>>>>>>> feat: stats from server BETA

const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">Изучено слов из словаря</div>
  )
}

export default class LongStats extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
<<<<<<< HEAD
      wordsNow: Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
<<<<<<< HEAD
      labels: props.dataLabels,
=======
    this.wordsNow = Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords);
    this.dataLabels = props.dataLabels;
    this.state = {
      labels: [...props.dataLabels],
>>>>>>> feat: stats from server BETA
=======
=======
      clicked: false,
      wordsNow: 0,// Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
>>>>>>> fix, refactor
      labels: [], // props.dataLabels,
>>>>>>> fix: data from server
      datasets: [
        {
          label: 'Прогресс',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'orange',
          borderWidth: 2,
<<<<<<< HEAD
          data: props.totalNewWords,
=======
          data: [] //...props.totalNewWords
>>>>>>> feat: stats from server BETA
        },
        {
          label: 'Слов изучено в день',
          borderColor: 'tomato',
          backgroundColor: 'tomato',
<<<<<<< HEAD
          data: props.dailyNew,
          fill: false,
        }
      ]
    }
  }

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
  asideToggle = () => {
    this.setState({ clicked: !this.state.clicked });
>>>>>>> feat: stats from server BETA
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
        const resultWords = result.map((item) => {
          const elem = item.newWords;
          return elem;
        }); 
        const resultDate = result.map((item) => {
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

  componentWillUnmount() {
    if(this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  
  render() {      
    return ( 
<<<<<<< HEAD
      <div>
        <div className="graph longStatsElem">
>>>>>>> feat: stats from server BETA
=======
      <React.Fragment>
      <div className="graph longStatsElem col-md-9">
>>>>>>> fix, refactor
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
<<<<<<< HEAD
          <div className="col-md-8 ">
            <ProgressBar variant="success" animated min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
=======
          <div className="col-md-8">
            <ProgressBar variant="success" min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
>>>>>>> fix, refactor
            <ProgressLabel />
          </div>
        </div>
<<<<<<< HEAD
      </React.Fragment>
    );
  }
}
=======
      </div>  
    );
  }
 }


>>>>>>> feat: stats from server BETA
