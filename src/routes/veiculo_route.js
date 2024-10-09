import { Router } from "express";
import veiculo_controller from "../controllers/veiculo_controller.js";

const router = Router();

router.post("/", veiculo_controller.store);
router.get("/", veiculo_controller.index);
router.get("/:id", veiculo_controller.show);
router.put("/:id", veiculo_controller.update);
router.delete("/:id", veiculo_controller.destroy);

export default router;