export class Blog {
    private _id: string;
    private _title: string;
    private _createdBy: string;
    private _body: string;
    private _description: string;
    private _createdAt: Date;

    get id(): string {
        return this._id;
    }


    get title(): string {
        return this._title;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    get body(): string {
        return this._body;
    }

    get description(): string {
        return this._description;
    }

    get createdAt(): Date {
        return this._createdAt;
    }
}
