import React from 'react'
import Link from 'next/link'

const PageHeader = ({backlink}) => {
  return (
    <div class="fixed top-0 w-full">
      <div class="flex items-center justify-between bg-purple-950 py-4">
        <Link
        href={backlink}
        class="pl-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
        <img src="https://tourista.co/img/tl-03.png" alt="tourista" class="w-32 pr-4" />
      </div>
    </div>
  )
}

export default PageHeader