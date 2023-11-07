import React from "react";
import { v4 as uuidv4 } from "uuid";

const INITIAL_VEHICLE_STATE = {
  uuid: uuidv4(),
  make: "",
  model: "",
  year: 0,
  price: 0,
  mileage: 0,
  color: "",
  transmission: "",
  location: "",
  image: "",
};

export const useVehicleManager = () => {
  const [ managerOpen, setManagerOpen ] = React.useState(false);
  const [ vehicles, setVehicles ] = React.useState<Vehicle[] | never[]>([]);
  const [ auditHistory, setAuditHistory ] = React.useState<AuditHistory[] | never[]>([]);
  const [ selectedVehicle, setSelectedVehicle ] = React.useState<Vehicle>(INITIAL_VEHICLE_STATE);
  const [ creatingNewVehicle, setCreatingNewVehicle ] = React.useState(true);
  const [ changesMade, setChangesMade ] = React.useState(false);

  React.useEffect(() => {
    console.log({ auditHistory });
  }
    , [ auditHistory ]);

  const createAuditEntry = (vehicle: Vehicle | null | undefined, action: string) => {
    const newAuditEntry = {
      timestamp: new Date().toISOString(),
      vehicle: vehicle,
      action: action,
      user: "admin"
    }
    setAuditHistory([ ...auditHistory, newAuditEntry ]);
  }

  const clearVehicle = () => {
    setSelectedVehicle(INITIAL_VEHICLE_STATE);
    setCreatingNewVehicle(true);
  }

  const updateVehicleField = (field: string, value: string | number) => {
    const newVehicle = { ...selectedVehicle, [ field ]: value };
    setChangesMade(true);
    setSelectedVehicle(newVehicle);
  }

  const selectVehicle = (uuid: string) => {
    const vehicle = vehicles.find((vehicle) => vehicle.uuid === uuid);
    setSelectedVehicle(vehicle!);
    setCreatingNewVehicle(false);
    createAuditEntry(vehicle, "Selected vehicle");
    return setManagerOpen(true);
  }

  const deleteVehicle = (uuid: string) => {
    const vehicle = vehicles.find((vehicle) => vehicle.uuid === uuid);
    const newVehicles = vehicles.filter((vehicle) => vehicle.uuid !== uuid);
    setVehicles(newVehicles);
    createAuditEntry(vehicle, "Deleted vehicle");
  }

  const createVehicle = (vehicle: Vehicle) => {
    const newVehicles = [ ...vehicles, vehicle ];
    setVehicles(newVehicles);
    createAuditEntry(vehicle, "Created vehicle");
  }

  const updateVehicle = () => {
    const newVehicles = vehicles.map((v) => {
      if (v.uuid === selectedVehicle.uuid) {
        return selectedVehicle;
      }
      return v;
    });
    setVehicles(newVehicles);
    createAuditEntry(selectedVehicle, "Updated vehicle");
  }

  return {
    managerOpen,
    setManagerOpen,
    auditHistory,
    setAuditHistory,
    vehicles,
    setVehicles,
    createVehicle,
    selectVehicle,
    selectedVehicle,
    updateVehicle,
    deleteVehicle,
    clearVehicle,
    updateVehicleField,
    changesMade,
  };
};
