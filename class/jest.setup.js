import { server } from "./src/mocks";

beforeAll(() => server.listen());
afterAll(() => server.close());
