import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import React from 'react'

const HomePage = () => {
  return (
    <div className="flex items-center" >
      <Button>Home</Button>
      <ModeToggle />
    </div>
  )
}

export default HomePage