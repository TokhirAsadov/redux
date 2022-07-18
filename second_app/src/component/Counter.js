import React from 'react';
import {connect} from "react-redux";
import * as actions from "../redux/actions";
import {bindActionCreators} from "redux";

function Counter({ counter, inc, dec, random }) {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc} className="btn btn-primary">Increment +</button>
      <button onClick={dec} className="btn btn-danger">Decrement -</button>
      <button onClick={random} className="btn btn-info">Random#</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.value
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions,dispatch);
//   // const {inc,dec,random} = bindActionCreators(actions,dispatch);
//   // return {
//   //   inc,
//   //   dec,
//   //   random
//   // }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

export default connect(mapStateToProps,actions)(Counter);