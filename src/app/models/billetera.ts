
export interface Billetera{
    monto:number,
    ingreso: Ingreso[];
    egreso: Egreso[];
}

export interface Ingreso {
    id:string;
    categoria:string;
    detalle:string;
    montoIngreso:number;
    fechaIngreso:String;
}

export interface Egreso {
    id:string;
    categoria;
    detalle:string;
    montoEgreso:number;
    fechaEgreso:String;
}