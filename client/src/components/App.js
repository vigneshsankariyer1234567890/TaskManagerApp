import React, { PropTypes} from 'react';
import Navbar from './commonstuff/Navbar';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <Navbar />
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
