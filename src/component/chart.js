import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const options = data => ({
  title: {
    text: "No of Publication"
  },
  chart: {
    type: "column"
  },
  series: [
    {
      data: data
    }
  ],
  dataLabels: {
    enable: true
  },
  xAxis: {
    type: "category"
  },
  tooltip: {
    pointFormat: "Most cited paper: <b>{point.y:.1f} </b>"
  }
});

export default class Chart extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      search: "",
      data: []
    };
  }

  updateSearch(event) {
    event.preventDefault();
    console.log("search string is " + this.state.search);
    fetch(
      `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${this.state.search} sort_cited= 2010&CITED asc&format=json`
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("data from api,=>", responseJson);
        var imagedata = [];
        responseJson.resultList.result.map(element => {
          imagedata.push(element);
        });
        console.log("data image is=>", imagedata);

        this.setState({
          data: imagedata,
          isLoading: false,
          isDataLoaded: false
        });
      });
  }

  updateText = event => {
    this.setState({ search: event.target.value });
    console.log("this is data", this.state.search);
    event.preventDefault();
  };
  renderPub() {
    var multiData = [];
    for (var i = 0; i < this.state.data.length; i++) {
      var countElement = 0;
      for (var j = 0; j < this.state.data.length; j++) {
        if (j < i && this.state.data[i].pubYear == this.state.data[j].pubYear) {
          break;
        }
        if (this.state.data[i].pubYear == this.state.data[j].pubYear) {
          countElement = countElement + 1;
        }

        if (j >= this.state.data.length - 1) {
          multiData.push([this.state.data[i].pubYear, countElement]);
        }
      }
    }
    return multiData.sort();
  }
  render() {
    const { search } = this.state;
    console.log("this is t=year", this.renderPub());
    const chartConfig = options(this.renderPub());
    return (
      <div>
        <div
          style={{
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 4,
            borderRadius: 10,
            backgroundColor: "#36bff5"
          }}
        >
          <form onSubmit={this.updateSearch}>
            <label>
              Search:
              <input
                type="text"
                value={search}
                onChange={this.updateText}
                placeholder="e.g. cat, dog, etc..."
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartConfig} />
      </div>
    );
  }
}
