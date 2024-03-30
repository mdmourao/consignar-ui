
"use client"
import { EntityResponse } from "@/app/_models/Identity";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import axios from "axios";
import useSWR from "swr";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


const columns = [
  {
    key: "nif",
    label: "NIF",
  },
  {
    key: "name",
    label: "Nome",
  }
];



interface EntityList {
  id: number
}

export function EntityList({ id }: EntityList) {

  const LIMIT = 40
  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter()

  const fetcher = (url: string) => axios.get<EntityResponse>(url).then(res => res.data)
  const { data: entities, error } = useSWR<EntityResponse>(`/api/localities/${id}/entities?limit=${LIMIT}&offset=${offset}`, fetcher)

  return (
    <div className="flex flex-col items-center justify-center">
      <Table aria-label="Entities Table">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={entities?.data.data || []}>
          {(item) => (
            <TableRow onClick={(e) => {
              router.push(`/entity/${item.id}`, { scroll: false })
            }} className="borders hover:bg-blue-200 ring-1 hover:cursor-pointer ring-gray-200  py-1 px-1.5  shadow-sm rounded-xl gap-1.5 bg-white " key={item.id}>
              {(columnKey) => <TableCell >{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}


        </TableBody>

      </Table>
      {entities !== undefined && <Pagination onChange={(e) => {
        setCurrentPage(e)
        setOffset((e - 1) * LIMIT)
      }} className="m-5" showControls={true} page={currentPage} total={Math.ceil(entities?.data.count / LIMIT)} />}

    </div>

  )
}
