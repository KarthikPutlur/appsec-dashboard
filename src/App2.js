import React, {Component} from 'react';

import {Chart} from "react-google-charts";


class App2  extends Component {
  render() {
    return (
      <div className="App2">
       
       {
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            
            options={
              // Chart options
               {
                annotations: {
                  textStyle: {
                  fontName: 'Times-Roman',
                  fontSize: 28,
                  
                }
                },
                tooltip:{
                  textstyle:{
                    
                    italic:true
                  }
                },
                hAxis: {
                  textStyle : {
                    fontSize: 27 
                }
                },
                vAxis: {textStyle : {
                  fontSize: 27 } },
                legend: "none"
              }
            }
            
           data={this.props.data}
          />
       }
      </div>
    );
  }
}

export default App2;