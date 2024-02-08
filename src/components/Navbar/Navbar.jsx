import React from 'react'
import { ItemNav } from '../ItemNav/ItemNav'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNav content = 'Inicio' />
        <ItemNav content = 'Acerca de mi' />
        <ItemNav content = 'Proyectos' />
        <ItemNav content = 'Experiencia' />
      </ul>
    </nav>
  )
}
