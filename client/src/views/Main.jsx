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
          <h3 className='heading'>Ultimate companion for all families</h3>
          <a href='#Puppies' className='btn btn-primary btn-lg mt-4 ms-2 shadow'>
            <strong>
              AVAILABLE PUPPIES <br /> NOW!
            </strong>
          </a>
        </div>
      </div>

      <div className='container'>
        <div className="row mt-4">

          <h2 className='mb-4'>WHY POODLE?</h2>
          <div className=" col-md-7 order-2 order-md-1">
            <h4>Do you value creature comforts but yearn for an adventure companion? The poodle is for you!</h4>
            <p>
              I fell in love with poodles because they are like Swiss Army Knives of the dog world! They can do it all; in style and can fit anywhere. They are happy to spend the day at your feet while you work and jump to action for a hike or city stroll. After a day of paddleboarding or shopping at an art festival, the poodle is happy to snuggle with you on the couch. Most important, being with you, in the center of your life, makes a poodle happy
            </p>
            <a href='#Contact' className='btn btn-primary btn-lg'>Contact Us</a>

          </div>
          <div className="col-sm-6 offset offset-sm-3 offset-md-0 col-md-5 order-1">
            <img className='rounded w-100 mb-4' src={poodlePhoto} alt="" />
          </div>
        </div>
      </div>

      <div id='AboutUs' className="row mt-4 text-center">
        <h2 className='mb-4'>OUR BREEDING PRINCIPLES</h2>
        <div className="col-lg-4 col-md-6">
          <div className="card text-white bg-primary mb-4 p-3 b-p-card" >
            <h4>Looks and Health</h4>
            <p>The companion poodle must have a balanced and sound body structure to remain active and healthy. We show our parents in UKC and test through OFA and genetic testing to produce healthy</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card text-white bg-primary mb-4 p-3 b-p-card" >
            <h4>Brains</h4>
            <p>Our puppies succeed as easily trained everyday companions to their family, medical alert service dogs, dog therapy, and various sports - Obedience, Rally-O, Nosewrok, Barnhunt, and Fly Ball.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card text-white bg-primary mb-4 p-3 b-p-card" >
            <h4>Upbringing</h4>
            <p>Puppies raised with early socialization curriculums are provided with the foundation to become well-adjusted adults and influence puppies' communication with humans.</p>
          </div>
        </div>
      </div>

      <div id='' className='container mt-4 mb-5'>
        <div className="row text-center">
          <h2 className='mb-4'>PUPPIES FOUND HAPPY HOME</h2>
          <div className="col-lg-6">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image25.JPEG')} alt="Puppie Brown Nose" />
              <div className='rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              </div>
            </div>
            <h4>Abbie</h4>
          </div>
          <div className="col-lg-6">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image27.JPEG')} alt="Puppie Brown Nose" />
              <div className='rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Rehomed</h5>
              </div>
            </div>
            <h4>Keirah</h4>
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




      <div id='Puppies' className='container mt-4 mb-5'>
        <div className="row text-center">
          <h2 className='mb-4'>AVAILABLE PUPPIES</h2>
          <div className="col-lg-4">
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image13.JPEG')} alt="Puppie Girl" />
            <h4>Girl</h4>
          </div>
          <div className="col-lg-4">
            <div className='image mx-auto'>
              <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image11.JPEG')} alt="Puppie Brown Nose" />
              <div className='rehomed'>
                <h5 className='px-2 py-1 m-0 text-light'>Just Rehomed</h5>
              </div>
            </div>
            <h4>Brown Nose</h4>
          </div>
          <div className="col-lg-4">
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image22.JPEG')} alt="Puppie Brundo" />
            <h4>Brundo</h4>
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
