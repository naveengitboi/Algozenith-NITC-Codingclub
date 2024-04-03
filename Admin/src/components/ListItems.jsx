import React from 'react'

function ListItems() {
  return (
      <ul className="listContainer">
              <li className='listHeader'>
                 
                  <p className='listHeading'>1</p>
                   <p className='listHeading questionName'>
                    Question Name
                  </p>
                  <p className='listHeading'>Posted At</p>
                  <p className='listHeading'>GFG</p>

              
                      <div className="actionsBtn">
                        <button className='orange'>Update</button>
                      </div>
                      <div className="actionsBtn">
                        <button className='red'>Delete</button>
                      </div>
              
              </li>
        </ul>
  )
}

export default ListItems