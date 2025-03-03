import React from 'react'

const PuppiesFoundHappyHome = () => {
  return (
    <div className='container mt-4 mb-5'>
      <div className="row text-center">
        <h2 className='mb-4'>PUPPIES FOUND HAPPY HOME</h2>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/Gazoo.JPG')} alt="Puppie Brown Nose" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
            </div>
          </div>
          <h4>Gazoo</h4>
        </div>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image25.JPEG')} alt="Puppie Brown Nose" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
            </div>
          </div>
          <h4>Abbie</h4>
        </div>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image27.JPEG')} alt="Puppie Brown Nose" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
            </div>
          </div>
          <h4>Keirah</h4>
        </div>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image11.JPEG')} alt="Puppie Brown Nose" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              {/* <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5> */}
            </div>
          </div>
          <h4>Fred</h4>
        </div>

        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.1.jpeg')} alt="Puppie Girl 1" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              {/* <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5> */}
            </div>
          </div>
          <h4>Lily</h4>
        </div>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.3.jpeg')} alt="Puppie Boy 2" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              {/* <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5> */}
            </div>
          </div>
          <h4>Bora</h4>
        </div>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.5.jpeg')} alt="Puppie Boy 3" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              {/* <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5> */}
            </div>
          </div>
          <h4>Teddy</h4>
        </div>
        <div className="col-lg-3">
          <div className='image mx-auto'>
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.7.jpeg')} alt="Puppie Boy 4" />
            <div className='rehomed'>
              <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              {/* <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5> */}
            </div>
          </div>
          <h4>Fudge</h4>
        </div>


      </div>
    </div>

  )
}

export default PuppiesFoundHappyHome
