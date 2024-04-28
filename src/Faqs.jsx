import React, { useState } from 'react'
import { question } from './data/Data'

const Faqs = () => {
  const[showans,Setshowans]=useState(question[0].id)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Frequently asked  Questions(Faqs)</h1>
      <div className="faqouter">
        {question.map((faqitems,i)=>{

          return(

            <div className="faqitems">
            <h1 onClick={()=>Setshowans(faqitems.id)}>{faqitems.question}</h1>
            <p className={showans===faqitems.id?'activeans':''}>{faqitems.answer}</p>
          </div>
          )
        })}
       
      </div>

      
    </div>
  )
}

export default Faqs
