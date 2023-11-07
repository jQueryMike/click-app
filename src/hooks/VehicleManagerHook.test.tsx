import { renderHook } from '@testing-library/react'
import { useVehicleManager } from "./VehicleManagerHook";

let renderedHook: any;

describe("VehicleManagerHook", () => {
    beforeEach(() => {
        renderedHook = renderHook(() => useVehicleManager());
      });

    it("should return a managerOpen state", () => {
        const { managerOpen } = renderedHook.result.current;
        expect(managerOpen).toBe(false);
    });

    it("should return a setManagerOpen function", () => {
        const { setManagerOpen } = renderedHook.result.current;
        expect(setManagerOpen).toBeInstanceOf(Function);
    });

    it("should return an auditHistory state", () => {
        const { auditHistory } = renderedHook.result.current;
        expect(auditHistory).toEqual([]);
    });

    it("should return a setAuditHistory function", () => {
        const { setAuditHistory } = renderedHook.result.current;
        expect(setAuditHistory).toBeInstanceOf(Function);
    });

    it("should return a vehicles state", () => {
        const { vehicles } = renderedHook.result.current;
        expect(vehicles).toEqual([]);
    });

    it("should return a setVehicles function", () => {
        const { setVehicles } = renderedHook.result.current;
        expect(setVehicles).toBeInstanceOf(Function);
    });

    it("should return a selectedVehicle state", () => {
        const { selectedVehicle } = renderedHook.result.current;
        expect(selectedVehicle).toBe(null);
    });

    it("should return a selectVehicle function", () => {
        const { selectVehicle } = renderedHook.result.current;
        expect(selectVehicle).toBeInstanceOf(Function);
    });

    it("should return a deleteVehicle function", () => {
        const { deleteVehicle } = renderedHook.result.current;
        expect(deleteVehicle).toBeInstanceOf(Function);
    });

    it("should return a createVehicle function", () => {
        const { createVehicle } = renderedHook.result.current;
        expect(createVehicle).toBeInstanceOf(Function);
    });

    it("should return an updateVehicle function", () => {
        const { updateVehicle } = renderedHook.result.current;
        expect(updateVehicle).toBeInstanceOf(Function);
    });
});