"use client"

import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import { usernameSchema } from '@/app/lib/validator'
import { useEffect } from 'react'
import useFetch from '@/hooks/use-fetch'
import { UpdateUsername } from '@/app/actions/user'
import { BarLoader } from 'react-spinners'

  



const Dashboard = () => {
  const {user,isLoaded}=useUser()
useEffect(()=>{
  setValue("username",user?.username)
},[isLoaded])
 const {register,handleSubmit,setValue,formState:{errors}}= useForm({
    resolver:zodResolver(usernameSchema)
  })
//we pass here our actions(updateUsername) which coming from here @/app/actions/user
  const{loading,error,data,fn:fnUpdateUsername}=useFetch(UpdateUsername)
  const onSubmit=async(data)=>{
fnUpdateUsername(data.username)
  }
  // console.log("errors",errors)
  // console.log("data from user action",data)
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome,{user?.firstName}</CardTitle>
        </CardHeader>
        {/* Latest updates */}
      </Card>
      <Card>

        <CardHeader>
          <CardTitle>Your unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="flex items-center gap-2">
                <span>{window?.location.origin}/</span>
                <Input {...register("username")} placeholder="Username..."/>
                {
                  errors?.username && <p className="text-red-500 text-sm mt-1">{errors?.username.message}</p>
                }
                {
                  error && <p className="text-red-500 text-sm mt-1">{errors?.message}</p>
                }
              </div>
            </div>
            {
              loading && <BarLoader className="mb-4" width={"100%"} color='#36d7b7'/> 
            }
          <Button type="submit" className="mt-4">Update Username</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard