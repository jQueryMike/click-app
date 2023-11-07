import React from "react";
import { promises as fs } from 'fs';
import Vehicles from "@/components/sections/Vehicles";

export default async function Home() {
  const vehicles = JSON.parse(await fs.readFile(process.cwd() + '/public/vehicles.json', 'utf8')) ;

  return (
    <Vehicles data={vehicles.cars} />
  )
}
