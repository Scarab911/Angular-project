export class Guest {
    public name: string;
    private _points: number = 0;

    public constructor(name: string){
        this.name = name;
    }

    public add(): void {
      this._points++;
    }
    public substract(): void {
      this._points--;
    }

    public get points(){
        return this._points;
    }
}
