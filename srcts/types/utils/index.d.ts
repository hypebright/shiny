import { makeBlob } from "./blob";
import { hasOwnProperty } from "./Object";
declare function escapeHTML(str: string): string;
declare function randomId(): string;
declare function strToBool(str: string): boolean | undefined;
declare function getStyle(el: Element, styleProp: string): string | undefined;
declare function padZeros(n: number, digits: number): string;
declare function roundSignif(x: number, digits?: number): number;
declare function parseDate(dateString: string): Date;
declare function formatDateUTC(date: Date | null): null | string;
declare function makeResizeFilter(el: HTMLElement, func: (width: HTMLElement["offsetWidth"], height: HTMLElement["offsetHeight"]) => void): () => void;
declare function pixelRatio(): number;
declare function scopeExprToFunc(expr: string): (scope: unknown) => boolean;
declare function asArray<T>(value: T | Array<T> | null | undefined): Array<T>;
declare function mergeSort<T>(list: Array<T>, sortfunc: (a: T, b: T) => boolean | number): Array<T>;
declare const $escape: (val: string) => string;
declare function mapValues<V, R>(obj: Record<string, V>, f: (value: V, key: string, obj: Record<string, V>) => R): Record<string, R>;
declare function isnan(x: unknown): boolean;
declare function _equal(x: unknown, y: unknown): boolean;
declare function equal(...args: Array<unknown>): boolean;
declare const compareVersion: (a: string, op: "==" | ">=" | ">" | "<=" | "<", b: string) => boolean;
declare function updateLabel(labelTxt: undefined | string, labelNode: JQuery<HTMLElement>): void;
declare function getComputedLinkColor(el: HTMLElement): string;
declare function isBS3(): boolean;
declare function toLowerCase<T extends string>(str: T): Lowercase<T>;
export { escapeHTML, randomId, strToBool, getStyle, padZeros, roundSignif, parseDate, formatDateUTC, makeResizeFilter, pixelRatio, scopeExprToFunc, asArray, mergeSort, $escape, mapValues, isnan, _equal, equal, compareVersion, updateLabel, getComputedLinkColor, makeBlob, hasOwnProperty, isBS3, toLowerCase, };
