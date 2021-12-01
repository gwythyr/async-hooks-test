import {getStore} from "../hooks/hook";
import {executionAsyncId} from "async_hooks";

export class DeepNestedService {
  static handleTest() {
    const data = getStore();
    const currentNs = process.hrtime()[1];
    return `startedAt: ${data?.startedAt}, now: ${currentNs}, time elapsed: ${currentNs - data?.startedAt!} ns, id: ${executionAsyncId()}`;
  }
}