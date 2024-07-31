import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ProcessoNumeroInputProps {
    onChange?: (value: number|undefined) => void;
}


export function ProcessoNumeroInput({onChange}: ProcessoNumeroInputProps){

    const [inputValue, setInputValue] = useState<number|undefined>(undefined)
    function handleSearchButton(){
        if(inputValue && inputValue < 0){
            setInputValue(undefined);
        }
        if(onChange){
            onChange(inputValue);
        }
    }    
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value ? parseInt(event.target.value) : undefined;
        setInputValue(newValue);
    }
    return(
        <div className="grid w-full max-w-48 items-center gap-1.5">
        <Label htmlFor="numeroProcesso">Número do processo</Label>
        <div className="flex items-center flex-1 md:grow-0 gap-2">
          <Input
            name="numeroProcesso"
            placeholder="Nº do Processo"
            type="number"
            min={0}
            onChange={handleInputChange}
          ></Input>
          <Button variant={"outline"} size={"icon"} onClick={handleSearchButton}>
            <Search className="h-3.5 w-3.5" />
            <span className="sr-only">Buscar Processo</span>
          </Button>
        </div>
      </div>
    )
}