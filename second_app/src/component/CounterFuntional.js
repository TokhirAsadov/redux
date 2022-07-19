import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { inc, dec, random } from "../redux/actions";


function CounterFunctional() { // connect(mapStateToProps,actions)(Counter) <- props lar connect function dan kelyapdi
  const counter = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(inc())} className="btn btn-primary">Increment +</button>
      <button onClick={()=>dispatch(dec())} className="btn btn-danger">Decrement -</button>
      <button onClick={()=>dispatch(random())} className="btn btn-info">Random#</button>
    </div>
  );
}

export default CounterFunctional;


// 1. create reducer
// 2. const store = createStore(reducer)
// 3. actions


// const mapStateToProps = (state) => {
//   return {
//     counter: state.value
//   }
// }
//
// export default connect(mapStateToProps,actions)(CounterFunctional);
