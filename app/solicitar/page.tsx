"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function SolicitarPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    sintomas: "",
    papelaria: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(3) // Move to confirmation step
  }

  const papelarias = [
    { id: "1", nome: "Papelaria Central", endereco: "Av. Paulista, 1000" },
    { id: "2", nome: "Papelaria Express", endereco: "Rua Augusta, 500" },
    { id: "3", nome: "Papelaria Rápida", endereco: "Av. Brigadeiro Faria Lima, 2000" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-teal-600">
            <span>1234Medical</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex mb-6">
            <Link href="/">
              <Button variant="ghost" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Solicitar Atestado Médico</CardTitle>
                  <CardDescription>Preencha seus dados pessoais e descreva seus sintomas</CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setStep(2)
                    }}
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <Input id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="sintomas">Descrição dos Sintomas</Label>
                      <Textarea
                        id="sintomas"
                        name="sintomas"
                        value={formData.sintomas}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Continuar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Escolha a Papelaria para Retirada</CardTitle>
                  <CardDescription>Selecione a papelaria parceira mais próxima de você</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <RadioGroup
                      value={formData.papelaria}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, papelaria: value }))}
                      className="space-y-3"
                    >
                      {papelarias.map((papelaria) => (
                        <div key={papelaria.id} className="flex items-start space-x-2">
                          <RadioGroupItem value={papelaria.id} id={`papelaria-${papelaria.id}`} className="mt-1" />
                          <Label htmlFor={`papelaria-${papelaria.id}`} className="flex flex-col cursor-pointer">
                            <span className="font-medium">{papelaria.nome}</span>
                            <span className="text-sm text-gray-500">{papelaria.endereco}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Finalizar Solicitação
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <CardTitle>Solicitação Confirmada!</CardTitle>
                  <CardDescription>Seu atestado médico foi solicitado com sucesso</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Seu atestado estará disponível para retirada em aproximadamente{" "}
                      <span className="font-bold">20 minutos</span> na:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-bold">{papelarias.find((p) => p.id === formData.papelaria)?.nome}</p>
                      <p className="text-gray-600">{papelarias.find((p) => p.id === formData.papelaria)?.endereco}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Uma confirmação foi enviada para o seu e-mail: {formData.email}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href="/">
                    <Button className="bg-teal-600 hover:bg-teal-700">Voltar para a Página Inicial</Button>
                  </Link>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
      <footer className="border-t bg-white">
        <div className="container py-6 px-4 md:px-6 text-center">
          <p className="text-sm text-gray-500">© 2024 1234Medical. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
