import { Link } from 'react-router-dom'
import './PetGrid.css'

const PetsGrid = () => {
    return (
        <div className='petsCards'>
            <div className="petCard"><Link to='/user/example'><img src="https://dummyimage.com/300x300/000/fff" /></Link></div>
            <div className="petCard"><Link to='/user/example'><img src="https://dummyimage.com/300x300/000/fff" /></Link></div>
            <div className="petCard"><Link to='/user/example'><img src="https://dummyimage.com/300x300/000/fff" /></Link></div>
            <div className="petCard"><Link to='/user/example'><img src="https://dummyimage.com/300x300/000/fff" /></Link></div>
            <div className="petCard"><Link to='/user/example'><img src="https://dummyimage.com/300x300/000/fff" /></Link></div>
        </div>
    )
}

export default PetsGrid