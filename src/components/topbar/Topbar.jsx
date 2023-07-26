  import "./topbar.css"
  
  export default function Topbar() {
    return (
     <section class="section hero">
      <div className="hero">
     <div class="hero-text-box">
      <h1 class="heading-primary">
      Welcome to our AA Salon Service – where beauty and relaxation come to you!
      </h1>
      <p class="hero description">We understand the importance of feeling pampered and looking your best, but we also know that life can be hectic and schedules can be demanding. That's why we've designed our AA Salon Service to bring the experience right to your doorstep.</p>
      <a href="/" class="btn">Learn More</a>
      </div>
       <img src="/assets/R.jpg" className="topbarImage" alt="" />
     
      </div>
      </section>
    )
  }
  