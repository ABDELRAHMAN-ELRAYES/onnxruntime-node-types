declare module "onnxruntime-node" {

  export class Tensor {
    constructor(
      type: string,
      data: TypedArray | number[] | boolean[] | string[],
      dims?: number[]
    );
    dims: number[];
    type: string;
    data: TypedArray | number[] | boolean[] | string[];
  }

  export class InferenceSession {
    constructor(path: string);
    inputNames: string[];
    outputNames: string[];

    static create(
      path: string
    ): Promise<InferenceSession>;

    run(
      feeds: { [key: string]: Tensor },
      outputNames?: string[]
    ): Promise<{ [key: string]: Tensor }>;
  }

  // Define supported data types
  export type TypedArray =
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;


    

}
