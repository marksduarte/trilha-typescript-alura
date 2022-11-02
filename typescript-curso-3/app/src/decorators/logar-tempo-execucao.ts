export function logarTempoExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const retornoMetodo = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo se execução: ${(t2 - t1) / 1000} segundos.`
      );
      retornoMetodo;
    };
    return descriptor;
  };
}
