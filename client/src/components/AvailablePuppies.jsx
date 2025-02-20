import React from 'react'

const AvailablePuppies = () => {
  return (
    <div id='Puppies' className='container mt-4 mb-5'>
      <div className="row text-center">
        <div className="col-3"></div>
        <div className="col-6">
          <h2 className=''>AVAILABLE PUPPIES</h2>
          <h3>ON FEBRUARY, 21.</h3>
        </div>
        <div className="col-lg-3 col-md-12 mb-2">
          <h2 className='' ><span class="badge text-bg-success p-3">Genetically Tested</span></h2>
        </div>


        <div className="row text-center mt-3 mb-3">
          <div className="col-12 col-sm-6 col-md-3 mt-3 mb-3">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/puppy2.JPG')} alt="Puppie Boy 4" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 mb-3">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/puppy3.JPG')} alt="Puppie Boy 4" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 mb-3">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/puppy4.JPG')} alt="Puppie Boy 4" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 mb-3">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/puppy5.JPG')} alt="Puppie Boy 4" />
            </div>
          </div>
        </div>

        <div className="row text-center mt-3 mb-3">
          <div className="col-sm-2"></div>
          <div className="col-6 col-sm-4">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/allPuppies.JPG')} alt="Puppie Boy 4" />
            </div>
          </div>

          <div className="col-6 col-sm-4">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter3/img-2.jpeg')} alt="Puppie Boy 4" />
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>


        <div className="col-12">
          <h3> 2 Boys and 2 Girls available.</h3>
          <h3> <a href="#Contact">Contact us to reserve your puppy.</a></h3>
        </div>

        {/* <div className="col-xl-3 col-md-6">
          <div className="d-flex justify-content-center">
            <div className='image d-flex justify-content-around w-100'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.1.jpeg')} alt="Puppie Girl 1" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.2.jpeg')} alt="Puppie Girl 1" />
              <div className='just-rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5>
              </div>
            </div>
          </div>
          <h4>Lily</h4>
        </div>


        <div className="col-xl-3 col-md-6">
          <div className="d-flex justify-content-center">
            <div className='image d-flex justify-content-around w-100'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.3.jpeg')} alt="Puppie Boy 2" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.4.jpeg')} alt="Puppie Boy 2" />
              <div className='just-rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5>
              </div>
            </div>
          </div>
          <h4>Bora</h4>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="d-flex justify-content-center">
            <div className='image d-flex justify-content-around w-100'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.5.jpeg')} alt="Puppie Boy 3" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.6.jpeg')} alt="Puppie Boy 3" />
              <div className='just-rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5>
              </div>
            </div>
          </div>
          <h4>Teddy</h4>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="d-flex justify-content-center">
            <div className='image d-flex justify-content-around w-100'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.7.jpeg')} alt="Puppie Boy 4" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.8.jpeg')} alt="Puppie Boy 4" />
              <div className='just-rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5>
              </div>
            </div>
          </div>
          <h4>Fudge</h4>
        </div> */}
      </div>
    </div>
  )
}

export default AvailablePuppies
