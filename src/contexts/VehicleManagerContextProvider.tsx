"use client";
import React, { createContext, useContext, useMemo, Dispatch, SetStateAction } from "react";
import { useVehicleManager } from "@/hooks/VehicleManagerHook";

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
  clearVehicle: () => {},
  updateVehicleField: () => {},
  changesMade: false,
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
