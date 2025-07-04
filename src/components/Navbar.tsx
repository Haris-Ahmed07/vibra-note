"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import navItems from "@/data/nav_items.json";

export default function Navbar({className} : {className?: string}) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                {navItems.navItems.map((item, key)=>{
                    return(
                        <MenuItem setActive={setActive} active={active} item={item.title} key={key}>
                        <div className="flex flex-col space-y-4 text-sm">
                            {
                                item.subItems.map((subItem, subKey)=>{
                                    return(
                                        <HoveredLink href={subItem.href} key={subKey}>{subItem.title}</HoveredLink>
                                    )
                                })
                            }
                        </div>
                        </MenuItem>
                    )
                })}
            </Menu>
        </div>
    )
}
