import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

export default function AtestadoForm() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [cidade, setCidade] = useState("");
  const [papelaria, setPapelaria] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = () => {
    if (nome && cpf && email && sintomas && cidade && papelaria) {
      setEnviado(true);
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card className="shadow-2xl">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">Solicitar Atestado Médico</h2>
          <Input placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input placeholder="Seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <Input placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Textarea placeholder="Descreva seus sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
          <Input placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          <Label>Papelaria Parceira</Label>
          <Select onValueChange={(value) => setPapelaria(value)}>
            <SelectTrigger><SelectValue placeholder="Selecione uma papelaria" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Papelaria Central">Papelaria Central</SelectItem>
              <SelectItem value="Copiadora Vitória">Copiadora Vitória</SelectItem>
              <SelectItem value="Print Express">Print Express</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSubmit} className="w-full">Solicitar Atestado</Button>
          {enviado && <div className="bg-green-100 p-4 rounded-md text-green-800">Pedido enviado! Retire seu atestado na papelaria {papelaria} em até 20 minutos.</div>}
        </CardContent>
      </Card>
    </div>
  );
}