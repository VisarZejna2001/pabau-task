'use client';
import './Header.css'
import { useGlobalContext } from '@/app/Context/store'


const Header = () => {
  const { step } = useGlobalContext();

  return (
    <div className='headerContainer'>
      <h3 className='title'>Choose Service</h3>
      <p className='text'>Step {step}/2</p>
    </div>
  )
}

export default Header