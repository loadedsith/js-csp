import { Box } from './channels';

export class FnHandler {
  blockable: boolean;
  func: ?Function;

  constructor(blockable: boolean, func: ?Function) {
    this.blockable = blockable;
    this.func = func;
  }

  isActive(): boolean {
    return true;
  }

  isBlockable(): boolean {
    return this.blockable;
  }

  commit(): ?Function {
    return this.func;
  }
}

export class AltHandler {
  flag: Box;
  f: Function;

  constructor(flag: Box, f: Function) {
    this.f = f;
    this.flag = flag;
  }

  isActive() {
    return this.flag.value;
  }

  isBlockable(): boolean {
    return true;
  }

  commit(): Function {
    this.flag.value = false;
    return this.f;
  }
}

export type HandlerType = FnHandler | AltHandler;
