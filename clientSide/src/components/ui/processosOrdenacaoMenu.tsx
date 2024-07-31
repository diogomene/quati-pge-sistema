import { ArrowDownUp } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TipoOrdenacao } from "@/utils/TipoOrdenacao";

interface ProcessoOrdenacaoMenuProps {
  value: TipoOrdenacao;
  onChange?: (value: TipoOrdenacao) => void;
}

export function ProcessoOrdenacaoMenu({
  value,
  onChange,
}: ProcessoOrdenacaoMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-1">
          <ArrowDownUp className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Ordenar
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ordenação data prescrição</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(TipoOrdenacao).map(([key, _value]) => (
          <DropdownMenuCheckboxItem
            key={key}
            className="cursor-pointer"
            checked={value == (key)}
            onClick={() => {
              if (onChange) {
                onChange(key as TipoOrdenacao);
              }
            }}
          >
            {_value}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
