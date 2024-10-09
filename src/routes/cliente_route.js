import { Router } from "express";
import cliente_controller from "../controllers/cliente_controller.js";

const router = Router();

router.post("/", cliente_controller.store);
router.get("/", cliente_controller.index);
router.get("/:id", cliente_controller.show);
router.put("/:id", cliente_controller.update);
router.delete("/:id", cliente_controller.destroy);

export default router;