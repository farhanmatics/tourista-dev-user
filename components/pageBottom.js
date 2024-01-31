import React from 'react'
import Link from 'next/link'

const PageBottom = ({title, linkurl}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full border bg-gray-200 p-4">
      <div className="flex items-center justify-end">
        <Link 
        href={linkurl}
        className="inline-flex cursor-pointer items-center rounded-md bg-purple-950 px-12 py-2 text-sm font-semibold leading-6 text-white shadow-lg shadow-purple-300">{title}</Link>
      </div>
    </div>
  )
}

export default PageBottom