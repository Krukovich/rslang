import React from 'react';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './longStats.scss';

<<<<<<< HEAD
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjExOTlhYWEyNDVlMDAxN2E1NzhmMCIsImlhdCI6MTU5MzAzMjIzNiwiZXhwIjoxNTkzMDQ2NjM2fQ.UnqZaUaJGZ0uoPWRL8p02d2CObkaly_CAWyAbU53T78";
// const userId = "5ef1199aaa245e0017a578f0";

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
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
  const stats = JSON.parse(content.optional.dailyNewWords);

  console.log(stats, typeof stats, Array.isArray(stats));
  return stats;
};
>>>>>>> feat: stats from server BETA

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
  const stats = JSON.parse(content.optional.dailyNewWords);

  console.log(stats, typeof stats, Array.isArray(stats));
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
<<<<<<< HEAD
    this.state = {
      clicked: false,
      wordsNow: Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
      labels: props.dataLabels,
=======
    this.wordsNow = Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords);
    this.dataLabels = props.dataLabels;
    this.state = {
      labels: [...props.dataLabels],
>>>>>>> feat: stats from server BETA
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
<<<<<<< HEAD
          data: [], //...props.dailyNew,
          fill: false,
        }
      ]
    }
  }

  asideToggle = () => {
    this.setState({ clicked: !this.state.clicked });
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
        this.state.datasets[0].data = this.getSum(result);
        this.state.datasets[1].data = result;
        this._asyncRequest = null;
        this.setState({result});
      }
    );
  }

=======
          data: [], //...props.dailyNew
          fill: false,
        }
      ]
    };
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
        this.state.datasets[0].data = this.getSum(result);
        this.state.datasets[1].data = result;
        this._asyncRequest = null;
        this.setState({result});
      }
    );
  }

>>>>>>> feat: stats from server BETA
  componentWillUnmount() {
    if(this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  
  render() {      
    return ( 
      <React.Fragment>
      <div className="graph longStatsElem pt-5">
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
            <ProgressBar variant="success" min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
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
