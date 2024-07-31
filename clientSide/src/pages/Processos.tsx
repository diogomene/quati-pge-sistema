import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProcessosTable } from "@/components/ui/processosTable";
import { ProcessoOrdenacaoMenu } from "@/components/ui/processosOrdenacaoMenu";
import { ProcessosFiltoMenu } from "@/components/ui/processosFiltroMenu";
import { ProcessoNumeroInput } from "@/components/ui/processoNumeroInput";
import { useEffect, useState } from "react";
import { TipoOrdenacao } from "@/utils/TipoOrdenacao";
import { STATUS_PROCESSO } from "@/entities/Processo";
import { IndicadorPesquisaBadge } from "@/components/ui/indicadorPesquisaBadge";
import { buildFilterAndSortQuery, getAll } from "@/services/processo.service";
import { ProcessoDTO } from "@/utils/Processo.dto";
export function Processos() {
  const [numeroProcesso, setNumeroProcesso] = useState<number | undefined>(
    undefined
  );
  const [ordenacao, setOrdenacao] = useState<TipoOrdenacao>(
    "ASC" as TipoOrdenacao
  );
  const [statusProcesso, setStatusProcesso] = useState<STATUS_PROCESSO[]>([
    "PRESTES_A_PRESCREVER" as STATUS_PROCESSO,
  ]);
  const [dataInicial, setDataInicial] = useState<Date | undefined>(undefined);
  const [dataFinal, setDataFinal] = useState<Date | undefined>(undefined);
  const [processos, setProcessos] = useState<ProcessoDTO[]>([]);
  useEffect(() => {
    const valQuery = buildFilterAndSortQuery({
      dataFinalPrescricao: dataFinal,
      dataInicialPrescricao: dataInicial,
      numeroProcesso,
      ordanacaoDataPrescricao: ordenacao,
      statusProcesso,
    });
    getAll(valQuery).then((res) => {
      setProcessos(res as ProcessoDTO[]);
    });
  }, [numeroProcesso, ordenacao, statusProcesso, dataInicial, dataFinal]);
  return (
    <div className="p-3 max-w-6xl mx-auto lg:p-5">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Processos</CardTitle>
            <div className="w-full pt-2 flex items-center gap-1.5 flex-wrap">
              <IndicadorPesquisaBadge
                label="Ordenação data prescrição"
                type="ordenador"
                value={
                  TipoOrdenacao[
                    ordenacao.valueOf() as keyof typeof TipoOrdenacao
                  ]
                }
              />
              <IndicadorPesquisaBadge
                label="Status"
                type="filtro"
                value={
                  statusProcesso.length === Object.keys(STATUS_PROCESSO).length
                    ? undefined
                    : (statusProcesso as STATUS_PROCESSO[]).map(
                        (status) =>
                          STATUS_PROCESSO[
                            status.valueOf() as keyof typeof STATUS_PROCESSO
                          ]
                      )
                }
              />
              <IndicadorPesquisaBadge
                label="Data prescrição inicial"
                type="filtro"
                value={dataInicial?.toLocaleDateString()}
              />
              <IndicadorPesquisaBadge
                label="Data prescrição final"
                type="filtro"
                value={dataFinal?.toLocaleDateString()}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-end place-content-between">
              <ProcessoNumeroInput onChange={setNumeroProcesso} />
              <div className="flex gap-1">
                <ProcessoOrdenacaoMenu
                  value={ordenacao}
                  onChange={setOrdenacao}
                />
                <ProcessosFiltoMenu
                  onChangeDataInicial={setDataInicial}
                  valueDataInicial={dataInicial}
                  onChangeDataFinal={setDataFinal}
                  valueDataFinal={dataFinal}
                  onChangeStatus={setStatusProcesso}
                  valueStatus={statusProcesso}
                />
              </div>
            </div>
            <ProcessosTable
              processos={processos}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
