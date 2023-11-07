"use client";
import React from 'react';
import DataTable from "@/components/elements/DataTable";
import VehicleManagerPanel from "@/components/elements/VehicleManagerPanel";
import { useVehicleManagerContext } from "@/contexts/VehicleManagerContextProvider";
import Link from "next/link";

const Vehicles = ({ data = []}: { data: Array<Vehicle>}) => {
    const { setManagerOpen, setVehicles, vehicles, selectedVehicle } = useVehicleManagerContext();

    React.useEffect(() => {
        setVehicles(data);
    }, [data, setVehicles]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Vehicles</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the vehicles in the system. Click manage to delete or update the details of a vehicle.
                    </p>
                </div>
                <div className="flex flex-wrap mt-4 sm:ml-16 sm:mt-0">
                    <button
                        type="button"
                        className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2"
                        onClick={() => setManagerOpen(true)}
                    >
                        Add Vehicle
                    </button>
                    <Link href="/"
                        type="button"
                        className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mb-2"
                    >
                        Back
                    </Link>
                </div>
            </div>
            <div className="mt-8 flow-root">  
                <VehicleManagerPanel item={selectedVehicle} />
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <DataTable data={vehicles} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;