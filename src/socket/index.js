export const newWebSocket = (stock_name) => {
  return new WebSocket(
    `${import.meta.env.VITE_WS_STOCK_API}/ws/currency/${stock_name}/`
  );
};
