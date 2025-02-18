export default class Table
{
    constructor(fields)
    {
        this.header = fields.shift();
        this.rows = fields;
    }
}