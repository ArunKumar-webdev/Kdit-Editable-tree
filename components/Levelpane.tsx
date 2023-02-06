import React, { useMemo } from 'react'
import { useState } from 'react';

let array: any = [
    {
        "level": 1
    },
    {
        "level": 2
    }
];

export default function Levelpane() {

    const [levels, setlevels] = useState<any>(array);
    const [selectedLi, setSelectedLi] = useState(0);
    const [innerChild, setinnerChild] = useState('');

    function addChildNode() {
        debugger
        if (selectedLi == null) {
            array.push([]);
            array[array.length - 1] = { level: array.length }
            // console.log(array)
            setlevels([...array])
        } else if (selectedLi.toString().length < 3) {
            if (levels[selectedLi]?.child == null) {
                levels[selectedLi]['child'] = [`${levels[selectedLi].level}.${levels[selectedLi]['child'] != null ? levels[selectedLi].child.length + 1 : 1}`];
                levels[selectedLi]['innerchild'] = []
                let temp = levels;
                setlevels([...temp])
                // console.log(levels[selectedLi])
            } else {
                levels[selectedLi]['child'].push(`${levels[selectedLi].level}.${levels[selectedLi]['child'].length + 1}`)

                // console.log(levels[selectedLi]);
                let temp = levels;
                setlevels([...temp])
            }
        } else if (selectedLi.toString().length === 3 && innerChild?.length > 1) {
            // console.log(innerChild.split('.')[1]);

            let check = levels.filter(function (element: any) {
                return element.level == innerChild.split('.')[0];
            });

            if (check && check[0].innerchild[innerChild] && Object.keys(check[0].innerchild).length) {
                // levels[Number(innerChild.split('.')[0]) - 1]['innerchild'][innerChild].count += 1;
                for (let t = 0; t < levels.length; t++) {
                    if (levels[t].level == innerChild.split('.')[0]) {
                        levels[t]['innerchild'][innerChild].count += 1;
                    }
                }
            } else {
                // levels[Number(innerChild.split('.')[0]) - 1]['innerchild'][innerChild] = { count: 1 }
                for (let j = 0; j < levels.length; j++) {
                    if (levels[j].level == innerChild.split('.')[0]) {
                        levels[j]['innerchild'][innerChild] = { count: 1 }
                    }
                }
            }
            // console.log('innerchild', levels);
            let temp = levels;
            setlevels([...temp])
        }
        console.log('innerchild', levels);
    }

    function deleteChildNode() {
        debugger
        if (levels.length > 1) {
            let index = selectedLi.toString().split('')[0]
            for (let i = 0; i < levels.length; i++) {
                if (levels[i].level == index) {
                    delete levels[i];
                    // confirm('Child Deleted Sucessfully');
                }
            }
            let data: any = levels.filter(function (element: any) {
                return element !== undefined;
            });
            setlevels([...data]);
        } else {
            alert('Tree List Should Contain More Than One Data To Perform Delete ')
        }
    }

    const handleClickColorChange = (e: any, index: any) => {
        console.log(e.target.childNodes[1].data)
        setinnerChild(e.target.childNodes[1].data)
        setSelectedLi(index);
    };

    console.log('selectedLi', selectedLi);
    console.log('levels', levels);

    return (
        <>
            <div className='p-5 h-[90%] overflow-y-scroll'>
                {levels.map((value: any, index: number) => {
                    debugger
                    return (
                        <div key={index}>
                            <div className='font-bold text-[#015389ff] cursor-pointer'
                                style={{ backgroundColor: index === selectedLi ? 'white' : 'transparent' }}
                                onClick={(e: any) => handleClickColorChange(e, index)} >Level {value.level}</div>

                            {value.child?.map((childvalue: any, index: number) => {
                                return (
                                    <>
                                        <div key={index + 100} className='font-semibold text-[#015389ff] indent-5'
                                            style={{ backgroundColor: index + (100 * value.level) === selectedLi ? 'white' : 'transparent' }}
                                            onClick={(e: any) => handleClickColorChange(e, index + (100 * value.level))}>
                                            Level {childvalue}

                                        </div>
                                        {value.innerchild[childvalue] && Array(value.innerchild[childvalue].count).fill(1).map((innerchildvalue: any, indexinnerchild: number) => {
                                            return (
                                                <div key={indexinnerchild + (1000 * Number(childvalue))} className='font-normal italic text-[#015389ff] indent-8'
                                                    style={{ backgroundColor: indexinnerchild + + (1000 * Number(childvalue)) === selectedLi ? 'white' : 'transparent' }}
                                                    onClick={(e: any) => handleClickColorChange(e, indexinnerchild + + (1000 * Number(childvalue)))}>
                                                    Level {`${childvalue}.${indexinnerchild + 1}`}

                                                </div>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='fixed bottom-2 p-1 w-[30%]'>
                <div className='flex justify-between'>
                    <div id='leftbt'>
                        <button className='w-8 h-8 font-bold bg-[#015389ff] text-white ' onClick={addChildNode}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='m-auto' version="1.1" width="12" height="12" x="0" y="0" viewBox="0 0 349.03 349.031" ><g><path d="M349.03 141.226v66.579a9.078 9.078 0 0 1-9.079 9.079H216.884v123.067a9.077 9.077 0 0 1-9.079 9.079h-66.579c-5.009 0-9.079-4.061-9.079-9.079V216.884H9.079A9.08 9.08 0 0 1 0 207.805v-66.579a9.079 9.079 0 0 1 9.079-9.079h123.068V9.079c0-5.018 4.069-9.079 9.079-9.079h66.579a9.078 9.078 0 0 1 9.079 9.079v123.068h123.067a9.077 9.077 0 0 1 9.079 9.079z" fill="#f8f8f8" data-original="#000000" className=""></path></g></svg>
                        </button>
                        <button className='w-8 h-8 font-bold bg-[#015389ff] text-white ml-3' onClick={deleteChildNode}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='m-auto' width="12" height="12" x="0" y="0" viewBox="0 0 298.667 298.667"><g><path d="M0 128h298.667v42.667H0z" fill="#fffdfd" data-original="#000000"></path></g></svg>
                        </button>
                    </div>
                    <div id='rightbt'>
                        <button className='w-8 h-8 font-bold bg-[#015389ff] text-white '>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='m-auto' width="12" height="12" x="0" y="0" viewBox="0 0 512 512"><g><path d="M490.667 45.729C490.667 20.521 470.01 0 444.615 0c-6.896 0-13.625 1.563-19.99 4.646l-.031.021c-69.958 34.104-169.188 91.271-256.729 141.708-45.729 26.354-88.917 51.229-121.74 69.229-15.521 8.5-24.792 23.604-24.792 40.396s9.271 31.896 24.792 40.396c32.896 18.021 76.188 42.958 122.021 69.375 87.448 50.375 186.563 107.479 256.438 141.542 6.365 3.104 13.104 4.688 20.031 4.688 25.396 0 46.052-20.521 46.052-45.75l-.021-210.271.021-210.251z" fill="#ffffff" data-original="#000000"></path></g></svg>
                        </button>
                        <button className='w-8 h-8 font-bold bg-[#015389ff] text-white ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='m-auto' width="18" height="18" x="0" y="0" viewBox="0 0 32 32" ><g><path fill="#ffffff" d="m22.712 15.287-10-10a1.05 1.05 0 0 0-1.1-.212A1 1 0 0 0 11 6v20a1 1 0 0 0 .612.925 1.038 1.038 0 0 0 1.1-.213l10-10a1.012 1.012 0 0 0 0-1.425z" data-original="#000000"></path></g></svg></button>
                    </div>
                </div>

            </div>
        </>
    )
}