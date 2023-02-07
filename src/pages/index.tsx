import Levelpane from 'components/Levelpane';
import Rightsidepane from 'components/Rightsidepane';
import { updatethemecolor } from 'store/Mainslice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Home() {

  const dispatch = useDispatch();

  const themecolor = useSelector((states: any) => {
    return states.tree.themecolor
  });

  function getcolor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let dark = "rgb(" + x + "," + y + "," + z + ")";
    let light = "rgb(" + (x + 100) + "," + (y + 100) + "," + (z + 100) + ")";
    let color = { dark: dark, light: light }
    return color;
  }

  return (
    <>
    <div className='hidden md:block'>
      <div className='flex flex-wrap justify-end mb-5 mt-5'>
        <div className='mb-3 font-bold text-[#015389ff] cursor-pointer' onClick={() => {
          dispatch(updatethemecolor(getcolor()));
          // setcolor(getcolor())
        }}>Editable Tree Menu</div>
        <hr className={'w-full h-[2px] bg-[#015389ff]'} />
      </div>
      <div className='flex flex-wrap justify-between'>
        <div id='asd' className={themecolor.dark == '' || themecolor.dark == null ? 'w-[30%] h-[90vh] bg-[#d0ecffff]' : 'w-[30%] h-[90vh]'} style={{ backgroundColor: themecolor.dark == null ? '' : themecolor.dark }}>
          <Levelpane />
        </div>
        <div className={themecolor.light == '' || themecolor.light == null ? 'w-[67%] bg-[#f0f9ffff] h-[90vh]' : 'w-[67%] h-[90vh]'} style={{ backgroundColor: themecolor.light == null ? '' : themecolor.light }}>
          <Rightsidepane />
        </div>
      </div>
      </div>
      <div className='block md:hidden font-bold text-xl'>
        Current supported only for Desktop View
      </div>

    </>
  )
}
