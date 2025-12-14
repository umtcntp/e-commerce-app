import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

function About() {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>
                        We started this store with a simple idea: to make high–quality, thoughtfully designed
                        products accessible to everyone. Every item in our collection is carefully selected for
                        its comfort, durability, and style, so you can feel good about what you wear and use
                        every day.
                    </p>
                    <p>
                        Our small team handles everything from curation to packaging with attention to detail and
                        genuine care. We believe shopping should feel easy, enjoyable, and honest—no tricks, no
                        pressure, just products we truly stand behind. Thank you for being a part of our story.
                    </p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>
                        Our mission is to create a shopping experience that feels meaningful, inspiring, and deeply
                        customer-focused. We aim to offer products that blend quality, comfort, and timeless style while
                        supporting responsible production and fair values. By choosing pieces that last, we hope to
                        encourage more thoughtful purchasing habits and bring a sense of confidence and joy to your
                        everyday life.
                    </p>
                </div>
            </div>
            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>
                        Every product we offer goes through a detailed selection process to ensure it meets our
                        standards for durability, comfort and design. We work only with trusted partners and inspect
                        each item carefully so you receive pieces that look great, feel great and last. Your
                        satisfaction is at the heart of every decision we make.
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>
                        We’re committed to making your shopping experience as smooth and effortless as possible.
                        From clear product details to a simple checkout process, everything is designed to save you
                        time and reduce hassle. Enjoy fast browsing, secure payment options and a seamless journey
                        from cart to doorstep.
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>
                        We’re here to support you at every step of your shopping journey. Whether you have a question
                        about sizing, shipping or your order, our team is ready to help with clear, friendly and
                        timely responses. Your feedback matters to us, and we use it to continually improve the
                        experience we provide.
                    </p>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    )
}

export default About
