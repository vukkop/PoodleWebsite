import React from 'react'
import "./Modal.css"

const PuppyModal = () => {



  return (
    <div className="modal fade" id="PuppyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Puppies Gallery</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div id="carouselPuppyCaptions" className="carousel slide d-flex align-items-center justify-content-center" data-bs-theme="dark">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={require('../../assets/images/image4.JPEG')} className="d-block rounded mx-auto img-fluid" alt="puppy" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image5.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image6.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Brown Nose</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image7.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image8.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image9.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image10.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image11.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Brown Nose</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image12.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Brundo</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image13.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Girl</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image2.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Abuk's Puppies</h5>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselPuppyCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPuppyCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer pb-0">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default PuppyModal
