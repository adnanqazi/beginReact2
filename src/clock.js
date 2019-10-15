import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentTime: (new Date()).toLocaleString()}
    setInterval(()=>{
      console.log('Updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }
  render() {

    return <div>{this.state.currentTime}</div>
  }
}

export default Clock;
