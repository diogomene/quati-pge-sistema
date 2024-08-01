import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/statusBadge";
import { Badge } from "@/components/ui/badge";
import { ProcessoDTO } from "@/utils/Processo.dto";
import { ProcessoDetalheSheet } from "./processoDetalheSheet";
import { formataData } from "@/utils/formatacaoUtil";

interface ProcessoTableProps {
  processos: ProcessoDTO[];
}

export function ProcessosTable({ processos }: ProcessoTableProps) {
  return (
    <Table className="border-t">
      <TableHeader>
        <TableRow>
          <TableHead>Número processo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Executado(s)</TableHead>
          <TableHead>Data distribuição</TableHead>
          <TableHead>Data prescrição</TableHead>
          <TableHead>
            <span className="sr-only">Ações</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {processos.map((processo) => (
          <TableRow key={processo.numeroProcesso}>
            <TableCell>{processo.numeroProcesso}</TableCell>
            <TableCell>
              <StatusBadge status={processo.status}></StatusBadge>
            </TableCell>
            <TableCell>
              <div className="flex flex-col items-start gap-1">
                {processo.executado.map((executado) => (
                  <Badge key={executado}>{executado}</Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              {formataData(processo.dataDistribuicao)}
            </TableCell>
            <TableCell>
              {formataData(processo.dataPrescricao)}
            </TableCell>
            <TableCell>
                <ProcessoDetalheSheet processo={processo}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
