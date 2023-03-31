import React from 'react'
import { useTodos } from '../../store'

const tomorrow = () => {
  const cifri = useTodos(state => state.massiv)
  console.log(cifri);


  return (
    <div>tomorrow</div>
  )
}

export default tomorrow