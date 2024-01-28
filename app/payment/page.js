'use client'

import PageBottom from '@/components/pageBottom'
import PageHeader from '@/components/pageHeader'
import React, { useState } from 'react'
import Link from 'next/link'

const Payment = () => {
  const [chkstate, setChkstate] = useState(true)
  return (
    <>
      <PageHeader backlink='/'/>
      <div className='pt-16'>
        <div className="flex items-center justify-center">
          <div
              className="flex flex-col border px-12 py-3 shadow-lg shadow-purple-200 rounded-md border-purple-50">
              <p className="py-1 font-semibold capitalize text-tourPurple">Choose delivery method</p>
              <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-1">
                <div className='flex items-center px-2 pt-2'>
                  <input type="radio" id="huey" name="drone" value="huey" className="form-input"/>
                  <label htmlFor="huey" className='text-sm font-semibold pl-1'>I will drop-off my documents</label>
                </div>

                <div className='flex items-center px-2'>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label htmlFor="dewey" className='text-sm font-semibold pl-1'>Pick up from my location</label>
                </div>

                <div className="flex items-center justify-end text-purple-800 font-bold pt-1 mr-2">
                  300.00 BDT
                </div>
              </div>
              <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-2">
                <div className='bg-yellow-300 rounded-t-xl py-1 px-2'>
                  <span className='font-semibold text-sm'>Loyalty & Discounts</span>
                </div>
                <div className='flex items-center px-2 pt-1'>
                  <input type="radio" id="huey" name="v2" value="huey" className="form-input"/>
                  <label htmlFor="huey" className='text-sm font-semibold pl-1'>I want to earn Loyalty points</label>
                </div>

                <div className='flex items-center px-2 pb-2'>
                  <input type="radio" id="dewey" name="v2" value="dewey" />
                  <label htmlFor="dewey" className='text-sm font-semibold pl-1'>I want to redeem loyalty points</label>
                </div>
              </div>
              <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-2">
                <div className=' bg-darkSky rounded-t-xl py-1 px-2'>
                  <span className='font-semibold text-sm text-white'>Fee Summery</span>
                </div>
                <div className='flex flex-col pt-2 px-1'>
                  <div className='flex items-center justify-between'>
                    <div className='text-sm font-semibold text-gray-700'>Travelers X 1</div>
                    <div className='text-sm font-semibold text-gray-700'>4,650</div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='text-sm font-semibold text-gray-700'>Tourista Processing Fee</div>
                    <div className='text-sm font-semibold text-gray-700'>450</div>
                  </div>
                  <hr />
                  <div className='flex items-center justify-between pb-1'>
                    <div className='text-sm font-bold text-black'>Total</div>
                    <div className='text-sm font-bold text-black'>5,100</div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      </div>
      <PageBottom title='Confirm & Proceed' linkurl='/confirmation' />
    </>
    
  )
}

export default Payment