import PageBottom from '@/components/pageBottom'
import PageHeader from '@/components/pageHeader'
import React from 'react'

const Details = () => {
  return (
    <>
      <PageHeader backlink='/'/>
      <div className='pt-20'>
        <div class="flex items-center justify-center">
          <div
              class="flex flex-col border p-12 shadow-lg shadow-purple-200 rounded-md border-purple-50">
              <p class="py-3 font-semibold capitalize text-tourPurple">Traveling to: <span class="uppercase font-bold">Thailand</span></p>

              <div class="flex flex-col px-2">
                  <h1 class="text-tourPurple py-2 font-semibold">Date of Entry</h1>
                  <input type="date" name="" id="" class="form-input px-4 py-3 rounded border-tourPurple border-2 text-tourPurple"/>
              </div>
              <div class="flex flex-col px-2">
                  <h1 class="text-tourPurple py-2 font-semibold">Visa type</h1>
                  <select
                      name=""
                      id=""
                      class="form-select text-tourPurple border-tourPurple rounded border-2 px-4 py-3 text-sm">
                      <option value="Tourist">Tourist</option>
                      <option value="Medical">Medical</option>
                  </select>
              </div>
          </div>
      </div>
      </div>
      <PageBottom title='Continue' linkurl='/traveler' />
    </>
    
  )
}

export default Details