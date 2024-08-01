import { Movimentacao } from "@/entities/Movimentacao";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "./timeline";
import { formataData } from "@/utils/formatacaoUtil";

interface ProcessoTimelineTabProps {
  movimentacoes: Movimentacao[] | undefined;
}
export function ProcessoTimelineTab({
  movimentacoes,
}: ProcessoTimelineTabProps) {
  return (
    <Timeline positions={"center"}>
      {movimentacoes?.map((movimentacao, index) => {
        const lado: "left" | "right" | null | undefined =
          index & 1 ? "left" : "right";
        const lado2: "left" | "right" | null | undefined =
          index & 1 ? "right" : "left";
        return (
          <TimelineItem key={index}>
            <TimelineHeading side={lado}>
              {formataData(movimentacao?.data)}
            </TimelineHeading>
            <TimelineHeading side={lado2} variant={"secondary"} className="text-xs">
              {movimentacao?.tipo}
            </TimelineHeading>
            <TimelineContent side={lado}>
              {movimentacao.descricao}
            </TimelineContent>
            <TimelineDot status="default" />
            <TimelineLine />
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
