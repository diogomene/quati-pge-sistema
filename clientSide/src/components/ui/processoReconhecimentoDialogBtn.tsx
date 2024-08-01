import { Processo } from "@/entities/Processo";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Button } from "./button";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { toast } from "sonner";
import { ClipboardCopy, Gavel } from "lucide-react";
import { useState } from "react";
import { gerarTextoReconhecimento } from "@/utils/reconhecimentoProcessoUtil";

interface ProcessoReconhecimentoDialogProps {
  processo: Processo | undefined;
}
export function ProcessoReconhecimentoDialogButton({
  processo,
}: ProcessoReconhecimentoDialogProps) {
  const textoPadraoReconhecimento : string = gerarTextoReconhecimento(processo)
  const [reconhecimento, setReconhecimento] = useState<string>(textoPadraoReconhecimento);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Reconhecer prescrição</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Reconhecimento prescrição</DialogTitle>
          <DialogDescription>
            Confirme o reconhecimento da prescrição
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex place-content-between items-center">
            <Label htmlFor="texto-reconhecimento">
              Texto de reconhecimento
            </Label>
            <Button variant={"ghost"} size={"icon"} onClick={()=>{
              navigator.clipboard.writeText(reconhecimento)
              return toast("Texto copiado", {
                icon: <ClipboardCopy className="h-3;5 w-3.5" />,
                important: true,
                description: `Conteúdo copiado para a área de transferência`,
                dismissible: true,
                position: "bottom-left",
              });
            }}>
                <ClipboardCopy className="h-3;5 w-3.5" />
                <span className="sr-only">Copiar texto</span>
            </Button>
          </div>
          <Textarea
            defaultValue={textoPadraoReconhecimento}
            name="texto-reconhecimento"
            id="texto-reconhecimento"
            className="mt-2 max-h-[300px] min-h-[300px]"
            onChange={ (e) => setReconhecimento(e.target.value)}
          ></Textarea>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              onClick={() => {
                return toast("Prescrição reconhecida", {
                  icon: <Gavel className="h-4 w-4" />,
                  description: `Foi confirmada a prescrição do processo de número ${processo?.numeroProcesso}`,
                  dismissible: true,
                  position: "bottom-left",
                });
              }}
            >
              Confirmar reconhecimento
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
