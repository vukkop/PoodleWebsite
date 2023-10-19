import React from 'react'
import "./Main.css"
import poodlePhoto from "../assets/images/image10.JPEG"

const Main = () => {
  return (
    <div className='mt-5'>
      <div className="row row-1 align-items-center">
        <div className="col-6">
          <h1 className='display-1 mt-5 heading'>
            <strong>
              Mini Poodles
            </strong>
          </h1>
          <h3 className='heading'>Ultimate companion for all families</h3>
        </div>
      </div>

      <div className='container'>
        <div className="row mt-4">

          <h2 className='mb-4'>WHY POODLE?</h2>
          <div className="col-7">
            <h4>Do you value creature comforts but yearn for an adventure companion? The poodle is for you!</h4>
            <p>
              I fell in love with poodles because they are like Swiss Army Knives of the dog world! They can do it all; in style and can fit anywhere. They are happy to spend the day at your feet while you work and jump to action for a hike or city stroll. After a day of paddleboarding or shopping at an art festival, the poodle is happy to snuggle with you on the couch. Most important, being with you, in the center of your life, makes a poodle happy
            </p>
            <button className='btn btn-primary btn-lg'>About Us</button>

          </div>
          <div className="col-5">
            <img className='rounded w-100' src={poodlePhoto} alt="" />
          </div>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <h2 className='mb-4'>OUR BREEDING PRINCIPLES</h2>
        <div className="col">
          <div class="card text-white bg-primary mb-4 p-3" style={{ height: 210 }}>
            <h4>Looks and Health</h4>
            <p>The companion poodle must have a balanced and sound body structure to remain active and healthy. We show our parents in UKC and test through OFA and genetic testing to produce healthy</p>
          </div>
        </div>
        <div className="col">
          <div class="card text-white bg-primary mb-4 p-3" style={{ height: 210 }}>
            <h4>Brains</h4>
            <p>Our puppies succeed as easily trained everyday companions to their family, medical alert service dogs, dog therapy, and various sports - Obedience, Rally-O, Nosewrok, Barnhunt, and Fly Ball.</p>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-primary mb-4 p-3" style={{ height: 210 }}>
            <h4>Upbringing</h4>
            <p>Puppies raised with early socialization curriculums are provided with the foundation to become well-adjusted adults and influence puppies' communication with humans.</p>
          </div>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <h2 className='mb-4'>DISCOVER OUR DOGS</h2>
        <div className="col puppies-col">
          <div className='overlay'>
            <h3 className='heading'>PUPPIES</h3>
          </div>

        </div>
        <div className="col our-dogs-col">
          <div className='overlay'>
            <h3 className='heading'>OUR DOGS</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <h2 className='text-center mt-4'>CONTACT</h2>

      </div>

      <footer className='row'>

      </footer>

    </div >
  )
}

export default Main
