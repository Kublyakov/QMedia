import { Component } from 'react';

class QMedia  extends Component {

  state = {
    currentWidth: window.innerWidth
  };

  throttle(fn, threshhold, scope) {

    threshhold || (threshhold = 250);
    var last,
      deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date,
        args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  onResize = () => this.throttle(this.setState({currentWidth: window.innerWidth}), 200);

  componentDidMount() {
    window.addEventListener('resize', this.onResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    let {query, render} = this.props;
    let symbol = query[0];
    let width = this.state.currentWidth;
    let size = query.slice(1);
    switch (symbol) {
      case '<':
        if (width < size) {
          return render();
        }
        break;
      case '>': {
        if (width >= size) {
          return render();
        }
      }
    }
    return null;
  }
}

export default QMedia;
