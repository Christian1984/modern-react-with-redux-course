import { useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetApiCounterQuery } from "./store/apis/generated/generatedApi";
import { useDispatch } from "react-redux";
import { taggedApi } from "./store/apis/tagged/taggedApi";
import { useWebsocket } from "./hooks/useWebsocket";

type WebhookPayload = {
  message: string;
};

function App() {
  const dispatch = useDispatch();

  useWebsocket("/api/ws", (data: WebhookPayload) => {
    switch (data.message) {
      case "invalidate counter":
        dispatch(taggedApi.util.invalidateTags(["Counter"]));
        break;
      default:
        console.warn("unknown webhook message");
    }
  });

  const { data } = useGetApiCounterQuery();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {}}>count is {data?.value ?? "Loading"}</button>
      </div>
    </>
  );
}

export default App;
