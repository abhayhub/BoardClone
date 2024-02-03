"use client";

import { OrganizationSwitcher, 
    useOrganization,
    UserButton } from "@clerk/nextjs";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";
export const Navbar = () => {

    const { organization } = useOrganization();

    return(
        <div className="flex items-center gap-x-4 p-5 ">
            <div className="hidden lg:flex lg:flex-1">
                {/* Added a Search Bar */}
                <SearchInput />
            </div>
            <div className="block lg:hidden flex-0.5">

            {/* Organization Switcher that let you select organization */}
            <OrganizationSwitcher
            hidePersonal
            appearance={{
                elements : {
                    rootBox : {
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center",
                        width : "100%",
                        maxWidth: "376px"
                    },
                    organisationSwitcherTrigger : {
                        padding : "2px",
                        width : "100%",
                        borderRadius : "8px",
                        border : "1px solid #E5E7EB",
                        justifyContent : "space-between",
                        backgroundColor : "white"
                    }
                }
            }}
            />
            </div>
            
            {/*only render invite button if org is selected or exist*/}
            {organization && (
            <InviteButton />
            )}
            <UserButton />
        </div>
    )
}