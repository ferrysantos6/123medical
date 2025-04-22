import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Atestados Médicos Online com Retirada Rápida e Segura
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Solicite seu atestado médico online, de forma simples, rápida e prática. Sem filas, sem complicação.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/solicitar">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
                  Solicitar Atestado
                </Button>
              </Link>
              <Link href="#como-funciona">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg">
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-400 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="1234Medical - Atestados Online"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
