export class Operation {
    private _id: number;
    
    constructor
    (
        private _duration: string
    ) {}

    get id(): number {
        return this._id;
    }
    get duration(): string {
        return this._duration;
    }

    static fromJSON(json: any): Operation {
        const machine = new Operation(json.duration);
        machine._id = json.id;
        return machine;
    }
    toJSON() {
        return {
            id: this._id,
            duration: this.duration,
        }
    }
}
