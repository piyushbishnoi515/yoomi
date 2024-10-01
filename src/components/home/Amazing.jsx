import React from 'react';
import CommonButton from '../common/ButtonCommon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider1 from '../../assets/image/webp/swiper-slider1-image.webp';
import slider2 from '../../assets/image/webp/swiper-slider1-image2.webp';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import swipernext from '../../assets/image/svg/right-arrow.svg';
import swiperback from '../../assets/image/svg/left-arrow.svg';
import ICON from '../common/Icons';
import ellips2 from '../../assets/image/webp/ellips2.png'

const AmazingFeatures = () => {
    return (
        <div className='pt-[125px] '>
            <div className='container 
            '>
                <div className='flex flex-col justify-center items-center pb-[55px] relative z-10'>
                    <h6 className='  font-medium leading-4 text-deep-blue text-base font-inter'>Features</h6>
                    <h2 className='font-normal text-black text-custom-xl leading-custom-xl  font-plus mt-2'>
                        Explore Our <span className='font-semibold'>Amazing Features</span>
                    </h2>
                    <p className=' font-inter font-normal text-base  text-black text-center max-w-[724px] mt-[10px] leading-6'>
                        Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process.
                    </p>
                </div>
                <div className='w-full z-10 bg-white pb-[60px] p-[0px_0px_0px_30px] shadow-4xl flex gap-10 justify-between mt-[61px] rounded-[32px]  lg:flex-row flex-col relative'>
                    <div className=''>
                        <h2 className=' font-inter font-medium text-deep-blue text-base leading-5'>Library</h2>
                        <h3 className='font-normal leading-custom-lg text-custom-lg text-black font-plus mt-2'>
                            Extensive Exercise <span className='!font-semibold'>Library</span>
                        </h3>
                        <div className='mt-[21px]  flex items-center gap-[15px] text-black opacity-70'>
                            <ICON iconName='tickIcon' />
                            <p className=' font-inter font-normal  text-base'>Utilize Yoomi’s HEP templates to quickly create and assign programs to your patients </p>
                        </div>
                        <div className='mt-[11px]  flex items-center gap-[15px] text-black opacity-70'>
                            <ICON iconName='tickIcon' />
                            <p className=' font-inter font-normal  text-base'>Choose from our library of exercises for all patient cases </p>
                        </div>
                        <div className='mt-[11px]  flex items-center gap-[15px] text-black opacity-70'>
                            <ICON iconName='tickIcon' />
                            <p className=' font-inter font-normal  text-base'>Use Yoomi’s industry-leading exercise generation tool to create your own exercises that track adherence and form in seconds </p>
                        </div>

                        <CommonButton className='!p-[16px_18px] rounded mt-[37px]' button='View the Library' />
                    </div>
                    <div className='max-w-[569px] w-full mt-6 lg:mt-0 relative'>
                        <Swiper
                            spaceBetween={35}
                            slidesPerView={1.2}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next1",
                                prevEl: ".swiper-button-prev1",
                            }}
                            modules={[Navigation]}
                        >
                            {[slider1, slider2, slider1, slider2].map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Slider image ${index + 1}`} className='max-w-[460px] w-full lg:min-h-[331px] sm:min-h-[332px] min-h-[175px] h-full' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='flex gap-[10px] mt-[15px]'>
                            <span className='preview-back swiper-button-prev1 cursor-pointer w-[34px] h-[34px] bg-white border border-black rounded-full grid place-items-center'>
                                <img src={swiperback} alt="Previous Slide" className='' />
                            </span>
                            <span className='preview-next swiper-button-next1 cursor-pointer w-[34px] h-[34px] bg-deep-blue rounded-full border border-deep-blue grid place-items-center'>
                                <img src={swipernext} alt="Next Slide" />
                            </span>
                        </div>
                        <div className='bg-light-blue w-[520px] lg:h-[262px] h-[192px] absolute top-[-47px] right-0'></div>
                    </div>
                </div>
            </div>
            <img src={ellips2} alt="" className=' absolute bottom-[-150%] left-0 -z-10' />
        </div>
    );
};

export default AmazingFeatures;