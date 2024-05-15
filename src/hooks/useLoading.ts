import { useState } from "react"

export useLoading(){
  const [isLoading, setIsLoading] = useState()
  return {isLoading}
}