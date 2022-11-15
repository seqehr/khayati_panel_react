// Components
import DashboardBox from '../DashboardBox'
import DashboardBoxHead from '../DashboardBoxHead'
import React, { Component } from 'react'
import Slider from 'react-slick'
// Hooks

// Icons
import { MdAttachMoney } from 'react-icons/md'

// CSS
import style from './TotalBalance.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const TotalBalance = (props) => {
  const [data, setData] = useState([
    {
      name: 'چارلی چاپلین',
      content:
        'خداوند همه چیز را در یک روز نیافرید. پس چه چیز باعث شد که من بیندیشم می‌توانم همه چیز را در یک روز به دست بیاورم؟',
    },
    {
      name: 'پاول ویلسون',
      content:
        'به زیبایی بیندیش، نه برای انگیزش، که در جهت تعالی. زیبایی به هر جا آرامش می‌آورد، چه دست ساز انسان و چه طبیعی.',
    },
    {
      name: 'مارک تواین',
      content:
        'یک دروغ ممکن است دنیا را دور بزند و به جای اولش برگردد؛ اما در همین مدت، یک حقیقت هنوز دارد بند کفش‌های خود را می‌بندد تا حرکت کند.',
    },
    {
      name: 'سوزان کوئیلیام',
      content: 'برای اجتناب از بحران می توانید از سیاست سکوت استفاده کنید.',
    },
    {
      name: 'جک کانفیلد',
      content:
        'شما هم می‌توانید هر کاری را که دوست دارید، بکنید؛ اگر فقط باور کنید که می‌توانیدs',
    },
  ])

  const settings = {
    dots: false,

    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <DashboardBox>
      {/* ————— H E A D ————— */}
      <DashboardBoxHead text={''} />

      {/* ————— My Balance & Income/Expense ————— */}
      <div>
        <Slider {...settings}>
          {data.map((i) => (
            <div className='flex flex-col justify-center items-center'>
              <p className='text-center text-lg'>{i.name}</p>
              <blockquote className='text-xl italic font-semibold text-gray-900 text-center mt-5 dark:text-white'>
                <p>"{i.content}"</p>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </DashboardBox>
  )
}

export default TotalBalance
