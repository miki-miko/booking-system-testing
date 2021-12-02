import { rest } from "msw";

import { tables } from "../test-utils/fakedata";
import { bookings } from "../test-utils/fakedata";

const tablesURL = "http://localhost:5000/tables";
const bookingsURL = "http://localhost:5000/bookings";

export const handlers = [
  // tables
  rest.get(tablesURL, (req, res, ctx) => {
    return res(ctx.json({ tables }));
  }),

  rest.post(tablesURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ tables }));
  }),

  rest.delete(`/${tablesURL}/:id`, (req, res, ctx) => {
    const { id } = parseInt(req.params);
    return res(ctx.json({ table: tables[id] }));
  }),

  rest.delete(`http://localhost:5000/tables/0`, (res) => {
    return res;
  }),
  // bookings

  rest.post(bookingsURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ bookings }));
  }),
];
