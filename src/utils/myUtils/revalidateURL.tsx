import { PATH_REV } from "src/routes/paths"


export const revalidateURL = (path: string) => `${PATH_REV.revalidate}?path=${path}&secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`