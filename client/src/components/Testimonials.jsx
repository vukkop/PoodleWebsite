import React from 'react'

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jeannie",
      testimonial: "We adopted our Fred from Huso and Min in December 2023. Huso and Min are very thorough with us prior to the adoption and stayed in touch with us afterwards. We could tell They loved the puppies and there dogs and truly cared for the well being of the puppies. Fred is so loving and obedient! He follows me everywhere.So very smart! He gets along well with other dogs and has no separation anxiety.We could not have found a better companion!",
      image: require("../assets/images/Testimonials/image-1.jpeg")
    },
  ];

  return (
    //   <div className="container mt-5">
    //     <h2 className="text-center mb-4">TESTIMONIALS</h2>
    //     <div className="row">
    //       {testimonials.map((item, index) => (
    //         <div key={index} className="col-lg-3 col-sm-6 p-2">
    //           <div className="card mb-4 shadow-sm">
    //             <img src={item.image} className="card-img-top" alt={item.name} />
    //             <div className="card-body">
    //               <p className="card-text">"{item.testimonial}"</p>
    //               <div className="d-flex justify-content-center align-items-center">
    //                 <small className="text-muted">- {item.name}</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    <div className="container mt-5">
      <h2 className="text-center mb-4">TESTIMONIALS</h2>
      {testimonials.map((item, index) => (
        <div class="card">
          <div class="card-body">
            <div className='d-flex justify-content-center'>
              <img src={item.image} className="d-block rounded mx-auto img-fluid av-img" alt={item.name} />
            </div>
            <p className='mt-4'>{item.testimonial}</p>
            <div className="d-flex justify-content-center align-items-center">
              <small className="text-muted">- {item.name}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
