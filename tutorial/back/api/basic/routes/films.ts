import { Router } from "express";
import { Films } from "../types";

const router = Router()

const films: Films[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160000000,
      description: "A skilled thief, the absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state.",
      imageUr1: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      budget: 63000000,
      description: "A hacker discovers that the world is a simulated reality and joins a rebellion to fight the controllers of this illusion.",
      imageUr1: "https://example.com/matrix.jpg"
    },
    {
      id: 3,
      title: "Parasite",
      director: "Bong Joon-ho",
      duration: 132,
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      imageUr1: "https://example.com/parasite.jpg"
    }
  ];
  router.get("/", (_req, res) => {
    return res.json(films);
  });

export default router;
