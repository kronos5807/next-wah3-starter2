import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href={'https://nextjs.org/docs'}>Goto NextJS 13 (Stable) Docs</Link>
      </p>
      <p>
        <Link href={'https://beta.nextjs.org/docs'}>Goto Beta Docs</Link>
      </p>
    </main>
  )
}
