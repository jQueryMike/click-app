import React from "react";

export const useVehicleManager = () => {
  const [managerOpen, setManagerOpen] = React.useState(false);
  const [vehicles, setVehicles] = React.useState<Vehicle[] | never[]>([]);
  const [auditHistory, setAuditHistory] = React.useState<AuditHistory[] | never[]>([]);
  const [selectedVehicle, setSelectedVehicle] = React.useState<Vehicle | null | undefined>(null);

  React.useEffect(() => {
    console.log({auditHistory});
  }
  , [auditHistory]);

  const createAuditEntry = (vehicle: Vehicle | null | undefined, action: string) => {
    const newAuditEntry = {
      timestamp: new Date().toISOString(),
      vehicle: vehicle,
      action: action,
      user: "admin"
    }
    setAuditHistory([...auditHistory, newAuditEntry]);
  }

  const selectVehicle = (uuid: string) => {
    const vehicle = vehicles.find((vehicle) => vehicle.uuid === uuid);
    setSelectedVehicle(vehicle);
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
    const newVehicles = [...vehicles, vehicle];
    setVehicles(newVehicles);
    createAuditEntry(vehicle, "Created vehicle");
  }

  const updateVehicle = (vehicle: Vehicle) => {
    const newVehicles = vehicles.map((v) => {
      if (v.uuid === vehicle.uuid) {
        return vehicle;
      }
      return v;
    });
    setVehicles(newVehicles);
    createAuditEntry(vehicle, "Updated vehicle");
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
    deleteVehicle
  };
};
