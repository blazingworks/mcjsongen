// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function item(id: string, mod = "minecraft", _customData = {}, getPath = false): object | string {
    if (getPath) return `${mod}/models/item/${id}.json`;
    if (id.includes(":")) {
        id = id.split(":")[1];
        mod = id.split(":")[0];
    }
    return {
        parent: "minecraft:item/generated",
        textures: {
            layer0: `${mod}:item/${id}`,
        },
    };
}
