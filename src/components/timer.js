
    var MAX = 30;
    var MIN = 5;

    var randomAmountOfSeconds = function(){
      return Math.floor( Math.random() * ( MAX - MIN + 1) + MIN )
    }

    var randomColor = function(){
      return '#' + ( Math.random() * 0xFFFFFF << 0 ).toString(16);
    }

    module.exports =class Timer extends  React.component {
      //displayName: 'timer',

      getState: function(){
        return { 
          seconds: randomAmountOfSeconds(),
          color: randomColor()
        }
      },

      getInitialState: function(){
        return this.getState();
      },

      handleOnComplete: function(){
        this.setState(this.getState());
      },
      render: function(){
        return (
          React.createElement(ReactCountdownClock, {
            seconds: this.state.seconds,
            color: this.state.color,
            alpha: 0.9,
            onComplete: this.handleOnComplete 
          })
        )
      }
    }

    ReactDOM.render(
      React.createElement(Timer, null),
      document.getElementById('countdown')
    )
  