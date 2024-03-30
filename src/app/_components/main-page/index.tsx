"use client"
import { useState } from "react"
import { LocalityGrid } from "../locality-grid"
import { SearchForm } from "../search-form"
import { Button } from "@nextui-org/react"
import { IoHelpCircleOutline } from "react-icons/io5";
import { GiCardRandom } from "react-icons/gi";
import axios from "axios"
import { Entity } from "@/app/_models/Identity"
import { useRouter } from "next/navigation"


export const MainPage = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()

    return (
        <>
            <div className="py-[5vh] sm:py-[7vh] flex flex-col items-center justify-center place-content-center	text-center">
                <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out text-center">
                    Consignação IRS 0,5%
                </h1>

                <div>
                    <p className="text-gray-600 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out text-center">
                        1941 Localidades e 5036 Instuições

                    </p>
                    <p className="text-gray-400  mb-12  text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out text-center">
                        IRS 2023 (a entregar em 2024)
                    </p>
                </div>



                <Button className="mb-6 " color="default" variant="bordered" onClick={(e) => {
                    axios("/api/entities/random").then((r) => {
                        router.push(`/entity/${(r.data.data as Entity).id}`, { scroll: false })
                    })
                }} startContent={<GiCardRandom />}>
                    Entidade Aleatória
                </Button>

                <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">

                    <SearchForm search={search} setSearch={setSearch} />
                </div>


                <LocalityGrid search={search}></LocalityGrid>

            </div>


        </>
    )
}
