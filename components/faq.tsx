import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Tire suas dúvidas sobre o 1234Medical</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Como funciona o processo de solicitação de atestado?
              </AccordionTrigger>
              <AccordionContent>
                Você preenche um formulário com seus dados pessoais e sintomas, escolhe uma papelaria parceira para
                retirada e recebe uma confirmação com o tempo estimado para buscar seu atestado (geralmente em 20
                minutos).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">O atestado é válido legalmente?</AccordionTrigger>
              <AccordionContent>
                Sim, todos os atestados são emitidos por profissionais de saúde habilitados e possuem validade legal
                para justificar ausências no trabalho ou escola.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Quanto tempo leva para o atestado ficar disponível?
              </AccordionTrigger>
              <AccordionContent>
                Em média, o atestado fica disponível para retirada em 20 minutos após a confirmação da solicitação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Preciso ir pessoalmente retirar o atestado?</AccordionTrigger>
              <AccordionContent>
                Não necessariamente. Você pode autorizar outra pessoa a retirar o atestado em seu nome, desde que ela
                apresente a confirmação da solicitação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Como é feito o pagamento pelo serviço?</AccordionTrigger>
              <AccordionContent>
                O pagamento é feito diretamente na papelaria parceira no momento da retirada do atestado. Aceitamos
                dinheiro, cartões de débito e crédito.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
