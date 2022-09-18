import { json } from "express";
import cors from "cors";
import { router as authRoute } from "../routes/auth.route.js";
export default async (app) => {
  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  app.use(json());

  // route for test the connection
  app.get('/test', (req, res) => res.send("You're totally fine"))

  // routes
  app.use('/', authRoute)
  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
};
