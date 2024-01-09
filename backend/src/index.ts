import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { getGigs } from "./data/gigs";
import { DBType } from "./types/db.type";
var jsonParser = bodyParser.json();

var db: DBType = { gigs: getGigs(), favorites: [] };

const app = express();
const port = process.env.PORT || 3005;

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(bodyParser.json());

app.get("/gigs", (req: Request, res: Response) => {
  res.send(db.gigs);
});

app.put("/gigs", (req: Request, res: Response) => {
  const { id, title, desc, price } = req.body;

  const gig = db.gigs.find((f) => f.id === id);
  if (gig) {
    gig.title = title;
    gig.desc = desc;
    gig.price = parseInt(price);
  }

  res.send(db.gigs);
});

app.post("/favorite/toggle", (req: Request, res: Response) => {
  const id = req.body.id;
  const favIndex = db.favorites.findIndex((f) => f.id === id);

  if (favIndex === -1) {
    db.favorites.push({ id: req.body.id as string });
  } else {
    db.favorites.splice(favIndex, 1);
  }

  res.send(db.favorites);
});

app.get("/favorites", (req: Request, res: Response) => {
  res.send(db.favorites);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
