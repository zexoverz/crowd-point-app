import prisma from '../../../prisma/prisma-client';


export const getAllPoint = async (req, res, next) => {
    try {
        let points = await prisma.point.findMany();
        res.json(points)
    } catch (error) {
        next(error)
    }
}