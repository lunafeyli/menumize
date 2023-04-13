import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Metadata, ResolvingMetadata } from 'next'
import { Product } from "@/components/menu/Product"

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: "BomBolos"
// }

interface Props {
  params: {
    menuName: string;
  }
}

const menus = {
  "bombolos": "BomBolos",
  "maumolos": "MauMolos"
}

type teste = keyof typeof menus

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const menuName = params.menuName as teste;
  
  return {
    title: menus[menuName]
  };
}

export default function Home({ params }: Props) {
  const menuName = params.menuName as teste

  const menuTitle = menus[menuName]

  return (
    <main className="bg-zinc-50 flex flex-col items-center py-12 px-8">
      <header className="text-center mb-8">
        <h1 className="text-lg text-zinc-900 font-medium">{menuTitle}</h1>
        <h2 className="text-xs text-green-800">de Criador</h2>
      </header>
      <ul className="w-full">
        {[0,0,0,0,0,0].map((a, i) => {
          if (a === 0) return <Product key={i}/>
        })}
      </ul>
    </main>
  )
}
