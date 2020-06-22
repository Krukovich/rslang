import React from 'react';
import {Line} from 'react-chartjs-2';
//import './longStats.scss';

const state = {
  labels: [],
  datasets: [
    {
      label: 'Прогресс',
      borderColor: 'rgba(0,0,0,1)',
      backgroundColor: 'orange',
      borderWidth: 2,
      data: []
    }
  ]
}

export default class LongStats extends React.Component {
  constructor(props) {
    super(props);
    this.dataLabels = props.dataLabels;
    state.labels = this.dataLabels;
    state.datasets[0].data = props.totalNewWords;
    console.log(this.totalWords, props.totalNewWords);
  }

  render() {      
    return (
      <div className="graph">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Всего слов',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
 }
  
