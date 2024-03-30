"use client"

import { Dispatch, SetStateAction } from "react"



interface SearchFormProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}


export function SearchForm({ search, setSearch }: SearchFormProps) {

    return (
        <form action={() => { }} className="bg-white rounded-xl shadow-lg shadow-slate-400	 h-fit flex flex-row px-1 items-center w-full">
            <input
                defaultValue={""}
                type="text"
                name="prompt"
                placeholder="Pesquisar Localidade"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                className="bg-transparent text-center text-black placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"
            />





        </form>
    )
}
