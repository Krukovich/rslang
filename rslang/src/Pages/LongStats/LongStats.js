import React from 'react';
import {Line} from 'react-chartjs-2';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

import './longStats.scss';

export default class LongStats extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      labels: props.dataLabels,
      datasets: [
        {
          label: 'Прогресс',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'orange',
          borderWidth: 2,
          data: props.totalNewWords,
        }
      ],
      clicked: false,
    }
  }

  asideToggle = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const data = {
      labels: this.state.labels,
      datasets: this.state.datasets,
    }

    return (
      <React.Fragment>
        <Sidebar clicked={ this.state.clicked }/>
        <Header asideToggle={ this.asideToggle } clicked={ this.state.clicked }/>
        <div className="graph pt-5">
          <Line
            data={data}
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
      </React.Fragment>
    );
  }
 }
  
