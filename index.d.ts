type Vehicle = {
    uuid: string,
    make: string,
    model: string,
    year: number,
    price: number,
    mileage: number,
    color: string,
    fuel_type: string,
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