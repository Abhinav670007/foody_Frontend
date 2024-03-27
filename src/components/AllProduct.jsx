import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import Card from './Card'
import { useSelector } from 'react-redux'


function AllProduct({ heading }) {
  const productData = useSelector((state) => state.product.productList)

  //CATEGORY LIST
  const categoryList = [...new Set(productData.map(res => res.category))]

  //Filter functions
  // const [filterby, setFilterby] = useState("")
  const [datafilter, setDataFilter] = useState([])

  useEffect(() => {
    setDataFilter(productData)
  }, [productData])

  const handleFilter = (category) => {
    const filter = productData.filter(res => res.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }

  return (
    <section  className="mt-5 p-3">
      <h2 style={{ fontSize: "30px" }}>{heading}
      </h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {
          categoryList[0] && categoryList.slice(0, 7).map(res => {
            return (
              <FilterProduct category={res} onClick={() => handleFilter(res)} />
            )
          })
        }

      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {
          datafilter.map(res => {
            return (
              <Card
                key={res._id}
                id={res._id}
                image={res.image}
                name={res.name}
                category={res.category}
                price={res.price}
              />
            )
          })
        }
      </div>

    </section>
  )
}

export default AllProduct