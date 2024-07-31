import { format } from "date-fns"
import {ptBR} from 'date-fns/locale'
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
interface DatePickerProps {
  label: string
  value?: Date|undefined
  onChange?: (date: Date|undefined) => void
}

export function DatePicker({label, value, onChange}: DatePickerProps) {
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[220px] justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP", {locale: ptBR}) : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            if(onChange){
              onChange(date)
            }
          }}
          locale={ptBR}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}