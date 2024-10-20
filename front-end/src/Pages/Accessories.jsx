import React from 'react'
import { useShopContext } from '../Context/Context'

const Accessories = () => {
  const { search, openSearchBox } = useShopContext()
  return (
    <>
      <span>{search}</span>
      <span>{openSearchBox}</span>
    </>
  )
}

export default Accessories