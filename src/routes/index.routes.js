import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render('index');
});
router.get("/about", (req, res) => {
  res.send('about');
});
router.get("/personajes", (req, res) => {
  res.send('personajes');
});

router.get("/edit", (req, res) => {
  res.send('edit');
});


export default router;
