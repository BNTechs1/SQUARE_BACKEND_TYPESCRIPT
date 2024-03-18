import jwt from "jsonwebtoken";


export function signJwt(
    object: any,
    signKey: string,
    options?: jwt.SignOptions | undefined
) {
    return jwt.sign(object, signKey, {
        ...(options && options),
    });
}
