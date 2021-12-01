import {createHook, executionAsyncId, HookCallbacks} from 'async_hooks';

interface StoreData {
  name?: string,
  startedAt?: number
}

const store: Record<number, StoreData> = {};

export function setHook(options?: HookCallbacks) {
  createHook({
    destroy(asyncId: number) {
      delete store[asyncId];
    },
    ...(options ?? {})
  }).enable()
}

export function setName(name: string) {
  setStore({ name })
}

export function setStartTime() {
  setStore({ startedAt: process.hrtime()[1] })
}

export function getStore(): StoreData {
  return store[executionAsyncId()];
}

function setStore(data: StoreData): void {
  let existingData: StoreData = store[executionAsyncId()] ?? {};
  store[executionAsyncId()] = { ...existingData, ...data };
}