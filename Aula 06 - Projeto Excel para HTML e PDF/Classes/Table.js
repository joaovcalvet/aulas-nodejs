export default class Table
{
    constructor(fields)
    {
        this.header = fields.shift();
        this.rows = fields;
    }

    get rowsCount()
    {
        return this.rows.length;
    }

    get columnsCount()
    {
        return this.header.length;
    }
}