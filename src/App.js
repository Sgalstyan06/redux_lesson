import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {iditName, loadUser} from "./redux/reducers/userSlice";
import { useEffect } from "react";

function App() {
  const name = useSelector((state) => {
    
    return state.currentUser.name;
  });

  const friend = useSelector((state) =>{
    return state.friends
  })

  const proffession = useSelector(state=>{
    
    return state.proffession});
  
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser())
  },[])
  return (
    <div className="App">
      <h2>{name} </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          dispatch(iditName(e.target.value));
        }}
      />
      {friend.map((item, index) =>{
        return <div key = {index}>{item.name}</div>
      })}
      <div>{proffession}</div>
      <button onClick={()=>{
        dispatch({
          type: "edit-pofession",
          payload: "senyor developer"
        })
      }}>edit proffession</button>
    </div>
  );
}

export default App;
