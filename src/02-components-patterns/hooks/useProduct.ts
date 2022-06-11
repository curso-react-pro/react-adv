import { useState } from 'react'

export const useProduct = () => {
    const [counter, setcounter] = useState(0);
const increaseBy = (value:number)=>{
    setcounter((prev: number) => Math.max(prev + value, 0));
}
  return { counter, increaseBy };
}
