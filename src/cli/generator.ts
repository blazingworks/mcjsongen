import lib from "../lib";

export default function generator(category: string, type: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return lib[category][type];
}
