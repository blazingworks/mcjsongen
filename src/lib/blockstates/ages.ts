export default function ages(id: string, mod = "minecraft", customData: { stages: number }, getPath = false): object | string {
    if (getPath) return `${mod}/blockstates/${id}.json`;
    if (id.includes(":")) {
        id = id.split(":")[1];
        mod = id.split(":")[0];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const variants: any = {};

    for (let i = 0; i < customData.stages; i++) {
        variants[`age=${i}`] = {
            model: `${mod}:${id}_stage${i}`,
        };
    }

    return {
        variants,
    };
}
