import React from 'react'

export default function Bootstrap() {
  let data = [
    {id:1,name:"Product1",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img1.jpg"},
    {id:2,name:"Product2",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img2.jpg"},
    {id:3,name:"Product3",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img3.jpg"},
    {id:4,name:"Product4",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img4.jpg"},
    {id:5,name:"Product5",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img5.jpg"},
    {id:6,name:"Product6",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img6.jpg"},
    {id:7,name:"Product7",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img7.jpg"},
    {id:8,name:"Product8",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img8.jpg"},
    {id:9,name:"Product9",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img9.jpg"},
    {id:10,name:"Product10",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img10.jpg"},
    {id:11,name:"Product11",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img11.jpg"},
    {id:12,name:"Product12",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img12.jpg"},
    {id:13,name:"Product13",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img13.jpg"},
    {id:14,name:"Product14",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img14.jpg"}
  ]
  return (
    <>
    <nav className="navbar navbar-expand-lg background sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Dcard</a>
    <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Feature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kajal Tiwari
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Cart</a></li>
            <li><a className="dropdown-item" href="#">Checkout</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Layout</a></li>
          </ul>
        </li>
        <li className='nav-item'>
          <button type="button" className="nav-link text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
           Login
            </button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div id="carouselExampleIndicators" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 7"></button> 
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button> 
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/img1.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/img2.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/img3.jpg" height={500}  class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="/images/img4.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/img5.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/img6.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="/images/img7.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/img8.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/img9.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className="container-fluid my-3">
 <h5 className='background text-light text-center p-2'>Latest Products</h5>
 
 <div className="row">
 {
  data.map((item,index)=>{
    return <div key={index} className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
    <div className="card">
  <img src={item.pic} height={200} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text"><del className='text-danger'>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice} <sup>{item.discount}% Off</sup></p>
    <a href="#" class="btn btn-primary w-100 background">Add to Cart</a>
  </div>
</div>
    </div>
  })
 }
 </div>

 <div className="row">
  <div className="col-md-6">
    <img src="/images/img2.jpg" width={500} height={400} className='img-fluid' alt="" />
    </div>
  <div className="col-md-6">
    <h5 className='background text-light p-2 text-center'>Do You Have Any Query? Contact Us</h5>
    <form action="">
      <div className="mb-3">
        <input type="text" name='name' placeholder='Full Name' className='form-control border-3 border-secondary'/>
      </div>
      <div className="mb-3">
        <input type="text" name='email' placeholder='Email Address' className='form-control border-3 border-secondary'/>
      </div>
      <div className="mb-3">
        <input type="text" name='phone' placeholder='Phone Number' className='form-control border-3 border-secondary'/>
      </div>
      <div className="mb-3">
        <input type="text" name='subject' placeholder='Subject' className='form-control border-3 border-secondary'/>
      </div>
      <div className="mb-3">
       <textarea name="message" id="" rows={4} placeholder='Message' className='form-control border-3 border-secondary'></textarea>
      </div>
      <div className="mb-3">
        <button type="submit" className='btn btn-primary w-100 background'>Submit</button>
      </div>
    </form>
    </div>
 </div>
 </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login To Your Account</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form action="">
          <div className="mb-3">
            <input type="text" name='username' placeholder='Username or Email Address' className='form-control border-3 border-secondary'/>
          </div>
          <div className="mb-3">
            <input type="text" name='password' placeholder='Password' className='form-control border-3 border-secondary'/>
          </div>
          <div className="modal-footer">
      <button type="button" className="btn btn-primary">Login</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}


/* Css

text-align:left          text-start
text-align:right          text-end
text-align:justify          text-justify
text-align:center         text-center

display:block              d-block
display:inline              d-inline
display:none              d-none
display:inline-block              d-inline-block

display:flex                  d-flex
flex-direction:row             flex-row
flex-direction:row-reverse      flex-row-reverse
flex-direction:column           flex-column
flex-direction:column-reverse     flex-column-reverse

justify-content:space-around                 justify-content-around
justify-content:space-between                justify-content-between
justify-content:space-evenly                 justify-content-evenly
justify-content:flex-start                   justify-content-start
justify-content:flex-end                    justify-content-end
justify-content:center                     justify-content-center

padding:10px              p-1 p-2 p-3 p-4 p-5
padding-top:10px          pt-1 pt-2 pt3 pt-4 pt-5
padding-bottom:10px       pb-1 pb-2 pb-3...
padding-left:10px         ps-1 ps-2 ps-3...
padding-right:10px        pe-1 pe-2 pe-3..
padding:10px 0            py-1 ... ..   py-5
padding:0 10px            px-1....   ..px-5















*/