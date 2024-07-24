import React from 'react'
import { FaArrowLeft} from 'react-icons/fa';
import { Button} from "flowbite-react";

const PageNotFoundComponent = () => {
  return (
    <>
        <div className="m-0 p-0 flex flex-col justify-center items-center relative">
                <img src="src\assets\img-pagenotfound\imgnotfound.png" className='w-full h-full' alt="" />
                <div className='flex flex-row justify-center gap-0 bg-blue-600 hover:bg-purple-200 rounded-md'>
                <FaArrowLeft className='text-xl text-blue-400 mt-3 ml-3'/>
                <Button type='button' className=' hover:text-black' >Back to Home!</Button>                           
                </div>
        </div>
    </>
  )
}

export default PageNotFoundComponent
