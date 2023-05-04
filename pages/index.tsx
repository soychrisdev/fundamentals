import { Button } from '@/components/ui/Button'
import Link from 'next/link'



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24`}
    >
     <h1>React hooks & Custom hooks</h1>
     <Link href={'/state'}><Button>useState</Button></Link>
      
  
     

    </main>
  )
}
