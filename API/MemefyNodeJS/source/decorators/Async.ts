import { Request, Response, NextFunction } from 'express';

export function Async() {
  return (
    _target: Object,
    _key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original: Function = descriptor.value;

    descriptor.value = async function (
      ...args: [Request, Response, NextFunction]
    ) {
      try {
        return await original.apply(this, args);
      } catch (err: unknown) {
        args[2](err);
      }
    };

    return descriptor;
  };
}
