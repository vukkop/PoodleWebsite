import React from 'react'
import "./Modal.css"

const OurDogsModal = () => {
  return (
    <div className="modal fade" id="OurDogsModal" tabIndex="-1" aria-labelledby="OurDogsModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="OurDogsModalLabel">Our Dogs</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div id="carouselOurDogsCaptions" className="carousel slide" data-bs-theme="dark">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={require('../../assets/images/image15.JPEG')} className="d-block rounded mx-auto img-fluid" alt="puppy" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='glow'>First slide label</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image16.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='glow'>Second slide label</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image17.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Third slide label</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image18.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Third slide label</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image19.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Third slide label</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image20.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Third slide label</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={require('../../assets/images/image21.JPEG')} className="d-block rounded mx-auto img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block" >
                    <h5 className='glow'>Third slide label</h5>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselOurDogsCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselOurDogsCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurDogsModal
