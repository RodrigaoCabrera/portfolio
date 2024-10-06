export default function removeDayInTheDate(start_date: string, end_date?: string) {

  const startJob = start_date.split("-").slice(0, -1).join("-")
  const endJob = end_date?.split("-").slice(0, -1).join("-")
  
  return [startJob, endJob]
}