import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

function Clan() {
  return (
    <div className='h-[90vh] flex w-full bg-bg-primary gap-10 p-10'>
       <div className='h-full w-[20%] md:flex flex-col items-center justify-center bg-bg-secondary border-color-primary border-2 rounded-3xl hidden'>
                <div className="flex items-center flex-col">
                <div className='rounded-full  border-color-primary border-2 border-spacing-64 p-auto grid place-items-center w-[85%] aspect-square'>
                <img src={""} alt="Clan Logo" className='rounded-full w-[92%] aspect-square '/>
                </div>
                <h2 className='text-3xl text-color-primary font-bold py-5 text-center'>
                    Clan Name
                </h2>
                </div>
               

                {["Total Members:","Online:"].map((item)=>(
                    <div>
                    <h2 className='text-xl text-color-primary/80 font-bold py-5'>
                        {item}
                    </h2>
                    </div>
                ))}

            </div>
            <div className='h-full  md:w-[80%] w-[100%] flex flex-col gap-10'>
            <div className='bg-bg-secondary h-[90%] rounded-3xl border-color-primary border-2'>
                <h2 className='md:text-4xl sm:text-2xl text-xl font-bold text-color-primary m-5'>
                    Chat
                </h2>
            </div>
            <div className='w-[100%] flex sm:flex-row items-center flex-col md:gap-10 sm:gap-5 gap-2'>
            <input id="#chatinput" placeholder='Your Message' className='bg-bg-secondary md:h-[70%] h-[50%] w-full rounded-2xl border-color-primary border-2 md:text-xl text-md font-semibold p-8 text-color-primary'/>
            <button className='border-2 rounded-2xl border-color-primary text-color-primary md:text-xl text-md h-[70%]  hover:bg-gradient-to-r from-color-primary to-color-secondary hover:text-bg-primary hover:font-bold md:w-40 w-32 py-2 px-5 '> Send <AiOutlineSend className=' inline-block  ' /> </button>
            </div>

            </div>
            

    </div>
  )
}

export default Clan