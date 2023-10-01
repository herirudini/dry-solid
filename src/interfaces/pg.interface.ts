export interface IPilihanPG {
  a:string, 
  b:string, 
  c:string,
  // d:string
}
export interface IPG { 
  pertanyaan: string, 
  pilihan: IPilihanPG, 
  // totalPilihan: number 
}
