import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const AUDIO_BASE_URL = "https://www.theaudiodb.com/api/v1/json";
const token = process.env.AUDIODB_TOKEN!;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.get("/api/artists/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await fetch(`${AUDIO_BASE_URL}/${token}/artist.php?i=${id}`);
    const { data } = await result.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Artist not found!" });
  }
});

app.get("/api/artists/:id/albums", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await fetch(`${AUDIO_BASE_URL}/${token}/album.php?i=${id}`);
    const { data } = await result.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "No albums found for given artist!" });
  }
});

app.get("/api/albums/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await fetch(`${AUDIO_BASE_URL}/${token}/album.php?m=${id}`);
    const { data } = await result.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Album not found!" });
  }
});

app.get("/api/albums/:id/tracks", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await fetch(`${AUDIO_BASE_URL}/${token}/track.php?m=${id}`);
    const { data } = await result.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "No tracks found for given album!" });
  }
});

app.get("/api/tracks/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await fetch(`${AUDIO_BASE_URL}/${token}/track.php?h=${id}`);
    const { data } = await result.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Track not found!" });
  }
});

app.get("/api/search/artists/:name", async (req: Request, res: Response) => {
  const name = req.params.name;

  try {
    const result = await fetch(
      `${AUDIO_BASE_URL}/${token}/search.php?s=${name}`
    );
    const { data } = await result.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Cannot find Artists!" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
