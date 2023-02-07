import React from 'react'
import { useSelector } from 'react-redux'

export default function Rightsidepane() {

  const whatlevel: string = useSelector((states: any) => {
    return states.tree.whichlevel
  });
  return (
    <div>
      <div className='flex mt-2 gap-8 ml-8 cursor-pointer'>
        <div className='text-[#015389ff] font-medium capitalize'>
          item1
        </div>
        <hr className='bg-gray-300 h-6 w-[2px] rounded-lg' />
        <div className='text-[#015389ff] font-medium capitalize'>
          item2
        </div>
        <hr className='bg-gray-300 h-6 w-[2px] rounded-lg' />
        <div className='text-[#015389ff] font-medium capitalize'>
          item3
        </div>
        <hr className='bg-gray-300 h-6 w-[2px] rounded-lg' />
        <div className='text-[#015389ff] font-medium capitalize'>
          item4
        </div>
      </div>
      <div className='mt-20 ml-8'>
        <input className='border-black border capitalize cursor-not-allowed' readOnly value={ whatlevel.toString().includes('Level') ? whatlevel : `Level ${whatlevel}`} />
      </div>
      <div className='mt-5 ml-8'>
        <textarea  className='border-black border capitalize resize-none' cols={120} rows={20} placeholder='Description' />
      </div>

    </div>
  )
}
