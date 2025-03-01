import React from 'react'
import "./Main.css"
import poodlePhoto from "../assets/images/image10.JPEG"
import PuppyModal from '../components/modals/PuppyModal'
import OurDogsModal from '../components/modals/OurDogsModal'
import ContactForm from '../components/ContactForm'
import { Testimonials } from '../components/Testimonials'
import AvailablePuppies from '../components/AvailablePuppies'
import PuppiesFoundHappyHome from '../components/PuppiesFoundHappyHome'

const Main = () => {
  const contactInfo = {
    email: 'puppypoodles1@gmail.com',
  }
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

      <div className="container">
        <div className="row mt-4 text-center">
          <h2 className='mb-4'>OUR BREEDING DOGS</h2>
          <div className="col-lg-6 col-md-12">
            <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/BreadingDogs/Brundo.jpeg')} alt="Brundo" />
          </div>
          <div className="col-lg-6 col-md-12">
            <h4 className='mt-3'>Brundo</h4>
            <p className=' pe-5'>Meet Brundo, our handsome male Poodle available for breeding. With his striking appearance, intelligent nature, and excellent health, Brundo is an exceptional choice for producing beautiful, well-tempered puppies. He has a friendly, playful personality and comes from a strong lineage of healthy, well-behaved Poodles. Whether you're looking to enhance your breeding program or searching for the perfect sire for your next litter, Brundo is ready to contribute his outstanding traits.</p>
          </div>
        </div>
      </div>

      <AvailablePuppies>
      </AvailablePuppies>



      <div className='bg-primary-subtle row'>
        <div className='container mt-4 mb-5'>
          <div className="row text-center">
            <h2 className='mb-4'>PARENTS</h2>
            <div className="col-md-12 col-lg-6 mb-4">
              <div className="d-flex">
                <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image29.JPEG')} alt="Puppie Girl 1" />
              </div>
              <h4>Bamm Bamm</h4>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="d-flex">
                <img className='d-block rounded mx-auto img-fluid av-img' src={require('../assets/images/image21.JPEG')} alt="Puppie Boy 2" />
              </div>
              <h4>Abuk</h4>
            </div>
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


      <PuppiesFoundHappyHome></PuppiesFoundHappyHome>

      <Testimonials></Testimonials>

      <div id='Contact' className="container mb-5 mt-4">
        <ContactForm></ContactForm>
        <h4 className="text-center mt-4" >Alternatively click <a href={`mailto:${contactInfo.email}`}>HERE</a> to send us an email.</h4>
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
