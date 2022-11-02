export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let returnM = original.apply(this, args);
    if (typeof returnM === "string") {
      console.log(
        `@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`
      );
      returnM = returnM.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return returnM;
  };

  return descriptor;
}
