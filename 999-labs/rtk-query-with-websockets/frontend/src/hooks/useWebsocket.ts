import { useCallback, useEffect, useRef } from "react";

export const useWebsocket = <T>(url: string, callback: (data: T) => void) => {
  const wsRef = useRef<WebSocket>(null);
  const cb = useCallback(callback, []);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.addEventListener("message", (e) => {
      cb(e.data as T);
    });

    wsRef.current = ws;
    return () => {
      wsRef.current?.close();
      wsRef.current = null;
    };
  }, []);
};
