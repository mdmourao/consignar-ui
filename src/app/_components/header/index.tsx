"use client"
import * as React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react';

import { FaLinkedin } from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GoMoveToStart } from "react-icons/go";
import { useRouter } from "next/navigation";


export function Header() {
    const router = useRouter()

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
            <div className="flex items-center">
                <Button style={{marginRight: 5}} color="default" variant="bordered" onClick={(e) => {
                   router.push(`/`, { scroll: false })
                }} startContent={<GoMoveToStart />}>
                    Início
                </Button>
                <Button color="default" variant="bordered" onClick={(e) => {
                    var win = window.open(`https://www.comparaja.pt/blog/consignacao-irs`, '_blank');
                    win?.focus();
                }} startContent={<IoHelpCircleOutline />}>
                    Como consignar?
                </Button>
            </div>
            <div className="flex items-center justify-end space-x-2">
                <Button color="default" variant="bordered" onClick={(e) => {
                    var win = window.open(`https://www.linkedin.com/in/martimmourao/`, '_blank');
                    win?.focus();
                }} startContent={<FaLinkedin />}>
                    Made By
                </Button>
            </div>
        </header>
    )
}