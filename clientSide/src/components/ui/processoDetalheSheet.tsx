import { ProcessoDTO } from "@/utils/Processo.dto";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Processo } from "@/entities/Processo";
import { useState } from "react";
import { getById } from "@/services/processo.service";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProcessoDetalheInfoTab from "@/components/ui/processoDetalheInfoTab";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProcessoTimelineTab } from "@/components/ui/processoTimelineTab";
import { ProcessoReconhecimentoDialogButton } from "./processoReconhecimentoDialogBtn";

interface ProcessoDetalheSheetProps {
  processo: ProcessoDTO;
}

export function ProcessoDetalheSheet({ processo }: ProcessoDetalheSheetProps) {
  const [processoData, setProcesso] = useState<Processo | undefined>(undefined);
  const fetchData = async () => {
    getById(processo.id).then((res) => {
      setProcesso(res);
    });
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} onClick={fetchData}>
          <Eye className="h-4 w-4" />
          <span className="sr-only">Visualizar Processo</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[400px] sm:min-w-[600px]">
        <SheetHeader>
          <SheetTitle>Processo {processo?.numeroProcesso || ""}</SheetTitle>
          <SheetDescription className="sr-only">
            Informações sobre processo
          </SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="informacoes-processo" className="h-full">
          <TabsList className="mt-4">
            <TabsTrigger value="informacoes-processo">Informações</TabsTrigger>
            <TabsTrigger value="historico-processo">Histórico</TabsTrigger>
          </TabsList>
          <TabsContent value="informacoes-processo">
            <ProcessoDetalheInfoTab processo={processoData} />
            <SheetFooter className="gap-4 mt-5 items-center sm:gap-2 sm:mt-4">
              <SheetClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </SheetClose>
              <ProcessoReconhecimentoDialogButton processo={processoData} />
            </SheetFooter>
          </TabsContent>
          <TabsContent value="historico-processo" className="h-full">
            <ScrollArea className="mt-5 h-[90%] pb-4">
              <ProcessoTimelineTab movimentacoes={processoData?.movimentacao} />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
