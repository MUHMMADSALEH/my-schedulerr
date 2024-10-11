import { getUserEvents } from '@/app/actions/event-action'
import EventCard from '@/components/event-card'
import React from 'react'
import { Suspense } from 'react'
import { Progress } from "@/components/ui/progress"

export default function EventPage(){
  return(

<Suspense>
  <Events fallback={<Progress value={33} />
}/>
</Suspense>
  )
}

const Events = async() => {
  const {events,username}=await getUserEvents()
  if(events.length===0){
    return <p>You Have&pos;t created any event yet.</p>
  }
  return (
   <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
    {
    events.map((event)=> <EventCard key={event.id} event={event} username={username}/>)
   }
   </div>
  )
}

