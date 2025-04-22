import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, ShieldCheck } from "lucide-react"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-teal-600">
            <span>1234Medical</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:underline">
              Como Funciona
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:underline">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline">
              Perguntas Frequentes
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/solicitar">
              <Button className="bg-teal-600 hover:bg-teal-700">Solicitar Atestado</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Rápido e Prático</h3>
                  <p className="text-gray-600">Atestados disponíveis em até 20 minutos. Sem filas, sem espera.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MapPin className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Retirada Conveniente</h3>
                  <p className="text-gray-600">Escolha a papelaria parceira mais próxima para retirar seu atestado.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Seguro e Confiável</h3>
                  <p className="text-gray-600">
                    Seus dados são protegidos e seu atestado é emitido com toda segurança.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <Link href="/" className="font-bold text-teal-600">
              1234Medical
            </Link>
            <p className="text-sm text-gray-500">Atestados médicos online com retirada rápida e segura.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link href="/termos" className="text-sm text-gray-500 hover:underline">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-sm text-gray-500 hover:underline">
              Política de Privacidade
            </Link>
            <Link href="/contato" className="text-sm text-gray-500 hover:underline">
              Contato
            </Link>
          </div>
          <p className="text-xs text-gray-500">© 2024 1234Medical. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
