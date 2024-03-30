"use client";
import { EntityList } from "@/app/_components/entity-list";
import { SingleLocalityResponse } from "@/app/_models/Locality";
import axios from "axios";
import useSWR from "swr";


export default function Page({ params }: { params: { id: number } }) {

  const fetcher = (url: string) => axios.get<SingleLocalityResponse>(url).then(res => res.data)


  const { data: locality, error } = useSWR<SingleLocalityResponse>(`/api/localities/${params.id}`, fetcher)

  return (


    <div className="sm:py-[10vh] ">
      <div className="flex flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
          <div className="py-[1vh] flex flex-col items-center justify-center">
            <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out text-center">
              {locality?.data.name}
            </h1>

          </div>
          <EntityList id={params.id}></EntityList>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </div>
  );
}

