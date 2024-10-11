import React from 'react'

const MainContainer = ({title,overview, id}) => {




  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>{id}</p>
    </div>
  )
}

export default MainContainer
