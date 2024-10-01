import React from 'react'
import yoga from '../../assets/image/webp/yoga-img.png'
import ICON from '../common/Icons';
import CommonButton from '../common/ButtonCommon';
import ellips2 from '../../assets/image/webp/ellips2.png'

const Tracking = () => {
    return (
        <div>
            <div className="container pt-[61px]">
                <div className=" items-center flex-wrap -mx-3 w-full z-10 bg-white pb-[60px] p-[0px_0px_0px_30px] shadow-4xl flex justify-between mt-[61px] rounded-[32px]  lg:flex-row flex-col relative ">
                    <div className=' px-3 lg:w-1/2 w-full flex justify-center object-cover'>
                        <img src={yoga} alt="" />
                    </div>
                    <div className=' px-3 lg:w-1/2 w-full '>
                        <div className=''>
                            <h2 className=' font-inter font-medium text-deep-blue text-base leading-5'>TRACKING</h2>
                            <h3 className=' max-w-[468px]font-normal leading-custom-lg text-custom-lg text-black font-plus mt-2'>
                                Cutting Edge Motion <span className='!font-semibold'>Tracking/ <br /> Feedback</span>
                            </h3>
                            <div className='mt-[21px]  flex items-center gap-[15px] text-black opacity-70'>
                                <ICON iconName='tickIcon' />
                                <p className=' max-w-[361.44px] font-inter font-normal  text-base'>Provides a holistic, real-time analysis of patient exercise form, capturing 300+ data points and critical metrics. </p>
                            </div>
                            <div className='mt-[11px]  flex items-center gap-[15px] text-black opacity-70'>
                                <ICON iconName='tickIcon' />
                                <p className=' max-w-[362.73px] font-inter font-normal  text-base'>Delivers immediate feedback and guidance to correct and improve exercise form</p>
                            </div>
                            <div className='mt-[11px]  flex items-center gap-[15px] text-black opacity-70'>
                                <ICON iconName='tickIcon' />
                                <p className=' max-w-[371.78px] font-inter font-normal  text-base'>Supported by the most accurate motion-tracking model designed for rehabilitation, Yoomi Vision </p>
                            </div>
                            <div className='mt-[11px]  flex items-center gap-[15px] text-black opacity-70'>
                                <ICON iconName='tickIcon' />
                                <p className=' max-w-[476.91px] font-inter font-normal  text-base'>Requires no custom hardware, sensors, or equipment </p>
                            </div>

                            <CommonButton className='!p-[16px_18px] rounded mt-[37px]' button='View the Library' />
                        </div>
                    </div>
                </div>
            </div>
            <img src={ellips2} alt="" className=' absolute bottom-[0%] right-0 ' />
        </div>
    )
}

export default Tracking