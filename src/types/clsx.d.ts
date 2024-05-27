declare module "clsx" {
  type ClassValue =
    | string
    | number
    | ClassDictionary
    | ClassArray
    | undefined
    | null
    | boolean;
  interface ClassDictionary {
    [id: string]: any;
  }
  interface ClassArray extends Array<ClassValue> {}
  declare function clsx(...classes: ClassValue[]): string;
  export default clsx;
}
