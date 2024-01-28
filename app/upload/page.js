import PageBottom from '@/components/pageBottom'
import PageHeader from '@/components/pageHeader'
import React from 'react'
import Link from 'next/link'

const Upload = () => {
  return (
    <>
      <PageHeader backlink='/traveler'/>
      <div className='pt-20'>
        <div class="flex items-center justify-center">
          <div
              class="flex flex-col border p-12 shadow-lg shadow-purple-200 rounded-md border-purple-50">
              <p class="py-3 font-semibold capitalize text-tourPurple">Traveler Files:</p>
              <input type="file" name="" id="" className="form-input px-4 py-2 border border-purple-200 rounded-md"/>
              <Link 
              href='#'
              class="rounded-md bg-purple-950 px-4 py-2 mt-2 text-white text-center font-semibold text-sm">Upload</Link>
          </div>
      </div>
      </div>
      <PageBottom title='Continue' linkurl='/payment' />
    </>
    
  )
}

export default Upload