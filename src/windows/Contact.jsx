import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <h2>Contact Me</h2>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact,"contact")

export default Contact