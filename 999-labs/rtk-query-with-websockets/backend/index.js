var express = require("express");
var app = express();
var expressWs = require("express-ws")(app);

const setupSwagger = require("./swagger");

const port = 3000;

let counter = 0;
let wsList = [];

setInterval(() => {
  counter++;
  if (wsList.length > 0) {
    console.log("sending [invalidate] message to", wsList.length, "clients");
  }

  wsList.map((ws) => {
    ws.send(JSON.stringify({ message: "invalidate counter" }));
  });
}, 1000);

/**
 * @openapi
 * /api/counter:
 *   get:
 *     summary: Current Counter
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 value:
 *                   type: number
 *                   example: 1
 */
app.get("/api/counter", function (req, res, next) {
  console.log("get route called, sending", counter);
  res.send({ value: counter });
});

app.ws("/api/ws", function (ws, req) {
  ws.on("close", () => {
    console.log("ws closed");

    const wsIndex = wsList.findIndex((el) => el === ws);
    if (wsIndex >= 0) {
      wsList.splice(wsIndex, 1);
    }
    console.log("removed from list:", wsList.length, "websockets conneted");
  });

  console.log("socket connected");
  wsList.push(ws);
  console.log("added to list:", wsList.length, "websockets conneted");
});

app.use("/ws-docs", express.static("asyncapi-docs"));

setupSwagger(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
  console.log(`AsyncAPI docs at http://localhost:${port}/ws-docs`);
});
