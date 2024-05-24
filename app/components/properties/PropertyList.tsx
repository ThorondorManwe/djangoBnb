"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

const PropertyList = () => {

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = "http://localhost:8000/api/properties/";

        await fetch(url, {
        method: "GET",
        })
        .then((response) => response.json())
        .then((json) => {
            console.log('json', json);

            setProperties(json);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    useEffect(() => {
        getProperties();
    }, []);

    console.log('properties', properties);

    return (
        <div>
            {properties.map((property) => {
                return (
                    <PropertyListItem
                        key={property.id}
                        property={property} 
                    />
                )
            })}
        {}
        </div>
    );
};

export default PropertyList;
