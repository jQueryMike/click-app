"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useVehicleManagerContext } from "@/contexts/VehicleManagerContextProvider";
import ConfirmationDialog from "./ConfirmationDialog";
import VehicleForm from "./VehicleForm";

const VehicleManagerPanel = (): React.JSX.Element => {
  const { managerOpen, setManagerOpen, deleteVehicle, selectedVehicle, updateVehicle } = useVehicleManagerContext();
  const [ confirmDelete, setConfirmDelete ] = React.useState(false);

  const confirmDeleteVehicle = () => {
    deleteVehicle(selectedVehicle!.uuid)
    setConfirmDelete(false);
    setManagerOpen(false);
  }

  return (
    <>
      <Transition.Root show={managerOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setManagerOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setManagerOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      className="h-8 w-auto"
                      src="/small_logo.jpg"
                      alt="Click App"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    {/* <h2 className="text-2xl font-bold text-gray-900">{item?.make} {item?.model}</h2>
                    <p className="text-sm text-gray-500">{item?.year}</p> */}
                    <VehicleForm confirmDelete={() => setConfirmDelete(true)} />
                  </div>
                  {/* <div className="fixed bottom-0 flex">
                    <button
                      type="button"
                      className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2"
                      onClick={() => setConfirmDelete(true)}
                    >
                      Delete
                    </button>
                    <button
                      aria-disabled="true"
                      type="button"
                      className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2 disabled"
                      onClick={updateVehicle}
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mr-2 mb-2"
                      onClick={() => setManagerOpen(false)}
                    >
                      Cancel
                    </button>
                  </div> */}
                </div>
                <ConfirmationDialog
                  title="Delete Vehicle"
                  message="Are you sure you want to delete this vehicle?"
                  dialogOpen={confirmDelete}
                  closeDialog={() => setConfirmDelete(false)}
                  confirmAction={confirmDeleteVehicle}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

    </>
  );
};

export default VehicleManagerPanel;