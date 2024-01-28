import React from 'react'
import Link from 'next/link'

const PageHeader = ({backlink}) => {
  return (
    <div className="fixed top-0 w-full">
      <div className="flex items-center justify-between bg-purple-950 py-4">
        <Link
        href={backlink}
        className="pl-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
        <img src="https://tourista.co/img/tl-03.png" alt="tourista" className="w-32 pr-4" />
      </div>
    </div>
  )
}

export default PageHeader