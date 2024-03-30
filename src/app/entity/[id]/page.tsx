"use client";
import { EntityList } from "@/app/_components/entity-list";
import { SingleEntityResponse } from "@/app/_models/Identity";
import axios from "axios";
import useSWR from "swr";
import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";


export default function EntityPage({ params }: { params: { id: number } }) {
  const fetcher = (url: string) => axios.get<SingleEntityResponse>(url).then(res => res.data)


  const { data: entity, error } = useSWR<SingleEntityResponse>(`/api/entities/${params.id}`, fetcher)

  return (
    <div className="sm:py-[10vh] ">
      <div className="flex flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
          <>
            <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
              <div className="flex display:  inline-block">
                <h1 onClick={(e) => {
                  navigator.clipboard.writeText(entity?.data.nif + "")
                }} className="font-medium hover:cursor-pointer text-6xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
                  {entity?.data.nif}
                </h1>
                <MdOutlineContentCopy onClick={(e) => {
                  navigator.clipboard.writeText(entity?.data.nif + "")
                }} className="text-6xl text-black mx-3 hover:cursor-pointer	" />
              </div>

              <p className="text-gray-600 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out text-center	">
                {entity?.data.name} - {entity?.data.locality.name}
              </p>
              <div className="flex gap-4 items-center">

                <Button color="default" variant="bordered" onClick={(e) => {
                  var win = window.open(`https://www.google.com/search?q=${entity?.data.nif}`, '_blank');
                  win?.focus();
                }} startContent={<FaGoogle />}>
                  Pesquisar NIF
                </Button>
                <Button color="default" variant="bordered" onClick={(e) => {
                  var win = window.open(`https://www.google.com/search?q=${entity?.data.name}`, '_blank');
                  win?.focus();
                }} startContent={<FaGoogle />}>
                  Pesquisar Instituição
                </Button>
                <Button color="default" variant="bordered" onClick={(e) => {
                  var win = window.open(`https://www.einforma.pt/servlet/app/portal/ENTP/prod/ETIQUETA_EMPRESA/nif/${entity?.data.nif}`, '_blank');
                  win?.focus();
                }} startContent={<IoIosInformationCircleOutline />}>
                  Pesquisar E Informa
                </Button>
              </div>
            </div>
          </>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </div>
  );
}

