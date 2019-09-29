import React from 'react';
import { render } from 'react-dom';
// import Highcharts from 'highcharts';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
const options = {
    title: {
      text: 'My stock chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      }
    ]
  };

  const App = () => (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
  
  render(<App />, document.getElementById('root'));

// import React from 'react';
// import Highcharts from 'highcharts';
// import { render } from 'react-dom';
// import {
//   HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, SplineSeries
// } from 'react-jsx-highcharts';
// // We need to study Highcharts docs for cofiguration in JSON formate..
// // click on this link (Ctrl +  left click)  https://api.highcharts.com/highcharts/ 
//   const plotOptions = {
//     series: {  
//       animation:{
//         duration: 5000
//       }
//     }
//   };
//   const categories= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//  const labels= {
//     style: {
//         fontSize:'20px'
//     }
//   }
// const marker= {
//   symbol: 'circle',
// }
// var tooltip = {
//   valueSuffix: '\xB0C'
// }
// const App = () => (
//   <div className="app" style={{marginLeft: '200px', marginRight: '200px', fontSize:'20px' }}>
//       <HighchartsChart 
//         plotOptions={plotOptions} 
//         tooltip={tooltip} 
//         marginLeft={300}
//       >
//       <Chart height={500}/>
//       <Title 
//         align='center'>
//         Monthly Average Temperature
//       </Title>
//       <Subtitle>Source: WorldClimate.com</Subtitle>
//       <XAxis categories={categories} lable = {labels}>
//         <XAxis.Title >Time</XAxis.Title>
//       </XAxis>
//       <Legend 
//         layout="horizontal" 
//         align="right" 
//         verticalAlign='top' 
//         borderWidth={0}
//         symbolRadius={0} 
//         symbolWidth={5}
//       />
//       <YAxis>
//         <YAxis.Title >{'Temperature (\xB0C)'}</YAxis.Title>
//         <SplineSeries 
//           name= 'Tokyo'
//           data= {[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]}
//           marker= {marker}
//         />
//         <SplineSeries 
//           name= 'New York'
//           data= {[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]}
//           marker= {marker}
//         />
//         <SplineSeries 
//           name="Berlin" 
//           data={[-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]} 
//           marker={marker}
//         />
//         <SplineSeries 
//           name= 'London'
//           data= {[3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]}
//           marker= {marker}
//         />
//       </YAxis>
//     </HighchartsChart>
//   </div>
// );
// export default App;