
    const schema = {
  "asyncapi": "2.0.0",
  "info": {
    "title": "WebSocket API",
    "version": "1.0.0",
    "description": "WebSocket server documentation."
  },
  "servers": {
    "wsServer": {
      "url": "ws://localhost:3000",
      "protocol": "ws",
      "description": "WebSocket Server"
    }
  },
  "channels": {
    "/api/ws": {
      "description": "Main WebSocket channel",
      "subscribe": {
        "summary": "Client listens for messages",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "event": {
                "type": "string",
                "example": "message",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "data": {
                "type": "string",
                "example": "invalidate counter",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  