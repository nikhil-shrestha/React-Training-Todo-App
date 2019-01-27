import React from 'react'

const todoList = ({list}) => {
    return(
        <div>
            {
                list.map(({text, id})=> <div key={id}>{text}</div>)
            }
        </div>
    )
}

export default todoList;