type Vehicle = {
    [key: string]: string | number | undefined;
    uuid: string,
    make: string,
    model: string,
    year: number,
    price: number,
    mileage: number,
    color: string,
    transmission: string,
    location: string,
}

interface Vehicle {
    [key: string]: string | number | undefined;
    // other properties here
  }

type AuditHistory = {
    timestamp: string,
    vehicle: Vehicle | null | undefined,
    action: string,
    user: string
}

type Props = {
    children: React.ReactNode
}

interface IVehicleManagerContext {
    vehicles: Vehicle[] | never[],
    setVehicles: Dispatch<SetStateAction<Vehicle[] | never[]>>,
    managerOpen: boolean,
    setManagerOpen: Dispatch<SetStateAction<boolean>>,
    auditHistory: AuditHistory[] | never[],
    setAuditHistory: Dispatch<SetStateAction<AuditHistory[] | never[]>>,
    selectedVehicle: Vehicle | null | undefined,
    createVehicle: () => void,
    selectVehicle: (uuid: string) => void,
    deleteVehicle: (uuid: string) => void,
    updateVehicle: () => void,
    clearVehicle: () => void,
    updateVehicleField: (field: string, value: string | number) => void,
    changesMade: boolean,
    isFieldValid: (field: string) => { valid: boolean, message: string },
    creatingNewVehicle: boolean,
}

interface Validation {
    required: boolean;
    maxLength: number;
    message: string;
}

interface VehicleValidation {
    [ key: string ]: Validation;
}