import React, { useState } from 'react'
import Header from '../common/Header'
import ButtonCommon from '../common/ButtonCommon'

const Hero = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
        }, 3000);
    }
    return (
        <div className=' bg-hero-layer min-h-[828px] w-full  bg-no-repeat bg-center bg-cover'>

            <Header />
            <div className=' container'>
                <div className=' justify-center items-center flex flex-col text-center pt-[122px]  '>
                    <div className=' flex '>
                        <h2 className=' w-full  font-plus font-extrabold max-w-[848px]   text-3xl md:text-custom-xl lg:text-custom-2xl md:leading-custom-xl  sm:text-4xl  lg:leading-custom-2xl '> Next Generation<span className=' font-normal '> Patient Engagement and RTM Solution✨
                        </span></h2>
                        {/* <img src={star} alt="" className='  bottom-0 right-[150px] h-[44px] w-[40px] flex' /> */}
                    </div>
                    <p className=' font-inter font-normal text-lg sm:text-2xl text-center pt-[8.9px] text-black opacity-70'>Industry leading AI motion-tracking technology</p>
                </div>
                <form id='fromEmail' onSubmit={handleSubmit} method="get" className='max-w-[428px] mx-auto w-full p-1.5 bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl '>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        className='font-medium font-inter placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <ButtonCommon button='Get Started' className='text-nowrap'/>
                </form>

            </div>
        </div>
    )
}
export default Hero