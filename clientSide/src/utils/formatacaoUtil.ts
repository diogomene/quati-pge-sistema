const locale = "pt-BR"; // Brazilian Portuguese locale
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "UTC",
};

export function formataData(data: Date | undefined): string {
  if (!data) return "";
  return data.toLocaleDateString(locale, options);
}

export function formatarValorMonetario(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }