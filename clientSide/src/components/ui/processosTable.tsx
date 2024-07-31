import { Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/statusBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProcessoDTO } from "@/utils/Processo.dto";
import { useState } from "react";

interface ProcessoTableProps {
  processos: ProcessoDTO[];
}

const locale = 'pt-BR'; // Brazilian Portuguese locale
const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' };

export function ProcessosTable({processos}: ProcessoTableProps) {
    const [idProcessoAberto, setIdProcessoAberto] = useState<number | undefined>(undefined);
    return(
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
          {
            processos.map((processo) => (
                <TableRow key={processo.numeroProcesso}>
                  <TableCell>{processo.numeroProcesso}</TableCell>
                  <TableCell>
                    <StatusBadge
                      status={processo.status}
                    ></StatusBadge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col items-start gap-1">
                      {processo.executado.map((executado) => (
                        <Badge key={executado}>{executado}</Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{(processo.dataDistribuicao).toLocaleDateString(locale, options)}</TableCell>
                  <TableCell>{(processo.dataPrescricao).toLocaleDateString(locale, options)}</TableCell>
                  <TableCell>
                    <Button variant={"ghost"} size={"icon"} onClick={()=>{
                      console.log(processo)
                      if(idProcessoAberto === processo.id){
                        setIdProcessoAberto(undefined)
                        return
                      }
                      setIdProcessoAberto(processo.id)
                    }}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Visualizar Processo</span>
                    </Button>
                  </TableCell>
                </TableRow>
            ))
          } 
        </TableBody>
      </Table>
    )
}