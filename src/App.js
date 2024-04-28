import "./App.css";

// import { Question } from "./data/Data";
import {useState} from 'react'
import Faqs from "./Faqs";



function App() {
  // let [showans,setShowans]=useState(Question[0].id)

  return (
    <div className="App">
        <Faqs />
      
      {/* <div className="faqcontainer">
        {Question.map((faqitems,i)=>{
          return(
            <div className="faqitembox">
            <h2 onClick={()=>setShowans(faqitems.id)}>{faqitems.question}</h2>
            <p className={showans==faqitems.id ? 'showanswer':''}>
              {faqitems.answer}
            </p>
          </div>
          )
        })}
       
      </div> */}
    </div>
  );
}

export default App;
