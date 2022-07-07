import { geteat } from "../services/eat.service.js";

export const getResult = async (req, res, next) => {
    try {
        const result = await geteat(req.body);
        return res.status(200).json({
            status: 200,
            result: result,
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};