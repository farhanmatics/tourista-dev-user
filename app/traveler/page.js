import PageBottom from '@/components/pageBottom'
import PageHeader from '@/components/pageHeader'
import React from 'react'
import Link from 'next/link'

const Traveler = () => {
  return (
    <>
      <PageHeader backlink='/details'/>
      <div className='pt-20'>
        <div class="flex items-center justify-center">
          <div
              class="flex flex-col border p-12 shadow-lg shadow-purple-200 rounded-md border-purple-50">
              <p class="py-3 font-semibold capitalize text-tourPurple">Traveler Info: <span class="uppercase font-bold">no traveler added</span></p>
              <Link 
              href='/addtraveler'
              class="cursor-pointer items-center rounded-md bg-purple-950 px-4 py-2 text-sm font-semibold leading-6 text-white shadow">Add Traveler</Link>
          </div>
      </div>
      </div>
      <PageBottom title='Continue' linkurl='/upload' />
    </>
    
  )
}

export default Traveler