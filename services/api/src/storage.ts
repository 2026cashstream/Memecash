import fs from "node:fs";
import path from "node:path";

const EVENTS_PATH = process.env.EVENTS_PATH ?? path.resolve(process.cwd(), "events.json");

export function readEvents<T>(): T[] {
  try {
    const raw = fs.readFileSync(EVENTS_PATH, "utf-8");
    const data = JSON.parse(raw) as { events?: T[] } | T[];
    if (Array.isArray(data)) return data;
    return data.events ?? [];
  } catch {
    return [];
  }
}
