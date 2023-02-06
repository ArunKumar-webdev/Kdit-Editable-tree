import { Inter } from '@next/font/google'
import Levelpane from 'components/Levelpane';

export default function Home() {


  return (
    <>
      <div className='flex flex-wrap justify-between'>
        <div className='w-[30%] bg-[#d0ecffff] h-screen'>
          <Levelpane />
        </div>
        <div className='w-[67%] bg-[#f0f9ffff] h-screen'>
          right side
        </div>
      </div>

    </>
  )
}
