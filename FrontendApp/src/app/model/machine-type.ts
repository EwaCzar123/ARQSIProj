export class MachineType {
    private _id: number;
    
    constructor
    (
        private _machineId: number,
        private _operation: string
    ) {}

    

    get machineId(): number {
        return this._machineId;
    }
    get id(): number {
        return this._id;
    }
    get operation(): string {
        return this._operation;
    }

    static fromJSON(json: any): MachineType {
        const machine = new MachineType(json.machineId, json.operation);
        machine._id = json.id;
        return machine;
    }
    
    toJSON() {
        return {
            id: this._id,
            machineId: this.machineId,
            operation: this.operation
        }
    }
}
