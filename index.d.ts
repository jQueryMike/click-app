type Vehicle = {
    uuid: string,
    make: string,
    model: string,
    year: number,
    price: number,
    mileage: number,
    color: string,
    transmission: string,
    location: string,
    image: string
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
    createVehicle: (vehicle: Vehicle) => void,
    selectVehicle: (uuid: string) => void,
    deleteVehicle: (uuid: string) => void,
    updateVehicle: () => void,
    clearVehicle: () => void,
    updateVehicleField: (field: string, value: string | number) => void,
    changesMade: boolean,
}