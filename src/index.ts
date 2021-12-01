import 'dotenv/config';
import http from 'http';
import { setHook, setStartTime } from "./hooks/hook";
import { DeepNestedService } from "./services/deep-nested.service";

setHook();

const server = http.createServer((req, res) => {
  setStartTime()
  res.statusCode = 200;
  res.end(DeepNestedService.handleTest());
});

server.listen(parseInt(process.env.PORT!), "127.0.0.1", () => {
  console.log(`Server running`);
});
