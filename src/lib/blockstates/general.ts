// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function general(id: string, mod = "minecraft", _customData = {}, getPath = false): object | string {
    if (getPath) return `${mod}/blockstates/${id}.json`;
    if (id.includes(":")) {
        id = id.split(":")[1];
        mod = id.split(":")[0];
    }

    return {
        variants: {
            "": {
                model: `${mod}:block/${id}`,
            },
        },
    };
}
