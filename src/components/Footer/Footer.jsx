import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footerUp'>
          <p>Pet Wellness Center - 4 Privet Drive, Little Whinging MHRM+C7 Watford, United Kingdom - Phone (555) 867-5309 - contact@PetWellnessCenter.com</p>
          <p>Hours Mon 8am - 6pm Tue 8am - 6pm Wed 8am - 7pm Thu 8am - 6pm Fri 8am - 6pm Sat 9am - 12pm Sun Closed</p>
          <div>Request an Appointment</div>
          <div>
            <i class='bx bxl-instagram'></i>
            <i class='bx bxl-facebook-square' ></i>
          </div>
        </div>
        <div className='footerDown'>
          <span className='footerLeft'>© All rights reserved</span>
          <span className='footerRight'>Made with ❤ by <a href="https://robertmendoza.netlify.app/" target="_blank">Robert Mendoza</a></span>
        </div>
      </footer>
    </>
  )
}

export default Footer