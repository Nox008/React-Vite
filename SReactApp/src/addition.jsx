import './css/App.css'
import { useState } from 'react'

function Add(){

   /*  function fullname(){
        let fname = document.getElementById('fname').value 
        let lname = document.getElementById('lname').value 
        alert(`Hello ${fname} ${lname}`)
    } */
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)
    return(
    <>
    <div id='container'>
        <h2>Add Two Numbers</h2>
    <input type="text" id="fname" placeholder="Enter First Number" 
    onChange={
        (e) => {
            setNum1(e.target.value)
        }
    } /><br />
    <input type="text" id="lname" placeholder="Enter Second Number"
    onChange={ 
        (e)=>{
            setNum2(e.target.value)
        }
    } /><br />
    <button /* onClick={fullname} */ onClick={
        () =>{
            let sum;
            sum = Number(num1)+Number(num2)
            alert(`The sum is ${sum}`)
        }
    }>Submit</button>
    </div>
    </>
    )
}
export default Add