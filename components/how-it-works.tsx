import { ClipboardCheck, MapPin, Clock } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Como Funciona</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Solicitar seu atestado médico nunca foi tão fácil. Siga estes simples passos:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
              <ClipboardCheck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Preencha o Formulário</h3>
            <p className="text-gray-600">
              Informe seus dados pessoais, CPF, e-mail e descreva seus sintomas no nosso formulário inteligente.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Escolha a Papelaria</h3>
            <p className="text-gray-600">
              Selecione a papelaria parceira mais próxima de você para retirar seu atestado impresso.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Receba a Confirmação</h3>
            <p className="text-gray-600">
              Após o envio, você receberá uma confirmação com o tempo estimado para retirada (em média 20 minutos).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
