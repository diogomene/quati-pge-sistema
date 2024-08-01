import { Processo } from "@/entities/Processo";
import { Label } from "./label";
import { Input } from "./input";
import { formataData, formatarValorMonetario } from "@/utils/formatacaoUtil";

interface ProcessoDetalheInfoTabProps {
  processo: Processo|undefined;
}

interface InformationInputProps {
    label: string;
    value: string | number;
    name: string;
  }
  

function InformationInput({ label, value, name }: InformationInputProps) {
    return (
      <div className="grid grid-cols-6 items-center gap-4">
        <Label htmlFor={name} className="text-right col-span-2">
          {label}
        </Label>
        <Input
          name={name}
          id={name}
          value={value}
          className="col-span-4"
          readOnly
        />
      </div>
    );
  }

export default function ProcessoDetalheInfoTab({
  processo
}: ProcessoDetalheInfoTabProps) {
  return (
    <div className="grid gap-4 py-4">
      <InformationInput
        name="numeroProcesso"
        label="Número do processo"
        value={processo?.numeroProcesso || ""}
      />
      <InformationInput
        name="status"
        label="Status do processo"
        value={processo?.status || ""}
      />
      <InformationInput
        name="executado"
        label="Nome do(s) executado(s)"
        value={processo?.executado.map((e) => e.nome).join(", ") || ""}
      />
      <InformationInput
        name="dataDistribuicao"
        label="Data de distribuição"
        value={formataData(processo?.dataDistribuicao)}
      />
      <InformationInput
        name="dataPrescricao"
        label="Data de prescrição"
        value={formataData(processo?.dataPrescricao)}
      />
      <InformationInput
        name="valor"
        label="Valor do processo"
        value={formatarValorMonetario(processo?.valor || 0)}
      />
      <InformationInput
        name="juiz"
        label="Nome do juiz"
        value={processo?.juiz?.nome || ""}
      />
    </div>
  );
}
