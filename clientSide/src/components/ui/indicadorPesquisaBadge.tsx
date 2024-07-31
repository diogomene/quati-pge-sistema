import { Badge } from "@/components/ui/badge";
import { ArrowDownUp } from "lucide-react";
import { ListFilter } from "lucide-react";

interface IndicadorPesquisaBadgeProps {
  label: string;
  type: "ordenador" | "filtro";
  value?: string | string[] | undefined;
}

export function IndicadorPesquisaBadge(props: IndicadorPesquisaBadgeProps) {
  if (
    !props.value ||
    (props.value instanceof Array && props.value.length === 0)
  ) {
    return <></>;
  }
  return (
    <Badge variant={"outline"}>
      {props.type === "ordenador" ? (
        <ArrowDownUp className="w-3 h-3 min-w-3 min-h-3 mr-1.5 sm:mr-2" />
      ) : (
        <ListFilter className="w-3 h-3 min-w-3 min-h-3 mr-1.5 sm:mr-2" />
      )}

      {props.label}:{" "}
      {props.value instanceof Array ? props.value.join(", ") : props.value}
    </Badge>
  );
}
