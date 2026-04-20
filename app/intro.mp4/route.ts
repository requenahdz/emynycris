import { createReadStream } from "fs";
import { stat } from "fs/promises";
import path from "path";
import { Readable } from "stream";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "app", "assets", "videos", "intro.MP4");

  let size = 0;
  try {
    const fileStat = await stat(filePath);
    size = fileStat.size;
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const range = request.headers.get("range");

  if (!range) {
    const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream<Uint8Array>;
    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Length": String(size),
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  }

  const match = /bytes=(\d+)-(\d*)/.exec(range);
  if (!match) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${size}` },
    });
  }

  const start = Number.parseInt(match[1], 10);
  const end = match[2] ? Number.parseInt(match[2], 10) : size - 1;

  if (Number.isNaN(start) || Number.isNaN(end) || start > end || start < 0 || end >= size) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${size}` },
    });
  }

  const chunkSize = end - start + 1;
  const stream = Readable.toWeb(createReadStream(filePath, { start, end })) as ReadableStream<Uint8Array>;

  return new Response(stream, {
    status: 206,
    headers: {
      "Content-Type": "video/mp4",
      "Content-Length": String(chunkSize),
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
