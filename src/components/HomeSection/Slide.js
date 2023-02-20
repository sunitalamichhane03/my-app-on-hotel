import React from 'react'

const Slide = () => {
  return (
    <>
      <section className='slide-form'>
        <div className='container'>
            <h2>Enjoy Your Holiday</h2>
            <span>Search and Book Hotel</span>
            <form action=''>
                <input type='text' placeholder='Search City' name='' id=''/>
                <div className='flex_space'>
                    <input type='date' placeholder = 'Check In'name='' id=''/>
                    <input type='date' placeholder = 'Check Out'name='' id=''/>
                </div>
              
            </form>
            </div>
      </section>
    </>
  )
}

export default Slide
