export function middleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "User is unauthorized"
        });
    }

    next();
}