import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">O Que Nossos Clientes Dizem</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Veja o que as pessoas estão falando sobre o 1234Medical
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Precisei de um atestado com urgência e o 1234Medical me salvou! Em menos de 20 minutos, consegui
                retirar meu atestado na papelaria perto de casa. Muito prático!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-semibold">Ana Silva</p>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Serviço excelente! Estava com febre e não queria sair de casa para enfrentar fila no pronto-socorro.
                Com o 1234Medical, resolvi tudo online e meu marido buscou o atestado para mim."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-semibold">Carlos Oliveira</p>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Fiquei doente em plena sexta-feira e precisava justificar minha ausência no trabalho. O 1234Medical foi
                perfeito! Rápido, fácil e sem complicação. Recomendo!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-semibold">Mariana Costa</p>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
