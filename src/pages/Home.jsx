import React, { useRef } from 'react'
import { Row,Col } from 'react-bootstrap'
import HomeCard from '../components/HomeCard'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import AllProduct from '../components/AllProduct'

function Home() {
  
  const productData = useSelector((state) => state.product.productList)
  const homeProductCartList = productData.slice(7, 11)
  const homeListVegetables = productData.filter(res => res.category == "vegetable", [])

  const loading = new Array(4).fill(null)

  //Slidind the card
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className='bg-gradient-to-r from-zinc-400 to-stone-700  pt-5'>
      <Row className=''>
        <Col sm={12} md={6} className="mt-3">
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fresh Products in{" "}
            <span className="text-red-600 text-">Your FingerTips</span>
          </h2>
          <p className="py-3 text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          
            <button onClick={()=>window.scrollTo({top:"700",behavior:"smooth"})} className="btn btn-dander bg-danger mt-4">
              Order Now
            </button>
        
        </Col>
        <Col sm={12} md={6}>
        <div className="flex flex-wrap  pt-3 pe-3 justify-between">
          {homeProductCartList[0] ?
            homeProductCartList.map(res => {
              return (
                <HomeCard
                  key={res._id}
                  image={res.image}
                  name={res.name}
                  price={res.price}
                  category={res.category} />
              )
            })
            : loading.map((res, index) => {
              return (
                <HomeCard
                  key={index}
                  loading={"loading..."}
                />
              )
            })
          }
          </div>
          </Col>
       
      </Row>
      <div className="">
        <div className='flex w-full items-center mt-3'>
          <h2 style={{ fontSize: "30px" }}>Freshh vegetables
          </h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><i class="fa-solid fa-chevron-left"></i></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
        <div className="flex justify-stretch  overflow-scroll scrollbar-none scroll-smooth transition-all gap-1 w-full" ref={slideProductRef}>
          {homeListVegetables[0]?
            homeListVegetables.map(res => {
              return (
                <Card
                  key={res._id}
                  id={res._id}
                  name={res.name}
                  category={res.category}
                  price={res.price}
                  image={res.image}
                />
              )
            }):
            loading.map((res,index) => (
              <Card loading="Loading..." key={index+"Loading"} />
            ))

          }

        </div>
      </div >

    <section id='medhu'>  <AllProduct heading={"Your products"} /></section>

    </div>
  )
}

export default Home