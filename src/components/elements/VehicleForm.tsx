import React from "react";
import * as Form from "@radix-ui/react-form";
import { useVehicleManagerContext } from "@/contexts/VehicleManagerContextProvider";

const VehicleForm = ({ confirmDelete = () => {}}: {confirmDelete: () => void}) => {
    const { selectedVehicle, updateVehicleField, updateVehicle, setManagerOpen } = useVehicleManagerContext();
    return (
        <Form.Root className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6">
            <Form.Field name="uuid">
                <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Id</Form.Label>
                <div className="mt-2">
                    <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full" >
                        <input
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-100"
                            type="text"
                            disabled
                            required
                            value={selectedVehicle?.uuid} onChange={(e) => updateVehicleField("make", e.target.value)} />
                    </Form.Control>
                </div>
            </Form.Field>

            <Form.Field className="FormField" name="make">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Make</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle make
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle make
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.make} onChange={(e) => updateVehicleField("make", e.target.value)} />
                </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="model">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Model</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle model
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle model
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.model} onChange={(e) => updateVehicleField("model", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="year">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Year</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle year
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle year
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.year} onChange={(e) => updateVehicleField("year", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="price">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Price</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle price
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle price
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.price} onChange={(e) => updateVehicleField("price", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="mileage">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Mileage</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle mileage
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle mileage
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.mileage} onChange={(e) => updateVehicleField("mileage", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="color">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Color</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle color
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle color
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.color} onChange={(e) => updateVehicleField("color", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="transmission">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Transmission</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle transmission
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle transmission
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.transmission} onChange={(e) => updateVehicleField("transmission", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="location">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Location</Form.Label>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                        Please enter the vehicle location
                    </Form.Message>
                    <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                        Please provide a valid vehicle location
                    </Form.Message>
                </div>
                <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" required value={selectedVehicle?.location} onChange={(e) => updateVehicleField("location", e.target.value)} />
                </Form.Control>
            </Form.Field>

            <div className="fixed bottom-0 flex">
                <button
                    type="button"
                    className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2"
                    onClick={confirmDelete}
                >
                    Delete
                </button>
                <Form.Submit asChild>
                    <button
                        aria-disabled="true"
                        type="button"
                        className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2 disabled"
                        onClick={updateVehicle}
                    >
                        Save Changes
                    </button>
                </Form.Submit>
                <button
                    type="button"
                    className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2"
                    onClick={() => setManagerOpen(false)}
                >
                    Cancel
                </button>
            </div>


        </Form.Root>
    );
};

export default VehicleForm;