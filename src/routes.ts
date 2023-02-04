import { Request, Response, Router } from "express";
import { nanoid } from "nanoid";
import prisma from "./db";

const router = Router();

router.post("/shorten", async (req: Request, res: Response) => {
    const { url } = req.body;
    const shortcode = nanoid(10);

    const link = await prisma.links.create({
        data: {
            id: shortcode,
            url,
        },
    });

    res.json({
        shortcode,
    });
});

router.get("/stats/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const url = await prisma.links.findFirst({ where: { id } });

    res.json({
        url,
    });
});

router.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const link = await prisma.links.findFirst({ where: { id } });
    if (!link) res.sendStatus(404);

    let clicks = (link?.clicks || 0) + 1;

    await prisma.links.update({ where: { id }, data: { clicks } });

    res.json({
        url: link?.url
    });
});

export default router;
