export const classNames = (
    main: string,
    mods: Record<string, boolean | undefined>,
    additional: Array<string | undefined>
): string  => {
    return [
        main,
        ...Object.entries(mods)
            .filter(([, value]) => value)
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(' ');
}