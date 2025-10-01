"use client";

import React from "react";
import Dropdown from "../../shared/Dropdown";
import { resourcesMenuData } from "../../data/resourcesMenuData";

const ResourcesDropdown = () => {
    return (
        <Dropdown
            label="Resources"
            items={resourcesMenuData}
            sectionTitle="Resources"
            viewAllText="See all resources"
            viewAllHref="/resources"
            width="w-[780px]"
            columns={2}
        />
    );
};

export default ResourcesDropdown;