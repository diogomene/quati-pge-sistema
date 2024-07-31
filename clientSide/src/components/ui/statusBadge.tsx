import { STATUS_PROCESSO } from "@/entities/Processo";
import {Badge} from "@/components/ui/badge"
function getStatusColor(status: STATUS_PROCESSO) : string {
    switch (status) {
        case STATUS_PROCESSO.EM_EXECUCAO:
            return "bg-blue-800 hover:bg-blue-700";
        case STATUS_PROCESSO.PRESTES_A_PRESCREVER:
            return "bg-orange-600 hover:bg-orange-500";
        case STATUS_PROCESSO.PRESCRITO_RECONHECIDO:
            return "bg-green-800 hover:bg-green-700";
        case STATUS_PROCESSO.PRESCRITO_NAO_RECONHECIDO:
            return "bg-red-800 hover:bg-red-700";
    }
}

export function StatusBadge({ status } : {status:STATUS_PROCESSO}) {
return (
    <Badge className={getStatusColor(status)}>
            {status.valueOf()}
    </Badge>
);
}