import './Home.css'

const Home = () => {
  return (
    <>
      <div className='homeInner'>
        <section className='hero'>
          <div className='heroTittle'>
            <h4>CARING VETS FOR ALL YOUR PETS</h4>
            <h1>Pet Wellness Center</h1>
          </div>
        </section>
        <section className='ourMissionWrapper'>
          <div className='requestButton'>REQUEST AN APPOINTMENT</div>
          <div className='ourMission'>
            <h3>Our Mission</h3>
            <p>Welcome to Southern Ocean Animal Hospital, a full-service companion animal hospital that has a team made up
              of motivated and caring professionals to give your pet the care it deserves. Dr. Pascetta and his professional,
              friendly, and welcoming staff work together to keep your furry family members happy and healthy. By utilizing
              the advancements within veterinary technology, we're able to stay up-to-date with the latest and greatest services,
              therapies, and much more.</p>
            <div>Our Team</div>
          </div>
        </section>
        <section className='OurService'>
          <div className='serviceLeft'>
            <h3>Services</h3>
            <p>The Ross University  Veterinary Clinic is accredited by the American Animal Hospital Association (AAHA)* and provides
              a range of medical and surgical services for small animals including preventive care and emergency medicine.</p>
          </div>
          <div className='serviceRight'>
            <div>
              <h5>Preventive care</h5>
              <ul>
                <li>Parasite Prevention</li>
                <li>Vaccinations</li>
                <li>Wellness Examinations & Microchips</li>
              </ul>
            </div>
            <div>
              <h5>Dental Care</h5>
              <ul>
                <li>Dental Prophylaxis</li>
                <li>Flouride treatments</li>
                <li>Tooth extractions</li>
              </ul></div>
            <div>
              <h5>Spay and Neuter Clinic</h5>
              <ul>
                <li>Offered Weekly</li>
                <li>Free to the public</li>
                <li>Make sure to add your pet to the waiting list by registering with RUVC's reception team</li>
              </ul>
            </div>
            <div>
              <h5>Other Services</h5>
              <ul>
                <li>Surgery</li>
                <li>Emergency Services</li>
                <li>Ultrasound</li>
                <li>Radiology</li>
              </ul>
            </div>
          </div>

        </section>
        <section className='bottomImgSeparator'>

        </section>
      </div>
    </>
  )
}

export default Home