import { Progress } from '@/components/ui/progress'
import React, { Suspense } from 'react'


const Availabiltylayout = ({children}) => {
  return (
    <div className='mx-auto'><Suspense fallback={<Progress value={33} />}>
        {children}
        </Suspense></div>
  )
}

export default Availabiltylayout