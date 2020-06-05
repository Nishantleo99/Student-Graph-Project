/*
Author: Nishant Kumar
Description: In this file, a bar chart has been created using the chart.js library for react : "react-chartjs-2". The data is 
             being fetched using axios. The bar chart is interactive. It is then exported to App.js file to display it.
*/

import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


export default class BarChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state ={
          Data: {}
       }
  }

  componentDidMount() {
      axios.get('/api')
      .then(res => {
        const markscore = res.data;
        let score = [];  
        markscore.forEach(element => {
            score.push(element.physics);
            score.push(element.chemistry);
            score.push(element.maths);
            score.push(element.biology);
            score.push(element.english);
        });

            
        //console.log(cscore[i]);
    
            
        this.setState({
            
            Data: {
                labels: ["Physics","Chemistry","Biology","Maths","English"],
                datasets:[
                    {
                        label: 'Student Marks',
                        data: score,
                        backgroundColor:[
                        'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)'
                        ]
                    }
                ]
            }
        });

      })
  }

   
  
  render()
   {

    var chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 10
                }
            }]
        },
    };
      return(
         <div>
            <Bar
            data = {this.state.Data}
            options = {chartOptions}/>
         </div>
      )
   }
}