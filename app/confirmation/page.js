import PageBottom from '@/components/pageBottom'
import PageHeader from '@/components/pageHeader'
import React from 'react'
import Link from 'next/link'

const Confirmation = () => {
  return (
    <>
      <PageHeader backlink='/'/>
      <div className='pt-20'>
        <div className="flex items-center justify-center">
          <div
              className="flex flex-col border p-12 shadow-lg shadow-purple-200 rounded-md border-purple-50">
              <p className="py-3 font-semibold capitalize text-tourPurple">Thanks :</p>
          </div>
      </div>
      </div>
      <PageBottom title='Home' linkurl='/' />
    </>
    
  )
}

export default Confirmation