import { Locality } from "@/app/_models/Locality"
import { useRouter } from 'next/navigation'




interface LocalityCardProps {
    locality: Locality
}

export function LocalityCard({ locality }: LocalityCardProps) {
    const router = useRouter()


    return (
        <div
            className="borders hover:bg-blue-200 ring-1 hover:cursor-pointer ring-gray-200 flex flex-row flex-nowrap py-1 px-1.5 items-center shadow-sm rounded-xl gap-1.5 bg-white w-full relative group text-center	items-center justify-center"
            onClick={() => {
                router.push(`/locality/${locality.id}`, { scroll: false })
            }}
        >
            <p className="font-mono text-sm truncate " title={locality.name}>
                {locality.name}
            </p>
        </div>
    )
}
