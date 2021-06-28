export const enum Severity {
    "CRITICAL",
    "INFO",
    "WARN",
}

export class SlackMessage {
    
    private _title: string;
    private _body: string[];
    private _severity: Severity;
    
    constructor () {
        this._title = "Undefined"
        this._body = new Array<string>();
    }

    get severity() {
        return this._severity
    }

    set severity(severityLevel: Severity) {
        if(severityLevel === null) {
            throw new Error(`Invalid argument ${severityLevel}`)
        }
        this._severity = severityLevel
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get body() {
        return this._body;
    }

    addToBody = (line:string) => {
        this._body.push(line)
    }

    public toString = ():string => {
        return '';
    }
}