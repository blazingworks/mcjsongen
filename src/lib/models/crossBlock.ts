// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function crossBlock(id: string, mod = "minecraft", _customData = {}, getPath = false): object | string {
    if (getPath) return `${mod}/models/block/${id}.json`;
    if (id.includes(":")) {
        id = id.split(":")[1];
        mod = id.split(":")[0];
    }
    return {
        parent: "minecraft:block/cross",
        textures: {
            cross: `${mod}:block/${id}`,
        },
    };
}
