export type SignalHandler<S extends { emit: Function }> = S extends { emit: infer E } ? E : never;
