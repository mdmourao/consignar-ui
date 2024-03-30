"use client"
import { useState } from "react"
import { LocalityGrid } from "../locality-grid"
import { SearchForm } from "../search-form"
import { Button } from "@nextui-org/react"
import { IoHelpCircleOutline } from "react-icons/io5";


export const MainPage = () => {
    const [search, setSearch] = useState("")
    return (
        <>
            <div className="py-[5vh] sm:py-[7vh] flex flex-col items-center justify-center">
                <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
                    Consignação IRS 0,5%
                </h1>

                <p className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
                    1941 Localidades e 5036 Instuições
                </p>

                

                <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
                    
                    <SearchForm search={search} setSearch={setSearch} />
                </div>
               

                <LocalityGrid search={search}></LocalityGrid>

            </div>


        </>
    )
}
