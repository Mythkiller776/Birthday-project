import React,{useState,useEffect} from "react"
import data from "./data"

const Birthday = ()=>{
 const [people,setPeople] = useState(data);
console.log(data)
return(
<>

<h1>Birthday Reminders!!!</h1>
<div className="container">
    <h1>
        5 Birthdays
    </h1>
{people.map(person=>{
    return(
    <>
     <section>
       <img src ={person.image}></img>
       <article>
       <p>{person.name}</p>
       <p>{person.age} Years</p>
       </article>
   </section>
    </>
    )
})}

   <section>
       <img src = "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"></img>
       <article>
       <p>kate</p>
       <p>50years</p>
       </article>
   </section>
</div>

</>
)
}

export default Birthday;