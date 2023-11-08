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


/**
 * A custom React hook that manages the state and logic for a vehicle manager.
 * @returns An object containing the state and functions for managing vehicles.
 */
export const useVehicleManager = () => {
  // managerOpen is a boolean that indicates whether the vehicle manager is open or not.
  const [ managerOpen, setManagerOpen ] = React.useState(false);
  // vehicles is an array of vehicles.
  const [ vehicles, setVehicles ] = React.useState<Vehicle[] | never[]>([]);
  // auditHistory is an array of audit history entries.
  const [ auditHistory, setAuditHistory ] = React.useState<AuditHistory[] | never[]>([]);
  // selectedVehicle is a vehicle object that is used to manage a vehicle.
  const [ selectedVehicle, setSelectedVehicle ] = React.useState<Vehicle>(INITIAL_VEHICLE_STATE);
  // creatingNewVehicle is a boolean that indicates whether the selectedVehicle state is a new vehicle or not.
  const [ creatingNewVehicle, setCreatingNewVehicle ] = React.useState(true);
  // changesMade is a boolean that indicates whether the selectedVehicle state has been changed or not.
  const [ changesMade, setChangesMade ] = React.useState(false);

  React.useEffect(() => {
    console.log({ auditHistory });
  }, [ auditHistory ]);

  // createAuditEntry is a function that takes a vehicle and an action and creates a new audit entry.
  const createAuditEntry = (vehicle: Vehicle | null | undefined, action: string) => {
    const newAuditEntry = {
      timestamp: new Date().toISOString(),
      vehicle: vehicle,
      action: action,
      user: "admin"
    }
    setAuditHistory([ ...auditHistory, newAuditEntry ]);
  }

  // clearVehicle is a function that resets the selectedVehicle state to the initial state.
  const clearVehicle = () => {
    setSelectedVehicle(INITIAL_VEHICLE_STATE);
    setCreatingNewVehicle(true);
  }

  // updateVehicleField is a function that takes a field and a value and updates the selectedVehicle state.
  const updateVehicleField = (field: string, value: string | number) => {
    const newVehicle = { ...selectedVehicle, [ field ]: value };
    setChangesMade(true);
    setSelectedVehicle(newVehicle);
  }

  // isFieldValid is a function that takes a field and returns an object containing a boolean and a message indicating validity.
  const isFieldValid = (field: string) => {
    const fieldValidation = VEHICLE_VALIDATION[ field ];
    const fieldValue = selectedVehicle[ field ];
    if (fieldValidation.required && !fieldValue) {
      return { valid: false, message: fieldValidation.message };
    }
    if (fieldValidation.maxLength && fieldValue!.toString().length > fieldValidation.maxLength) {
      return { valid: false, message: fieldValidation.message };;
    }
    return { valid: true, message: "" };
  }

  // selectVehicle is a function that takes a uuid and sets the selectedVehicle state to the vehicle with that uuid.
  const selectVehicle = (uuid: string) => {
    const vehicle = vehicles.find((vehicle) => vehicle.uuid === uuid);
    setSelectedVehicle(vehicle!);
    setCreatingNewVehicle(false);
    setChangesMade(false);
    createAuditEntry(vehicle, "Selected vehicle");
    return setManagerOpen(true);
  }

  // deleteVehicle is a function that takes a uuid and removes the vehicle with that uuid from the vehicles state.
  const deleteVehicle = (uuid: string) => {
    const vehicle = vehicles.find((vehicle) => vehicle.uuid === uuid);
    const newVehicles = vehicles.filter((vehicle) => vehicle.uuid !== uuid);
    setVehicles(newVehicles);
    createAuditEntry(vehicle, "Deleted vehicle");
  }

  // createVehicle is a function that adds the selectedVehicle state to the vehicles array state.
  const createVehicle = () => {
    const newVehicles = [ ...vehicles, selectedVehicle ];
    setVehicles(newVehicles);
    setManagerOpen(false);
    createAuditEntry(selectedVehicle, "Created vehicle");
  }

  // updateVehicle is a function that updates the vehicle (with the same uuid as the selectedVehicle state) in the vehicles state.
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
