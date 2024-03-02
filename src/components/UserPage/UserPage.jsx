import { useEffect, useState } from 'react'
import PetsGrid from '../PetsGrid/PetsGrid'
import './UserPage.css'
import PetPage from '../PetPage/PetPage'
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const [pet,setPet] = useState()
  const { petname } = useParams(); // Obtener el parámetro de la ruta

  useEffect(() => {
    // Verificar si hay un valor en el parámetro y actualizar el estado pet
    if (petname) {
      setPet(petname);
    } else {
      setPet('');
    }
  }, [petname]);
  return (
    <>
      <div className='userPageWrapper'>
        <div className='topUserInfo'>
          <span>Hello User!</span>
          <button>New Appointment</button>
        </div>
        {!pet ?
        <PetsGrid/>: <PetPage/>
        }
      </div>
    </>
  )
}

export default UserPage