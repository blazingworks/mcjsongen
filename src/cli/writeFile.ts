import * as fs from "fs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function writeFile(
    generator: (id: string, mod: string, customData: object, usePath: boolean) => object | string,
    id: string,
    mod: string,
    customData: object = {}
) {
    const json = generator(id, mod, customData, false) as object;
    const jsonpath = generator(id, mod, customData, true) as string;
    fs.mkdirSync(jsonpath.split("/").slice(0, -1).join("/"), { recursive: true });
    fs.writeFileSync(jsonpath, JSON.stringify(json, null, 2));
    console.log(`Wrote file ${jsonpath}`);
}
