import React from 'react';
import Image from "next/image";
import { isImage, formatValue } from "@/utils/valueTypes";
import { useVehicleManagerContext } from "@/contexts/VehicleManagerContextProvider";

const DataTable = ({ data }: {data: Array<Vehicle>}): React.JSX.Element => {
    const { selectVehicle } = useVehicleManagerContext();

    const responsiveTableCell = (index: number): string => {
        if (index > 7) {
            return "hidden lg:table-cell";
        } else if (index > 5) {
            return "hidden md:table-cell";
        } else if (index > 3) {
            return "hidden sm:table-cell";
        }
        return "table-cell";
    }

    const getRow = (field: any, key: string, index: number): React.JSX.Element => {
        if ((typeof field === "string") && isImage(field)) {
            return (
                <td key={`tableData-${index}`} className={`whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 ${responsiveTableCell(index)}`}>
                    <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                            <Image className="h-11 w-11 rounded-md" src={field} alt="" height={600} width={400} priority={false} />
                        </div>
                    </div>
                </td>
            )
        } else {
            return (
                <td key={`tableData-${index}`} className={`whitespace-nowrap px-3 py-5 text-sm text-gray-500 ${responsiveTableCell(index)}`}>{formatValue(field, key)}</td>
            )
        }
    }

    return (
            <table className="w-full divide-y divide-gray-300">
              <thead>
                <tr>
                    {data?.length > 0 && Object.keys(data[0]).map((key, index) => {
                        if(key === "uuid") {
                            return null;
                        }
                            return (
                                <th key={index} scope="col" className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 capitalize ${index === 0 && "sm:pl-0"} ${responsiveTableCell(index)}`}>
                                    {key}
                                </th>
                            )
                    })}
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Manage Vehicle</span>
                    </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data?.map((vehicle: Vehicle) => {
                    return (
                        <tr key={vehicle?.uuid}>
                            {data?.length > 0 && Object.keys(vehicle).map((key, index) => key !== "uuid" && getRow(vehicle[key as keyof Vehicle], key, index))}
                            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <span className="text-orange-600 hover:text-orange-900 cursor-pointer" onClick={() => selectVehicle(vehicle.uuid)}>Manage</span>
                            </td>
                        </tr> 
                    )
                })}
              </tbody>
            </table>
    );
};

export default DataTable;

