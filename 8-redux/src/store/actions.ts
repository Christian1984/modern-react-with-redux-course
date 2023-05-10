import { createAction } from "@reduxjs/toolkit";

const clearStore = createAction("store/reset");

export { clearStore };
