import { expect } from "chai";
import supertest from "supertest";

//siempre declaramos la ip
const path = supertest(`${process.env.MONGO_URI}`);

describe("Testeo endpoints", () => {
  it("GET", async () => {
    const response = await path.get("/gallery");
    expect(response.status).to.eq(201);
  });
});
