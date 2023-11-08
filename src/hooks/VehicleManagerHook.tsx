import React from "react";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_VEHICLE_STATE = {
  uuid: uuidv4(),
  make: "",
  model: "",
  year: 0,
  price: 0,
  mileage: 0,
  color: "",
  transmission: "",
  location: "",
};

const VEHICLE_VALIDATION: VehicleValidation = {
  make: {
    required: true,
    maxLength: 20,
    message: "Please provide a valid vehicle make.",
  },
  model: {
    required: true,
    maxLength: 20,
    message: "Please provide a valid vehicle model.",
  },
  year: {
    required: true,
    maxLength: 4,
    message: "Please provide a valid vehicle year.",
  },
  price: {
    required: true,
    maxLength: 6,
    message: "Please provide a valid vehicle price.",
  },
  mileage: {
    required: true,
    maxLength: 6,
    message: "Please provide a valid vehicle mileage.",
  },
  color: {
    required: true,
    maxLength: 20,
    message: "Please provide a valid vehicle color.",
  },
  transmission: {
    required: true,
    maxLength: 20,
    message: "Please provide a valid vehicle transmission.",
  },
  location: {
    required: true,
    maxLength: 20,
    message: "Please provide a valid vehicle location.",
  },
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

  const isFieldValid = (field: string) => {
    const fieldValidation = VEHICLE_VALIDATION[ field ];
    const fieldValue = selectedVehicle[ field ];
    if (fieldValidation.required && !fieldValue) {
      return {valid: false, message: fieldValidation.message};
    }
    if (fieldValidation.maxLength && fieldValue!.toString().length > fieldValidation.maxLength) {
      return {valid: false, message: fieldValidation.message};;
    }
    return {valid: true, message: ""};
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

  const createVehicle = () => {
    const newVehicles = [ ...vehicles, selectedVehicle ];
    setVehicles(newVehicles);
    setManagerOpen(false);
    createAuditEntry(selectedVehicle, "Created vehicle");
  }

  const updateVehicle = () => {
    const newVehicles = vehicles.map((v) => {
      if (v.uuid === selectedVehicle.uuid) {
        return selectedVehicle;
      }
      return v;
    });
    setVehicles(newVehicles);
    setManagerOpen(false);
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
    isFieldValid,
    creatingNewVehicle
  };
};
