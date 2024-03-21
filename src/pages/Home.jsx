import React, { useRef } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import AllProduct from '../components/AllProduct'
import banner1 from '../assest/banner-01.jpg'
import banner2 from '../assest/banner-02.jpg'
import banner3 from '../assest/banner-03.jpg'
import Carousel from 'react-bootstrap/Carousel';
import blog1 from '../assest/blog-img-01.jpg'
import blog2 from '../assest/blog-img-02.jpg'
import blog3 from '../assest/blog-img.jpg'
import about from '../assest/add-img-01.jpg'
import about1 from '../assest/add-img-02.jpg'
import '../pages/home.css'




function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000}
  
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
    <div className='bg-slate-200  pt-5'>
      {/* <Row className=''>
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
       
      </Row> */}

<Carousel>
      <Carousel.Item className=''>
        <img src={banner3} alt="" />
        <Carousel.Caption className='pb-5 h-96'>
          <h1 className='banner text-6xl font-extrabold my-8 text-black'>Welcome To Fresh Shop</h1>
          <p className='text-black'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button onClick={()=>window.scrollTo({top:"2300",behavior:"smooth"})} className="btn btn-dander bg-danger mt-4">
              Order Now
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner2} alt="" />
        <Carousel.Caption className='pb-5 h-96'>
        <h1 className='banner text-6xl font-extrabold my-8 text-yellow-200'>Welcome To Fresh Shop</h1>
          <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button onClick={()=>window.scrollTo({top:"2300",behavior:"smooth"})} className="btn btn-dander bg-danger mt-4">
              Order Now
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner1} alt="" />
        <Carousel.Caption className='pb-5 h-96'>
        <h1 className='banner text-6xl font-extrabold my-8 text-bla'>Welcome To Fresh Shop</h1>
          <p className='text-black'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button onClick={()=>window.scrollTo({top:"2300",behavior:"smooth"})} className="btn btn-dander bg-danger mt-4">
              Order Now
            </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <div className='mt-5'>
        <p className='blog text-3xl text-center'>latest blog</p>
        <p className='blog mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
      </div>

    <div className='mt-5'>
      <Row className='justify-center m-auto gap-3'>
        <div className="col-4 w-96 h-96 border bg-slate-300 p-2 shadow " style={{height:"32rem"}}>
          <img src={blog1} alt="No image" className='w-full '/>
          <p className='text-center font-bold mt-2'>Fusce in augue non nisi fringilla</p>
          <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
        </div>
        <div className="col-6 w-96 bg-slate-300 border p-2 shadow">
        <img src={blog2} alt="No image" className='w-full'/>
        <p className='text-center font-bold mt-2'>Fusce in augue non nisi fringilla</p>
          <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
        </div>
        <div className="col-4 w-96 bg-slate-300 border p-2 shadow">
        <img src={blog3} alt="No image" className='w-full'/>
        <p className='text-center font-bold mt-2'>Fusce in augue non nisi fringilla</p>
          <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
        </div>
      </Row>
    </div>


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

      <div className='flex gap-4 mt-14 justify-center bg-slate-300 shadow p-5'>
        <div className="">
          <img src={about} alt="" />
        </div>
        <div className="">
          <img src={about1} alt="" />
        </div>
      </div>

    <section id='medhu' className='text-center'>  <AllProduct heading={"Your products"} /></section>

    {/* Blog */}

   

    </div>
  )
}

export default Home