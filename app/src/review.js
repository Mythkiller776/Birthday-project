import React,{useState,useEffect} from 'react'
import reviews from './data'

export default function Review() {
    // eslint-disable-next-line no-unused-vars
    const [people,setPeople]=useState([])
    
    useEffect(()=>{
     setPeople(reviews)
     console.log(people)
    },[people])
    return (
        <>
           <h2>Reviews of some random people</h2>
        {people.map(person=>{
            return <div key ={person.id}>
            <img src={person.image} alt="Random"></img>
            </div>
        })}
        </>
    )
}
