import React from 'react'

export default function Carousel() {
  return (
    <div style={{ position: 'relative' }}>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain', height: '500px' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300?burger" className="d-block w-100" style={{ filter: 'brightness(30%)', height: '500px', objectFit: 'cover' }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?pizza" className="d-block w-100" style={{ filter: 'brightness(30%)', height: '500px', objectFit: 'cover' }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?pasta" className="d-block w-100" style={{ filter: 'brightness(30%)', height: '500px', objectFit: 'cover' }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-caption" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
        <h1>Find your next meal</h1>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '400px' }} />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}
