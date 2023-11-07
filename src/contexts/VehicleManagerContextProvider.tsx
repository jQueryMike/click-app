"use client";
import React, { createContext, useContext, useMemo, Dispatch, SetStateAction } from "react";
import { useVehicleManager } from "@/hooks/VehicleManagerHook";

interface IVehicleManagerContext {
  vehicles: Vehicle[] | never[],
  setVehicles: Dispatch<SetStateAction<Vehicle[] | never[]>>,
  managerOpen: boolean,
  setManagerOpen: Dispatch<SetStateAction<boolean>>,
  auditHistory : AuditHistory[] | never[], 
  setAuditHistory: Dispatch<SetStateAction<AuditHistory[] | never[]>>,
  selectedVehicle: Vehicle | null | undefined,
  createVehicle: (vehicle: Vehicle) => void,
  selectVehicle: (uuid: string) => void,
  deleteVehicle: (uuid: string) => void,
  updateVehicle: (vehicle: Vehicle) => void,
}

export const VehicleManagerContext = createContext<IVehicleManagerContext>({
  vehicles: [],
  setVehicles: () => {},
  managerOpen: false,
  setManagerOpen: () => {},
  auditHistory: [],
  setAuditHistory: () => {},
  selectedVehicle: null,
  createVehicle: () => {},
  selectVehicle: () => {},
  deleteVehicle: () => {},
  updateVehicle: () => {},
});

export const VehicleManagerContextProvider = ({ children } : Props) => {
  const VehicleManager = useVehicleManager();

  const vehicleManagerContext = useMemo(
    () => ({
      ...VehicleManager,
    }),
    [VehicleManager]
  );

  return (
    <VehicleManagerContext.Provider value={vehicleManagerContext}>
      {children}
    </VehicleManagerContext.Provider>
  );
};

export const useVehicleManagerContext = () => {
  return useContext(VehicleManagerContext);
};
