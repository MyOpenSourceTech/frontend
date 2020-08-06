export class Pageable {
    private readonly pageNumber: number;
    private readonly pageSize: number;

    constructor(pageNumber: number, pageSize: number) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }

    public toString(): string {
        return `page=${this.pageNumber}&size=${this.pageSize}`;
    }
}
