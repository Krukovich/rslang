import React from "react";
import "./longStats.scss";
import { Line } from "react-chartjs-2";
import ProgressBar from "react-bootstrap/ProgressBar";
import BtnsBar from "./BtnsBar/BtnsBar";
import MiniStats from "./MiniStats/MiniStats";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">
      Изучено слов из словаря
    </div>
  );
};

export default class LongStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsNow: 0, // Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
      labels: [], // props.dataLabels,
      minigameSelect: "audioCall",
      datasets: [
        {
          label: "Прогресс",
          borderColor: "rgba(0,0,0,1)",
          backgroundColor: "darkcyan",
          borderWidth: 2,
          data: [], //...props.totalNewWords
        },
        {
          label: "Слов изучено в день",
          borderColor: "darkblue",
          backgroundColor: "darkblue",
          data: [], //...props.dailyNew,
          fill: false,
        },
      ],
      items: [
        { id: 1, label: "Аудио Вызов", visible: false, apiName: "audioCall" },
        { id: 2, label: "Спринт", visible: false, apiName: "sprintGame" },
        { id: 3, label: "Саванна", visible: false, apiName: "statsSavanna" },
        { id: 4, label: "Паззл", visible: false, apiName: "gamePuzzle" },
        { id: 5, label: "Скажи Слово", visible: false, apiName: "speakIt" },
        { id: 6, label: "Поле Чудес", visible: false, apiName: "fortuneGame" },
      ],
      count: [],
    };
  }

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  showStats = (id) => {  
    this.setState({minigameSelect: this.state.items[id-1].apiName})//alexger
    return this.state.items;
  };

  getSum(arr) {
    let prev = 0;
    return arr.map((elem) => {
      prev += elem;
      return prev;
    });
  }

  async componentDidMount() {
    let result = await fetchAPI("users-get-statistics").then(
    );
    this.setState({ count: result.optional });
    let appStats = result.optional.appStats;
    delete appStats[0];

    const resultWords = Object.values(appStats);
    const resultDate = Object.keys(appStats).map((item) => {
      const data = Number(item);
      const date = new Date(data).toString().slice(4, 15);
      return date;
    });
    this.state.datasets[0].data = this.getSum(resultWords);
    this.state.datasets[1].data = resultWords;
    this.state.labels = resultDate;
    this.state.wordsNow = Math.ceil(
      (this.state.datasets[0].data[this.state.datasets[0].data.length - 1] *
        100) /
        this.props.totalWords
    );
    this._asyncRequest = null;
    this.setState({ result });
  }

  minigameSelect(selector) {
    this.setState({ minigameSelect: selector });
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
                text: "Все слова",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "bottom",
              },
              tooltips: {
                mode: "index",
                intersect: true,
              },
            }}
          />
        </div>
        <div className="longStatsElem row d-flex justify-content-center">
          <div className="col-md-8">
            <ProgressBar
              variant="info"
              min={0}
              now={this.state.wordsNow}
              label={`${this.state.wordsNow}%`}
            />
            <ProgressLabel />

            <div className="longStatsElem">
              <BtnsBar items={items} showStats={this.showStats} />
              <div className="longStatsElem-field">
                <MiniStats
                  stats={this.state.count}
                  miniGame={this.state.minigameSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
