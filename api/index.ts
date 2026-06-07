import app from "../src/server.js";
import { handle } from "hono/vercel";

// ✅ FIX: Ensure Vercel environment is set
if (!process.env.ANIWATCH_API_DEPLOYMENT_ENV) {
    process.env.ANIWATCH_API_DEPLOYMENT_ENV = 'vercel';
}

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;
export const OPTIONS = handler;
