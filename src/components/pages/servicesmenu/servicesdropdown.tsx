"use client";

import React from "react";
import Dropdown from "../../shared/Dropdown";
import { servicesMenuData } from "../../data/servicesMenuData";

const ServicesDropdown = () => {
    return (
        <Dropdown
            label="Services"
            items={servicesMenuData}
            sectionTitle="Services"
            viewAllText="See all services"
            viewAllHref="/services"
            width="w-[780px]"
            columns={2}
        />
    );
};

export default ServicesDropdown;