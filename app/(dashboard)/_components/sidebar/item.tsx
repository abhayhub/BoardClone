"use client"

import Image from "next/image";
import { Hint } from "../hint";
import { useOrganization , useOrganizationList } from "@clerk/nextjs";

//used for styling element dynamically
import { cn } from "@/lib/utils";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
};



export const Item = ({id,name,imageUrl} : ItemProps) => {
    
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if(!setActive) return;

        setActive({organization: id});
    };
    
    console.log("item renderd");
    return(
        <div className="aspec-square relative">
            <Hint 
            label={name}
            side="right"
            align="start"
            sideOffset={18}
            >
            <Image
            src={imageUrl}
            alt={name}
            onClick= {onClick}
            width={24}
            height={10}
    
            className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-100 transition ml-1.5",  isActive && "opacity-100")}
            />
            </Hint>
        </div>
    );

};