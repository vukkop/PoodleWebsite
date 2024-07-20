import React from 'react'
import "./Main.css"
import poodlePhoto from "../assets/images/image10.JPEG"
import PuppyModal from '../components/modals/PuppyModal'
import OurDogsModal from '../components/modals/OurDogsModal'
import ContactForm from '../components/ContactForm'

const Main = () => {
  return (
    <div id='Home' className='mt-5'>
      <div className="row row-1 align-items-center">
        <div className="col-6">
          <h1 className='display-1 mt-5 heading'>
            <strong>
              Mini Poodles
            </strong>
          </h1>
          <h3 className='heading'>The Perfect Companions for Every Family</h3>
          <a href='#Puppies' className='btn btn-primary btn-lg mt-4 ms-2 shadow'>
            <strong>
              AVAILABLE PUPPIES <br /> NOW!
            </strong>
          </a>
        </div>
      </div>

      <div className='container'>
        <div className="row mt-4">
          <h2 className='mb-4'>Why Choose a Poodle?</h2>
          <div className=" col-md-7 order-2 order-md-1">
            <h4>Are you someone who appreciates the finer things in life but also desires a loyal companion for life's adventures? <br /> Look no further than the poodle!</h4>
            <p>
              I developed a deep affection for poodles because they embody versatility in the canine world - much like the Swiss Army Knife. Whether it's keeping you company at your workspace or joining you for an exhilarating hike or a leisurely city stroll, poodles do it all with flair and adaptability. Picture this: a day filled with paddleboarding or exploring an art festival, and your poodle is equally content to snuggle with you on the couch in the evening. Above all, the true joy of a poodle comes from being an integral part of your life's center, bringing happiness and companionship wherever they go.
            </p>
            <a href='#Contact' className='btn btn-primary btn-lg'>Contact Us</a>
          </div>
          <div className="col-sm-6 offset offset-sm-3 offset-md-0 col-md-5 order-1">
            <img className='rounded w-100 mb-4' src={poodlePhoto} alt="" />
          </div>
        </div>
      </div>

      <div id='AboutUs' className="row mt-4 text-center">
        <h2 className='mb-4'>OUR BREEDING PHYLOSOPHY</h2>
        <div className="col-lg-4 col-md-6">
          <div className="card text-white bg-primary mb-4 p-3 b-p-card" >
            <h4>Balancing Looks and Health</h4>
            <p>In our pursuit of exceptional companion poodles, we place a strong emphasis on achieving a harmonious blend of both aesthetics and well-being. We firmly believe that a poodle's physical structure plays a pivotal role in its ability to lead an active and healthy lifestyle.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card text-white bg-primary mb-4 p-3 b-p-card" >
            <h4>Intelligent Companions</h4>
            <p>At our breeding facility, we take pride in nurturing not just the physical attributes of our poodle puppies but also their exceptional intelligence. Our commitment to producing well-rounded companions extends to their cognitive abilities, setting the stage for success in various roles.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card text-white bg-primary mb-4 p-3 b-p-card" >
            <h4>Puppy Upbringing</h4>
            <p>We recognize the critical importance of early socialization in shaping the development of our puppies. Through carefully designed socialization curriculums, we lay the groundwork for their journey toward becoming well-adjusted adults and fostering meaningful connections with humans.</p>
          </div>
        </div>
      </div>

      <div id='Puppies' className='container mt-4 mb-5'>
        <div className="row text-center">

          <h2 className='mb-4'>AVAILABLE PUPPIES</h2>

          <div className="col-xl-3 col-md-6">
            <div className="d-flex">
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.1.jpeg')} alt="Puppie Girl 1" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.2.jpeg')} alt="Puppie Girl 1" />
            </div>
            <h4>Girl #1</h4>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="d-flex">
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.3.jpeg')} alt="Puppie Boy 2" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.4.jpeg')} alt="Puppie Boy 2" />
            </div>
            <h4>Boy #2</h4>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="d-flex">
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.5.jpeg')} alt="Puppie Boy 3" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.6.jpeg')} alt="Puppie Boy 3" />
            </div>
            <h4>Boy #3</h4>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="d-flex">
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.7.jpeg')} alt="Puppie Boy 4" />
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/litter2/image1.8.jpeg')} alt="Puppie Boy 4" />
            </div>
            <h4>Boy #4</h4>
          </div>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <h2 className='mb-4'>DISCOVER OUR DOGS</h2>
        <div className="col puppies-col">
          <div data-bs-toggle="modal" data-bs-target="#PuppyModal" className='overlay d-flex justify-content-center align-items-center'>
            <h3 className='heading '>PUPPIES GALLERY</h3>
          </div>
        </div>

        <div data-bs-toggle="modal" data-bs-target="#OurDogsModal" className="col our-dogs-col">
          <div className='overlay d-flex justify-content-center align-items-center'>
            <h3 className='heading'>OUR DOGS GALLERY</h3>
          </div>
        </div>
      </div>
      <PuppyModal></PuppyModal>
      <OurDogsModal></OurDogsModal>

      <div className='container mt-4 mb-5'>
        <div className="row text-center">
          <h2 className='mb-4'>PUPPIES FOUND HAPPY HOME</h2>
          <div className="col-lg-4">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image25.JPEG')} alt="Puppie Brown Nose" />
              <div className='rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              </div>
            </div>
            <h4>Abbie</h4>
          </div>
          <div className="col-lg-4">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image27.JPEG')} alt="Puppie Brown Nose" />
              <div className='rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              </div>
            </div>
            <h4>Keirah</h4>
          </div>
          <div className="col-lg-4">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image11.JPEG')} alt="Puppie Brown Nose" />
              <div className='rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
                {/* <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5> */}
              </div>
            </div>
            <h4>Brown Nose</h4>
          </div>
        </div>
      </div>


      <div id='Contact' className="container mb-5 mt-4">
        <ContactForm></ContactForm>
      </div>

      <footer className='row text-center align-items-center bg-primary'>
        <h6>
          <small>
            <a target="_blank" rel="noopener noreferrer" className='link-hover' href="https://vukkop.github.io/Portfolio/">Created by Vuk</a>
          </small>
        </h6>
      </footer>

    </div >
  )
}

export default Main
