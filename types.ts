/**
 * Returns the props of a functional component.
 */
export type FCProps<T extends (...args: any) => any> = Parameters<T>[0];
