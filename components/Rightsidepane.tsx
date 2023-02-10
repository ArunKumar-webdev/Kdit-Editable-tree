import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { updateinnercontent, reset, updatenameforlevel } from 'store/Mainslice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function Rightsidepane() {

  const whatlevel: string = useSelector((states: any) => {
    return states.tree.whichlevel
  });

  const innerChildContent = useSelector((states: any) => {
    return states
  });

  const innerChildtext = useSelector((states: any) => {
    return states.tree.innernamecontent
  });

  // console.log('innerChildtext', innerChildtext)

  const [innercontent, setinnercontent] = useState<any>();
  const dispatch = useDispatch();
  const ref = useRef(true);
  const router = useRouter();

  const fetchFootballers = async () => {
    await axios.get("https://api.quotable.io/random")
      .then((res) => {
        dispatch(updateinnercontent(res.data.content));
        setinnercontent(res.data.content);
      })
      .catch(() => {
        alert('Fetching random data went wrong')
      })
  }

  const [value, setvalue] = useState('')

  useEffect(() => {
    ref.current = false;
    if (!ref.current && innerChildContent.tree.innercotent[whatlevel] == null) {
      fetchFootballers()
    }
    if (innerChildtext[whatlevel]) {
      setvalue(innerChildtext[whatlevel])
    } else {
      setvalue('')
    }
  }, [whatlevel])

  // console.log('whatlevel', whatlevel)
  // console.log('innerChildContent', innerChildContent)

  return (
    <div>
      <div className='flex mt-2 gap-8 ml-8'>
        <div onClick={() => { router.push('/item1'); dispatch(reset()); }} className='text-[#015389ff] font-medium capitalize cursor-pointer'>
          item1
        </div>
        <hr className='bg-gray-300 h-6 w-[2px] rounded-lg' />
        <div onClick={() => { router.push('/item2'); dispatch(reset()); }} className='text-[#015389ff] font-medium capitalize cursor-pointer'>
          item2
        </div>
        <hr className='bg-gray-300 h-6 w-[2px] rounded-lg' />
        <div onClick={() => { router.push('/item3'); dispatch(reset()); }} className='text-[#015389ff] font-medium capitalize cursor-pointer'>
          item3
        </div>
        <hr className='bg-gray-300 h-6 w-[2px] rounded-lg' />
        <div onClick={() => { router.push('/item4'); dispatch(reset()); }} className='text-[#015389ff] font-medium capitalize cursor-pointer'>
          item4
        </div>
      </div>
      <div className='mt-20 ml-8'>
        <input className='border-black border capitalize' onChange={(e) => {
          dispatch((updatenameforlevel(e.target.value)));
          setvalue(e.target.value)
        }} value={value.length === 0 ? whatlevel.toString().includes('Level') ? whatlevel : `Level ${whatlevel}` : value} />
      </div>
      <div className='mt-5 ml-8'>
        <textarea className='border-black border capitalize resize-none' cols={120} rows={20} onChange={(e) => {
          dispatch(updateinnercontent(e.currentTarget.value))
        }} value={innerChildContent.tree.innercotent[whatlevel] == null ? innercontent : innerChildContent.tree.innercotent[whatlevel]} placeholder='Description' />
      </div>

    </div>
  )
}
