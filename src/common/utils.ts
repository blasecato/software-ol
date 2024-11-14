export function relativeTime(dateStr: string) {
  const [day, month, year, hours, minutes, seconds] = dateStr.split(/[/ :]/).map(Number);
  const date: any = new Date(year, month - 1, day, hours, minutes, seconds);
  const now: any = new Date();
  const difference = now - date;

  const totalSeconds = Math.floor(difference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  if (totalDays > 0) {
    return `hace ${totalDays} ${totalDays === 1 ? 'dia' : 'dias'}`;
  } else if (totalHours > 0) {
    return `hace ${totalHours} ${totalHours === 1 ? 'hora' : 'horas'}`;
  } else if (totalMinutes > 0) {
    return `hace ${totalMinutes} ${totalMinutes === 1 ? 'minuto' : 'minutos'}`;
  } else {
    return `hace ${totalSeconds} ${totalSeconds === 1 ? 'segundo' : 'segundos'}`;
  }
}

export function formatDate(fechaStr: string) {
  const [day, month, year] = fechaStr.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  const options: any = { year: 'numeric', month: 'short', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate.replace(/ /g, '-').replace(',', '');
}