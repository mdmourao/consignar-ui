'use client'
import { Locality, LocalityResponse } from '@/app/_models/Locality';
import axios from 'axios';
import useSWR from 'swr'
import { LocalityCard } from '../locality-card';

interface LocalityGridProps {
  search: string
}


export function LocalityGrid({ search }: LocalityGridProps) {

  const fetcher = (url: string) => axios.get<LocalityResponse>(url).then(res => res.data)


  const { data: localities, error } = useSWR<LocalityResponse>(`/api/localities?limit=999&search=${search || ""}`, fetcher)


  return (
    <div style={{ marginTop: 50 }} className="animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-stretch w-full ">
        {localities !== undefined && localities.data.map(element => {
          return <LocalityCard key={element.id} locality={element}></LocalityCard>
        })}
        {search === "" && <LocalityCard locality={{ id: 0, name: "(...)" }}></LocalityCard>}
      </div>
    </div>
  )
}
