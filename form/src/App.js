import React,{useState} from "react";
import "./App.css";

export default function App() {
  const[text, setText] = useState('abc');
  const[age, setAge] = useState(24);
  const[nationality, setNationality] = useState('india');

  const submitValue = () => {
    const formDetails = {
      text:text,
      age:age,
      nationality:nationality
    }
    alert(formDetails.text +" "+ formDetails.age +" "+ formDetails.nationality);
    
  }
  
  return (
    <div className="Main">
      <h1>Form </h1>
      <input type="text" onChange={e => setText(e.target.value)}/> <br /><br />
      <input type="text" onChange={e => setAge(e.target.value)}/><br /><br />
      <select onChange={e => setNationality(e.target.value)}>
        <option>India</option>
        <option>china</option>
        <option>usa</option>
        <option>Aus</option>
        
      </select><br /><br />
      <button type="submit" onClick={submitValue}>Updated Values</button>
    </div>
  );
}
