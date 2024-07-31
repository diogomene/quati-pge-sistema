import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { STATUS_PROCESSO } from "@/entities/Processo";
import { Separator } from "@/components/ui/separator";
import { DatePicker } from "@/components/ui/datePicker";

interface ProcessosFiltroMenuProps {
    onChangeDataInicial?: (date: Date|undefined) => void;
    valueDataInicial?: Date|undefined;
    onChangeDataFinal?: (date: Date|undefined) => void;
    valueDataFinal?: Date|undefined;
    onChangeStatus?: (status: STATUS_PROCESSO[]) => void;
    valueStatus?: STATUS_PROCESSO[];
}


export function ProcessosFiltoMenu(props : ProcessosFiltroMenuProps){
    return(
        <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-1">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Filtrar status
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-xl">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Status processo</h4>
            <p className="text-sm text-muted-foreground">
              Selecione os status de processos que deseja visualizar
            </p>
            
            <ToggleGroup type="multiple" variant={"outline"} className="flex flex-wrap" value={props.valueStatus} onValueChange={(value)=>{
                if(props.onChangeStatus){
                    props.onChangeStatus(value.map((val) => val as STATUS_PROCESSO));
                }
            }}>
              {
                Object.entries(STATUS_PROCESSO).map(([key, value]) => (
                  <ToggleGroupItem className="h-7 text-xs p-2" value={key} aria-label={value} key={key}>
                      {value}
                  </ToggleGroupItem>
                ))
              }
            </ToggleGroup>
          </div>
          <Separator className="my-4"/>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Data prescrição</h4>
            <p className="text-sm text-muted-foreground">
              Selecione o intervalo de datas de prescrição desejado
            </p>
            
            <div className="flex gap-4">
              <DatePicker label="Data inicial" onChange={props.onChangeDataInicial} value={props.valueDataInicial}></DatePicker>
              <DatePicker label="Data final" onChange={props.onChangeDataFinal} value={props.valueDataFinal}></DatePicker>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
}