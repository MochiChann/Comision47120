import React from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        Kushiro
        <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Kushiro</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Género</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Orden Alfabético</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Película de la Semana</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

    </div>
  )
}


export default NavBar

