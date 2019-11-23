export class Machine {
    
    private _id: number;
    
    constructor
    (
        private _position: string,
        //private _machineType: number, 
    ) {}

    

    get position(): string {
        return this._position;
    }
    get id(): number {
        return this._id;
    }

    static fromJSON(json: any): Machine {
        const machine = new Machine(json.position);
        machine._id = json.id;
        return machine;
    }
}
