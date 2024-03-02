import { Link } from 'react-router-dom'
import './PetPage.css'

const PetPage = () => {
  return (
    <>
      <div className='petPageWrapper'>
        <div className='topPetPageInfo'>
          <img src="https://dummyimage.com/200x200/000/fff" alt="" />
          <div className='petInfo'>
            <h2>Name</h2>
            <h4>Species</h4>
            <h4>Breed</h4>
          </div>
          <button> <Link to='/user/'>Back</Link></button>
        </div>
        <div className='petPageNotification'>
          <span>
            Next Appointment
          </span>
          <span>
            Date
          </span>
          <span>
            Reschedule
          </span>
        </div>
        <div className='appoGrid'>
          <h5>Previous Appointments</h5>
          <div></div>
          <div></div>
          <div className='appoDate'>Date 1</div>
          <div className='resultDate'>Attended</div>
          <div className='appoRecipe'>Recipe</div>
          <div className='appoDate'>Date 2</div>
          <div className='resultDate'>Attended</div>
          <div className='appoRecipe'>Recipe</div>
          <div className='appoDate'>Date 3</div>
          <div className='resultDate'>Attended</div>
          <div className='appoRecipe'>Recipe</div>
        </div>
      </div>
    </>
  )
}

export default PetPage