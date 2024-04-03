import React from 'react';




const FormWithOutYuP = () => {
    return (
            <form className='form'>
                  <label>FirstName:</label>
                <input
                  type= "text"
                  name= "firstname"
                  placeholder="Enter the first name"/>
                   <button type='submit'>Submit</button>
            </form>
    )
}


export default FormWithOutYup;