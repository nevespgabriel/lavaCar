import { Router } from "express";
import funcionario_controller from "../controllers/funcionario_controller.js"

const router = Router();

router.post("/", funcionario_controller.store);
router.get("/", funcionario_controller.index);
router.get("/:id", funcionario_controller.show);
router.put("/:id", funcionario_controller.update);
router.delete("/:id", funcionario_controller.destroy);

export default router;
