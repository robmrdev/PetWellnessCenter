import './Schedule.css'

const Schedule = () => {
  return (
    <>
      <section className='topSchedule'>
        <button className='contactButton'>Contact</button>
        <div className='leftSchedule'>
          <div>
            <h3>Trusted and Amazing Pet Care</h3>
            <h1>Pet Wellness Center</h1>
          </div>
          <form>
            <h4>Request a Service</h4>
            <div>
              <input type="text" placeholder='Firstname' />
              <input type="text" placeholder='Lastname' />
            </div>
            <div>
              <input type="email" placeholder='Email' />
              <input type="number" placeholder='Cellphone' />
            </div>
            <input type="text" placeholder="Pet's Name" />
            <div>
              <input type="text" placeholder='Species' />
              <input type="text" placeholder='Breed' />
            </div>
            <textarea name="" placeholder="Aditional Notes" id="" cols="30" rows="10"></textarea>
            <button type="submit">REQUEST</button>
          </form>
        </div>
        <div className='rightSchedule'>
          <img src="./playful-cat.png" alt="Playful Cat" />
        </div>
      </section>
      <section className='bottomScheduleWrapper'>
        <h3>Get in Touch</h3>
        <div className="bottomSchedule">
          <div>
            <img src="https://dummyimage.com/300x200/000/fff" alt="" />
          </div>
          <div>
            <div className="contactRow">
              <i class='bx bxs-phone' ></i>
              <div>
                <h4>Phone</h4>
                <p>(555) 867-5309</p>
              </div>
            </div>
            <div className="contactRow">
              <i class='bx bxs-time-five'></i>
              <div>
                <h4>Hours</h4>
                <p>Monday: 8am - 6pm<br />Tuesday: 8am - 6pm<br />Wednesday: 8am - 7pm<br />Thursday: 8am - 6pm<br />Friday: 8am - 6pm<br />Saturday: 9am - 12pm<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <div className="contactRow">
              <i class='bx bxs-envelope' ></i>
              <div>
                <h4>Email</h4>
                <p>Contact@PetWellnessCenter.com</p>
              </div>
            </div>
            <div className="contactRow">
              <i class='bx bxs-map'></i>
              <div>
                <h4>Address</h4>
                <p>4 Privet Drive, Little Whinging<br/>MHRM+C7 Watford, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Schedule