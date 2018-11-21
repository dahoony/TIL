import React, { Component } from 'react'


class SearchBar extends Component {
  state={
    keyword: ''
  }

  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  onInputChange(event){
    console.log(event.target.value);
  }

  onInputClick(event){
    console.log('click');
  }

  afterUserInput(event){
    this.setState({keyword : event.target.value});
  }

  removeBadWord=(value)=>{
    const badWord=['fuck', 'motherfucker', 'them', 'shit'];
    this.setState({keyword :value}, ()=>{
      if(/.*fuck.*/i.test(this.state.keyword)){
        this.setState({keyword: this.state.keyword.replace(/fuck/i, '****')})
      }
    });
  }
  
  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onUserSubmit(this.state.keyword);
  }

  render() {
    return (
      <div className="ui segment container">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <label htmlFor="keyword">search</label>
            <input id="keyword" type="text"    //uncontrolled element
            onChange={e=>this.removeBadWord(e.target.value)}
            // value='hi'      //이렇게 있어도 웹에서 입력해도 hi만 있게되는데.. 이유가 다시 render되서 hi만 있게됨.
            value={this.state.keyword}   //<-이 상태가 되면 controlled element이다. input tag에 보여지는 값은 우리가 입력한 값이 아니고 state의 값이 보여지는 것이다.
            />
        </form>
      </div>
    )
  }
}


export default SearchBar