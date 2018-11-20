import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () =>{
// window.navigator.geolocation.getCurrentPosition(
//     position =>console.log(position),
//     error => console.error(error)
// )
// return (
//     <div>
//         <SeasonDisplay/>
//     </div>
// );
// }

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // state 초기화4
  //     this.state = {
  //       lat: null
  //     };
  //   }
  state = {
    lat: null,
    error: ""
  };

  renderContent() {
    if (!this.state.error && this.state.lat) {
      return (
        <SeasonDisplay latitude={this.state.lat} />
        //   <div>
        //       <p>위도 (Latitude) : {this.state.lat}</p>
        //       <p>Error : {this.state.error}</p>
        //     {/* <SeasonDisplay /> */}
        //   </div>
      );
    }
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }
    return <Spinner message={`Loading...`} />;
  }

  render() {
      return (
          <div style={{border:'solid red 10px'}}>
              {this.renderContent()};
          </div>
      )
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ error: error.message });
      }
    );
  }
  //   componentDidUpdate() {
  //     console.log("컴포넌트 update & re-rendered");
  //   }
}

ReactDOM.render(<App />, document.querySelector("#root"));
