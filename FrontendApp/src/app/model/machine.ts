import { MachineType } from './machine-type';

export class Machine {
    
    private _id: number;
    
    constructor
    (
        private _position: string,
        private _machineType: MachineType,
        //private _machineType: number, 
    ) {}

    

    get machineType(): MachineType {
        return this._machineType;
    }
    get position(): string {
        return this._position;
    }
    get id(): number {
        return this._id;
    }

    static fromJSON(json: any): Machine {
        const machine = new Machine(json.position, json.machineType.map(MachineType.fromJSON));
        machine._id = json.id;
        return machine;
    }
    toJSON(json: any) {
        return {
            id: this._id,
            machineType: this.machineType.toJSON,
            position: this.position
        }
    }
}
