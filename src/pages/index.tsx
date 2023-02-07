import { Inter } from '@next/font/google'
import Levelpane from 'components/Levelpane';
import Rightsidepane from 'components/Rightsidepane';

export default function Home() {


  return (
    <>
      <div className='flex flex-wrap justify-end mb-5 mt-5'>
        <div className='mb-3 font-bold text-[#015389ff]'>Editable Tree Menu</div>
        <hr className='w-full h-[2px] bg-[#015389ff]' />
      </div>
      <div className='flex flex-wrap justify-between'>
        <div className='w-[30%] bg-[#d0ecffff] h-[90vh]'>
          <Levelpane />
        </div>
        <div className='w-[67%] bg-[#f0f9ffff] h-[90vh]'>
          <Rightsidepane />
        </div>
      </div>

    </>
  )
}
