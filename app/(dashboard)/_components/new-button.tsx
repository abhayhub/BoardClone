"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger, } from "@radix-ui/react-dialog";

export const NewButton = () => {
    return(
        <Dialog>
            <DialogTrigger>
                <div className="aspect-square">
                    <button className="bg-white/25 h-full w-full rounded-md
                    flex items-center justify-center opacity-60 hover:opacity-100 transition">
                        <Plus className="text-white"/>
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px] ml-64 mt-10">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}