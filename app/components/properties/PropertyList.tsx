"use client";


import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
}

const PropertyList = () => {

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const tmpProperties = await apiService.get('/api/properties/');

        console.log('tmpProperties', tmpProperties);

        setProperties(tmpProperties);
    };

    useEffect(() => {
        /* apiService.get('/api/properties/'); */

        getProperties();
    }, []);

    console.log('properties', properties);

    return (
        <div>
            {properties ? properties.map((property) => {
                return (
                    <PropertyListItem
                        key={property.id}
                        property={property} 
                    />
                )
            }) : <p>No properties loaded.</p>}
        {}
        </div>
    );
};

export default PropertyList;
