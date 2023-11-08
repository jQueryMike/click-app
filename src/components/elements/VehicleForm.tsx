import React from "react";
import * as Form from "@radix-ui/react-form";
import { useVehicleManagerContext } from "@/contexts/VehicleManagerContextProvider";

const VehicleForm = ({ confirmDelete = () => { } }: { confirmDelete: () => void }) => {
    const {
        selectedVehicle,
        updateVehicleField,
        updateVehicle,
        createVehicle,
        setManagerOpen,
        changesMade,
        creatingNewVehicle
    } = useVehicleManagerContext();

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (creatingNewVehicle) {
            createVehicle();
        } else {
            updateVehicle();
        }
    }
    return (
        <Form.Root className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6" onSubmit={(e) => submitForm(e)}>
            <Form.Field name="uuid">
                <Form.Label className="block text-sm font-medium leading-6 text-gray-900">Id</Form.Label>
                <div className="mt-2">
                    <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full" >
                        <input
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-100"
                            type="text"
                            disabled
                            required
                            value={selectedVehicle?.uuid} />
                    </Form.Control>
                </div>
            </Form.Field>

            {Object.keys(selectedVehicle!).map((key) => {
                return (key !== "uuid" &&
                    <Form.Field className="FormField" name={key} key={key}>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                            <Form.Label className="block text-sm font-medium leading-6 text-gray-900 capitalize">{key}</Form.Label>
                            <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="valueMissing">
                                Please enter the vehicle {key}
                            </Form.Message>
                            <Form.Message className="flex select-none items-center pl-3 text-gray-500 sm:text-sm" match="typeMismatch">
                                Please provide a valid vehicle {key}
                            </Form.Message>
                        </div>
                        <Form.Control asChild className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                            <input
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                type="text"
                                required
                                value={selectedVehicle![ key ]}
                                onChange={(e) => updateVehicleField(key, e.target.value)} />
                        </Form.Control>
                    </Form.Field>
                )
            })}

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
                        aria-disabled={!changesMade}
                        type="submit"
                        className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2 disabled:bg-gray-00"
                        disabled={!changesMade}

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