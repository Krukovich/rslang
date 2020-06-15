import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['1', '2', '3',
           '4', '5', '6', '7', '8', '9', '10'],
  datasets: [
    {
      label: 'Progress',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [0, 10, 15, 20, 30, 40, 55, 65, 70, 75]
    }
  ]
}

export default class LongStats extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'All words for the period',
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