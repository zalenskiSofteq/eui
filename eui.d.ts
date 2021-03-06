/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

declare module '@elastic/eui' {
  // @ts-ignore path only exists at build time
  export * from '@elastic/eui/src/components/common'; // eslint-disable-line import/no-unresolved
  // @ts-ignore path only exists at build time
  export * from '@elastic/eui/src/components/date_picker/react-datepicker'; // eslint-disable-line import/no-unresolved
}
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

declare module '@elastic/eui/dist/eui_theme_*.json' {
  const value: any;
  export default value;
}
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable @typescript-eslint/triple-slash-reference */


declare module '@elastic\eui\src\components\common' {
	import { AnchorHTMLAttributes, ButtonHTMLAttributes, Component, FunctionComponent, MouseEventHandler, SFC } from 'react';
	export interface CommonProps {
	    className?: string;
	    'aria-label'?: string;
	    'data-test-subj'?: string;
	}
	export type NoArgCallback<T> = () => T;
	export const assertNever: (x: never) => never;
	/**
	 * XOR for some properties applied to a type
	 * (XOR is one of these but not both or neither)
	 *
	 * Usage: OneOf<typeToExtend, one | but | not | multiple | of | these | are | required>
	 *
	 * To require aria-label or aria-labelledby but not both
	 * Example: OneOf<Type, 'aria-label' | 'aria-labelledby'>
	 */
	export type OneOf<T, K extends keyof T> = Omit<T, K> & {
	    [k in K]: Pick<Required<T>, k> & {
	        [k1 in Exclude<K, k>]?: never;
	    };
	}[K];
	/**
	 * Wraps Object.keys with proper typescript definition of the resulting array
	 */
	export function keysOf<T, K extends keyof T>(obj: T): K[];
	export type PropsOf<C> = C extends SFC<infer SFCProps> ? SFCProps : C extends FunctionComponent<infer FunctionProps> ? FunctionProps : C extends Component<infer ComponentProps> ? ComponentProps : never; type ExtractDefaultProps<T> = T extends {
	    defaultProps: infer D;
	} ? D : never; type ExtractProps<C extends new (...args: any) => any, IT = InstanceType<C>> = IT extends Component<infer P> ? P : never;
	/**
	 * Because of how TypeScript's LibraryManagedAttributes is designed to handle defaultProps (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#support-for-defaultprops-in-jsx)
	 * we can't directly export the props definition as the defaulted values are not made optional,
	 * because it isn't processed by LibraryManagedAttributes. To get around this, we:
	 * - remove the props which have default values applied
	 * - export (Props - Defaults) & Partial<Defaults>
	 */
	export type ApplyClassComponentDefaults<C extends new (...args: any) => any, D = ExtractDefaultProps<C>, P = ExtractProps<C>> = Omit<P, keyof D> & {
	    [K in keyof D]?: K extends keyof P ? P[K] : never;
	}; type UnionKeys<T> = T extends any ? keyof T : never;
	export type DistributivePick<T, K extends UnionKeys<T>> = T extends any ? Pick<T, Extract<keyof T, K>> : never;
	export type DistributiveOmit<T, K extends UnionKeys<T>> = T extends any ? Omit<T, Extract<keyof T, K>> : never;
	/**
	 * Returns member keys in U not present in T set to never
	 * T = { 'one', 'two', 'three' }
	 * U = { 'three', 'four', 'five' }
	 * returns { 'four': never, 'five': never }
	 */
	export type DisambiguateSet<T, U> = {
	    [P in Exclude<keyof T, keyof U>]?: never;
	};
	/**
	 * Allow either T or U, preventing any additional keys of the other type from being present
	 */
	export type ExclusiveUnion<T, U> = T | U extends object ? (DisambiguateSet<T, U> & U) | (DisambiguateSet<U, T> & T) : T | U;
	/**
	 * For components that conditionally render <button> or <a>
	 * Convenience types for extending base props (T) and
	 * element-specific props (P) with standard clickable properties
	 *
	 * These will likely be used together, along with `ExclusiveUnion`:
	 *
	 * type AnchorLike = PropsForAnchor<BaseProps>
	 * type ButtonLike = PropsForButton<BaseProps>
	 * type ComponentProps = ExclusiveUnion<AnchorLike, ButtonLike>
	 * const Component: FunctionComponent<ComponentProps> ...
	 */
	export type PropsForAnchor<T, P = {}> = T & {
	    href?: string;
	    onClick?: MouseEventHandler<HTMLAnchorElement>;
	} & AnchorHTMLAttributes<HTMLAnchorElement> & P;
	export type PropsForButton<T, P = {}> = T & {
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	} & ButtonHTMLAttributes<HTMLButtonElement> & P;
	/**
	 * Replaces all properties on any type as optional, includes nested types
	 *
	 * @example
	 * ```ts
	 * interface Person {
	 *  name: string;
	 *  age?: number;
	 *  spouse: Person;
	 *  children: Person[];
	 * }
	 * type PartialPerson = RecursivePartial<Person>;
	 * // results in
	 * interface PartialPerson {
	 *  name?: string;
	 *  age?: number;
	 *  spouse?: RecursivePartial<Person>;
	 *  children?: RecursivePartial<Person>[]
	 * }
	 * ```
	 */
	export type RecursivePartial<T> = {
	    [P in keyof T]?: T[P] extends NonAny[] ? T[P] : T[P] extends readonly NonAny[] ? T[P] : T[P] extends Array<infer U> ? Array<RecursivePartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<RecursivePartial<U>> : T[P] extends Set<infer V> ? Set<RecursivePartial<V>> : T[P] extends Map<infer K, infer V> ? Map<K, RecursivePartial<V>> : T[P] extends NonAny ? T[P] : RecursivePartial<T[P]>;
	}; type NonAny = number | boolean | string | symbol | null;
	export {};

}
declare module '@elastic\eui\src\services\keys' {
	export const ENTER = "Enter";
	export const SPACE = " ";
	export const ESCAPE = "Escape";
	export const TAB = "Tab";
	export const BACKSPACE = "Backspace";
	export const F2 = "F2";
	export const ARROW_DOWN = "ArrowDown";
	export const ARROW_UP = "ArrowUp";
	export const ARROW_LEFT = "ArrowLeft";
	export const ARROW_RIGHT = "ArrowRight";
	export const PAGE_UP = "PageUp";
	export const PAGE_DOWN = "PageDown";
	export const END = "End";
	export const HOME = "Home";
	export enum keys {
	    ENTER = "Enter",
	    SPACE = " ",
	    ESCAPE = "Escape",
	    TAB = "Tab",
	    BACKSPACE = "Backspace",
	    F2 = "F2",
	    ARROW_DOWN = "ArrowDown",
	    ARROW_UP = "ArrowUp",
	    ARROW_LEFT = "ArrowLeft",
	    ARROW_RIGHT = "ArrowRight",
	    PAGE_UP = "PageUp",
	    PAGE_DOWN = "PageDown",
	    END = "End",
	    HOME = "Home"
	}

}
declare module '@elastic\eui\src\services\accessibility\accessible_click_keys' {
	import { ENTER, SPACE } from '@elastic\eui\src\services\keys';
	export const accessibleClickKeys: {
	    Enter: string;
	    " ": string;
	};

}
declare module '@elastic\eui\src\services\accessibility\cascading_menu_keys' {
	export const cascadingMenuKeys: {
	    ARROW_DOWN: string;
	    ARROW_LEFT: string;
	    ARROW_RIGHT: string;
	    ARROW_UP: string;
	    ESCAPE: string;
	    TAB: string;
	};

}
declare module '@elastic\eui\src\services\accessibility\combo_box_keys' {
	export const comboBoxKeys: {
	    ARROW_DOWN: string;
	    ARROW_UP: string;
	    ENTER: string;
	    ESCAPE: string;
	    TAB: string;
	};

}
declare module '@elastic\eui\src\services\accessibility\html_id_generator' {
	/**
	 * This function returns a function to generate ids.
	 * This can be used to generate unique, but predictable ids to pair labels
	 * with their inputs. It takes an optional prefix as a parameter. If you don't
	 * specify it, it generates a random id prefix. If you specify a custom prefix
	 * it should begin with an letter to be HTML4 compliant.
	 */
	export function htmlIdGenerator(idPrefix?: string): (idSuffix?: string) => string;

}
declare module '@elastic\eui\src\services\accessibility' {
	export { accessibleClickKeys } from '@elastic\eui\src\services\accessibility\accessible_click_keys';
	export { cascadingMenuKeys } from '@elastic\eui\src\services\accessibility\cascading_menu_keys';
	export { comboBoxKeys } from '@elastic\eui\src\services\accessibility\combo_box_keys';
	export { htmlIdGenerator } from '@elastic\eui\src\services\accessibility\html_id_generator';

}
declare module '@elastic\eui\src\services\alignment' {
	export const LEFT_ALIGNMENT = "left";
	export const RIGHT_ALIGNMENT = "right";
	export const CENTER_ALIGNMENT = "center";
	export type HorizontalAlignment = 'left' | 'right' | 'center';

}
declare module '@elastic\eui\src\services\breakpoint' {
	export type EuiBreakpointSize = 'xs' | 's' | 'm' | 'l' | 'xl';
	export type EuiBreakpoints = {
	    [key in EuiBreakpointSize]: number;
	};
	export const BREAKPOINTS: EuiBreakpoints;
	export const BREAKPOINT_KEYS: EuiBreakpointSize[];
	/**
	 * Given the current `width` and an object of `EuiBreakpoints`,
	 * this function returns the string that is the name of the breakpoint key
	 * that is less than or equal to the width
	 *
	 * @param {number} width Can either be the full window width or any width
	 * @param {EuiBreakpoints} breakpoints An object with keys for sizing and values for minimum width
	 * @returns {string | undefined} Name of the breakpoint key or `undefined` if a key doesn't exist
	 */
	export function getBreakpoint(width: number, breakpoints?: EuiBreakpoints): EuiBreakpointSize | undefined;
	/**
	 * Given the current `width` and a max breakpoint key,
	 * this function returns true or false if the `width` falls within the max
	 * breakpoint or any breakpoints below
	 *
	 * @param {number} width Can either be the full window width or any width
	 * @param {EuiBreakpointSize | number} max The named breakpoint or custom number to check against
	 * @param {EuiBreakpoints} breakpoints An object with keys for sizing and values for minimum width
	 * @returns {boolean} Will return `false` if it can't find a value for the `max` breakpoint
	 */
	export function isWithinMaxBreakpoint(width: number, max: EuiBreakpointSize | number, breakpoints?: EuiBreakpoints): boolean;
	/**
	 * Given the current `width` and a max breakpoint key,
	 * this function returns true or false if the `width` falls within the max
	 * breakpoint or any breakpoints below
	 *
	 * @param {number} width Can either be the full window width or any width
	 * @param {EuiBreakpointSize | number} min The named breakpoint or custom number to check against
	 * @param {EuiBreakpoints} breakpoints An object with keys for sizing and values for minimum width
	 * @returns {boolean} Will return `false` if it can't find a value for the `min` breakpoint
	 */
	export function isWithinMinBreakpoint(width: number, min: EuiBreakpointSize | number, breakpoints?: EuiBreakpoints): boolean;
	/**
	 * Given the current `width` and an array of breakpoint keys,
	 * this function returns true or false if the `width` falls within
	 * any of the named breakpoints
	 *
	 * @param {number} width Can either be the full window width or any width
	 * @param {EuiBreakpointSize[]} sizes An array of named breakpoints
	 * @param {EuiBreakpoints} breakpoints An object with keys for sizing and values for minimum width
	 * @returns {boolean} Returns `true` if current breakpoint name is included in `sizes`
	 */
	export function isWithinBreakpoints(width: number, sizes: EuiBreakpointSize[], breakpoints?: EuiBreakpoints): boolean;

}
declare module '@elastic\eui\src\services\color\is_color_dark' {
	/**
	 * This function calculates if the specified color is "dark", which usually means
	 * you need light text if you use it as a background color to fulfill WCAG contrast
	 * requirement.
	 * The color must be specified via its red, green and blue value in the range of
	 * 0 to 255.
	 * The formula is based on this Stackoverflow answer: https://stackoverflow.com/a/3943023
	 * which itself is based upon the WCAG recommendation for color contrast.
	 *
	 * @param {number} red The red component in the range 0 to 255
	 * @param {number} green The green component in the range 0 to 255
	 * @param {number} blue The blue component in the range 0 to 255
	 * @returns {boolean} True if the color is dark, false otherwise.
	 */
	export function isColorDark(red: number, green: number, blue: number): boolean;

}
declare module '@elastic\eui\src\services\color\is_valid_hex' {
	export function isValidHex(hex: string): boolean;

}
declare module '@elastic\eui\src\services\color\color_types' {
	export type rgbDef = [number, number, number];
	export interface HSV {
	    h: number;
	    s: number;
	    v: number;
	}
	export interface RGB {
	    r: number;
	    g: number;
	    b: number;
	}
	export type HEX = string;

}
declare module '@elastic\eui\src\services\color\hex_to_rgb' {
	import { rgbDef } from '@elastic\eui\src\services\color\color_types';
	export function hexToRgb(hex: string): rgbDef;

}
declare module '@elastic\eui\src\services\color\rgb_to_hsv' {
	import { HSV, RGB } from '@elastic\eui\src\services\color\color_types';
	export function rgbToHsv({ r, g, b }: RGB): HSV;

}
declare module '@elastic\eui\src\services\color\hex_to_hsv' {
	import { HEX, HSV } from '@elastic\eui\src\services\color\color_types';
	export function hexToHsv(hex: HEX): HSV;

}
declare module '@elastic\eui\src\services\color\hsv_to_rgb' {
	import { HSV, RGB } from '@elastic\eui\src\services\color\color_types';
	export function hsvToRgb({ h, s, v }: HSV): RGB;

}
declare module '@elastic\eui\src\services\color\rgb_to_hex' {
	export function rgbToHex(rgb: string): string;

}
declare module '@elastic\eui\src\services\color\hsv_to_hex' {
	import { HEX, HSV } from '@elastic\eui\src\services\color\color_types';
	export function hsvToHex({ h, s, v }: HSV): HEX;

}
declare module '@elastic\eui\src\services\color\luminance_and_contrast' {
	import { rgbDef } from '@elastic\eui\src\services\color\color_types';
	export function calculateLuminance(r: number, g: number, b: number): number;
	export function calculateContrast(rgb1: rgbDef, rgb2: rgbDef): number;

}
declare module '@elastic\eui\src\services\color\color_palette' {
	export const MID_COLOR_STOP = "#EBEFF5";
	/**
	 * This function takes an array of colors and returns an array of interpolated
	 * colors based on the number of steps/len needed for use in UI elements such as charts.
	 * Derived from https://github.com/gka/palettes (Unlicensed)
	 */
	export function colorPalette(
	/**
	 * The main color code or array of codes
	 */
	colors: string[], 
	/**
	 * The number of colors in the resulting array (default 10)
	 */
	len?: number, 
	/**
	 * Forces color interpolation to be calculated separately for each half (default false)
	 */
	diverging?: boolean, 
	/**
	 * Uses a more static interpolation for non-continuous spectrums
	 */
	categorical?: boolean): string[];

}
declare module '@elastic\eui\src\services\color\eui_palettes' {
	export type EuiPalette = string[];
	export interface EuiPaletteColorBlindProps {
	    /**
	     * How many variations of the series is needed
	     */
	    rotations?: number;
	    /**
	     * Order similar colors as `group`s or just `append` each variation
	     */
	    order?: 'append' | 'group';
	    /**
	     * Specifies if the direction of the color variations
	     */
	    direction?: 'lighter' | 'darker' | 'both';
	    /**
	     * Use the default sort order, or re-sort them based on the color wheel (natural)
	     */
	    sortBy?: 'default' | 'natural';
	    /**
	     * Shift the sorting order by a certain number when used in conjunction with `'natural'` `sortBy`.
	     * Defaults to a number close to green.
	     */
	    sortShift?: string;
	}
	export const euiPaletteColorBlind: ({ rotations, order, direction, sortBy, sortShift, }?: EuiPaletteColorBlindProps) => EuiPalette;
	/**
	 * Color blind palette with text is meant for use when text is applied on top of the color.
	 * It increases the brightness of the color to give the text more contrast.
	 */
	export const euiPaletteColorBlindBehindText: (paletteProps?: EuiPaletteColorBlindProps) => string[];
	export const euiPaletteForLightBackground: () => EuiPalette;
	export const euiPaletteForDarkBackground: () => EuiPalette;
	export const euiPaletteForStatus: (steps: number) => EuiPalette;
	export const euiPaletteForTemperature: (steps: number) => EuiPalette;
	export const euiPaletteComplimentary: (steps: number) => EuiPalette;
	export const euiPaletteNegative: (steps: number) => EuiPalette;
	export const euiPalettePositive: (steps: number) => EuiPalette;
	export const euiPaletteCool: (steps: number) => EuiPalette;
	export const euiPaletteWarm: (steps: number) => EuiPalette;
	export const euiPaletteGray: (steps: number) => EuiPalette;

}
declare module '@elastic\eui\src\services\color\visualization_colors' {
	export const VISUALIZATION_COLORS: import ("@elastic\eui\src\services\color\eui_palettes").EuiPalette;
	export const DEFAULT_VISUALIZATION_COLOR: string;

}
declare module '@elastic\eui\src\components\color_picker\utils' {
	import chroma, { ColorSpaces } from 'chroma-js';
	import { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops';
	export const getEventPosition: (location: {
	    x: number;
	    y: number;
	}, container: HTMLElement) => {
	    left: number;
	    top: number;
	    width: number;
	    height: number;
	};
	export const HEX_FALLBACK = "";
	export const HSV_FALLBACK: ColorSpaces['hsv'];
	export const RGB_FALLBACK: ColorSpaces['rgba'];
	export const RGB_JOIN = ", ";
	export const parseColor: (input?: string | null | undefined) => string | number[] | null;
	export const chromaValid: (color: string | number[]) => boolean;
	export const getChromaColor: (input?: string | null | undefined, allowOpacity?: boolean) => chroma.Color | null;
	export const getLinearGradient: (palette: string[] | ColorStop[]) => string;
	export const getFixedLinearGradient: (palette: string[] | ColorStop[]) => {
	    color: string;
	    width: string;
	}[];

}
declare module '@elastic\eui\src\components\form\range\utils' {
	export const EUI_THUMB_SIZE = 16;
	export const calculateThumbPosition: (value: number, min: number, max: number, width: number, thumbSize?: number) => number;

}
declare module '@elastic\eui\src\components\color_picker\color_stops\utils' {
	import { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops\color_stop_thumb';
	export const removeStop: (colorStops: ColorStop[], index: number) => ColorStop[];
	export const addDefinedStop: (colorStops: ColorStop[], stop: ColorStop['stop'], color?: ColorStop['color']) => ColorStop[];
	export const addStop: (colorStops: ColorStop[], color: string | undefined, max: number) => ColorStop[];
	export const isColorInvalid: (color: string, showAlpha?: boolean) => boolean;
	export const isStopInvalid: (stop: ColorStop['stop']) => boolean;
	export const isInvalid: (colorStops: ColorStop[], showAlpha?: boolean) => boolean;
	export const calculateScale: (trackWidth: number) => number;
	export const getStopFromMouseLocation: (location: {
	    x: number;
	    y: number;
	}, ref: HTMLDivElement, min: number, max: number) => number;
	export const getPositionFromStop: (stop: ColorStop['stop'], ref: HTMLDivElement, min: number, max: number) => number;

}
declare module '@elastic\eui\src\services\react' {
	export function enqueueStateChange(fn: Function): void;

}
declare module '@elastic\eui\src\components\icon\icon' {
	import React, { PureComponent, ComponentType, SVGAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const typeToPathMap: {
	    accessibility: string;
	    addDataApp: string;
	    advancedSettingsApp: string;
	    aggregate: string;
	    alert: string;
	    analyzeEvent: string;
	    annotation: string;
	    apmApp: string;
	    apmTrace: string;
	    apps: string;
	    appSearchApp: string;
	    arrowDown: string;
	    arrowLeft: string;
	    arrowRight: string;
	    arrowUp: string;
	    asterisk: string;
	    auditbeatApp: string;
	    beaker: string;
	    bell: string;
	    bellSlash: string;
	    bolt: string;
	    boxesHorizontal: string;
	    boxesVertical: string;
	    branch: string;
	    broom: string;
	    brush: string;
	    bug: string;
	    bullseye: string;
	    calendar: string;
	    canvasApp: string;
	    codeApp: string;
	    check: string;
	    checkInCircleFilled: string;
	    cheer: string;
	    classificationJob: string;
	    clock: string;
	    cloudDrizzle: string;
	    cloudStormy: string;
	    cloudSunny: string;
	    color: string;
	    compute: string;
	    console: string;
	    consoleApp: string;
	    continuityAbove: string;
	    continuityAboveBelow: string;
	    continuityBelow: string;
	    continuityWithin: string;
	    controlsHorizontal: string;
	    controlsVertical: string;
	    copy: string;
	    copyClipboard: string;
	    createAdvancedJob: string;
	    createMultiMetricJob: string;
	    createPopulationJob: string;
	    createSingleMetricJob: string;
	    cross: string;
	    crossClusterReplicationApp: string;
	    crosshairs: string;
	    crossInACircleFilled: string;
	    currency: string;
	    cut: string;
	    dashboardApp: string;
	    database: string;
	    dataVisualizer: string;
	    devToolsApp: string;
	    discoverApp: string;
	    document: string;
	    documentation: string;
	    documentEdit: string;
	    documents: string;
	    dot: string;
	    download: string;
	    editorAlignCenter: string;
	    editorAlignLeft: string;
	    editorAlignRight: string;
	    editorBold: string;
	    editorCodeBlock: string;
	    editorComment: string;
	    editorDistributeHorizontal: string;
	    editorDistributeVertical: string;
	    editorHeading: string;
	    editorItalic: string;
	    editorItemAlignLeft: string;
	    editorItemAlignBottom: string;
	    editorItemAlignCenter: string;
	    editorItemAlignMiddle: string;
	    editorItemAlignRight: string;
	    editorItemAlignTop: string;
	    editorLink: string;
	    editorOrderedList: string;
	    editorPositionBottomLeft: string;
	    editorPositionBottomRight: string;
	    editorPositionTopLeft: string;
	    editorPositionTopRight: string;
	    editorRedo: string;
	    editorStrike: string;
	    editorTable: string;
	    editorUnderline: string;
	    editorUndo: string;
	    editorUnorderedList: string;
	    email: string;
	    empty: string;
	    emsApp: string;
	    eql: string;
	    eraser: string;
	    exit: string;
	    expand: string;
	    expandMini: string;
	    exportAction: string;
	    eye: string;
	    eyeClosed: string;
	    faceHappy: string;
	    faceNeutral: string;
	    faceSad: string;
	    filebeatApp: string;
	    filter: string;
	    flag: string;
	    fold: string;
	    folderCheck: string;
	    folderClosed: string;
	    folderExclamation: string;
	    folderOpen: string;
	    frameNext: string;
	    framePrevious: string;
	    fullScreen: string;
	    fullScreenExit: string;
	    function: string;
	    gear: string;
	    gisApp: string;
	    glasses: string;
	    globe: string;
	    grab: string;
	    grabHorizontal: string;
	    graphApp: string;
	    grid: string;
	    grokApp: string;
	    heart: string;
	    heartbeatApp: string;
	    heatmap: string;
	    help: string;
	    home: string;
	    iInCircle: string;
	    image: string;
	    importAction: string;
	    indexClose: string;
	    indexEdit: string;
	    indexFlush: string;
	    indexManagementApp: string;
	    indexMapping: string;
	    indexOpen: string;
	    indexPatternApp: string;
	    indexRollupApp: string;
	    indexRuntime: string;
	    indexSettings: string;
	    inputOutput: string;
	    inspect: string;
	    invert: string;
	    ip: string;
	    keyboardShortcut: string;
	    kqlField: string;
	    kqlFunction: string;
	    kqlOperand: string;
	    kqlSelector: string;
	    kqlValue: string;
	    layers: string;
	    lensApp: string;
	    link: string;
	    list: string;
	    listAdd: string;
	    lock: string;
	    lockOpen: string;
	    logsApp: string;
	    logoAerospike: string;
	    logoApache: string;
	    logoAppSearch: string;
	    logoAWS: string;
	    logoAWSMono: string;
	    logoAzure: string;
	    logoAzureMono: string;
	    logoBeats: string;
	    logoBusinessAnalytics: string;
	    logoCeph: string;
	    logoCloud: string;
	    logoCloudEnterprise: string;
	    logoCode: string;
	    logoCodesandbox: string;
	    logoCouchbase: string;
	    logoDocker: string;
	    logoDropwizard: string;
	    logoElastic: string;
	    logoElasticsearch: string;
	    logoElasticStack: string;
	    logoEnterpriseSearch: string;
	    logoEtcd: string;
	    logoGCP: string;
	    logoGCPMono: string;
	    logoGithub: string;
	    logoGmail: string;
	    logoGolang: string;
	    logoGoogleG: string;
	    logoHAproxy: string;
	    logoIBM: string;
	    logoIBMMono: string;
	    logoKafka: string;
	    logoKibana: string;
	    logoKubernetes: string;
	    logoLogging: string;
	    logoLogstash: string;
	    logoMaps: string;
	    logoMemcached: string;
	    logoMetrics: string;
	    logoMongodb: string;
	    logoMySQL: string;
	    logoNginx: string;
	    logoObservability: string;
	    logoOsquery: string;
	    logoPhp: string;
	    logoPostgres: string;
	    logoPrometheus: string;
	    logoRabbitmq: string;
	    logoRedis: string;
	    logoSecurity: string;
	    logoSiteSearch: string;
	    logoSketch: string;
	    logoSlack: string;
	    logoUptime: string;
	    logoWebhook: string;
	    logoWindows: string;
	    logoWorkplaceSearch: string;
	    logstashFilter: string;
	    logstashIf: string;
	    logstashInput: string;
	    logstashOutput: string;
	    logstashQueue: string;
	    machineLearningApp: string;
	    magnet: string;
	    magnifyWithMinus: string;
	    magnifyWithPlus: string;
	    managementApp: string;
	    mapMarker: string;
	    memory: string;
	    menu: string;
	    menuDown: string;
	    menuLeft: string;
	    menuRight: string;
	    menuUp: string;
	    merge: string;
	    metricbeatApp: string;
	    metricsApp: string;
	    minimize: string;
	    minus: string;
	    minusInCircle: string;
	    minusInCircleFilled: string;
	    mobile: string;
	    monitoringApp: string;
	    moon: string;
	    nested: string;
	    node: string;
	    notebookApp: string;
	    number: string;
	    offline: string;
	    online: string;
	    outlierDetectionJob: string;
	    package: string;
	    packetbeatApp: string;
	    pageSelect: string;
	    pagesSelect: string;
	    partial: string;
	    paperClip: string;
	    pause: string;
	    pencil: string;
	    percent: string;
	    pin: string;
	    pinFilled: string;
	    pipelineApp: string;
	    play: string;
	    playFilled: string;
	    plus: string;
	    plusInCircle: string;
	    plusInCircleFilled: string;
	    popout: string;
	    push: string;
	    questionInCircle: string;
	    quote: string;
	    recentlyViewedApp: string;
	    refresh: string;
	    regressionJob: string;
	    reporter: string;
	    reportingApp: string;
	    returnKey: string;
	    save: string;
	    savedObjectsApp: string;
	    scale: string;
	    search: string;
	    searchProfilerApp: string;
	    securityAnalyticsApp: string;
	    securityApp: string;
	    securitySignal: string;
	    securitySignalDetected: string;
	    securitySignalResolved: string;
	    shard: string;
	    share: string;
	    snowflake: string;
	    sortable: string;
	    sortDown: string;
	    sortLeft: string;
	    sortRight: string;
	    sortUp: string;
	    spacesApp: string;
	    sqlApp: string;
	    starEmpty: string;
	    starEmptySpace: string;
	    starFilled: string;
	    starFilledSpace: string;
	    starMinusEmpty: string;
	    starMinusFilled: string;
	    starPlusEmpty: string;
	    starPlusFilled: string;
	    stats: string;
	    stop: string;
	    stopFilled: string;
	    stopSlash: string;
	    storage: string;
	    string: string;
	    submodule: string;
	    swatchInput: string;
	    symlink: string;
	    tableOfContents: string;
	    tableDensityExpanded: string;
	    tableDensityCompact: string;
	    tableDensityNormal: string;
	    tag: string;
	    tear: string;
	    temperature: string;
	    timeline: string;
	    timelionApp: string;
	    timeslider: string;
	    training: string;
	    trash: string;
	    upgradeAssistantApp: string;
	    uptimeApp: string;
	    unfold: string;
	    unlink: string;
	    user: string;
	    users: string;
	    usersRolesApp: string;
	    vector: string;
	    videoPlayer: string;
	    visArea: string;
	    visAreaStacked: string;
	    visBarHorizontal: string;
	    visBarHorizontalStacked: string;
	    visBarVertical: string;
	    visBarVerticalStacked: string;
	    visGauge: string;
	    visGoal: string;
	    visLine: string;
	    visMapCoordinate: string;
	    visMapRegion: string;
	    visMetric: string;
	    visPie: string;
	    visTable: string;
	    visTagCloud: string;
	    visText: string;
	    visTimelion: string;
	    visualizeApp: string;
	    visVega: string;
	    visVisualBuilder: string;
	    watchesApp: string;
	    wordWrap: string;
	    wordWrapDisabled: string;
	    workplaceSearchApp: string;
	    wrench: string;
	    tokenClass: string;
	    tokenProperty: string;
	    tokenEnum: string;
	    tokenVariable: string;
	    tokenMethod: string;
	    tokenAnnotation: string;
	    tokenException: string;
	    tokenInterface: string;
	    tokenParameter: string;
	    tokenField: string;
	    tokenElement: string;
	    tokenFunction: string;
	    tokenBoolean: string;
	    tokenString: string;
	    tokenArray: string;
	    tokenNumber: string;
	    tokenConstant: string;
	    tokenObject: string;
	    tokenEvent: string;
	    tokenKey: string;
	    tokenNull: string;
	    tokenStruct: string;
	    tokenPackage: string;
	    tokenOperator: string;
	    tokenEnumMember: string;
	    tokenRepo: string;
	    tokenSymbol: string;
	    tokenFile: string;
	    tokenModule: string;
	    tokenNamespace: string;
	    tokenDate: string;
	    tokenIP: string;
	    tokenNested: string;
	    tokenAlias: string;
	    tokenShape: string;
	    tokenGeo: string;
	    tokenRange: string;
	    tokenBinary: string;
	    tokenJoin: string;
	    tokenPercolator: string;
	    tokenFlattened: string;
	    tokenRankFeature: string;
	    tokenRankFeatures: string;
	    tokenKeyword: string;
	    tokenCompletionSuggester: string;
	    tokenDenseVector: string;
	    tokenText: string;
	    tokenTokenCount: string;
	    tokenSearchType: string;
	    tokenHistogram: string;
	};
	export const TYPES: ("string" | "number" | "function" | "search" | "link" | "temperature" | "stop" | "color" | "accessibility" | "aggregate" | "alert" | "annotation" | "apps" | "asterisk" | "beaker" | "bell" | "bellSlash" | "bolt" | "branch" | "broom" | "brush" | "bug" | "bullseye" | "calendar" | "check" | "checkInCircleFilled" | "cheer" | "clock" | "cloudDrizzle" | "cloudStormy" | "cloudSunny" | "compute" | "console" | "continuityAbove" | "continuityAboveBelow" | "continuityBelow" | "continuityWithin" | "copy" | "cross" | "crosshairs" | "crossInACircleFilled" | "currency" | "cut" | "database" | "document" | "documentation" | "documentEdit" | "documents" | "dot" | "download" | "editorDistributeHorizontal" | "editorDistributeVertical" | "editorItemAlignLeft" | "editorItemAlignBottom" | "editorItemAlignCenter" | "editorItemAlignMiddle" | "editorItemAlignRight" | "editorItemAlignTop" | "editorPositionBottomLeft" | "editorPositionBottomRight" | "editorPositionTopLeft" | "editorPositionTopRight" | "email" | "empty" | "eql" | "eraser" | "exit" | "expand" | "expandMini" | "eye" | "faceNeutral" | "filter" | "flag" | "fold" | "frameNext" | "framePrevious" | "fullScreenExit" | "gear" | "glasses" | "globe" | "grab" | "grid" | "heart" | "heatmap" | "help" | "home" | "iInCircle" | "image" | "inputOutput" | "inspect" | "invert" | "ip" | "layers" | "list" | "lock" | "lockOpen" | "magnet" | "magnifyWithMinus" | "magnifyWithPlus" | "memory" | "menu" | "menuDown" | "menuLeft" | "menuRight" | "menuUp" | "merge" | "minimize" | "minus" | "mobile" | "moon" | "nested" | "node" | "offline" | "online" | "package" | "pageSelect" | "pagesSelect" | "partial" | "pause" | "pencil" | "percent" | "pin" | "play" | "playFilled" | "plus" | "popout" | "push" | "quote" | "refresh" | "reporter" | "save" | "scale" | "securitySignal" | "securitySignalDetected" | "securitySignalResolved" | "shard" | "share" | "snowflake" | "sortable" | "sortLeft" | "sortRight" | "starPlusEmpty" | "starPlusFilled" | "stats" | "storage" | "submodule" | "symlink" | "tableOfContents" | "tag" | "tear" | "timeline" | "timeslider" | "training" | "trash" | "unfold" | "unlink" | "user" | "users" | "vector" | "videoPlayer" | "wordWrap" | "wordWrapDisabled" | "wrench" | "addDataApp" | "advancedSettingsApp" | "analyzeEvent" | "apmApp" | "apmTrace" | "appSearchApp" | "arrowDown" | "arrowLeft" | "arrowRight" | "arrowUp" | "auditbeatApp" | "boxesHorizontal" | "boxesVertical" | "canvasApp" | "codeApp" | "classificationJob" | "consoleApp" | "controlsHorizontal" | "controlsVertical" | "copyClipboard" | "createAdvancedJob" | "createMultiMetricJob" | "createPopulationJob" | "createSingleMetricJob" | "crossClusterReplicationApp" | "dashboardApp" | "dataVisualizer" | "devToolsApp" | "discoverApp" | "editorAlignCenter" | "editorAlignLeft" | "editorAlignRight" | "editorBold" | "editorCodeBlock" | "editorComment" | "editorHeading" | "editorItalic" | "editorLink" | "editorOrderedList" | "editorRedo" | "editorStrike" | "editorTable" | "editorUnderline" | "editorUndo" | "editorUnorderedList" | "emsApp" | "exportAction" | "eyeClosed" | "faceHappy" | "faceSad" | "filebeatApp" | "folderCheck" | "folderClosed" | "folderExclamation" | "folderOpen" | "fullScreen" | "gisApp" | "grabHorizontal" | "graphApp" | "grokApp" | "heartbeatApp" | "importAction" | "indexClose" | "indexEdit" | "indexFlush" | "indexManagementApp" | "indexMapping" | "indexOpen" | "indexPatternApp" | "indexRollupApp" | "indexRuntime" | "indexSettings" | "keyboardShortcut" | "kqlField" | "kqlFunction" | "kqlOperand" | "kqlSelector" | "kqlValue" | "lensApp" | "listAdd" | "logsApp" | "logoAerospike" | "logoApache" | "logoAppSearch" | "logoAWS" | "logoAWSMono" | "logoAzure" | "logoAzureMono" | "logoBeats" | "logoBusinessAnalytics" | "logoCeph" | "logoCloud" | "logoCloudEnterprise" | "logoCode" | "logoCodesandbox" | "logoCouchbase" | "logoDocker" | "logoDropwizard" | "logoElastic" | "logoElasticsearch" | "logoElasticStack" | "logoEnterpriseSearch" | "logoEtcd" | "logoGCP" | "logoGCPMono" | "logoGithub" | "logoGmail" | "logoGolang" | "logoGoogleG" | "logoHAproxy" | "logoIBM" | "logoIBMMono" | "logoKafka" | "logoKibana" | "logoKubernetes" | "logoLogging" | "logoLogstash" | "logoMaps" | "logoMemcached" | "logoMetrics" | "logoMongodb" | "logoMySQL" | "logoNginx" | "logoObservability" | "logoOsquery" | "logoPhp" | "logoPostgres" | "logoPrometheus" | "logoRabbitmq" | "logoRedis" | "logoSecurity" | "logoSiteSearch" | "logoSketch" | "logoSlack" | "logoUptime" | "logoWebhook" | "logoWindows" | "logoWorkplaceSearch" | "logstashFilter" | "logstashIf" | "logstashInput" | "logstashOutput" | "logstashQueue" | "machineLearningApp" | "managementApp" | "mapMarker" | "metricbeatApp" | "metricsApp" | "minusInCircle" | "minusInCircleFilled" | "monitoringApp" | "notebookApp" | "outlierDetectionJob" | "packetbeatApp" | "paperClip" | "pinFilled" | "pipelineApp" | "plusInCircle" | "plusInCircleFilled" | "questionInCircle" | "recentlyViewedApp" | "regressionJob" | "reportingApp" | "returnKey" | "savedObjectsApp" | "searchProfilerApp" | "securityAnalyticsApp" | "securityApp" | "sortDown" | "sortUp" | "spacesApp" | "sqlApp" | "starEmpty" | "starEmptySpace" | "starFilled" | "starFilledSpace" | "starMinusEmpty" | "starMinusFilled" | "stopFilled" | "stopSlash" | "swatchInput" | "tableDensityExpanded" | "tableDensityCompact" | "tableDensityNormal" | "timelionApp" | "upgradeAssistantApp" | "uptimeApp" | "usersRolesApp" | "visArea" | "visAreaStacked" | "visBarHorizontal" | "visBarHorizontalStacked" | "visBarVertical" | "visBarVerticalStacked" | "visGauge" | "visGoal" | "visLine" | "visMapCoordinate" | "visMapRegion" | "visMetric" | "visPie" | "visTable" | "visTagCloud" | "visText" | "visTimelion" | "visualizeApp" | "visVega" | "visVisualBuilder" | "watchesApp" | "workplaceSearchApp" | "tokenClass" | "tokenProperty" | "tokenEnum" | "tokenVariable" | "tokenMethod" | "tokenAnnotation" | "tokenException" | "tokenInterface" | "tokenParameter" | "tokenField" | "tokenElement" | "tokenFunction" | "tokenBoolean" | "tokenString" | "tokenArray" | "tokenNumber" | "tokenConstant" | "tokenObject" | "tokenEvent" | "tokenKey" | "tokenNull" | "tokenStruct" | "tokenPackage" | "tokenOperator" | "tokenEnumMember" | "tokenRepo" | "tokenSymbol" | "tokenFile" | "tokenModule" | "tokenNamespace" | "tokenDate" | "tokenIP" | "tokenNested" | "tokenAlias" | "tokenShape" | "tokenGeo" | "tokenRange" | "tokenBinary" | "tokenJoin" | "tokenPercolator" | "tokenFlattened" | "tokenRankFeature" | "tokenRankFeatures" | "tokenKeyword" | "tokenCompletionSuggester" | "tokenDenseVector" | "tokenText" | "tokenTokenCount" | "tokenSearchType" | "tokenHistogram")[];
	export type EuiIconType = keyof typeof typeToPathMap;
	export type IconType = EuiIconType | string | ComponentType; const colorToClassMap: {
	    default: null;
	    primary: string;
	    secondary: string;
	    success: string;
	    accent: string;
	    warning: string;
	    danger: string;
	    text: string;
	    subdued: string;
	    ghost: string;
	    inherit: string;
	};
	export const COLORS: NamedColor[]; type NamedColor = keyof typeof colorToClassMap;
	export type IconColor = string | NamedColor; const sizeToClassNameMap: {
	    original: null;
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	    xxl: string;
	};
	export const SIZES: IconSize[];
	export type IconSize = keyof typeof sizeToClassNameMap;
	export type EuiIconProps = CommonProps & Omit<SVGAttributes<SVGElement>, 'type' | 'color' | 'size'> & {
	    /**
	     * `Enum` is any of the named icons listed in the docs, `string` is usually a URL to an SVG file, and `elementType` is any React SVG component
	     */
	    type: IconType;
	    /**
	     * One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value.
	     * Note that coloring only works if your SVG is removed of fill attributes.
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: IconColor;
	    /**
	     * Note that every size other than `original` assumes the provided SVG sits on a square viewbox.
	     */
	    size?: IconSize;
	    /**
	     * Descriptive title for naming the icon based on its use
	     */
	    title?: string;
	    /**
	     * A unique identifier for the title element
	     */
	    titleId?: string;
	    /**
	     * Its value should be one or more element IDs
	     */
	    'aria-labelledby'?: string;
	    /**
	     * Callback when the icon has been loaded & rendered
	     */
	    onIconLoad?: () => void;
	};
	interface State {
	    icon: undefined | ComponentType | string;
	    iconTitle: undefined | string;
	    isLoading: boolean;
	    neededLoading: boolean;
	}
	export const clearIconComponentCache: (iconType?: "string" | "number" | "function" | "search" | "link" | "temperature" | "stop" | "color" | "accessibility" | "aggregate" | "alert" | "annotation" | "apps" | "asterisk" | "beaker" | "bell" | "bellSlash" | "bolt" | "branch" | "broom" | "brush" | "bug" | "bullseye" | "calendar" | "check" | "checkInCircleFilled" | "cheer" | "clock" | "cloudDrizzle" | "cloudStormy" | "cloudSunny" | "compute" | "console" | "continuityAbove" | "continuityAboveBelow" | "continuityBelow" | "continuityWithin" | "copy" | "cross" | "crosshairs" | "crossInACircleFilled" | "currency" | "cut" | "database" | "document" | "documentation" | "documentEdit" | "documents" | "dot" | "download" | "editorDistributeHorizontal" | "editorDistributeVertical" | "editorItemAlignLeft" | "editorItemAlignBottom" | "editorItemAlignCenter" | "editorItemAlignMiddle" | "editorItemAlignRight" | "editorItemAlignTop" | "editorPositionBottomLeft" | "editorPositionBottomRight" | "editorPositionTopLeft" | "editorPositionTopRight" | "email" | "empty" | "eql" | "eraser" | "exit" | "expand" | "expandMini" | "eye" | "faceNeutral" | "filter" | "flag" | "fold" | "frameNext" | "framePrevious" | "fullScreenExit" | "gear" | "glasses" | "globe" | "grab" | "grid" | "heart" | "heatmap" | "help" | "home" | "iInCircle" | "image" | "inputOutput" | "inspect" | "invert" | "ip" | "layers" | "list" | "lock" | "lockOpen" | "magnet" | "magnifyWithMinus" | "magnifyWithPlus" | "memory" | "menu" | "menuDown" | "menuLeft" | "menuRight" | "menuUp" | "merge" | "minimize" | "minus" | "mobile" | "moon" | "nested" | "node" | "offline" | "online" | "package" | "pageSelect" | "pagesSelect" | "partial" | "pause" | "pencil" | "percent" | "pin" | "play" | "playFilled" | "plus" | "popout" | "push" | "quote" | "refresh" | "reporter" | "save" | "scale" | "securitySignal" | "securitySignalDetected" | "securitySignalResolved" | "shard" | "share" | "snowflake" | "sortable" | "sortLeft" | "sortRight" | "starPlusEmpty" | "starPlusFilled" | "stats" | "storage" | "submodule" | "symlink" | "tableOfContents" | "tag" | "tear" | "timeline" | "timeslider" | "training" | "trash" | "unfold" | "unlink" | "user" | "users" | "vector" | "videoPlayer" | "wordWrap" | "wordWrapDisabled" | "wrench" | "addDataApp" | "advancedSettingsApp" | "analyzeEvent" | "apmApp" | "apmTrace" | "appSearchApp" | "arrowDown" | "arrowLeft" | "arrowRight" | "arrowUp" | "auditbeatApp" | "boxesHorizontal" | "boxesVertical" | "canvasApp" | "codeApp" | "classificationJob" | "consoleApp" | "controlsHorizontal" | "controlsVertical" | "copyClipboard" | "createAdvancedJob" | "createMultiMetricJob" | "createPopulationJob" | "createSingleMetricJob" | "crossClusterReplicationApp" | "dashboardApp" | "dataVisualizer" | "devToolsApp" | "discoverApp" | "editorAlignCenter" | "editorAlignLeft" | "editorAlignRight" | "editorBold" | "editorCodeBlock" | "editorComment" | "editorHeading" | "editorItalic" | "editorLink" | "editorOrderedList" | "editorRedo" | "editorStrike" | "editorTable" | "editorUnderline" | "editorUndo" | "editorUnorderedList" | "emsApp" | "exportAction" | "eyeClosed" | "faceHappy" | "faceSad" | "filebeatApp" | "folderCheck" | "folderClosed" | "folderExclamation" | "folderOpen" | "fullScreen" | "gisApp" | "grabHorizontal" | "graphApp" | "grokApp" | "heartbeatApp" | "importAction" | "indexClose" | "indexEdit" | "indexFlush" | "indexManagementApp" | "indexMapping" | "indexOpen" | "indexPatternApp" | "indexRollupApp" | "indexRuntime" | "indexSettings" | "keyboardShortcut" | "kqlField" | "kqlFunction" | "kqlOperand" | "kqlSelector" | "kqlValue" | "lensApp" | "listAdd" | "logsApp" | "logoAerospike" | "logoApache" | "logoAppSearch" | "logoAWS" | "logoAWSMono" | "logoAzure" | "logoAzureMono" | "logoBeats" | "logoBusinessAnalytics" | "logoCeph" | "logoCloud" | "logoCloudEnterprise" | "logoCode" | "logoCodesandbox" | "logoCouchbase" | "logoDocker" | "logoDropwizard" | "logoElastic" | "logoElasticsearch" | "logoElasticStack" | "logoEnterpriseSearch" | "logoEtcd" | "logoGCP" | "logoGCPMono" | "logoGithub" | "logoGmail" | "logoGolang" | "logoGoogleG" | "logoHAproxy" | "logoIBM" | "logoIBMMono" | "logoKafka" | "logoKibana" | "logoKubernetes" | "logoLogging" | "logoLogstash" | "logoMaps" | "logoMemcached" | "logoMetrics" | "logoMongodb" | "logoMySQL" | "logoNginx" | "logoObservability" | "logoOsquery" | "logoPhp" | "logoPostgres" | "logoPrometheus" | "logoRabbitmq" | "logoRedis" | "logoSecurity" | "logoSiteSearch" | "logoSketch" | "logoSlack" | "logoUptime" | "logoWebhook" | "logoWindows" | "logoWorkplaceSearch" | "logstashFilter" | "logstashIf" | "logstashInput" | "logstashOutput" | "logstashQueue" | "machineLearningApp" | "managementApp" | "mapMarker" | "metricbeatApp" | "metricsApp" | "minusInCircle" | "minusInCircleFilled" | "monitoringApp" | "notebookApp" | "outlierDetectionJob" | "packetbeatApp" | "paperClip" | "pinFilled" | "pipelineApp" | "plusInCircle" | "plusInCircleFilled" | "questionInCircle" | "recentlyViewedApp" | "regressionJob" | "reportingApp" | "returnKey" | "savedObjectsApp" | "searchProfilerApp" | "securityAnalyticsApp" | "securityApp" | "sortDown" | "sortUp" | "spacesApp" | "sqlApp" | "starEmpty" | "starEmptySpace" | "starFilled" | "starFilledSpace" | "starMinusEmpty" | "starMinusFilled" | "stopFilled" | "stopSlash" | "swatchInput" | "tableDensityExpanded" | "tableDensityCompact" | "tableDensityNormal" | "timelionApp" | "upgradeAssistantApp" | "uptimeApp" | "usersRolesApp" | "visArea" | "visAreaStacked" | "visBarHorizontal" | "visBarHorizontalStacked" | "visBarVertical" | "visBarVerticalStacked" | "visGauge" | "visGoal" | "visLine" | "visMapCoordinate" | "visMapRegion" | "visMetric" | "visPie" | "visTable" | "visTagCloud" | "visText" | "visTimelion" | "visualizeApp" | "visVega" | "visVisualBuilder" | "watchesApp" | "workplaceSearchApp" | "tokenClass" | "tokenProperty" | "tokenEnum" | "tokenVariable" | "tokenMethod" | "tokenAnnotation" | "tokenException" | "tokenInterface" | "tokenParameter" | "tokenField" | "tokenElement" | "tokenFunction" | "tokenBoolean" | "tokenString" | "tokenArray" | "tokenNumber" | "tokenConstant" | "tokenObject" | "tokenEvent" | "tokenKey" | "tokenNull" | "tokenStruct" | "tokenPackage" | "tokenOperator" | "tokenEnumMember" | "tokenRepo" | "tokenSymbol" | "tokenFile" | "tokenModule" | "tokenNamespace" | "tokenDate" | "tokenIP" | "tokenNested" | "tokenAlias" | "tokenShape" | "tokenGeo" | "tokenRange" | "tokenBinary" | "tokenJoin" | "tokenPercolator" | "tokenFlattened" | "tokenRankFeature" | "tokenRankFeatures" | "tokenKeyword" | "tokenCompletionSuggester" | "tokenDenseVector" | "tokenText" | "tokenTokenCount" | "tokenSearchType" | "tokenHistogram" | undefined) => void;
	export const appendIconComponentCache: (iconTypeToIconComponentMap: {
	    [iconType: string]: React.ComponentType<{}>;
	}) => void;
	export class EuiIcon extends PureComponent<EuiIconProps, State> {
	    isMounted: boolean;
	    constructor(props: EuiIconProps);
	    componentDidUpdate(prevProps: EuiIconProps): void;
	    componentWillUnmount(): void;
	    loadIconComponent: (iconType: EuiIconType) => void;
	    onIconLoad: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiIcon, EuiIconProps, IconColor, IconSize, IconType, TYPES as ICON_TYPES, SIZES as ICON_SIZES, COLORS as ICON_COLORS, } from '@elastic\eui\src\components\icon\icon';

}
declare module '@elastic\eui\src\components\loading\loading_kibana' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const sizeToClassNameMap: {
	    m: string;
	    l: string;
	    xl: string;
	};
	export const SIZES: ("m" | "l" | "xl")[];
	export type EuiLoadingKibanaProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    size?: keyof typeof sizeToClassNameMap;
	};
	/**
	 * **DEPRECATED** Use EuiLoadingLogo instead
	 */
	export const EuiLoadingKibana: FunctionComponent<EuiLoadingKibanaProps>;
	export {};

}
declare module '@elastic\eui\src\components\loading\loading_elastic' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const sizeToClassNameMap: {
	    m: string;
	    l: string;
	    xl: string;
	    xxl: string;
	};
	export const SIZES: ("m" | "l" | "xl" | "xxl")[];
	export interface EuiLoadingElasticProps {
	    size?: keyof typeof sizeToClassNameMap;
	}
	export const EuiLoadingElastic: FunctionComponent<CommonProps & HTMLAttributes<HTMLDivElement> & EuiLoadingElasticProps>;
	export {};

}
declare module '@elastic\eui\src\components\loading\loading_chart' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const sizeToClassNameMap: {
	    m: string;
	    l: string;
	    xl: string;
	};
	export const SIZES: ("m" | "l" | "xl")[];
	export type EuiLoadingChartSize = keyof typeof sizeToClassNameMap;
	export type EuiLoadingChartProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    size?: EuiLoadingChartSize;
	    mono?: boolean;
	};
	export const EuiLoadingChart: FunctionComponent<EuiLoadingChartProps>;
	export {};

}
declare module '@elastic\eui\src\components\loading\loading_content' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type LineRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	export type EuiLoadingContentProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    lines?: LineRange;
	};
	export const EuiLoadingContent: FunctionComponent<EuiLoadingContentProps>;

}
declare module '@elastic\eui\src\components\loading\loading_spinner' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const sizeToClassNameMap: {
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	};
	export const SIZES: ("s" | "m" | "l" | "xl")[];
	export type EuiLoadingSpinnerSize = keyof typeof sizeToClassNameMap;
	export type EuiLoadingSpinnerProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    size?: EuiLoadingSpinnerSize;
	};
	export const EuiLoadingSpinner: FunctionComponent<EuiLoadingSpinnerProps>;
	export {};

}
declare module '@elastic\eui\src\components\loading\loading_logo' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon'; const sizeToClassNameMap: {
	    m: string;
	    l: string;
	    xl: string;
	};
	export const SIZES: ("m" | "l" | "xl")[];
	export type EuiLoadingLogoProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    size?: keyof typeof sizeToClassNameMap;
	    /**
	     * While this component should be restricted to using logo icons, it works with any IconType
	     */
	    logo?: IconType;
	};
	export const EuiLoadingLogo: FunctionComponent<EuiLoadingLogoProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiLoadingKibana, EuiLoadingKibanaProps } from '@elastic\eui\src\components\loading\loading_kibana';
	export { EuiLoadingElastic, EuiLoadingElasticProps } from '@elastic\eui\src\components\loading\loading_elastic';
	export { EuiLoadingChart, EuiLoadingChartProps } from '@elastic\eui\src\components\loading\loading_chart';
	export { EuiLoadingContent, EuiLoadingContentProps } from '@elastic\eui\src\components\loading\loading_content';
	export { EuiLoadingSpinner, EuiLoadingSpinnerProps } from '@elastic\eui\src\components\loading\loading_spinner';
	export { EuiLoadingLogo, EuiLoadingLogoProps } from '@elastic\eui\src\components\loading\loading_logo';

}
declare module '@elastic\eui\src\components\button\button_content' {
	import { HTMLAttributes, FunctionComponent, Ref } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon';
	export type ButtonContentIconSide = 'left' | 'right';
	export const ICON_SIDES: ButtonContentIconSide[];
	export type EuiButtonContentType = HTMLAttributes<HTMLSpanElement>;
	/**
	 * *INTERNAL ONLY*
	 * This component is simply a helper component for reuse within other button components
	 */
	export interface EuiButtonContentProps extends CommonProps {
	    /**
	     * Any `type` accepted by EuiIcon
	     */
	    iconType?: IconType;
	    /**
	     * Can only be one side `left` or `right`
	     */
	    iconSide?: ButtonContentIconSide;
	    isLoading?: boolean;
	    /**
	     * Object of props passed to the <span/> wrapping the content's text/children only (not icon)
	     */
	    textProps?: HTMLAttributes<HTMLSpanElement> & CommonProps & {
	        ref?: Ref<HTMLSpanElement>;
	        'data-text'?: string;
	    };
	    iconSize?: 's' | 'm';
	}
	export const EuiButtonContent: FunctionComponent<EuiButtonContentType & EuiButtonContentProps>;

}
declare module '@elastic\eui\src\services\security\href_validator' {
	export function validateHref(href: string): boolean;

}
declare module '@elastic\eui\src\components\button\button' {
	import React, { FunctionComponent, Ref, CSSProperties, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps, ExclusiveUnion, PropsForAnchor, PropsForButton } from '@elastic\eui\src\components\common';
	import { EuiButtonContentProps, EuiButtonContentType } from '@elastic\eui\src\components\button\button_content';
	export type ButtonColor = 'primary' | 'accent' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'text';
	export type ButtonSize = 's' | 'm';
	export const colorToClassNameMap: {
	    [color in ButtonColor]: string;
	};
	export const COLORS: ButtonColor[];
	export const sizeToClassNameMap: {
	    [size in ButtonSize]: string | null;
	};
	export const SIZES: ("s" | "m")[];
	/**
	 * Extends EuiButtonContentProps which provides
	 * `iconType`, `iconSide`, and `textProps`
	 */
	export interface EuiButtonProps extends EuiButtonContentProps, CommonProps {
	    children?: ReactNode;
	    /**
	     * Make button a solid color for prominence
	     */
	    fill?: boolean;
	    /**
	     * Any of our named colors.
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: ButtonColor;
	    /**
	     * Use size `s` in confined spaces
	     */
	    size?: ButtonSize;
	    /**
	     * `disabled` is also allowed
	     */
	    isDisabled?: boolean;
	    /**
	     * Applies the boolean state as the `aria-pressed` property to create a toggle button.
	     * *Only use when the readable text does not change between states.*
	     */
	    isSelected?: boolean;
	    /**
	     * Extends the button to 100% width
	     */
	    fullWidth?: boolean;
	    /**
	     * Override the default minimum width
	     */
	    minWidth?: CSSProperties['minWidth'];
	    /**
	     * Force disables the button and changes the icon to a loading spinner
	     */
	    isLoading?: boolean;
	    /**
	     * Object of props passed to the <span/> wrapping the button's content
	     */
	    contentProps?: EuiButtonContentType;
	    style?: CSSProperties;
	}
	export type EuiButtonDisplayProps = EuiButtonProps & HTMLAttributes<HTMLElement> & {
	    /**
	     * Provide a valid element to render the element as
	     */
	    element: 'a' | 'button' | 'span' | 'label';
	    /**
	     * Provide the component's base class name to build the class list on
	     */
	    baseClassName: string;
	}; const EuiButtonDisplay: React.ForwardRefExoticComponent<EuiButtonProps & React.HTMLAttributes<HTMLElement> & {
	    /**
	     * Provide a valid element to render the element as
	     */
	    element: 'a' | 'button' | 'span' | 'label';
	    /**
	     * Provide the component's base class name to build the class list on
	     */
	    baseClassName: string;
	} & React.RefAttributes<HTMLElement>>;
	export { EuiButtonDisplay };
	export type EuiButtonPropsForAnchor = PropsForAnchor<EuiButtonProps, {
	    buttonRef?: Ref<HTMLAnchorElement>;
	}>;
	export type EuiButtonPropsForButton = PropsForButton<EuiButtonProps, {
	    buttonRef?: Ref<HTMLButtonElement>;
	}>;
	export type Props = ExclusiveUnion<EuiButtonPropsForAnchor, EuiButtonPropsForButton>;
	export const EuiButton: FunctionComponent<Props>;

}
declare module '@elastic\eui\src\components\button\button_empty\button_empty' {
	import { FunctionComponent, Ref } from 'react';
	import { CommonProps, ExclusiveUnion, PropsForAnchor, PropsForButton } from '@elastic\eui\src\components\common';
	import { EuiButtonContentProps, EuiButtonContentType } from '@elastic\eui\src\components\button\button_content';
	export type EuiButtonEmptyColor = 'primary' | 'danger' | 'text' | 'ghost' | 'success' | 'warning';
	export const COLORS: EuiButtonEmptyColor[]; const sizeToClassNameMap: {
	    xs: string;
	    s: string;
	    l: string;
	};
	export const SIZES: ("xs" | "s" | "l")[];
	export type EuiButtonEmptySizes = keyof typeof sizeToClassNameMap; const flushTypeToClassNameMap: {
	    left: string;
	    right: string;
	    both: string;
	};
	export const FLUSH_TYPES: ("left" | "right" | "both")[];
	/**
	 * Extends EuiButtonContentProps which provides
	 * `iconType`, `iconSide`, and `textProps`
	 */
	export interface CommonEuiButtonEmptyProps extends EuiButtonContentProps, CommonProps {
	    /**
	     * Any of our named colors
	     */
	    color?: EuiButtonEmptyColor;
	    size?: EuiButtonEmptySizes;
	    /**
	     * Ensure the text of the button sits flush to the left, right, or both sides of its container
	     */
	    flush?: keyof typeof flushTypeToClassNameMap;
	    /**
	     * `disabled` is also allowed
	     */
	    isDisabled?: boolean;
	    /**
	     * Force disables the button and changes the icon to a loading spinner
	     */
	    isLoading?: boolean;
	    /**
	     * Applies the boolean state as the `aria-pressed` property to create a toggle button.
	     * *Only use when the readable text does not change between states.*
	     */
	    isSelected?: boolean;
	    href?: string;
	    target?: string;
	    rel?: string;
	    type?: 'button' | 'submit';
	    buttonRef?: Ref<HTMLButtonElement | HTMLAnchorElement>;
	    /**
	     * Object of props passed to the <span/> wrapping the button's content
	     */
	    contentProps?: EuiButtonContentType;
	} type EuiButtonEmptyPropsForAnchor = PropsForAnchor<CommonEuiButtonEmptyProps>; type EuiButtonEmptyPropsForButton = PropsForButton<CommonEuiButtonEmptyProps>;
	export type EuiButtonEmptyProps = ExclusiveUnion<EuiButtonEmptyPropsForAnchor, EuiButtonEmptyPropsForButton>;
	export const EuiButtonEmpty: FunctionComponent<EuiButtonEmptyProps>;
	export {};

}
declare module '@elastic\eui\src\components\button\button_empty' {
	export { COLORS, EuiButtonEmpty, EuiButtonEmptyColor, EuiButtonEmptyProps, EuiButtonEmptySizes, } from '@elastic\eui\src\components\button\button_empty\button_empty';

}
declare module '@elastic\eui\src\components\button\button_icon\button_icon' {
	import { FunctionComponent, Ref } from 'react';
	import { CommonProps, ExclusiveUnion, PropsForAnchor, PropsForButton } from '@elastic\eui\src\components\common';
	import { IconType, IconSize } from '@elastic\eui\src\components\icon';
	export type EuiButtonIconColor = 'accent' | 'danger' | 'ghost' | 'primary'
	/**
	 * Set for deprecation 3/2/21
	 * This color button is close enough to text to be duplicative
	 */
	 | 'subdued' | 'success' | 'text' | 'warning'; const displayToClassNameMap: {
	    base: null;
	    empty: string;
	    fill: string;
	};
	export const DISPLAYS: ("empty" | "fill" | "base")[]; type EuiButtonIconDisplay = keyof typeof displayToClassNameMap;
	export interface EuiButtonIconProps extends CommonProps {
	    iconType: IconType;
	    /**
	     * Any of the named color palette options.
	     * **`subdued` set to be DEPRECATED, use `text` instead**
	     */
	    color?: EuiButtonIconColor;
	    'aria-label'?: string;
	    'aria-labelledby'?: string;
	    isDisabled?: boolean;
	    /**
	     * Overall size of button.
	     * Matches the sizes of other EuiButtons
	     */
	    size?: EuiButtonIconSizes;
	    /**
	     * Size of the icon only.
	     * This will not affect the overall size of the button
	     */
	    iconSize?: IconSize;
	    /**
	     * Applies the boolean state as the `aria-pressed` property to create a toggle button.
	     * *Only use when the readable text does not change between states.*
	     */
	    isSelected?: boolean;
	    /**
	     * Sets the display style for matching other EuiButton types.
	     * `base` is equivelant to a typical EuiButton
	     * `fill` is equivelant to a filled EuiButton
	     * `empty` (default) is equivelant to an EuiButtonEmpty
	     */
	    display?: EuiButtonIconDisplay;
	} type EuiButtonIconPropsForAnchor = {
	    type?: string;
	} & PropsForAnchor<EuiButtonIconProps, {
	    buttonRef?: Ref<HTMLAnchorElement>;
	}>;
	export type EuiButtonIconPropsForButton = {
	    type?: 'submit' | 'reset' | 'button';
	} & PropsForButton<EuiButtonIconProps, {
	    buttonRef?: Ref<HTMLButtonElement>;
	}>; type Props = ExclusiveUnion<EuiButtonIconPropsForAnchor, EuiButtonIconPropsForButton>;
	export const COLORS: EuiButtonIconColor[]; const sizeToClassNameMap: {
	    xs: string;
	    s: string;
	    m: string;
	};
	export type EuiButtonIconSizes = keyof typeof sizeToClassNameMap;
	export const SIZES: ("xs" | "s" | "m")[];
	export const EuiButtonIcon: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\button\button_icon' {
	export { EuiButtonIcon, EuiButtonIconColor, EuiButtonIconProps, EuiButtonIconPropsForButton, } from '@elastic\eui\src\components\button\button_icon\button_icon';

}
declare module '@elastic\eui\src\components\inner_text\inner_text' {
	import { FunctionComponent, ReactElement } from 'react'; type RefT = HTMLElement | Element | undefined | null;
	export function useInnerText(innerTextFallback?: string): [(node: RefT) => void, string | undefined];
	export interface EuiInnerTextProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: (ref?: (node: RefT) => void, innerText?: string) => ReactElement;
	    fallback?: string;
	}
	export const EuiInnerText: FunctionComponent<EuiInnerTextProps>;
	export {};

}
declare module '@elastic\eui\src\components\inner_text\render_to_text' {
	import { ReactNode } from 'react';
	export function useRenderToText(node: ReactNode, placeholder?: string): string;

}
declare module '@elastic/eui' {
	export { useInnerText, EuiInnerText, EuiInnerTextProps } from '@elastic\eui\src\components\inner_text\inner_text';
	export { useRenderToText } from '@elastic\eui\src\components\inner_text\render_to_text';

}
declare module '@elastic\eui\src\components\button\button_group\button_group_button' {
	import { FunctionComponent } from 'react';
	import { EuiButtonGroupOptionProps, EuiButtonGroupProps } from '@elastic\eui\src\components\button\button_group\button_group'; type Props = EuiButtonGroupOptionProps & {
	    /**
	     * Element to display based on single or multi
	     */
	    element: 'button' | 'label';
	    /**
	     * Styles the selected button to look selected (usually with `fill`)
	     */
	    isSelected?: boolean;
	    /**
	     * Name of the whole group for 'single'.
	     */
	    name?: string;
	    /**
	     * The value of the radio input for 'single'.
	     */
	    value?: string;
	    /**
	     * Inherit from EuiButtonGroup
	     */
	    color: EuiButtonGroupProps['color'];
	    /**
	     * Inherit from EuiButtonGroup
	     */
	    size: EuiButtonGroupProps['buttonSize'];
	    /**
	     * Inherit from EuiButtonGroup
	     */
	    isIconOnly: EuiButtonGroupProps['isIconOnly'];
	    /**
	     * Inherit from EuiButtonGroup
	     */
	    onChange: EuiButtonGroupProps['onChange'];
	};
	export const EuiButtonGroupButton: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\button\button_group\button_group' {
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { ButtonColor } from '@elastic\eui\src\components\button\button';
	import { EuiButtonContentProps } from '@elastic\eui\src\components\button\button_content';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiButtonGroupOptionProps extends EuiButtonContentProps, CommonProps {
	    /**
	     * Each option must have a unique `id` for maintaining selection
	     */
	    id: string;
	    /**
	     * Each option must have a `label` even for icons which will be applied as the `aria-label`
	     */
	    label: ReactNode;
	    isDisabled?: boolean;
	    /**
	     * The value of the radio input.
	     */
	    value?: any;
	    /**
	     * The type of the underlying HTML button
	     */
	    type?: 'button' | 'submit' | 'reset';
	}
	export type EuiButtonGroupProps = CommonProps & {
	    /**
	     * Typical sizing is `s`. Medium `m` size should be reserved for major features.
	     * `compressed` is meant to be used alongside and within compressed forms.
	     */
	    buttonSize?: 's' | 'm' | 'compressed';
	    isDisabled?: boolean;
	    /**
	     * Expands the whole group to the full width of the container.
	     * Each button gets equal widths no matter the content
	     */
	    isFullWidth?: boolean;
	    /**
	     * Hides the label to only show the `iconType` provided by the `option`
	     */
	    isIconOnly?: boolean;
	    /**
	     * A hidden group title (required for accessibility)
	     */
	    legend: string;
	    /**
	     * Compressed styles don't support `ghost` color (Color will be changed to "text")
	     */
	    color?: ButtonColor;
	    /**
	     * Actual type is `'single' | 'multi'`.
	     * Determines how the selection of the group should be handled.
	     * With `'single'` only one option can be selected at a time (similar to radio group).
	     * With `'multi'` multiple options selected (similar to checkbox group).
	     */
	    type?: 'single' | 'multi';
	    /**
	     * An array of #EuiButtonGroupOptionProps
	     */
	    options: EuiButtonGroupOptionProps[];
	} & ({
	    /**
	     * Default for `type` is single so it can also be excluded
	     */
	    type?: 'single';
	    /**
	     * The `name` attribute for radio inputs;
	     * Defaults to a random string
	     */
	    name?: string;
	    /**
	     * Styles the selected option to look selected (usually with `fill`)
	     * Required by and only used in `type='single'`.
	     */
	    idSelected: string;
	    /**
	     * Single: Returns the `id` of the clicked option and the `value`
	     */
	    onChange: (id: string, value?: any) => void;
	    idToSelectedMap?: never;
	} | {
	    type: 'multi';
	    /**
	     * A map of `id`s as keys with the selected boolean values.
	     * Required by and only used in `type='multi'`.
	     */
	    idToSelectedMap?: {
	        [id: string]: boolean;
	    };
	    /**
	     * Multi: Returns the `id` of the clicked option
	     */
	    onChange: (id: string) => void;
	    idSelected?: never;
	    name?: never;
	}); type Props = Omit<HTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'color'> & EuiButtonGroupProps;
	export const EuiButtonGroup: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\button\button_group' {
	export { EuiButtonGroup, EuiButtonGroupOptionProps, EuiButtonGroupProps, } from '@elastic\eui\src\components\button\button_group\button_group';

}
declare module '@elastic/eui' {
	export { COLORS, ButtonColor, ButtonSize, EuiButton, EuiButtonProps, } from '@elastic\eui\src\components\button\button';
	export { EuiButtonEmpty, EuiButtonEmptyColor, EuiButtonEmptyProps, EuiButtonEmptySizes, } from '@elastic\eui\src\components\button\button_empty';
	export { EuiButtonIcon, EuiButtonIconColor, EuiButtonIconProps, EuiButtonIconPropsForButton, } from '@elastic\eui\src\components\button\button_icon';
	export { EuiButtonGroup, EuiButtonGroupOptionProps, EuiButtonGroupProps, } from '@elastic\eui\src\components\button\button_group';

}
declare module '@elastic\eui\src\components\color_picker\color_picker_swatch' {
	import React, { ButtonHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiColorPickerSwatchProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
	    color?: string;
	};
	export const EuiColorPickerSwatch: React.ForwardRefExoticComponent<CommonProps & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "className" | "id" | "lang" | "name" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "form" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "disabled" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "value"> & {
	    color?: string | undefined;
	} & React.RefAttributes<HTMLButtonElement>>;

}
declare module '@elastic\eui\src\components\focus_trap\focus_trap' {
	import { Component, CSSProperties } from 'react';
	import { ReactFocusOnProps } from 'react-focus-on/dist/es5/types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	/**
	 * A DOM node, a selector string (which will be passed to
	 * `document.querySelector()` to find the DOM node), or a function that
	 * returns a DOM node.
	 */
	export type FocusTarget = HTMLElement | string | (() => HTMLElement);
	interface EuiFocusTrapInterface {
	    /**
	     * Clicking outside the trap area will disable the trap
	     */
	    clickOutsideDisables?: boolean;
	    /**
	     * Reference to element that will get focus when the trap is initiated
	     */
	    initialFocus?: FocusTarget;
	    style?: CSSProperties;
	    disabled?: boolean;
	}
	export interface EuiFocusTrapProps extends CommonProps, Omit<ReactFocusOnProps, 'enabled'>, // Inverted `disabled` prop used instead
	EuiFocusTrapInterface {
	}
	interface State {
	    hasBeenDisabledByClick: boolean;
	}
	export class EuiFocusTrap extends Component<EuiFocusTrapProps, State> {
	    static defaultProps: {
	        clickOutsideDisables: boolean;
	        disabled: boolean;
	        returnFocus: boolean;
	        noIsolation: boolean;
	        scrollLock: boolean;
	    };
	    state: State;
	    lastInterceptedEvent: Event | null;
	    preventFocusExit: boolean;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: EuiFocusTrapProps): void;
	    setInitialFocus: (initialFocus?: string | HTMLElement | (() => HTMLElement) | undefined) => void;
	    handleOutsideClick: ReactFocusOnProps['onClickOutside'];
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiFocusTrap, EuiFocusTrapProps, FocusTarget } from '@elastic\eui\src\components\focus_trap\focus_trap';

}
declare module '@elastic\eui\src\components\flex\flex_group' {
	import React, { HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type FlexGroupAlignItems = keyof typeof alignItemsToClassNameMap;
	export type FlexGroupComponentType = 'div' | 'span';
	export type FlexGroupDirection = keyof typeof directionToClassNameMap;
	export type FlexGroupGutterSize = keyof typeof gutterSizeToClassNameMap;
	export type FlexGroupJustifyContent = keyof typeof justifyContentToClassNameMap;
	export interface EuiFlexGroupProps extends CommonProps, HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
	    alignItems?: FlexGroupAlignItems;
	    component?: FlexGroupComponentType;
	    direction?: FlexGroupDirection;
	    gutterSize?: FlexGroupGutterSize;
	    justifyContent?: FlexGroupJustifyContent;
	    responsive?: boolean;
	    wrap?: boolean;
	} const gutterSizeToClassNameMap: {
	    none: null;
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	};
	export const GUTTER_SIZES: ("xs" | "s" | "m" | "l" | "xl" | "none")[];
	export type EuiFlexGroupGutterSize = keyof typeof gutterSizeToClassNameMap; const alignItemsToClassNameMap: {
	    stretch: null;
	    flexStart: string;
	    flexEnd: string;
	    center: string;
	    baseline: string;
	};
	export const ALIGN_ITEMS: ("center" | "baseline" | "stretch" | "flexStart" | "flexEnd")[]; const justifyContentToClassNameMap: {
	    flexStart: null;
	    flexEnd: string;
	    center: string;
	    spaceBetween: string;
	    spaceAround: string;
	    spaceEvenly: string;
	};
	export const JUSTIFY_CONTENTS: ("center" | "flexStart" | "flexEnd" | "spaceBetween" | "spaceAround" | "spaceEvenly")[]; const directionToClassNameMap: {
	    row: string;
	    rowReverse: string;
	    column: string;
	    columnReverse: string;
	};
	export const DIRECTIONS: ("column" | "row" | "rowReverse" | "columnReverse")[];
	export const EuiFlexGroup: React.ForwardRefExoticComponent<EuiFlexGroupProps & React.RefAttributes<HTMLDivElement | HTMLSpanElement>>;
	export {};

}
declare module '@elastic\eui\src\components\flex\flex_grid' {
	import { HTMLAttributes, ReactNode, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type FlexGridGutterSize = keyof typeof gutterSizeToClassNameMap;
	export type FlexGridColumns = 0 | 1 | 2 | 3 | 4;
	export type FlexGridDirection = keyof typeof directionToClassNameMap;
	export interface EuiFlexGridProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    /**
	     * Number of columns `1-4`, pass `0` for normal display
	     */
	    columns?: FlexGridColumns;
	    /**
	     * Flex layouts default to left-right then top-down (`row`).
	     * Change this prop to `column` to create a top-down then left-right display.
	     * Only works with column count of `1-4`.
	     */
	    direction?: FlexGridDirection;
	    /**
	     * Space between flex items
	     */
	    gutterSize?: FlexGridGutterSize;
	    /**
	     * Force each item to be display block on smaller screens
	     */
	    responsive?: boolean;
	    /**
	     * The tag to render
	     */
	    component?: keyof JSX.IntrinsicElements;
	} const directionToClassNameMap: {
	    row: null;
	    column: string;
	};
	export const DIRECTIONS: ("column" | "row")[]; const gutterSizeToClassNameMap: {
	    none: string;
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	};
	export const GUTTER_SIZES: FlexGridGutterSize[];
	export const COLUMNS: FlexGridColumns[];
	export const EuiFlexGrid: FunctionComponent<CommonProps & HTMLAttributes<HTMLDivElement> & EuiFlexGridProps>;
	export {};

}
declare module '@elastic\eui\src\components\flex\flex_item' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type FlexItemGrowSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | true | false | null;
	export interface EuiFlexItemProps {
	    grow?: FlexItemGrowSize;
	    component?: keyof JSX.IntrinsicElements;
	}
	export const GROW_SIZES: FlexItemGrowSize[];
	export const EuiFlexItem: FunctionComponent<CommonProps & HTMLAttributes<HTMLDivElement | HTMLSpanElement> & EuiFlexItemProps>;

}
declare module '@elastic/eui' {
	export { EuiFlexGroup, EuiFlexGroupProps, EuiFlexGroupGutterSize, } from '@elastic\eui\src\components\flex\flex_group';
	export { EuiFlexGrid, EuiFlexGridProps } from '@elastic\eui\src\components\flex\flex_grid';
	export { EuiFlexItem, EuiFlexItemProps } from '@elastic\eui\src\components\flex\flex_item';

}
declare module '@elastic\eui\src\components\form\checkbox\checkbox' {
	import { Component, ChangeEventHandler, ReactNode, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const typeToClassNameMap: {
	    inList: string;
	};
	export const TYPES: "inList"[];
	export type EuiCheckboxType = keyof typeof typeToClassNameMap;
	export interface EuiCheckboxProps extends CommonProps, InputHTMLAttributes<HTMLInputElement> {
	    id: string;
	    checked?: boolean;
	    onChange: ChangeEventHandler<HTMLInputElement>;
	    inputRef?: (element: HTMLInputElement) => void;
	    label?: ReactNode;
	    type?: EuiCheckboxType;
	    disabled?: boolean;
	    /**
	     * when `true` creates a shorter height checkbox row
	     */
	    compressed?: boolean;
	    indeterminate?: boolean;
	    /**
	     * Object of props passed to the <label/>
	     */
	    labelProps?: CommonProps & LabelHTMLAttributes<HTMLLabelElement>;
	}
	export class EuiCheckbox extends Component<EuiCheckboxProps> {
	    static defaultProps: {
	        checked: boolean;
	        disabled: boolean;
	        indeterminate: boolean;
	        compressed: boolean;
	    };
	    inputRef?: HTMLInputElement;
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	    render(): JSX.Element;
	    setInputRef: (input: HTMLInputElement) => void;
	    invalidateIndeterminate(): void;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\form_fieldset\form_legend' {
	import { HTMLAttributes, FunctionComponent, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFormLegendProps = HTMLAttributes<HTMLLegendElement> & CommonProps & {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    /**
	     * For a hidden legend that is still visible to the screen reader, set to 'hidden'
	     */
	    display?: 'hidden' | 'visible';
	    compressed?: boolean;
	};
	export const EuiFormLegend: FunctionComponent<EuiFormLegendProps>;

}
declare module '@elastic\eui\src\components\form\form_fieldset\form_fieldset' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormLegendProps } from '@elastic\eui\src\components\form\form_fieldset\form_legend';
	export interface EuiFormFieldsetProps extends CommonProps, HTMLAttributes<HTMLFieldSetElement> {
	    /**
	     * Adds an EuiFormLegend element as the first child
	     */
	    legend?: EuiFormLegendProps;
	}
	export const EuiFormFieldset: FunctionComponent<EuiFormFieldsetProps>;

}
declare module '@elastic\eui\src\components\form\form_fieldset' {
	export { EuiFormFieldset, EuiFormFieldsetProps } from '@elastic\eui\src\components\form\form_fieldset\form_fieldset';
	export { EuiFormLegend, EuiFormLegendProps } from '@elastic\eui\src\components\form\form_fieldset\form_legend';

}
declare module '@elastic\eui\src\components\form\checkbox\checkbox_group' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { EuiFormFieldsetProps, EuiFormLegendProps } from '@elastic\eui\src\components\form\form_fieldset';
	import { EuiCheckboxProps } from '@elastic\eui\src\components\form\checkbox\checkbox';
	export interface EuiCheckboxGroupOption extends Omit<EuiCheckboxProps, 'checked' | 'onChange'> {
	    id: string;
	}
	export interface EuiCheckboxGroupIdToSelectedMap {
	    [id: string]: boolean;
	} type AsDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>; type WithLegendProps = Omit<EuiFormFieldsetProps, 'onChange'> & {
	    /**
	     * If the individual labels for each radio do not provide a sufficient description, add a legend.
	     * Wraps the group in a `EuiFormFieldset` which adds an `EuiLegend` for titling the whole group.
	     * Accepts an `EuiFormLegendProps` shape.
	     */
	    legend?: EuiFormLegendProps;
	};
	export type EuiCheckboxGroupProps = CommonProps & {
	    options: EuiCheckboxGroupOption[];
	    idToSelectedMap: EuiCheckboxGroupIdToSelectedMap;
	    onChange: (optionId: string) => void;
	    /**
	     * Tightens up the spacing between checkbox rows and sends down the
	     * compressed prop to the checkbox itself
	     */
	    compressed?: boolean;
	    disabled?: boolean;
	} & ExclusiveUnion<AsDivProps, WithLegendProps>;
	export const EuiCheckboxGroup: FunctionComponent<EuiCheckboxGroupProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\checkbox' {
	export { EuiCheckbox, EuiCheckboxProps } from '@elastic\eui\src\components\form\checkbox\checkbox';
	export { EuiCheckboxGroup, EuiCheckboxGroupProps, EuiCheckboxGroupOption, } from '@elastic\eui\src\components\form\checkbox\checkbox_group';

}
declare module '@elastic\eui\src\components\title\title' {
	import { FunctionComponent, ReactElement } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const titleSizeToClassNameMap: {
	    xxxs: string;
	    xxs: string;
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	};
	export const TITLE_SIZES: ("xs" | "s" | "m" | "l" | "xxxs" | "xxs")[];
	export type EuiTitleSize = keyof typeof titleSizeToClassNameMap; const textTransformToClassNameMap: {
	    uppercase: string;
	};
	export const TEXT_TRANSFORM: "uppercase"[];
	export type EuiTitleTextTransform = keyof typeof textTransformToClassNameMap;
	export type EuiTitleProps = CommonProps & {
	    /**
	     * ReactElement to render as this component's content
	     */
	    children: ReactElement<any>;
	    size?: EuiTitleSize;
	    textTransform?: EuiTitleTextTransform;
	    id?: string;
	};
	export const EuiTitle: FunctionComponent<EuiTitleProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiTitle, EuiTitleProps, EuiTitleSize } from '@elastic\eui\src\components\title\title';

}
declare module '@elastic\eui\src\components\text\text_color' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const colorsToClassNameMap: {
	    default: string;
	    subdued: string;
	    secondary: string;
	    success: string;
	    accent: string;
	    danger: string;
	    warning: string;
	    ghost: string;
	};
	export type TextColor = keyof typeof colorsToClassNameMap;
	export const COLORS: ("default" | "secondary" | "success" | "accent" | "warning" | "danger" | "subdued" | "ghost")[];
	export type EuiTextColorProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement> & HTMLAttributes<HTMLSpanElement>, 'color'> & {
	    /**
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: TextColor;
	    /**
	     * Determines the root element
	     */
	    component?: 'div' | 'span';
	};
	export const EuiTextColor: FunctionComponent<EuiTextColorProps>;
	export {};

}
declare module '@elastic\eui\src\components\text\text_align' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const alignmentToClassNameMap: {
	    left: string;
	    right: string;
	    center: string;
	};
	export type TextAlignment = keyof typeof alignmentToClassNameMap;
	export const ALIGNMENTS: ("left" | "right" | "center")[];
	export type EuiTextAlignProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    textAlign?: TextAlignment;
	};
	export const EuiTextAlign: FunctionComponent<EuiTextAlignProps>;

}
declare module '@elastic\eui\src\components\text\text' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { TextColor } from '@elastic\eui\src\components\text\text_color';
	import { TextAlignment } from '@elastic\eui\src\components\text\text_align'; const textSizeToClassNameMap: {
	    xs: string;
	    s: string;
	    m: string;
	};
	export type TextSize = keyof typeof textSizeToClassNameMap;
	export const TEXT_SIZES: ("xs" | "s" | "m")[];
	export type EuiTextProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
	    textAlign?: TextAlignment;
	    size?: TextSize;
	    /**
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: TextColor;
	    grow?: boolean;
	};
	export const EuiText: FunctionComponent<EuiTextProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiText, EuiTextProps } from '@elastic\eui\src\components\text\text';
	export { EuiTextColor, EuiTextColorProps } from '@elastic\eui\src\components\text\text_color';
	export { EuiTextAlign, EuiTextAlignProps } from '@elastic\eui\src\components\text\text_align';

}
declare module '@elastic\eui\src\components\form\described_form_group\described_form_group' {
	import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
	import { CommonProps, PropsOf } from '@elastic\eui\src\components\common';
	import { EuiTitleSize, EuiTitleProps } from '@elastic\eui\src\components\title';
	import { EuiFlexItem, EuiFlexGroupGutterSize } from '@elastic\eui\src\components\flex'; const paddingSizeToClassNameMap: {
	    xxxs: string;
	    xxs: string;
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	};
	export const PADDING_SIZES: ("xs" | "s" | "m" | "l" | "xxxs" | "xxs")[];
	export type EuiDescribedFormGroupPaddingSize = keyof typeof paddingSizeToClassNameMap;
	export type EuiDescribedFormGroupProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
	    /**
	     * One or more `EuiFormRow`s
	     */
	    children?: ReactNode;
	    /**
	     * Passed to `EuiFlexGroup`
	     */
	    gutterSize?: EuiFlexGroupGutterSize;
	    fullWidth?: boolean;
	    /**
	     * For better accessibility, it's recommended the use of HTML headings
	     */
	    title: EuiTitleProps['children'];
	    titleSize?: EuiTitleSize;
	    /**
	     * Added as a child of `EuiText`
	     */
	    description?: ReactNode;
	    /**
	     * For customizing the description container. Extended from `EuiFlexItem`
	     */
	    descriptionFlexItemProps?: PropsOf<typeof EuiFlexItem>;
	    /**
	     * For customizing the field container. Extended from `EuiFlexItem`
	     */
	    fieldFlexItemProps?: PropsOf<typeof EuiFlexItem>;
	};
	export const EuiDescribedFormGroup: FunctionComponent<EuiDescribedFormGroupProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\described_form_group' {
	export { EuiDescribedFormGroup, EuiDescribedFormGroupProps, } from '@elastic\eui\src\components\form\described_form_group\described_form_group';

}
declare module '@elastic\eui\src\components\context\context' {
	import React, { Context, FunctionComponent, ReactChild, ReactNode } from 'react';
	export interface RenderableValues {
	    [key: string]: ReactChild | undefined;
	}
	export type Renderable<T> = ReactChild | ((values: T) => ReactChild);
	export interface I18nShape {
	    mapping?: {
	        [key: string]: Renderable<object>;
	    };
	    mappingFunc?: (value: string) => string;
	    formatNumber?: (x: number) => string;
	    formatDateTime?: (x: Date) => string;
	    locale?: string;
	} const I18nContext: Context<I18nShape>; const EuiI18nConsumer: React.Consumer<I18nShape>;
	export interface EuiContextProps {
	    i18n: I18nShape;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	} const EuiContext: FunctionComponent<EuiContextProps>;
	export { EuiContext, EuiI18nConsumer, I18nContext };

}
declare module '@elastic/eui' {
	export { EuiContext, EuiI18nConsumer, EuiContextProps } from '@elastic\eui\src\components\context\context';

}
declare module '@elastic\eui\src\services\predicate\common_predicates' {
	import moment from 'moment';
	export const always: (_value?: any) => boolean;
	export const never: (_value?: any) => boolean;
	export const isUndefined: (value: any) => value is undefined;
	export const isNull: (value: any) => value is null;
	export const isNil: (value: any) => value is null | undefined;
	export const isMoment: (value: any) => boolean;
	export const isDate: (value: any) => value is Date;
	export const isDateLike: (value: any) => value is Date | moment.Moment;

}
declare module '@elastic\eui\src\services\predicate\lodash_predicates' {
	export const isFunction: (value: any) => value is (...args: any[]) => any;
	export const isArray: (value: any) => value is any[];
	export const isString: (value: any) => value is string;
	export const isBoolean: (value: any) => value is boolean;
	export const isNumber: (value: any) => value is number;
	export const isNaN: (value: any) => boolean;
	export const isObject: (value: any) => value is object;

}
declare module '@elastic\eui\src\services\predicate' {
	export * from '@elastic\eui\src\services\predicate\common_predicates';
	export * from '@elastic\eui\src\services\predicate\lodash_predicates';

}
declare module '@elastic\eui\src\components\i18n\i18n_util' {
	import { ReactChild } from 'react';
	import { RenderableValues } from '@elastic\eui\src\components\context\context';
	/**
	 * Replaces placeholder values in `input` with their matching value in `values`
	 * e.g. input:'Hello, {name}' will replace `{name}` with `values[name]`
	 * @param {string} input
	 * @param {RenderableValues} values
	 * @param {Function} i18nMappingFunc
	 * @returns {string | React.ReactChild[]}
	 */
	export function processStringToChildren(input: string, values: RenderableValues, i18nMappingFunc?: (token: string) => string): string | ReactChild[];

}
declare module '@elastic\eui\src\components\i18n\i18n' {
	import { ReactChild, ReactElement } from 'react';
	import { ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { Renderable } from '@elastic\eui\src\components\context\context'; type ResolvedType<T> = T extends (...args: any[]) => any ? ReturnType<T> : T;
	interface I18nTokenShape<T, DEFAULT extends Renderable<T>> {
	    token: string;
	    default: DEFAULT;
	    children?: (x: ResolvedType<DEFAULT>) => ReactChild;
	    values?: T;
	}
	interface I18nTokensShape<T extends any[]> {
	    tokens: string[];
	    defaults: T;
	    children: (x: Array<T[number]>) => ReactChild;
	}
	export type EuiI18nProps<T, DEFAULT extends Renderable<T>, DEFAULTS extends any[]> = ExclusiveUnion<I18nTokenShape<T, DEFAULT>, I18nTokensShape<DEFAULTS>>; const EuiI18n: <T extends {}, DEFAULT extends Renderable<T>, DEFAULTS extends any[]>(props: (import ("@elastic\eui\src\components\common").DisambiguateSet<I18nTokenShape<T, DEFAULT>, I18nTokensShape<DEFAULTS>> & I18nTokensShape<DEFAULTS>) | (import ("@elastic\eui\src\components\common").DisambiguateSet<I18nTokensShape<DEFAULTS>, I18nTokenShape<T, DEFAULT>> & I18nTokenShape<T, DEFAULT>)) => JSX.Element; type DefaultRenderType<T, K extends Renderable<T>> = K extends ReactChild ? K : K extends () => infer RetValue ? RetValue : never; type DefaultsRenderType<K extends Array<string | ReactElement>> = K extends Array<infer Item> ? Item : never; function useEuiI18n<T extends {}, DEFAULT extends Renderable<T>>(token: string, defaultValue: DEFAULT, values?: T): DefaultRenderType<T, DEFAULT>; function useEuiI18n<DEFAULTS extends Array<string | ReactElement>>(tokens: string[], defaultValues: DEFAULTS): Array<DefaultsRenderType<DEFAULTS>>;
	export { EuiI18n, useEuiI18n };

}
declare module '@elastic\eui\src\components\i18n\i18n_number' {
	import { FunctionComponent, ReactChild, ReactElement } from 'react';
	import { ExclusiveUnion } from '@elastic\eui\src\components\common';
	interface EuiI18nNumberValueShape {
	    value: number;
	    children?: (x: ReactChild) => ReactElement<any>;
	}
	interface EuiI18nNumberValuesShape {
	    values: number[];
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: (x: ReactChild[]) => ReactElement<any>;
	}
	export type EuiI18nNumberProps = ExclusiveUnion<EuiI18nNumberValueShape, EuiI18nNumberValuesShape>; const EuiI18nNumber: FunctionComponent<EuiI18nNumberProps>;
	export { EuiI18nNumber };

}
declare module '@elastic/eui' {
	export { EuiI18n, EuiI18nProps, useEuiI18n } from '@elastic\eui\src\components\i18n\i18n';
	export { EuiI18nNumber, EuiI18nNumberProps } from '@elastic\eui\src\components\i18n\i18n_number';

}
declare module '@elastic\eui\src\components\form\form_control_layout\form_control_layout_clear_button' {
	import { FunctionComponent, ButtonHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const SIZES: ("s" | "m")[];
	export type EuiFormControlLayoutClearButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
	    size?: typeof SIZES[number];
	};
	export const EuiFormControlLayoutClearButton: FunctionComponent<EuiFormControlLayoutClearButtonProps>;

}
declare module '@elastic\eui\src\components\form\form_control_layout\form_control_layout_custom_icon' {
	import { ButtonHTMLAttributes, FunctionComponent, HTMLAttributes } from 'react';
	import { EuiIconProps, IconType } from '@elastic\eui\src\components\icon';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export type EuiFormControlLayoutCustomIconProps = CommonProps & ExclusiveUnion<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, HTMLAttributes<HTMLSpanElement>> & {
	    type: IconType;
	    size?: EuiIconProps['size'];
	    iconRef?: string | ((el: HTMLButtonElement | HTMLSpanElement | null) => void);
	};
	export const EuiFormControlLayoutCustomIcon: FunctionComponent<EuiFormControlLayoutCustomIconProps>;

}
declare module '@elastic\eui\src\components\form\form_control_layout\form_control_layout_icons' {
	import { Component } from 'react';
	import { EuiFormControlLayoutClearButtonProps } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout_clear_button';
	import { EuiFormControlLayoutCustomIconProps } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout_custom_icon';
	import { IconType } from '@elastic\eui\src\components\icon';
	import { DistributiveOmit } from '@elastic\eui\src\components\common';
	export const ICON_SIDES: ['left', 'right']; type IconShape = DistributiveOmit<EuiFormControlLayoutCustomIconProps, 'type' | 'iconRef'> & {
	    type: IconType;
	    side?: typeof ICON_SIDES[number];
	    ref?: EuiFormControlLayoutCustomIconProps['iconRef'];
	};
	export interface EuiFormControlLayoutIconsProps {
	    icon?: IconType | IconShape;
	    clear?: EuiFormControlLayoutClearButtonProps;
	    isLoading?: boolean;
	    compressed?: boolean;
	}
	export class EuiFormControlLayoutIcons extends Component<EuiFormControlLayoutIconsProps> {
	    render(): JSX.Element;
	    renderCustomIcon(): JSX.Element | null;
	    renderLoadingSpinner(): JSX.Element | null;
	    renderClearButton(): JSX.Element | null;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\form_label\form_label' {
	import { FunctionComponent, LabelHTMLAttributes, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	interface EuiFormLabelCommonProps {
	    isFocused?: boolean;
	    isInvalid?: boolean;
	    /**
	     * Default type is a `label` but can be changed to a `legend`
	     * if using inside a `fieldset`.
	     */
	    type?: 'label' | 'legend';
	} type LabelProps = {
	    type?: 'label';
	} & EuiFormLabelCommonProps & LabelHTMLAttributes<HTMLLabelElement>; type LegendProps = {
	    type: 'legend';
	} & EuiFormLabelCommonProps & HTMLAttributes<HTMLLegendElement>;
	export type EuiFormLabelProps = CommonProps & ExclusiveUnion<LabelProps, LegendProps>;
	export const EuiFormLabel: FunctionComponent<EuiFormLabelProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\form_label' {
	export { EuiFormLabel, EuiFormLabelProps } from '@elastic\eui\src\components\form\form_label\form_label';

}
declare module '@elastic\eui\src\components\form\form_control_layout\form_control_layout' {
	import React, { Component, HTMLAttributes, ReactElement, ReactNode } from 'react';
	import { EuiFormControlLayoutIconsProps } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout_icons';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export { ICON_SIDES } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout_icons'; type StringOrReactElement = string | ReactElement; type PrependAppendType = StringOrReactElement | StringOrReactElement[];
	export type EuiFormControlLayoutProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * Creates an input group with element(s) coming before children.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: PrependAppendType;
	    /**
	     * Creates an input group with element(s) coming after children.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: PrependAppendType;
	    children?: ReactNode;
	    icon?: EuiFormControlLayoutIconsProps['icon'];
	    clear?: EuiFormControlLayoutIconsProps['clear'];
	    fullWidth?: boolean;
	    isLoading?: boolean;
	    isDisabled?: boolean;
	    className?: string;
	    compressed?: boolean;
	    readOnly?: boolean;
	    /**
	     * Connects the prepend and append labels to the input
	     */
	    inputId?: string;
	};
	export class EuiFormControlLayout extends Component<EuiFormControlLayoutProps> {
	    render(): JSX.Element;
	    renderSideNode(side: 'append' | 'prepend', nodes?: PrependAppendType, inputId?: string): JSX.Element | JSX.Element[] | undefined;
	    createFormLabel(side: 'append' | 'prepend', string: string, inputId?: string): JSX.Element;
	    createSideNode(side: 'append' | 'prepend', node: ReactElement, key: React.Key): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
	}

}
declare module '@elastic\eui\src\components\form\form_control_layout\form_control_layout_delimited' {
	import { FunctionComponent, ReactElement, ReactNode } from 'react';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout';
	export type EuiFormControlLayoutDelimitedProps = Partial<EuiFormControlLayoutProps> & {
	    /**
	     * Left side control
	     */
	    startControl: ReactElement;
	    /**
	     * Right side control
	     */
	    endControl: ReactElement;
	    /**
	     * The center content. Accepts a string to be wrapped in a subdued EuiText
	     * or a single ReactElement
	     */
	    delimiter?: ReactNode;
	    className?: string;
	};
	export const EuiFormControlLayoutDelimited: FunctionComponent<EuiFormControlLayoutDelimitedProps>;

}
declare module '@elastic\eui\src\components\form\form_control_layout' {
	export { EuiFormControlLayout, EuiFormControlLayoutProps, } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout';
	export { EuiFormControlLayoutDelimited, EuiFormControlLayoutDelimitedProps, } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout_delimited';

}
declare module '@elastic\eui\src\components\form\validatable_control\validatable_control' {
	import { ReactElement, Ref, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface HTMLConstraintValidityElement extends Element {
	    setCustomValidity: (error: string) => void;
	}
	export interface ReactElementWithRef extends ReactElement {
	    ref?: Ref<HTMLConstraintValidityElement>;
	}
	export interface EuiValidatableControlProps {
	    isInvalid?: boolean;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactElementWithRef;
	}
	export const EuiValidatableControl: FunctionComponent<CommonProps & EuiValidatableControlProps>;

}
declare module '@elastic\eui\src\components\form\validatable_control' {
	export { EuiValidatableControl, EuiValidatableControlProps, } from '@elastic\eui\src\components\form\validatable_control\validatable_control';

}
declare module '@elastic\eui\src\components\form\field_number\field_number' {
	import { InputHTMLAttributes, Ref, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	import { IconType } from '@elastic\eui\src\components\icon';
	export type EuiFieldNumberProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'min' | 'max' | 'readOnly' | 'step'> & CommonProps & {
	    icon?: IconType;
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    isLoading?: boolean;
	    readOnly?: boolean;
	    min?: number;
	    max?: number;
	    /**
	     * Specifies the granularity that the value must adhere to.
	     * Accepts a `number` or the string `'any'` for no stepping to allow for any value.
	     * Defaults to `1`
	     */
	    step?: number | 'any';
	    inputRef?: Ref<HTMLInputElement>;
	    /**
	     * Creates an input group with element(s) coming before input.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	    /**
	     * Completely removes form control layout wrapper and ignores
	     * icon, prepend, and append. Best used inside EuiFormControlLayoutDelimited.
	     */
	    controlOnly?: boolean;
	    /**
	     * when `true` creates a shorter height input
	     */
	    compressed?: boolean;
	};
	export const EuiFieldNumber: FunctionComponent<EuiFieldNumberProps>;

}
declare module '@elastic\eui\src\components\form\field_number' {
	export { EuiFieldNumber, EuiFieldNumberProps } from '@elastic\eui\src\components\form\field_number\field_number';

}
declare module '@elastic\eui\src\components\form\field_password\field_password' {
	import { InputHTMLAttributes, FunctionComponent, Ref } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	import { EuiButtonIconPropsForButton } from '@elastic\eui\src\components\button';
	export type EuiFieldPasswordProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> & CommonProps & {
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    isLoading?: boolean;
	    compressed?: boolean;
	    inputRef?: Ref<HTMLInputElement>;
	    /**
	     * Creates an input group with element(s) coming before input.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	    value?: string | number;
	    /**
	     * Change the `type` of input for manually handling obfuscation.
	     * The `dual` option adds the ability to toggle the obfuscation of the input by
	     * adding an icon button as the first `append` element
	     */
	    type?: 'password' | 'text' | 'dual';
	    /**
	     * Additional props to apply to the dual toggle. Extends EuiButtonIcon
	     */
	    dualToggleProps?: Partial<EuiButtonIconPropsForButton>;
	};
	export const EuiFieldPassword: FunctionComponent<EuiFieldPasswordProps>;

}
declare module '@elastic\eui\src\components\form\field_password' {
	export { EuiFieldPassword, EuiFieldPasswordProps } from '@elastic\eui\src\components\form\field_password\field_password';

}
declare module '@elastic\eui\src\services\browser\browser' {
	interface IBrowser {
	    isEventSupported: (name: string, element: EventTarget) => boolean;
	}
	export const Browser: Readonly<IBrowser>;
	export {};

}
declare module '@elastic\eui\src\services\browser' {
	export { Browser } from '@elastic\eui\src\services\browser\browser';

}
declare module '@elastic\eui\src\components\form\field_search\field_search' {
	import { Component, InputHTMLAttributes, KeyboardEvent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	export interface EuiFieldSearchProps extends CommonProps, InputHTMLAttributes<HTMLInputElement> {
	    name?: string;
	    id?: string;
	    placeholder?: string;
	    value?: string;
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    isLoading?: boolean;
	    /**
	     * Called when the user presses [Enter] OR on change if the incremental prop is `true`.
	     * If you don't need the on[Enter] functionality, prefer using onChange
	     */
	    onSearch?: (value: string) => void;
	    /**
	     * When `true` the search will be executed (that is, the `onSearch` will be called) as the
	     * user types.
	     */
	    incremental?: boolean;
	    /**
	     * when `true` creates a shorter height input
	     */
	    compressed?: boolean;
	    inputRef?: (node: HTMLInputElement | null) => void;
	    /**
	     * Shows a button that quickly clears any input
	     */
	    isClearable?: boolean;
	    /**
	     * Creates an input group with element(s) coming before input
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	}
	interface EuiFieldSearchState {
	    value: string;
	}
	export class EuiFieldSearch extends Component<EuiFieldSearchProps, EuiFieldSearchState> {
	    static defaultProps: {
	        fullWidth: boolean;
	        isLoading: boolean;
	        incremental: boolean;
	        compressed: boolean;
	        isClearable: boolean;
	    };
	    state: {
	        value: string;
	    };
	    inputElement: HTMLInputElement | null;
	    cleanups: Array<() => void>;
	    componentDidMount(): void;
	    onClear: () => void;
	    componentWillUnmount(): void;
	    setRef: (inputElement: HTMLInputElement | null) => void;
	    onKeyUp: (event: KeyboardEvent<HTMLInputElement>, incremental?: boolean | undefined, onSearch?: ((value: string) => void) | undefined) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\field_search' {
	export { EuiFieldSearch, EuiFieldSearchProps } from '@elastic\eui\src\components\form\field_search\field_search';

}
declare module '@elastic\eui\src\components\form\field_text\field_text' {
	import { InputHTMLAttributes, Ref, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	export type EuiFieldTextProps = InputHTMLAttributes<HTMLInputElement> & CommonProps & {
	    icon?: EuiFormControlLayoutProps['icon'];
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    isLoading?: boolean;
	    readOnly?: boolean;
	    inputRef?: Ref<HTMLInputElement>;
	    /**
	     * Creates an input group with element(s) coming before input.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	    /**
	     * Completely removes form control layout wrapper and ignores
	     * icon, prepend, and append. Best used inside EuiFormControlLayoutDelimited.
	     */
	    controlOnly?: boolean;
	    /**
	     * when `true` creates a shorter height input
	     */
	    compressed?: boolean;
	};
	export const EuiFieldText: FunctionComponent<EuiFieldTextProps>;

}
declare module '@elastic\eui\src\components\form\field_text' {
	export { EuiFieldText, EuiFieldTextProps } from '@elastic\eui\src\components\form\field_text\field_text';

}
declare module '@elastic\eui\src\components\progress\progress' {
	import { FunctionComponent, HTMLAttributes, ProgressHTMLAttributes, ReactNode, CSSProperties } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common'; const sizeToClassNameMap: {
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	};
	export const SIZES: ("xs" | "s" | "m" | "l")[];
	export type EuiProgressSize = keyof typeof sizeToClassNameMap;
	export type ProgressColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'subdued' | 'accent' | 'vis0' | 'vis1' | 'vis2' | 'vis3' | 'vis4' | 'vis5' | 'vis6' | 'vis7' | 'vis8' | 'vis9'; const colorToClassNameMap: {
	    primary: string;
	    secondary: string;
	    success: string;
	    warning: string;
	    danger: string;
	    subdued: string;
	    accent: string;
	    vis0: string;
	    vis1: string;
	    vis2: string;
	    vis3: string;
	    vis4: string;
	    vis5: string;
	    vis6: string;
	    vis7: string;
	    vis8: string;
	    vis9: string;
	};
	export const COLORS: ("primary" | "secondary" | "success" | "accent" | "warning" | "danger" | "subdued" | "vis0" | "vis1" | "vis2" | "vis3" | "vis4" | "vis5" | "vis6" | "vis7" | "vis8" | "vis9")[];
	export type EuiProgressColor = keyof typeof colorToClassNameMap; const positionsToClassNameMap: {
	    fixed: string;
	    absolute: string;
	    static: string;
	};
	export const POSITIONS: ("fixed" | "absolute" | "static")[];
	export type EuiProgressPosition = keyof typeof positionsToClassNameMap;
	export type EuiProgressProps = CommonProps & {
	    size?: EuiProgressSize;
	    /**
	     * One of EUI's color palette, vis colors or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: EuiProgressColor | CSSProperties['color'];
	    position?: EuiProgressPosition;
	}; type Indeterminate = EuiProgressProps & HTMLAttributes<HTMLDivElement>; type Determinate = EuiProgressProps & Omit<ProgressHTMLAttributes<HTMLProgressElement>, 'max'> & {
	    max?: number;
	    valueText?: boolean | ReactNode;
	    label?: ReactNode;
	    /**
	     * Object of props passed to the <span/> wrapping the determinate progress's label
	     */
	    labelProps?: HTMLAttributes<HTMLSpanElement>;
	};
	export const EuiProgress: FunctionComponent<ExclusiveUnion<Determinate, Indeterminate>>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiProgress, EuiProgressProps } from '@elastic\eui\src\components\progress\progress';

}
declare module '@elastic\eui\src\components\form\file_picker\file_picker' {
	import React, { Component, InputHTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const displayToClassNameMap: {
	    default: null;
	    large: string;
	};
	export const DISPLAYS: ("default" | "large")[];
	export type EuiFilePickerDisplay = keyof typeof displayToClassNameMap;
	export interface EuiFilePickerProps extends CommonProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	    id?: string;
	    name?: string;
	    className?: string;
	    /**
	     * The content that appears in the dropzone if no file is attached
	     */
	    initialPromptText?: ReactNode;
	    /**
	     * Use as a callback to access the HTML FileList API
	     */
	    onChange?: (files: FileList | null) => void;
	    /**
	     * Reduces the size to a typical (compressed) input
	     */
	    compressed?: boolean;
	    /**
	     * Size or type of display;
	     * `default` for normal height, similar to other controls;
	     * `large` for taller size
	     */
	    display?: EuiFilePickerDisplay;
	    fullWidth?: boolean;
	    isInvalid?: boolean;
	    isLoading?: boolean;
	    disabled?: boolean;
	}
	export class EuiFilePicker extends Component<EuiFilePickerProps> {
	    static defaultProps: {
	        initialPromptText: string;
	        compressed: boolean;
	        display: string;
	    };
	    state: {
	        promptText: null;
	        isHoveringDrop: boolean;
	    };
	    fileInput: HTMLInputElement | null;
	    handleChange: (filesSelected?: string | null | undefined) => void;
	    removeFiles: (e: React.MouseEvent<HTMLButtonElement>) => void;
	    showDrop: () => void;
	    hideDrop: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\file_picker' {
	export { EuiFilePicker, EuiFilePickerProps } from '@elastic\eui\src\components\form\file_picker\file_picker';

}
declare module '@elastic\eui\src\components\call_out\call_out' {
	import React, { HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon'; type Color = 'primary' | 'success' | 'warning' | 'danger'; type Size = 's' | 'm'; type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	export type EuiCallOutProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'color'> & {
	    title?: ReactNode;
	    iconType?: IconType;
	    color?: Color;
	    size?: Size;
	    heading?: Heading;
	};
	export const COLORS: Color[];
	export const HEADINGS: Heading[];
	export const EuiCallOut: React.ForwardRefExoticComponent<CommonProps & Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & {
	    title?: ReactNode;
	    iconType?: string | React.ComponentClass<{}, any> | React.FunctionComponent<{}> | undefined;
	    color?: "primary" | "success" | "warning" | "danger" | undefined;
	    size?: "s" | "m" | undefined;
	    heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | undefined;
	} & React.RefAttributes<HTMLDivElement>>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiCallOut, EuiCallOutProps } from '@elastic\eui\src\components\call_out\call_out';

}
declare module '@elastic\eui\src\components\form\form' {
	import { FunctionComponent, ReactNode, HTMLAttributes, FormHTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export type EuiFormProps = CommonProps & ExclusiveUnion<{
	    component: 'form';
	} & FormHTMLAttributes<HTMLFormElement>, {
	    component?: 'div';
	} & HTMLAttributes<HTMLDivElement>> & {
	    isInvalid?: boolean;
	    /**
	     * Which HTML element to render `div` or `form`
	     */
	    component?: 'form' | 'div';
	    error?: ReactNode | ReactNode[];
	    /**
	     * Where to display the callout with the list of errors
	     */
	    invalidCallout?: 'above' | 'none';
	};
	export const EuiForm: FunctionComponent<EuiFormProps>;

}
declare module '@elastic\eui\src\components\form\form_error_text\form_error_text' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFormErrorTextProps = CommonProps & HTMLAttributes<HTMLDivElement>;
	export const EuiFormErrorText: FunctionComponent<EuiFormErrorTextProps>;

}
declare module '@elastic\eui\src\components\form\form_error_text' {
	export { EuiFormErrorText, EuiFormErrorTextProps } from '@elastic\eui\src\components\form\form_error_text\form_error_text';

}
declare module '@elastic\eui\src\components\form\form_help_text\form_help_text' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFormHelpTextProps = CommonProps & HTMLAttributes<HTMLDivElement>;
	export const EuiFormHelpText: FunctionComponent<EuiFormHelpTextProps>;

}
declare module '@elastic\eui\src\components\form\form_help_text' {
	export { EuiFormHelpText, EuiFormHelpTextProps } from '@elastic\eui\src\components\form\form_help_text\form_help_text';

}
declare module '@elastic\eui\src\services\objects' {
	export const get: (object: {}, path: string[] | string, defaultValue?: any) => any;
	export const omit: (object: {} | null | undefined, paths: string[]) => Partial<{}>;

}
declare module '@elastic\eui\src\components\form\form_row\form_row' {
	import { Component, HTMLAttributes, ReactElement, ReactNode } from 'react';
	import { ExclusiveUnion, CommonProps } from '@elastic\eui\src\components\common'; const displayToClassNameMap: {
	    row: null;
	    rowCompressed: string;
	    columnCompressed: string;
	    center: null;
	    centerCompressed: string;
	    columnCompressedSwitch: string;
	};
	export const DISPLAYS: ("center" | "row" | "rowCompressed" | "columnCompressed" | "centerCompressed" | "columnCompressedSwitch")[];
	export type EuiFormRowDisplayKeys = keyof typeof displayToClassNameMap;
	interface EuiFormRowState {
	    isFocused: boolean;
	    id: string;
	} type EuiFormRowCommonProps = CommonProps & {
	    /**
	     * When `rowCompressed`, just tightens up the spacing;
	     * Set to `columnCompressed` if compressed
	     * and horizontal layout is needed.
	     * Set to `center` or `centerCompressed` to align non-input
	     * content better with inline rows.
	     * Set to `columnCompressedSwitch` if the form control being passed
	     * as the child is a switch.
	     */
	    display?: EuiFormRowDisplayKeys;
	    hasEmptyLabelSpace?: boolean;
	    fullWidth?: boolean;
	    /**
	     * IDs of additional elements that should be part of children's `aria-describedby`
	     */
	    describedByIds?: string[];
	    /**
	     * Escape hatch to not render duplicate labels if the child also renders a label
	     */
	    hasChildLabel?: boolean;
	    /**
	     * ReactElement to render as this component's content
	     */
	    children: ReactElement;
	    label?: ReactNode;
	    /**
	     * Adds an extra node to the right of the form label without
	     * being contained inside the form label. Good for things
	     * like documentation links.
	     */
	    labelAppend?: any;
	    id?: string;
	    isInvalid?: boolean;
	    error?: ReactNode | ReactNode[];
	    /**
	     *  Adds a single node/string or an array of nodes/strings below the input
	     */
	    helpText?: ReactNode | ReactNode[];
	}; type LabelProps = {
	    labelType?: 'label';
	} & EuiFormRowCommonProps & HTMLAttributes<HTMLDivElement>; type LegendProps = {
	    /**
	     * Defaults to rendering a `<label>` but if passed `'legend'` for labelType,
	     * will render both a `<legend>` and the surrounding container as a `<fieldset>`
	     */
	    labelType?: 'legend';
	} & EuiFormRowCommonProps & HTMLAttributes<HTMLFieldSetElement>;
	export type EuiFormRowProps = ExclusiveUnion<LabelProps, LegendProps>;
	export class EuiFormRow extends Component<EuiFormRowProps, EuiFormRowState> {
	    static defaultProps: {
	        display: string;
	        hasEmptyLabelSpace: boolean;
	        fullWidth: boolean;
	        describedByIds: never[];
	        labelType: string;
	        hasChildLabel: boolean;
	    };
	    state: EuiFormRowState;
	    onFocus: (...args: any[]) => void;
	    onBlur: (...args: any[]) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\form_row' {
	export { EuiFormRow, EuiFormRowProps } from '@elastic\eui\src\components\form\form_row\form_row';

}
declare module '@elastic\eui\src\components\form\radio\radio' {
	import { FunctionComponent, ChangeEventHandler, HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export interface RadioProps {
	    autoFocus?: boolean;
	    /**
	     * When `true` creates a shorter height radio row
	     */
	    compressed?: boolean;
	    name?: string;
	    value?: string;
	    checked?: boolean;
	    disabled?: boolean;
	    onChange: ChangeEventHandler<HTMLInputElement>;
	    /**
	     * Object of props passed to the <label/>
	     */
	    labelProps?: CommonProps & LabelHTMLAttributes<HTMLLabelElement>;
	}
	interface idWithLabel extends RadioProps {
	    label: ReactNode;
	    id: string;
	}
	interface withId extends RadioProps {
	    id: string;
	}
	export type EuiRadioProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'id'> & ExclusiveUnion<ExclusiveUnion<RadioProps, idWithLabel>, withId>;
	export const EuiRadio: FunctionComponent<EuiRadioProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\radio\radio_group' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { EuiFormFieldsetProps, EuiFormLegendProps } from '@elastic\eui\src\components\form\form_fieldset';
	import { EuiRadioProps } from '@elastic\eui\src\components\form\radio\radio';
	export interface EuiRadioGroupOption extends Omit<EuiRadioProps, 'checked' | 'onChange'> {
	    id: string;
	}
	export type EuiRadioGroupChangeCallback = (id: string, value?: string) => void; type AsDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>; type WithLegendProps = Omit<EuiFormFieldsetProps, 'onChange'> & {
	    /**
	     * If the individual labels for each radio do not provide a sufficient description, add a legend.
	     * Wraps the group in a `EuiFormFieldset` which adds an `EuiLegend` for titling the whole group.
	     * Accepts an `EuiFormLegendProps` shape.
	     */
	    legend?: EuiFormLegendProps;
	};
	export type EuiRadioGroupProps = CommonProps & {
	    disabled?: boolean;
	    /**
	     * Tightens up the spacing between radio rows and sends down the
	     * compressed prop to the radio itself
	     */
	    compressed?: boolean;
	    name?: string;
	    options: EuiRadioGroupOption[];
	    idSelected?: string;
	    onChange: EuiRadioGroupChangeCallback;
	} & ExclusiveUnion<AsDivProps, WithLegendProps>;
	export const EuiRadioGroup: FunctionComponent<EuiRadioGroupProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\radio' {
	export { EuiRadio, EuiRadioProps } from '@elastic\eui\src\components\form\radio\radio';
	export { EuiRadioGroup, EuiRadioGroupProps, EuiRadioGroupOption, } from '@elastic\eui\src\components\form\radio\radio_group';

}
declare module '@elastic\eui\src\services\number\number' {
	export const isWithinRange: (min: number | string, max: number | string, value: number | string) => boolean;
	export function isEvenlyDivisibleBy(num: number, factor: number): boolean;

}
declare module '@elastic\eui\src\services\number' {
	export * from '@elastic\eui\src\services\number\number';

}
declare module '@elastic\eui\src\components\panel\panel' {
	import { ButtonHTMLAttributes, FunctionComponent, HTMLAttributes, Ref } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export const panelPaddingValues: {
	    none: number;
	    s: number;
	    m: number;
	    l: number;
	};
	export const SIZES: ("s" | "m" | "l" | "none")[];
	export const BORDER_RADII: ("m" | "none")[];
	export const COLORS: readonly ["transparent", "plain", "subdued", "accent", "primary", "success", "warning", "danger"];
	export type PanelColor = typeof COLORS[number];
	export type PanelPaddingSize = typeof SIZES[number];
	export type PanelBorderRadius = typeof BORDER_RADII[number];
	export interface _EuiPanelProps extends CommonProps {
	    /**
	     * Adds a medium shadow to the panel;
	     * Only works when `color="plain"`
	     */
	    hasShadow?: boolean;
	    /**
	     * Adds a slight 1px border on all edges.
	     * Only works when `color="plain | transparent"`
	     * Default is `undefined` and will default to that theme's panel style
	     */
	    hasBorder?: boolean;
	    /**
	     * Padding for all four sides
	     */
	    paddingSize?: PanelPaddingSize;
	    /**
	     * Corner border radius
	     */
	    borderRadius?: PanelBorderRadius;
	    /**
	     * When true the panel will grow in height to match `EuiFlexItem`
	     */
	    grow?: boolean;
	    panelRef?: Ref<HTMLDivElement>;
	    /**
	     * Background color of the panel;
	     * Usually a lightened form of the brand colors
	     */
	    color?: PanelColor;
	}
	export interface _EuiPanelDivlike extends _EuiPanelProps, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	    element?: 'div';
	}
	export interface _EuiPanelButtonlike extends _EuiPanelProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
	    element?: 'button';
	}
	export type EuiPanelProps = ExclusiveUnion<_EuiPanelButtonlike, _EuiPanelDivlike>;
	export const EuiPanel: FunctionComponent<EuiPanelProps>;

}
declare module '@elastic\eui\src\services\hooks\useCombinedRefs' {
	import { MutableRefObject, Ref } from 'react';
	export const useCombinedRefs: <T>(refs: (((instance: T | null) => void) | import("react").RefObject<T> | MutableRefObject<T | undefined> | null | undefined)[]) => (node: T) => void;

}
declare module '@elastic\eui\src\services\hooks\useDependentState' {
	
	export function useDependentState<T>(valueFn: (previousState: undefined | T) => T, deps: unknown[]): readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>];

}
declare module '@elastic\eui\src\services\hooks\useIsWithinBreakpoints' {
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint';
	/**
	 * Given the current window.innerWidth and an array of breakpoint keys,
	 * this hook stores state and returns true or false if the window.innerWidth
	 * falls within any of the named breakpoints.
	 *
	 * @param {EuiBreakpointSize[]} sizes An array of named breakpoints
	 * @param {boolean} isActive Manages whether the resize handler should be active
	 * @returns {boolean} Returns `true` if current breakpoint name is included in `sizes`
	 */
	export function useIsWithinBreakpoints(sizes: EuiBreakpointSize[], isActive?: boolean): boolean;

}
declare module '@elastic\eui\src\services\throttle' {
	export const throttle: (fn: (...args: any[]) => void, wait?: number) => (...args: any[]) => void;

}
declare module '@elastic\eui\src\services\hooks\useMouseMove' {
	import { MouseEvent, TouchEvent } from 'react';
	export function isMouseEvent<T = HTMLDivElement>(event: MouseEvent<T> | TouchEvent<T>): event is MouseEvent<T>;
	export function useMouseMove<T = HTMLDivElement>(handleChange: (location: {
	    x: number;
	    y: number;
	}, isFirstInteraction?: boolean) => void, interactionConditional?: any): [
	    (e: MouseEvent<T>) => void,
	    (e: MouseEvent<T> | TouchEvent<T>, isFirstInteraction?: boolean) => void
	];

}
declare module '@elastic\eui\src\services\hooks' {
	export * from '@elastic\eui\src\services\hooks\useCombinedRefs';
	export * from '@elastic\eui\src\services\hooks\useDependentState';
	export * from '@elastic\eui\src\services\hooks\useIsWithinBreakpoints';
	export * from '@elastic\eui\src\services\hooks\useMouseMove';

}
declare module '@elastic\eui\src\components\panel\split_panel\split_panel' {
	import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
	import { _EuiPanelProps } from '@elastic\eui\src\components\panel\panel';
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint';
	export type _EuiSplitPanelInnerProps = HTMLAttributes<HTMLDivElement> & Omit<_EuiPanelProps, 'hasShadow' | 'hasBorder' | 'borderRadius'>;
	/**
	 * Consumed via `EuiSplitPanel.Inner`.
	 * Extends most `EuiPanelProps`.
	 */
	export const _EuiSplitPanelInner: FunctionComponent<_EuiSplitPanelInnerProps>;
	export type _EuiSplitPanelOuterProps = HTMLAttributes<HTMLDivElement> & {
	    /**
	     * Any number of _EuiSplitPanelInner components
	     */
	    children?: ReactNode;
	    /**
	     * Changes the flex-direction
	     */
	    direction?: 'column' | 'row';
	    /**
	     * Stacks row display on small screens.
	     * Remove completely with `false` or provide your own list of breakpoint sizes to stack on.
	     */
	    responsive?: false | EuiBreakpointSize[];
	} & Omit<_EuiPanelProps, 'paddingSize'>;
	/**
	 * Consumed via `EuiSplitPanel.Outer`.
	 * Extends most `EuiPanelProps`.
	 */
	export const _EuiSplitPanelOuter: FunctionComponent<_EuiSplitPanelOuterProps>;
	export const EuiSplitPanel: {
	    Outer: React.FunctionComponent<_EuiSplitPanelOuterProps>;
	    Inner: React.FunctionComponent<_EuiSplitPanelInnerProps>;
	};

}
declare module '@elastic\eui\src\components\panel\split_panel' {
	export { EuiSplitPanel, _EuiSplitPanelInnerProps, _EuiSplitPanelOuterProps, } from '@elastic\eui\src\components\panel\split_panel\split_panel';

}
declare module '@elastic/eui' {
	export { EuiPanel, EuiPanelProps, PanelPaddingSize, SIZES } from '@elastic\eui\src\components\panel\panel';
	export { EuiSplitPanel } from '@elastic\eui\src\components\panel\split_panel';

}
declare module '@elastic\eui\src\components\portal\portal' {
	/**
	 * NOTE: We can't test this component because Enzyme doesn't support rendering
	 * into portals.
	 */
	import { Component, ReactNode } from 'react';
	interface InsertPositionsMap {
	    after: InsertPosition;
	    before: InsertPosition;
	}
	export const insertPositions: InsertPositionsMap;
	export const INSERT_POSITIONS: EuiPortalInsertPosition[]; type EuiPortalInsertPosition = keyof typeof insertPositions;
	export interface EuiPortalProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    insert?: {
	        sibling: HTMLElement;
	        position: EuiPortalInsertPosition;
	    };
	    portalRef?: (ref: HTMLDivElement | null) => void;
	}
	export class EuiPortal extends Component<EuiPortalProps> {
	    portalNode: HTMLDivElement;
	    constructor(props: EuiPortalProps);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    updatePortalRef(ref: HTMLDivElement | null): void;
	    render(): import("react").ReactPortal;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiPortal, EuiPortalProps } from '@elastic\eui\src\components\portal\portal';

}
declare module '@elastic\eui\src\components\observer\observer' {
	import { Component, ReactNode } from 'react';
	interface BaseProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: (ref: any) => ReactNode;
	}
	export interface Observer {
	    disconnect: () => void;
	    observe: (element: Element, options?: {
	        [key: string]: any;
	    }) => void;
	}
	export class EuiObserver<Props extends BaseProps> extends Component<Props> {
	    protected name: string;
	    protected childNode: null | Element;
	    protected observer: null | Observer;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    updateChildNode: (ref: Element) => void;
	    beginObserve: () => void;
	    render(): ReactNode;
	}
	export {};

}
declare module '@elastic\eui\src\components\observer\mutation_observer\mutation_observer' {
	import { ReactNode } from 'react';
	import { EuiObserver } from '@elastic\eui\src\components\observer\observer';
	export interface EuiMutationObserverProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: (ref: (e: HTMLElement | null) => void) => ReactNode;
	    onMutation: MutationCallback;
	    observerOptions?: MutationObserverInit;
	}
	export class EuiMutationObserver extends EuiObserver<EuiMutationObserverProps> {
	    name: string;
	    onMutation: MutationCallback;
	    beginObserve: () => void;
	}
	export const useMutationObserver: (container: Element | null, callback: MutationCallback, observerOptions?: MutationObserverInit | undefined) => void;

}
declare module '@elastic/eui' {
	export { EuiMutationObserver, EuiMutationObserverProps, useMutationObserver, } from '@elastic\eui\src\components\observer\mutation_observer\mutation_observer';

}
declare module '@elastic\eui\src\services\popover\types' {
	export type EuiPopoverPosition = 'top' | 'right' | 'bottom' | 'left';

}
declare module '@elastic\eui\src\services\popover\calculate_popover_position' {
	import { EuiPopoverPosition } from '@elastic\eui\src\services\popover\types';
	interface EuiPopoverBoundingBox {
	    top: number;
	    left: number;
	    width: number;
	    height: number;
	}
	interface EuiPopoverAnchorRect extends EuiPopoverBoundingBox {
	    right: number;
	    bottom: number;
	}
	interface EuiPopoverDimensions {
	    width: number;
	    height: number;
	}
	interface EuiPopoverPositionedBox extends EuiPopoverBoundingBox {
	    position: EuiPopoverPosition;
	}
	/**
	 * Determine the best position for a popover that avoids clipping by the window view port.
	 *
	 * @param {Object} anchorBounds - getBoundingClientRect() of the node the popover is tethered to (e.g. a button).
	 * @param {Object} popoverBounds - getBoundingClientRect() of the popover node (e.g. the tooltip).
	 * @param {string} requestedPosition - Position the user wants. One of ["top", "right", "bottom", "left"]
	 * @param {number} buffer - The space between the wrapper and the popover. Also the minimum space between the
	 * popover and the window.
	 * @param {Array} positions - List of acceptable positions. Defaults to ["top", "right", "bottom", "left"].
	 *
	 * @returns {Object} With properties position (one of ["top", "right", "bottom", "left"]), left, top, width, and height.
	 */
	export function calculatePopoverPosition(anchorBounds: EuiPopoverAnchorRect, popoverBounds: EuiPopoverDimensions, requestedPosition: EuiPopoverPosition, buffer?: number, positions?: EuiPopoverPosition[]): EuiPopoverPositionedBox;
	export {};

}
declare module '@elastic\eui\src\services\popover\popover_positioning' {
	import { EuiPopoverPosition } from '@elastic\eui\src\services\popover\types';
	export const POSITIONS: EuiPopoverPosition[];
	interface BoundingBox {
	    [position: string]: number;
	    top: number;
	    right: number;
	    bottom: number;
	    left: number;
	}
	export interface EuiClientRect extends BoundingBox {
	    height: number;
	    width: number;
	}
	interface FindPopoverPositionArgs {
	    anchor: HTMLElement;
	    popover: HTMLElement;
	    align?: EuiPopoverPosition;
	    position: EuiPopoverPosition;
	    forcePosition?: boolean;
	    buffer?: number | [number, number, number, number];
	    offset?: number;
	    allowCrossAxis?: boolean;
	    container?: HTMLElement;
	    arrowConfig?: {
	        arrowWidth: number;
	        arrowBuffer: number;
	    };
	    returnBoundingBox?: boolean;
	}
	interface FindPopoverPositionResult {
	    top: number;
	    left: number;
	    position: 'top' | 'right' | 'bottom' | 'left';
	    fit: number;
	    arrow?: {
	        left: number;
	        top: number;
	    };
	    anchorBoundingBox?: EuiClientRect;
	}
	/**
	 * Calculates the absolute positioning (relative to document.body) to place a popover element
	 *
	 * @param anchor {HTMLElement} Element to anchor the popover to
	 * @param popover {HTMLElement} Element containing the popover content
	 * @param position {string} Position the user wants. One of ["top", "right", "bottom", "left"]
	 * @param [forcePosition] {boolean} If true, use only the provided `position` value and don't try any other position
	 * @param [align] {string} Cross-axis alignment. One of ["top", "right", "bottom", "left"]
	 * @param [buffer=16] {number} Minimum distance between the popover and the bounding container
	 * @param [offset=0] {number} Distance between the popover and the anchor
	 * @param [allowCrossAxis=true] {boolean} Whether to allow the popover to be positioned on the cross-axis
	 * @param [container] {HTMLElement} Element the popover must be constrained to fit within
	 * @param [arrowConfig] {{arrowWidth: number, arrowBuffer: number}} If
	 *  present, describes the size & constraints for an arrow element, and the
	 *  function return value will include an `arrow` param with position details
	 *
	 * @returns {FindPopoverPositionResult} absolute page coordinates for the
	 * popover, and the placement's relation to the anchor or undefined
	 * there's no room.
	 */
	export function findPopoverPosition({ anchor, popover, align, position, forcePosition, buffer, offset, allowCrossAxis, container, arrowConfig, returnBoundingBox, }: FindPopoverPositionArgs): FindPopoverPositionResult;
	interface GetPopoverScreenCoordinatesArgs {
	    position: EuiPopoverPosition;
	    align?: EuiPopoverPosition;
	    anchorBoundingBox: EuiClientRect;
	    popoverBoundingBox: EuiClientRect;
	    windowBoundingBox: EuiClientRect;
	    containerBoundingBox: EuiClientRect;
	    arrowConfig?: {
	        arrowWidth: number;
	        arrowBuffer: number;
	    };
	    offset?: number;
	    buffer?: number | [number, number, number, number];
	}
	interface GetPopoverScreenCoordinatesResult {
	    top: number;
	    left: number;
	    fit: number;
	    arrow: {
	        top: number;
	        left: number;
	    } | undefined;
	}
	/**
	 * Given a target position and the popover's surrounding context, returns either an
	 * object with {top, left} screen coordinates or `null` if it's not possible to show
	 * content in the target position
	 * @param position {string} the target position, one of ["top", "right", "bottom", "left"]
	 * @param align {string} target alignment on the cross-axis, one of ["top", "right", "bottom", "left"]
	 * @param anchorBoundingBox {Object} bounding box of the anchor element
	 * @param popoverBoundingBox {Object} bounding box of the popover element
	 * @param windowBoundingBox {Object} bounding box of the window
	 * @param containerBoundingBox {Object} bounding box of the container
	 * @param [arrowConfig] {{arrowWidth: number, arrowBuffer: number}} If present, describes the size &
	 *  constraints for an arrow element, and the function return value will include an `arrow` param
	 *  with position details
	 * @param [offset=0] {number} Distance between the popover and the anchor
	 * @param [buffer=0] {number} Minimum distance between the popover's
	 *  placement and the container edge
	 *
	 * @returns {GetPopoverScreenCoordinatesResult}
	 *  object with top/left coordinates, the popover's relative position to the anchor, and how well the
	 *  popover fits in the location (0.0 -> 1.0) coordinates and the popover's relative position, if
	 *  there is no room in this placement then null
	 */
	export function getPopoverScreenCoordinates({ position, align, anchorBoundingBox, popoverBoundingBox, windowBoundingBox, containerBoundingBox, arrowConfig, offset, buffer, }: GetPopoverScreenCoordinatesArgs): GetPopoverScreenCoordinatesResult;
	/**
	 * Finds the client pixel coordinate of each edge for the element's bounding box,
	 * and the bounding box's width & height
	 *
	 * @param {HTMLElement} element
	 * @returns {{top: number, right: number, bottom: number, left: number, height: number, width: number}}
	 */
	export function getElementBoundingBox(element: HTMLElement): EuiClientRect;
	/**
	 * Calculates the available content space between anchor and container
	 *
	 * @param {Object} anchorBoundingBox Client bounding box of the anchor element
	 * @param {Object} containerBoundingBox Client bounding box of the container element
	 * @param {number} buffer Minimum distance between the popover and the bounding container
	 * @param {number} offset Distance between the popover and the anchor
	 * @param {string} offsetSide Side the offset needs to be applied to, one
	 *  of ["top", "right", "bottom", "left"]
	 * @returns {{top: number, right: number, bottom: number, left: number}}
	 */
	export function getAvailableSpace(anchorBoundingBox: BoundingBox, containerBoundingBox: BoundingBox, buffer: number | [number, number, number, number], offset: number, offsetSide: EuiPopoverPosition): BoundingBox;
	/**
	 * Computes the fit (overlap) of the content within the container, fit is in range 0.0 => 1.0
	 * @param contentBoundingBox bounding box of content to calculate fit for
	 * @param containerBoundingBox bounding box of container
	 * @returns {number}
	 */
	export function getVisibleFit(contentBoundingBox: BoundingBox, containerBoundingBox: BoundingBox): number;
	/**
	 * Calculates the intersection space between two bounding boxes
	 *
	 * @param firstBox
	 * @param secondBox
	 * @returns {EuiClientRect}
	 */
	export function intersectBoundingBoxes(firstBox: BoundingBox, secondBox: BoundingBox): EuiClientRect;
	/**
	 * Returns the top-most defined z-index in the element's ancestor hierarchy
	 * relative to the `target` element; if no z-index is defined, returns 0
	 * @param element {HTMLElement}
	 * @param cousin {HTMLElement}
	 * @returns {number}
	 */
	export function getElementZIndex(element: HTMLElement, cousin: HTMLElement): number;
	export {};

}
declare module '@elastic\eui\src\services\popover' {
	export { calculatePopoverPosition } from '@elastic\eui\src\services\popover\calculate_popover_position';
	export { findPopoverPosition, getElementZIndex } from '@elastic\eui\src\services\popover\popover_positioning';
	export { EuiPopoverPosition } from '@elastic\eui\src\services\popover\types';

}
declare module '@elastic\eui\src\components\outside_click_detector\outside_click_detector' {
	import { Component, EventHandler, MouseEvent as ReactMouseEvent, ReactElement } from 'react';
	export interface EuiEvent extends Event {
	    euiGeneratedBy: string[];
	}
	export interface EuiOutsideClickDetectorProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactElement<any>;
	    onOutsideClick: (event: Event) => void;
	    isDisabled?: boolean;
	    onMouseDown?: (event: ReactMouseEvent) => void;
	    onMouseUp?: (event: ReactMouseEvent) => void;
	    onTouchStart?: (event: ReactMouseEvent) => void;
	    onTouchEnd?: (event: ReactMouseEvent) => void;
	}
	export class EuiOutsideClickDetector extends Component<EuiOutsideClickDetectorProps> {
	    private id;
	    private capturedDownIds;
	    constructor(props: EuiOutsideClickDetectorProps);
	    onClickOutside: EventHandler<any>;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    onChildClick: (event: ReactMouseEvent, cb: (event: ReactMouseEvent) => void) => void;
	    onChildMouseDown: (event: ReactMouseEvent) => void;
	    onChildMouseUp: (event: ReactMouseEvent) => void;
	    render(): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>;
	}

}
declare module '@elastic/eui' {
	export { EuiOutsideClickDetector, EuiOutsideClickDetectorProps, } from '@elastic\eui\src\components\outside_click_detector\outside_click_detector';

}
declare module '@elastic\eui\src\components\popover\popover' {
	import { Component, KeyboardEvent, CSSProperties, HTMLAttributes, ReactNode, Ref, RefCallback } from 'react';
	import { CommonProps, NoArgCallback } from '@elastic\eui\src\components\common';
	import { FocusTarget, EuiFocusTrapProps } from '@elastic\eui\src\components\focus_trap';
	import { ReactFocusOnProps } from 'react-focus-on/dist/es5/types';
	import { PanelPaddingSize, EuiPanelProps } from '@elastic\eui\src\components\panel';
	import { EuiPopoverPosition } from '@elastic\eui\src\services\popover';
	export type PopoverAnchorPosition = 'upCenter' | 'upLeft' | 'upRight' | 'downCenter' | 'downLeft' | 'downRight' | 'leftCenter' | 'leftUp' | 'leftDown' | 'rightCenter' | 'rightUp' | 'rightDown';
	export interface EuiPopoverProps {
	    /**
	     * Class name passed to the direct parent of the button
	     */
	    anchorClassName?: string;
	    /**
	     * Alignment of the popover and arrow relative to the button
	     */
	    anchorPosition?: PopoverAnchorPosition;
	    /**
	     * Style and position alteration for arrow-less, left-aligned
	     * attachment. Intended for use with inputs as anchors, e.g.
	     * EuiInputPopover
	     */
	    attachToAnchor?: boolean;
	    /**
	     * Triggering element for which to align the popover to
	     */
	    button: NonNullable<ReactNode>;
	    buttonRef?: RefCallback<HTMLDivElement>;
	    /**
	     * Callback to handle hiding of the popover
	     */
	    closePopover: NoArgCallback<void>;
	    /**
	     * Restrict the popover's position within this element
	     */
	    container?: HTMLElement;
	    /**
	     * CSS display type for both the popover and anchor
	     */
	    display?: keyof typeof displayToClassNameMap;
	    /**
	     * Object of props passed to EuiFocusTrap
	     */
	    focusTrapProps?: Pick<EuiFocusTrapProps, 'clickOutsideDisables' | 'noIsolation' | 'scrollLock'>;
	    /**
	     * Show arrow indicating to originating button
	     */
	    hasArrow?: boolean;
	    /**
	     * Specifies what element should initially have focus; Can be a DOM
	     * node, or a selector string (which will be passed to
	     * document.querySelector() to find the DOM node), or a function that
	     * returns a DOM node
	     * Set to `false` to prevent initial auto-focus. Use only
	     * when your app handles setting initial focus state.
	     */
	    initialFocus?: FocusTarget | false;
	    /**
	     * Passed directly to EuiPortal for DOM positioning. Both properties are
	     * required if prop is specified
	     */
	    insert?: {
	        sibling: HTMLElement;
	        position: 'before' | 'after';
	    };
	    /**
	     * Visibility state of the popover
	     */
	    isOpen?: boolean;
	    /**
	     * Traps tab focus within the popover contents
	     */
	    ownFocus?: boolean;
	    /**
	     * Custom class added to the EuiPanel containing the popover contents
	     */
	    panelClassName?: string;
	    /**
	     * EuiPanel padding on all sides
	     */
	    panelPaddingSize?: PanelPaddingSize;
	    /**
	     * Standard DOM `style` attribute. Passed to the EuiPanel
	     */
	    panelStyle?: CSSProperties;
	    /**
	     * Object of props passed to EuiPanel
	     */
	    panelProps?: Omit<EuiPanelProps, 'style'>;
	    panelRef?: RefCallback<HTMLElement | null>;
	    popoverRef?: Ref<HTMLDivElement>;
	    /**
	     * When `true`, the popover's position is re-calculated when the user
	     * scrolls, this supports having fixed-position popover anchors
	     */
	    repositionOnScroll?: boolean;
	    /**
	     * By default, popover content inherits the z-index of the anchor
	     * component; pass `zIndex` to override
	     */
	    zIndex?: number;
	    /**
	     * Function callback for when the focus trap is deactivated
	     */
	    onTrapDeactivation?: ReactFocusOnProps['onDeactivation'];
	    /**
	     * Distance away from the anchor that the popover will render
	     */
	    offset?: number;
	    /**
	     * Minimum distance between the popover and the bounding container;
	     * Pass an array of 4 values to adjust each side differently: `[top, right, bottom, left]`
	     * Default is 16
	     */
	    buffer?: number | [number, number, number, number];
	    /**
	     * Element to pass as the child element of the arrow;
	     * Use case is typically limited to an accompanying `EuiBeacon`
	     */
	    arrowChildren?: ReactNode;
	    /**
	     * Provide a name to the popover panel
	     */
	    'aria-label'?: string;
	    /**
	     * Alternative option to `aria-label` that takes an `id`.
	     * Usually takes the `id` of the popover title
	     */
	    'aria-labelledby'?: string;
	}
	export function getPopoverPositionFromAnchorPosition(anchorPosition: PopoverAnchorPosition): EuiPopoverPosition;
	export function getPopoverAlignFromAnchorPosition(anchorPosition: PopoverAnchorPosition): EuiPopoverPosition;
	export const ANCHOR_POSITIONS: string[]; const displayToClassNameMap: {
	    inlineBlock: undefined;
	    block: string;
	};
	export const DISPLAY: string[];
	export type Props = CommonProps & HTMLAttributes<HTMLDivElement> & EuiPopoverProps;
	interface State {
	    prevProps: {
	        isOpen?: boolean;
	    };
	    suppressingPopover?: boolean;
	    isClosing: boolean;
	    isOpening: boolean;
	    popoverStyles: CSSProperties;
	    arrowStyles?: CSSProperties;
	    arrowPosition: any;
	    openPosition: any;
	    isOpenStable: boolean;
	} type PropsWithDefaults = Props & {
	    anchorPosition: PopoverAnchorPosition;
	    /** CSS display type for both the popover and anchor */
	    display: keyof typeof displayToClassNameMap;
	    hasArrow: boolean;
	    isOpen: boolean;
	    ownFocus: boolean;
	    panelPaddingSize: PanelPaddingSize;
	};
	export class EuiPopover extends Component<Props, State> {
	    static defaultProps: Partial<PropsWithDefaults>;
	    static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null;
	    private respositionTimeout;
	    private closingTransitionTimeout;
	    private closingTransitionAnimationFrame;
	    private updateFocusAnimationFrame;
	    private button;
	    private panel;
	    private hasSetInitialFocus;
	    constructor(props: Props);
	    closePopover: () => void;
	    onEscapeKey: (event: Event) => void;
	    onKeyDown: (event: KeyboardEvent) => void;
	    onClickOutside: (event: Event) => void;
	    updateFocus(): void;
	    onOpenPopover: () => void;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: Props): void;
	    componentWillUnmount(): void;
	    onMutation: (records: MutationRecord[]) => void;
	    positionPopover: (allowEnforcePosition: boolean) => void;
	    positionPopoverFixed: () => void;
	    positionPopoverFluid: () => void;
	    panelRef: (node: HTMLElement | null) => void;
	    buttonRef: (node: HTMLDivElement | null) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\observer\resize_observer\resize_observer' {
	
	import { ReactNode } from 'react';
	import { EuiObserver } from '@elastic\eui\src\components\observer\observer';
	export interface EuiResizeObserverProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: (ref: (e: HTMLElement | null) => void) => ReactNode;
	    onResize: (dimensions: {
	        height: number;
	        width: number;
	    }) => void;
	}
	export class EuiResizeObserver extends EuiObserver<EuiResizeObserverProps> {
	    name: string;
	    state: {
	        height: number;
	        width: number;
	    };
	    onResize: ResizeObserverCallback;
	    beginObserve: () => void;
	}
	export const useResizeObserver: (container: Element | null, dimension?: "width" | "height" | undefined) => {
	    width: number;
	    height: number;
	};

}
declare module '@elastic/eui' {
	export { EuiResizeObserver, EuiResizeObserverProps, useResizeObserver, } from '@elastic\eui\src\components\observer\resize_observer\resize_observer';

}
declare module '@elastic\eui\src\components\popover\input_popover' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiPopoverProps } from '@elastic\eui\src\components\popover\popover';
	export interface _EuiInputPopoverProps extends Omit<EuiPopoverProps, 'button' | 'buttonRef'> {
	    disableFocusTrap?: boolean;
	    fullWidth?: boolean;
	    input: EuiPopoverProps['button'];
	    inputRef?: EuiPopoverProps['buttonRef'];
	    onPanelResize?: (width?: number) => void;
	}
	export type EuiInputPopoverProps = CommonProps & HTMLAttributes<HTMLDivElement> & _EuiInputPopoverProps;
	export const EuiInputPopover: FunctionComponent<EuiInputPopoverProps>;

}
declare module '@elastic\eui\src\components\popover\popover_title' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { PanelPaddingSize } from '@elastic\eui\src\components\panel';
	export type EuiPopoverTitleProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps & {
	    /**
	     * Customize the all around padding of the popover title.
	     * Leave `undefined` to inherit from the `panelPaddingSize` of the containing EuiPopover
	     */
	    paddingSize?: PanelPaddingSize;
	}>;
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[];
	export const EuiPopoverTitle: EuiPopoverTitleProps;

}
declare module '@elastic\eui\src\components\popover\popover_footer' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { PanelPaddingSize } from '@elastic\eui\src\components\panel';
	export type EuiPopoverFooterProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps & {
	    /**
	     * Customize the all around padding of the popover footer.
	     * Leave `undefined` to inherit from the `panelPaddingSize` of the containing EuiPopover
	     */
	    paddingSize?: PanelPaddingSize;
	}>;
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[];
	export const EuiPopoverFooter: EuiPopoverFooterProps;

}
declare module '@elastic\eui\src\components\popover\wrapping_popover' {
	import { Component } from 'react';
	import { Props as EuiPopoverProps } from '@elastic\eui\src\components\popover\popover';
	export interface EuiWrappingPopoverProps extends EuiPopoverProps {
	    button: HTMLElement;
	}
	/**
	 * Injects the EuiPopover next to the button via EuiPortal
	 * then the button element is moved into the popover dom.
	 * On unmount, the button is moved back to its original location.
	 */
	export class EuiWrappingPopover extends Component<EuiWrappingPopoverProps> {
	    private portal;
	    private anchor;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    setPortalRef: (node: HTMLElement | null) => void;
	    setAnchorRef: (node: HTMLElement | null) => void;
	    render(): JSX.Element;
	}

}
declare module '@elastic/eui' {
	export { EuiInputPopover, EuiInputPopoverProps } from '@elastic\eui\src\components\popover\input_popover';
	export { EuiPopover, EuiPopoverProps, PopoverAnchorPosition } from '@elastic\eui\src\components\popover\popover';
	export { EuiPopoverTitle, EuiPopoverTitleProps } from '@elastic\eui\src\components\popover\popover_title';
	export { EuiPopoverFooter, EuiPopoverFooterProps } from '@elastic\eui\src\components\popover\popover_footer';
	export { EuiWrappingPopover, EuiWrappingPopoverProps, } from '@elastic\eui\src\components\popover\wrapping_popover';

}
declare module '@elastic\eui\src\components\form\range\range_highlight' {
	import React, { FunctionComponent } from 'react';
	export interface EuiRangeHighlightProps {
	    className?: string;
	    background?: string;
	    compressed?: boolean;
	    hasFocus?: boolean;
	    showTicks?: boolean;
	    lowerValue: number;
	    upperValue: number;
	    max: number;
	    min: number;
	    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
	}
	export const EuiRangeHighlight: FunctionComponent<EuiRangeHighlightProps>;

}
declare module '@elastic\eui\src\components\form\range\range_input' {
	import { FunctionComponent } from 'react';
	import { EuiFieldNumberProps } from '@elastic\eui\src\components\form\field_number';
	export interface EuiRangeInputProps extends Omit<EuiFieldNumberProps, 'max' | 'min' | 'value'> {
	    autoSize?: boolean;
	    digitTolerance: number;
	    max: number;
	    min: number;
	    side?: 'min' | 'max';
	    value: string | number;
	}
	export const EuiRangeInput: FunctionComponent<EuiRangeInputProps>;

}
declare module '@elastic\eui\src\components\form\range\range_label' {
	import { FunctionComponent } from 'react';
	export interface EuiRangeLabelProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: string | number;
	    disabled?: boolean;
	    side?: 'min' | 'max';
	}
	export const EuiRangeLabel: FunctionComponent<EuiRangeLabelProps>;

}
declare module '@elastic\eui\src\components\form\range\range_levels' {
	import { FunctionComponent } from 'react';
	export type EuiRangeLevelColor = 'primary' | 'success' | 'warning' | 'danger';
	export const LEVEL_COLORS: EuiRangeLevelColor[];
	export interface EuiRangeLevel {
	    min: number;
	    max: number;
	    color: EuiRangeLevelColor;
	}
	export interface EuiRangeLevelsProps {
	    levels?: EuiRangeLevel[];
	    max: number;
	    min: number;
	    showTicks?: boolean;
	    compressed?: boolean;
	}
	export const EuiRangeLevels: FunctionComponent<EuiRangeLevelsProps>;

}
declare module '@elastic\eui\src\components\form\range\range_slider' {
	import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiRangeSliderProps = InputHTMLAttributes<HTMLInputElement> & CommonProps & {
	    id?: string;
	    name?: string;
	    min: number;
	    max: number;
	    step?: number;
	    compressed?: boolean;
	    hasFocus?: boolean;
	    showRange?: boolean;
	    showTicks?: boolean;
	    disabled?: boolean;
	    tabIndex?: number;
	    onChange?: ChangeEventHandler<HTMLInputElement>;
	};
	export const EuiRangeSlider: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & CommonProps & {
	    id?: string | undefined;
	    name?: string | undefined;
	    min: number;
	    max: number;
	    step?: number | undefined;
	    compressed?: boolean | undefined;
	    hasFocus?: boolean | undefined;
	    showRange?: boolean | undefined;
	    showTicks?: boolean | undefined;
	    disabled?: boolean | undefined;
	    tabIndex?: number | undefined;
	    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
	} & React.RefAttributes<HTMLInputElement>>;

}
declare module '@elastic\eui\src\components\form\range\range_ticks' {
	import { ButtonHTMLAttributes, MouseEventHandler, FunctionComponent, ReactNode } from 'react';
	export interface EuiRangeTick {
	    value: number;
	    label: ReactNode;
	}
	export type EuiRangeTicksProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> & {
	    ticks?: EuiRangeTick[];
	    tickSequence: number[];
	    value?: number | string | Array<string | number>;
	    min: number;
	    max: number;
	    compressed?: boolean;
	    interval?: number;
	    disabled?: boolean;
	    onChange?: MouseEventHandler<HTMLButtonElement>;
	};
	export const EuiRangeTicks: FunctionComponent<EuiRangeTicksProps>;

}
declare module '@elastic\eui\src\components\form\range\range_tooltip' {
	import { FunctionComponent, ReactNode } from 'react';
	export interface EuiRangeTooltipProps {
	    value?: number | string;
	    valueAppend?: ReactNode;
	    valuePrepend?: ReactNode;
	    max: number;
	    min: number;
	    name?: string;
	    showTicks?: boolean;
	    compressed?: boolean;
	}
	export const EuiRangeTooltip: FunctionComponent<EuiRangeTooltipProps>;

}
declare module '@elastic\eui\src\components\form\range\range_track' {
	import { Component, MouseEventHandler, HTMLAttributes } from 'react';
	import { EuiRangeLevel, LEVEL_COLORS } from '@elastic\eui\src\components\form\range\range_levels';
	import { EuiRangeTick } from '@elastic\eui\src\components\form\range\range_ticks';
	export { LEVEL_COLORS };
	export interface EuiRangeTrackProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	    min: number;
	    max: number;
	    step?: number;
	    value?: number | string | Array<string | number>;
	    compressed?: boolean;
	    disabled?: boolean;
	    showTicks?: boolean;
	    tickInterval?: number;
	    ticks?: EuiRangeTick[];
	    onChange?: MouseEventHandler<HTMLButtonElement>;
	    levels?: EuiRangeLevel[];
	}
	export class EuiRangeTrack extends Component<EuiRangeTrackProps> {
	    validateValueIsInStep: (value: number) => number;
	    calculateSequence: (min: EuiRangeTrackProps['min'], max: EuiRangeTrackProps['max'], interval?: EuiRangeTrackProps['tickInterval']) => number[];
	    calculateTicks: (min: EuiRangeTrackProps['min'], max: EuiRangeTrackProps['max'], step?: EuiRangeTrackProps['step'], tickInterval?: EuiRangeTrackProps['tickInterval'], customTicks?: EuiRangeTick[] | undefined) => number[];
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\form\range\range_wrapper' {
	import React, { HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiRangeWrapperProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	    fullWidth?: boolean;
	    compressed?: boolean;
	}
	export const EuiRangeWrapper: React.ForwardRefExoticComponent<EuiRangeWrapperProps & React.RefAttributes<HTMLDivElement>>;

}
declare module '@elastic\eui\src\components\form\range\range' {
	
	import React, { Component, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiRangeInputProps } from '@elastic\eui\src\components\form\range\range_input';
	import { EuiRangeLevel } from '@elastic\eui\src\components\form\range\range_levels';
	import { EuiRangeTick } from '@elastic\eui\src\components\form\range\range_ticks';
	export interface EuiRangeProps extends CommonProps, Omit<EuiRangeInputProps, 'onChange' | 'digitTolerance'> {
	    compressed?: boolean;
	    readOnly?: boolean;
	    fullWidth?: boolean;
	    id?: string;
	    /**
	     * Create colored indicators for certain intervals
	     */
	    levels?: EuiRangeLevel[];
	    step?: number;
	    /**
	     * Pass `true` to displays an extra input control for direct manipulation.
	     * Pass `'inputWithPopover'` to only show the input but show the range in a dropdown.
	     */
	    showInput?: boolean | 'inputWithPopover';
	    /**
	     * Shows static min/max labels on the sides of the range slider
	     */
	    showLabels?: boolean;
	    /**
	     * Shows a thick line from min to value
	     */
	    showRange?: boolean;
	    /**
	     * Shows clickable tick marks and labels at the given interval (`step`/`tickInterval`)
	     */
	    showTicks?: boolean;
	    /**
	     * Shows a tooltip styled value
	     */
	    showValue?: boolean;
	    /**
	     * Specified ticks at specified values
	     */
	    ticks?: EuiRangeTick[];
	    /**
	     * Modifies the number of tick marks and at what interval
	     */
	    tickInterval?: number;
	    /**
	     * Appends to the tooltip
	     */
	    valueAppend?: ReactNode;
	    /**
	     * Prepends to the tooltip
	     */
	    valuePrepend?: ReactNode;
	    onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>, isValid: boolean) => void;
	}
	export class EuiRange extends Component<EuiRangeProps> {
	    static defaultProps: {
	        min: number;
	        max: number;
	        step: number;
	        fullWidth: boolean;
	        compressed: boolean;
	        isLoading: boolean;
	        showLabels: boolean;
	        showInput: boolean;
	        showRange: boolean;
	        showTicks: boolean;
	        showValue: boolean;
	        levels: never[];
	    };
	    preventPopoverClose: boolean;
	    state: {
	        id: string;
	        isPopoverOpen: boolean;
	    };
	    handleOnChange: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
	    get isValid(): boolean;
	    onInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
	    onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => NodeJS.Timeout;
	    closePopover: () => void;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\form\range\range_draggable' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	export interface EuiRangeDraggableProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	    min: number;
	    max: number;
	    value: number[];
	    disabled?: boolean;
	    compressed?: boolean;
	    showTicks?: boolean;
	    lowerPosition: string;
	    upperPosition: string;
	    onChange: (x: number, isFirstInteraction?: boolean) => void;
	}
	export const EuiRangeDraggable: FunctionComponent<EuiRangeDraggableProps>;

}
declare module '@elastic\eui\src\components\form\range\range_thumb' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	interface BaseProps extends CommonProps {
	    min: number;
	    max: number;
	    value?: number | string;
	    disabled?: boolean;
	    showInput?: boolean;
	    showTicks?: boolean;
	}
	interface ButtonLike extends BaseProps, HTMLAttributes<HTMLButtonElement> {
	}
	interface DivLike extends BaseProps, Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onMouseDown'> {
	}
	export type EuiRangeThumbProps = ExclusiveUnion<ButtonLike, DivLike>;
	export const EuiRangeThumb: FunctionComponent<EuiRangeThumbProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\range\dual_range' {
	
	import React, { Component } from 'react';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	import { EuiRangeProps } from '@elastic\eui\src\components\form\range\range';
	import { EuiRangeInputProps } from '@elastic\eui\src\components\form\range\range_input';
	import { EuiRangeLevel } from '@elastic\eui\src\components\form\range\range_levels';
	import { EuiRangeSliderProps } from '@elastic\eui\src\components\form\range\range_slider';
	import { EuiRangeTick } from '@elastic\eui\src\components\form\range\range_ticks'; type ValueMember = number | string;
	export interface EuiDualRangeProps extends Omit<EuiRangeSliderProps, 'onChange' | 'onBlur' | 'onFocus' | 'value'> {
	    value: [ValueMember, ValueMember];
	    onBlur?: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>) => void;
	    onFocus?: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>) => void;
	    onChange: (values: [ValueMember, ValueMember], isValid: boolean, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLDivElement>) => void;
	    fullWidth?: boolean;
	    isInvalid?: boolean;
	    /**
	     * Create colored indicators for certain intervals
	     */
	    levels?: EuiRangeLevel[];
	    /**
	     * Shows static min/max labels on the sides of the range slider
	     */
	    showLabels?: boolean;
	    /**
	     * Pass `true` to displays an extra input control for direct manipulation.
	     * Pass `'inputWithPopover'` to only show the input but show the range in a dropdown.
	     */
	    showInput?: EuiRangeProps['showInput'];
	    /**
	     * Modifies the number of tick marks and at what interval
	     */
	    tickInterval?: number;
	    /**
	     * Specified ticks at specified values
	     */
	    ticks?: EuiRangeTick[];
	    /**
	     * Creates an input group with element(s) coming before input.  Will only show if `showInput = inputWithPopover`.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input. Will only show if `showInput = inputWithPopover`.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	    /**
	     *  Intended to be uses with aria attributes. Some attributes may be overwritten.
	     */
	    minInputProps?: Partial<EuiRangeInputProps>;
	    /**
	     *  Intended to be uses with aria attributes. Some attributes may be overwritten.
	     */
	    maxInputProps?: Partial<EuiRangeInputProps>;
	    /**
	     *  Creates a draggble highlighted range area
	     */
	    isDraggable?: boolean;
	}
	export class EuiDualRange extends Component<EuiDualRangeProps> {
	    static defaultProps: {
	        min: number;
	        max: number;
	        step: number;
	        fullWidth: boolean;
	        compressed: boolean;
	        showLabels: boolean;
	        showInput: boolean;
	        showRange: boolean;
	        showTicks: boolean;
	        levels: never[];
	    };
	    state: {
	        id: string;
	        hasFocus: boolean;
	        rangeSliderRefAvailable: boolean;
	        isPopoverOpen: boolean;
	        rangeWidth: undefined;
	        isVisible: boolean;
	    };
	    preventPopoverClose: boolean;
	    rangeSliderRef: HTMLInputElement | null;
	    handleRangeSliderRefUpdate: (ref: HTMLInputElement | null) => void;
	    private leftPosition;
	    private dragAcc;
	    get lowerValue(): string | number;
	    get upperValue(): string | number;
	    get lowerValueIsValid(): boolean;
	    get upperValueIsValid(): boolean;
	    get isValid(): boolean;
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	    _determineInvalidThumbMovement: (newVal: ValueMember, lower: ValueMember, upper: ValueMember, e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => void;
	    _determineValidThumbMovement: (newVal: ValueMember, lower: ValueMember, upper: ValueMember, e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
	    _determineThumbMovement: (newVal: number, e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
	    _handleOnChange: (lower: ValueMember, upper: ValueMember, e?: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | undefined) => void;
	    handleSliderChange: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
	    _resetToRangeEnds: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	    _isDirectionalKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => boolean;
	    handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	    handleLowerInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	    handleUpperInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	    _handleKeyDown: (value: ValueMember, event: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLDivElement>) => number;
	    handleLowerKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	    handleUpperKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	    handleDraggableKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
	    calculateThumbPositionStyle: (value: number, width?: number | undefined) => {
	        left: string;
	    };
	    toggleHasFocus: (shouldFocused?: boolean) => void;
	    onThumbFocus: (e: React.FocusEvent<HTMLDivElement>) => void;
	    onThumbBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
	    onInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
	    onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => NodeJS.Timeout;
	    closePopover: () => void;
	    onResize: (width?: number | undefined) => void;
	    getNearestStep: (value: number) => number;
	    handleDrag: (x: number, isFirstInteraction?: boolean | undefined) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\range' {
	export { EuiDualRange, EuiDualRangeProps } from '@elastic\eui\src\components\form\range\dual_range';
	export { EuiRange, EuiRangeProps } from '@elastic\eui\src\components\form\range\range';

}
declare module '@elastic\eui\src\components\form\select\select' {
	import React, { SelectHTMLAttributes, OptionHTMLAttributes, Ref, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	export interface EuiSelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
	    text: React.ReactNode;
	}
	export type EuiSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> & CommonProps & {
	    options?: EuiSelectOption[];
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    isLoading?: boolean;
	    /**
	     * Simulates no selection by creating an empty, selected, hidden first option
	     */
	    hasNoInitialSelection?: boolean;
	    inputRef?: Ref<HTMLSelectElement>;
	    value?: string | number;
	    /**
	     * when `true` creates a shorter height input
	     */
	    compressed?: boolean;
	    /**
	     * Creates an input group with element(s) coming before select.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after select.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	};
	export const EuiSelect: FunctionComponent<EuiSelectProps>;

}
declare module '@elastic\eui\src\components\form\select' {
	export { EuiSelect, EuiSelectProps, EuiSelectOption } from '@elastic\eui\src\components\form\select\select';

}
declare module '@elastic\eui\src\components\form\super_select\super_select_control' {
	import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	export interface EuiSuperSelectOption<T> {
	    value: T;
	    inputDisplay?: ReactNode;
	    dropdownDisplay?: ReactNode;
	    disabled?: boolean;
	    'data-test-subj'?: string;
	}
	export interface EuiSuperSelectControlProps<T> extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
	    compressed?: boolean;
	    fullWidth?: boolean;
	    isInvalid?: boolean;
	    isLoading?: boolean;
	    readOnly?: boolean;
	    name?: string;
	    value?: T;
	    options?: Array<EuiSuperSelectOption<T>>;
	    /**
	     * Creates an input group with element(s) coming before input.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	}
	export const EuiSuperSelectControl: <T extends string>(props: EuiSuperSelectControlProps<T>) => ReturnType<FunctionComponent<EuiSuperSelectControlProps<T>>>;

}
declare module '@elastic\eui\src\components\tool_tip\tool_tip_popover' {
	import { HTMLAttributes, Component, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; type Props = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
	    positionToolTip: () => void;
	    children?: ReactNode;
	    title?: ReactNode;
	    popoverRef?: (ref: HTMLDivElement) => void;
	};
	export class EuiToolTipPopover extends Component<Props> {
	    private popover;
	    updateDimensions: () => void;
	    setPopoverRef: (ref: HTMLDivElement) => void;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\tool_tip\tool_tip' {
	import { Component, ReactElement, ReactNode, MouseEvent as ReactMouseEvent, KeyboardEvent } from 'react';
	export type ToolTipPositions = 'top' | 'right' | 'bottom' | 'left';
	export const POSITIONS: import ("@elastic\eui\src\services\popover").EuiPopoverPosition[];
	export type ToolTipDelay = 'regular' | 'long';
	interface ToolTipStyles {
	    top: number;
	    left: number | 'auto';
	    right?: number | 'auto';
	    opacity?: number;
	    visibility?: 'hidden';
	} const displayToClassNameMap: {
	    inlineBlock: undefined;
	    block: string;
	};
	export interface EuiToolTipProps {
	    /**
	     * Passes onto the the trigger.
	     */
	    anchorClassName?: string;
	    /**
	     * The in-view trigger for your tooltip.
	     */
	    children: ReactElement;
	    /**
	     * Passes onto the tooltip itself, not the trigger.
	     */
	    className?: string;
	    /**
	     * The main content of your tooltip.
	     */
	    content?: ReactNode;
	    /**
	     * Common display alternatives for the anchor wrapper
	     */
	    display?: keyof typeof displayToClassNameMap;
	    /**
	     * Delay before showing tooltip. Good for repeatable items.
	     */
	    delay: ToolTipDelay;
	    /**
	     * An optional title for your tooltip.
	     */
	    title?: ReactNode;
	    /**
	     * Unless you provide one, this will be randomly generated.
	     */
	    id?: string;
	    /**
	     * Suggested position. If there is not enough room for it this will be changed.
	     */
	    position: ToolTipPositions;
	    /**
	     * If supplied, called when mouse movement causes the tool tip to be
	     * hidden.
	     */
	    onMouseOut?: (event: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => void;
	}
	interface State {
	    visible: boolean;
	    calculatedPosition: ToolTipPositions;
	    toolTipStyles: ToolTipStyles;
	    arrowStyles: undefined | {
	        left: number;
	        top: number;
	    };
	    id: string;
	}
	export class EuiToolTip extends Component<EuiToolTipProps, State> {
	    _isMounted: boolean;
	    anchor: null | HTMLElement;
	    popover: null | HTMLElement;
	    private timeoutId?;
	    state: State;
	    static defaultProps: Partial<EuiToolTipProps>;
	    clearAnimationTimeout: () => void;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    componentDidUpdate(prevProps: EuiToolTipProps, prevState: State): void;
	    testAnchor: () => void;
	    setPopoverRef: (ref: HTMLElement) => void;
	    showToolTip: () => void;
	    positionToolTip: () => void;
	    hideToolTip: () => void;
	    hasFocusMouseMoveListener: () => void;
	    onKeyUp: (event: KeyboardEvent<HTMLSpanElement>) => void;
	    onMouseOut: (event: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\tool_tip\icon_tip' {
	import { FunctionComponent } from 'react';
	import { PropsOf } from '@elastic\eui\src\components\common';
	import { EuiIcon, IconSize, IconType } from '@elastic\eui\src\components\icon';
	import { EuiToolTipProps } from '@elastic\eui\src\components\tool_tip\tool_tip';
	export interface EuiIconTipProps {
	    /**
	     * The icon color.
	     */
	    color?: string;
	    /**
	     * The icon type.
	     */
	    type?: IconType;
	    /**
	     * The icon size.
	     */
	    size?: IconSize;
	    /**
	     * Explain what this icon means for screen readers.
	     */
	    'aria-label'?: string;
	    /**
	     * Pass certain props down to `EuiIcon`
	     */
	    iconProps?: Omit<PropsOf<EuiIcon>, 'type'> & {
	        type?: never;
	    };
	} type Props = Omit<EuiToolTipProps, 'children' | 'delay' | 'position'> & EuiIconTipProps & {
	    delay?: EuiToolTipProps['delay'];
	    position?: EuiToolTipProps['position'];
	};
	export const EuiIconTip: FunctionComponent<Props>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiToolTip, ToolTipPositions, EuiToolTipProps } from '@elastic\eui\src\components\tool_tip\tool_tip';
	export { EuiIconTip, EuiIconTipProps } from '@elastic\eui\src\components\tool_tip\icon_tip';

}
declare module '@elastic\eui\src\components\context_menu\context_menu_item' {
	import React, { ButtonHTMLAttributes, Component, ReactElement, ReactNode, Ref } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { ToolTipPositions } from '@elastic\eui\src\components\tool_tip';
	export type EuiContextMenuItemIcon = ReactElement<any> | string | HTMLElement;
	export type EuiContextMenuItemLayoutAlignment = 'center' | 'top' | 'bottom'; const sizeToClassNameMap: {
	    s: string;
	    m: null;
	};
	export const SIZES: ("s" | "m")[];
	export interface EuiContextMenuItemProps extends CommonProps {
	    icon?: EuiContextMenuItemIcon;
	    hasPanel?: boolean;
	    disabled?: boolean;
	    onClick?: (event: React.MouseEvent) => void;
	    buttonRef?: Ref<HTMLButtonElement>;
	    /**
	     * Required if using a tooltip. Add an optional tooltip on hover
	     */
	    toolTipContent?: ReactNode;
	    /**
	     * Optional title for the tooltip
	     */
	    toolTipTitle?: ReactNode;
	    /**
	     * Dictates the position of the tooltip.
	     */
	    toolTipPosition?: ToolTipPositions;
	    href?: string;
	    target?: string;
	    rel?: string;
	    /**
	     * How to align icon with content of button
	     */
	    layoutAlign?: EuiContextMenuItemLayoutAlignment;
	    /**
	     * Reduce the size to `s` when in need of a more compressed menu
	     */
	    size?: keyof typeof sizeToClassNameMap;
	} type Props = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'> & EuiContextMenuItemProps;
	export const LAYOUT_ALIGN: EuiContextMenuItemLayoutAlignment[];
	export class EuiContextMenuItem extends Component<Props> {
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\context_menu\context_menu_panel' {
	import React, { Component, HTMLAttributes, ReactElement, ReactNode } from 'react';
	import { CommonProps, NoArgCallback } from '@elastic\eui\src\components\common';
	export type EuiContextMenuPanelHeightChangeHandler = (height: number) => void;
	export type EuiContextMenuPanelTransitionType = 'in' | 'out';
	export type EuiContextMenuPanelTransitionDirection = 'next' | 'previous';
	export type EuiContextMenuPanelShowPanelCallback = (currentPanelIndex?: number) => void;
	export const SIZES: ("s" | "m")[];
	export interface EuiContextMenuPanelProps {
	    hasFocus?: boolean;
	    initialFocusedItemIndex?: number;
	    items?: ReactElement[];
	    onClose?: NoArgCallback<void>;
	    onHeightChange?: EuiContextMenuPanelHeightChangeHandler;
	    onTransitionComplete?: NoArgCallback<void>;
	    onUseKeyboardToNavigate?: NoArgCallback<void>;
	    showNextPanel?: EuiContextMenuPanelShowPanelCallback;
	    showPreviousPanel?: NoArgCallback<void>;
	    title?: ReactNode;
	    transitionDirection?: EuiContextMenuPanelTransitionDirection;
	    transitionType?: EuiContextMenuPanelTransitionType;
	    watchedItemProps?: string[];
	    /**
	     * Alters the size of the items and the title
	     */
	    size?: typeof SIZES[number];
	} type Props = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'onKeyDown' | 'tabIndex' | 'onAnimationEnd' | 'title'> & EuiContextMenuPanelProps;
	interface State {
	    prevProps: {
	        items: Props['items'];
	    };
	    menuItems: HTMLElement[];
	    focusedItemIndex?: number;
	    currentHeight?: number;
	    height?: number;
	}
	export class EuiContextMenuPanel extends Component<Props, State> {
	    static defaultProps: Partial<Props>;
	    private _isMounted;
	    private backButton?;
	    private content?;
	    private panel?;
	    constructor(props: Props);
	    incrementFocusedItemIndex: (amount: number) => void;
	    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
	    updateFocus(): void;
	    onTransitionComplete: () => void;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null;
	    getWatchedPropsForItems(items: ReactElement[]): string | null;
	    didItemsChange(prevItems: ReactElement[], nextItems: ReactElement[]): true | undefined;
	    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
	    updateHeight(): void;
	    componentDidUpdate(): void;
	    menuItemRef: (index: number, node: HTMLElement | null) => void;
	    panelRef: (node: HTMLElement | null) => void;
	    contentRef: (node: HTMLElement | null) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\horizontal_rule\horizontal_rule' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiHorizontalRuleSize = keyof typeof sizeToClassNameMap;
	export type EuiHorizontalRuleMargin = keyof typeof marginToClassNameMap;
	export interface EuiHorizontalRuleProps extends CommonProps, HTMLAttributes<HTMLHRElement> {
	    /**
	     * Defines the width of the HR.
	     */
	    size?: EuiHorizontalRuleSize;
	    margin?: EuiHorizontalRuleMargin;
	} const sizeToClassNameMap: {
	    full: string;
	    half: string;
	    quarter: string;
	};
	export const SIZES: string[]; const marginToClassNameMap: {
	    none: null;
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	    xxl: string;
	};
	export const MARGINS: string[];
	export const EuiHorizontalRule: FunctionComponent<EuiHorizontalRuleProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiHorizontalRule, EuiHorizontalRuleProps } from '@elastic\eui\src\components\horizontal_rule\horizontal_rule';

}
declare module '@elastic\eui\src\components\context_menu\context_menu' {
	import React, { Component, HTMLAttributes, ReactElement, ReactNode } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { EuiContextMenuPanelTransitionDirection, EuiContextMenuPanelTransitionType } from '@elastic\eui\src\components\context_menu\context_menu_panel';
	import { EuiContextMenuItemProps } from '@elastic\eui\src\components\context_menu\context_menu_item';
	import { EuiHorizontalRuleProps } from '@elastic\eui\src\components\horizontal_rule';
	export type EuiContextMenuPanelId = string | number;
	export type EuiContextMenuPanelItemDescriptorEntry = Omit<EuiContextMenuItemProps, 'hasPanel'> & {
	    name: React.ReactNode;
	    key?: string;
	    panel?: EuiContextMenuPanelId;
	};
	export interface EuiContextMenuPanelItemSeparator extends EuiHorizontalRuleProps {
	    isSeparator: true;
	    key?: string;
	}
	export type EuiContextMenuPanelItemDescriptor = ExclusiveUnion<EuiContextMenuPanelItemDescriptorEntry, EuiContextMenuPanelItemSeparator>;
	export interface EuiContextMenuPanelDescriptor {
	    id: EuiContextMenuPanelId;
	    title?: ReactNode;
	    items?: EuiContextMenuPanelItemDescriptor[];
	    content?: ReactNode;
	    width?: number;
	    initialFocusedItemIndex?: number;
	    /**
	     * Alters the size of the items and the title
	     */
	    size?: keyof typeof sizeToClassNameMap;
	} const sizeToClassNameMap: {
	    s: string;
	    m: null;
	};
	export const SIZES: ("s" | "m")[];
	export type EuiContextMenuProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'style'> & {
	    panels?: EuiContextMenuPanelDescriptor[];
	    initialPanelId?: EuiContextMenuPanelId;
	    /**
	     * Alters the size of the items and the title
	     */
	    size?: keyof typeof sizeToClassNameMap;
	};
	interface State {
	    prevProps: {
	        panels?: EuiContextMenuPanelDescriptor[];
	    };
	    idToPanelMap: {
	        [id: string]: EuiContextMenuPanelDescriptor;
	    };
	    idToPreviousPanelIdMap: {
	        [panel: string]: EuiContextMenuPanelId;
	    };
	    idAndItemIndexToPanelIdMap: {
	        [id: string]: {
	            [index: string]: EuiContextMenuPanelId;
	        };
	    };
	    idToRenderedItemsMap: {
	        [id: string]: ReactElement[];
	    };
	    height?: number;
	    outgoingPanelId?: EuiContextMenuPanelId;
	    incomingPanelId?: EuiContextMenuPanelId;
	    transitionDirection?: EuiContextMenuPanelTransitionDirection;
	    isOutgoingPanelVisible: boolean;
	    focusedItemIndex?: number;
	    isUsingKeyboardToNavigate: boolean;
	}
	export class EuiContextMenu extends Component<EuiContextMenuProps, State> {
	    static defaultProps: Partial<EuiContextMenuProps>;
	    static getDerivedStateFromProps(nextProps: EuiContextMenuProps, prevState: State): Partial<State> | null;
	    constructor(props: EuiContextMenuProps);
	    componentDidUpdate(prevProps: EuiContextMenuProps): void;
	    hasPreviousPanel: (panelId: EuiContextMenuPanelId) => boolean;
	    showPanel(panelId: EuiContextMenuPanelId, direction?: EuiContextMenuPanelTransitionDirection): void;
	    showNextPanel: (itemIndex?: number | undefined) => void;
	    showPreviousPanel: () => void;
	    onIncomingPanelHeightChange: (height: number) => void;
	    onOutGoingPanelTransitionComplete: () => void;
	    onUseKeyboardToNavigate: () => void;
	    mapIdsToRenderedItems: (panels?: EuiContextMenuPanelDescriptor[]) => {
	        [id: string]: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
	    };
	    renderItems(items?: EuiContextMenuPanelItemDescriptor[]): JSX.Element[];
	    renderPanel(panelId: EuiContextMenuPanelId, transitionType: EuiContextMenuPanelTransitionType): JSX.Element | undefined;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiContextMenu, EuiContextMenuProps, EuiContextMenuPanelDescriptor, EuiContextMenuPanelItemDescriptor, } from '@elastic\eui\src\components\context_menu\context_menu';
	export { EuiContextMenuPanel, EuiContextMenuPanelProps, } from '@elastic\eui\src\components\context_menu\context_menu_panel';
	export { EuiContextMenuItem, EuiContextMenuItemProps, EuiContextMenuItemIcon, EuiContextMenuItemLayoutAlignment, } from '@elastic\eui\src\components\context_menu\context_menu_item';

}
declare module '@elastic\eui\src\components\form\super_select\super_select' {
	import React, { Component } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiSuperSelectControlProps, EuiSuperSelectOption } from '@elastic\eui\src\components\form\super_select\super_select_control';
	import { EuiContextMenuItemLayoutAlignment } from '@elastic\eui\src\components\context_menu'; enum ShiftDirection {
	    BACK = "back",
	    FORWARD = "forward"
	}
	export type EuiSuperSelectProps<T extends string> = CommonProps & Omit<EuiSuperSelectControlProps<T>, 'onChange' | 'onClick' | 'options' | 'value'> & {
	    /**
	     * Pass an array of options that must at least include:
	     * `value`: storing unique value of item,
	     * `inputDisplay`: what shows inside the form input when selected
	     * `dropdownDisplay` (optional): what shows for the item in the dropdown
	     */
	    options: Array<EuiSuperSelectOption<T>>;
	    valueOfSelected?: T;
	    /**
	     * Classes for the context menu item
	     */
	    itemClassName?: string;
	    /**
	     * You must pass an `onChange` function to handle the update of the value
	     */
	    onChange?: (value: T) => void;
	    /**
	     * Change to `true` if you want horizontal lines between options.
	     * This is best used when options are multi-line.
	     */
	    hasDividers?: boolean;
	    /**
	     * Change `EuiContextMenuItem` layout position of icon
	     */
	    itemLayoutAlign?: EuiContextMenuItemLayoutAlignment;
	    /**
	     * Applied to the outermost wrapper (popover)
	     */
	    popoverClassName?: string;
	    /**
	     * Controls whether the options are shown. Default: false
	     */
	    isOpen?: boolean;
	};
	export class EuiSuperSelect<T extends string> extends Component<EuiSuperSelectProps<T>> {
	    static defaultProps: {
	        hasDividers: boolean;
	        fullWidth: boolean;
	        compressed: boolean;
	        isInvalid: boolean;
	        isLoading: boolean;
	    };
	    private itemNodes;
	    private _isMounted;
	    state: {
	        isPopoverOpen: boolean;
	    };
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    setItemNode: (node: HTMLButtonElement | null, index: number) => void;
	    openPopover: () => void;
	    closePopover: () => void;
	    itemClicked: (value: T) => void;
	    onSelectKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	    onItemKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	    focusItemAt(index: number): void;
	    shiftFocus(direction: ShiftDirection): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\form\super_select' {
	export { EuiSuperSelect, EuiSuperSelectProps } from '@elastic\eui\src\components\form\super_select\super_select';
	export { EuiSuperSelectControl, EuiSuperSelectControlProps, EuiSuperSelectOption, } from '@elastic\eui\src\components\form\super_select\super_select_control';

}
declare module '@elastic\eui\src\components\form\switch\switch' {
	import React, { ButtonHTMLAttributes, HTMLAttributes, FunctionComponent, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiSwitchEvent = React.BaseSyntheticEvent<React.MouseEvent<HTMLButtonElement>, HTMLButtonElement, EventTarget & {
	    checked: boolean;
	}>;
	export type EuiSwitchProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'type' | 'disabled'> & {
	    /**
	     * Whether to render the render the text label
	     */
	    showLabel?: boolean;
	    /**
	     * Must be a string if `showLabel` prop is false
	     */
	    label: ReactNode | string;
	    checked: boolean;
	    onChange: (event: EuiSwitchEvent) => void;
	    disabled?: boolean;
	    compressed?: boolean;
	    type?: 'submit' | 'reset' | 'button';
	    /**
	     * Object of props passed to the label's <span/>
	     */
	    labelProps?: CommonProps & HTMLAttributes<HTMLSpanElement>;
	};
	export const EuiSwitch: FunctionComponent<EuiSwitchProps>;

}
declare module '@elastic\eui\src\components\form\switch' {
	export { EuiSwitch, EuiSwitchProps, EuiSwitchEvent } from '@elastic\eui\src\components\form\switch\switch';

}
declare module '@elastic\eui\src\components\form\text_area\text_area' {
	import { TextareaHTMLAttributes, Ref, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & CommonProps & {
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    compressed?: boolean;
	    /**
	     * Which direction, if at all, should the textarea resize
	     */
	    resize?: keyof typeof resizeToClassNameMap;
	    inputRef?: Ref<HTMLTextAreaElement>;
	}; const resizeToClassNameMap: {
	    vertical: string;
	    horizontal: string;
	    both: string;
	    none: string;
	};
	export const RESIZE: string[];
	export const EuiTextArea: FunctionComponent<EuiTextAreaProps>;
	export {};

}
declare module '@elastic\eui\src\components\form\text_area' {
	export { EuiTextArea, EuiTextAreaProps } from '@elastic\eui\src\components\form\text_area\text_area';

}
declare module '@elastic/eui' {
	export * from '@elastic\eui\src\components\form\checkbox';
	export * from '@elastic\eui\src\components\form\described_form_group';
	export * from '@elastic\eui\src\components\form\field_number';
	export * from '@elastic\eui\src\components\form\field_password';
	export * from '@elastic\eui\src\components\form\field_search';
	export * from '@elastic\eui\src\components\form\field_text';
	export * from '@elastic\eui\src\components\form\file_picker';
	export * from '@elastic\eui\src\components\form\form';
	export * from '@elastic\eui\src\components\form\form_control_layout';
	export * from '@elastic\eui\src\components\form\form_error_text';
	export * from '@elastic\eui\src\components\form\form_fieldset';
	export * from '@elastic\eui\src\components\form\form_help_text';
	export * from '@elastic\eui\src\components\form\form_label';
	export * from '@elastic\eui\src\components\form\form_row';
	export * from '@elastic\eui\src\components\form\radio';
	export * from '@elastic\eui\src\components\form\range';
	export * from '@elastic\eui\src\components\form\select';
	export * from '@elastic\eui\src\components\form\super_select';
	export * from '@elastic\eui\src\components\form\switch';
	export * from '@elastic\eui\src\components\form\text_area';
	export * from '@elastic\eui\src\components\form\validatable_control';

}
declare module '@elastic\eui\src\components\spacer\spacer' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const sizeToClassNameMap: {
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	    xxl: string;
	};
	export const SIZES: string[];
	export type SpacerSize = keyof typeof sizeToClassNameMap;
	export type EuiSpacerProps = HTMLAttributes<HTMLDivElement> & CommonProps & {
	    size?: SpacerSize;
	};
	export const EuiSpacer: FunctionComponent<EuiSpacerProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiSpacer, EuiSpacerProps } from '@elastic\eui\src\components\spacer\spacer';

}
declare module '@elastic\eui\src\components\color_picker\hue' {
	import { InputHTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiHueProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & CommonProps & {
	    hex?: string;
	    hue?: string | number;
	    onChange: (hue: number) => void;
	};
	export const EuiHue: FunctionComponent<EuiHueProps>;

}
declare module '@elastic\eui\src\components\color_picker\saturation' {
	import React, { HTMLAttributes } from 'react';
	import { ColorSpaces } from 'chroma-js';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type SaturationClientRect = Pick<ClientRect, 'left' | 'top' | 'width' | 'height'>;
	export type SaturationPosition = Pick<SaturationClientRect, 'left' | 'top'>;
	interface HTMLDivElementOverrides {
	    color?: ColorSpaces['hsv'];
	    onChange: (color: ColorSpaces['hsv']) => void;
	}
	export type EuiSaturationProps = Omit<HTMLAttributes<HTMLDivElement>, keyof HTMLDivElementOverrides> & CommonProps & HTMLDivElementOverrides & {
	    hex?: string;
	};
	export const EuiSaturation: React.ForwardRefExoticComponent<Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & HTMLDivElementOverrides & {
	    hex?: string | undefined;
	} & React.RefAttributes<HTMLDivElement>>;
	export {};

}
declare module '@elastic\eui\src\components\color_picker\color_picker' {
	import { FunctionComponent, HTMLAttributes, ReactElement } from 'react';
	import { ColorSpaces } from 'chroma-js';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form'; type EuiColorPickerDisplay = 'default' | 'inline'; type EuiColorPickerMode = 'default' | 'swatch' | 'picker' | 'secondaryInput';
	export interface EuiColorPickerOutput {
	    rgba: ColorSpaces['rgba'];
	    hex: string;
	    isValid: boolean;
	}
	interface HTMLDivElementOverrides {
	    /**
	     * hex (string)
	     * RGB (as comma separated string)
	     * RGBa (as comma separated string)
	     * Empty string will register as 'transparent'
	     */
	    color?: string | null;
	    onBlur?: () => void;
	    /**
	     * text (string, as entered or selected)
	     * hex (8-digit hex if alpha < 1, otherwise 6-digit hex)
	     * RGBa (as array; values of NaN if color is invalid)
	     * isValid (boolean signifying if the input text is a valid color)
	     */
	    onChange: (text: string, output: EuiColorPickerOutput) => void;
	    onFocus?: () => void;
	}
	export interface EuiColorPickerProps extends CommonProps, Omit<HTMLAttributes<HTMLDivElement>, keyof HTMLDivElementOverrides>, HTMLDivElementOverrides {
	    /**
	     *  Custom element to use instead of text input
	     */
	    button?: ReactElement;
	    /**
	     *  Use the compressed style for EuiFieldText
	     */
	    compressed?: boolean;
	    display?: EuiColorPickerDisplay;
	    disabled?: boolean;
	    fullWidth?: boolean;
	    id?: string;
	    /**
	     *  Custom validation flag
	     */
	    isInvalid?: boolean;
	    /**
	     * Choose between swatches with gradient picker (default), swatches only, gradient picker only, or secondary input only.
	     */
	    mode?: EuiColorPickerMode;
	    /**
	     *  Custom z-index for the popover
	     */
	    popoverZIndex?: number;
	    readOnly?: boolean;
	    /**
	     *  Array of hex strings (3 or 6 character) to use as swatch options. Defaults to EUI visualization colors
	     */
	    swatches?: string[];
	    /**
	     * Creates an input group with element(s) coming before input. It only shows when the `display` is set to `default`.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input. It only shows when the `display` is set to `default`.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	    /**
	     * Whether to render the alpha channel (opacity) value range slider.
	     */
	    showAlpha?: boolean;
	    /**
	     * Will format the text input in the provided format when possible (hue and saturation selection)
	     * Exceptions: Manual text input and swatches will display as-authored
	     * Default is to display the last format entered by the user
	     */
	    format?: 'hex' | 'rgba';
	    /**
	     * Placement option for a secondary color value input.
	     */
	    secondaryInputDisplay?: 'top' | 'bottom' | 'none';
	    /**
	     * Add a button to the primary input to clear its value.
	     */
	    isClearable?: boolean;
	    /**
	     * Text to replace the default 'Transparent' placeholder for unset color values.
	     */
	    placeholder?: string;
	}
	export const EuiColorPicker: FunctionComponent<EuiColorPickerProps>;
	export {};

}
declare module '@elastic\eui\src\components\color_picker\color_stops\color_stop_thumb' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiColorPickerProps } from '@elastic\eui\src\components\color_picker\color_picker';
	import { EuiFieldNumberProps } from '@elastic\eui\src\components\form';
	export interface ColorStop {
	    stop: number;
	    color: string;
	}
	interface EuiColorStopThumbProps extends CommonProps, ColorStop {
	    className?: string;
	    onChange: (colorStop: ColorStop) => void;
	    onFocus?: () => void;
	    onRemove?: () => void;
	    globalMin: number;
	    globalMax: number;
	    localMin: number;
	    localMax: number;
	    min?: number;
	    max?: number;
	    isRangeMin?: boolean;
	    isRangeMax?: boolean;
	    parentRef?: HTMLDivElement | null;
	    colorPickerMode: EuiColorPickerProps['mode'];
	    colorPickerShowAlpha?: EuiColorPickerProps['showAlpha'];
	    colorPickerSwatches?: EuiColorPickerProps['swatches'];
	    disabled?: boolean;
	    readOnly?: boolean;
	    isPopoverOpen: boolean;
	    openPopover: () => void;
	    closePopover: () => void;
	    'data-index'?: string;
	    'aria-valuetext'?: string;
	    valueInputProps?: Partial<EuiFieldNumberProps>;
	}
	export const EuiColorStopThumb: FunctionComponent<EuiColorStopThumbProps>;
	export {};

}
declare module '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display_fixed' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiColorPaletteDisplayShared } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display';
	export interface EuiColorPaletteDisplayFixedProps extends HTMLAttributes<HTMLSpanElement>, CommonProps, EuiColorPaletteDisplayShared {
	}
	export const EuiColorPaletteDisplayFixed: FunctionComponent<EuiColorPaletteDisplayFixedProps>;

}
declare module '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display_gradient' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiColorPaletteDisplayShared } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display';
	export interface EuiColorPaletteDisplayGradientProps extends HTMLAttributes<HTMLSpanElement>, CommonProps, EuiColorPaletteDisplayShared {
	}
	export const EuiColorPaletteDisplayGradient: FunctionComponent<EuiColorPaletteDisplayGradientProps>;

}
declare module '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display' {
	import { FunctionComponent } from 'react';
	import { ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops';
	import { EuiColorPaletteDisplayFixedProps } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display_fixed';
	import { EuiColorPaletteDisplayGradientProps } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display_gradient'; const sizeToClassNameMap: {
	    xs: string;
	    s: string;
	    m: string;
	};
	export const SIZES: ("xs" | "s" | "m")[];
	export type EuiColorPaletteDisplaySize = keyof typeof sizeToClassNameMap;
	export interface EuiColorPaletteDisplayShared {
	    /**
	     * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
	     */
	    palette: string[] | ColorStop[];
	}
	interface DisplayGradient extends EuiColorPaletteDisplayGradientProps {
	    /**
	     *   Specify the type of palette.
	     *  `gradient`: each color fades into the next.
	     */
	    type: 'gradient';
	}
	interface DisplayFixed extends EuiColorPaletteDisplayFixedProps {
	    /**
	     *  `fixed`: individual color blocks.
	     */
	    type?: 'fixed';
	}
	export type EuiColorPaletteDisplayProps = {
	    /**
	     * Height of the palette display
	     */
	    size?: EuiColorPaletteDisplaySize;
	} & ExclusiveUnion<DisplayFixed, DisplayGradient>;
	export const EuiColorPaletteDisplay: FunctionComponent<EuiColorPaletteDisplayProps>;
	export {};

}
declare module '@elastic\eui\src\components\color_picker\color_palette_display' {
	export { EuiColorPaletteDisplay, EuiColorPaletteDisplayProps, } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display';
	export { EuiColorPaletteDisplayFixed, EuiColorPaletteDisplayFixedProps, } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display_fixed';
	export { EuiColorPaletteDisplayGradient, EuiColorPaletteDisplayGradientProps, } from '@elastic\eui\src\components\color_picker\color_palette_display\color_palette_display_gradient';

}
declare module '@elastic\eui\src\components\color_picker\color_palette_picker\color_palette_picker' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops';
	import { EuiSuperSelectProps } from '@elastic\eui\src\components\form\super_select';
	export interface EuiColorPalettePickerPaletteTextProps extends CommonProps {
	    /**
	     *  For storing unique value of item
	     */
	    value: string;
	    /**
	     *  The name of your palette
	     */
	    title: string;
	    /**
	     * `text`: a text only option (a title is required).
	     */
	    type: 'text';
	    /**
	     * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
	     */
	    palette?: string[] | ColorStop[];
	}
	export interface EuiColorPalettePickerPaletteFixedProps extends CommonProps {
	    /**
	     *  For storing unique value of item
	     */
	    value: string;
	    /**
	     *  The name of your palette
	     */
	    title?: string;
	    /**
	     * `fixed`: individual color blocks
	     */
	    type: 'fixed';
	    /**
	     * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
	     */
	    palette: string[] | ColorStop[];
	}
	export interface EuiColorPalettePickerPaletteGradientProps extends CommonProps {
	    /**
	     *  For storing unique value of item
	     */
	    value: string;
	    /**
	     *  The name of your palette
	     */
	    title?: string;
	    /**
	     * `gradient`: each color fades into the next
	     */
	    type: 'gradient';
	    /**
	     * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
	     */
	    palette: string[] | ColorStop[];
	}
	export type EuiColorPalettePickerPaletteProps = EuiColorPalettePickerPaletteTextProps | EuiColorPalettePickerPaletteFixedProps | EuiColorPalettePickerPaletteGradientProps;
	export type EuiColorPalettePickerProps<T extends string> = CommonProps & Omit<EuiSuperSelectProps<T>, 'options' | 'itemLayoutAlign' | 'hasDividers'> & {
	    /**
	     *  Specify what should be displayed after a selection: a `palette` or `title`
	     */
	    selectionDisplay?: 'palette' | 'title';
	    /**
	     * An array of one of the following objects: #EuiColorPalettePickerPaletteText, #EuiColorPalettePickerPaletteFixed, #EuiColorPalettePickerPaletteGradient
	     */
	    palettes: EuiColorPalettePickerPaletteProps[];
	};
	export const EuiColorPalettePicker: FunctionComponent<EuiColorPalettePickerProps<string>>;

}
declare module '@elastic\eui\src\components\color_picker\color_palette_picker' {
	export { EuiColorPalettePicker, EuiColorPalettePickerProps, EuiColorPalettePickerPaletteTextProps, EuiColorPalettePickerPaletteFixedProps, EuiColorPalettePickerPaletteGradientProps, EuiColorPalettePickerPaletteProps, } from '@elastic\eui\src\components\color_picker\color_palette_picker\color_palette_picker';

}
declare module '@elastic/eui' {
	export { EuiColorPicker, EuiColorPickerProps } from '@elastic\eui\src\components\color_picker\color_picker';
	export { EuiColorPickerSwatch, EuiColorPickerSwatchProps, } from '@elastic\eui\src\components\color_picker\color_picker_swatch';
	export { EuiHue, EuiHueProps } from '@elastic\eui\src\components\color_picker\hue';
	export { EuiSaturation, EuiSaturationProps } from '@elastic\eui\src\components\color_picker\saturation';
	export { EuiColorStops } from '@elastic\eui\src\components\color_picker\color_stops';
	export { EuiColorStopsProps } from '@elastic\eui\src\components\color_picker\color_stops\color_stops';
	export { EuiColorPalettePicker, EuiColorPalettePickerProps, EuiColorPalettePickerPaletteProps, } from '@elastic\eui\src\components\color_picker\color_palette_picker';
	export { EuiColorPaletteDisplay, EuiColorPaletteDisplayProps, } from '@elastic\eui\src\components\color_picker\color_palette_display';

}
declare module '@elastic\eui\src\components\color_picker\color_stops\color_stops' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops\color_stop_thumb';
	import { EuiColorPickerProps } from '@elastic\eui\src\components\color_picker\';
	import { EuiFieldNumberProps } from '@elastic\eui\src\components\form\field_number';
	export interface EuiColorStopsProps extends CommonProps {
	    addColor?: ColorStop['color'];
	    /**
	     * An array of #ColorStop. The stops must be numbers in an ordered range.
	     */
	    colorStops: ColorStop[];
	    onChange: (stops?: ColorStop[], isInvalid?: boolean) => void;
	    fullWidth?: boolean;
	    disabled?: boolean;
	    readOnly?: boolean;
	    invalid?: boolean;
	    compressed?: boolean;
	    className?: string;
	    max?: number;
	    min?: number;
	    label: string;
	    /**
	     *  Specify the type of stops:
	     *  `fixed`: individual color blocks.
	     *  `gradient`: each color fades into the next.
	     *  `stepped`: interpolation between colors with a fixed number of steps.
	     */
	    stopType?: 'fixed' | 'gradient' | 'stepped';
	    /**
	     * Only works when `stopType="stepped"`
	     */
	    stepNumber?: number;
	    mode?: EuiColorPickerProps['mode'];
	    swatches?: EuiColorPickerProps['swatches'];
	    showAlpha?: EuiColorPickerProps['showAlpha'];
	    /**
	     * Props passed to the value input field in the color stop popover.
	     * Can be used to configure functionality like append or prepend.
	     */
	    valueInputProps?: Partial<Omit<EuiFieldNumberProps, 'inputRef' | 'compressed' | 'readOnly' | 'min' | 'max' | 'value' | 'isInvalid' | 'onChange'>>;
	}
	export const EuiColorStops: FunctionComponent<EuiColorStopsProps>;

}
declare module '@elastic\eui\src\components\color_picker\color_stops' {
	export { EuiColorStops } from '@elastic\eui\src\components\color_picker\color_stops\color_stops';
	export { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops\color_stop_thumb';

}
declare module '@elastic\eui\src\services\color\stepped_gradient' {
	import { ColorStop } from '@elastic\eui\src\components\color_picker\color_stops';
	export const getSteppedGradient: (colors: ColorStop[], steps: number) => string[];

}
declare module '@elastic\eui\src\services\color' {
	export { isColorDark } from '@elastic\eui\src\services\color\is_color_dark';
	export { isValidHex } from '@elastic\eui\src\services\color\is_valid_hex';
	export { hexToHsv } from '@elastic\eui\src\services\color\hex_to_hsv';
	export { hexToRgb } from '@elastic\eui\src\services\color\hex_to_rgb';
	export { hsvToHex } from '@elastic\eui\src\services\color\hsv_to_hex';
	export { hsvToRgb } from '@elastic\eui\src\services\color\hsv_to_rgb';
	export { rgbToHex } from '@elastic\eui\src\services\color\rgb_to_hex';
	export { rgbToHsv } from '@elastic\eui\src\services\color\rgb_to_hsv';
	export { calculateContrast, calculateLuminance, } from '@elastic\eui\src\services\color\luminance_and_contrast';
	export { VISUALIZATION_COLORS, DEFAULT_VISUALIZATION_COLOR, } from '@elastic\eui\src\services\color\visualization_colors';
	export { colorPalette } from '@elastic\eui\src\services\color\color_palette';
	export { euiPaletteForLightBackground, euiPaletteForDarkBackground, euiPaletteColorBlind, euiPaletteColorBlindBehindText, euiPaletteForStatus, euiPaletteForTemperature, euiPaletteComplimentary, euiPaletteNegative, euiPalettePositive, euiPaletteCool, euiPaletteWarm, euiPaletteGray, } from '@elastic\eui\src\services\color\eui_palettes';
	export { rgbDef, HSV, RGB } from '@elastic\eui\src\services\color\color_types';
	export { getSteppedGradient } from '@elastic\eui\src\services\color\stepped_gradient';

}
declare module '@elastic\eui\src\services\color_picker\color_picker' {
	interface colorStopsType {
	    stop: number;
	    color: string;
	}
	export const useColorStopsState: (useRandomColor?: boolean, initialColorStops?: colorStopsType[]) => (string | colorStopsType[] | ((colorStops: colorStopsType[]) => void))[];
	export const useColorPickerState: (initialColor?: string) => (string | string[] | ((text: string, { isValid }: {
	    isValid: boolean;
	}) => void) | null)[];
	export {};

}
declare module '@elastic\eui\src\services\color_picker' {
	export { useColorPickerState, useColorStopsState } from '@elastic\eui\src\services\color_picker\color_picker';

}
declare module '@elastic\eui\src\services\copy_to_clipboard' {
	export function copyToClipboard(text: string): boolean;

}
declare module '@elastic\eui\src\services\format\format_boolean' {
	export const formatBoolean: (value: boolean, { yes, no, nil }?: {
	    yes?: string | undefined;
	    no?: string | undefined;
	    nil?: string | undefined;
	}) => string;

}
declare module '@elastic\eui\src\services\format\format_date' {
	import moment from 'moment'; type CalendarOptions = moment.CalendarSpec & {
	    refTime?: moment.MomentInput;
	};
	export const dateFormatAliases: {
	    date: string;
	    longDate: string;
	    shortDate: string;
	    dateTime: string;
	    longDateTime: string;
	    shortDateTime: string;
	    dobShort: string;
	    dobLong: string;
	    iso8601: string;
	    calendar: (value: moment.MomentInput, options?: CalendarOptions) => string;
	    calendarDateTime: (value: moment.MomentInput, options: moment.CalendarSpec) => string;
	    calendarDate: (value: moment.MomentInput, options: moment.CalendarSpec) => string;
	}; type DateFormat = keyof typeof dateFormatAliases;
	interface FormatDateConfig {
	    format: DateFormat;
	    nil: string;
	    options: any;
	}
	export const formatDate: (value?: moment.MomentInput, dateFormatKeyOrConfig?: DateFormat | string | Partial<FormatDateConfig>) => string;
	export {};

}
declare module '@elastic\eui\src\services\format\format_number' {
	interface FormatNumberConfig {
	    format: string;
	    nil: string;
	    round: boolean;
	}
	export const formatNumber: (value?: number | null | undefined, numberFormatOrConfig?: string | Partial<FormatNumberConfig>) => string;
	export {};

}
declare module '@elastic\eui\src\services\format\format_text' {
	interface FormatTextOptions {
	    nil: string;
	}
	export const formatText: (value?: any, options?: Partial<FormatTextOptions>) => any;
	export {};

}
declare module '@elastic\eui\src\services\format\format_auto' {
	export const formatAuto: (value: any) => string;

}
declare module '@elastic\eui\src\services\format' {
	export { formatAuto } from '@elastic\eui\src\services\format\format_auto';
	export { formatBoolean } from '@elastic\eui\src\services\format\format_boolean';
	export { formatDate, dateFormatAliases } from '@elastic\eui\src\services\format\format_date';
	export { formatNumber } from '@elastic\eui\src\services\format\format_number';
	export { formatText } from '@elastic\eui\src\services\format\format_text';

}
declare module '@elastic\eui\src\services\paging\pager' {
	export class Pager {
	    currentPageIndex: number;
	    firstItemIndex: number;
	    itemsPerPage: number;
	    lastItemIndex: number;
	    totalItems: number;
	    totalPages: number;
	    constructor(totalItems: number, itemsPerPage: number, initialPageIndex?: number);
	    setTotalItems: (totalItems: number) => void;
	    setItemsPerPage: (itemsPerPage: number) => void;
	    isPageable: () => boolean;
	    getTotalPages: () => number;
	    getCurrentPageIndex: () => number;
	    getFirstItemIndex: () => number;
	    getLastItemIndex: () => number;
	    hasNextPage: () => boolean;
	    hasPreviousPage: () => boolean;
	    goToNextPage: () => void;
	    goToPreviousPage: () => void;
	    goToPageIndex: (pageIndex: number) => void;
	    update: () => void;
	}

}
declare module '@elastic\eui\src\services\paging' {
	export { Pager } from '@elastic\eui\src\services\paging\pager';

}
declare module '@elastic\eui\src\services\utils' {
	export function times(count: number): number[];
	export function times<T>(count: number, iteratee: (index: number) => T): T[];
	export function memoize<T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): (...args: Parameters<T>) => ReturnType<T>;
	export const browserTick: (callback: FrameRequestCallback) => void;

}
declare module '@elastic\eui\src\services\random' {
	import moment from 'moment';
	export class Random {
	    private readonly rand;
	    constructor(rand?: () => number);
	    boolean: () => boolean;
	    number: (options?: {
	        min?: number;
	        max?: number;
	    }) => number;
	    integer: (options?: {
	        min?: number;
	        max?: number;
	    }) => number;
	    oneOf: <T>(values: T[]) => T;
	    oneToOne: <T>(values: T[], index: number) => T;
	    setOf: <T>(values: T[], options?: {
	        min?: number;
	        max?: number;
	    }) => T[];
	    date: (options?: {
	        min?: Date;
	        max?: Date;
	    }) => Date;
	    moment: (options?: {
	        min?: moment.Moment;
	        max?: moment.Moment;
	    }) => moment.Moment;
	}

}
declare module '@elastic\eui\src\services\url' {
	export const isDomainSecure: (url?: string) => boolean;

}
declare module '@elastic\eui\src\services\security\get_secure_rel_for_target' {
	export const getSecureRelForTarget: ({ href, target, rel, }: {
	    href?: string | undefined;
	    target?: string | undefined;
	    rel?: string | undefined;
	}) => string;

}
declare module '@elastic\eui\src\services\security' {
	export { getSecureRelForTarget } from '@elastic\eui\src\services\security\get_secure_rel_for_target';

}
declare module '@elastic\eui\src\services\string\to_initials' {
	/**
	 * This function calculates the initials/acronym for a given name.
	 * It defaults to only 2 characters and will take the first character (of each word).
	 * If only one word is supplied for the name, it will only pass back the first letter of the word,
	 * unless forced to 2 letters by setting `initialsLength` to `2`.
	 * It will pass back the characters with the same casing as the original string
	 * unless otherwise specified.
	 *
	 * @param {string} name The full name of the item to turn into initials
	 * @param {number} initialsLength (Optional) How many characters to show (max 2 allowed)
	 * @param {string} initials (Optional) Custom initials (max 2 characters)
	 * @returns {string} True if the color is dark, false otherwise.
	 */
	export const MAX_INITIALS = 2;
	export function toInitials(name: string, initialsLength?: 1 | 2, initials?: string): string | null;

}
declare module '@elastic\eui\src\services\string\to_case' {
	/**
	 * This function returns the same string with the first letter of the first word capitalized.
	 *
	 * @param {string} string The input string
	 */
	export function toSentenceCase(string: string): string;

}
declare module '@elastic\eui\src\services\string\slugify' {
	/**
	 * Lowercases input and replaces spaces with hyphens:
	 * e.g. 'GridView Example' -> 'gridview-example'
	 *
	 * @param {string} string The starting string
	 * @returns {string} Lowercase, dashed version of the starting staring
	 */
	export function slugify(str: string): string;

}
declare module '@elastic\eui\src\services\string' {
	export { toInitials } from '@elastic\eui\src\services\string\to_initials';
	export { toSentenceCase } from '@elastic\eui\src\services\string\to_case';
	export { slugify } from '@elastic\eui\src\services\string\slugify';

}
declare module '@elastic\eui\src\services\sort\sort_direction' {
	import PropTypes from 'prop-types'; const ASC: "asc"; const DESC: "desc";
	export type Direction = typeof ASC | typeof DESC;
	export const SortDirection: Readonly<{
	    ASC: "asc";
	    DESC: "desc";
	    isAsc(direction: Direction): boolean;
	    reverse(direction: Direction): Direction;
	}>;
	export const SortDirectionType: PropTypes.Requireable<Direction>;
	export {};

}
declare module '@elastic\eui\src\services\sort\comparators' {
	export type Primitive = string | boolean | number | null | undefined; type Comparator<T = Primitive> = (a: T, b: T) => number;
	export const Comparators: Readonly<{
	    default: (direction?: 'asc' | 'desc') => (v1: Primitive, v2: Primitive) => number;
	    reverse: <T>(comparator: Comparator<T>) => Comparator<T>;
	    value<T_1>(valueCallback: (value: T_1) => Primitive, comparator?: Comparator<Primitive> | undefined): Comparator<T_1>;
	    property<T_2>(prop: string, comparator?: Comparator<Primitive> | undefined): Comparator<T_2>;
	}>;
	export {};

}
declare module '@elastic\eui\src\services\sort\sortable_properties' {
	import { Primitive } from '@elastic\eui\src\services\sort\comparators';
	export interface SortableProperty<T> {
	    name: string;
	    getValue: (obj: T) => Primitive;
	    isAscending: boolean;
	}
	/**
	 * @typedef {Object} SortableProperty
	 * @property {string} sortableProperty.name - Name of the property.
	 * @property {function} sortableProperty.getValue - A function that takes in an object and returns a value to sort
	 * by.
	 * @property {boolean} sortableProperty.isAscending - The direction of the last sort by this property. Used to preserve
	 * past sort orders.
	 */
	/**
	 * Stores sort information for a set of SortableProperties, including which property is currently being sorted on, as
	 * well as the last sort order for each property.
	 */
	export class SortableProperties<T> {
	    sortableProperties: Array<SortableProperty<T>>;
	    currentSortedProperty: SortableProperty<T>;
	    /**
	     * @param {Array<SortableProperty>} sortableProperties - a set of sortable properties.
	     * @param {string} initialSortablePropertyName - Which sort property should be sorted on by default.
	     */
	    constructor(sortableProperties: Array<SortableProperty<T>>, initialSortablePropertyName: string);
	    /**
	     * @returns {SortableProperty} The current property that is being sorted on. Undefined if no sort order is applied.
	     */
	    getSortedProperty(): SortableProperty<T>;
	    /**
	     * Sorts the items passed in and returns a newly sorted array.
	     * @param items {Array.<Object>}
	     * @returns {Array.<Object>} sorted array of items, based off the sort properties.
	     */
	    sortItems(items: T[]): T[];
	    /**
	     * Returns the SortProperty with the given name, if found.
	     * @param {String} propertyName
	     * @returns {SortableProperty|undefined}
	     */
	    getSortablePropertyByName(propertyName: string): SortableProperty<T> | undefined;
	    /**
	     * Updates the sort property, potentially flipping the sort order based on whether the same
	     * property was already being sorted.
	     * @param propertyName {String}
	     */
	    sortOn(propertyName: string): void;
	    /**
	     * @returns {boolean} True if the current sortable property is sorted in ascending order.
	     */
	    isCurrentSortAscending(): boolean;
	    /**
	     * @param {string} propertyName
	     * @returns {boolean} True if the given sort property is sorted in ascending order.
	     */
	    isAscendingByName(propertyName: string): boolean;
	    /**
	     * Flips the current sorted property sort order.
	     */
	    flipCurrentSortOrder(): void;
	}

}
declare module '@elastic\eui\src\services\sort\property_sort' {
	import PropTypes from 'prop-types';
	import { Direction } from '@elastic\eui\src\services\sort\sort_direction';
	export const PropertySortType: PropTypes.Requireable<PropTypes.InferProps<{
	    field: PropTypes.Validator<string>;
	    direction: PropTypes.Validator<Direction>;
	}>>;
	export interface PropertySort {
	    field: string;
	    direction: Direction;
	}

}
declare module '@elastic\eui\src\services\sort' {
	export { SortableProperties } from '@elastic\eui\src\services\sort\sortable_properties';
	export { SortDirectionType, SortDirection, Direction } from '@elastic\eui\src\services\sort\sort_direction';
	export { PropertySortType, PropertySort } from '@elastic\eui\src\services\sort\property_sort';
	export { Comparators } from '@elastic\eui\src\services\sort\comparators';

}
declare module '@elastic\eui\src\services\transition\transition' {
	export const getTransitionTimings: (element: Element) => {
	    durationMatch: number;
	    delayMatch: number;
	};
	export const getWaitDuration: (records: MutationRecord[]) => number;
	export const performOnFrame: (waitDuration: number, toPerform: () => void) => void;
	export const getDurationAndPerformOnFrame: (records: MutationRecord[], toPerform: () => void) => void;

}
declare module '@elastic\eui\src\services\transition' {
	export { getDurationAndPerformOnFrame, getTransitionTimings, getWaitDuration, performOnFrame, } from '@elastic\eui\src\services\transition\transition';

}
declare module '@elastic\eui\src\services\window_event\window_event' {
	import { Component } from 'react'; type EventNames = keyof WindowEventMap;
	interface Props<Ev extends EventNames> {
	    event: Ev;
	    handler: (this: Window, ev: WindowEventMap[Ev]) => any;
	}
	export class EuiWindowEvent<E extends EventNames> extends Component<Props<E>> {
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: Props<E>): void;
	    componentWillUnmount(): void;
	    addEvent<Ev extends EventNames>({ event, handler }: Props<Ev>): void;
	    removeEvent<Ev extends EventNames>({ event, handler }: Props<Ev>): void;
	    render(): null;
	}
	export {};

}
declare module '@elastic\eui\src\services\window_event' {
	export { EuiWindowEvent } from '@elastic\eui\src\services\window_event\window_event';

}
declare module '@elastic/eui' {
	import * as keys from '@elastic\eui\src\services\keys';
	export { keys };
	export { accessibleClickKeys, cascadingMenuKeys, comboBoxKeys, htmlIdGenerator, } from '@elastic\eui\src\services\accessibility';
	export { HorizontalAlignment, LEFT_ALIGNMENT, RIGHT_ALIGNMENT, CENTER_ALIGNMENT, } from '@elastic\eui\src\services\alignment';
	export { BREAKPOINTS, BREAKPOINT_KEYS, getBreakpoint, isWithinBreakpoints, isWithinMaxBreakpoint, isWithinMinBreakpoint, EuiBreakpointSize, } from '@elastic\eui\src\services\breakpoint';
	export { isColorDark, isValidHex, calculateContrast, calculateLuminance, hexToHsv, hexToRgb, hsvToHex, hsvToRgb, rgbToHex, rgbToHsv, VISUALIZATION_COLORS, DEFAULT_VISUALIZATION_COLOR, colorPalette, euiPaletteForLightBackground, euiPaletteForDarkBackground, euiPaletteColorBlind, euiPaletteColorBlindBehindText, euiPaletteForStatus, euiPaletteForTemperature, euiPaletteComplimentary, euiPaletteNegative, euiPalettePositive, euiPaletteCool, euiPaletteWarm, euiPaletteGray, HSV, getSteppedGradient, } from '@elastic\eui\src\services\color';
	export { useColorPickerState, useColorStopsState } from '@elastic\eui\src\services\color_picker';
	export { copyToClipboard } from '@elastic\eui\src\services\copy_to_clipboard';
	export { formatAuto, formatBoolean, formatDate, formatNumber, formatText, dateFormatAliases, } from '@elastic\eui\src\services\format';
	export { isEvenlyDivisibleBy, isWithinRange } from '@elastic\eui\src\services\number';
	export { Pager } from '@elastic\eui\src\services\paging';
	export { Random } from '@elastic\eui\src\services\random';
	export { getSecureRelForTarget } from '@elastic\eui\src\services\security';
	export { toSentenceCase, toInitials, slugify } from '@elastic\eui\src\services\string';
	export { PropertySortType, PropertySort, SortDirectionType, SortDirection, Direction, SortableProperties, Comparators, } from '@elastic\eui\src\services\sort';
	export { calculatePopoverPosition, findPopoverPosition } from '@elastic\eui\src\services\popover';
	export { getDurationAndPerformOnFrame, getTransitionTimings, getWaitDuration, performOnFrame, } from '@elastic\eui\src\services\transition';
	export { EuiWindowEvent } from '@elastic\eui\src\services\window_event';
	export { useCombinedRefs, useDependentState, useIsWithinBreakpoints, useMouseMove, isMouseEvent, } from '@elastic\eui\src\services\hooks';
	export { throttle } from '@elastic\eui\src\services\throttle';

}
declare module '@elastic\eui\src\components\accessibility\keyboard_accessible' {
	/**
	 * Interactive elements must be able to receive focus.
	 *
	 * Ideally, this means using elements that are natively keyboard accessible (<a href="">,
	 * <input type="button">, or <button>). Note that links should be used when navigating and buttons
	 * should be used when performing an action on the page.
	 *
	 * If, however, you need to use elements that aren't natively keyboard accessible (for example, <div>,
	 * <p>, or <a> without the href attribute), then you need to allow them to receive focus and to
	 * respond to keyboard input. The workaround is to:
	 *
	 *   - Give the element tabindex="0" so that it can receive keyboard focus.
	 *   - Add a JavaScript onkeyup event handler that triggers element functionality if the Enter key
	 *     is pressed while the element is focused. This is necessary because some browsers do not trigger
	 *    onclick events for such elements when activated via the keyboard.
	 *   - If the item is meant to function as a button, the onkeyup event handler should also detect the
	 *     Space bar in addition to the Enter key, and the element should be given role="button".
	 *
	 * Wrap any such elements that aren't natively keyboard accessible in this component to automatically
	 * apply the above workaround to them.
	 */
	import { Component, KeyboardEvent, ReactElement } from 'react';
	interface Props {
	    /**
	     * ReactNode to render as this component's children
	     */
	    children: ReactElement;
	}
	export class EuiKeyboardAccessible extends Component<Props> {
	    onKeyDown: (event: KeyboardEvent<any>) => void;
	    onKeyUp: (event: KeyboardEvent<any>) => void;
	    applyKeyboardAccessibility: (child: ReactElement<any>) => ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>;
	    render(): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>;
	}
	export {};

}
declare module '@elastic\eui\src\components\accessibility\screen_reader' {
	import { ReactElement, FunctionComponent } from 'react';
	export interface EuiScreenReaderOnlyProps {
	    /**
	     * ReactElement to render as this component's content
	     */
	    children: ReactElement<any>;
	    /**
	     * For keyboard navigation, force content to display visually upon focus.
	     */
	    showOnFocus?: boolean;
	}
	export const EuiScreenReaderOnly: FunctionComponent<EuiScreenReaderOnlyProps>;

}
declare module '@elastic\eui\src\components\accessibility\skip_link' {
	import { FunctionComponent, Ref } from 'react';
	import { EuiButtonProps } from '@elastic\eui\src\components\button\button';
	import { PropsForAnchor, PropsForButton, ExclusiveUnion } from '@elastic\eui\src\components\common'; type Positions = 'static' | 'fixed' | 'absolute';
	export const POSITIONS: ("fixed" | "absolute" | "static")[];
	interface EuiSkipLinkInterface extends EuiButtonProps {
	    /**
	     * Change the display position of the element when focused.
	     * If 'fixed', the link will be fixed to the top left of the viewport
	     */
	    position?: Positions;
	    /**
	     * Typically an anchor id (e.g. `a11yMainContent`), the value provided
	     * will be prepended with a hash `#` and used as the link `href`
	     */
	    destinationId: string;
	    /**
	     * When position is fixed, this is forced to `0`
	     */
	    tabIndex?: number;
	} type propsForAnchor = PropsForAnchor<EuiSkipLinkInterface, {
	    buttonRef?: Ref<HTMLAnchorElement>;
	}>; type propsForButton = PropsForButton<EuiSkipLinkInterface, {
	    buttonRef?: Ref<HTMLButtonElement>;
	}>;
	export type EuiSkipLinkProps = ExclusiveUnion<propsForAnchor, propsForButton>;
	export const EuiSkipLink: FunctionComponent<EuiSkipLinkProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiKeyboardAccessible } from '@elastic\eui\src\components\accessibility\keyboard_accessible';
	export { EuiScreenReaderOnly } from '@elastic\eui\src\components\accessibility\screen_reader';
	export { EuiSkipLink, EuiSkipLinkProps } from '@elastic\eui\src\components\accessibility\skip_link';

}
declare module '@elastic\eui\src\components\accordion\accordion' {
	import { Component, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const paddingSizeToClassNameMap: {
	    none: string;
	    xs: string;
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	};
	export const PADDING_SIZES: ("xs" | "s" | "m" | "l" | "xl" | "none")[];
	export type EuiAccordionSize = keyof typeof paddingSizeToClassNameMap;
	export type EuiAccordionProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'id'> & {
	    id: string;
	    /**
	     * Class that will apply to the trigger for the accordion.
	     */
	    buttonClassName?: string;
	    /**
	     * Apply more props to the triggering button
	     */
	    buttonProps?: CommonProps & HTMLAttributes<HTMLButtonElement>;
	    /**
	     * Class that will apply to the trigger content for the accordion.
	     */
	    buttonContentClassName?: string;
	    /**
	     * The content of the clickable trigger
	     */
	    buttonContent?: ReactNode;
	    /**
	     * Will appear right aligned against the button. Useful for separate actions like deletions.
	     */
	    extraAction?: ReactNode;
	    /**
	     * The accordion will start in the open state.
	     */
	    initialIsOpen: boolean;
	    /**
	     * Optional callback method called on open and close with a single `isOpen` parameter
	     */
	    onToggle?: (isOpen: boolean) => void;
	    /**
	     * The padding around the exposed accordion content.
	     */
	    paddingSize?: EuiAccordionSize;
	    /**
	     * Placement of the arrow indicator, or 'none' to hide it.
	     */
	    arrowDisplay?: 'left' | 'right' | 'none';
	    /**
	     * Control the opening of accordion via prop
	     */
	    forceState?: 'closed' | 'open';
	    /**
	     * Change `extraAction` and children into a loading spinner
	     */
	    isLoading?: boolean;
	    /**
	     * Choose whether the loading message replaces the content. Customize the message by passing a node
	     */
	    isLoadingMessage?: boolean | ReactNode;
	};
	export class EuiAccordion extends Component<EuiAccordionProps, {
	    isOpen: boolean;
	}> {
	    static defaultProps: {
	        initialIsOpen: boolean;
	        paddingSize: string;
	        arrowDisplay: string;
	        isLoading: boolean;
	        isLoadingMessage: boolean;
	    };
	    childContent: HTMLDivElement | null;
	    childWrapper: HTMLDivElement | null;
	    state: {
	        isOpen: boolean;
	    };
	    setChildContentHeight: () => void;
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	    onToggle: () => void;
	    setChildContentRef: (node: HTMLDivElement | null) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiAccordion, EuiAccordionProps } from '@elastic\eui\src\components\accordion\accordion';

}
declare module '@elastic\eui\src\components\aspect_ratio\aspect_ratio' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiAspectRatioProps = HTMLAttributes<HTMLDivElement> & CommonProps & {
	    /**
	     * Aspect ratio height. For example 9 would be widescreen video.
	     */
	    height: number;
	    /**
	     * Aspect ratio width. For example 16 would be widescreen video.
	     */
	    width: number;
	    /**
	     * The maximum width you want the child to stretch to.
	     */
	    maxWidth?: number;
	};
	export const EuiAspectRatio: FunctionComponent<EuiAspectRatioProps>;

}
declare module '@elastic/eui' {
	export { EuiAspectRatio, EuiAspectRatioProps } from '@elastic\eui\src\components\aspect_ratio\aspect_ratio';

}
declare module '@elastic\eui\src\components\avatar\avatar' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { IconType, IconSize, IconColor } from '@elastic\eui\src\components\icon'; const sizeToClassNameMap: {
	    s: string;
	    m: string;
	    l: string;
	    xl: string;
	};
	export const SIZES: ("s" | "m" | "l" | "xl")[];
	export type EuiAvatarSize = keyof typeof sizeToClassNameMap; const typeToClassNameMap: {
	    space: string;
	    user: string;
	};
	export const TYPES: ("space" | "user")[];
	export type EuiAvatarType = keyof typeof typeToClassNameMap; type _EuiAvatarContent = ExclusiveUnion<ExclusiveUnion<{
	    /**
	     * Custom initials (max 2 characters).
	     * By default will take the first character (of each word).
	     */
	    initials?: string;
	    /**
	     * Specify how many characters to show (1 or 2).
	     * By default, will show based on number of words (max first 2).
	     */
	    initialsLength?: 1 | 2;
	}, {
	    /**
	     * Path to an image to display instead of initials
	     */
	    imageUrl: string;
	}>, {
	    /**
	     * Any EUI glyph, logo or custom icon to display instead of initials
	     */
	    iconType: IconType;
	    /**
	     * Manually change icon size
	     */
	    iconSize?: IconSize;
	    /**
	     * Manually change icon color
	     */
	    iconColor?: IconColor | null;
	}>;
	export type EuiAvatarProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & CommonProps & _EuiAvatarContent & {
	    /**
	     * Full name of avatar for title attribute and calculating initial if not provided
	     */
	    name: string;
	    /**
	     * Accepts hex values like `#FFFFFF`, `#000` otherwise a viz palette color will be assigned.
	     * Or pass `'plain'` for an empty shade or `null` to remove entirely and the text/icon color will `inherit`
	     */
	    color?: string | 'plain' | null;
	    /**
	     * The type of avatar mainly controlling the shape.
	     * `user` = circle
	     * `space` = rounded square
	     */
	    type?: EuiAvatarType;
	    size?: EuiAvatarSize;
	    /**
	     * Grays out the avatar to simulate being disabled
	     */
	    isDisabled?: boolean;
	};
	export const EuiAvatar: FunctionComponent<EuiAvatarProps>;
	export const checkValidColor: (color: EuiAvatarProps['color']) => void;
	export {};

}
declare module '@elastic/eui' {
	export { EuiAvatar, EuiAvatarProps, checkValidColor } from '@elastic\eui\src\components\avatar\avatar';

}
declare module '@elastic\eui\src\components\badge\badge' {
	import { AriaAttributes, FunctionComponent, HTMLAttributes, MouseEventHandler } from 'react';
	import { CommonProps, ExclusiveUnion, PropsOf } from '@elastic\eui\src\components\common';
	import { EuiIcon, IconColor, IconType } from '@elastic\eui\src\components\icon'; type IconSide = 'left' | 'right'; type WithButtonProps = {
	    /**
	     * Will apply an onclick to the badge itself
	     */
	    onClick: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Aria label applied to the onClick button
	     */
	    onClickAriaLabel: AriaAttributes['aria-label'];
	} & Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'color'>; type WithAnchorProps = {
	    href: string;
	    target?: string;
	    rel?: string;
	} & Omit<HTMLAttributes<HTMLAnchorElement>, 'href' | 'color' | 'onClick'>; type WithSpanProps = Omit<HTMLAttributes<HTMLSpanElement>, 'onClick' | 'color'>;
	interface WithIconOnClick {
	    /**
	     * Will apply an onclick to icon within the badge
	     */
	    iconOnClick: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Aria label applied to the iconOnClick button
	     */
	    iconOnClickAriaLabel: AriaAttributes['aria-label'];
	}
	export type EuiBadgeProps = {
	    /**
	     * Accepts any string from our icon library
	     */
	    iconType?: IconType;
	    /**
	     * The side of the badge the icon should sit
	     */
	    iconSide?: IconSide;
	    /**
	     * Accepts either our palette colors (primary, success ..etc) or a hex value `#FFFFFF`, `#000`.
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: IconColor;
	    /**
	     * Will override any color passed through the `color` prop.
	     */
	    isDisabled?: boolean;
	    /**
	     * Props passed to the close button.
	     */
	    closeButtonProps?: Partial<PropsOf<EuiIcon>>;
	} & CommonProps & ExclusiveUnion<WithIconOnClick, {}> & ExclusiveUnion<ExclusiveUnion<WithButtonProps, WithAnchorProps>, WithSpanProps>;
	export const COLORS: string[];
	export const ICON_SIDES: import ("@elastic\eui\src\components\button\button_content").ButtonContentIconSide[];
	export const EuiBadge: FunctionComponent<EuiBadgeProps>;
	export {};

}
declare module '@elastic\eui\src\components\badge\beta_badge\beta_badge' {
	import { AriaAttributes, FunctionComponent, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { ToolTipPositions } from '@elastic\eui\src\components\tool_tip';
	import { IconType } from '@elastic\eui\src\components\icon'; const colorToClassMap: {
	    accent: string;
	    subdued: string;
	    hollow: string;
	};
	export const COLORS: BetaBadgeColor[];
	export type BetaBadgeColor = keyof typeof colorToClassMap;
	export type BetaBadgeSize = 's' | 'm';
	export const sizeToClassMap: {
	    [size in BetaBadgeSize]: string | null;
	};
	export const SIZES: ("s" | "m")[]; type WithButtonProps = {
	    /**
	     * Will apply an onclick to the badge itself
	     */
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Aria label applied to the onClick button
	     */
	    onClickAriaLabel?: AriaAttributes['aria-label'];
	} & Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'color'>; type WithAnchorProps = {
	    href: string;
	    target?: string;
	    rel?: string;
	} & Omit<HTMLAttributes<HTMLAnchorElement>, 'href' | 'color' | 'onClick'>; type WithSpanProps = Omit<HTMLAttributes<HTMLSpanElement>, 'onClick' | 'color' | 'title'>; type LabelAsNode = ExclusiveUnion<{
	    title: string;
	    tooltipContent?: ReactNode;
	}, {
	    tooltipContent: ReactNode;
	    title?: string;
	}> & {
	    label: ReactNode;
	};
	interface LabelAsString {
	    /**
	     * One word label like "Beta" or "Lab"
	     */
	    label: string;
	} type BadgeProps = {
	    /**
	     * Supply an icon type if the badge should just be an icon
	     */
	    iconType?: IconType;
	    /**
	     * One word label like "Beta" or "Lab"
	     */
	    label: ReactNode;
	    /**
	     * Content for the tooltip
	     */
	    tooltipContent?: ReactNode;
	    /**
	     * Custom position of the tooltip
	     */
	    tooltipPosition?: ToolTipPositions;
	    /**
	     * Optional title will be supplied as tooltip title or title attribute
	     * otherwise the label will be used
	     */
	    title?: string;
	    /**
	     * Accepts accent, subdued and hollow.
	     */
	    color?: BetaBadgeColor;
	    size?: BetaBadgeSize;
	} & ExclusiveUnion<LabelAsNode, LabelAsString>;
	export type EuiBetaBadgeProps = CommonProps & ExclusiveUnion<ExclusiveUnion<WithButtonProps, WithAnchorProps>, WithSpanProps> & BadgeProps;
	export const EuiBetaBadge: FunctionComponent<EuiBetaBadgeProps>;
	export {};

}
declare module '@elastic\eui\src\components\badge\beta_badge' {
	export { EuiBetaBadge, EuiBetaBadgeProps } from '@elastic\eui\src\components\badge\beta_badge\beta_badge';

}
declare module '@elastic\eui\src\components\badge\notification_badge\badge_notification' {
	import { HTMLAttributes, ReactNode, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const colorToClassMap: {
	    accent: null;
	    subdued: string;
	};
	export const COLORS: BadgeNotificationColor[];
	export type BadgeNotificationColor = keyof typeof colorToClassMap; const sizeToClassNameMap: {
	    s: null;
	    m: string;
	};
	export const SIZES: BadgeNotificationSize[];
	export type BadgeNotificationSize = keyof typeof sizeToClassNameMap;
	export interface EuiNotificationBadgeProps extends CommonProps, Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    size?: BadgeNotificationSize;
	    color?: BadgeNotificationColor;
	}
	export const EuiNotificationBadge: FunctionComponent<EuiNotificationBadgeProps>;
	export {};

}
declare module '@elastic\eui\src\components\badge\notification_badge' {
	export { EuiNotificationBadge, EuiNotificationBadgeProps, } from '@elastic\eui\src\components\badge\notification_badge\badge_notification';

}
declare module '@elastic\eui\src\components\badge\badge_group\badge_group' {
	import React, { ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const gutterSizeToClassNameMap: {
	    none: null;
	    xs: string;
	    s: string;
	};
	export const GUTTER_SIZES: ("xs" | "s" | "none")[]; type BadgeGroupGutterSize = keyof typeof gutterSizeToClassNameMap;
	export interface EuiBadgeGroupProps {
	    /**
	     * Space between badges
	     */
	    gutterSize?: BadgeGroupGutterSize;
	    /**
	     * Should be a list of EuiBadge's but can also be any other element
	     * Will apply an extra class to add spacing
	     */
	    children?: ReactNode;
	}
	export const EuiBadgeGroup: React.ForwardRefExoticComponent<CommonProps & React.HTMLAttributes<HTMLDivElement> & EuiBadgeGroupProps & React.RefAttributes<HTMLDivElement>>;
	export {};

}
declare module '@elastic\eui\src\components\badge\badge_group' {
	export { EuiBadgeGroup, EuiBadgeGroupProps } from '@elastic\eui\src\components\badge\badge_group\badge_group';

}
declare module '@elastic/eui' {
	export { EuiBadge, EuiBadgeProps } from '@elastic\eui\src\components\badge\badge';
	export { EuiBetaBadge, EuiBetaBadgeProps } from '@elastic\eui\src\components\badge\beta_badge';
	export { EuiNotificationBadge } from '@elastic\eui\src\components\badge\notification_badge';
	export { EuiBadgeGroup, EuiBadgeGroupProps } from '@elastic\eui\src\components\badge\badge_group';

}
declare module '@elastic\eui\src\components\basic_table\action_types' {
	import { ReactElement, ReactNode } from 'react';
	import { EuiIconType } from '@elastic\eui\src\components\icon\icon';
	import { EuiButtonIconColor } from '@elastic\eui\src\components\button\button_icon\button_icon';
	import { EuiButtonEmptyColor } from '@elastic\eui\src\components\button\button_empty';
	import { ExclusiveUnion } from '@elastic\eui\src\components\common'; type IconFunction<T> = (item: T) => EuiIconType; type ButtonColor = EuiButtonIconColor | EuiButtonEmptyColor; type EuiButtonIconColorFunction<T> = (item: T) => ButtonColor;
	export interface DefaultItemActionBase<T> {
	    /**
	     * The display name of the action (will be the button caption)
	     */
	    name: ReactNode | ((item: T) => ReactNode);
	    /**
	     * Describes the action (will be the button title)
	     */
	    description: string;
	    /**
	     * A handler function to execute the action
	     */
	    onClick?: (item: T) => void;
	    href?: string;
	    target?: string;
	    /**
	     * A callback function that determines whether the action is available
	     */
	    available?: (item: T) => boolean;
	    /**
	     * A callback function that determines whether the action is enabled
	     */
	    enabled?: (item: T) => boolean;
	    isPrimary?: boolean;
	    'data-test-subj'?: string;
	}
	export interface DefaultItemEmptyButtonAction<T> extends DefaultItemActionBase<T> {
	    /**
	     * The type of action
	     */
	    type?: 'button';
	    color?: EuiButtonEmptyColor | EuiButtonIconColorFunction<T>;
	}
	export interface DefaultItemIconButtonAction<T> extends DefaultItemActionBase<T> {
	    type: 'icon';
	    /**
	     * Associates an icon with the button
	     */
	    icon: EuiIconType | IconFunction<T>;
	    /**
	     * Defines the color of the button
	     */
	    color?: EuiButtonIconColor | EuiButtonIconColorFunction<T>;
	}
	export type DefaultItemAction<T> = ExclusiveUnion<DefaultItemEmptyButtonAction<T>, DefaultItemIconButtonAction<T>>;
	export interface CustomItemAction<T> {
	    /**
	     * The function that renders the action. Note that the returned node is expected to have `onFocus` and `onBlur` functions
	     */
	    render: (item: T, enabled: boolean) => ReactElement;
	    /**
	     * A callback that defines whether the action is available
	     */
	    available?: (item: T) => boolean;
	    /**
	     * A callback that defines whether the action is enabled
	     */
	    enabled?: (item: T) => boolean;
	    isPrimary?: boolean;
	}
	export type Action<T> = DefaultItemAction<T> | CustomItemAction<T>;
	export const isCustomItemAction: (action: DefaultItemAction<any> | CustomItemAction<any>) => action is CustomItemAction<any>;
	export {};

}
declare module '@elastic\eui\src\components\table\table' {
	import { FunctionComponent, TableHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiTableProps extends CommonProps, TableHTMLAttributes<HTMLTableElement> {
	    compressed?: boolean;
	    responsive?: boolean;
	    /**
	     * Sets the table-layout CSS property
	     */
	    tableLayout?: 'fixed' | 'auto';
	}
	export const EuiTable: FunctionComponent<EuiTableProps>;

}
declare module '@elastic\eui\src\components\table\table_body' {
	import { FunctionComponent, Ref } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiTableBodyProps = CommonProps & {
	    bodyRef?: Ref<HTMLTableSectionElement>;
	};
	export const EuiTableBody: FunctionComponent<EuiTableBodyProps>;

}
declare module '@elastic\eui\src\components\table\table_footer' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const EuiTableFooter: FunctionComponent<CommonProps>;

}
declare module '@elastic\eui\src\components\table\utils' {
	import { CSSProperties } from 'react';
	export const WARNING_MESSAGE = "Two `width` properties were provided. Provide only one of `style.width` or `width` to avoid conflicts.";
	export const resolveWidthAsStyle: (style?: CSSProperties, width?: string | number | undefined) => {
	    width: string | number | undefined;
	    alignContent?: string | undefined;
	    alignItems?: string | undefined;
	    alignSelf?: string | undefined;
	    animationDelay?: string | undefined;
	    animationDirection?: string | undefined;
	    animationDuration?: string | undefined;
	    animationFillMode?: string | undefined;
	    animationIterationCount?: string | number | undefined;
	    animationName?: string | undefined;
	    animationPlayState?: string | undefined;
	    animationTimingFunction?: string | undefined;
	    appearance?: "inherit" | "none" | "initial" | "listbox" | "button" | "meter" | "textarea" | "-moz-initial" | "revert" | "unset" | "button-bevel" | "checkbox" | "menulist" | "menulist-button" | "progress-bar" | "push-button" | "radio" | "searchfield" | "slider-horizontal" | "square-button" | "textfield" | undefined;
	    aspectRatio?: string | undefined;
	    backdropFilter?: string | undefined;
	    backfaceVisibility?: "inherit" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | undefined;
	    backgroundAttachment?: string | undefined;
	    backgroundBlendMode?: string | undefined;
	    backgroundClip?: string | undefined;
	    backgroundColor?: string | undefined;
	    backgroundImage?: string | undefined;
	    backgroundOrigin?: string | undefined;
	    backgroundPosition?: string | number | undefined;
	    backgroundPositionX?: string | number | undefined;
	    backgroundPositionY?: string | number | undefined;
	    backgroundRepeat?: string | undefined;
	    backgroundSize?: string | number | undefined;
	    blockOverflow?: string | undefined;
	    blockSize?: string | number | undefined;
	    borderBlockColor?: string | undefined;
	    borderBlockEndColor?: string | undefined;
	    borderBlockEndStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderBlockEndWidth?: string | number | undefined;
	    borderBlockStartColor?: string | undefined;
	    borderBlockStartStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderBlockStartWidth?: string | number | undefined;
	    borderBlockStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderBlockWidth?: string | number | undefined;
	    borderBottomColor?: string | undefined;
	    borderBottomLeftRadius?: string | number | undefined;
	    borderBottomRightRadius?: string | number | undefined;
	    borderBottomStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderBottomWidth?: string | number | undefined;
	    borderCollapse?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "collapse" | "separate" | undefined;
	    borderEndEndRadius?: string | number | undefined;
	    borderEndStartRadius?: string | number | undefined;
	    borderImageOutset?: string | number | undefined;
	    borderImageRepeat?: string | undefined;
	    borderImageSlice?: string | number | undefined;
	    borderImageSource?: string | undefined;
	    borderImageWidth?: string | number | undefined;
	    borderInlineColor?: string | undefined;
	    borderInlineEndColor?: string | undefined;
	    borderInlineEndStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderInlineEndWidth?: string | number | undefined;
	    borderInlineStartColor?: string | undefined;
	    borderInlineStartStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderInlineStartWidth?: string | number | undefined;
	    borderInlineStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderInlineWidth?: string | number | undefined;
	    borderLeftColor?: string | undefined;
	    borderLeftStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderLeftWidth?: string | number | undefined;
	    borderRightColor?: string | undefined;
	    borderRightStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderRightWidth?: string | number | undefined;
	    borderSpacing?: string | number | undefined;
	    borderStartEndRadius?: string | number | undefined;
	    borderStartStartRadius?: string | number | undefined;
	    borderTopColor?: string | undefined;
	    borderTopLeftRadius?: string | number | undefined;
	    borderTopRightRadius?: string | number | undefined;
	    borderTopStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    borderTopWidth?: string | number | undefined;
	    bottom?: string | number | undefined;
	    boxDecorationBreak?: "slice" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "clone" | undefined;
	    boxShadow?: string | undefined;
	    boxSizing?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "border-box" | "content-box" | undefined;
	    breakAfter?: "left" | "right" | "inherit" | "auto" | "initial" | "page" | "all" | "-moz-initial" | "revert" | "unset" | "always" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "recto" | "region" | "verso" | undefined;
	    breakBefore?: "left" | "right" | "inherit" | "auto" | "initial" | "page" | "all" | "-moz-initial" | "revert" | "unset" | "always" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "recto" | "region" | "verso" | undefined;
	    breakInside?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | undefined;
	    captionSide?: "top" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "bottom" | "block-end" | "block-start" | "inline-end" | "inline-start" | undefined;
	    caretColor?: string | undefined;
	    clear?: "left" | "right" | "both" | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "inline-end" | "inline-start" | undefined;
	    clipPath?: string | undefined;
	    color?: string | undefined;
	    colorAdjust?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "economy" | "exact" | undefined;
	    columnCount?: number | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    columnFill?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "balance" | "balance-all" | undefined;
	    columnGap?: string | number | undefined;
	    columnRuleColor?: string | undefined;
	    columnRuleStyle?: string | undefined;
	    columnRuleWidth?: string | number | undefined;
	    columnSpan?: "inherit" | "none" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | undefined;
	    columnWidth?: string | number | undefined;
	    contain?: string | undefined;
	    content?: string | undefined;
	    counterIncrement?: string | undefined;
	    counterReset?: string | undefined;
	    counterSet?: string | undefined;
	    cursor?: string | undefined;
	    direction?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "ltr" | "rtl" | undefined;
	    display?: string | undefined;
	    emptyCells?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "hide" | "show" | undefined;
	    filter?: string | undefined;
	    flexBasis?: string | number | undefined;
	    flexDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" | undefined;
	    flexGrow?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    flexShrink?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    flexWrap?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "nowrap" | "wrap" | "wrap-reverse" | undefined;
	    float?: "left" | "right" | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "inline-end" | "inline-start" | undefined;
	    fontFamily?: string | undefined;
	    fontFeatureSettings?: string | undefined;
	    fontKerning?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | undefined;
	    fontLanguageOverride?: string | undefined;
	    fontOpticalSizing?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    fontSize?: string | number | undefined;
	    fontSizeAdjust?: number | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    fontStretch?: string | undefined;
	    fontStyle?: string | undefined;
	    fontSynthesis?: string | undefined;
	    fontVariant?: string | undefined;
	    fontVariantCaps?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "all-petite-caps" | "all-small-caps" | "petite-caps" | "small-caps" | "titling-caps" | "unicase" | undefined;
	    fontVariantEastAsian?: string | undefined;
	    fontVariantLigatures?: string | undefined;
	    fontVariantNumeric?: string | undefined;
	    fontVariantPosition?: "sub" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "super" | undefined;
	    fontVariationSettings?: string | undefined;
	    fontWeight?: number | "bold" | "lighter" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "bolder" | undefined;
	    gridAutoColumns?: string | number | undefined;
	    gridAutoFlow?: string | undefined;
	    gridAutoRows?: string | number | undefined;
	    gridColumnEnd?: string | number | undefined;
	    gridColumnStart?: string | number | undefined;
	    gridRowEnd?: string | number | undefined;
	    gridRowStart?: string | number | undefined;
	    gridTemplateAreas?: string | undefined;
	    gridTemplateColumns?: string | number | undefined;
	    gridTemplateRows?: string | number | undefined;
	    hangingPunctuation?: string | undefined;
	    height?: string | number | undefined;
	    hyphens?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "manual" | undefined;
	    imageOrientation?: string | undefined;
	    imageRendering?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "crisp-edges" | "pixelated" | undefined;
	    imageResolution?: string | undefined;
	    initialLetter?: string | number | undefined;
	    inlineSize?: string | number | undefined;
	    inset?: string | number | undefined;
	    insetBlock?: string | number | undefined;
	    insetBlockEnd?: string | number | undefined;
	    insetBlockStart?: string | number | undefined;
	    insetInline?: string | number | undefined;
	    insetInlineEnd?: string | number | undefined;
	    insetInlineStart?: string | number | undefined;
	    isolation?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "isolate" | undefined;
	    justifyContent?: string | undefined;
	    justifyItems?: string | undefined;
	    justifySelf?: string | undefined;
	    left?: string | number | undefined;
	    letterSpacing?: string | number | undefined;
	    lineBreak?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "strict" | "anywhere" | "loose" | undefined;
	    lineHeight?: string | number | undefined;
	    lineHeightStep?: string | number | undefined;
	    listStyleImage?: string | undefined;
	    listStylePosition?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "inside" | "outside" | undefined;
	    listStyleType?: string | undefined;
	    marginBlock?: string | number | undefined;
	    marginBlockEnd?: string | number | undefined;
	    marginBlockStart?: string | number | undefined;
	    marginBottom?: string | number | undefined;
	    marginInline?: string | number | undefined;
	    marginInlineEnd?: string | number | undefined;
	    marginInlineStart?: string | number | undefined;
	    marginLeft?: string | number | undefined;
	    marginRight?: string | number | undefined;
	    marginTop?: string | number | undefined;
	    maskBorderMode?: "alpha" | "luminance" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    maskBorderOutset?: string | number | undefined;
	    maskBorderRepeat?: string | undefined;
	    maskBorderSlice?: string | number | undefined;
	    maskBorderSource?: string | undefined;
	    maskBorderWidth?: string | number | undefined;
	    maskClip?: string | undefined;
	    maskComposite?: string | undefined;
	    maskImage?: string | undefined;
	    maskMode?: string | undefined;
	    maskOrigin?: string | undefined;
	    maskPosition?: string | number | undefined;
	    maskRepeat?: string | undefined;
	    maskSize?: string | number | undefined;
	    maskType?: "alpha" | "luminance" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    maxBlockSize?: string | number | undefined;
	    maxHeight?: string | number | undefined;
	    maxInlineSize?: string | number | undefined;
	    maxLines?: number | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    maxWidth?: string | number | undefined;
	    minBlockSize?: string | number | undefined;
	    minHeight?: string | number | undefined;
	    minInlineSize?: string | number | undefined;
	    minWidth?: string | number | undefined;
	    mixBlendMode?: "darken" | "color" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "color-burn" | "color-dodge" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | undefined;
	    motionDistance?: string | number | undefined;
	    motionPath?: string | undefined;
	    motionRotation?: string | undefined;
	    objectFit?: "inherit" | "fill" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | "cover" | "scale-down" | undefined;
	    objectPosition?: string | number | undefined;
	    offsetAnchor?: string | number | undefined;
	    offsetDistance?: string | number | undefined;
	    offsetPath?: string | undefined;
	    offsetRotate?: string | undefined;
	    offsetRotation?: string | undefined;
	    opacity?: string | number | undefined;
	    order?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    orphans?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    outlineColor?: string | undefined;
	    outlineOffset?: string | number | undefined;
	    outlineStyle?: string | undefined;
	    outlineWidth?: string | number | undefined;
	    overflow?: string | undefined;
	    overflowAnchor?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    overflowBlock?: "inherit" | "clip" | "auto" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "scroll" | undefined;
	    overflowClipBox?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "content-box" | "padding-box" | undefined;
	    overflowInline?: "inherit" | "clip" | "auto" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "scroll" | undefined;
	    overflowWrap?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "anywhere" | "break-word" | undefined;
	    overflowX?: "inherit" | "auto" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "scroll" | undefined;
	    overflowY?: "inherit" | "auto" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "scroll" | undefined;
	    overscrollBehavior?: string | undefined;
	    overscrollBehaviorBlock?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | undefined;
	    overscrollBehaviorInline?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | undefined;
	    overscrollBehaviorX?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | undefined;
	    overscrollBehaviorY?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | undefined;
	    paddingBlock?: string | number | undefined;
	    paddingBlockEnd?: string | number | undefined;
	    paddingBlockStart?: string | number | undefined;
	    paddingBottom?: string | number | undefined;
	    paddingInline?: string | number | undefined;
	    paddingInlineEnd?: string | number | undefined;
	    paddingInlineStart?: string | number | undefined;
	    paddingLeft?: string | number | undefined;
	    paddingRight?: string | number | undefined;
	    paddingTop?: string | number | undefined;
	    pageBreakAfter?: "left" | "right" | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "always" | "avoid" | "recto" | "verso" | undefined;
	    pageBreakBefore?: "left" | "right" | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "always" | "avoid" | "recto" | "verso" | undefined;
	    pageBreakInside?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "avoid" | undefined;
	    paintOrder?: string | undefined;
	    perspective?: string | number | undefined;
	    perspectiveOrigin?: string | number | undefined;
	    placeContent?: string | undefined;
	    pointerEvents?: "inherit" | "fill" | "stroke" | "none" | "auto" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | "visible" | "painted" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
	    position?: "fixed" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "-webkit-sticky" | "absolute" | "relative" | "static" | "sticky" | undefined;
	    quotes?: string | undefined;
	    resize?: "both" | "inherit" | "none" | "initial" | "inline" | "horizontal" | "vertical" | "-moz-initial" | "revert" | "unset" | "block" | undefined;
	    right?: string | number | undefined;
	    rotate?: string | undefined;
	    rowGap?: string | number | undefined;
	    rubyAlign?: "center" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "space-around" | "space-between" | "start" | undefined;
	    rubyMerge?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "collapse" | "separate" | undefined;
	    rubyPosition?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "over" | "under" | undefined;
	    scale?: string | number | undefined;
	    scrollBehavior?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "smooth" | undefined;
	    scrollMargin?: string | number | undefined;
	    scrollMarginBlock?: string | number | undefined;
	    scrollMarginBlockEnd?: string | number | undefined;
	    scrollMarginBlockStart?: string | number | undefined;
	    scrollMarginBottom?: string | number | undefined;
	    scrollMarginInline?: string | number | undefined;
	    scrollMarginInlineEnd?: string | number | undefined;
	    scrollMarginInlineStart?: string | number | undefined;
	    scrollMarginLeft?: string | number | undefined;
	    scrollMarginRight?: string | number | undefined;
	    scrollMarginTop?: string | number | undefined;
	    scrollPadding?: string | number | undefined;
	    scrollPaddingBlock?: string | number | undefined;
	    scrollPaddingBlockEnd?: string | number | undefined;
	    scrollPaddingBlockStart?: string | number | undefined;
	    scrollPaddingBottom?: string | number | undefined;
	    scrollPaddingInline?: string | number | undefined;
	    scrollPaddingInlineEnd?: string | number | undefined;
	    scrollPaddingInlineStart?: string | number | undefined;
	    scrollPaddingLeft?: string | number | undefined;
	    scrollPaddingRight?: string | number | undefined;
	    scrollPaddingTop?: string | number | undefined;
	    scrollSnapAlign?: string | undefined;
	    scrollSnapStop?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "always" | undefined;
	    scrollSnapType?: string | undefined;
	    scrollbarColor?: string | undefined;
	    scrollbarWidth?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "thin" | undefined;
	    shapeImageThreshold?: string | number | undefined;
	    shapeMargin?: string | number | undefined;
	    shapeOutside?: string | undefined;
	    tabSize?: string | number | undefined;
	    tableLayout?: "fixed" | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    textAlign?: "left" | "right" | "center" | "inherit" | "end" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | "match-parent" | undefined;
	    textAlignLast?: "left" | "right" | "center" | "inherit" | "end" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | undefined;
	    textCombineUpright?: string | undefined;
	    textDecorationColor?: string | undefined;
	    textDecorationLine?: string | undefined;
	    textDecorationSkip?: string | undefined;
	    textDecorationSkipInk?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    textDecorationStyle?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "solid" | "wavy" | undefined;
	    textDecorationThickness?: string | number | undefined;
	    textDecorationWidth?: string | number | undefined;
	    textEmphasisColor?: string | undefined;
	    textEmphasisPosition?: string | undefined;
	    textEmphasisStyle?: string | undefined;
	    textIndent?: string | number | undefined;
	    textJustify?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "inter-character" | "inter-word" | undefined;
	    textOrientation?: "inherit" | "initial" | "mixed" | "-moz-initial" | "revert" | "unset" | "sideways" | "upright" | undefined;
	    textOverflow?: string | undefined;
	    textRendering?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed" | undefined;
	    textShadow?: string | undefined;
	    textSizeAdjust?: string | undefined;
	    textTransform?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "full-width" | "capitalize" | "full-size-kana" | "lowercase" | "uppercase" | undefined;
	    textUnderlineOffset?: string | number | undefined;
	    textUnderlinePosition?: string | undefined;
	    top?: string | number | undefined;
	    touchAction?: string | undefined;
	    transform?: string | undefined;
	    transformBox?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "border-box" | "fill-box" | "view-box" | undefined;
	    transformOrigin?: string | number | undefined;
	    transformStyle?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "flat" | "preserve-3d" | undefined;
	    transitionDelay?: string | undefined;
	    transitionDuration?: string | undefined;
	    transitionProperty?: string | undefined;
	    transitionTimingFunction?: string | undefined;
	    translate?: string | number | undefined;
	    unicodeBidi?: "inherit" | "initial" | "embed" | "-moz-initial" | "revert" | "unset" | "normal" | "isolate" | "-moz-isolate" | "-moz-isolate-override" | "-moz-plaintext" | "-webkit-isolate" | "bidi-override" | "isolate-override" | "plaintext" | undefined;
	    userSelect?: "text" | "inherit" | "none" | "auto" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | "element" | "contain" | "-moz-none" | undefined;
	    verticalAlign?: string | number | undefined;
	    visibility?: "inherit" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "collapse" | undefined;
	    whiteSpace?: "inherit" | "initial" | "pre" | "-moz-initial" | "revert" | "unset" | "normal" | "nowrap" | "-moz-pre-wrap" | "break-spaces" | "pre-line" | "pre-wrap" | undefined;
	    widows?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    willChange?: string | undefined;
	    wordBreak?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "break-word" | "break-all" | "keep-all" | undefined;
	    wordSpacing?: string | number | undefined;
	    wordWrap?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "break-word" | undefined;
	    writingMode?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" | undefined;
	    zIndex?: number | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    zoom?: string | number | undefined;
	    all?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    animation?: string | number | undefined;
	    background?: string | number | undefined;
	    border?: string | number | undefined;
	    borderBlock?: string | number | undefined;
	    borderBlockEnd?: string | number | undefined;
	    borderBlockStart?: string | number | undefined;
	    borderBottom?: string | number | undefined;
	    borderColor?: string | undefined;
	    borderImage?: string | number | undefined;
	    borderInline?: string | number | undefined;
	    borderInlineEnd?: string | number | undefined;
	    borderInlineStart?: string | number | undefined;
	    borderLeft?: string | number | undefined;
	    borderRadius?: string | number | undefined;
	    borderRight?: string | number | undefined;
	    borderStyle?: string | undefined;
	    borderTop?: string | number | undefined;
	    borderWidth?: string | number | undefined;
	    columnRule?: string | number | undefined;
	    columns?: string | number | undefined;
	    flex?: string | number | undefined;
	    flexFlow?: string | undefined;
	    font?: string | undefined;
	    gap?: string | number | undefined;
	    grid?: string | undefined;
	    gridArea?: string | number | undefined;
	    gridColumn?: string | number | undefined;
	    gridRow?: string | number | undefined;
	    gridTemplate?: string | undefined;
	    lineClamp?: number | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    listStyle?: string | undefined;
	    margin?: string | number | undefined;
	    mask?: string | number | undefined;
	    maskBorder?: string | number | undefined;
	    motion?: string | number | undefined;
	    offset?: string | number | undefined;
	    outline?: string | number | undefined;
	    padding?: string | number | undefined;
	    placeItems?: string | undefined;
	    placeSelf?: string | undefined;
	    textDecoration?: string | number | undefined;
	    textEmphasis?: string | undefined;
	    transition?: string | undefined;
	    MozAnimationDelay?: string | undefined;
	    MozAnimationDirection?: string | undefined;
	    MozAnimationDuration?: string | undefined;
	    MozAnimationFillMode?: string | undefined;
	    MozAnimationIterationCount?: string | number | undefined;
	    MozAnimationName?: string | undefined;
	    MozAnimationPlayState?: string | undefined;
	    MozAnimationTimingFunction?: string | undefined;
	    MozAppearance?: "inherit" | "none" | "initial" | "listbox" | "button" | "menuitem" | "-moz-initial" | "revert" | "unset" | "button-bevel" | "checkbox" | "menulist" | "menulist-button" | "radio" | "searchfield" | "textfield" | "-moz-mac-unified-toolbar" | "-moz-win-borderless-glass" | "-moz-win-browsertabbar-toolbox" | "-moz-win-communications-toolbox" | "-moz-win-communicationstext" | "-moz-win-exclude-glass" | "-moz-win-glass" | "-moz-win-media-toolbox" | "-moz-win-mediatext" | "-moz-window-button-box" | "-moz-window-button-box-maximized" | "-moz-window-button-close" | "-moz-window-button-maximize" | "-moz-window-button-minimize" | "-moz-window-button-restore" | "-moz-window-frame-bottom" | "-moz-window-frame-left" | "-moz-window-frame-right" | "-moz-window-titlebar" | "-moz-window-titlebar-maximized" | "button-arrow-down" | "button-arrow-next" | "button-arrow-previous" | "button-arrow-up" | "button-focus" | "caret" | "checkbox-container" | "checkbox-label" | "checkmenuitem" | "dualbutton" | "groupbox" | "listitem" | "menuarrow" | "menubar" | "menucheckbox" | "menuimage" | "menuitemtext" | "menulist-text" | "menulist-textfield" | "menupopup" | "menuradio" | "menuseparator" | "meterbar" | "meterchunk" | "progressbar" | "progressbar-vertical" | "progresschunk" | "progresschunk-vertical" | "radio-container" | "radio-label" | "radiomenuitem" | "range" | "range-thumb" | "resizer" | "resizerpanel" | "scale-horizontal" | "scale-vertical" | "scalethumb-horizontal" | "scalethumb-vertical" | "scalethumbend" | "scalethumbstart" | "scalethumbtick" | "scrollbarbutton-down" | "scrollbarbutton-left" | "scrollbarbutton-right" | "scrollbarbutton-up" | "scrollbarthumb-horizontal" | "scrollbarthumb-vertical" | "scrollbartrack-horizontal" | "scrollbartrack-vertical" | "separator" | "sheet" | "spinner" | "spinner-downbutton" | "spinner-textfield" | "spinner-upbutton" | "splitter" | "statusbar" | "statusbarpanel" | "tab" | "tab-scroll-arrow-back" | "tab-scroll-arrow-forward" | "tabpanel" | "tabpanels" | "textfield-multiline" | "toolbar" | "toolbarbutton" | "toolbarbutton-dropdown" | "toolbargripper" | "toolbox" | "tooltip" | "treeheader" | "treeheadercell" | "treeheadersortarrow" | "treeitem" | "treeline" | "treetwisty" | "treetwistyopen" | "treeview" | undefined;
	    MozBackfaceVisibility?: "inherit" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | undefined;
	    MozBorderEndColor?: string | undefined;
	    MozBorderEndStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    MozBorderEndWidth?: string | number | undefined;
	    MozBorderStartColor?: string | undefined;
	    MozBorderStartStyle?: "inherit" | "none" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge" | "solid" | undefined;
	    MozBoxSizing?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "border-box" | "content-box" | undefined;
	    MozColumnCount?: number | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    MozColumnFill?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "balance" | "balance-all" | undefined;
	    MozColumnGap?: string | number | undefined;
	    MozColumnRuleColor?: string | undefined;
	    MozColumnRuleStyle?: string | undefined;
	    MozColumnRuleWidth?: string | number | undefined;
	    MozColumnWidth?: string | number | undefined;
	    MozContextProperties?: string | undefined;
	    MozFloatEdge?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "margin-box" | undefined;
	    MozFontFeatureSettings?: string | undefined;
	    MozFontLanguageOverride?: string | undefined;
	    MozForceBrokenImageIcon?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    MozHyphens?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "manual" | undefined;
	    MozImageRegion?: string | undefined;
	    MozMarginEnd?: string | number | undefined;
	    MozMarginStart?: string | number | undefined;
	    MozOrient?: "inherit" | "initial" | "inline" | "horizontal" | "vertical" | "-moz-initial" | "revert" | "unset" | "block" | undefined;
	    MozOutlineRadiusBottomleft?: string | number | undefined;
	    MozOutlineRadiusBottomright?: string | number | undefined;
	    MozOutlineRadiusTopleft?: string | number | undefined;
	    MozOutlineRadiusTopright?: string | number | undefined;
	    MozPaddingEnd?: string | number | undefined;
	    MozPaddingStart?: string | number | undefined;
	    MozPerspective?: string | number | undefined;
	    MozPerspectiveOrigin?: string | number | undefined;
	    MozStackSizing?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "ignore" | "stretch-to-fit" | undefined;
	    MozTabSize?: string | number | undefined;
	    MozTextSizeAdjust?: string | undefined;
	    MozTransformOrigin?: string | number | undefined;
	    MozTransformStyle?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "flat" | "preserve-3d" | undefined;
	    MozTransitionDelay?: string | undefined;
	    MozTransitionDuration?: string | undefined;
	    MozTransitionProperty?: string | undefined;
	    MozTransitionTimingFunction?: string | undefined;
	    MozUserFocus?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "ignore" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same" | undefined;
	    MozUserModify?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "read-only" | "read-write" | "write-only" | undefined;
	    MozUserSelect?: "text" | "inherit" | "none" | "auto" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | "element" | "contain" | "-moz-none" | undefined;
	    MozWindowDragging?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "drag" | "no-drag" | undefined;
	    msAccelerator?: "inherit" | "initial" | "true" | "false" | "-moz-initial" | "revert" | "unset" | undefined;
	    msAlignSelf?: string | undefined;
	    msBlockProgression?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "bt" | "lr" | "rl" | "tb" | undefined;
	    msContentZoomChaining?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "chained" | undefined;
	    msContentZoomLimitMax?: string | undefined;
	    msContentZoomLimitMin?: string | undefined;
	    msContentZoomSnapPoints?: string | undefined;
	    msContentZoomSnapType?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "mandatory" | "proximity" | undefined;
	    msContentZooming?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "zoom" | undefined;
	    msFilter?: string | undefined;
	    msFlexDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" | undefined;
	    msFlexPositive?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    msFlowFrom?: string | undefined;
	    msFlowInto?: string | undefined;
	    msGridColumns?: string | number | undefined;
	    msGridRows?: string | number | undefined;
	    msHighContrastAdjust?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    msHyphenateLimitChars?: string | number | undefined;
	    msHyphenateLimitLines?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "no-limit" | undefined;
	    msHyphenateLimitZone?: string | number | undefined;
	    msHyphens?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "manual" | undefined;
	    msImeAlign?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "after" | undefined;
	    msLineBreak?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "strict" | "anywhere" | "loose" | undefined;
	    msOrder?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    msOverflowStyle?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "-ms-autohiding-scrollbar" | "scrollbar" | undefined;
	    msOverflowX?: "inherit" | "auto" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "scroll" | undefined;
	    msOverflowY?: "inherit" | "auto" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | "scroll" | undefined;
	    msScrollChaining?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "chained" | undefined;
	    msScrollLimitXMax?: string | number | undefined;
	    msScrollLimitXMin?: string | number | undefined;
	    msScrollLimitYMax?: string | number | undefined;
	    msScrollLimitYMin?: string | number | undefined;
	    msScrollRails?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "railed" | undefined;
	    msScrollSnapPointsX?: string | undefined;
	    msScrollSnapPointsY?: string | undefined;
	    msScrollSnapType?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "mandatory" | "proximity" | undefined;
	    msScrollTranslation?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "vertical-to-horizontal" | undefined;
	    msScrollbar3dlightColor?: string | undefined;
	    msScrollbarArrowColor?: string | undefined;
	    msScrollbarBaseColor?: string | undefined;
	    msScrollbarDarkshadowColor?: string | undefined;
	    msScrollbarFaceColor?: string | undefined;
	    msScrollbarHighlightColor?: string | undefined;
	    msScrollbarShadowColor?: string | undefined;
	    msTextAutospace?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | undefined;
	    msTextCombineHorizontal?: string | undefined;
	    msTextOverflow?: string | undefined;
	    msTouchAction?: string | undefined;
	    msTouchSelect?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "grippers" | undefined;
	    msTransform?: string | undefined;
	    msTransformOrigin?: string | number | undefined;
	    msTransitionDelay?: string | undefined;
	    msTransitionDuration?: string | undefined;
	    msTransitionProperty?: string | undefined;
	    msTransitionTimingFunction?: string | undefined;
	    msUserSelect?: "text" | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "element" | undefined;
	    msWordBreak?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "break-word" | "break-all" | "keep-all" | undefined;
	    msWrapFlow?: "both" | "inherit" | "end" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "clear" | "maximum" | undefined;
	    msWrapMargin?: string | number | undefined;
	    msWrapThrough?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "wrap" | undefined;
	    msWritingMode?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" | undefined;
	    OObjectFit?: "inherit" | "fill" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | "cover" | "scale-down" | undefined;
	    OObjectPosition?: string | number | undefined;
	    OTabSize?: string | number | undefined;
	    OTextOverflow?: string | undefined;
	    OTransformOrigin?: string | number | undefined;
	    WebkitAlignContent?: string | undefined;
	    WebkitAlignItems?: string | undefined;
	    WebkitAlignSelf?: string | undefined;
	    WebkitAnimationDelay?: string | undefined;
	    WebkitAnimationDirection?: string | undefined;
	    WebkitAnimationDuration?: string | undefined;
	    WebkitAnimationFillMode?: string | undefined;
	    WebkitAnimationIterationCount?: string | number | undefined;
	    WebkitAnimationName?: string | undefined;
	    WebkitAnimationPlayState?: string | undefined;
	    WebkitAnimationTimingFunction?: string | undefined;
	    WebkitAppearance?: "inherit" | "none" | "initial" | "listbox" | "button" | "meter" | "textarea" | "-moz-initial" | "revert" | "unset" | "button-bevel" | "checkbox" | "menulist" | "menulist-button" | "progress-bar" | "push-button" | "radio" | "searchfield" | "slider-horizontal" | "square-button" | "textfield" | "caret" | "listitem" | "menulist-text" | "menulist-textfield" | "default-button" | "inner-spin-button" | "media-controls-background" | "media-controls-fullscreen-background" | "media-current-time-display" | "media-enter-fullscreen-button" | "media-exit-fullscreen-button" | "media-fullscreen-button" | "media-mute-button" | "media-overlay-play-button" | "media-play-button" | "media-seek-back-button" | "media-seek-forward-button" | "media-slider" | "media-sliderthumb" | "media-time-remaining-display" | "media-toggle-closed-captions-button" | "media-volume-slider" | "media-volume-slider-container" | "media-volume-sliderthumb" | "progress-bar-value" | "searchfield-cancel-button" | "searchfield-decoration" | "searchfield-results-button" | "searchfield-results-decoration" | "slider-vertical" | "sliderthumb-horizontal" | "sliderthumb-vertical" | undefined;
	    WebkitBackdropFilter?: string | undefined;
	    WebkitBackfaceVisibility?: "inherit" | "initial" | "hidden" | "-moz-initial" | "revert" | "unset" | "visible" | undefined;
	    WebkitBackgroundClip?: string | undefined;
	    WebkitBackgroundOrigin?: string | undefined;
	    WebkitBackgroundSize?: string | number | undefined;
	    WebkitBorderBeforeColor?: string | undefined;
	    WebkitBorderBeforeStyle?: string | undefined;
	    WebkitBorderBeforeWidth?: string | number | undefined;
	    WebkitBorderBottomLeftRadius?: string | number | undefined;
	    WebkitBorderBottomRightRadius?: string | number | undefined;
	    WebkitBorderImageSlice?: string | number | undefined;
	    WebkitBorderTopLeftRadius?: string | number | undefined;
	    WebkitBorderTopRightRadius?: string | number | undefined;
	    WebkitBoxDecorationBreak?: "slice" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "clone" | undefined;
	    WebkitBoxReflect?: string | number | undefined;
	    WebkitBoxShadow?: string | undefined;
	    WebkitBoxSizing?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "border-box" | "content-box" | undefined;
	    WebkitClipPath?: string | undefined;
	    WebkitColorAdjust?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "economy" | "exact" | undefined;
	    WebkitColumnCount?: number | "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitColumnFill?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "balance" | "balance-all" | undefined;
	    WebkitColumnGap?: string | number | undefined;
	    WebkitColumnRuleColor?: string | undefined;
	    WebkitColumnRuleStyle?: string | undefined;
	    WebkitColumnRuleWidth?: string | number | undefined;
	    WebkitColumnSpan?: "inherit" | "none" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitColumnWidth?: string | number | undefined;
	    WebkitFilter?: string | undefined;
	    WebkitFlexBasis?: string | number | undefined;
	    WebkitFlexDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" | undefined;
	    WebkitFlexGrow?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitFlexShrink?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitFlexWrap?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "nowrap" | "wrap" | "wrap-reverse" | undefined;
	    WebkitFontFeatureSettings?: string | undefined;
	    WebkitFontKerning?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | undefined;
	    WebkitFontVariantLigatures?: string | undefined;
	    WebkitHyphens?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "manual" | undefined;
	    WebkitJustifyContent?: string | undefined;
	    WebkitLineBreak?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "strict" | "anywhere" | "loose" | undefined;
	    WebkitLineClamp?: number | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitMarginEnd?: string | number | undefined;
	    WebkitMarginStart?: string | number | undefined;
	    WebkitMaskAttachment?: string | undefined;
	    WebkitMaskClip?: string | undefined;
	    WebkitMaskComposite?: string | undefined;
	    WebkitMaskImage?: string | undefined;
	    WebkitMaskOrigin?: string | undefined;
	    WebkitMaskPosition?: string | number | undefined;
	    WebkitMaskPositionX?: string | number | undefined;
	    WebkitMaskPositionY?: string | number | undefined;
	    WebkitMaskRepeat?: string | undefined;
	    WebkitMaskRepeatX?: "repeat" | "space" | "inherit" | "initial" | "round" | "-moz-initial" | "revert" | "unset" | "no-repeat" | undefined;
	    WebkitMaskRepeatY?: "repeat" | "space" | "inherit" | "initial" | "round" | "-moz-initial" | "revert" | "unset" | "no-repeat" | undefined;
	    WebkitMaskSize?: string | number | undefined;
	    WebkitMaxInlineSize?: string | number | undefined;
	    WebkitOrder?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitOverflowScrolling?: "inherit" | "auto" | "initial" | "touch" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitPaddingEnd?: string | number | undefined;
	    WebkitPaddingStart?: string | number | undefined;
	    WebkitPerspective?: string | number | undefined;
	    WebkitPerspectiveOrigin?: string | number | undefined;
	    WebkitScrollSnapType?: string | undefined;
	    WebkitShapeMargin?: string | number | undefined;
	    WebkitTapHighlightColor?: string | undefined;
	    WebkitTextCombine?: string | undefined;
	    WebkitTextDecorationColor?: string | undefined;
	    WebkitTextDecorationLine?: string | undefined;
	    WebkitTextDecorationSkip?: string | undefined;
	    WebkitTextDecorationStyle?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "solid" | "wavy" | undefined;
	    WebkitTextEmphasisColor?: string | undefined;
	    WebkitTextEmphasisPosition?: string | undefined;
	    WebkitTextEmphasisStyle?: string | undefined;
	    WebkitTextFillColor?: string | undefined;
	    WebkitTextOrientation?: "inherit" | "initial" | "mixed" | "-moz-initial" | "revert" | "unset" | "sideways" | "upright" | undefined;
	    WebkitTextSizeAdjust?: string | undefined;
	    WebkitTextStrokeColor?: string | undefined;
	    WebkitTextStrokeWidth?: string | number | undefined;
	    WebkitTouchCallout?: "default" | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitTransform?: string | undefined;
	    WebkitTransformOrigin?: string | number | undefined;
	    WebkitTransformStyle?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "flat" | "preserve-3d" | undefined;
	    WebkitTransitionDelay?: string | undefined;
	    WebkitTransitionDuration?: string | undefined;
	    WebkitTransitionProperty?: string | undefined;
	    WebkitTransitionTimingFunction?: string | undefined;
	    WebkitUserModify?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "read-only" | "read-write" | "read-write-plaintext-only" | undefined;
	    WebkitUserSelect?: "text" | "inherit" | "none" | "auto" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | "element" | "contain" | "-moz-none" | undefined;
	    WebkitWritingMode?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" | undefined;
	    MozAnimation?: string | number | undefined;
	    MozBorderImage?: string | number | undefined;
	    MozColumnRule?: string | number | undefined;
	    MozColumns?: string | number | undefined;
	    MozTransition?: string | undefined;
	    msContentZoomLimit?: string | undefined;
	    msContentZoomSnap?: string | undefined;
	    msFlex?: string | number | undefined;
	    msScrollLimit?: string | undefined;
	    msScrollSnapX?: string | undefined;
	    msScrollSnapY?: string | undefined;
	    msTransition?: string | undefined;
	    WebkitAnimation?: string | number | undefined;
	    WebkitBorderBefore?: string | number | undefined;
	    WebkitBorderImage?: string | number | undefined;
	    WebkitBorderRadius?: string | number | undefined;
	    WebkitColumnRule?: string | number | undefined;
	    WebkitColumns?: string | number | undefined;
	    WebkitFlex?: string | number | undefined;
	    WebkitFlexFlow?: string | undefined;
	    WebkitMask?: string | number | undefined;
	    WebkitTextEmphasis?: string | undefined;
	    WebkitTextStroke?: string | number | undefined;
	    WebkitTransition?: string | undefined;
	    boxAlign?: "center" | "inherit" | "end" | "baseline" | "initial" | "-moz-initial" | "revert" | "unset" | "stretch" | "start" | undefined;
	    boxDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "reverse" | undefined;
	    boxFlex?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    boxFlexGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    boxLines?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "multiple" | "single" | undefined;
	    boxOrdinalGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    boxOrient?: "inherit" | "initial" | "horizontal" | "vertical" | "-moz-initial" | "revert" | "unset" | "block-axis" | "inline-axis" | undefined;
	    boxPack?: "center" | "inherit" | "end" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | undefined;
	    clip?: string | undefined;
	    fontVariantAlternates?: string | undefined;
	    gridColumnGap?: string | number | undefined;
	    gridGap?: string | number | undefined;
	    gridRowGap?: string | number | undefined;
	    imeMode?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "active" | "disabled" | "inactive" | undefined;
	    offsetBlock?: string | number | undefined;
	    offsetBlockEnd?: string | number | undefined;
	    offsetBlockStart?: string | number | undefined;
	    offsetInline?: string | number | undefined;
	    offsetInlineEnd?: string | number | undefined;
	    offsetInlineStart?: string | number | undefined;
	    scrollSnapCoordinate?: string | number | undefined;
	    scrollSnapDestination?: string | number | undefined;
	    scrollSnapPointsX?: string | undefined;
	    scrollSnapPointsY?: string | undefined;
	    scrollSnapTypeX?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "mandatory" | "proximity" | undefined;
	    scrollSnapTypeY?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "mandatory" | "proximity" | undefined;
	    scrollbarTrackColor?: string | undefined;
	    textCombineHorizontal?: string | undefined;
	    KhtmlBoxAlign?: "center" | "inherit" | "end" | "baseline" | "initial" | "-moz-initial" | "revert" | "unset" | "stretch" | "start" | undefined;
	    KhtmlBoxDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "reverse" | undefined;
	    KhtmlBoxFlex?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    KhtmlBoxFlexGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    KhtmlBoxLines?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "multiple" | "single" | undefined;
	    KhtmlBoxOrdinalGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    KhtmlBoxOrient?: "inherit" | "initial" | "horizontal" | "vertical" | "-moz-initial" | "revert" | "unset" | "block-axis" | "inline-axis" | undefined;
	    KhtmlBoxPack?: "center" | "inherit" | "end" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | undefined;
	    KhtmlLineBreak?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "strict" | "anywhere" | "loose" | undefined;
	    KhtmlOpacity?: string | number | undefined;
	    KhtmlUserSelect?: "text" | "inherit" | "none" | "auto" | "initial" | "all" | "-moz-initial" | "revert" | "unset" | "element" | "contain" | "-moz-none" | undefined;
	    MozBackgroundClip?: string | undefined;
	    MozBackgroundInlinePolicy?: "slice" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "clone" | undefined;
	    MozBackgroundOrigin?: string | undefined;
	    MozBackgroundSize?: string | number | undefined;
	    MozBinding?: string | undefined;
	    MozBorderBottomColors?: string | undefined;
	    MozBorderLeftColors?: string | undefined;
	    MozBorderRadius?: string | number | undefined;
	    MozBorderRadiusBottomleft?: string | number | undefined;
	    MozBorderRadiusBottomright?: string | number | undefined;
	    MozBorderRadiusTopleft?: string | number | undefined;
	    MozBorderRadiusTopright?: string | number | undefined;
	    MozBorderRightColors?: string | undefined;
	    MozBorderTopColors?: string | undefined;
	    MozBoxAlign?: "center" | "inherit" | "end" | "baseline" | "initial" | "-moz-initial" | "revert" | "unset" | "stretch" | "start" | undefined;
	    MozBoxDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "reverse" | undefined;
	    MozBoxFlex?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    MozBoxOrdinalGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    MozBoxOrient?: "inherit" | "initial" | "horizontal" | "vertical" | "-moz-initial" | "revert" | "unset" | "block-axis" | "inline-axis" | undefined;
	    MozBoxPack?: "center" | "inherit" | "end" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | undefined;
	    MozBoxShadow?: string | undefined;
	    MozOpacity?: string | number | undefined;
	    MozOutline?: string | number | undefined;
	    MozOutlineColor?: string | undefined;
	    MozOutlineRadius?: string | number | undefined;
	    MozOutlineStyle?: string | undefined;
	    MozOutlineWidth?: string | number | undefined;
	    MozTextAlignLast?: "left" | "right" | "center" | "inherit" | "end" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | undefined;
	    MozTextBlink?: "blink" | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    MozTextDecorationColor?: string | undefined;
	    MozTextDecorationLine?: string | undefined;
	    MozTextDecorationStyle?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "solid" | "wavy" | undefined;
	    MozUserInput?: "inherit" | "none" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "disabled" | "enabled" | undefined;
	    MozWindowShadow?: "default" | "menu" | "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "sheet" | "tooltip" | undefined;
	    msImeMode?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "active" | "disabled" | "inactive" | undefined;
	    msScrollbarTrackColor?: string | undefined;
	    OAnimation?: string | number | undefined;
	    OAnimationDelay?: string | undefined;
	    OAnimationDirection?: string | undefined;
	    OAnimationDuration?: string | undefined;
	    OAnimationFillMode?: string | undefined;
	    OAnimationIterationCount?: string | number | undefined;
	    OAnimationName?: string | undefined;
	    OAnimationPlayState?: string | undefined;
	    OAnimationTimingFunction?: string | undefined;
	    OBackgroundSize?: string | number | undefined;
	    OBorderImage?: string | number | undefined;
	    OTransform?: string | undefined;
	    OTransition?: string | undefined;
	    OTransitionDelay?: string | undefined;
	    OTransitionDuration?: string | undefined;
	    OTransitionProperty?: string | undefined;
	    OTransitionTimingFunction?: string | undefined;
	    WebkitBoxAlign?: "center" | "inherit" | "end" | "baseline" | "initial" | "-moz-initial" | "revert" | "unset" | "stretch" | "start" | undefined;
	    WebkitBoxDirection?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "normal" | "reverse" | undefined;
	    WebkitBoxFlex?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitBoxFlexGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitBoxLines?: "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "multiple" | "single" | undefined;
	    WebkitBoxOrdinalGroup?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    WebkitBoxOrient?: "inherit" | "initial" | "horizontal" | "vertical" | "-moz-initial" | "revert" | "unset" | "block-axis" | "inline-axis" | undefined;
	    WebkitBoxPack?: "center" | "inherit" | "end" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | "justify" | undefined;
	    WebkitScrollSnapPointsX?: string | undefined;
	    WebkitScrollSnapPointsY?: string | undefined;
	    alignmentBaseline?: "inherit" | "alphabetic" | "hanging" | "ideographic" | "mathematical" | "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    baselineShift?: string | number | undefined;
	    clipRule?: "inherit" | "initial" | "nonzero" | "evenodd" | "-moz-initial" | "revert" | "unset" | undefined;
	    colorInterpolation?: "inherit" | "auto" | "initial" | "sRGB" | "linearRGB" | "-moz-initial" | "revert" | "unset" | undefined;
	    colorRendering?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "optimizeSpeed" | "optimizeQuality" | undefined;
	    dominantBaseline?: "inherit" | "alphabetic" | "hanging" | "ideographic" | "mathematical" | "auto" | "text-before-edge" | "middle" | "central" | "text-after-edge" | "initial" | "-moz-initial" | "revert" | "unset" | "no-change" | "reset-size" | "use-script" | undefined;
	    fill?: string | undefined;
	    fillOpacity?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    fillRule?: "inherit" | "initial" | "nonzero" | "evenodd" | "-moz-initial" | "revert" | "unset" | undefined;
	    floodColor?: string | undefined;
	    floodOpacity?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    glyphOrientationVertical?: string | number | undefined;
	    lightingColor?: string | undefined;
	    marker?: string | undefined;
	    markerEnd?: string | undefined;
	    markerMid?: string | undefined;
	    markerStart?: string | undefined;
	    shapeRendering?: "inherit" | "auto" | "initial" | "-moz-initial" | "revert" | "unset" | "geometricPrecision" | "optimizeSpeed" | "crispEdges" | undefined;
	    stopColor?: string | undefined;
	    stopOpacity?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    stroke?: string | undefined;
	    strokeDasharray?: string | number | undefined;
	    strokeDashoffset?: string | number | undefined;
	    strokeLinecap?: "inherit" | "initial" | "butt" | "round" | "square" | "-moz-initial" | "revert" | "unset" | undefined;
	    strokeLinejoin?: "inherit" | "initial" | "round" | "miter" | "bevel" | "-moz-initial" | "revert" | "unset" | undefined;
	    strokeMiterlimit?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    strokeOpacity?: number | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | undefined;
	    strokeWidth?: string | number | undefined;
	    textAnchor?: "inherit" | "end" | "middle" | "initial" | "-moz-initial" | "revert" | "unset" | "start" | undefined;
	    vectorEffect?: "inherit" | "none" | "initial" | "-moz-initial" | "revert" | "unset" | "non-scaling-stroke" | undefined;
	};

}
declare module '@elastic\eui\src\components\table\table_footer_cell' {
	import { FunctionComponent, TdHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { HorizontalAlignment } from '@elastic\eui\src\services';
	export type EuiTableFooterCellProps = CommonProps & TdHTMLAttributes<HTMLTableCellElement> & {
	    align?: HorizontalAlignment;
	    width?: string | number;
	};
	export const EuiTableFooterCell: FunctionComponent<EuiTableFooterCellProps>;

}
declare module '@elastic\eui\src\components\table\table_header' {
	import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiTableHeaderProps = CommonProps & HTMLAttributes<HTMLElement> & {
	    /**
	     * Children must be valid DOM structure residing within `<thead>`.
	     * Use `<td> | <th>` by default, or `<tr><th/></tr>` when `wrapWithTableRow=false`
	     */
	    children?: ReactNode;
	    /**
	     * Automatically adds a wrapping `<tr>` element around the children
	     */
	    wrapWithTableRow?: boolean;
	};
	export const EuiTableHeader: FunctionComponent<EuiTableHeaderProps>;

}
declare module '@elastic\eui\src\components\table\table_header_button' {
	import { ButtonHTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon';
	export type EuiTableHeaderButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
	    iconType?: IconType;
	};
	export const EuiTableHeaderButton: FunctionComponent<EuiTableHeaderButtonProps>;

}
declare module '@elastic\eui\src\components\table\table_header_cell' {
	import { FunctionComponent, ThHTMLAttributes } from 'react';
	import { CommonProps, NoArgCallback } from '@elastic\eui\src\components\common';
	import { HorizontalAlignment } from '@elastic\eui\src\services';
	export type TableHeaderCellScope = 'col' | 'row' | 'colgroup' | 'rowgroup';
	export type EuiTableHeaderCellProps = CommonProps & Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, 'align' | 'scope'> & {
	    align?: HorizontalAlignment;
	    /**
	     * _DEPRECATED: use `mobileOptions.show = false`_ Indicates if the
	     * column should not show for mobile users (typically hidden because a
	     * custom mobile header utilizes the column's contents)
	     */
	    hideForMobile?: boolean;
	    /**
	     * _DEPRECATED: use `mobileOptions.only = true`_ Indicates if the
	     * column was created to be the row's heading in mobile view (this
	     * column will be hidden at larger screens)
	     */
	    isMobileHeader?: boolean;
	    isSortAscending?: boolean;
	    isSorted?: boolean;
	    /**
	     * Mobile options for displaying differently at small screens
	     */
	    mobileOptions?: {
	        /**
	         * If false, will not render the column at all for mobile
	         */
	        show?: boolean;
	        /**
	         * Only show for mobile? If true, will not render the column at all
	         * for desktop
	         */
	        only?: boolean;
	    };
	    onSort?: NoArgCallback<void>;
	    scope?: TableHeaderCellScope;
	    width?: string | number;
	    description?: string;
	    /**
	     * Shows the sort indicator but removes the button
	     */
	    readOnly?: boolean;
	};
	export const EuiTableHeaderCell: FunctionComponent<EuiTableHeaderCellProps>;

}
declare module '@elastic\eui\src\components\table\table_header_cell_checkbox' {
	import { FunctionComponent, ThHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiTableHeaderCellCheckboxScope = 'col' | 'row' | 'colgroup' | 'rowgroup';
	export interface EuiTableHeaderCellCheckboxProps {
	    width?: string | number;
	    scope?: EuiTableHeaderCellCheckboxScope;
	}
	export const EuiTableHeaderCellCheckbox: FunctionComponent<CommonProps & ThHTMLAttributes<HTMLTableHeaderCellElement> & EuiTableHeaderCellCheckboxProps>;

}
declare module '@elastic\eui\src\components\pagination\pagination_button' {
	import { FunctionComponent } from 'react';
	import { ExclusiveUnion, PropsForAnchor, PropsForButton } from '@elastic\eui\src\components\common';
	import { EuiButtonEmptyProps } from '@elastic\eui\src\components\button';
	export type EuiPaginationButtonProps = EuiButtonEmptyProps & {
	    isActive?: boolean;
	    /**
	     * For ellipsis or other non-clickable buttons.
	     */
	    isPlaceholder?: boolean;
	    hideOnMobile?: boolean;
	    pageIndex: number;
	    totalPages?: number;
	}; type EuiPaginationButtonPropsForAnchor = PropsForAnchor<EuiPaginationButtonProps>; type EuiPaginationButtonPropsForButton = PropsForButton<EuiPaginationButtonProps>; type Props = ExclusiveUnion<EuiPaginationButtonPropsForAnchor, EuiPaginationButtonPropsForButton>;
	export const EuiPaginationButton: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\responsive\hide_for' {
	import { ReactNode, FunctionComponent } from 'react';
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint';
	export type EuiHideForBreakpoints = EuiBreakpointSize;
	export interface EuiHideForProps {
	    /**
	     * Required otherwise nothing ever gets returned
	     */
	    children: ReactNode;
	    /**
	     * List of all the responsive sizes to hide the children for.
	     * Array of #EuiBreakpointSize
	     */
	    sizes: EuiHideForBreakpoints[] | 'all' | 'none';
	}
	export const EuiHideFor: FunctionComponent<EuiHideForProps>;

}
declare module '@elastic\eui\src\components\responsive\show_for' {
	import { ReactNode, FunctionComponent } from 'react';
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint';
	export type EuiShowForBreakpoints = EuiBreakpointSize;
	export interface EuiShowForProps {
	    /**
	     * Required otherwise nothing ever gets returned
	     */
	    children: ReactNode;
	    /**
	     * List of all the responsive sizes to show the children for.
	     * Array of #EuiBreakpointSize
	     */
	    sizes: EuiShowForBreakpoints[] | 'all' | 'none';
	}
	export const EuiShowFor: FunctionComponent<EuiShowForProps>;

}
declare module '@elastic/eui' {
	export { EuiHideFor, EuiHideForProps } from '@elastic\eui\src\components\responsive\hide_for';
	export { EuiShowFor, EuiShowForProps } from '@elastic\eui\src\components\responsive\show_for';

}
declare module '@elastic\eui\src\components\pagination\pagination' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type PageClickHandler = (pageIndex: number) => void;
	export interface EuiPaginationProps {
	    /**
	     * The total number of pages.
	     */
	    pageCount?: number;
	    /**
	     * The current page using a zero based index.
	     * So if you set the activePage to 1, it will activate the second page.
	     */
	    activePage?: number;
	    onPageClick?: PageClickHandler;
	    /**
	     * If true, will only show next/prev arrows instead of page numbers.
	     */
	    compressed?: boolean;
	    /**
	     * If passed in, passes value through to each button to set aria-controls
	     */
	    'aria-controls'?: string;
	} type Props = CommonProps & HTMLAttributes<HTMLDivElement> & EuiPaginationProps;
	export const EuiPagination: FunctionComponent<Props>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiPagination, EuiPaginationProps } from '@elastic\eui\src\components\pagination\pagination';
	export { EuiPaginationButton, EuiPaginationButtonProps, } from '@elastic\eui\src\components\pagination\pagination_button';

}
declare module '@elastic\eui\src\components\table\table_pagination\table_pagination' {
	import { Component } from 'react';
	export type PageChangeHandler = (pageIndex: number) => void;
	export type ItemsPerPageChangeHandler = (pageSize: number) => void;
	export interface EuiTablePaginationProps {
	    activePage?: number;
	    hidePerPageOptions?: boolean;
	    itemsPerPage?: number;
	    itemsPerPageOptions?: number[];
	    onChangeItemsPerPage?: ItemsPerPageChangeHandler;
	    onChangePage?: PageChangeHandler;
	    pageCount?: number;
	    /**
	     * id of the table being controlled
	     */
	    'aria-controls'?: string;
	}
	interface State {
	    isPopoverOpen: boolean;
	}
	export class EuiTablePagination extends Component<EuiTablePaginationProps, State> {
	    state: {
	        isPopoverOpen: boolean;
	    };
	    onButtonClick: () => void;
	    closePopover: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\table\table_pagination' {
	export { EuiTablePagination, EuiTablePaginationProps, } from '@elastic\eui\src\components\table\table_pagination\table_pagination';

}
declare module '@elastic\eui\src\components\table\mobile\table_header_mobile' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const EuiTableHeaderMobile: FunctionComponent<CommonProps & HTMLAttributes<HTMLDivElement>>;

}
declare module '@elastic\eui\src\components\table\mobile\table_sort_mobile_item' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiTableSortMobileItemProps extends CommonProps {
	    /**
	     * Callback to know when an item has been clicked
	     */
	    onSort?: () => void;
	    /**
	     * Indicates current option is the sorted on column
	     */
	    isSorted?: boolean;
	    /**
	     * Indicates which direction the current column is sorted on
	     */
	    isSortAscending?: boolean;
	    ariaLabel?: string;
	}
	export const EuiTableSortMobileItem: FunctionComponent<EuiTableSortMobileItemProps>;

}
declare module '@elastic\eui\src\components\table\mobile\table_sort_mobile' {
	import { Component, ReactNode, Key } from 'react';
	import { PopoverAnchorPosition } from '@elastic\eui\src\components\popover';
	interface ItemProps {
	    name: ReactNode;
	    key?: Key;
	    onSort?: () => void;
	    isSorted?: boolean;
	    isSortAscending?: boolean;
	}
	export interface EuiTableSortMobileProps {
	    className?: string;
	    anchorPosition?: PopoverAnchorPosition;
	    items?: ItemProps[];
	}
	interface State {
	    isPopoverOpen: boolean;
	}
	export class EuiTableSortMobile extends Component<EuiTableSortMobileProps, State> {
	    state: {
	        isPopoverOpen: boolean;
	    };
	    onButtonClick: () => void;
	    closePopover: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\table\table_row' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiTableRowProps {
	    /**
	     * Indicates if the table has a single column of checkboxes for selecting
	     * rows (affects mobile only)
	     */
	    isSelectable?: boolean;
	    /**
	     * Indicates the current row has been selected
	     */
	    isSelected?: boolean;
	    /**
	     * Indicates if the table has a dedicated column for icon-only actions
	     * (affects mobile only)
	     */
	    hasActions?: boolean;
	    /**
	     * Indicates if the row will have an expanded row
	     */
	    isExpandable?: boolean;
	    /**
	     * Indicates if the row will be the expanded row
	     */
	    isExpandedRow?: boolean;
	} type Props = CommonProps & HTMLAttributes<HTMLTableRowElement> & EuiTableRowProps;
	export const EuiTableRow: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\table\table_row_cell' {
	import { CSSProperties, FunctionComponent, ReactNode, TdHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { HorizontalAlignment } from '@elastic\eui\src\services';
	interface EuiTableRowCellSharedPropsShape {
	    /**
	     * Horizontal alignment of the text in the cell
	     */
	    align?: HorizontalAlignment;
	    /**
	     * Don't allow line breaks within cells
	     */
	    showOnHover?: boolean;
	    /**
	     * Setting `textOnly` to `false` will break words unnecessarily on FF and
	     * IE.  To combat this problem on FF, wrap contents with the css utility
	     * `.eui-textBreakWord`.
	     */
	    textOnly?: boolean;
	    /**
	     * _Should only be used for action cells_
	     */
	    truncateText?: boolean;
	    width?: string | number;
	}
	interface EuiTableRowCellMobileOptionsShape {
	    /**
	     * If false, will not render the cell at all for mobile
	     */
	    show?: boolean;
	    /**
	     * Only show for mobile? If true, will not render the column at all for desktop
	     */
	    only?: boolean;
	    /**
	     * Custom render/children if different from desktop
	     */
	    render?: ReactNode;
	    /**
	     * The column's header for use in mobile view (automatically passed down
	     * when using `EuiBasicTable`).
	     * Or pass `false` to not show a header at all.
	     */
	    header?: ReactNode | boolean;
	    /**
	     * Increase text size compared to rest of cells
	     */
	    enlarge?: boolean;
	    /**
	     * Allocates 100% of the width of the container in mobile view
	     * (typically cells are contained to 50%)
	     */
	    fullWidth?: boolean;
	    /**
	     * Applies the value to the width of the cell in mobile view (typically 50%)
	     */
	    width?: CSSProperties['width'];
	}
	export interface EuiTableRowCellProps {
	    /**
	     * Indicates if the column is dedicated to icon-only actions (currently
	     * affects mobile only)
	     */
	    hasActions?: boolean;
	    /**
	     * _DEPRECATED: use `mobileOptions.header`_
	     * The column's header title for use in mobile view (will be added as a
	     * data-attr)
	     */
	    header?: string;
	    /**
	     * _DEPRECATED: use `mobileOptions.show = false`_
	     * Indicates if the column should not show for mobile users (typically
	     * hidden because a custom mobile header utilizes the column's contents)
	     */
	    hideForMobile?: boolean;
	    /**
	     * Indicates if the column is dedicated as the expandable row toggle
	     */
	    isExpander?: boolean;
	    /**
	     * _DEPRECATED: use `mobileOptions.fullWidth`_
	     * Allocates 100% of the width of the container in mobile view
	     * (typically cells are contained to 50%)
	     */
	    isMobileFullWidth?: boolean;
	    /**
	     * _DEPRECATED: use `mobileOptions.only = true & mobileOptions.header = * false`_
	     * Indicates if the column was created to be the row's heading in mobile
	     * view.  It won't display column's header inline and it the column will
	     * be hidden at larger screens)
	     */
	    isMobileHeader?: boolean;
	    /**
	     * Mobile options for displaying differently at small screens
	     */
	    mobileOptions?: EuiTableRowCellMobileOptionsShape & EuiTableRowCellSharedPropsShape;
	    /**
	     * Indicates whether the cell should be marked as the heading for its row
	     */
	    setScopeRow?: boolean;
	} type Props = CommonProps & TdHTMLAttributes<HTMLTableCellElement> & EuiTableRowCellSharedPropsShape & EuiTableRowCellProps;
	export const EuiTableRowCell: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\table\table_row_cell_checkbox' {
	import { FunctionComponent, TdHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const EuiTableRowCellCheckbox: FunctionComponent<CommonProps & TdHTMLAttributes<HTMLTableCellElement>>;

}
declare module '@elastic/eui' {
	export { EuiTable, EuiTableProps } from '@elastic\eui\src\components\table\table';
	export { EuiTableBody, EuiTableBodyProps } from '@elastic\eui\src\components\table\table_body';
	export { EuiTableFooter } from '@elastic\eui\src\components\table\table_footer';
	export { EuiTableFooterCell, EuiTableFooterCellProps, } from '@elastic\eui\src\components\table\table_footer_cell';
	export { EuiTableHeader, EuiTableHeaderProps } from '@elastic\eui\src\components\table\table_header';
	export { EuiTableHeaderButton, EuiTableHeaderButtonProps, } from '@elastic\eui\src\components\table\table_header_button';
	export { EuiTableHeaderCell, EuiTableHeaderCellProps, } from '@elastic\eui\src\components\table\table_header_cell';
	export { EuiTableHeaderCellCheckbox, EuiTableHeaderCellCheckboxProps, } from '@elastic\eui\src\components\table\table_header_cell_checkbox';
	export { EuiTablePagination, EuiTablePaginationProps, } from '@elastic\eui\src\components\table\table_pagination';
	export { EuiTableHeaderMobile } from '@elastic\eui\src\components\table\mobile\table_header_mobile';
	export { EuiTableSortMobile, EuiTableSortMobileProps, } from '@elastic\eui\src\components\table\mobile\table_sort_mobile';
	export { EuiTableSortMobileItem, EuiTableSortMobileItemProps, } from '@elastic\eui\src\components\table\mobile\table_sort_mobile_item';
	export { EuiTableRow, EuiTableRowProps } from '@elastic\eui\src\components\table\table_row';
	export { EuiTableRowCell, EuiTableRowCellProps } from '@elastic\eui\src\components\table\table_row_cell';
	export { EuiTableRowCellCheckbox } from '@elastic\eui\src\components\table\table_row_cell_checkbox';

}
declare module '@elastic\eui\src\components\basic_table\pagination_bar' {
	
	import { ItemsPerPageChangeHandler, PageChangeHandler } from '@elastic\eui\src\components\table\table_pagination\table_pagination';
	export interface Pagination {
	    /**
	     * The current page (zero-based) index
	     */
	    pageIndex: number;
	    /**
	     * The maximum number of items that can be shown in a single page
	     */
	    pageSize: number;
	    /**
	     * The total number of items the page is "sliced" of
	     */
	    totalItemCount: number;
	    /**
	     * Configures the page size dropdown options
	     */
	    pageSizeOptions?: number[];
	    /**
	     * Hides the page size dropdown
	     */
	    hidePerPageOptions?: boolean;
	}
	export interface PaginationBarProps {
	    pagination: Pagination;
	    /**
	     * id of the table being controlled
	     */
	    'aria-controls'?: string;
	    onPageSizeChange: ItemsPerPageChangeHandler;
	    onPageChange: PageChangeHandler;
	}
	export const defaults: {
	    pageSizeOptions: number[];
	};
	export const PaginationBar: ({ pagination, "aria-controls": ariaControls, onPageSizeChange, onPageChange, }: PaginationBarProps) => JSX.Element;

}
declare module '@elastic\eui\src\components\basic_table\table_types' {
	import { ReactElement, ReactNode, TdHTMLAttributes } from 'react';
	import { Direction, HorizontalAlignment } from '@elastic\eui\src\services';
	import { Pagination } from '@elastic\eui\src\components\basic_table\pagination_bar';
	import { Action } from '@elastic\eui\src\components\basic_table\action_types';
	import { Primitive } from '@elastic\eui\src\services\sort\comparators';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type ItemId<T> = string | number | ((item: T) => string);
	export type ItemIdResolved = string | number;
	export type EuiTableDataType = 'auto' | 'string' | 'number' | 'boolean' | 'date';
	export interface EuiTableFooterProps<T> {
	    items: T[];
	    pagination?: Pagination;
	}
	export interface EuiTableFieldDataColumnType<T> extends CommonProps, TdHTMLAttributes<HTMLTableDataCellElement> {
	    /**
	     * A field of the item (may be a nested field)
	     */
	    field: keyof T | string;
	    /**
	     * The display name of the column
	     */
	    name: ReactNode;
	    /**
	     * A description of the column (will be presented as a title over the column header)
	     */
	    description?: string;
	    /**
	     * Describes the data types of the displayed value (serves as a rendering hint for the table)
	     */
	    dataType?: EuiTableDataType;
	    /**
	     * A CSS width property. Hints for the required width of the column (e.g. "30%", "100px", etc..)
	     */
	    width?: string;
	    /**
	     * Defines whether the user can sort on this column. If a function is provided, this function returns the value to sort against
	     */
	    sortable?: boolean | ((item: T) => Primitive);
	    isExpander?: boolean;
	    textOnly?: boolean;
	    /**
	     * Defines the horizontal alignment of the column
	     */
	    align?: HorizontalAlignment;
	    /**
	     * Indicates whether this column should truncate its content when it doesn't fit
	     */
	    truncateText?: boolean;
	    isMobileHeader?: boolean;
	    mobileOptions?: {
	        show?: boolean;
	        only?: boolean;
	        render?: (item: T) => ReactNode;
	        header?: boolean;
	    };
	    hideForMobile?: boolean;
	    /**
	     * Describe a custom renderer function for the content
	     */
	    render?: (value: any, record: T) => ReactNode;
	    /**
	     * Content to display in the footer beneath this column
	     */
	    footer?: string | ReactElement | ((props: EuiTableFooterProps<T>) => ReactNode);
	    /**
	     * Disables the user's ability to change the sort but still shows the current direction
	     */
	    readOnly?: boolean;
	}
	export interface EuiTableComputedColumnType<T> extends CommonProps, TdHTMLAttributes<HTMLTableDataCellElement> {
	    /**
	     * A function that computes the value for each item and renders it
	     */
	    render: (record: T) => ReactNode;
	    /**
	     * The display name of the column
	     */
	    name?: ReactNode;
	    /**
	     * A description of the column (will be presented as a title over the column header
	     */
	    description?: string;
	    /**
	     * If provided, allows this column to be sorted on. Must return the value to sort against.
	     */
	    sortable?: (item: T) => Primitive;
	    /**
	     * A CSS width property. Hints for the required width of the column
	     */
	    width?: string;
	    /**
	     * Indicates whether this column should truncate its content when it doesn't fit
	     */
	    truncateText?: boolean;
	    isExpander?: boolean;
	    align?: HorizontalAlignment;
	    /**
	     * Disables the user's ability to change the sort but still shows the current direction
	     */
	    readOnly?: boolean;
	}
	export interface EuiTableActionsColumnType<T> {
	    /**
	     * An array of one of the objects: #DefaultItemAction or #CustomItemAction
	     */
	    actions: Array<Action<T>>;
	    /**
	     * The display name of the column
	     */
	    name?: ReactNode;
	    /**
	     * A description of the column (will be presented as a title over the column header
	     */
	    description?: string;
	    /**
	     * A CSS width property. Hints for the required width of the column
	     */
	    width?: string;
	}
	export interface EuiTableSortingType<T> {
	    /**
	     * Indicates the property/field to sort on
	     */
	    sort?: {
	        field: keyof T;
	        direction: Direction;
	    };
	    /**
	     * Enables/disables unsorting of table columns. Supported by EuiInMemoryTable.
	     */
	    allowNeutralSort?: boolean;
	    /**
	     * Enables the default sorting ability for each column.
	     */
	    enableAllColumns?: boolean;
	    /**
	     * Disables the user's ability to change the sort but still shows the current direction
	     */
	    readOnly?: boolean;
	}
	export interface EuiTableSelectionType<T> {
	    /**
	     * A callback that will be called whenever the item selection changes
	     */
	    onSelectionChange?: (selection: T[]) => void;
	    /**
	     * A callback that is called per item to indicate whether it is selectable
	     */
	    selectable?: (item: T) => boolean;
	    /**
	     * A callback that is called per item to retrieve a message for its selectable state.We display these messages as a tooltip on an unselectable checkbox
	     */
	    selectableMessage?: (selectable: boolean, item: T) => string;
	    initialSelected?: T[];
	}

}
declare module '@elastic\eui\src\components\basic_table\collapsed_item_actions' {
	import { Component, FocusEvent } from 'react';
	import { Action } from '@elastic\eui\src\components\basic_table\action_types';
	import { ItemIdResolved } from '@elastic\eui\src\components\basic_table\table_types';
	export interface CollapsedItemActionsProps<T> {
	    actions: Array<Action<T>>;
	    item: T;
	    itemId: ItemIdResolved;
	    actionEnabled: (action: Action<T>) => boolean;
	    className?: string;
	    onFocus?: (event: FocusEvent) => void;
	    onBlur?: () => void;
	}
	interface CollapsedItemActionsState {
	    popoverOpen: boolean;
	}
	export class CollapsedItemActions<T> extends Component<CollapsedItemActionsProps<T>, CollapsedItemActionsState> {
	    private popoverDiv;
	    state: {
	        popoverOpen: boolean;
	    };
	    togglePopover: () => void;
	    closePopover: () => void;
	    onPopoverBlur: () => void;
	    registerPopoverDiv: (popoverDiv: HTMLDivElement) => void;
	    componentWillUnmount(): void;
	    onClickItem: (onClickAction: (() => void) | undefined) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\basic_table\default_item_action' {
	import { ReactElement } from 'react';
	import { DefaultItemAction as Action } from '@elastic\eui\src\components\basic_table\action_types';
	export interface DefaultItemActionProps<T> {
	    action: Action<T>;
	    enabled: boolean;
	    item: T;
	    className?: string;
	}
	export const DefaultItemAction: <T extends {}>({ action, enabled, item, className, }: DefaultItemActionProps<T>) => ReactElement;

}
declare module '@elastic\eui\src\components\basic_table\custom_item_action' {
	import { Component } from 'react';
	import { CustomItemAction as Action } from '@elastic\eui\src\components\basic_table\action_types';
	export interface CustomItemActionProps<T> {
	    action: Action<T>;
	    enabled: boolean;
	    item: T;
	    className: string;
	    index?: number;
	}
	interface CustomItemActionState {
	    hasFocus: boolean;
	}
	export class CustomItemAction<T> extends Component<CustomItemActionProps<T>, CustomItemActionState> {
	    private mounted;
	    constructor(props: CustomItemActionProps<T>);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    onFocus: () => void;
	    onBlur: () => void;
	    hasFocus: () => boolean;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\basic_table\expanded_item_actions' {
	import { ReactElement } from 'react';
	import { Action } from '@elastic\eui\src\components\basic_table\action_types';
	import { ItemIdResolved } from '@elastic\eui\src\components\basic_table\table_types';
	export interface ExpandedItemActionsProps<T> {
	    actions: Array<Action<T>>;
	    itemId: ItemIdResolved;
	    item: T;
	    actionEnabled: (action: Action<T>) => boolean;
	    className?: string;
	}
	export const ExpandedItemActions: <T extends {}>({ actions, itemId, item, actionEnabled, className, }: ExpandedItemActionsProps<T>) => ReactElement;

}
declare module '@elastic\eui\src\components\delay_render\delay_render' {
	import { Component } from 'react';
	export interface EuiDelayRenderProps {
	    delay: number;
	}
	interface EuiDelayRenderState {
	    toggle: boolean;
	}
	export class EuiDelayRender extends Component<EuiDelayRenderProps, EuiDelayRenderState> {
	    static defaultProps: {
	        delay: number;
	    };
	    private delayID;
	    private toBeDelayed;
	    constructor(props: EuiDelayRenderProps);
	    shouldUpdate(): void;
	    startDelaying: () => void;
	    stopDelaying: () => void;
	    componentDidMount(): void;
	    shouldComponentUpdate(): boolean;
	    componentWillUnmount(): void;
	    componentDidUpdate(): void;
	    render(): {} | null | undefined;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiDelayRender, EuiDelayRenderProps } from '@elastic\eui\src\components\delay_render\delay_render';

}
declare module '@elastic\eui\src\components\basic_table\basic_table' {
	import { Component, HTMLAttributes, ReactNode } from 'react';
	import { Direction } from '@elastic\eui\src\services';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiTableProps } from '@elastic\eui\src\components\table';
	import { Pagination } from '@elastic\eui\src\components\basic_table\pagination_bar';
	import { EuiTableActionsColumnType, EuiTableComputedColumnType, EuiTableDataType, EuiTableFieldDataColumnType, ItemId, EuiTableSelectionType, EuiTableSortingType, ItemIdResolved } from '@elastic\eui\src\components\basic_table\table_types';
	interface ItemIdToExpandedRowMap {
	    [id: string]: ReactNode;
	}
	export function getItemId<T>(item: T, itemId?: ItemId<T>): any;
	export type EuiBasicTableColumn<T> = EuiTableFieldDataColumnType<T> | EuiTableComputedColumnType<T> | EuiTableActionsColumnType<T>;
	export interface Criteria<T> {
	    /**
	     * If the shown items represents a page (slice) into a bigger set, this describes this page
	     */
	    page?: {
	        index: number;
	        size: number;
	    };
	    /**
	     * If the shown items are sorted, this describes the sort criteria
	     */
	    sort?: {
	        field: keyof T;
	        direction: Direction;
	    };
	}
	export interface CriteriaWithPagination<T> extends Criteria<T> {
	    /**
	     * If the shown items represents a page (slice) into a bigger set, this describes this page
	     */
	    page: {
	        index: number;
	        size: number;
	    };
	} type CellPropsCallback<T> = (item: T, column: EuiBasicTableColumn<T>) => object; type RowPropsCallback<T> = (item: T) => object;
	interface BasicTableProps<T> extends Omit<EuiTableProps, 'onChange'> {
	    /**
	     * Describes how to extract a unique ID from each item, used for selections & expanded rows
	     */
	    itemId?: ItemId<T>;
	    /**
	     * Row expansion uses the itemId prop to identify each row
	     */
	    itemIdToExpandedRowMap?: ItemIdToExpandedRowMap;
	    /**
	     * A list of objects to who in the table - an item per row
	     */
	    items: T[];
	    /**
	     * Applied to `EuiTableRowCell`
	     */
	    cellProps?: object | CellPropsCallback<T>;
	    /**
	     * An array of one of the objects: #EuiTableFieldDataColumnType, #EuiTableComputedColumnType or #EuiTableActionsColumnType.
	     */
	    columns: Array<EuiBasicTableColumn<T>>;
	    /**
	     * Error message to display
	     */
	    error?: string;
	    /**
	     * Describes the content of the table. If not specified, the caption will be "This table contains {itemCount} rows."
	     */
	    tableCaption?: string;
	    /**
	     * Indicates which column should be used as the identifying cell in each row. Should match a "field" prop in FieldDataColumn
	     */
	    rowHeader?: string;
	    hasActions?: boolean;
	    isExpandable?: boolean;
	    isSelectable?: boolean;
	    /**
	     * Provides an infinite loading indicator
	     */
	    loading?: boolean;
	    /**
	     * Message to display if table is empty
	     */
	    noItemsMessage?: ReactNode;
	    /**
	     * Called whenever pagination or sorting changes (this property is required when either pagination or sorting is configured). See #Criteria or #CriteriaWithPagination
	     */
	    onChange?: (criteria: Criteria<T>) => void;
	    /**
	     * Configures #Pagination
	     */
	    pagination?: undefined;
	    /**
	     * If true, will convert table to cards in mobile view
	     */
	    responsive?: boolean;
	    /**
	     * Applied to `EuiTableRow`
	     */
	    rowProps?: object | RowPropsCallback<T>;
	    /**
	     * Configures #EuiTableSelectionType
	     */
	    selection?: EuiTableSelectionType<T>;
	    /**
	     * Configures #EuiTableSortingType
	     */
	    sorting?: EuiTableSortingType<T>;
	    /**
	     * Sets the table-layout CSS property. Note that auto tableLayout prevents truncateText from working properly.
	     */
	    tableLayout?: 'fixed' | 'auto';
	    /**
	     * Applied to table cells => Any cell using render function will set this to be false, leading to unnecessary word breaks. Apply textOnly: true in order to ensure it breaks properly
	     */
	    textOnly?: boolean;
	} type BasicTableWithPaginationProps<T> = Omit<BasicTableProps<T>, 'pagination' | 'onChange'> & {
	    pagination: Pagination;
	    onChange?: (criteria: CriteriaWithPagination<T>) => void;
	};
	export type EuiBasicTableProps<T> = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & (BasicTableProps<T> | BasicTableWithPaginationProps<T>);
	interface State<T> {
	    initialSelectionRendered: boolean;
	    selection: T[];
	}
	export class EuiBasicTable<T = any> extends Component<EuiBasicTableProps<T>, State<T>> {
	    static defaultProps: {
	        responsive: boolean;
	        tableLayout: string;
	        noItemsMessage: string;
	    };
	    static getDerivedStateFromProps<T>(nextProps: EuiBasicTableProps<T>, prevState: State<T>): {
	        selection: T[];
	    } | null;
	    private cleanups;
	    private tbody;
	    constructor(props: EuiBasicTableProps<T>);
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: EuiBasicTableProps<T>): void;
	    componentWillUnmount(): void;
	    getInitialSelection(): void;
	    setSelection(newSelection: T[]): void;
	    private setTbody;
	    private addLoadingListeners;
	    private removeLoadingListeners;
	    buildCriteria(props: EuiBasicTableProps<T>): Criteria<T>;
	    changeSelection(selection: T[]): void;
	    clearSelection(): void;
	    onPageSizeChange(size: number): void;
	    onPageChange(index: number): void;
	    onColumnSortChange(column: EuiBasicTableColumn<T>): void;
	    tableId: string;
	    render(): JSX.Element;
	    renderTable(): JSX.Element;
	    renderTableMobileSort(): JSX.Element | null;
	    renderTableCaption(): JSX.Element;
	    renderSelectAll: (isMobile: boolean) => JSX.Element | undefined;
	    renderTableHead(): JSX.Element;
	    renderTableFooter(): JSX.Element | null;
	    renderTableBody(): JSX.Element;
	    renderErrorBody(error: string): JSX.Element;
	    renderEmptyBody(): JSX.Element;
	    renderItemRow(item: T, rowIndex: number): JSX.Element;
	    renderItemSelectionCell(itemId: ItemId<T>, item: T, selected: boolean): JSX.Element;
	    renderItemActionsCell(itemId: ItemIdResolved, item: T, column: EuiTableActionsColumnType<T>, columnIndex: number): JSX.Element;
	    renderItemFieldDataCell(itemId: ItemId<T>, item: T, column: EuiTableFieldDataColumnType<T>, columnIndex: number, setScopeRow: boolean): JSX.Element;
	    renderItemComputedCell(itemId: ItemId<T>, item: T, column: EuiTableComputedColumnType<T>, columnIndex: number): JSX.Element;
	    renderItemCell(item: T, column: EuiBasicTableColumn<T>, key: string | number, content: ReactNode, setScopeRow: boolean): JSX.Element;
	    resolveColumnSortDirection: (column: EuiBasicTableColumn<T>) => "desc" | "asc" | undefined;
	    resolveColumnOnSort: (column: EuiBasicTableColumn<T>) => (() => void) | undefined;
	    getRendererForDataType(dataType?: EuiTableDataType): (value: any) => string;
	    getAlignForDataType(dataType?: EuiTableDataType): import ("@elastic\eui\src\components\button\button_content").ButtonContentIconSide;
	    renderPaginationBar(): JSX.Element | undefined;
	}
	export {};

}
declare module '@elastic\eui\src\components\search_bar\search_box' {
	import { Component } from 'react';
	import { EuiFieldSearchProps } from '@elastic\eui\src\components\form';
	export interface SchemaType {
	    strict?: boolean;
	    fields?: any;
	    flags?: string[];
	}
	export interface EuiSearchBoxProps extends EuiFieldSearchProps {
	    query: string;
	    onSearch: (queryText: string) => void;
	} type DefaultProps = Pick<EuiSearchBoxProps, 'placeholder' | 'incremental'>;
	export class EuiSearchBox extends Component<EuiSearchBoxProps> {
	    static defaultProps: DefaultProps;
	    private inputElement;
	    componentDidUpdate(oldProps: EuiSearchBoxProps): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\filter_group\filter_group' {
	import { HTMLAttributes, ReactNode, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFilterGroupProps = HTMLAttributes<HTMLDivElement> & CommonProps & {
	    children?: ReactNode;
	    /**
	     * Expand the whole bar to fill its parent's width
	     */
	    fullWidth?: boolean;
	};
	export const EuiFilterGroup: FunctionComponent<EuiFilterGroupProps>;

}
declare module '@elastic\eui\src\components\filter_group\filter_button' {
	import { FunctionComponent } from 'react';
	import { EuiButtonEmptyProps } from '@elastic\eui\src\components\button\button_empty';
	export type EuiFilterButtonProps = EuiButtonEmptyProps & {
	    /**
	     * Bolds the button if true
	     */
	    hasActiveFilters?: boolean;
	    /**
	     * Pass the total number of filters available and it will
	     * add a subdued notification badge showing the number
	     */
	    numFilters?: number;
	    /**
	     * Pass the number of selected filters and it will
	     * add a bright notification badge showing the number
	     */
	    numActiveFilters?: number;
	    /**
	     * Applies a visual state to the button useful when using with a popover.
	     */
	    isSelected?: boolean;
	    /**
	     * Should the button grow to fill its container, best used for dropdown buttons
	     */
	    grow?: boolean;
	    /**
	     * Remove border after button, good for opposite filters
	     */
	    withNext?: boolean;
	    /**
	     * _DEPRECATED: use `withNext`_
	     * Remove border after button, good for opposite filters
	     */
	    noDivider?: boolean;
	};
	export const EuiFilterButton: FunctionComponent<EuiFilterButtonProps>;

}
declare module '@elastic\eui\src\components\filter_group\filter_select_item' {
	import { ButtonHTMLAttributes, Component } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type FilterChecked = 'on' | 'off';
	export interface EuiFilterSelectItemProps extends CommonProps, ButtonHTMLAttributes<HTMLButtonElement> {
	    checked?: FilterChecked;
	    showIcons?: boolean;
	    isFocused?: boolean;
	}
	export class EuiFilterSelectItem extends Component<EuiFilterSelectItemProps> {
	    static defaultProps: {
	        showIcons: boolean;
	    };
	    buttonRef: HTMLButtonElement | null;
	    state: {
	        hasFocus: boolean;
	    };
	    focus: () => void;
	    hasFocus: () => boolean;
	    render(): JSX.Element;
	}

}
declare module '@elastic/eui' {
	export { EuiFilterGroup, EuiFilterGroupProps } from '@elastic\eui\src\components\filter_group\filter_group';
	export { EuiFilterButton, EuiFilterButtonProps } from '@elastic\eui\src\components\filter_group\filter_button';
	export { EuiFilterSelectItem, EuiFilterSelectItemProps, FilterChecked, } from '@elastic\eui\src\components\filter_group\filter_select_item';

}
declare module '@elastic\eui\src\components\search_bar\query\date_format' {
	import { Moment, MomentInput } from 'moment';
	export interface EuiMoment extends Moment {
	    __eui_granularity?: GranularityType;
	    __eui_format?: string;
	}
	export interface GranularityType {
	    es: 'd' | 'w' | 'M' | 'y';
	    js: 'day' | 'week' | 'month' | 'year';
	    isSame: (d1: Moment, d2: Moment) => boolean;
	    start: (date: Moment) => Moment;
	    startOfNext: (date: Moment) => Moment;
	    iso8601: (date: Moment) => string;
	}
	interface GranularitiesType {
	    DAY: GranularityType;
	    WEEK: GranularityType;
	    MONTH: GranularityType;
	    YEAR: GranularityType;
	}
	export const Granularity: GranularitiesType;
	export const printIso8601: (value: MomentInput) => string;
	export const dateGranularity: (parsedDate: EuiMoment) => GranularityType;
	export const dateFormat: Readonly<{
	    parse(value: string): EuiMoment;
	    print(date: EuiMoment | MomentInput, defaultGranularity?: undefined): string;
	}>;
	export {};

}
declare module '@elastic\eui\src\components\search_bar\query\date_value' {
	import { GranularityType } from '@elastic\eui\src\components\search_bar\query\date_format';
	import moment, { MomentInput } from 'moment';
	export const DATE_TYPE = "date";
	export interface DateValue {
	    type: 'date';
	    raw: MomentInput;
	    granularity: GranularityType | undefined;
	    text: string;
	    resolve: () => moment.Moment;
	}
	export const dateValuesEqual: (v1: DateValue, v2: DateValue) => boolean;
	export const isDateValue: (value: any) => value is DateValue;
	export const dateValue: (raw: MomentInput, granularity?: GranularityType, dateFormat?: any) => DateValue | undefined;
	export const dateValueParser: (format?: Readonly<{
	    parse(value: string): import ("@elastic\eui\src\components\search_bar\query\date_format").EuiMoment;
	    print(date: string | number | Date | moment.Moment | (string | number)[] | moment.MomentInputObject | import ("@elastic\eui\src\components\search_bar\query\date_format").EuiMoment | null | undefined, defaultGranularity?: undefined): string;
	}>) => (text: string) => DateValue | undefined;

}
declare module '@elastic\eui\src\components\search_bar\query\ast' {
	import { DateValue } from '@elastic\eui\src\components\search_bar\query\date_value';
	export type MatchType = 'must' | 'must_not';
	export type Value = string | number | boolean | DateValue;
	export interface IsClause {
	    type: 'is';
	    match?: MatchType;
	    flag: string;
	}
	export interface FieldClause {
	    type: 'field';
	    match?: MatchType;
	    operator: OperatorType;
	    field: string;
	    value: Value | Value[];
	}
	export interface TermClause {
	    type: 'term';
	    match?: MatchType;
	    value: Value;
	}
	export interface GroupClause {
	    type: 'group';
	    match: MatchType;
	    value: Clause[];
	}
	export type Clause = IsClause | FieldClause | TermClause | GroupClause;
	export const Match: Readonly<{
	    MUST: "must";
	    MUST_NOT: "must_not";
	    isMust(match: MatchType | undefined): boolean;
	    isMustClause(clause: Clause): boolean;
	}>;
	export type OperatorType = 'eq' | 'exact' | 'gt' | 'gte' | 'lt' | 'lte';
	export const Operator: Readonly<{
	    EQ: "eq";
	    EXACT: "exact";
	    GT: "gt";
	    GTE: "gte";
	    LT: "lt";
	    LTE: "lte";
	    isEQ(match: OperatorType | undefined): boolean;
	    isEQClause(clause: Clause): boolean;
	    isEXACT(match: OperatorType | undefined): boolean;
	    isEXACTClause(clause: Clause): boolean;
	    isRange(match: OperatorType | undefined): boolean;
	    isRangeClause(clause: Clause): boolean;
	    isGT(match: OperatorType | undefined): boolean;
	    isGTClause(clause: Clause): boolean;
	    isGTE(match: OperatorType | undefined): boolean;
	    isGTEClause(clause: Clause): boolean;
	    isLT(match: OperatorType | undefined): boolean;
	    isLTClause(clause: Clause): boolean;
	    isLTE(match: OperatorType | undefined): boolean;
	    isLTEClause(clause: Clause): boolean;
	}>;
	/**
	 * The AST structure is an array of clauses. There are 3 types of clauses that are supported:
	 *
	 * :term:
	 * Holds a VALUE and an OCCUR. The OCCUR indicates whether the value must match or must not match. Default
	 * clauses are not associated with any specific field - when executing the search, one can specify what are
	 * the default fields that the default clauses will be matched against.
	 *
	 * :field:
	 * Like the `term` clause, holds a VALUE and an MATCH, but this clause also specifies the field that the
	 * value will be matched against.
	 *
	 * :is:
	 * Holds a FLAG and indicates whether this flag must be applied or must not be applied. Typically this clause
	 * matches against boolean values of a record (e.g. "is:online", "is:internal", "is:on", etc..)
	 *
	 * This AST is immutable - every "mutating" operation returns a newly mutated AST.
	 */
	export class _AST {
	    private readonly _clauses;
	    private readonly _indexedClauses;
	    static create(clauses: Clause[]): _AST;
	    constructor(clauses?: Clause[]);
	    get clauses(): Clause[];
	    getTermClauses(): TermClause[];
	    getTermClause(value: Value): TermClause | undefined;
	    getFieldNames(): string[];
	    getFieldClauses(field?: string): FieldClause[];
	    getFieldClause(field: string, predicate: (c: FieldClause) => boolean): FieldClause | undefined;
	    hasOrFieldClause(field: string, value?: Value): boolean;
	    getOrFieldClause(field: string, value?: Value): FieldClause | undefined;
	    addOrFieldValue(field: string, value: Value, must?: boolean, operator?: OperatorType): _AST;
	    removeOrFieldValue(field: string, value: Value): _AST;
	    removeOrFieldClauses(field: string): _AST;
	    hasSimpleFieldClause(field: string, value?: Value): boolean;
	    getSimpleFieldClause(field: string, value?: Value): FieldClause | undefined;
	    addSimpleFieldValue(field: string, value: Value, must?: boolean, operator?: OperatorType): _AST;
	    removeSimpleFieldValue(field: string, value: Value): _AST;
	    removeSimpleFieldClauses(field: string): _AST;
	    getIsClauses(): IsClause[];
	    getIsClause(flag: string): IsClause;
	    removeIsClause(flag: string): _AST;
	    getGroupClauses(): GroupClause[];
	    /**
	     * Creates and returns a new AST with the given clause added to the current clauses. If
	     * the current clauses already include a similar clause, it will be (in-place) replaced by
	     * the given clause. Whether a clause is similar to the given one depends on the type of the clause.
	     * Two clauses are similar if:
	     *
	     * - they are both of the same type
	     * - if they are `default` clauses, they must have the same value
	     * - if they are `term` clauses, they must have the same fields and values
	     * - if they are `is` clauses, they must have the same flags
	     *
	     * The reasoning behind not including the `match` attributes of the clauses in the rules above, stems
	     * in the fact that the AST clauses are ANDed, and having two similar clauses with two different
	     * match attributes creates a logically contradicted AST (e.g. what does it mean to
	     * "(must have x) AND (must not have x)"?)
	     *
	     * note:  in-place replacement means the given clause will be placed in the same position as the one it
	     *        replaced
	     */
	    addClause(newClause: Clause): _AST;
	}
	export const AST: Readonly<{
	    Match: Readonly<{
	        MUST: "must";
	        MUST_NOT: "must_not";
	        isMust(match: MatchType | undefined): boolean;
	        isMustClause(clause: Clause): boolean;
	    }>;
	    Operator: Readonly<{
	        EQ: "eq";
	        EXACT: "exact";
	        GT: "gt";
	        GTE: "gte";
	        LT: "lt";
	        LTE: "lte";
	        isEQ(match: OperatorType | undefined): boolean;
	        isEQClause(clause: Clause): boolean;
	        isEXACT(match: OperatorType | undefined): boolean;
	        isEXACTClause(clause: Clause): boolean;
	        isRange(match: OperatorType | undefined): boolean;
	        isRangeClause(clause: Clause): boolean;
	        isGT(match: OperatorType | undefined): boolean;
	        isGTClause(clause: Clause): boolean;
	        isGTE(match: OperatorType | undefined): boolean;
	        isGTEClause(clause: Clause): boolean;
	        isLT(match: OperatorType | undefined): boolean;
	        isLTClause(clause: Clause): boolean;
	        isLTE(match: OperatorType | undefined): boolean;
	        isLTEClause(clause: Clause): boolean;
	    }>;
	    Term: Readonly<{
	        TYPE: "term";
	        isInstance: (clause: Clause) => clause is TermClause;
	        must: (value: Value) => {
	            type: "term";
	            value: Value;
	            match: "must";
	        };
	        mustNot: (value: Value) => {
	            type: "term";
	            value: Value;
	            match: "must_not";
	        };
	    }>;
	    Group: Readonly<{
	        TYPE: "group";
	        isInstance: (clause: Clause) => clause is GroupClause;
	        must: (value: Clause[]) => {
	            type: "group";
	            value: Clause[];
	            match: "must";
	        };
	        mustNot: (value: Clause[]) => {
	            type: "group";
	            value: Clause[];
	            match: "must_not";
	        };
	    }>;
	    Field: Readonly<{
	        TYPE: "field";
	        isInstance: (clause: Clause) => clause is FieldClause;
	        must: {
	            eq: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must";
	                operator: "eq";
	            };
	            exact: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must";
	                operator: "exact";
	            };
	            gt: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must";
	                operator: "gt";
	            };
	            gte: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must";
	                operator: "gte";
	            };
	            lt: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must";
	                operator: "lt";
	            };
	            lte: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must";
	                operator: "lte";
	            };
	        };
	        mustNot: {
	            eq: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must_not";
	                operator: "eq";
	            };
	            exact: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must_not";
	                operator: "exact";
	            };
	            gt: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must_not";
	                operator: "gt";
	            };
	            gte: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must_not";
	                operator: "gte";
	            };
	            lt: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must_not";
	                operator: "lt";
	            };
	            lte: (field: string, value: Value | Value[]) => {
	                type: "field";
	                field: string;
	                value: string | number | boolean | DateValue | Value[];
	                match: "must_not";
	                operator: "lte";
	            };
	        };
	    }>;
	    Is: Readonly<{
	        TYPE: "is";
	        isInstance: (clause: Clause) => clause is IsClause;
	        must: (flag: string) => {
	            type: "is";
	            flag: string;
	            match: "must";
	        };
	        mustNot: (flag: string) => {
	            type: "is";
	            flag: string;
	            match: "must_not";
	        };
	    }>;
	    create: (clauses: Clause[]) => _AST;
	}>;

}
declare module '@elastic\eui\src\components\search_bar\query\default_syntax' {
	import { _AST, Clause } from '@elastic\eui\src\components\search_bar\query\ast';
	export interface ParseOptions {
	    dateFormat?: any;
	    schema?: any;
	    escapeValue?: (value: any) => string;
	}
	export type Syntax = Readonly<{
	    printClause: (clause: Clause, text: string, options: any) => string;
	    print: (ast: _AST, options?: {}) => string;
	    parse: (query: string, options?: ParseOptions) => _AST;
	}>;
	export const defaultSyntax: Syntax;

}
declare module '@elastic\eui\src\components\search_bar\query\operators' {
	import moment from 'moment';
	import { Value } from '@elastic\eui\src\components\search_bar\query\ast';
	export type FieldValue = string | number | boolean | any[] | Date | moment.Moment | null | undefined;
	export type ClauseValue = Value | Date | moment.Moment | null | undefined; type Options = Partial<{
	    exactMatch: boolean;
	    ignoreCase: boolean;
	}>;
	export const eq: (fieldValue: FieldValue, clauseValue: ClauseValue, options?: Options) => boolean;
	export const exact: (fieldValue: FieldValue, clauseValue: ClauseValue, options?: {}) => boolean;
	export const gt: (fieldValue: FieldValue, clauseValue: ClauseValue) => boolean;
	export const gte: (fieldValue: FieldValue, clauseValue: ClauseValue) => boolean;
	export const lt: (fieldValue: FieldValue, clauseValue: ClauseValue) => boolean;
	export const lte: (fieldValue: FieldValue, clauseValue: ClauseValue) => boolean;
	export {};

}
declare module '@elastic\eui\src\components\search_bar\query\execute_ast' {
	import { _AST, Clause, IsClause, MatchType, Value } from '@elastic\eui\src\components\search_bar\query\ast';
	interface Explain {
	    hit: boolean;
	    type: Clause['type'];
	    field?: string;
	    value?: Value | Value[];
	    flag?: string;
	    match?: MatchType;
	    operator?: any;
	} const defaultIsClauseMatcher: <T>(item: T, clause: IsClause, explain?: Explain[] | undefined) => boolean;
	export const createFilter: <T extends {}>(ast: _AST, defaultFields: string[] | undefined, isClauseMatcher?: <T_1>(item: T_1, clause: IsClause, explain?: Explain[] | undefined) => boolean, explain?: boolean) => (item: T) => boolean;
	interface Options {
	    isClauseMatcher?: typeof defaultIsClauseMatcher;
	    defaultFields?: string[];
	    explain?: boolean;
	}
	export function executeAst<T>(ast: _AST, items: T[], options?: Options): T[];
	export {};

}
declare module '@elastic\eui\src\components\search_bar\query\ast_to_es_query_dsl' {
	import { _AST, OperatorType, Value } from '@elastic\eui\src\components\search_bar\query\ast';
	export interface QueryContainer {
	    bool?: BoolQuery;
	    match_all?: {};
	    match?: object;
	    match_phrase?: object;
	    range?: object;
	    term?: object;
	    simple_query_string?: object;
	}
	interface BoolQuery {
	    must?: QueryContainer[];
	    must_not?: QueryContainer[];
	    should?: QueryContainer[];
	} type Options = Partial<{
	    defaultFields: string[];
	    extraMustQueries: QueryContainer[];
	    extraMustNotQueries: QueryContainer[];
	    termValuesToQuery: (terms: Value[], options: {}) => QueryContainer;
	    fieldValuesToQuery: (terms: string, options: {}) => QueryContainer;
	    isFlagToQuery: (flag: string, on: boolean) => QueryContainer;
	}>;
	export const _termValuesToQuery: (values: Value[], options: Options) => {
	    simple_query_string: {
	        query: string;
	        fields?: string[] | undefined;
	    };
	} | undefined;
	export const _fieldValuesToQuery: (field: string, operations: {
	    exact: Value[];
	    eq: Value[];
	    gt: Value[];
	    gte: Value[];
	    lt: Value[];
	    lte: Value[];
	}, andOr: 'and' | 'or') => QueryContainer;
	export const _isFlagToQuery: (flag: string, on: boolean) => {
	    term: {
	        [x: string]: boolean;
	    };
	};
	export const astToEsQueryDsl: (ast: _AST, options?: {}) => QueryContainer;
	export {};

}
declare module '@elastic\eui\src\components\search_bar\query\ast_to_es_query_string' {
	import { _AST } from '@elastic\eui\src\components\search_bar\query\ast';
	export const astToEsQueryString: (ast: _AST) => string;

}
declare module '@elastic\eui\src\components\search_bar\query\query' {
	import { ParseOptions, Syntax } from '@elastic\eui\src\components\search_bar\query\default_syntax';
	import { _AST, Clause, OperatorType, Value } from '@elastic\eui\src\components\search_bar\query\ast';
	/**
	 * This is the consumer interface for the query - it's effectively a wrapper construct around
	 * the AST and some of its related utility functions (e.g. parsing, text representation, executing, etc...)
	 * It is immutable - all mutating operations return a new (mutated) query instance.
	 */
	export class Query {
	    static parse(text: string, options?: ParseOptions, syntax?: Syntax): Query;
	    static isMust(clause: Clause): boolean;
	    static MATCH_ALL: Query;
	    static isTerm(clause: Clause): boolean;
	    static isIs(clause: Clause): boolean;
	    static isField(clause: Clause): boolean;
	    ast: _AST;
	    text: string;
	    private syntax;
	    constructor(ast: _AST, syntax?: Syntax, text?: string);
	    hasSimpleFieldClause(field: string, value?: string): boolean;
	    getSimpleFieldClause(field: string, value?: Value): import ("@elastic\eui\src\components\search_bar\query\ast").FieldClause | undefined;
	    removeSimpleFieldClauses(field: string): Query;
	    addSimpleFieldValue(field: string, value: Value, must?: boolean, operator?: OperatorType): Query;
	    removeSimpleFieldValue(field: string, value: Value): Query;
	    hasOrFieldClause(field: string, value?: Value): boolean;
	    getOrFieldClause(field: string, value?: Value): import ("@elastic\eui\src\components\search_bar\query\ast").FieldClause | undefined;
	    addOrFieldValue(field: string, value: Value, must?: boolean, operator?: OperatorType): Query;
	    removeOrFieldValue(field: string, value: Value): Query;
	    removeOrFieldClauses(field: string): Query;
	    hasIsClause(flag: string): boolean;
	    getIsClause(flag: string): import ("@elastic\eui\src\components\search_bar\query\ast").IsClause;
	    addMustIsClause(flag: string): Query;
	    addMustNotIsClause(flag: string): Query;
	    removeIsClause(flag: string): Query;
	    /**
	     * Executes this query over the given iterable item and returns
	     * an new array of all items that matched this query. Options:
	     *
	     * defaultFields: string[]
	     *
	     *    An array of field names to match the default clauses against. When not specified, the query
	     *    will pick up all the string fields of each record and try to match against those.
	     *
	     * isClauseMatcher?: (record: any, flag: string, applied: boolean, explain?: []) => boolean
	     *
	     *    By default the 'is' clauses will try to match against boolean fields - where the flag of the clause
	     *    indicates the field name. You can change this behaviour by providing this matcher function for the
	     *    is clause. For example, if the object has a `tags` field, one can create a matcher that checks if
	     *    an object has a specific tag (e.g. "is:marketing", "is:kitchen", etc..)
	     *
	     * explain?: boolean
	     *
	     *    When set to `true`, each item in the returns array will have an `__explain` field that will hold
	     *    information about why the objects matched the query (default to `false`, mainly/only useful for
	     *    debugging)
	     */
	    static execute<T>(query: string | Query, items: T[], options?: {}): T[];
	    /**
	     * Builds and returns an Elasticsearch query out this query. Options:
	     *
	     * defaultFields?: string[]
	     *
	     *    An array of field names to match the default clauses against. When not specified, the query
	     *    will pick up all the string fields of each record and try to match against those.
	     *
	     * isToQuery?: (flag: string, on: boolean) => Object (elasticsearch query object)
	     *
	     *    By default, "is" clauses will be translated to a term query where the flag is the field
	     *    and the "on" value will be the value of the field. This function lets you change this default
	     *    translation and provide your own custom one.
	     *
	     * termValuesToQuery?: (values: string[]) => Object (elasticsearch query object)
	     *
	     *    By default, "term" clauses will be translated to a "simple_query_string" query where all
	     *    the values serve as terms in the query string. This function lets you change this default
	     *    translation and provide your own custom one.
	     *
	     * fieldValuesToAndQuery?: (field: string, values: string[]) => Object (elasticsearch query object)
	     *
	     *    By default, "field" clauses will be translated to a match query where all the values serve as
	     *    terms in the query(the operator is AND). This function lets you change this default translation
	     *    and provide your own custom one.
	     */
	    static toESQuery(query: string | Query, options?: {}): import ("@elastic\eui\src\components\search_bar\query\ast_to_es_query_dsl").QueryContainer;
	    static toESQueryString(query: string | Query): string;
	}

}
declare module '@elastic\eui\src\components\search_bar\query' {
	export { Query } from '@elastic\eui\src\components\search_bar\query\query';
	export { AST } from '@elastic\eui\src\components\search_bar\query\ast';

}
declare module '@elastic\eui\src\components\search_bar\filters\is_filter' {
	import { Component } from 'react';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	import { Clause } from '@elastic\eui\src\components\search_bar\query\ast';
	export interface IsFilterConfigType {
	    type: 'is';
	    field: string;
	    name: string;
	    negatedName?: string;
	    available?: () => boolean;
	}
	export interface IsFilterProps {
	    index: number;
	    config: IsFilterConfigType;
	    query: Query;
	    onChange: (value: Query) => void;
	}
	export class IsFilter extends Component<IsFilterProps> {
	    resolveDisplay(clause: Clause): {
	        hasActiveFilters: boolean;
	        name: string;
	    };
	    valueChanged(field: string, checked: boolean): void;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\search_bar\filters\field_value_selection_filter' {
	import React, { Component, ReactNode } from 'react';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	import { Clause, OperatorType, Value } from '@elastic\eui\src\components\search_bar\query\ast';
	export interface FieldValueOptionType {
	    field?: string;
	    value: Value;
	    name?: string;
	    view?: ReactNode;
	} type OptionsLoader = () => Promise<FieldValueOptionType[]>; type OptionsFilter = (name: string, query: string, options?: FieldValueOptionType[]) => boolean; type MultiSelect = boolean | 'and' | 'or';
	export interface FieldValueSelectionFilterConfigType {
	    type: 'field_value_selection';
	    field?: string;
	    name: string;
	    /**
	     * See #FieldValueOptionType
	     */
	    options: FieldValueOptionType[] | OptionsLoader;
	    filterWith?: 'prefix' | 'includes' | OptionsFilter;
	    cache?: number;
	    multiSelect?: MultiSelect;
	    loadingMessage?: string;
	    noOptionsMessage?: string;
	    searchThreshold?: number;
	    available?: () => boolean;
	    autoClose?: boolean;
	    operator?: OperatorType;
	}
	export interface FieldValueSelectionFilterProps {
	    index: number;
	    config: FieldValueSelectionFilterConfigType;
	    query: Query;
	    onChange: (query: Query) => void;
	}
	interface State {
	    popoverOpen: boolean;
	    error: string | null;
	    options: {
	        all: FieldValueOptionType[];
	        shown: FieldValueOptionType[];
	    } | null;
	    cachedOptions?: FieldValueOptionType[] | null;
	    activeItems: FieldValueOptionType[];
	}
	export class FieldValueSelectionFilter extends Component<FieldValueSelectionFilterProps, State> {
	    private readonly selectItems;
	    private searchInput;
	    constructor(props: FieldValueSelectionFilterProps);
	    closePopover(): void;
	    onButtonClick(): void;
	    loadOptions(): void;
	    filterOptions(q?: string): void;
	    getOptionFilter(): OptionsFilter;
	    resolveOptionsLoader: () => OptionsLoader;
	    resolveOptionName(option: FieldValueOptionType): string;
	    onOptionClick(field: string, value: Value, checked: 'on' | 'off' | undefined): void;
	    onKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLButtonElement>): void;
	    resolveMultiSelect(): MultiSelect;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: FieldValueSelectionFilterProps): void;
	    render(): JSX.Element;
	    renderSearchBox(): JSX.Element | undefined;
	    renderContent(field: string | undefined, query: Query, config: FieldValueSelectionFilterConfigType, multiSelect: MultiSelect): JSX.Element | undefined;
	    resolveChecked(clause: Clause | undefined): 'on' | 'off' | undefined;
	    renderLoader(): JSX.Element;
	    renderError(message: string): JSX.Element;
	    renderNoOptions(): JSX.Element;
	    isActiveField(field: string | undefined): boolean;
	}
	export {};

}
declare module '@elastic\eui\src\components\search_bar\filters\field_value_toggle_filter' {
	import { Component } from 'react';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	import { Clause, OperatorType, Value } from '@elastic\eui\src\components\search_bar\query\ast';
	export interface FieldValueToggleFilterConfigType {
	    type: 'field_value_toggle';
	    field: string;
	    value: Value;
	    name: string;
	    negatedName?: string;
	    available?: () => boolean;
	    operator?: OperatorType;
	}
	export interface FieldValueToggleFilterProps {
	    index: number;
	    config: FieldValueToggleFilterConfigType;
	    query: Query;
	    onChange: (value: Query) => void;
	}
	export class FieldValueToggleFilter extends Component<FieldValueToggleFilterProps> {
	    resolveDisplay(clause: Clause | undefined): {
	        hasActiveFilters: boolean;
	        name: string;
	    };
	    valueChanged(checked: boolean): void;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\search_bar\filters\field_value_toggle_group_filter' {
	import { Component } from 'react';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	import { OperatorType } from '@elastic\eui\src\components\search_bar\query\ast';
	export interface FieldValueToggleGroupFilterItemType {
	    value: string | number | boolean;
	    name: string;
	    negatedName?: string;
	    operator?: OperatorType;
	}
	export interface FieldValueToggleGroupFilterConfigType {
	    type: 'field_value_toggle_group';
	    field: string;
	    /**
	     * See #FieldValueToggleGroupFilterItemType
	     */
	    items: FieldValueToggleGroupFilterItemType[];
	    available?: () => boolean;
	}
	export interface FieldValueToggleGroupFilterProps {
	    index: number;
	    config: FieldValueToggleGroupFilterConfigType;
	    query: Query;
	    onChange: (value: Query) => void;
	}
	export class FieldValueToggleGroupFilter extends Component<FieldValueToggleGroupFilterProps> {
	    resolveDisplay(config: FieldValueToggleGroupFilterConfigType, query: Query, item: FieldValueToggleGroupFilterItemType): {
	        active: boolean;
	        name: string;
	    };
	    valueChanged(item: FieldValueToggleGroupFilterItemType, active: boolean): void;
	    render(): JSX.Element[];
	}

}
declare module '@elastic\eui\src\components\search_bar\filters\filters' {
	
	import { IsFilterConfigType } from '@elastic\eui\src\components\search_bar\filters\is_filter';
	import { FieldValueSelectionFilterConfigType } from '@elastic\eui\src\components\search_bar\filters\field_value_selection_filter';
	import { FieldValueToggleFilterConfigType } from '@elastic\eui\src\components\search_bar\filters\field_value_toggle_filter';
	import { FieldValueToggleGroupFilterConfigType } from '@elastic\eui\src\components\search_bar\filters\field_value_toggle_group_filter';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	export const createFilter: (index: number, config: SearchFilterConfig, query: Query, onChange: (query: Query) => void) => JSX.Element;
	export type SearchFilterConfig = IsFilterConfigType | FieldValueSelectionFilterConfigType | FieldValueToggleFilterConfigType | FieldValueToggleGroupFilterConfigType;

}
declare module '@elastic\eui\src\components\search_bar\filters' {
	export { createFilter, SearchFilterConfig } from '@elastic\eui\src\components\search_bar\filters\filters';
	export { FieldValueOptionType } from '@elastic\eui\src\components\search_bar\filters\field_value_selection_filter';

}
declare module '@elastic\eui\src\components\search_bar\search_filters' {
	import { Component } from 'react';
	import { SearchFilterConfig } from '@elastic\eui\src\components\search_bar\filters';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	export { SearchFilterConfig } from '@elastic\eui\src\components\search_bar\filters';
	interface EuiSearchFiltersProps {
	    query: Query;
	    onChange: (query: Query) => void;
	    filters: SearchFilterConfig[];
	} type DefaultProps = Pick<EuiSearchFiltersProps, 'filters'>;
	export class EuiSearchFilters extends Component<EuiSearchFiltersProps> {
	    static defaultProps: DefaultProps;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\search_bar\search_bar' {
	import { Component, ReactElement } from 'react';
	import { SchemaType } from '@elastic\eui\src\components\search_bar\search_box';
	import { SearchFilterConfig } from '@elastic\eui\src\components\search_bar\search_filters';
	import { Query } from '@elastic\eui\src\components\search_bar\query';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFieldSearchProps } from '@elastic\eui\src\components\form\field_search';
	export { Query, AST as Ast } from '@elastic\eui\src\components\search_bar\query';
	export type QueryType = Query | string; type Tools = ReactElement | ReactElement[];
	interface ArgsWithQuery {
	    query: Query;
	    queryText: string;
	    error: null;
	}
	interface ArgsWithError {
	    query: null;
	    queryText: string;
	    error: Error;
	}
	export interface EuiSearchBarProps extends CommonProps {
	    onChange?: (args: ArgsWithQuery | ArgsWithError) => void | boolean;
	    /**
	     The initial query the bar will hold when first mounted
	     */
	    defaultQuery?: QueryType;
	    /**
	     If you wish to use the search bar as a controlled component, continuously pass the query via this prop.
	     */
	    query?: QueryType;
	    /**
	     Configures the search box. Set `placeholder` to change the placeholder text in the box and `incremental` to support incremental (as you type) search.
	     */
	    box?: EuiFieldSearchProps & {
	        schema?: SchemaType | boolean;
	    };
	    /**
	     An array of search filters. See #SearchFilterConfig.
	     */
	    filters?: SearchFilterConfig[];
	    /**
	     * Tools which go to the left of the search bar.
	     */
	    toolsLeft?: Tools;
	    /**
	     * Tools which go to the right of the search bar.
	     */
	    toolsRight?: Tools;
	    /**
	     * Date formatter to use when parsing date values
	     */
	    dateFormat?: object;
	}
	interface State {
	    query: Query;
	    queryText: string;
	    error: null | Error;
	} type StateWithOptionalQuery = Omit<State, 'query'> & {
	    query: Query | null;
	};
	export class EuiSearchBar extends Component<EuiSearchBarProps, State> {
	    static Query: typeof Query;
	    constructor(props: EuiSearchBarProps);
	    static getDerivedStateFromProps(nextProps: EuiSearchBarProps, prevState: State): State | null;
	    notifyControllingParent(newState: StateWithOptionalQuery): void;
	    onSearch: (queryText: string) => void;
	    onFiltersChange: (query: Query) => void;
	    renderTools(tools?: Tools): JSX.Element | JSX.Element[] | undefined;
	    render(): JSX.Element;
	}

}
declare module '@elastic/eui' {
	export { EuiSearchBar, EuiSearchBarProps, QueryType, Query, Ast, } from '@elastic\eui\src\components\search_bar\search_bar';
	export { SearchFilterConfig } from '@elastic\eui\src\components\search_bar\search_filters';
	export { FieldValueOptionType } from '@elastic\eui\src\components\search_bar\filters\field_value_selection_filter';

}
declare module '@elastic\eui\src\components\basic_table\in_memory_table' {
	import React, { Component, ReactNode } from 'react';
	import { EuiBasicTable, Criteria, EuiBasicTableProps, CriteriaWithPagination } from '@elastic\eui\src\components\basic_table\basic_table';
	import { PropertySort } from '@elastic\eui\src\services';
	import { Direction } from '@elastic\eui\src\services\sort';
	import { Query } from '@elastic\eui\src\components\search_bar';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiSearchBarProps } from '@elastic\eui\src\components\search_bar\search_bar';
	import { SchemaType } from '@elastic\eui\src\components\search_bar\search_box';
	interface onChangeArgument {
	    query: Query | null;
	    queryText: string;
	    error: Error | null;
	}
	export type Search = boolean | EuiSearchBarProps;
	interface PaginationOptions {
	    pageSizeOptions?: number[];
	    hidePerPageOptions?: boolean;
	    initialPageIndex?: number;
	    initialPageSize?: number;
	    pageIndex?: number;
	    pageSize?: number;
	} type Pagination = boolean | PaginationOptions;
	interface SortingOptions {
	    sort: PropertySort;
	} type Sorting = boolean | SortingOptions; type InMemoryTableProps<T> = Omit<EuiBasicTableProps<T>, 'pagination' | 'sorting' | 'noItemsMessage'> & {
	    message?: ReactNode;
	    /**
	     * Configures #Search.
	     */
	    search?: Search;
	    pagination?: undefined;
	    sorting?: Sorting;
	    /**
	     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
	     */
	    allowNeutralSort?: boolean;
	    /**
	     * Callback for when table pagination or sorting is changed. This is meant to be informational only, and not used to set any state as the in-memory table already manages this state. See #Criteria or #CriteriaWithPagination.
	     */
	    onTableChange?: (nextValues: Criteria<T>) => void;
	    executeQueryOptions?: {
	        defaultFields?: string[];
	        isClauseMatcher?: (...args: any) => boolean;
	        explain?: boolean;
	    };
	    /**
	     * Insert content between the search bar and table components.
	     */
	    childrenBetween?: ReactNode;
	}; type InMemoryTablePropsWithPagination<T> = Omit<InMemoryTableProps<T>, 'pagination' | 'onTableChange'> & {
	    pagination: Pagination;
	    onTableChange?: (nextValues: CriteriaWithPagination<T>) => void;
	};
	export type EuiInMemoryTableProps<T> = CommonProps & (InMemoryTableProps<T> | InMemoryTablePropsWithPagination<T>);
	interface State<T> {
	    prevProps: {
	        items: T[];
	        sortName: ReactNode;
	        sortDirection?: Direction;
	        search?: Search;
	    };
	    search?: Search;
	    query: Query | null;
	    pageIndex: number;
	    pageSize?: number;
	    pageSizeOptions?: number[];
	    sortName: ReactNode;
	    sortDirection?: Direction;
	    allowNeutralSort: boolean;
	    hidePerPageOptions: boolean | undefined;
	}
	export class EuiInMemoryTable<T> extends Component<EuiInMemoryTableProps<T>, State<T>> {
	    static defaultProps: {
	        responsive: boolean;
	        tableLayout: string;
	    };
	    tableRef: React.RefObject<EuiBasicTable>;
	    static getDerivedStateFromProps<T>(nextProps: EuiInMemoryTableProps<T>, prevState: State<T>): State<T> | null;
	    constructor(props: EuiInMemoryTableProps<T>);
	    setSelection(newSelection: T[]): void;
	    onTableChange: ({ page, sort }: Criteria<T>) => void;
	    onQueryChange: ({ query, queryText, error }: onChangeArgument) => void;
	    renderSearchBar(): JSX.Element | undefined;
	    resolveSearchSchema(): SchemaType;
	    getItemSorter(): (a: T, b: T) => number;
	    getItems(): {
	        items: T[];
	        totalItemCount: number;
	    };
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiBasicTable, EuiBasicTableProps, EuiBasicTableColumn, Criteria, CriteriaWithPagination, } from '@elastic\eui\src\components\basic_table\basic_table';
	export { EuiInMemoryTable, EuiInMemoryTableProps, Search, } from '@elastic\eui\src\components\basic_table\in_memory_table';
	export { EuiTableDataType, EuiTableFooterProps, EuiTableFieldDataColumnType, EuiTableComputedColumnType, EuiTableActionsColumnType, EuiTableSelectionType, EuiTableSortingType, } from '@elastic\eui\src\components\basic_table\table_types';
	export { Pagination } from '@elastic\eui\src\components\basic_table\pagination_bar';
	export { DefaultItemAction, CustomItemAction } from '@elastic\eui\src\components\basic_table\action_types';

}
declare module '@elastic\eui\src\components\beacon\beacon' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiBeaconProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & CommonProps & {
	    /**
	     * Height and width of the center circle. Value is passed directly to the `style` attribute
	     */
	    size?: number | string;
	};
	export const EuiBeacon: FunctionComponent<EuiBeaconProps>;

}
declare module '@elastic/eui' {
	export { EuiBeacon, EuiBeaconProps } from '@elastic\eui\src\components\beacon\beacon';

}
declare module '@elastic\eui\src\components\bottom_bar\bottom_bar' {
	import React, { CSSProperties, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common'; type BottomBarPaddingSize = 'none' | 's' | 'm' | 'l';
	export const paddingSizeToClassNameMap: {
	    [value in BottomBarPaddingSize]: string | null;
	};
	export const POSITIONS: readonly ["static", "fixed", "sticky"];
	export type _BottomBarPosition = typeof POSITIONS[number]; type _BottomBarExclusivePositions = ExclusiveUnion<{
	    position?: 'fixed';
	    /**
	     * Whether to wrap in an EuiPortal which appends the component to the body element.
	     * Only works if `position` is `fixed`.
	     */
	    usePortal?: boolean;
	    /**
	     * Whether the component should apply padding on the document body element to afford for its own displacement height.
	     * Only works if `usePortal` is true and `position` is `fixed`.
	     */
	    affordForDisplacement?: boolean;
	}, {
	    /**
	     * How to position the bottom bar against its parent.
	     */
	    position: 'static' | 'sticky';
	}>;
	export type EuiBottomBarProps = CommonProps & HTMLAttributes<HTMLElement> & _BottomBarExclusivePositions & {
	    /**
	     * Padding applied to the bar. Default is 'm'.
	     */
	    paddingSize?: BottomBarPaddingSize;
	    /**
	     * Optional class applied to the body element on mount.
	     */
	    bodyClassName?: string;
	    /**
	     * Customize the screen reader heading that helps users find this control. Default is 'Page level controls'.
	     */
	    landmarkHeading?: string;
	    /**
	     * Starting vertical position when `fixed` position.
	     * Offset from the top of the window when `sticky` position.
	     * Has no affect on `static` positions.
	     */
	    top?: CSSProperties['top'];
	    /**
	     * Ending horizontal position when `fixed` position.
	     * Has no affect on `static` or `sticky` positions.
	     */
	    right?: CSSProperties['right'];
	    /**
	     * Starting vertical position when `fixed` position.
	     * Offset from the bottom of the window when `sticky` position.
	     * Has no affect on `static` positions.
	     */
	    bottom?: CSSProperties['bottom'];
	    /**
	     * Starting horizontal position when `fixed` position.
	     * Has no affect on `static` or `sticky` positions.
	     */
	    left?: CSSProperties['left'];
	};
	export const EuiBottomBar: React.ForwardRefExoticComponent<(CommonProps & React.HTMLAttributes<HTMLElement> & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	    position?: "fixed" | undefined;
	    /**
	     * Whether to wrap in an EuiPortal which appends the component to the body element.
	     * Only works if `position` is `fixed`.
	     */
	    usePortal?: boolean | undefined;
	    /**
	     * Whether the component should apply padding on the document body element to afford for its own displacement height.
	     * Only works if `usePortal` is true and `position` is `fixed`.
	     */
	    affordForDisplacement?: boolean | undefined;
	}, {
	    /**
	     * How to position the bottom bar against its parent.
	     */
	    position: 'static' | 'sticky';
	}> & {
	    /**
	     * How to position the bottom bar against its parent.
	     */
	    position: 'static' | 'sticky';
	} & {
	    /**
	     * Padding applied to the bar. Default is 'm'.
	     */
	    paddingSize?: "s" | "m" | "l" | "none" | undefined;
	    /**
	     * Optional class applied to the body element on mount.
	     */
	    bodyClassName?: string | undefined;
	    /**
	     * Customize the screen reader heading that helps users find this control. Default is 'Page level controls'.
	     */
	    landmarkHeading?: string | undefined;
	    /**
	     * Starting vertical position when `fixed` position.
	     * Offset from the top of the window when `sticky` position.
	     * Has no affect on `static` positions.
	     */
	    top?: CSSProperties['top'];
	    /**
	     * Ending horizontal position when `fixed` position.
	     * Has no affect on `static` or `sticky` positions.
	     */
	    right?: CSSProperties['right'];
	    /**
	     * Starting vertical position when `fixed` position.
	     * Offset from the bottom of the window when `sticky` position.
	     * Has no affect on `static` positions.
	     */
	    bottom?: CSSProperties['bottom'];
	    /**
	     * Starting horizontal position when `fixed` position.
	     * Has no affect on `static` or `sticky` positions.
	     */
	    left?: CSSProperties['left'];
	} & React.RefAttributes<HTMLElement>) | (CommonProps & React.HTMLAttributes<HTMLElement> & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	    /**
	     * How to position the bottom bar against its parent.
	     */
	    position: 'static' | 'sticky';
	}, {
	    position?: "fixed" | undefined;
	    /**
	     * Whether to wrap in an EuiPortal which appends the component to the body element.
	     * Only works if `position` is `fixed`.
	     */
	    usePortal?: boolean | undefined;
	    /**
	     * Whether the component should apply padding on the document body element to afford for its own displacement height.
	     * Only works if `usePortal` is true and `position` is `fixed`.
	     */
	    affordForDisplacement?: boolean | undefined;
	}> & {
	    position?: "fixed" | undefined;
	    /**
	     * Whether to wrap in an EuiPortal which appends the component to the body element.
	     * Only works if `position` is `fixed`.
	     */
	    usePortal?: boolean | undefined;
	    /**
	     * Whether the component should apply padding on the document body element to afford for its own displacement height.
	     * Only works if `usePortal` is true and `position` is `fixed`.
	     */
	    affordForDisplacement?: boolean | undefined;
	} & {
	    /**
	     * Padding applied to the bar. Default is 'm'.
	     */
	    paddingSize?: "s" | "m" | "l" | "none" | undefined;
	    /**
	     * Optional class applied to the body element on mount.
	     */
	    bodyClassName?: string | undefined;
	    /**
	     * Customize the screen reader heading that helps users find this control. Default is 'Page level controls'.
	     */
	    landmarkHeading?: string | undefined;
	    /**
	     * Starting vertical position when `fixed` position.
	     * Offset from the top of the window when `sticky` position.
	     * Has no affect on `static` positions.
	     */
	    top?: CSSProperties['top'];
	    /**
	     * Ending horizontal position when `fixed` position.
	     * Has no affect on `static` or `sticky` positions.
	     */
	    right?: CSSProperties['right'];
	    /**
	     * Starting vertical position when `fixed` position.
	     * Offset from the bottom of the window when `sticky` position.
	     * Has no affect on `static` positions.
	     */
	    bottom?: CSSProperties['bottom'];
	    /**
	     * Starting horizontal position when `fixed` position.
	     * Has no affect on `static` or `sticky` positions.
	     */
	    left?: CSSProperties['left'];
	} & React.RefAttributes<HTMLElement>)>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiBottomBar, EuiBottomBarProps } from '@elastic\eui\src\components\bottom_bar\bottom_bar';

}
declare module '@elastic\eui\src\components\link\link' {
	import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export type EuiLinkType = 'button' | 'reset' | 'submit';
	export type EuiLinkColor = 'primary' | 'subdued' | 'secondary' | 'success' | 'accent' | 'danger' | 'warning' | 'text' | 'ghost';
	export const COLORS: EuiLinkColor[];
	export interface LinkButtonProps {
	    type?: EuiLinkType;
	    /**
	     * Any of our named colors.
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: EuiLinkColor;
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	}
	export interface EuiLinkButtonProps extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color' | 'onClick'>, LinkButtonProps {
	}
	export interface LinkAnchorProps {
	    type?: EuiLinkType;
	    /**
	     * Any of our named colors.
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: EuiLinkColor;
	    /**
	     * Set to true to show an icon indicating that it is an external link;
	     * Defaults to true if `target="_blank"`
	     */
	    external?: boolean;
	}
	export interface EuiLinkAnchorProps extends CommonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'color' | 'onClick'>, LinkAnchorProps {
	    onClick?: MouseEventHandler<HTMLAnchorElement>;
	}
	export type EuiLinkProps = ExclusiveUnion<EuiLinkButtonProps, EuiLinkAnchorProps>; const EuiLink: React.ForwardRefExoticComponent<(import ("@elastic\eui\src\components\common").DisambiguateSet<EuiLinkButtonProps, EuiLinkAnchorProps> & EuiLinkAnchorProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>) | (import ("@elastic\eui\src\components\common").DisambiguateSet<EuiLinkAnchorProps, EuiLinkButtonProps> & EuiLinkButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>)>;
	export { EuiLink };

}
declare module '@elastic/eui' {
	export { EuiLink, EuiLinkColor, EuiLinkProps, EuiLinkType, EuiLinkAnchorProps, EuiLinkButtonProps, } from '@elastic\eui\src\components\link\link';

}
declare module '@elastic\eui\src\components\breadcrumbs\breadcrumbs' {
	import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint';
	export type EuiBreadcrumbResponsiveMaxCount = {
	    [key in EuiBreakpointSize]?: number;
	};
	export type EuiBreadcrumb = CommonProps & {
	    /**
	     * Visible label of the breadcrumb
	     */
	    text: ReactNode;
	    href?: string;
	    onClick?: MouseEventHandler<HTMLAnchorElement>;
	    /**
	     * Force a max-width on the breadcrumb text
	     */
	    truncate?: boolean;
	};
	export type EuiBreadcrumbsProps = CommonProps & {
	    /**
	     * Hides extra (above the max) breadcrumbs under a collapsed item as the window gets smaller.
	     * Pass a custom #EuiBreadcrumbResponsiveMaxCount object to change the number of breadcrumbs to show at the particular breakpoints.
	     * Omitting or passing a `0` value will show all breadcrumbs.
	     *
	     * Pass `false` to turn this behavior off.
	     *
	     * Default: `{ xs: 1, s: 2, m: 4 }`
	     */
	    responsive?: boolean | EuiBreadcrumbResponsiveMaxCount;
	    /**
	     * Forces all breadcrumbs to single line and
	     * truncates each breadcrumb to a particular width,
	     * except for the last item
	     */
	    truncate?: boolean;
	    /**
	     * Collapses the inner items past the maximum set here
	     * into a single ellipses item
	     */
	    max?: number | null;
	    /**
	     * The array of individual #EuiBreadcrumb items
	     */
	    breadcrumbs: EuiBreadcrumb[];
	};
	export const EuiBreadcrumbs: FunctionComponent<EuiBreadcrumbsProps>;

}
declare module '@elastic/eui' {
	export { EuiBreadcrumb, EuiBreadcrumbs, EuiBreadcrumbsProps, EuiBreadcrumbResponsiveMaxCount, } from '@elastic\eui\src\components\breadcrumbs\breadcrumbs';

}
declare module '@elastic\eui\src\components\card\card_select' {
	import { FunctionComponent } from 'react';
	import { EuiButtonEmptyColor, EuiButtonEmptyProps } from '@elastic\eui\src\components\button\button_empty';
	export type EuiCardSelectProps = EuiButtonEmptyProps & {
	    /**
	     * Is in the selected state
	     */
	    isSelected?: boolean;
	    isDisabled?: boolean;
	};
	export const EuiCardSelect: FunctionComponent<EuiCardSelectProps>;
	export function euiCardSelectableColor(color: EuiButtonEmptyColor | undefined, isSelected: boolean | undefined): string;

}
declare module '@elastic\eui\src\components\card\card' {
	import React, { FunctionComponent, ReactElement, ReactNode, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { EuiBetaBadgeProps } from '@elastic\eui\src\components\badge\beta_badge';
	import { EuiIconProps } from '@elastic\eui\src\components\icon';
	import { EuiCardSelectProps } from '@elastic\eui\src\components\card\card_select';
	import { EuiPanelProps } from '@elastic\eui\src\components\panel'; type CardAlignment = 'left' | 'center' | 'right';
	export const ALIGNMENTS: ("left" | "right" | "center")[];
	export const LAYOUT_ALIGNMENTS: ("horizontal" | "vertical")[]; type EuiCardPropsLayout = ExclusiveUnion<{
	    layout?: 'vertical';
	    /**
	     * Changes alignment of the title and description
	     */
	    textAlign?: CardAlignment;
	    /**
	     * Accepts any combination of elements
	     */
	    footer?: ReactNode;
	    /**
	     * Accepts a url in string form or ReactElement for a custom image component
	     */
	    image?: string | ReactElement;
	}, {
	    /**
	     * Change to "horizontal" if you need the icon to be left of the content.
	     * Horizontal layouts cannot be used in conjunction with `image`, `footer`, or `textAlign`.
	     */
	    layout: 'horizontal';
	}>;
	export type EuiCardProps = Omit<CommonProps, 'aria-label'> & Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title' | 'onClick'> & EuiCardPropsLayout & {
	    /**
	     * Cards are required to have at least a title and a description and/or children
	     */
	    title: NonNullable<ReactNode>;
	    /**
	     * Determines the title's heading element
	     */
	    titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
	    /**
	     * Determines the title's size, matching that of EuiTitle.
	     * Though, card titles can't be too large or small relative to the description text.
	     */
	    titleSize?: 's' | 'xs';
	    /**
	     * Placed within a small EuiText `<p>` tag
	     */
	    description?: NonNullable<ReactNode>;
	    /**
	     * Accepts an `<EuiIcon>` node or `null`
	     */
	    icon?: ReactElement<EuiIconProps> | null;
	    /**
	     * Custom children
	     */
	    children?: ReactNode;
	    /**
	     * Use only if you want to forego a button in the footer and make the whole card clickable
	     */
	    onClick?: React.MouseEventHandler<HTMLButtonElement> | React.MouseEventHandler<HTMLAnchorElement>;
	    isDisabled?: boolean;
	    href?: string;
	    target?: string;
	    rel?: string;
	    /**
	     * Add a badge to the card to label it as "Beta" or other non-GA state
	     * **DEPRECATED: Use `betaBadgeProps.label` instead.**
	     */
	    betaBadgeLabel?: string;
	    /**
	     * Add a description to the beta badge (will appear in a tooltip)
	     * **DEPRECATED: Use `betaBadgeProps.tooltipContent` instead.**
	     */
	    betaBadgeTooltipContent?: ReactNode;
	    /**
	     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used.
	     * **DEPRECATED: Use `betaBadgeProps.title` instead.**
	     */
	    betaBadgeTitle?: string;
	    betaBadgeProps?: Partial<EuiBetaBadgeProps>;
	    /**
	     * Matches to the color property of EuiPanel. If defined, removes any border & shadow.
	     * Leave as `undefined` to display as a default panel.
	     * Selectable cards will always display as a default panel.
	     */
	    display?: EuiPanelProps['color'];
	    /**
	     * Padding applied around the content of the card
	     */
	    paddingSize?: EuiPanelProps['paddingSize'];
	    /**
	     * Adds a button to the bottom of the card to allow for in-place selection
	     */
	    selectable?: EuiCardSelectProps;
	    /**
	     * Use a border style of card instead of shadow
	     */
	    hasBorder?: EuiPanelProps['hasBorder'];
	} & ({
	    description?: NonNullable<ReactNode>;
	    children: ReactNode;
	} | {
	    description: NonNullable<ReactNode>;
	});
	export const EuiCard: FunctionComponent<EuiCardProps>;
	export {};

}
declare module '@elastic\eui\src\components\card\checkable_card\checkable_card' {
	import { FunctionComponent, ReactNode } from 'react';
	import { EuiRadioProps, EuiCheckboxProps } from '@elastic\eui\src\components\form';
	import { _EuiSplitPanelOuterProps } from '@elastic\eui\src\components\panel\split_panel';
	interface EuiCheckableCardBaseProps {
	    id: string;
	    label: ReactNode;
	    hasShadow?: _EuiSplitPanelOuterProps['hasShadow'];
	    hasBorder?: _EuiSplitPanelOuterProps['hasBorder'];
	}
	interface EuiCheckableCardAsRadioProps extends Omit<EuiRadioProps, 'compressed'> {
	    /**
	     * Whether the control is a radio button or checkbox
	     */
	    checkableType?: 'radio';
	}
	interface EuiCheckableCardAsCheckboxProps extends Omit<EuiCheckboxProps, 'compressed'> {
	    checkableType: 'checkbox';
	}
	export type EuiCheckableCardProps = Omit<EuiCheckableCardAsCheckboxProps | EuiCheckableCardAsRadioProps, 'label' | 'id'> & EuiCheckableCardBaseProps;
	export const EuiCheckableCard: FunctionComponent<EuiCheckableCardProps>;
	export {};

}
declare module '@elastic\eui\src\components\card\checkable_card' {
	export { EuiCheckableCard, EuiCheckableCardProps } from '@elastic\eui\src\components\card\checkable_card\checkable_card';

}
declare module '@elastic/eui' {
	export { EuiCard, EuiCardProps } from '@elastic\eui\src\components\card\card';
	export { EuiCheckableCard, EuiCheckableCardProps } from '@elastic\eui\src\components\card\checkable_card';

}
declare module '@elastic\eui\src\components\copy\copy' {
	import { Component, ReactElement, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiToolTipProps } from '@elastic\eui\src\components\tool_tip';
	export interface EuiCopyProps extends CommonProps, Partial<Omit<EuiToolTipProps, 'children'>> {
	    /**
	     * Text that will be copied to clipboard when copy function is executed.
	     */
	    textToCopy: string;
	    /**
	     * Tooltip message displayed before copy function is called.
	     */
	    beforeMessage?: ReactNode;
	    /**
	     * Tooltip message displayed after copy function is called that lets the user know that
	     * 'textToCopy' has been copied to the clipboard.
	     */
	    afterMessage?: ReactNode;
	    /**
	     * Function that must return a component. First argument is 'copy' function.
	     * Use your own logic to create the component that users interact with when triggering copy.
	     */
	    children(copy: () => void): ReactElement;
	}
	interface EuiCopyState {
	    tooltipText: ReactNode;
	}
	export class EuiCopy extends Component<EuiCopyProps, EuiCopyState> {
	    static defaultProps: {
	        afterMessage: string;
	    };
	    constructor(props: EuiCopyProps);
	    copy: () => void;
	    resetTooltipText: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiCopy, EuiCopyProps } from '@elastic\eui\src\components\copy\copy';

}
declare module '@elastic\eui\src\components\overlay_mask\overlay_mask' {
	/**
	 * NOTE: We can't test this component because Enzyme doesn't support rendering
	 * into portals.
	 */
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiOverlayMaskInterface {
	    /**
	     * Function that applies to clicking the mask itself and not the children
	     */
	    onClick?: () => void;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    /**
	     * Should the mask visually sit above or below the EuiHeader (controlled by z-index)
	     */
	    headerZindexLocation?: 'above' | 'below';
	}
	export type EuiOverlayMaskProps = CommonProps & Omit<Partial<Record<keyof HTMLAttributes<HTMLDivElement>, string>>, keyof EuiOverlayMaskInterface> & EuiOverlayMaskInterface;
	export const EuiOverlayMask: FunctionComponent<EuiOverlayMaskProps>;

}
declare module '@elastic/eui' {
	export { EuiOverlayMask, EuiOverlayMaskProps } from '@elastic\eui\src\components\overlay_mask\overlay_mask';

}
declare module '@elastic\eui\src\components\code\_code_block' {
	import { FunctionComponent } from 'react'; type PaddingSize = 'none' | 's' | 'm' | 'l'; type FontSize = 's' | 'm' | 'l';
	export const FONT_SIZES: ("s" | "m" | "l")[];
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[];
	export interface EuiCodeBlockImplProps {
	    className?: string;
	    fontSize?: FontSize;
	    /**
	     * Displays the passed code in an inline format. Also removes any margins set.
	     */
	    inline?: boolean;
	    /**
	     * Displays an icon button to copy the code snippet to the clipboard.
	     */
	    isCopyable?: boolean;
	    /**
	     * Sets the syntax highlighting for a specific language
	     * @see https://github.com/wooorm/refractor#syntaxes
	     * for options
	     */
	    language?: string;
	    overflowHeight?: number;
	    paddingSize?: PaddingSize;
	    transparentBackground?: boolean;
	    /**
	     * Specify how `white-space` inside the element is handled.
	     * `pre` respects line breaks/white space but doesn't force them to wrap the line
	     * `pre-wrap` respects line breaks/white space but does force them to wrap the line when necessary.
	     */
	    whiteSpace?: 'pre' | 'pre-wrap';
	}
	/**
	 * This is the base component extended by EuiCode and EuiCodeBlock.
	 * These components share the same propTypes definition with EuiCodeBlockImpl.
	 */
	export const EuiCodeBlockImpl: FunctionComponent<EuiCodeBlockImplProps>;
	export {};

}
declare module '@elastic\eui\src\components\code\code' {
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { EuiCodeBlockImplProps } from '@elastic\eui\src\components\code\_code_block';
	export type EuiCodeProps = CommonProps & Pick<EuiCodeBlockImplProps, 'language' | 'transparentBackground'> & HTMLAttributes<HTMLElement>;
	export const EuiCode: FunctionComponent<EuiCodeProps>;

}
declare module '@elastic\eui\src\components\code\code_block' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiCodeBlockImplProps } from '@elastic\eui\src\components\code\_code_block';
	export type EuiCodeBlockProps = CommonProps & Omit<EuiCodeBlockImplProps, 'inline'> & HTMLAttributes<HTMLElement>;
	export const EuiCodeBlock: FunctionComponent<EuiCodeBlockProps>;

}
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

declare module 'html';
declare module '@elastic/eui' {
	export { EuiCode, EuiCodeProps } from '@elastic\eui\src\components\code\code';
	export { EuiCodeBlock, EuiCodeBlockProps } from '@elastic\eui\src\components\code\code_block';
	export { EuiCodeBlockImpl } from '@elastic\eui\src\components\code\_code_block';

}
declare module '@elastic\eui\src\components\code_editor\code_editor' {
	import { Component, AriaAttributes } from 'react';
	import AceEditor, { IAceEditorProps } from 'react-ace'; type SupportedAriaAttribute = 'aria-label' | 'aria-labelledby' | 'aria-describedby'; type SupportedAriaAttributes = Pick<AriaAttributes, SupportedAriaAttribute>;
	export interface EuiCodeEditorProps extends SupportedAriaAttributes, Omit<IAceEditorProps, 'mode'> {
	    width?: string;
	    height?: string;
	    onBlur?: IAceEditorProps['onBlur'];
	    onFocus?: IAceEditorProps['onFocus'];
	    isReadOnly?: boolean;
	    setOptions: IAceEditorProps['setOptions'];
	    cursorStart?: number;
	    'data-test-subj'?: string;
	    /**
	     * Select the `brace` theme
	     * The matching theme file must also be imported from `brace` (e.g., `import 'brace/theme/github';`)
	     */
	    theme?: IAceEditorProps['theme'];
	    /**
	     * Use string for a built-in mode or object for a custom mode
	     */
	    mode?: IAceEditorProps['mode'] | object;
	    id?: string;
	}
	export interface EuiCodeEditorState {
	    isHintActive: boolean;
	    isEditing: boolean;
	    name: string;
	}
	export class EuiCodeEditor extends Component<EuiCodeEditorProps, EuiCodeEditorState> {
	    static defaultProps: {
	        setOptions: {};
	    };
	    state: EuiCodeEditorState;
	    idGenerator: (idSuffix?: string) => string;
	    aceEditor: AceEditor | null;
	    editorHint: HTMLButtonElement | null;
	    aceEditorRef: (aceEditor: AceEditor | null) => void;
	    onEscToExit: () => void;
	    onKeydownAce: (event: KeyboardEvent) => void;
	    onFocusAce: IAceEditorProps['onFocus'];
	    onBlurAce: IAceEditorProps['onBlur'];
	    startEditing: () => void;
	    stopEditing(): void;
	    isCustomMode(): boolean;
	    setCustomMode(): void;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: EuiCodeEditorProps): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiCodeEditor, EuiCodeEditorProps } from '@elastic\eui\src\components\code_editor\code_editor';

}
declare module '@elastic\eui\src\components\flyout\flyout' {
	import React, { CSSProperties, ComponentType, ComponentPropsWithRef } from 'react';
	import { EuiBreakpointSize } from '@elastic\eui\src\services';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiOverlayMaskProps } from '@elastic\eui\src\components\overlay_mask';
	import { EuiButtonIconPropsForButton } from '@elastic\eui\src\components\button';
	export const TYPES: ("push" | "overlay")[]; type _EuiFlyoutType = typeof TYPES[number];
	export const SIDES: import ("@elastic\eui\src\components\button\button_content").ButtonContentIconSide[]; type _EuiFlyoutSide = typeof SIDES[number];
	export const SIZES: ("s" | "m" | "l")[];
	export type EuiFlyoutSize = typeof SIZES[number];
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[]; type _EuiFlyoutPaddingSize = typeof PADDING_SIZES[number]; type _EuiFlyoutProps = {
	    onClose: () => void;
	    /**
	     * Defines the width of the panel.
	     * Pass a predefined size of `s | m | l`, or pass any number/string compatible with the CSS `width` attribute
	     */
	    size?: EuiFlyoutSize | CSSProperties['width'];
	    /**
	     * Sets the max-width of the panel,
	     * set to `true` to use the default size,
	     * set to `false` to not restrict the width,
	     * set to a number for a custom width in px,
	     * set to a string for a custom width in custom measurement.
	     */
	    maxWidth?: boolean | number | string;
	    /**
	     * Customize the padding around the content of the flyout header, body and footer
	     */
	    paddingSize?: _EuiFlyoutPaddingSize;
	    /**
	     * Adds an EuiOverlayMask and wraps in an EuiPortal
	     */
	    ownFocus?: boolean;
	    /**
	     * Hides the default close button. You must provide another close button somewhere within the flyout.
	     */
	    hideCloseButton?: boolean;
	    /**
	     * Specify an aria-label for the close button of the flyout.
	     * Default is `'Close this dialog'`.
	     */
	    closeButtonAriaLabel?: string;
	    /**
	     * Extends EuiButtonIconProps onto the close button
	     */
	    closeButtonProps?: Partial<EuiButtonIconPropsForButton>;
	    /**
	     * Position of close button.
	     * `inside`: Floating to just inside the flyout, always top right;
	     * `outside`: Floating just outside the flyout near the top (side dependent on `side`). Helpful when the close button may cover other interactable content.
	     */
	    closeButtonPosition?: 'inside' | 'outside';
	    /**
	     * Adjustments to the EuiOverlayMask that is added when `ownFocus = true`
	     */
	    maskProps?: EuiOverlayMaskProps;
	    /**
	     * How to display the the flyout in relation to the body content;
	     * `push` keeps it visible, pushing the `<body>` content via padding
	     */
	    type?: _EuiFlyoutType;
	    /**
	     * Forces this interaction on the mask overlay or body content.
	     * Defaults depend on `ownFocus` and `type` values
	     */
	    outsideClickCloses?: boolean;
	    /**
	     * Which side of the window to attach to.
	     * The `left` option should only be used for navigation.
	     */
	    side?: _EuiFlyoutSide;
	    /**
	     * Defaults to `dialog` which is best for most cases of the flyout.
	     * Otherwise pass in your own, aria-role, or `null` to remove it and use the semantic `as` element instead
	     */
	    role?: null | string;
	    /**
	     * Named breakpoint or pixel value for customizing the minimum window width to enable the `push` type
	     */
	    pushMinBreakpoint?: EuiBreakpointSize | number;
	    style?: React.CSSProperties;
	}; type ComponentTypes = 'div' | 'span' | 'nav' | 'aside' | 'section' | 'article' | 'header' | ComponentType;
	export type EuiFlyoutProps<T extends ComponentTypes = 'div'> = CommonProps & ComponentPropsWithRef<T> & {
	    /**
	     * Sets the HTML element for `EuiFlyout`
	     */
	    as?: T;
	} & _EuiFlyoutProps; const EuiFlyout: React.ForwardRefExoticComponent<(CommonProps & {
	    children?: React.ReactNode;
	} & {
	    /**
	     * Sets the HTML element for `EuiFlyout`
	     */
	    as?: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | "article" | "aside" | "div" | "header" | "nav" | "section" | "span" | undefined;
	} & _EuiFlyoutProps & React.RefAttributes<{
	    children?: React.ReactNode;
	} | React.RefAttributes<React.Component<{}, any, any>> | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
	})>) | (CommonProps & React.RefAttributes<React.Component<{}, any, any>> & {
	    /**
	     * Sets the HTML element for `EuiFlyout`
	     */
	    as?: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | "article" | "aside" | "div" | "header" | "nav" | "section" | "span" | undefined;
	} & _EuiFlyoutProps & React.RefAttributes<{
	    children?: React.ReactNode;
	} | React.RefAttributes<React.Component<{}, any, any>> | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
	})>) | (CommonProps & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
	} & {
	    /**
	     * Sets the HTML element for `EuiFlyout`
	     */
	    as?: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | "article" | "aside" | "div" | "header" | "nav" | "section" | "span" | undefined;
	} & _EuiFlyoutProps & React.RefAttributes<{
	    children?: React.ReactNode;
	} | React.RefAttributes<React.Component<{}, any, any>> | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
	})>) | (CommonProps & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
	} & {
	    /**
	     * Sets the HTML element for `EuiFlyout`
	     */
	    as?: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | "article" | "aside" | "div" | "header" | "nav" | "section" | "span" | undefined;
	} & _EuiFlyoutProps & React.RefAttributes<{
	    children?: React.ReactNode;
	} | React.RefAttributes<React.Component<{}, any, any>> | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
	})>) | (CommonProps & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
	} & {
	    /**
	     * Sets the HTML element for `EuiFlyout`
	     */
	    as?: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | "article" | "aside" | "div" | "header" | "nav" | "section" | "span" | undefined;
	} & _EuiFlyoutProps & React.RefAttributes<{
	    children?: React.ReactNode;
	} | React.RefAttributes<React.Component<{}, any, any>> | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
	}) | (Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "key"> & {
	    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
	})>)>;
	export { EuiFlyout };

}
declare module '@elastic\eui\src\components\flyout\flyout_body' {
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFlyoutBodyProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps & {
	    /**
	     * Use to display a banner at the top of the body. It is suggested to use `EuiCallOut` for it.
	     */
	    banner?: ReactNode;
	}>;
	export const EuiFlyoutBody: EuiFlyoutBodyProps;

}
declare module '@elastic\eui\src\components\flyout\flyout_footer' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFlyoutFooterProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps>;
	export const EuiFlyoutFooter: EuiFlyoutFooterProps;

}
declare module '@elastic\eui\src\components\flyout\flyout_header' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiFlyoutHeaderProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps & {
	    hasBorder?: boolean;
	}>;
	export const EuiFlyoutHeader: EuiFlyoutHeaderProps;

}
declare module '@elastic/eui' {
	export { EuiFlyout, EuiFlyoutProps, EuiFlyoutSize } from '@elastic\eui\src\components\flyout\flyout';
	export { EuiFlyoutBody, EuiFlyoutBodyProps } from '@elastic\eui\src\components\flyout\flyout_body';
	export { EuiFlyoutFooter, EuiFlyoutFooterProps } from '@elastic\eui\src\components\flyout\flyout_footer';
	export { EuiFlyoutHeader, EuiFlyoutHeaderProps } from '@elastic\eui\src\components\flyout\flyout_header';

}
declare module '@elastic\eui\src\components\collapsible_nav\collapsible_nav' {
	import { FunctionComponent, ReactElement, ReactNode } from 'react';
	import { EuiFlyoutProps } from '@elastic\eui\src\components\flyout';
	export type EuiCollapsibleNavProps = Omit<EuiFlyoutProps, 'closeButtonAriaLabel' | 'type' | 'pushBreakpoint'> & {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    /**
	     * Shows the navigation flyout
	     */
	    isOpen?: boolean;
	    /**
	     * Keeps navigation flyout visible and push `<body>` content via padding
	     */
	    isDocked?: boolean;
	    /**
	     * Named breakpoint or pixel value for customizing the minimum window width to enable docking
	     */
	    dockedBreakpoint?: EuiFlyoutProps['pushMinBreakpoint'];
	    /**
	     * Button for controlling visible state of the nav
	     */
	    button?: ReactElement;
	    /**
	     * Keeps the display of toggle button when in docked state
	     */
	    showButtonIfDocked?: boolean;
	};
	export const EuiCollapsibleNav: FunctionComponent<EuiCollapsibleNavProps>;

}
declare module '@elastic\eui\src\components\collapsible_nav\collapsible_nav_group\collapsible_nav_group' {
	import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { EuiAccordionProps } from '@elastic\eui\src\components\accordion';
	import { IconType, IconSize, EuiIconProps } from '@elastic\eui\src\components\icon';
	import { EuiTitleProps } from '@elastic\eui\src\components\title'; type Background = 'none' | 'light' | 'dark';
	export const BACKGROUNDS: Background[];
	export interface EuiCollapsibleNavGroupInterface extends CommonProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    /**
	     * Sits left of the `title` and only when `title` is present
	     */
	    iconType?: IconType;
	    /**
	     * Change the size of the icon in the `title`
	     */
	    iconSize?: IconSize;
	    /**
	     * Further extend the props applied to EuiIcon
	     */
	    iconProps?: Omit<EuiIconProps, 'type' | 'size'>;
	    /**
	     * Optionally provide an id, otherwise one will be created
	     */
	    id?: string;
	    /**
	     * Adds a background color to the entire group,
	     * applying the correct text color to the `title` only
	     */
	    background?: Background;
	    /**
	     * Determines the title's heading element
	     */
	    titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
	    /**
	     * Title sizing equivalent to EuiTitle, but only `s` and smaller
	     */
	    titleSize?: Exclude<EuiTitleProps['size'], 'l' | 'm'>;
	} type GroupAsAccordion = EuiCollapsibleNavGroupInterface & Omit<EuiAccordionProps, 'id' | 'title'> & {
	    /**
	     * If `true`, wraps children in the body of an accordion,
	     * requiring the prop `title` to be used as the button.
	     * When `false`, simply renders a div without any accordion functionality.
	     */
	    isCollapsible: true;
	    /**
	     * The title gets wrapped in the appropriate heading level
	     * with the option to add an iconType
	     */
	    title: ReactNode;
	}; type GroupAsDiv = EuiCollapsibleNavGroupInterface & {
	    /**
	     * If `true`, wraps children in the body of an accordion,
	     * requiring the prop `title` to be used as the button.
	     * When `false`, simply renders a div without any accordion functionality.
	     */
	    isCollapsible?: false;
	    /**
	     * The title gets wrapped in the appropriate heading level
	     * with the option to add an iconType
	     */
	    title?: ReactNode;
	} & HTMLAttributes<HTMLDivElement>;
	export type EuiCollapsibleNavGroupProps = ExclusiveUnion<GroupAsAccordion, GroupAsDiv>;
	export const EuiCollapsibleNavGroup: FunctionComponent<EuiCollapsibleNavGroupProps>;
	export {};

}
declare module '@elastic\eui\src\components\collapsible_nav\collapsible_nav_group' {
	export { EuiCollapsibleNavGroup, EuiCollapsibleNavGroupProps, } from '@elastic\eui\src\components\collapsible_nav\collapsible_nav_group\collapsible_nav_group';

}
declare module '@elastic/eui' {
	export { EuiCollapsibleNavGroup, EuiCollapsibleNavGroupProps, } from '@elastic\eui\src\components\collapsible_nav\collapsible_nav_group';
	export { EuiCollapsibleNav, EuiCollapsibleNavProps } from '@elastic\eui\src\components\collapsible_nav\collapsible_nav';

}
declare module '@elastic\eui\src\components\mark\mark' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiMarkProps = HTMLAttributes<HTMLElement> & CommonProps & {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: string;
	};
	export const EuiMark: FunctionComponent<EuiMarkProps>;

}
declare module '@elastic/eui' {
	export { EuiMark } from '@elastic\eui\src\components\mark\mark';

}
declare module '@elastic\eui\src\components\highlight\highlight' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiHighlightProps = HTMLAttributes<HTMLSpanElement> & CommonProps & {
	    /**
	     * string to highlight as this component's content
	     */
	    children: string;
	    /**
	     * What to search for
	     */
	    search: string;
	    /**
	     * Should the search be strict or not
	     */
	    strict?: boolean;
	    /**
	     * Should highlight all matches
	     */
	    highlightAll?: boolean;
	};
	export const EuiHighlight: FunctionComponent<EuiHighlightProps>;

}
declare module '@elastic/eui' {
	export { EuiHighlight, EuiHighlightProps } from '@elastic\eui\src\components\highlight\highlight';

}
declare module '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_title' {
	import { FunctionComponent } from 'react';
	export const EuiComboBoxTitle: FunctionComponent<{}>;

}
declare module '@elastic\eui\src\components\combo_box\types' {
	import { ButtonHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiComboBoxOptionOption<T = string | number | string[] | undefined> extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
	    isGroupLabelOption?: boolean;
	    label: string;
	    key?: string;
	    options?: Array<EuiComboBoxOptionOption<T>>;
	    value?: T;
	}
	export type UpdatePositionHandler = (listElement?: RefInstance<HTMLDivElement>) => void;
	export type OptionHandler<T> = (option: EuiComboBoxOptionOption<T>) => void;
	export type RefInstance<T> = T | null;
	export type EuiComboBoxOptionsListPosition = 'top' | 'bottom';
	export interface EuiComboBoxSingleSelectionShape {
	    asPlainText?: boolean;
	}

}
declare module '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_options_list' {
	import { Component, ComponentProps, ReactNode, RefCallback } from 'react';
	import { FixedSizeList, ListProps, ListChildComponentProps } from 'react-window';
	import { EuiPanel } from '@elastic\eui\src\components\panel';
	import { EuiFilterSelectItem } from '@elastic\eui\src\components\filter_group\filter_select_item';
	import { htmlIdGenerator } from '@elastic\eui\src\services';
	import { EuiComboBoxOptionOption, EuiComboBoxOptionsListPosition, EuiComboBoxSingleSelectionShape, OptionHandler, RefInstance, UpdatePositionHandler } from '@elastic\eui\src\components\combo_box\types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiComboBoxOptionsListProps<T> = CommonProps & ComponentProps<typeof EuiPanel> & {
	    'data-test-subj': string;
	    activeOptionIndex?: number;
	    areAllOptionsSelected?: boolean;
	    /**
	     * Creates a custom text option. You can use `{searchValue}` inside your string to better customize your text.
	     * It won't show if there's no onCreateOption.
	     */
	    customOptionText?: string;
	    fullWidth?: boolean;
	    getSelectedOptionForSearchValue?: (searchValue: string, selectedOptions: any[]) => EuiComboBoxOptionOption<T> | undefined;
	    isLoading?: boolean;
	    listRef: RefCallback<HTMLDivElement>;
	    matchingOptions: Array<EuiComboBoxOptionOption<T>>;
	    onCloseList: (event: Event) => void;
	    onCreateOption?: (searchValue: string, options: Array<EuiComboBoxOptionOption<T>>) => boolean | void;
	    onOptionClick?: OptionHandler<T>;
	    onOptionEnterKey?: OptionHandler<T>;
	    onScroll?: ListProps['onScroll'];
	    optionRef: (index: number, node: RefInstance<EuiFilterSelectItem>) => void;
	    /**
	     * Array of EuiComboBoxOptionOption objects. See #EuiComboBoxOptionOption
	     */
	    options: Array<EuiComboBoxOptionOption<T>>;
	    position?: EuiComboBoxOptionsListPosition;
	    renderOption?: (option: EuiComboBoxOptionOption<T>, searchValue: string, OPTION_CONTENT_CLASSNAME: string) => ReactNode;
	    rootId: ReturnType<typeof htmlIdGenerator>;
	    rowHeight: number;
	    scrollToIndex?: number;
	    searchValue: string;
	    selectedOptions: Array<EuiComboBoxOptionOption<T>>;
	    updatePosition: UpdatePositionHandler;
	    width: number;
	    singleSelection?: boolean | EuiComboBoxSingleSelectionShape;
	    delimiter?: string;
	    zIndex?: number;
	};
	export class EuiComboBoxOptionsList<T> extends Component<EuiComboBoxOptionsListProps<T>> {
	    listRefInstance: RefInstance<HTMLDivElement>;
	    listRef: FixedSizeList | null;
	    listBoxRef: HTMLUListElement | null;
	    static defaultProps: {
	        'data-test-subj': string;
	        rowHeight: number;
	    };
	    updatePosition: () => void;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: EuiComboBoxOptionsListProps<T>): void;
	    componentWillUnmount(): void;
	    closeListOnScroll: (event: Event) => void;
	    listRefCallback: RefCallback<HTMLDivElement>;
	    setListRef: (ref: FixedSizeList | null) => void;
	    setListBoxRef: (ref: HTMLUListElement | null) => void;
	    ListRow: ({ data, index, style }: ListChildComponentProps) => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_option' {
	import { Component, HTMLAttributes, KeyboardEventHandler, ReactNode, RefCallback } from 'react';
	import { EuiComboBoxOptionOption, OptionHandler } from '@elastic\eui\src\components\combo_box\types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiComboBoxOptionProps<T> extends CommonProps, Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
	    children?: ReactNode;
	    className?: string;
	    disabled?: boolean;
	    isFocused: boolean;
	    onClick: OptionHandler<T>;
	    onEnterKey: OptionHandler<T>;
	    option: EuiComboBoxOptionOption<T>;
	    optionRef?: RefCallback<HTMLButtonElement>;
	}
	export class EuiComboBoxOption<T> extends Component<EuiComboBoxOptionProps<T>> {
	    onClick: () => void;
	    onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\combo_box\combo_box_options_list' {
	export { EuiComboBoxOptionsList, EuiComboBoxOptionsListProps, } from '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_options_list';
	export { EuiComboBoxOption, EuiComboBoxOptionProps } from '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_option';
	export { EuiComboBoxTitle } from '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_title';

}
declare module '@elastic\eui\src\components\combo_box\matching_options' {
	import { EuiComboBoxOptionOption } from '@elastic\eui\src\components\combo_box\types';
	export const flattenOptionGroups: <T>(optionsOrGroups: EuiComboBoxOptionOption<T>[]) => EuiComboBoxOptionOption<T>[];
	export const getSelectedOptionForSearchValue: <T>(searchValue: string, selectedOptions: EuiComboBoxOptionOption<T>[], optionKey?: string | undefined) => EuiComboBoxOptionOption<T> | undefined;
	export const getMatchingOptions: <T>(options: EuiComboBoxOptionOption<T>[], selectedOptions: EuiComboBoxOptionOption<T>[], searchValue: string, isPreFiltered: boolean, showPrevSelected: boolean, sortMatchesBy: string) => EuiComboBoxOptionOption<T>[];

}
declare module '@elastic\eui\src\components\combo_box\combo_box_input\combo_box_pill' {
	import { AriaAttributes, Component, MouseEventHandler } from 'react';
	import { EuiComboBoxOptionOption, OptionHandler } from '@elastic\eui\src\components\combo_box\types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiComboBoxPillProps<T> extends CommonProps {
	    asPlainText?: boolean;
	    children?: string;
	    className?: string;
	    color?: string;
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	    onClickAriaLabel?: AriaAttributes['aria-label'];
	    onClose?: OptionHandler<T>;
	    option: EuiComboBoxOptionOption<T>;
	}
	export class EuiComboBoxPill<T> extends Component<EuiComboBoxPillProps<T>> {
	    static defaultProps: {
	        color: string;
	    };
	    onCloseButtonClick: () => void;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\combo_box\combo_box_input\combo_box_input' {
	import { ChangeEventHandler, Component, FocusEventHandler, RefCallback } from 'react';
	import AutosizeInput from 'react-input-autosize';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form\form_control_layout';
	import { htmlIdGenerator } from '@elastic\eui\src\services';
	import { EuiComboBoxOptionOption, EuiComboBoxSingleSelectionShape, OptionHandler, UpdatePositionHandler } from '@elastic\eui\src\components\combo_box\types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiComboBoxInputProps<T> extends CommonProps {
	    autoSizeInputRef?: RefCallback<AutosizeInput & HTMLInputElement>;
	    compressed: boolean;
	    focusedOptionId?: string;
	    fullWidth?: boolean;
	    hasSelectedOptions: boolean;
	    id?: string;
	    inputRef?: RefCallback<HTMLInputElement>;
	    isDisabled?: boolean;
	    isListOpen: boolean;
	    noIcon: boolean;
	    onBlur?: FocusEventHandler<HTMLInputElement>;
	    onChange?: (searchValue: string) => void;
	    onClear?: () => void;
	    onClick?: () => void;
	    onCloseListClick: () => void;
	    onFocus: FocusEventHandler<HTMLInputElement>;
	    onOpenListClick: () => void;
	    onRemoveOption?: OptionHandler<T>;
	    placeholder?: string;
	    rootId: ReturnType<typeof htmlIdGenerator>;
	    searchValue: string;
	    selectedOptions?: Array<EuiComboBoxOptionOption<T>>;
	    singleSelection?: boolean | EuiComboBoxSingleSelectionShape;
	    toggleButtonRef?: RefCallback<HTMLButtonElement | HTMLSpanElement>;
	    updatePosition: UpdatePositionHandler;
	    value?: string;
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    append?: EuiFormControlLayoutProps['append'];
	    isLoading?: boolean;
	    autoFocus?: boolean;
	}
	interface EuiComboBoxInputState {
	    hasFocus: boolean;
	}
	export class EuiComboBoxInput<T> extends Component<EuiComboBoxInputProps<T>, EuiComboBoxInputState> {
	    state: EuiComboBoxInputState;
	    updatePosition: () => void;
	    onFocus: FocusEventHandler<HTMLInputElement>;
	    onBlur: FocusEventHandler<HTMLInputElement>;
	    componentDidUpdate(prevProps: EuiComboBoxInputProps<T>): void;
	    inputOnChange: ChangeEventHandler<HTMLInputElement>;
	    inputRefCallback: (ref: HTMLInputElement & AutosizeInput) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\combo_box\combo_box' {
	/**
	 * Elements within EuiComboBox which would normally be tabbable (inputs, buttons) have been removed
	 * from the tab order with tabindex={-1} so that we can control the keyboard navigation interface.
	 */
	import { Component, FocusEventHandler, HTMLAttributes, KeyboardEventHandler, RefCallback } from 'react';
	import { EuiComboBoxInputProps } from '@elastic\eui\src\components\combo_box\combo_box_input\combo_box_input';
	import { EuiComboBoxOptionsListProps } from '@elastic\eui\src\components\combo_box\combo_box_options_list\combo_box_options_list';
	import { UpdatePositionHandler, OptionHandler, RefInstance, EuiComboBoxOptionOption, EuiComboBoxOptionsListPosition, EuiComboBoxSingleSelectionShape } from '@elastic\eui\src\components\combo_box\types';
	import { EuiFilterSelectItem } from '@elastic\eui\src\components\filter_group';
	import AutosizeInput from 'react-input-autosize';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFormControlLayoutProps } from '@elastic\eui\src\components\form'; type DrillProps<T> = Pick<EuiComboBoxOptionsListProps<T>, 'customOptionText' | 'onCreateOption' | 'options' | 'renderOption' | 'selectedOptions'>;
	export interface _EuiComboBoxProps<T> extends CommonProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, DrillProps<T> {
	    'data-test-subj'?: string;
	    /**
	     * Updates the list of options asynchronously
	     */
	    async: boolean;
	    className?: string;
	    /**
	     * When `true` creates a shorter height input
	     */
	    compressed: boolean;
	    /**
	     * When `true` expands to the entire width available
	     */
	    fullWidth: boolean;
	    id?: string;
	    inputRef?: RefCallback<HTMLInputElement>;
	    /**
	     * Shows a button that quickly clears any input
	     */
	    isClearable: boolean;
	    /**
	     * Disables the input
	     */
	    isDisabled?: boolean;
	    isInvalid?: boolean;
	    /**
	     * Swaps the dropdown options for a loading spinner
	     */
	    isLoading?: boolean;
	    /**
	     * Doesn't show the suggestions list/dropdown
	     */
	    noSuggestions?: boolean;
	    onBlur?: FocusEventHandler<HTMLDivElement>;
	    /**
	     * Called every time the query in the combo box is parsed
	     */
	    onChange?: (options: Array<EuiComboBoxOptionOption<T>>) => void;
	    onFocus?: FocusEventHandler<HTMLDivElement>;
	    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
	    /**
	     * Called every time the text query in the search box is parsed
	     */
	    onSearchChange?: (searchValue: string, hasMatchingOptions?: boolean) => void;
	    /**
	     * Sets the placeholder of the input
	     */
	    placeholder?: string;
	    /**
	     * Every option must be the same height and must be explicitly set if using a custom render
	     */
	    rowHeight?: number;
	    /**
	     * When `true` only allows the user to select a single option. Set to `{ asPlainText: true }` to not render input selection as pills
	     */
	    singleSelection: boolean | EuiComboBoxSingleSelectionShape;
	    /**
	     * Display matching options by:
	     * `startsWith`: moves items that start with search value to top of the list;
	     * `none`: don't change the sort order of initial object
	     */
	    sortMatchesBy: 'none' | 'startsWith';
	    /**
	     * Creates an input group with element(s) coming before input. It won't show if `singleSelection` is set to `false`.
	     * `string` | `ReactElement` or an array of these
	     */
	    prepend?: EuiFormControlLayoutProps['prepend'];
	    /**
	     * Creates an input group with element(s) coming after input. It won't show if `singleSelection` is set to `false`.
	     * `string` | `ReactElement` or an array of these
	     */
	    append?: EuiFormControlLayoutProps['append'];
	    /**
	     * A special character to use as a value separator. Typically a comma `,`
	     */
	    delimiter?: string;
	    /**
	     * Specifies that the input should have focus when the component loads
	     */
	    autoFocus?: boolean;
	} type DefaultProps<T> = Omit<typeof EuiComboBox['defaultProps'], 'options' | 'selectedOptions'> & {
	    options: Array<EuiComboBoxOptionOption<T>>;
	    selectedOptions: Array<EuiComboBoxOptionOption<T>>;
	};
	export type EuiComboBoxProps<T> = Omit<_EuiComboBoxProps<T>, keyof DefaultProps<T>> & Partial<DefaultProps<T>>;
	interface EuiComboBoxState<T> {
	    activeOptionIndex: number;
	    hasFocus: boolean;
	    isListOpen: boolean;
	    listElement?: RefInstance<HTMLDivElement>;
	    listPosition: EuiComboBoxOptionsListPosition;
	    listZIndex: number | undefined;
	    matchingOptions: Array<EuiComboBoxOptionOption<T>>;
	    searchValue: string;
	    width: number;
	}
	export class EuiComboBox<T> extends Component<_EuiComboBoxProps<T>, EuiComboBoxState<T>> {
	    static defaultProps: {
	        async: boolean;
	        compressed: boolean;
	        fullWidth: boolean;
	        isClearable: boolean;
	        options: never[];
	        selectedOptions: never[];
	        singleSelection: boolean;
	        prepend: undefined;
	        append: undefined;
	        sortMatchesBy: "none";
	    };
	    state: EuiComboBoxState<T>;
	    _isMounted: boolean;
	    rootId: (idSuffix?: string) => string;
	    comboBoxRefInstance: RefInstance<HTMLDivElement>;
	    comboBoxRefCallback: RefCallback<HTMLDivElement>;
	    autoSizeInputRefInstance: RefInstance<AutosizeInput & HTMLDivElement>;
	    autoSizeInputRefCallback: RefCallback<AutosizeInput & HTMLDivElement>;
	    searchInputRefInstance: RefInstance<HTMLInputElement>;
	    searchInputRefCallback: RefCallback<HTMLInputElement>;
	    listRefInstance: RefInstance<HTMLDivElement>;
	    listRefCallback: RefCallback<HTMLDivElement>;
	    toggleButtonRefInstance: RefInstance<HTMLButtonElement | HTMLSpanElement>;
	    toggleButtonRefCallback: RefCallback<HTMLButtonElement | HTMLSpanElement>;
	    optionsRefInstances: Array<RefInstance<EuiFilterSelectItem>>;
	    optionRefCallback: EuiComboBoxOptionsListProps<T>['optionRef'];
	    openList: () => void;
	    closeList: (event?: Event | undefined) => void;
	    updatePosition: UpdatePositionHandler;
	    incrementActiveOptionIndex: (amount: number) => void;
	    hasActiveOption: () => boolean;
	    clearActiveOption: () => void;
	    clearSearchValue: () => void;
	    removeLastOption: () => void;
	    addCustomOption: (isContainerBlur: boolean, searchValue: string) => void;
	    doesSearchMatchOnlyOption: () => boolean;
	    areAllOptionsSelected: () => boolean;
	    onComboBoxFocus: FocusEventHandler<HTMLInputElement>;
	    setCustomOptions: (isContainerBlur: boolean) => void;
	    onContainerBlur: EventListener;
	    onKeyDown: KeyboardEventHandler<HTMLDivElement>;
	    onOptionEnterKey: OptionHandler<T>;
	    onOptionClick: OptionHandler<T>;
	    onAddOption: (addedOption: EuiComboBoxOptionOption<T>, isContainerBlur?: boolean | undefined) => void;
	    onRemoveOption: OptionHandler<T>;
	    clearSelectedOptions: () => void;
	    onComboBoxClick: () => void;
	    onOpenListClick: () => void;
	    onOptionListScroll: () => void;
	    onCloseListClick: () => void;
	    onSearchChange: NonNullable<EuiComboBoxInputProps<T>['onChange']>;
	    componentDidMount(): void;
	    static getDerivedStateFromProps<T>(nextProps: _EuiComboBoxProps<T>, prevState: EuiComboBoxState<T>): Partial<EuiComboBoxState<T>>;
	    updateMatchingOptionsIfDifferent: (newMatchingOptions: Array<EuiComboBoxOptionOption<T>>) => void;
	    componentDidUpdate(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\combo_box\combo_box_input' {
	export { EuiComboBoxInput, EuiComboBoxInputProps } from '@elastic\eui\src\components\combo_box\combo_box_input\combo_box_input';
	export { EuiComboBoxPill, EuiComboBoxPillProps } from '@elastic\eui\src\components\combo_box\combo_box_input\combo_box_pill';

}
declare module '@elastic/eui' {
	export { EuiComboBox, EuiComboBoxProps } from '@elastic\eui\src\components\combo_box\combo_box';
	export * from '@elastic\eui\src\components\combo_box\combo_box_input';
	export * from '@elastic\eui\src\components\combo_box\combo_box_options_list';
	export { EuiComboBoxOptionOption, EuiComboBoxOptionsListPosition, EuiComboBoxSingleSelectionShape, } from '@elastic\eui\src\components\combo_box\types';

}
declare module '@elastic\eui\src\components\comment_list\comment_event' {
	import { FunctionComponent, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiCommentEventProps extends CommonProps {
	    /**
	     * Author of the comment. Display a small icon or avatar with it if needed.
	     */
	    username: ReactNode;
	    /**
	     * Time of occurrence of the event. Its format is set on the consumer's side
	     */
	    timestamp?: ReactNode;
	    /**
	     * Describes the event that took place
	     */
	    event?: ReactNode;
	    /**
	     * Custom actions that the user can perform from the comment's header
	     */
	    actions?: ReactNode;
	    /**
	     * Use "update" when the comment is primarily showing info about actions that the user or the system has performed (e.g. "user1 edited a case").
	     */
	    type?: EuiCommentType;
	} const typeToClassNameMap: {
	    regular: string;
	    update: string;
	};
	export const TYPES: ("regular" | "update")[];
	export type EuiCommentType = keyof typeof typeToClassNameMap;
	export const EuiCommentEvent: FunctionComponent<EuiCommentEventProps>;
	export {};

}
declare module '@elastic\eui\src\components\comment_list\comment_timeline' {
	import { FunctionComponent, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon';
	export interface EuiCommentTimelineProps extends CommonProps {
	    /**
	     * Main icon that accompanies the comment. The default is `user` for regular comments and `dot` for update comments. To customize, pass a `string` as an `EuiIcon['type']` or any `ReactNode`.
	     */
	    timelineIcon?: ReactNode | IconType;
	    type?: EuiCommentType;
	} const typeToClassNameMap: {
	    regular: string;
	    update: string;
	};
	export const TYPES: ("regular" | "update")[];
	export type EuiCommentType = keyof typeof typeToClassNameMap;
	export const EuiCommentTimeline: FunctionComponent<EuiCommentTimelineProps>;
	export {};

}
declare module '@elastic\eui\src\components\comment_list\comment' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { EuiCommentEventProps } from '@elastic\eui\src\components\comment_list\comment_event';
	import { EuiCommentTimelineProps } from '@elastic\eui\src\components\comment_list\comment_timeline';
	export interface EuiCommentProps extends HTMLAttributes<HTMLDivElement>, EuiCommentEventProps, EuiCommentTimelineProps {
	}
	export const EuiComment: FunctionComponent<EuiCommentProps>;

}
declare module '@elastic\eui\src\components\comment_list\comment_list' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiCommentProps } from '@elastic\eui\src\components\comment_list\comment';
	export type EuiCommentListProps = HTMLAttributes<HTMLDivElement> & CommonProps & {
	    /**
	     * List of comments to render. See #EuiComment
	     */
	    comments?: EuiCommentProps[];
	};
	export const EuiCommentList: FunctionComponent<EuiCommentListProps>;

}
declare module '@elastic/eui' {
	export { EuiComment, EuiCommentProps } from '@elastic\eui\src\components\comment_list\comment';
	export { EuiCommentEvent, EuiCommentType } from '@elastic\eui\src\components\comment_list\comment_event';
	export { EuiCommentTimeline } from '@elastic\eui\src\components\comment_list\comment_timeline';
	export { EuiCommentList, EuiCommentListProps } from '@elastic\eui\src\components\comment_list\comment_list';

}
declare module '@elastic\eui\src\components\control_bar\control_bar' {
	import { ButtonHTMLAttributes, Component, HTMLAttributes, MouseEventHandler, Ref, ReactNode } from 'react';
	import { EuiBreadcrumbsProps } from '@elastic\eui\src\components\breadcrumbs';
	import { EuiButtonIconProps, EuiButtonProps } from '@elastic\eui\src\components\button';
	import { CommonProps, ExclusiveUnion, PropsForAnchor, PropsForButton } from '@elastic\eui\src\components\common';
	import { EuiIconProps } from '@elastic\eui\src\components\icon\icon';
	/**
	 * Extends EuiButton excluding `size`. Requires `label` as the `children`.
	 */
	export interface ButtonControl extends Omit<EuiButtonProps, 'size'> {
	    id: string;
	    label: ReactNode;
	} type ButtonPropsForAnchor = PropsForAnchor<ButtonControl, {
	    buttonRef?: Ref<HTMLAnchorElement>;
	}>; type ButtonPropsForButton = PropsForButton<ButtonControl, {
	    buttonRef?: Ref<HTMLButtonElement>;
	}>; type ButtonControlProps = ExclusiveUnion<ButtonPropsForAnchor, ButtonPropsForButton> & {
	    controlType: 'button';
	};
	/**
	 * Creates a `button` visually styles as a tab.
	 * Requires `label` as the `children`.
	 * `onClick` must be provided to handle the content swapping.
	 */
	export interface TabControl extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'onClick'> {
	    controlType: 'tab';
	    id: string;
	    label: ReactNode;
	    onClick: MouseEventHandler<HTMLButtonElement>;
	}
	/**
	 * Extends EuiBreadcrumbs
	 */
	export interface BreadcrumbControl extends EuiBreadcrumbsProps {
	    controlType: 'breadcrumbs';
	    id: string;
	}
	/**
	 * Simple div controlling color and size text output.
	 * Requires `label` as the `children`.
	 */
	export interface TextControl extends CommonProps, HTMLAttributes<HTMLDivElement> {
	    controlType: 'text';
	    id: string;
	    text: ReactNode;
	}
	export interface SpacerControl {
	    controlType: 'spacer';
	}
	export interface DividerControl {
	    controlType: 'divider';
	}
	/**
	 * Custom props specific to the icon control type
	 */
	export interface IconControlProps {
	    controlType: 'icon';
	    id: string;
	    iconType: string;
	    onClick?: MouseEventHandler;
	}
	/**
	 * Icon can extend EuiIcon
	 * Had to omit `onClick` as it's a valid prop of SVGElement
	 * Also omits `type` and `id` as these are also specific to icon control
	 */
	export interface IconControlType extends Omit<EuiIconProps, 'type' | 'id' | 'onClick'>, IconControlProps {
	}
	/**
	 * Icon can extend EuiButtonIcon
	 * Also omits `iconType` and `id` as these are also specific to icon control
	 */
	export interface IconButtonControlType extends Omit<EuiButtonIconProps, 'iconType' | 'id'>, IconControlProps {
	}
	export type IconControl = ExclusiveUnion<IconControlType, Omit<IconButtonControlType, 'size' | 'display'>>;
	export type Control = ExclusiveUnion<ExclusiveUnion<ExclusiveUnion<ExclusiveUnion<ExclusiveUnion<ButtonControlProps, ExclusiveUnion<BreadcrumbControl, TabControl>>, TextControl>, IconControl>, DividerControl>, SpacerControl>;
	export type EuiControlBarProps = HTMLAttributes<HTMLDivElement> & CommonProps & {
	    /**
	     * Show or hide the content area containing the `children`
	     */
	    showContent?: boolean;
	    /**
	     * An array of controls, actions, and layout spacers to display.
	     * Accepts `'button' | 'tab' | 'breadcrumbs' | 'text' | 'icon' | 'spacer' | 'divider'`
	     */
	    controls: Control[];
	    /**
	     * The default height of the content area.
	     */
	    size?: 's' | 'm' | 'l';
	    /**
	     * Customize the max height.
	     * Best when used with `size=l` as this will ensure the actual height equals the max height set.
	     */
	    maxHeight?: number | string;
	    /**
	     * Set the offset from the left side of the screen.
	     */
	    leftOffset?: number | string;
	    /**
	     * Set the offset from the left side of the screen.
	     */
	    rightOffset?: number | string;
	    /**
	     * The control bar is hidden on mobile by default. Use the `showOnMobile` prop to force it's display on mobile screens.
	     * You'll need to ensure that the content you place into the bar renders as expected on mobile.
	     */
	    showOnMobile?: boolean;
	    /**
	     * By default EuiControlBar will live in a portal, fixed position to the browser window.
	     * Change the position of the bar to live inside a container and be positioned against its parent.
	     */
	    position?: 'fixed' | 'relative' | 'absolute';
	    /**
	     * Optional class applied to the body used when `position = fixed`
	     */
	    bodyClassName?: string;
	    /**
	     * Customize the screen reader heading that helps users find this control. Default is "Page level controls".
	     */
	    landmarkHeading?: string;
	};
	interface EuiControlBarState {
	    selectedTab: string;
	}
	export class EuiControlBar extends Component<EuiControlBarProps, EuiControlBarState> {
	    static defaultProps: {
	        leftOffset: number;
	        rightOffset: number;
	        position: string;
	        size: string;
	        showContent: boolean;
	        showOnMobile: boolean;
	    };
	    private bar;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    state: {
	        selectedTab: string;
	    };
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiControlBar, EuiControlBarProps } from '@elastic\eui\src\components\control_bar\control_bar';

}
declare module '@elastic\eui\src\components\datagrid\data_grid_context' {
	import React, { ReactElement } from 'react';
	import { EuiDataGridFocusedCell, EuiDataGridSorting } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export interface DataGridFocusContextShape {
	    setFocusedCell: (cell: EuiDataGridFocusedCell) => void;
	    onFocusUpdate: (cell: EuiDataGridFocusedCell, updateFocus: Function) => () => void;
	}
	export const DataGridFocusContext: React.Context<DataGridFocusContextShape>;
	export const DataGridSortingContext: React.Context<EuiDataGridSorting | undefined>;
	export interface DataGridWrapperRowsContentsShape {
	    headerRowHeight: number;
	    headerRow: ReactElement;
	    footerRow: ReactElement | null;
	}
	export const DataGridWrapperRowsContext: React.Context<DataGridWrapperRowsContentsShape>;

}
declare module '@elastic\eui\src\components\datagrid\data_grid_cell_buttons' {
	
	import { EuiDataGridColumn } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export const EuiDataGridCellButtons: ({ popoverIsOpen, closePopover, onExpandClick, column, rowIndex, }: {
	    popoverIsOpen: boolean;
	    closePopover: () => void;
	    onExpandClick: () => void;
	    column?: EuiDataGridColumn | undefined;
	    rowIndex: number;
	}) => JSX.Element;

}
declare module '@elastic\eui\src\components\datagrid\data_grid_cell_popover' {
	import { JSXElementConstructor, ReactNode, RefCallback } from 'react';
	import { EuiDataGridColumn, EuiDataGridPopoverContent } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { EuiDataGridCellValueElementProps } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	interface EuiDataGridCellPopoverProps {
	    anchorContent: NonNullable<ReactNode>;
	    cellContentProps: EuiDataGridCellValueElementProps;
	    cellContentsRef: HTMLDivElement | null;
	    closePopover: () => void;
	    column?: EuiDataGridColumn;
	    panelRefFn: RefCallback<HTMLElement | null>;
	    popoverIsOpen: boolean;
	    popoverContent: EuiDataGridPopoverContent;
	    renderCellValue: JSXElementConstructor<EuiDataGridCellValueElementProps> | ((props: EuiDataGridCellValueElementProps) => ReactNode);
	    rowIndex: number;
	}
	export function EuiDataGridCellPopover({ anchorContent, cellContentProps, cellContentsRef, closePopover, column, panelRefFn, popoverContent: PopoverContent, popoverIsOpen, renderCellValue, rowIndex, }: EuiDataGridCellPopoverProps): JSX.Element;
	export {};

}
declare module '@elastic\eui\src\components\datagrid\row_height_utils' {
	import { CSSProperties } from 'react';
	import { EuiDataGridStyle, EuiDataGridRowHeightOption, EuiDataGridRowHeightsOptions } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export class RowHeightUtils {
	    private styles;
	    private fakeCell;
	    computeStylesForGridCell(gridStyles: EuiDataGridStyle): void;
	    calculateHeightForLineCount(lineCount: number): number;
	    getCalculatedHeight(heightOption: EuiDataGridRowHeightOption, defaultHeight: number): number;
	}
	export const getStylesForCell: (rowHeightsOptions: EuiDataGridRowHeightsOptions, rowIndex: number) => CSSProperties;

}
declare module '@elastic\eui\src\components\datagrid\data_grid_cell' {
	import React, { Component, FocusEvent, HTMLAttributes, JSXElementConstructor, MutableRefObject, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiDataGridColumn, EuiDataGridPopoverContent, EuiDataGridRowHeightsOptions } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export interface EuiDataGridCellValueElementProps {
	    /**
	     * index of the row being rendered, 0 represents the first row. This index always includes
	     * pagination offset, meaning the first rowIndex in a grid is `pagination.pageIndex * pagination.pageSize`
	     * so take care if you need to adjust the rowIndex to fit your data
	     */
	    rowIndex: number;
	    /**
	     * id of the column being rendered, the value comes from the #EuiDataGridColumn `id`
	     */
	    columnId: string;
	    /**
	     * callback function to set custom props & attributes on the cell's wrapping `div` element;
	     * it's best to wrap calls to `setCellProps` in a `useEffect` hook
	     */
	    setCellProps: (props: CommonProps & HTMLAttributes<HTMLDivElement>) => void;
	    /**
	     * whether or not the cell is expandable, comes from the #EuiDataGridColumn `isExpandable` which defaults to `true`
	     */
	    isExpandable: boolean;
	    /**
	     * whether or not the cell is expanded
	     */
	    isExpanded: boolean;
	    /**
	     * when rendering the cell, `isDetails` is false; when the cell is expanded, `renderCellValue` is called again to render into the details popover and `isDetails` is true
	     */
	    isDetails: boolean;
	}
	export interface EuiDataGridCellProps {
	    rowIndex: number;
	    visibleRowIndex: number;
	    colIndex: number;
	    column?: EuiDataGridColumn;
	    columnId: string;
	    columnType?: string | null;
	    width?: number;
	    interactiveCellId: string;
	    isExpandable: boolean;
	    className?: string;
	    popoverContent: EuiDataGridPopoverContent;
	    renderCellValue: JSXElementConstructor<EuiDataGridCellValueElementProps> | ((props: EuiDataGridCellValueElementProps) => ReactNode);
	    setRowHeight?: (height: number) => void;
	    getRowHeight?: (rowIndex: number) => number;
	    style?: React.CSSProperties;
	    rowHeightsOptions?: EuiDataGridRowHeightsOptions;
	}
	interface EuiDataGridCellState {
	    cellProps: CommonProps & HTMLAttributes<HTMLDivElement>;
	    popoverIsOpen: boolean;
	    isFocused: boolean;
	    isEntered: boolean;
	    enableInteractions: boolean;
	    disableCellTabIndex: boolean;
	}
	export type EuiDataGridCellValueProps = Omit<EuiDataGridCellProps, 'width' | 'interactiveCellId' | 'popoverContent'>;
	export class EuiDataGridCell extends Component<EuiDataGridCellProps, EuiDataGridCellState> {
	    cellRef: React.MutableRefObject<HTMLDivElement | null>;
	    observer: any;
	    popoverPanelRef: MutableRefObject<HTMLElement | null>;
	    cellContentsRef: HTMLDivElement | null;
	    state: EuiDataGridCellState;
	    unsubscribeCell?: Function;
	    focusTimeout: number | undefined;
	    style: null;
	    setCellRef: (ref: HTMLDivElement | null) => void;
	    static contextType: React.Context<import ("@elastic\eui\src\components\datagrid\data_grid_context").DataGridFocusContextShape>;
	    getInteractables: () => never[] | NodeListOf<HTMLElement>;
	    takeFocus: () => void;
	    componentDidMount(): void;
	    onFocusUpdate: (isFocused: boolean) => void;
	    componentWillUnmount(): void;
	    shouldComponentUpdate(nextProps: EuiDataGridCellProps, nextState: EuiDataGridCellState): boolean;
	    setCellProps: (cellProps: HTMLAttributes<HTMLDivElement>) => void;
	    setCellContentsRef: (ref: HTMLDivElement | null) => void;
	    onFocus: (e: FocusEvent<HTMLDivElement>) => void;
	    onBlur: () => void;
	    preventTabbing: () => void;
	    enableTabbing: () => void;
	    closePopover: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\list_group\list_group_item' {
	import React, { HTMLAttributes, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, ReactElement, MouseEventHandler, FunctionComponent } from 'react';
	import { EuiButtonIconPropsForButton } from '@elastic\eui\src\components\button';
	import { IconType, EuiIconProps } from '@elastic\eui\src\components\icon';
	import { ExclusiveUnion, CommonProps } from '@elastic\eui\src\components\common'; type ItemSize = 'xs' | 's' | 'm' | 'l';
	export const SIZES: ("xs" | "s" | "m" | "l")[]; type Color = 'inherit' | 'primary' | 'text' | 'subdued' | 'ghost';
	export const COLORS: Color[];
	export type EuiListGroupItemProps = CommonProps & Omit<ExclusiveUnion<ExclusiveUnion<ButtonHTMLAttributes<HTMLButtonElement>, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>, HTMLAttributes<HTMLSpanElement>>, 'onClick' | 'color' | 'target' | 'rel'> & {
	    /**
	     * Size of the label text
	     */
	    size?: ItemSize;
	    /**
	     * By default the item will inherit the color of its wrapper (button/link/span),
	     * otherwise pass one of the acceptable options
	     */
	    color?: Color;
	    /**
	     * Content to be displayed in the list item
	     */
	    label: ReactNode;
	    /**
	     * Apply styles indicating an item is active
	     */
	    isActive?: boolean;
	    /**
	     * Apply styles indicating an item is disabled
	     */
	    isDisabled?: boolean;
	    /**
	     * Make the list item label a link.
	     * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
	     */
	    href?: string;
	    target?: string;
	    rel?: string;
	    /**
	     * Adds `EuiIcon` of `EuiIcon.type`
	     */
	    iconType?: IconType;
	    /**
	     * Further extend the props applied to EuiIcon
	     */
	    iconProps?: Omit<EuiIconProps, 'type'>;
	    /**
	     * Custom node to pass as the icon. Cannot be used in conjunction
	     * with `iconType` and `iconProps`.
	     */
	    icon?: ReactElement;
	    /**
	     * Display tooltip on list item
	     */
	    showToolTip?: boolean;
	    /**
	     * Adds an `EuiButtonIcon` to the right side of the item; `iconType` is required;
	     * pass `alwaysShow` if you don't want the default behavior of only showing on hover
	     */
	    extraAction?: EuiButtonIconPropsForButton & {
	        alwaysShow?: boolean;
	    };
	    /**
	     * Make the list item label a button.
	     * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
	     */
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Allow link text to wrap
	     */
	    wrapText?: boolean;
	    /**
	     * Pass-through ref reference specifically for targeting
	     * instances where the item content is rendered as a `button`
	     */
	    buttonRef?: React.Ref<HTMLButtonElement>;
	};
	export const EuiListGroupItem: FunctionComponent<EuiListGroupItemProps>;
	export {};

}
declare module '@elastic\eui\src\components\list_group\list_group' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { EuiListGroupItemProps } from '@elastic\eui\src\components\list_group\list_group_item';
	import { CommonProps } from '@elastic\eui\src\components\common'; type GutterSize = 'none' | 's' | 'm';
	export const GUTTER_SIZES: GutterSize[];
	export type EuiListGroupProps = CommonProps & Omit<HTMLAttributes<HTMLUListElement>, 'color'> & {
	    /**
	     * Add a border to the list container
	     */
	    bordered?: boolean;
	    /**
	     * Remove container padding, stretching list items to the edges
	     */
	    flush?: boolean;
	    /**
	     * Spacing between list items
	     */
	    gutterSize?: GutterSize;
	    /**
	     * Items to display in this group. See #EuiListGroupItem
	     */
	    listItems?: EuiListGroupItemProps[];
	    /**
	     * Change the colors of all `listItems` at once
	     */
	    color?: EuiListGroupItemProps['color'];
	    /**
	     * Change the size of all `listItems` at once
	     */
	    size?: EuiListGroupItemProps['size'];
	    /**
	     * Sets the max-width of the page,
	     * set to `true` to use the default size,
	     * set to `false` to not restrict the width,
	     * set to a number for a custom width in px,
	     * set to a string for a custom width in custom measurement.
	     */
	    maxWidth?: boolean | number | string;
	    /**
	     * Display tooltips on all list items
	     */
	    showToolTips?: boolean;
	    /**
	     * Allow link text to wrap vs truncated
	     */
	    wrapText?: boolean;
	    ariaLabelledby?: string;
	};
	export const EuiListGroup: FunctionComponent<EuiListGroupProps>;
	export {};

}
declare module '@elastic\eui\src\components\list_group\pinnable_list_group\pinnable_list_group' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiListGroupProps } from '@elastic\eui\src\components\list_group\list_group';
	import { EuiListGroupItemProps } from '@elastic\eui\src\components\list_group\list_group_item';
	export type EuiPinnableListGroupItemProps = EuiListGroupItemProps & {
	    /**
	     * Saves the pinned status and changes the visibility of the pin icon
	     */
	    pinned?: boolean;
	    /**
	     * Passing `onPinClick` to the full EuiPinnableListGroup, will make every item pinnable.
	     * Set this property to `false` to turn off individual item pinnability
	     */
	    pinnable?: boolean;
	};
	export interface EuiPinnableListGroupProps extends CommonProps, EuiListGroupProps {
	    /**
	     * Extends `EuiListGroupItemProps`, at the very least, expecting a `label`.
	     * See #EuiPinnableListGroupItem
	     */
	    listItems: EuiPinnableListGroupItemProps[];
	    /**
	     * Shows the pin icon and calls this function on click.
	     * Returns `item: EuiPinnableListGroupItemProps`
	     */
	    onPinClick: (item: EuiPinnableListGroupItemProps) => void;
	    /**
	     * The pin icon needs a title/aria-label for accessibility.
	     * It is a function that passes the item back and must return a string `(item) => string`.
	     * Default is `"Pin item"`
	     */
	    pinTitle?: (item: EuiPinnableListGroupItemProps) => string;
	    /**
	     * The unpin icon needs a title/aria-label for accessibility.
	     * It is a function that passes the item back and must return a string `(item) => string`.
	     * Default is `"Unpin item"`
	     */
	    unpinTitle?: (item: EuiPinnableListGroupItemProps) => string;
	}
	export const EuiPinnableListGroup: FunctionComponent<EuiPinnableListGroupProps>;

}
declare module '@elastic\eui\src\components\list_group\pinnable_list_group' {
	export { EuiPinnableListGroup, EuiPinnableListGroupProps, EuiPinnableListGroupItemProps, } from '@elastic\eui\src\components\list_group\pinnable_list_group\pinnable_list_group';

}
declare module '@elastic/eui' {
	export { EuiListGroup, EuiListGroupProps } from '@elastic\eui\src\components\list_group\list_group';
	export { EuiListGroupItem, EuiListGroupItemProps } from '@elastic\eui\src\components\list_group\list_group_item';
	export { EuiPinnableListGroup, EuiPinnableListGroupProps, EuiPinnableListGroupItemProps, } from '@elastic\eui\src\components\list_group\pinnable_list_group';

}
declare module '@elastic\eui\src\components\datagrid\data_grid_types' {
	import { ComponentType, JSXElementConstructor, ReactNode } from 'react';
	import { EuiDataGridCellProps } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	import { EuiListGroupItemProps } from '@elastic\eui\src\components\list_group';
	import { EuiButtonEmpty, EuiButtonIcon } from '@elastic\eui\src\components\button';
	import { ExclusiveUnion } from '@elastic\eui\src\components\common';
	export interface EuiDataGridControlColumn {
	    /**
	     * Used as the React `key` when rendering content
	     */
	    id: string;
	    /**
	     * Component to render in the column header
	     */
	    headerCellRender: ComponentType;
	    /**
	     * Component to render for each row in the column
	     */
	    rowCellRender: EuiDataGridCellProps['renderCellValue'];
	    /**
	     * Width of the column, uses are unable to change this
	     */
	    width: number;
	}
	export interface EuiDataGridColumn {
	    /**
	     * The unique identifier for this column
	     */
	    id: string;
	    /**
	     * A `ReactNode` used when rendering the column header. When providing complicated content, please make sure to utilize CSS to respect truncation as space allows. Check the docs example.
	     */
	    display?: ReactNode;
	    /**
	     * A Schema to use for the column. Built-in values are ['boolean', 'currency', 'datetime', 'numeric', 'json'] but can be expanded by defining your own #EuiDataGrid `schemaDetectors` (for in-memory detection). In general, it is advised to pass in a value here when you are sure of the schema ahead of time, so that you don't need to rely on the automatic detection.
	     */
	    schema?: string;
	    /**
	     * Defaults to true, always true if cellActions are defined. Defines whether or not the column's cells can be expanded with a popup onClick / keydown.
	     */
	    isExpandable?: boolean;
	    /**
	     * Whether this column's width can be changed by the user, defaults to true
	     */
	    isResizable?: boolean;
	    /**
	     * Initial width (in pixels) of the column
	     */
	    initialWidth?: number;
	    /**
	     * Whether this column is sortable
	     */
	    isSortable?: boolean;
	    /**
	     * Default sort direction of the column
	     */
	    defaultSortDirection?: 'asc' | 'desc';
	    /**
	     * Display name as text for column. This can be used to display column name in column selector and column sorting where `display` won't be used. If not used `id` will be shown as column name in column selector and column sorting.
	     */
	    displayAsText?: string;
	    /**
	     * Configuration of column actions. Set to false to disable or use #EuiDataGridColumnActions to configure the actions displayed in the header cell of the column.
	     */
	    actions?: false | EuiDataGridColumnActions;
	    /**
	     * Additional actions displayed as icon on hover / focus, and in the expanded view of the cell containing the value
	     */
	    cellActions?: EuiDataGridColumnCellAction[];
	}
	export type EuiDataGridColumnCellAction = JSXElementConstructor<EuiDataGridColumnCellActionProps> | ((props: EuiDataGridColumnCellActionProps) => ReactNode);
	export interface EuiDataGridColumnActions {
	    /**
	     * Show/hide/configure the action to hide a column, provided EuiListGroupItemProps are merged
	     */
	    showHide?: boolean | EuiListGroupItemProps;
	    /**
	     * Show/hide/configure the action that switches the actual column with the column to the left side, provided EuiListGroupItemProps are merged
	     */
	    showMoveLeft?: boolean | EuiListGroupItemProps;
	    /**
	     * Show/hide/configure the action that switches the actual column with the column to the right side, provided EuiListGroupItemProps are merged
	     */
	    showMoveRight?: boolean | EuiListGroupItemProps;
	    /**
	     * Show/hide/configure the action to sort ascending by the actual column, provided EuiListGroupItemProps are merged
	     */
	    showSortAsc?: boolean | EuiListGroupItemProps;
	    /**
	     * Show/hide/configure the action to sort descending by the actual column, provided EuiListGroupItemProps are merged
	     */
	    showSortDesc?: boolean | EuiListGroupItemProps;
	    /**
	     * Append additional actions
	     */
	    additional?: EuiListGroupItemProps[];
	}
	export interface EuiDataGridColumnCellActionProps {
	    /**
	     * The index of the row that contains cell's data
	     */
	    rowIndex: number;
	    /**
	     * The id of the column that contains the cell's data
	     */
	    columnId: string;
	    /**
	     * React component representing the action displayed in the cell
	     */
	    Component: typeof EuiButtonEmpty | typeof EuiButtonIcon;
	    /**
	     * Determines whether the cell's action is displayed expanded (in the Popover)
	     */
	    isExpanded: boolean;
	    /**
	     * Closes the popover if a cell is expanded.
	     * The prop is provided for an expanded cell only.
	     */
	    closePopover: () => void;
	}
	export interface EuiDataGridColumnVisibility {
	    /**
	     * An array of #EuiDataGridColumn `id`s dictating the order and visibility of columns.
	     */
	    visibleColumns: string[];
	    /**
	     * A callback for when a column's visibility or order is modified by the user.
	     */
	    setVisibleColumns: (visibleColumns: string[]) => void;
	}
	export interface EuiDataGridColumnWidths {
	    [key: string]: number;
	}
	export type EuiDataGridStyleFontSizes = 's' | 'm' | 'l';
	export type EuiDataGridStyleBorders = 'all' | 'horizontal' | 'none';
	export type EuiDataGridStyleHeader = 'shade' | 'underline';
	export type EuiDataGridStyleFooter = 'shade' | 'overline' | 'striped';
	export type EuiDataGridStyleRowHover = 'highlight' | 'none';
	export type EuiDataGridStyleCellPaddings = 's' | 'm' | 'l';
	export interface EuiDataGridStyle {
	    /**
	     * Size of fonts used within the row and column cells
	     */
	    fontSize?: EuiDataGridStyleFontSizes;
	    /**
	     * Border uses for the row and column cells
	     */
	    border?: EuiDataGridStyleBorders;
	    /**
	     * If set to true, rows will alternate zebra striping for clarity
	     */
	    stripes?: boolean;
	    /**
	     * Visual style for the column headers. Recommendation is to use the `underline` style in times when #EuiDataGrid `toolbarVisibility` is set to `false`.
	     */
	    header?: EuiDataGridStyleHeader;
	    /**
	     * Visual style for the column footers.
	     */
	    footer?: EuiDataGridStyleFooter;
	    /**
	     * Will define what visual style to show on row hover
	     */
	    rowHover?: EuiDataGridStyleRowHover;
	    /**
	     * Defines the padding with the row and column cells
	     */
	    cellPadding?: EuiDataGridStyleCellPaddings;
	    /**
	     * If set to true, the footer row will be sticky
	     */
	    stickyFooter?: boolean;
	}
	export interface EuiDataGridToolBarVisibilityColumnSelectorOptions {
	    /**
	     * When `false`, removes the ability to show & hide columns through the UI
	     */
	    allowHide?: boolean;
	    /**
	     * When `false`, removes the ability to re-order columns through the UI
	     */
	    allowReorder?: boolean;
	}
	export interface EuiDataGridToolBarVisibilityOptions {
	    /**
	     * Allows the ability for the user to hide fields and sort columns, boolean or a #EuiDataGridToolBarVisibilityColumnSelectorOptions
	     */
	    showColumnSelector?: boolean | EuiDataGridToolBarVisibilityColumnSelectorOptions;
	    /**
	     * Allows the ability for the user to set the grid density. If on, this merges against what is provided in #EuiDataGridStyle
	     */
	    showStyleSelector?: boolean;
	    /**
	     * Allows the ability for the user to sort rows based upon column values
	     */
	    showSortSelector?: boolean;
	    /**
	     * Allows user to be able to full screen the data grid. If set to `false` make sure your grid fits within a large enough panel to still show the other controls.
	     */
	    showFullScreenSelector?: boolean;
	    /**
	     * Will place any passed node into the toolbar in front of the fullscreen button. Recommend using EuiButtonEmpty with the props shown in the examples.
	     */
	    additionalControls?: ReactNode;
	}
	export interface EuiDataGridPaginationProps {
	    /**
	     * The index of the current page, starts at 0 for the first page
	     */
	    pageIndex: number;
	    /**
	     * How many rows should initially be shown per page
	     */
	    pageSize: number;
	    /**
	     * An array of page sizes the user can select from.
	     * Leave this prop undefined or use an empty array to hide "Rows per page" select button
	     */
	    pageSizeOptions?: number[];
	    /**
	     * A callback for when the user changes the page size selection
	     */
	    onChangeItemsPerPage: (itemsPerPage: number) => void;
	    /**
	     * A callback for when the current page index changes
	     */
	    onChangePage: (pageIndex: number) => void;
	}
	export interface EuiDataGridSorting {
	    /**
	     * A function that receives updated column sort details in response to user interactions in the toolbar controls
	     */
	    onSort: (columns: EuiDataGridSorting['columns']) => void;
	    /**
	     * An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`
	     */
	    columns: Array<{
	        id: string;
	        direction: 'asc' | 'desc';
	    }>;
	}
	export interface EuiDataGridInMemory {
	    /**
	      Given the data flow Sorting->Pagination:
	      Each step can be performed by service calls or in-memory by the grid.
	      However, we cannot allow any service calls after an in-memory operation.
	      E.g. if Pagination requires a service call the grid cannot perform
	      in-memory Sorting. This means a single value representing the
	      service / in-memory boundary can be used. Thus there are four states for in-memory's level:
	      * "enhancements" - no in-memory operations, but use the available data to enhance the grid
	      * "pagination" - only pagination is performed in-memory
	      * "sorting" - sorting & pagination is performed in-memory
	   */
	    level: 'enhancements' | 'pagination' | 'sorting';
	    /**
	     * An array of column ids for the in-memory processing to skip
	     */
	    skipColumns?: string[];
	}
	export type EuiDataGridFocusedCell = [number, number];
	export interface EuiDataGridInMemoryValues {
	    [key: string]: {
	        [key: string]: string;
	    };
	}
	export interface EuiDataGridPopoverContentProps {
	    /**
	     * your `cellValueRenderer` as a ReactElement; allows wrapping the rendered content: `({children}) => <div>{children}</div>`
	     */
	    children: ReactNode;
	    /**
	     * div element the cell contents have been rendered into; useful for processing the rendered text
	     */
	    cellContentsElement: HTMLDivElement;
	}
	export type EuiDataGridPopoverContent = ComponentType<EuiDataGridPopoverContentProps>;
	export interface EuiDataGridPopoverContents {
	    [key: string]: EuiDataGridPopoverContent;
	}
	export interface EuiDataGridOnColumnResizeData {
	    columnId: string;
	    width: number;
	}
	export type EuiDataGridOnColumnResizeHandler = (data: EuiDataGridOnColumnResizeData) => void;
	export type EuiDataGridRowHeightOption = number | ExclusiveUnion<{
	    lineCount: number;
	}, {
	    height: number;
	}>;
	export interface EuiDataGridRowHeightsOptions {
	    /**
	     * Defines the default size for all rows. It can be line count or just height.
	     */
	    defaultHeight?: EuiDataGridRowHeightOption;
	    /**
	     * Defines the height for a specific row. It can be line count or just height.
	     */
	    rowHeights?: Record<number, EuiDataGridRowHeightOption>;
	}

}
declare module '@elastic\eui\src\components\token\token_map' {
	import { TokenProps } from '@elastic\eui\src\components\token\token';
	export type EuiTokenMapType = 'tokenAnnotation' | 'tokenArray' | 'tokenBoolean' | 'tokenClass' | 'tokenConstant' | 'tokenElement' | 'tokenEnum' | 'tokenEnumMember' | 'tokenEvent' | 'tokenException' | 'tokenField' | 'tokenFile' | 'tokenFunction' | 'tokenInterface' | 'tokenKey' | 'tokenMethod' | 'tokenModule' | 'tokenNamespace' | 'tokenNull' | 'tokenNumber' | 'tokenObject' | 'tokenOperator' | 'tokenPackage' | 'tokenParameter' | 'tokenProperty' | 'tokenRepo' | 'tokenString' | 'tokenStruct' | 'tokenDate' | 'tokenIP' | 'tokenNested' | 'tokenAlias' | 'tokenShape' | 'tokenGeo' | 'tokenRange' | 'tokenSymbol' | 'tokenVariable' | 'tokenBinary' | 'tokenJoin' | 'tokenPercolator' | 'tokenFlattened' | 'tokenRankFeature' | 'tokenRankFeatures' | 'tokenKeyword' | 'tokenCompletionSuggester' | 'tokenDenseVector' | 'tokenText' | 'tokenTokenCount' | 'tokenSearchType' | 'tokenHistogram';
	/**
	 * Most of the style combinations for tokens are semi-arbitrary. However, there was an effort
	 * to use the square shape for more common token types like string and number. Reserving the
	 * circle shape for more uncommon token types so they grab attention.
	 */
	export const TOKEN_MAP: {
	    [mapType in EuiTokenMapType]: Omit<TokenProps, 'iconType'>;
	};

}
declare module '@elastic\eui\src\components\token\token' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon'; type TokenSize = 'xs' | 's' | 'm' | 'l'; type TokenShape = 'circle' | 'square' | 'rectangle'; type TokenFill = 'dark' | 'light' | 'none'; type TokenColor = 'euiColorVis0' | 'euiColorVis1' | 'euiColorVis2' | 'euiColorVis3' | 'euiColorVis4' | 'euiColorVis5' | 'euiColorVis6' | 'euiColorVis7' | 'euiColorVis8' | 'euiColorVis9' | 'gray';
	export const SIZES: ("xs" | "s" | "m" | "l")[];
	export const SHAPES: TokenShape[];
	export const FILLS: ("none" | "dark" | "light")[];
	export const COLORS: TokenColor[];
	export interface TokenProps {
	    /**
	     * An EUI icon type
	     */
	    iconType: IconType;
	    /**
	     * For best results use one of the vis color names (or 'gray').
	     * Or supply your own color (can be used with dark or no fill only).
	     * Default: `gray`
	     */
	    color?: TokenColor | string;
	    /**
	     * Outer shape surrounding the icon
	     * Default: `circle`
	     */
	    shape?: TokenShape;
	    /**
	     * `light` for lightened color with border, `dark` for solid, or `none`
	     * Default: `light`
	     */
	    fill?: TokenFill;
	    /**
	     * Size of the token
	     */
	    size?: TokenSize;
	    /**
	     * The icon's title. Required for accessibility
	     */
	    title?: string;
	    'aria-label'?: string;
	    'aria-labelledby'?: string;
	    'aria-describedby'?: string;
	}
	export type EuiTokenProps = CommonProps & TokenProps & Omit<HTMLAttributes<HTMLSpanElement>, 'title'>;
	export const EuiToken: FunctionComponent<EuiTokenProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiToken, EuiTokenProps, SIZES as TOKEN_SIZES, SHAPES as TOKEN_SHAPES, COLORS as TOKEN_COLORS, } from '@elastic\eui\src\components\token\token';

}
declare module '@elastic\eui\src\components\datagrid\data_grid_schema' {
	import { ReactNode } from 'react';
	import { EuiDataGridColumn, EuiDataGridInMemory, EuiDataGridInMemoryValues } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { IconType } from '@elastic\eui\src\components\icon';
	import { EuiTokenProps } from '@elastic\eui\src\components\token';
	export interface EuiDataGridSchemaDetector {
	    /**
	     * The name of this data type, matches #EuiDataGridColumn / schema `schema`
	     */
	    type: string;
	    /**
	     * The function given the text value of a cell and returns a score of [0...1] of how well the value matches this data type
	     */
	    detector: (value: string) => number;
	    /**
	     * A custom comparator function when performing in-memory sorting on this data type, takes `(a: string, b: string, direction: 'asc' | 'desc) => -1 | 0 | 1`
	     */
	    comparator?: (a: string, b: string, direction: 'asc' | 'desc') => -1 | 0 | 1;
	    /**
	     * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
	     */
	    icon: IconType;
	    /**
	     * The color associated with this data type; it's used to color the icon token
	     */
	    color?: EuiTokenProps['color'] | string;
	    /**
	     * Text for how to represent an ascending sort of this data type, e.g. 'A -> Z'
	     */
	    sortTextAsc: ReactNode;
	    /**
	     * Text for how to represent a descending sort of this data type, e.g. 'Z -> A'
	     */
	    sortTextDesc: ReactNode;
	    /**
	     * Whether this column is sortable (defaults to true)
	     */
	    isSortable?: boolean;
	    /**
	     *  This property controls the capitalization of text
	     */
	    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
	    /**
	     * Default sort direction of the column
	     */
	    defaultSortDirection?: 'asc' | 'desc';
	}
	export const schemaDetectors: EuiDataGridSchemaDetector[];
	export interface EuiDataGridSchema {
	    [columnId: string]: {
	        columnType: string | null;
	    };
	}
	export interface SchemaTypeScore {
	    type: string;
	    score: number;
	}
	export function useDetectSchema(inMemory: EuiDataGridInMemory | undefined, inMemoryValues: EuiDataGridInMemoryValues, schemaDetectors: EuiDataGridSchemaDetector[] | undefined, definedColumnSchemas: {
	    [key: string]: string;
	}, autoDetectSchema: boolean): any;
	export function useMergedSchema(detectedSchema: EuiDataGridSchema, columns: EuiDataGridColumn[]): {
	    [x: string]: {
	        columnType: string | null;
	    };
	};
	export function getDetailsForSchema(detectors: EuiDataGridSchemaDetector[], providedSchema: string | null): EuiDataGridSchemaDetector;

}
declare module '@elastic\eui\src\components\drag_and_drop\drag_drop_context' {
	import React, { FunctionComponent } from 'react';
	import { DragDropContextProps } from 'react-beautiful-dnd'; type EuiDraggingType = string | null;
	export interface EuiDragDropContextProps {
	    isDraggingType: EuiDraggingType;
	}
	export const EuiDragDropContextContext: React.Context<EuiDragDropContextProps>;
	export const EuiDragDropContext: FunctionComponent<DragDropContextProps>;
	export {};

}
declare module '@elastic\eui\src\components\drag_and_drop\droppable' {
	import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';
	import { DroppableProps } from 'react-beautiful-dnd';
	import { CommonProps } from '@elastic\eui\src\components\common'; const spacingToClassNameMap: {
	    none: null;
	    s: string;
	    m: string;
	    l: string;
	};
	export type EuiDroppableSpacing = keyof typeof spacingToClassNameMap;
	export interface EuiDroppableProps extends CommonProps, Omit<DroppableProps, 'children'> {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactElement | ReactElement[] | DroppableProps['children'];
	    className?: string;
	    /**
	     * Makes its items immutable. Dragging creates cloned items that can be dropped elsewhere.
	     */
	    cloneDraggables?: boolean;
	    style?: CSSProperties;
	    /**
	     * Adds padding to the droppable area
	     */
	    spacing?: EuiDroppableSpacing;
	    /**
	     * Adds an EuiPanel style to the droppable area
	     */
	    withPanel?: boolean;
	    /**
	     * Allow the panel to flex-grow?
	     */
	    grow?: boolean;
	}
	export const EuiDroppableContext: React.Context<{
	    cloneItems: boolean;
	}>;
	export const EuiDroppable: FunctionComponent<EuiDroppableProps>;
	export {};

}
declare module '@elastic\eui\src\components\drag_and_drop\draggable' {
	import { CSSProperties, FunctionComponent, ReactElement } from 'react';
	import { DraggableProps } from 'react-beautiful-dnd';
	import { CommonProps } from '@elastic\eui\src\components\common'; const spacingToClassNameMap: {
	    none: null;
	    s: string;
	    m: string;
	    l: string;
	};
	export type EuiDraggableSpacing = keyof typeof spacingToClassNameMap;
	export interface EuiDraggableProps extends CommonProps, Omit<DraggableProps, 'children'> {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactElement | DraggableProps['children'];
	    className?: string;
	    /**
	     * Whether the `children` will provide and set up its own drag handle
	     */
	    customDragHandle?: boolean;
	    /**
	     * Whether the item is currently in a position to be removed
	     */
	    isRemovable?: boolean;
	    /**
	     * Adds padding to the draggable item
	     */
	    spacing?: EuiDraggableSpacing;
	    style?: CSSProperties;
	}
	export const EuiDraggable: FunctionComponent<EuiDraggableProps>;
	export {};

}
declare module '@elastic\eui\src\components\drag_and_drop\services' {
	import { DraggableLocation } from 'react-beautiful-dnd';
	interface DropResult {
	    [droppableId: string]: any[];
	}
	export const euiDragDropReorder: <T extends any[]>(list: T, startIndex: number, endIndex: number) => T;
	export const euiDragDropMove: (sourceList: any[], destinationList: any[], dropResultSource: DraggableLocation, dropResultDestination: DraggableLocation) => DropResult;
	export const euiDragDropCopy: (sourceList: any[], destinationList: any[], dropResultSource: DraggableLocation, dropResultDestination: DraggableLocation, idModification: {
	    property: string | number;
	    modifier: () => string | number;
	}) => DropResult;
	export {};

}
declare module '@elastic/eui' {
	export { EuiDragDropContext, EuiDragDropContextProps, } from '@elastic\eui\src\components\drag_and_drop\drag_drop_context';
	export { EuiDraggable, EuiDraggableProps } from '@elastic\eui\src\components\drag_and_drop\draggable';
	export { EuiDroppable, EuiDroppableProps } from '@elastic\eui\src\components\drag_and_drop\droppable';
	export { euiDragDropCopy, euiDragDropMove, euiDragDropReorder, } from '@elastic\eui\src\components\drag_and_drop\services';
	export { DraggableLocation, DraggableProps, DraggableProvidedDragHandleProps, DragDropContextProps, DragStart, DroppableProps, DropResult, ResponderProvided, } from 'react-beautiful-dnd';

}
declare module '@elastic\eui\src\components\datagrid\column_sorting_draggable' {
	import { FunctionComponent } from 'react';
	import { EuiDataGridSchema, EuiDataGridSchemaDetector } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	import { EuiDataGridSorting } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export interface EuiDataGridColumnSortingDraggableProps {
	    id: string;
	    direction: string;
	    index: number;
	    sorting: EuiDataGridSorting;
	    schema: EuiDataGridSchema;
	    schemaDetectors: EuiDataGridSchemaDetector[];
	    /**
	     * Value to be shown in column sorting popover.
	     */
	    display: string;
	}
	export const defaultSortAscLabel: JSX.Element;
	export const defaultSortDescLabel: JSX.Element;
	export const EuiDataGridColumnSortingDraggable: FunctionComponent<EuiDataGridColumnSortingDraggableProps>;

}
declare module '@elastic\eui\src\components\datagrid\column_actions' {
	import { EuiDataGridColumn, EuiDataGridSorting } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { EuiListGroupItemProps } from '@elastic\eui\src\components\list_group';
	import { EuiDataGridSchema, EuiDataGridSchemaDetector } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	export function getColumnActions(column: EuiDataGridColumn, columns: EuiDataGridColumn[], schema: EuiDataGridSchema, schemaDetectors: EuiDataGridSchemaDetector[], setVisibleColumns: (columnId: string[]) => void, setIsPopoverOpen: (value: boolean) => void, sorting: EuiDataGridSorting | undefined, switchColumnPos: (colFromId: string, colToId: string) => void): EuiListGroupItemProps[];

}
declare module '@elastic\eui\src\components\datagrid\column_selector' {
	import React, { ReactElement } from 'react';
	import { EuiDataGridColumn, EuiDataGridColumnVisibility, EuiDataGridToolBarVisibilityOptions } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export const useDataGridColumnSelector: (availableColumns: EuiDataGridColumn[], columnVisibility: EuiDataGridColumnVisibility, showColumnSelector: EuiDataGridToolBarVisibilityOptions['showColumnSelector'], displayValues: {
	    [key: string]: string;
	}) => [React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>, EuiDataGridColumn[], (columns: string[]) => void, (colFrom: string, colTo: string) => void];

}
declare module '@elastic\eui\src\components\datagrid\column_sorting' {
	import { ReactNode } from 'react';
	import { EuiDataGridColumn, EuiDataGridSorting } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { EuiDataGridSchema, EuiDataGridSchemaDetector } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	export const useDataGridColumnSorting: (columns: EuiDataGridColumn[], sorting: EuiDataGridSorting | undefined, schema: EuiDataGridSchema, schemaDetectors: EuiDataGridSchemaDetector[], displayValues: {
	    [key: string]: string;
	}) => ReactNode;

}
declare module '@elastic\eui\src\components\datagrid\data_grid_footer_row' {
	import React, { HTMLAttributes } from 'react';
	import { EuiDataGridControlColumn, EuiDataGridColumn, EuiDataGridColumnWidths, EuiDataGridPopoverContents } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiDataGridCellProps } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	import { EuiDataGridSchema } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	export type EuiDataGridFooterRowProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    rowIndex: number;
	    leadingControlColumns: EuiDataGridControlColumn[];
	    trailingControlColumns: EuiDataGridControlColumn[];
	    columns: EuiDataGridColumn[];
	    schema: EuiDataGridSchema;
	    popoverContents: EuiDataGridPopoverContents;
	    columnWidths: EuiDataGridColumnWidths;
	    defaultColumnWidth?: number | null;
	    renderCellValue: EuiDataGridCellProps['renderCellValue'];
	    interactiveCellId: EuiDataGridCellProps['interactiveCellId'];
	    visibleRowIndex?: number;
	}; const EuiDataGridFooterRow: React.MemoExoticComponent<React.ForwardRefExoticComponent<CommonProps & React.HTMLAttributes<HTMLDivElement> & {
	    rowIndex: number;
	    leadingControlColumns: EuiDataGridControlColumn[];
	    trailingControlColumns: EuiDataGridControlColumn[];
	    columns: EuiDataGridColumn[];
	    schema: EuiDataGridSchema;
	    popoverContents: EuiDataGridPopoverContents;
	    columnWidths: EuiDataGridColumnWidths;
	    defaultColumnWidth?: number | null | undefined;
	    renderCellValue: EuiDataGridCellProps['renderCellValue'];
	    interactiveCellId: EuiDataGridCellProps['interactiveCellId'];
	    visibleRowIndex?: number | undefined;
	} & React.RefAttributes<HTMLDivElement>>>;
	export { EuiDataGridFooterRow };

}
declare module '@elastic\eui\src\components\datagrid\data_grid_column_resizer' {
	import React, { Component } from 'react';
	export interface EuiDataGridColumnResizerProps {
	    columnId: string;
	    columnWidth: number;
	    setColumnWidth: (columnId: string, width: number) => void;
	}
	interface EuiDataGridColumnResizerState {
	    initialX: number;
	    offset: number;
	}
	export class EuiDataGridColumnResizer extends Component<EuiDataGridColumnResizerProps, EuiDataGridColumnResizerState> {
	    state: {
	        initialX: number;
	        offset: number;
	    };
	    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
	    onMouseUp: () => void;
	    onMouseMove: (e: {
	        pageX: number;
	    }) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\datagrid\data_grid_header_cell' {
	import { FunctionComponent } from 'react';
	import { EuiDataGridHeaderRowPropsSpecificProps } from '@elastic\eui\src\components\datagrid\data_grid_header_row';
	import { EuiDataGridColumn } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export interface EuiDataGridHeaderCellProps extends Omit<EuiDataGridHeaderRowPropsSpecificProps, 'leadingControlColumns'> {
	    column: EuiDataGridColumn;
	    index: number;
	    className?: string;
	}
	export const EuiDataGridHeaderCell: FunctionComponent<EuiDataGridHeaderCellProps>;

}
declare module '@elastic\eui\src\components\datagrid\data_grid_control_header_cell' {
	import { FunctionComponent } from 'react';
	import { EuiDataGridControlColumn } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export interface EuiDataGridControlHeaderRowProps {
	    index: number;
	    controlColumn: EuiDataGridControlColumn;
	    headerIsInteractive: boolean;
	    className?: string;
	}
	export const EuiDataGridControlHeaderCell: FunctionComponent<EuiDataGridControlHeaderRowProps>;

}
declare module '@elastic\eui\src\components\datagrid\data_grid_header_row' {
	import React, { HTMLAttributes } from 'react';
	import { EuiDataGridColumnWidths, EuiDataGridColumn, EuiDataGridControlColumn } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiDataGridSchema, EuiDataGridSchemaDetector } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	export interface EuiDataGridHeaderRowPropsSpecificProps {
	    leadingControlColumns?: EuiDataGridControlColumn[];
	    trailingControlColumns?: EuiDataGridControlColumn[];
	    columns: EuiDataGridColumn[];
	    columnWidths: EuiDataGridColumnWidths;
	    schema: EuiDataGridSchema;
	    schemaDetectors: EuiDataGridSchemaDetector[];
	    defaultColumnWidth?: number | null;
	    setColumnWidth: (columnId: string, width: number) => void;
	    setVisibleColumns: (columnId: string[]) => void;
	    switchColumnPos: (colFromId: string, colToId: string) => void;
	    headerIsInteractive: boolean;
	}
	export type EuiDataGridHeaderRowProps = CommonProps & HTMLAttributes<HTMLDivElement> & EuiDataGridHeaderRowPropsSpecificProps; const EuiDataGridHeaderRow: React.ForwardRefExoticComponent<CommonProps & React.HTMLAttributes<HTMLDivElement> & EuiDataGridHeaderRowPropsSpecificProps & React.RefAttributes<HTMLDivElement>>;
	export { EuiDataGridHeaderRow };

}
declare module '@elastic\eui\src\components\datagrid\data_grid_body' {
	import { FunctionComponent } from 'react';
	import { EuiDataGridControlColumn, EuiDataGridColumn, EuiDataGridColumnWidths, EuiDataGridPopoverContents, EuiDataGridInMemory, EuiDataGridInMemoryValues, EuiDataGridPaginationProps, EuiDataGridRowHeightsOptions, EuiDataGridStyle } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { EuiDataGridCellProps } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	import { EuiDataGridSchema, EuiDataGridSchemaDetector } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	import { EuiDataGridHeaderRowProps } from '@elastic\eui\src\components\datagrid\data_grid_header_row';
	import { RowHeightUtils } from '@elastic\eui\src\components\datagrid\row_height_utils';
	export interface EuiDataGridBodyProps {
	    isFullScreen: boolean;
	    columnWidths: EuiDataGridColumnWidths;
	    defaultColumnWidth?: number | null;
	    leadingControlColumns?: EuiDataGridControlColumn[];
	    trailingControlColumns?: EuiDataGridControlColumn[];
	    columns: EuiDataGridColumn[];
	    schema: EuiDataGridSchema;
	    schemaDetectors: EuiDataGridSchemaDetector[];
	    popoverContents?: EuiDataGridPopoverContents;
	    rowCount: number;
	    renderCellValue: EuiDataGridCellProps['renderCellValue'];
	    renderFooterCellValue?: EuiDataGridCellProps['renderCellValue'];
	    inMemory?: EuiDataGridInMemory;
	    inMemoryValues: EuiDataGridInMemoryValues;
	    interactiveCellId: EuiDataGridCellProps['interactiveCellId'];
	    pagination?: EuiDataGridPaginationProps;
	    setColumnWidth: (columnId: string, width: number) => void;
	    headerIsInteractive: boolean;
	    handleHeaderMutation: MutationCallback;
	    setVisibleColumns: EuiDataGridHeaderRowProps['setVisibleColumns'];
	    switchColumnPos: EuiDataGridHeaderRowProps['switchColumnPos'];
	    toolbarHeight: number;
	    rowHeightsOptions?: EuiDataGridRowHeightsOptions;
	    rowHeightUtils: RowHeightUtils;
	    gridStyles?: EuiDataGridStyle;
	}
	export const VIRTUALIZED_CONTAINER_CLASS = "euiDataGrid__virtualized";
	export const EuiDataGridBody: FunctionComponent<EuiDataGridBodyProps>;

}
declare module '@elastic\eui\src\components\datagrid\style_selector' {
	import { ReactElement } from 'react';
	import { EuiDataGridStyle } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export const startingStyles: EuiDataGridStyle;
	export const useDataGridStyleSelector: (initialStyles: EuiDataGridStyle) => [ReactElement, EuiDataGridStyle];

}
declare module '@elastic\eui\src\components\datagrid\data_grid_inmemory_renderer' {
	import { FunctionComponent } from 'react';
	import { EuiDataGridCellProps } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	import { EuiDataGridColumn, EuiDataGridInMemory } from '@elastic\eui\src\components\datagrid\data_grid_types';
	export interface EuiDataGridInMemoryRendererProps {
	    inMemory: EuiDataGridInMemory;
	    columns: EuiDataGridColumn[];
	    rowCount: number;
	    renderCellValue: EuiDataGridCellProps['renderCellValue'];
	    onCellRender: (rowIndex: number, columnId: string, value: string) => void;
	}
	export const EuiDataGridInMemoryRenderer: FunctionComponent<EuiDataGridInMemoryRendererProps>;

}
declare module '@elastic\eui\src\components\datagrid\data_grid' {
	import { FunctionComponent, HTMLAttributes, CSSProperties } from 'react';
	import { CommonProps, OneOf } from '@elastic\eui\src\components\common';
	import { EuiDataGridColumn, EuiDataGridInMemory, EuiDataGridPaginationProps, EuiDataGridControlColumn, EuiDataGridSorting, EuiDataGridStyle, EuiDataGridPopoverContents, EuiDataGridColumnVisibility, EuiDataGridToolBarVisibilityOptions, EuiDataGridOnColumnResizeHandler, EuiDataGridRowHeightsOptions } from '@elastic\eui\src\components\datagrid\data_grid_types';
	import { EuiDataGridCellProps } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	import { EuiDataGridSchemaDetector } from '@elastic\eui\src\components\datagrid\data_grid_schema'; type CommonGridProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * An array of #EuiDataGridControlColumn objects. Used to define ancillary columns on the left side of the data grid.
	     */
	    leadingControlColumns?: EuiDataGridControlColumn[];
	    /**
	     * An array of #EuiDataGridControlColumn objects. Used to define ancillary columns on the right side of the data grid.
	     */
	    trailingControlColumns?: EuiDataGridControlColumn[];
	    /**
	     * An array of #EuiDataGridColumn objects. Lists the columns available and the schema and settings tied to it.
	     */
	    columns: EuiDataGridColumn[];
	    /**
	     * An array of #EuiDataGridColumnVisibility objects. Defines which columns are visible in the grid and the order they are displayed.
	     */
	    columnVisibility: EuiDataGridColumnVisibility;
	    /**
	     * An array of custom #EuiDataGridSchemaDetector objects. You can inject custom schemas to the grid to define the classnames applied
	     */
	    schemaDetectors?: EuiDataGridSchemaDetector[];
	    /**
	     * An object mapping #EuiDataGridColumn `schema`s to a custom popover formatting component which receives #EuiDataGridPopoverContent props
	     */
	    popoverContents?: EuiDataGridPopoverContents;
	    /**
	     * The total number of rows in the dataset (used by e.g. pagination to know how many pages to list)
	     */
	    rowCount: number;
	    /**
	     * A function called to render a cell's value. Behind the scenes it is treated as a React component
	     * allowing hooks, context, and other React concepts to be used. The function receives a #CellValueElement
	     * as its only argument.
	     */
	    renderCellValue: EuiDataGridCellProps['renderCellValue'];
	    /**
	     * A function called to render a cell's value. Behind the scenes it is treated as a React component
	     * allowing hooks, context, and other React concepts to be used. The function receives a #CellValueElement
	     * as its only argument.
	     */
	    renderFooterCellValue?: EuiDataGridCellProps['renderCellValue'];
	    /**
	     * Defines the look and feel for the grid. Accepts a partial #EuiDataGridStyle object. Settings provided may be overwritten or merged with user defined preferences if toolbarVisibility density controls are available.
	     */
	    gridStyle?: EuiDataGridStyle;
	    /**
	     * Accepts either a boolean or #EuiDataGridToolbarVisibilityOptions object. When used as a boolean, defines the display of the toolbar entire. WHen passed an object allows you to turn off individual controls within the toolbar as well as add additional buttons.
	     */
	    toolbarVisibility?: boolean | EuiDataGridToolBarVisibilityOptions;
	    /**
	     * A #EuiDataGridInMemory object to definite the level of high order schema-detection and sorting logic to use on your data. *Try to set when possible*. When omitted, disables all enhancements and assumes content is flat strings.
	     */
	    inMemory?: EuiDataGridInMemory;
	    /**
	     * A #EuiDataGridPagination object. Omit to disable pagination completely.
	     */
	    pagination?: EuiDataGridPaginationProps;
	    /**
	     * A #EuiDataGridSorting object that provides the sorted columns along with their direction. Omit to disable, but you'll likely want to also turn off the user sorting controls through the `toolbarVisibility` prop.
	     */
	    sorting?: EuiDataGridSorting;
	    /**
	     * A callback for when a column's size changes. Callback receives `{ columnId: string, width: number }`.
	     */
	    onColumnResize?: EuiDataGridOnColumnResizeHandler;
	    /**
	     * Defines a minimum width for the grid to show all controls in its header.
	     */
	    minSizeForControls?: number;
	    /**
	     * Sets the grid's height, forcing it to overflow in a scrollable container with cell virtualization
	     */
	    height?: CSSProperties['height'];
	    /**
	     * Sets the grid's width, forcing it to overflow in a scrollable container with cell virtualization
	     */
	    width?: CSSProperties['width'];
	    /**
	     * A #EuiDataGridRowHeightsOptions object that provides row heights options
	     */
	    rowHeightsOptions?: EuiDataGridRowHeightsOptions;
	};
	export type EuiDataGridProps = OneOf<CommonGridProps, 'aria-label' | 'aria-labelledby'>;
	export const EuiDataGrid: FunctionComponent<EuiDataGridProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiDataGridColumnSortingDraggableProps } from '@elastic\eui\src\components\datagrid\column_sorting_draggable';
	export { EuiDataGrid, EuiDataGridProps } from '@elastic\eui\src\components\datagrid\data_grid';
	export { EuiDataGridBodyProps } from '@elastic\eui\src\components\datagrid\data_grid_body';
	export { EuiDataGridCellProps, EuiDataGridCellValueProps, EuiDataGridCellValueElementProps, } from '@elastic\eui\src\components\datagrid\data_grid_cell';
	export { EuiDataGridColumnResizerProps } from '@elastic\eui\src\components\datagrid\data_grid_column_resizer';
	export { EuiDataGridHeaderRowProps } from '@elastic\eui\src\components\datagrid\data_grid_header_row';
	export { EuiDataGridHeaderCellProps } from '@elastic\eui\src\components\datagrid\data_grid_header_cell';
	export { EuiDataGridControlHeaderRowProps } from '@elastic\eui\src\components\datagrid\data_grid_control_header_cell';
	export { EuiDataGridInMemoryRendererProps } from '@elastic\eui\src\components\datagrid\data_grid_inmemory_renderer';
	export { EuiDataGridSchema, EuiDataGridSchemaDetector, SchemaTypeScore, } from '@elastic\eui\src\components\datagrid\data_grid_schema';
	export { useDataGridColumnSelector } from '@elastic\eui\src\components\datagrid\column_selector';
	export { useDataGridColumnSorting } from '@elastic\eui\src\components\datagrid\column_sorting';
	export { useDataGridStyleSelector } from '@elastic\eui\src\components\datagrid\style_selector';
	export * from '@elastic\eui\src\components\datagrid\data_grid_types';

}
declare module '@elastic\eui\src\components\error_boundary\error_boundary' {
	import { Component, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import PropTypes from 'prop-types';
	interface EuiErrorBoundaryState {
	    hasError: boolean;
	    error?: string;
	}
	export type EuiErrorBoundaryProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	};
	export class EuiErrorBoundary extends Component<EuiErrorBoundaryProps, EuiErrorBoundaryState> {
	    static propTypes: {
	        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
	    };
	    constructor(props: EuiErrorBoundaryProps);
	    componentDidCatch({ message, stack }: Error): void;
	    render(): {} | null | undefined;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiErrorBoundary, EuiErrorBoundaryProps } from '@elastic\eui\src\components\error_boundary\error_boundary';

}
declare module '@elastic\eui\src\components\date_picker\react-datepicker' {
	/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Type definitions for react-datepicker 1.8
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Platon Pronko <https://github.com/Rogach>
//                 Roy Xue <https://github.com/royxue>
//                 Koala Human <https://github.com/KoalaHuman>
//                 Sean Kelley <https://github.com/seansfkelley>
//                 Justin Grant <https://github.com/justingrant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as moment from 'moment';

type popperPlacement =
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start'
  | 'right'
  | 'right-end'
  | 'right-start'
  | 'top'
  | 'top-end'
  | 'top-start';

export interface ReactDatePickerProps {
  /**
   * Whether changes to Year and Month (via dropdowns) should trigger `onChange`
   */
  adjustDateOnChange?: boolean;
  accessibleMode?: boolean;
  allowSameDay?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;

  /**
   * Optional class added to the calendar portion of datepicker
   */
  calendarClassName?: string;
  children?: React.ReactNode;

  /**
   * Added to the actual input of the calendar
   */
  className?: string;

  /**
   * Replaces the input with any node, like a button
   */
  customInput?: React.ReactNode;
  customInputRef?: string;

  /**
   * Accepts any moment format string
   */
  dateFormat?: string | string[];
  dateFormatCalendar?: string;
  dayClassName?(date: moment.Moment): string | null;
  disabled?: boolean;
  disabledKeyboardNavigation?: boolean;
  dropdownMode?: 'scroll' | 'select';
  endDate?: moment.Moment | null;
  excludeDates?: moment.Moment[];
  excludeTimes?: moment.Moment[];
  filterDate?(date: moment.Moment): boolean;
  fixedHeight?: boolean;
  forceShowMonthNavigation?: boolean;
  formatWeekNumber?(date: moment.Moment): string | number;
  highlightDates?: moment.Moment[];
  id?: string;
  includeDates?: moment.Moment[];
  includeTimes?: moment.Moment[];
  inline?: boolean;

  /**
   * Adds additional times to the time selector other then :30 increments
   */
  injectTimes?: moment.Moment[];
  isClearable?: boolean;

  /**
   * Switches the locale / display. "en-us", "zn-ch"...etc
   */
  locale?: moment.LocaleSpecifier;

  /**
   * The max date accepted (in moment format) as a selection
   */
  maxDate?: moment.Moment;

  /**
   * The max time accepted (in moment format) as a selection
   */
  maxTime?: moment.Moment;

  /**
   * The min date accepted (in moment format) as a selection
   */
  minDate?: moment.Moment;

  /**
   * The min time accepted (in moment format) as a selection
   */
  minTime?: moment.Moment;
  monthsShown?: number;
  name?: string;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;

  /**
   * What to do when the input changes
   */
  onChange?(
    date: moment.Moment | null,
    event?: React.SyntheticEvent<any>
  ): void;
  onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
  onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
  onMonthChange?(date: moment.Moment): void;
  onSelect?(date: moment.Moment, event?: React.SyntheticEvent<any>): void;
  onWeekSelect?(
    firstDayOfWeek: moment.Moment,
    weekNumber: string | number,
    event?: React.SyntheticEvent<any>
  ): void;
  onYearChange?(date: moment.Moment): void;
  openToDate?: moment.Moment;
  peekNextMonth?: boolean;
  placeholderText?: string;

  /**
   * Class applied to the popup, when inline is false
   */
  popperClassName?: string;
  popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
  popperPlacement?: popperPlacement;
  preventOpenOnFocus?: boolean;
  readOnly?: boolean;
  required?: boolean;
  scrollableMonthYearDropdown?: boolean;
  scrollableYearDropdown?: boolean;

  /**
   * The selected datetime (in moment format)
   */
  selected?: moment.Moment | null;
  selectsEnd?: boolean;
  selectsStart?: boolean;

  /**
   * Will close the popup on selection
   */
  shouldCloseOnSelect?: boolean;
  showDisabledMonthNavigation?: boolean;
  showMonthDropdown?: boolean;
  showMonthYearDropdown?: boolean;

  /**
   * Show the time selection alongside the calendar
   */
  showTimeSelect?: boolean;

  /**
   * Only show the time selector, not the calendar
   */
  showTimeSelectOnly?: boolean;
  showWeekNumbers?: boolean;
  showYearDropdown?: boolean;
  startDate?: moment.Moment | null;
  startOpen?: boolean;

  /**
   * Use Moment strict mode, allowing exact format matches only
   */
  strictParsing?: boolean;
  tabIndex?: number;
  timeCaption?: string;

  /**
   * The format of the time within the selector, in moment notation
   */
  timeFormat?: string;
  timeIntervals?: number;
  title?: string;
  todayButton?: string;
  useShortMonthInDropdown?: boolean;
  useWeekdaysShort?: boolean;
  utcOffset?: number;
  value?: string;
  weekLabel?: string;
  withPortal?: boolean;
  yearDropdownItemNumber?: number;
} const ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
export default ReactDatePicker;

}
declare module '@elastic\eui\src\components\date_picker\date_picker' {
	import { Component, MouseEventHandler, Ref } from 'react';
	import { Moment } from 'moment';
	import { EuiFormControlLayoutIconsProps } from '@elastic\eui\src\components\form\form_control_layout\form_control_layout_icons';
	import { ApplyClassComponentDefaults, CommonProps } from '@elastic\eui\src\components\common';
	import { ReactDatePickerProps } from '@elastic\eui\src\components\date_picker\react-datepicker';
	export const euiDatePickerDefaultDateFormat = "MM/DD/YYYY";
	export const euiDatePickerDefaultTimeFormat = "hh:mm A";
	interface EuiExtendedDatePickerProps extends ReactDatePickerProps {
	    /**
	     * Applies classes to the numbered days provided. Check docs for example.
	     */
	    dayClassName?: (date: Moment) => string | null;
	    /**
	     * Makes the input full width
	     */
	    fullWidth?: boolean;
	    /**
	     * ref for the ReactDatePicker instance
	     */
	    inputRef: Ref<Component<ReactDatePickerProps, any, any>>;
	    /**
	     * Provides styling to the input when invalid
	     */
	    isInvalid?: boolean;
	    /**
	     * Provides styling to the input when loading
	     */
	    isLoading?: boolean;
	    /**
	     * What to do when the input is cleared by the x icon
	     */
	    onClear?: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Opens to this date (in moment format) on first press, regardless of selection
	     */
	    openToDate?: Moment;
	    /**
	     * Shows only when no date is selected
	     */
	    placeholder?: string;
	    /**
	     * Can turn the shadow off if using the inline prop
	     */
	    shadow?: boolean;
	    /**
	     * Show the icon in input
	     */
	    showIcon?: boolean;
	    /**
	     * Pass an icon type to change the default `calendar` or `clock` icon
	     */
	    iconType?: EuiFormControlLayoutIconsProps['icon'];
	    /**
	     * Sets the placement of the popover. It accepts: `"bottom"`, `"bottom-end"`, `"bottom-start"`, `"left"`, `"left-end"`, `"left-start"`, `"right"`, `"right-end"`, `"right-start"`, `"top"`, `"top-end"`, `"top-start"`
	     */
	    popoverPlacement?: ReactDatePickerProps['popperPlacement'];
	} type _EuiDatePickerProps = CommonProps & EuiExtendedDatePickerProps;
	export type EuiDatePickerProps = ApplyClassComponentDefaults<typeof EuiDatePicker>;
	export class EuiDatePicker extends Component<_EuiDatePickerProps> {
	    static defaultProps: {
	        adjustDateOnChange: boolean;
	        dateFormat: string;
	        fullWidth: boolean;
	        inputRef: () => void;
	        isLoading: boolean;
	        shadow: boolean;
	        shouldCloseOnSelect: boolean;
	        showIcon: boolean;
	        showTimeSelect: boolean;
	        timeFormat: string;
	        popoverPlacement: string;
	    };
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\date_picker_range' {
	import { FunctionComponent, ReactNode } from 'react';
	import { IconType } from '@elastic\eui\src\components\icon';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiDatePickerRangeProps = CommonProps & {
	    /**
	     * Including any children will replace all innards with the provided children
	     */
	    children?: ReactNode;
	    /**
	     * The end date `EuiDatePicker` element
	     */
	    endDateControl: ReactNode;
	    fullWidth?: boolean;
	    /**
	     * Pass either an icon type or set to `false` to remove icon entirely
	     */
	    iconType?: boolean | IconType;
	    /**
	     * Won't apply any additional props to start and end date components
	     */
	    isCustom?: boolean;
	    readOnly?: boolean;
	    /**
	     * The start date `EuiDatePicker` element
	     */
	    startDateControl: ReactNode;
	};
	export const EuiDatePickerRange: FunctionComponent<EuiDatePickerRangeProps>;

}
declare module '@elastic\eui\src\components\tabs\tab' {
	import { MouseEventHandler, AnchorHTMLAttributes, ButtonHTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export interface EuiTabProps extends CommonProps {
	    isSelected?: boolean;
	    disabled?: boolean;
	} type EuiTabPropsForAnchor = EuiTabProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'href'> & {
	    href?: string;
	    onClick?: MouseEventHandler<HTMLAnchorElement>;
	}; type EuiTabPropsForButton = EuiTabProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	};
	export type Props = ExclusiveUnion<EuiTabPropsForAnchor, EuiTabPropsForButton>;
	export const EuiTab: FunctionComponent<Props>;
	export {};

}
declare module '@elastic\eui\src\components\tabs\tabs' {
	import React, { HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const displayToClassNameMap: {
	    condensed: string;
	    default: null;
	};
	export const DISPLAYS: ("default" | "condensed")[];
	export type EuiTabsDisplaySizes = keyof typeof displayToClassNameMap; const sizeToClassNameMap: {
	    s: string;
	    m: null;
	    l: string;
	};
	export const SIZES: ("s" | "m" | "l")[];
	export type EuiTabsSizes = keyof typeof sizeToClassNameMap;
	export type EuiTabsProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    /**
	     * Choose `default` or alternative `condensed` display styles
	     */
	    display?: EuiTabsDisplaySizes;
	    /**
	     * Evenly stretches each tab to fill the
	     * horizontal space
	     */
	    expand?: boolean;
	    size?: EuiTabsSizes;
	};
	export type EuiTabRef = HTMLDivElement;
	export const EuiTabs: React.ForwardRefExoticComponent<CommonProps & React.HTMLAttributes<HTMLDivElement> & {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    /**
	     * Choose `default` or alternative `condensed` display styles
	     */
	    display?: "default" | "condensed" | undefined;
	    /**
	     * Evenly stretches each tab to fill the
	     * horizontal space
	     */
	    expand?: boolean | undefined;
	    size?: "s" | "m" | "l" | undefined;
	} & {
	    children?: React.ReactNode;
	} & React.RefAttributes<HTMLDivElement>>;
	export {};

}
declare module '@elastic\eui\src\components\tabs\tabbed_content\tabbed_content' {
	import { Component, HTMLAttributes, ReactNode } from 'react';
	import { EuiTabsDisplaySizes, EuiTabsSizes } from '@elastic\eui\src\components\tabs\tabs';
	import { CommonProps } from '@elastic\eui\src\components\common';
	/**
	 * Marked as const so type is `['initial', 'selected']` instead of `string[]`
	 */
	export const AUTOFOCUS: readonly ["initial", "selected"];
	export interface EuiTabbedContentTab {
	    id: string;
	    name: ReactNode;
	    content: ReactNode;
	}
	interface EuiTabbedContentState {
	    selectedTabId: string | undefined;
	    inFocus: boolean;
	}
	export type EuiTabbedContentProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * When tabbing into the tabs, set the focus on `initial` for the first tab,
	     * or `selected` for the currently selected tab. Best use case is for inside of
	     * overlay content like popovers or flyouts.
	     */
	    autoFocus?: 'initial' | 'selected';
	    /**
	     * Choose `default` or alternative `condensed` display styles
	     */
	    display?: EuiTabsDisplaySizes;
	    /**
	     * Evenly stretches each tab to fill the horizontal space
	     */
	    expand?: boolean;
	    /**
	     * Use this prop to set the initially selected tab while letting the tabbed content component
	     * control selection state internally
	     */
	    initialSelectedTab?: EuiTabbedContentTab;
	    onTabClick?: (selectedTab: EuiTabbedContentTab) => void;
	    /**
	     * Use this prop if you want to control selection state within the owner component
	     */
	    selectedTab?: EuiTabbedContentTab;
	    size?: EuiTabsSizes;
	    /**
	     * Each tab needs id and content properties, so we can associate it with its panel for accessibility.
	     * The name property (a node) is also required to display to the user.
	     */
	    tabs: EuiTabbedContentTab[];
	};
	export class EuiTabbedContent extends Component<EuiTabbedContentProps, EuiTabbedContentState> {
	    static defaultProps: {
	        autoFocus: string;
	    };
	    private readonly rootId;
	    private readonly tabsRef;
	    constructor(props: EuiTabbedContentProps);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    focusTab: () => void;
	    initializeFocus: () => void;
	    removeFocus: (blurEvent: FocusEvent) => void;
	    onTabClick: (selectedTab: EuiTabbedContentTab) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\tabs\tabbed_content' {
	export { EuiTabbedContent, EuiTabbedContentTab, EuiTabbedContentProps, } from '@elastic\eui\src\components\tabs\tabbed_content\tabbed_content';

}
declare module '@elastic/eui' {
	export { EuiTab, EuiTabProps } from '@elastic\eui\src\components\tabs\tab';
	export { EuiTabs, EuiTabsProps } from '@elastic\eui\src\components\tabs\tabs';
	export { EuiTabbedContent, EuiTabbedContentTab, EuiTabbedContentProps, } from '@elastic\eui\src\components\tabs\tabbed_content';

}
declare module '@elastic\eui\src\components\date_picker\types' {
	import { ReactElement } from 'react';
	export interface DurationRange {
	    end: ShortDate;
	    label?: string;
	    start: ShortDate;
	}
	export type TimeUnitId = 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y';
	export type TimeUnitFromNowId = 's+' | 'm+' | 'h+' | 'd+' | 'w+' | 'M+' | 'y+';
	export type TimeUnitLabel = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
	export type TimeUnitLabelPlural = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
	export type AbsoluteDateMode = 'absolute';
	export type RelativeDateMode = 'relative';
	export type NowDateMode = 'now';
	export type DateMode = AbsoluteDateMode | RelativeDateMode | NowDateMode;
	/**
	 * String as either datemath (e.g.: now, now-15m, now-15m/m) or
	 * absolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	 */
	export type ShortDate = NowDateMode | string;
	export type Milliseconds = number;
	export interface RelativeParts {
	    count: number;
	    round: boolean;
	    roundUnit?: TimeUnitId;
	    unit: string;
	}
	export interface RelativeOption {
	    text: string;
	    value: TimeUnitId | TimeUnitFromNowId;
	}
	export type OnRefreshChangeProps = {
	    isPaused: boolean;
	    refreshInterval: number;
	};
	export type ApplyRefreshInterval = (args: OnRefreshChangeProps) => void;
	export interface QuickSelect {
	    timeTense: string;
	    timeValue: number;
	    timeUnits: TimeUnitId;
	}
	interface ApplyTimeArgs extends DurationRange {
	    keepPopoverOpen?: boolean;
	    quickSelect?: QuickSelect;
	}
	export type ApplyTime = (args: ApplyTimeArgs) => void;
	export interface QuickSelectPanel {
	    title: string;
	    content: ReactElement;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\time_units' {
	import { TimeUnitId, TimeUnitLabel, TimeUnitLabelPlural } from '@elastic\eui\src\components\date_picker\types';
	export const timeUnits: {
	    [id in TimeUnitId]: TimeUnitLabel;
	};
	export const timeUnitsPlural: {
	    [id in TimeUnitId]: TimeUnitLabelPlural;
	};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\relative_options' {
	import { RelativeOption, TimeUnitId } from '@elastic\eui\src\components\date_picker\types';
	export const relativeOptions: RelativeOption[];
	export const relativeUnitsFromLargestToSmallest: TimeUnitId[];

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\relative_utils' {
	import { RelativeParts } from '@elastic\eui\src\components\date_picker\types';
	export function parseRelativeParts(value: string): RelativeParts;
	export const toRelativeStringFromParts: (relativeParts: RelativeParts) => string;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\relative_tab' {
	import { Component, ChangeEventHandler } from 'react';
	import { EuiSwitchEvent } from '@elastic\eui\src\components\form';
	import { RelativeParts } from '@elastic\eui\src\components\date_picker\types';
	import { LocaleSpecifier } from 'moment';
	import { EuiDatePopoverContentProps } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_content';
	export interface EuiRelativeTabProps {
	    dateFormat: string;
	    locale?: LocaleSpecifier;
	    value: string;
	    onChange: EuiDatePopoverContentProps['onChange'];
	    roundUp?: boolean;
	    position: 'start' | 'end';
	}
	interface EuiRelativeTabState extends Pick<RelativeParts, 'unit' | 'round' | 'roundUnit'> {
	    count: number | undefined;
	    sentenceCasedPosition: string;
	}
	export class EuiRelativeTab extends Component<EuiRelativeTabProps, EuiRelativeTabState> {
	    state: EuiRelativeTabState;
	    generateId: (idSuffix?: string) => string;
	    onCountChange: ChangeEventHandler<HTMLInputElement>;
	    onUnitChange: ChangeEventHandler<HTMLSelectElement>;
	    onRoundChange: (event: EuiSwitchEvent) => void;
	    handleChange: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\date_modes' {
	import { AbsoluteDateMode, RelativeDateMode, NowDateMode, ShortDate } from '@elastic\eui\src\components\date_picker\types';
	export const DATE_MODES: {
	    ABSOLUTE: AbsoluteDateMode;
	    RELATIVE: RelativeDateMode;
	    NOW: NowDateMode;
	};
	export function getDateMode(value: ShortDate): "absolute" | "relative" | "now";
	export function toAbsoluteString(value: string, roundUp?: boolean): string;
	export function toRelativeString(value: string): string;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_content' {
	import React, { FunctionComponent } from 'react';
	import { LocaleSpecifier } from 'moment';
	export interface EuiDatePopoverContentProps {
	    value: string;
	    onChange(date: string | null, event?: React.SyntheticEvent<any>): void;
	    roundUp?: boolean;
	    dateFormat: string;
	    timeFormat: string;
	    locale?: LocaleSpecifier;
	    position: 'start' | 'end';
	    utcOffset?: number;
	}
	export const EuiDatePopoverContent: FunctionComponent<EuiDatePopoverContentProps>;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\absolute_tab' {
	import { Component, ChangeEventHandler } from 'react';
	import { Moment, LocaleSpecifier } from 'moment';
	import { EuiDatePickerProps } from '@elastic\eui\src\components\date_picker\date_picker';
	import { EuiDatePopoverContentProps } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_content';
	export interface EuiAbsoluteTabProps {
	    dateFormat: string;
	    timeFormat: string;
	    locale?: LocaleSpecifier;
	    value: string;
	    onChange: EuiDatePopoverContentProps['onChange'];
	    roundUp: boolean;
	    position: 'start' | 'end';
	    utcOffset?: number;
	}
	interface EuiAbsoluteTabState {
	    isTextInvalid: boolean;
	    sentenceCasedPosition: string;
	    textInputValue: string;
	    valueAsMoment: Moment | null;
	}
	export class EuiAbsoluteTab extends Component<EuiAbsoluteTabProps, EuiAbsoluteTabState> {
	    state: EuiAbsoluteTabState;
	    constructor(props: EuiAbsoluteTabProps);
	    handleChange: EuiDatePickerProps['onChange'];
	    handleTextChange: ChangeEventHandler<HTMLInputElement>;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\pretty_duration' {
	import { LocaleSpecifier } from 'moment';
	import { DurationRange, ShortDate } from '@elastic\eui\src\components\date_picker\types';
	export const commonDurationRanges: DurationRange[];
	export function formatTimeString(timeString: string, dateFormat: string, roundUp?: boolean, locale?: LocaleSpecifier): string;
	export function prettyDuration(timeFrom: ShortDate, timeTo: ShortDate, quickRanges: DurationRange[] | undefined, dateFormat: string): string;
	export function showPrettyDuration(timeFrom: ShortDate, timeTo: ShortDate, quickRanges?: DurationRange[]): boolean;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_button' {
	import { FunctionComponent, ButtonHTMLAttributes, MouseEventHandler } from 'react';
	import { EuiPopoverProps } from '@elastic\eui\src\components\popover';
	import { EuiDatePopoverContentProps } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_content';
	import { LocaleSpecifier } from 'moment';
	export interface EuiDatePopoverButtonProps {
	    className?: string;
	    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
	    dateFormat: string;
	    isDisabled?: boolean;
	    isInvalid?: boolean;
	    isOpen: boolean;
	    needsUpdating?: boolean;
	    locale?: LocaleSpecifier;
	    onChange: NonNullable<EuiDatePopoverContentProps['onChange']>;
	    onPopoverClose: EuiPopoverProps['closePopover'];
	    onPopoverToggle: MouseEventHandler<HTMLButtonElement>;
	    position: 'start' | 'end';
	    roundUp?: boolean;
	    timeFormat: string;
	    value: string;
	    utcOffset?: number;
	}
	export const EuiDatePopoverButton: FunctionComponent<EuiDatePopoverButtonProps>;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\date_popover' {
	export { EuiAbsoluteTab, EuiAbsoluteTabProps } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\absolute_tab';
	export { EuiDatePopoverButton, EuiDatePopoverButtonProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_button';
	export { EuiDatePopoverContent, EuiDatePopoverContentProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_content';
	export { EuiRelativeTab, EuiRelativeTabProps } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\relative_tab';

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\commonly_used_time_ranges' {
	import { FunctionComponent } from 'react';
	import { DurationRange, ApplyTime } from '@elastic\eui\src\components\date_picker\types';
	export interface EuiCommonlyUsedTimeRangesProps {
	    applyTime: ApplyTime;
	    commonlyUsedRanges: DurationRange[];
	}
	export const EuiCommonlyUsedTimeRanges: FunctionComponent<EuiCommonlyUsedTimeRangesProps>;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\quick_select_utils' {
	import { QuickSelect } from '@elastic\eui\src\components\date_picker\types';
	/**
	 * This function returns time value, time unit and time tense for a given time string.
	 *
	 * For example: for `now-40m` it will parse output as time value to `40` time unit to `m` and time unit to `last`.
	 *
	 * If given a datetime string it will return a default value.
	 *
	 * If the given string is in the format such as `now/d` it will parse the string to moment object and find the time value, time unit and time tense using moment
	 *
	 * This function accepts two strings start and end time. I the start value is now then it uses the end value to parse.
	 */
	export const parseTimeParts: (start: string, end: string) => QuickSelect;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\quick_select' {
	import { Component, ChangeEventHandler, KeyboardEventHandler } from 'react';
	import moment from 'moment';
	import { ApplyTime, QuickSelect } from '@elastic\eui\src\components\date_picker\types'; type EuiQuickSelectState = QuickSelect;
	export interface EuiQuickSelectProps {
	    applyTime: ApplyTime;
	    start: string;
	    end: string;
	    prevQuickSelect?: EuiQuickSelectState;
	}
	export class EuiQuickSelect extends Component<EuiQuickSelectProps, EuiQuickSelectState> {
	    constructor(props: EuiQuickSelectProps);
	    generateId: (idSuffix?: string) => string;
	    onTimeTenseChange: ChangeEventHandler<HTMLSelectElement>;
	    onTimeValueChange: ChangeEventHandler<HTMLInputElement>;
	    onTimeUnitsChange: ChangeEventHandler<HTMLSelectElement>;
	    handleKeyDown: KeyboardEventHandler<HTMLElement>;
	    applyQuickSelect: () => void;
	    getBounds: () => {
	        min: moment.Moment;
	        max: moment.Moment;
	    };
	    stepForward: () => void;
	    stepBackward: () => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\recently_used' {
	import { FunctionComponent } from 'react';
	import { DurationRange, ApplyTime } from '@elastic\eui\src\components\date_picker\types';
	export interface EuiRecentlyUsedProps {
	    applyTime: ApplyTime;
	    commonlyUsedRanges: DurationRange[];
	    dateFormat: string;
	    recentlyUsedRanges?: DurationRange[];
	}
	export const EuiRecentlyUsed: FunctionComponent<EuiRecentlyUsedProps>;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\refresh_interval' {
	import { Component, ChangeEventHandler, KeyboardEventHandler } from 'react';
	import { Milliseconds, TimeUnitId, ApplyRefreshInterval } from '@elastic\eui\src\components\date_picker\types';
	export interface EuiRefreshIntervalProps {
	    applyRefreshInterval?: ApplyRefreshInterval;
	    isPaused: boolean;
	    refreshInterval: Milliseconds;
	}
	interface EuiRefreshIntervalState {
	    value: number | '';
	    units: TimeUnitId;
	}
	export class EuiRefreshInterval extends Component<EuiRefreshIntervalProps, EuiRefreshIntervalState> {
	    state: EuiRefreshIntervalState;
	    generateId: (idSuffix?: string) => string;
	    onValueChange: ChangeEventHandler<HTMLInputElement>;
	    onUnitsChange: ChangeEventHandler<HTMLSelectElement>;
	    startRefresh: () => void;
	    handleKeyDown: KeyboardEventHandler<HTMLElement>;
	    applyRefreshInterval: () => void;
	    toggleRefresh: () => void;
	    render(): JSX.Element | null;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\quick_select_popover' {
	import { Component } from 'react';
	import { DurationRange, ApplyRefreshInterval, ApplyTime, QuickSelect, QuickSelectPanel } from '@elastic\eui\src\components\date_picker\types';
	export interface EuiQuickSelectPopoverProps {
	    applyRefreshInterval?: ApplyRefreshInterval;
	    applyTime: ApplyTime;
	    commonlyUsedRanges: DurationRange[];
	    customQuickSelectPanels?: QuickSelectPanel[];
	    dateFormat: string;
	    end: string;
	    isAutoRefreshOnly: boolean;
	    isDisabled: boolean;
	    isPaused: boolean;
	    recentlyUsedRanges: DurationRange[];
	    refreshInterval: number;
	    start: string;
	}
	interface EuiQuickSelectPopoverState {
	    isOpen: boolean;
	    prevQuickSelect?: QuickSelect;
	}
	export class EuiQuickSelectPopover extends Component<EuiQuickSelectPopoverProps, EuiQuickSelectPopoverState> {
	    state: EuiQuickSelectPopoverState;
	    closePopover: () => void;
	    togglePopover: () => void;
	    applyTime: ApplyTime;
	    renderDateTimeSections: () => JSX.Element | null;
	    renderCustomQuickSelectPanels: () => JSX.Element[] | null;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover' {
	export { EuiCommonlyUsedTimeRanges, EuiCommonlyUsedTimeRangesProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\commonly_used_time_ranges';
	export { EuiQuickSelectPopover, EuiQuickSelectPopoverProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\quick_select_popover';
	export { EuiQuickSelect, EuiQuickSelectProps } from '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\quick_select';
	export { EuiRecentlyUsed, EuiRecentlyUsedProps } from '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\recently_used';
	export { EuiRefreshInterval, EuiRefreshIntervalProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover\refresh_interval';

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\async_interval' {
	export class AsyncInterval {
	    timeoutId: number | null;
	    isStopped: boolean;
	    __pendingFn: Function;
	    constructor(fn: Function, refreshInterval: number);
	    setAsyncInterval: (fn: Function, milliseconds: number) => void;
	    stop: () => void;
	}

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\pretty_interval' {
	export const prettyInterval: (isPaused: boolean, intervalInMs: number) => string;

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\super_update_button' {
	import { Component, MouseEventHandler, Ref } from 'react';
	import { EuiButtonProps } from '@elastic\eui\src\components\button';
	import { EuiToolTip, EuiToolTipProps } from '@elastic\eui\src\components\tool_tip';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiSuperUpdateButtonProps = CommonProps & Partial<Omit<EuiButtonProps, 'isDisabled' | 'isLoading' | 'onClick'>> & {
	    className?: string;
	    isDisabled: boolean;
	    isLoading: boolean;
	    needsUpdate: boolean;
	    onClick: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Passes props to `EuiToolTip`
	     */
	    toolTipProps?: EuiToolTipProps;
	    /**
	     * Show the "Click to apply" tooltip
	     */
	    showTooltip: boolean;
	};
	export class EuiSuperUpdateButton extends Component<EuiSuperUpdateButtonProps> {
	    static defaultProps: {
	        needsUpdate: boolean;
	        isLoading: boolean;
	        isDisabled: boolean;
	        showTooltip: boolean;
	    };
	    _isMounted: boolean;
	    tooltipTimeout: number | undefined;
	    tooltip: EuiToolTip | null;
	    componentWillUnmount(): void;
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	    setTootipRef: Ref<EuiToolTip>;
	    showTooltip: () => void;
	    hideTooltip: () => void;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker\super_date_picker' {
	import { Component } from 'react';
	import { prettyDuration, commonDurationRanges } from '@elastic\eui\src\components\date_picker\super_date_picker\pretty_duration';
	import { EuiSuperUpdateButtonProps } from '@elastic\eui\src\components\date_picker\super_date_picker\super_update_button';
	import { AsyncInterval } from '@elastic\eui\src\components\date_picker\super_date_picker\async_interval';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { ShortDate, Milliseconds, DurationRange, ApplyTime, ApplyRefreshInterval, QuickSelectPanel } from '@elastic\eui\src\components\date_picker\types';
	import { EuiDatePopoverContentProps } from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover\date_popover_content';
	import { LocaleSpecifier } from 'moment';
	export { prettyDuration, commonDurationRanges };
	export interface OnTimeChangeProps extends DurationRange {
	    isInvalid: boolean;
	    isQuickSelection: boolean;
	}
	export interface OnRefreshProps extends DurationRange {
	    refreshInterval: number;
	}
	export type EuiSuperDatePickerProps = CommonProps & {
	    commonlyUsedRanges: DurationRange[];
	    customQuickSelectPanels?: QuickSelectPanel[];
	    /**
	     * Specifies the formatted used when displaying dates and/or datetimes
	     */
	    dateFormat: string;
	    end: ShortDate;
	    /**
	     * Set isAutoRefreshOnly to true to limit the component to only display auto refresh content.
	     */
	    isAutoRefreshOnly: boolean;
	    isDisabled: boolean;
	    isLoading?: boolean;
	    isPaused: boolean;
	    /**
	     * Used to localize e.g. month names, passed to `moment`
	     */
	    locale?: LocaleSpecifier;
	    /**
	     * Callback for when the refresh interval is fired.
	     * EuiSuperDatePicker will only manage a refresh interval timer when onRefresh callback is supplied
	     * If a promise is returned, the next refresh interval will not start until the promise has resolved.
	     * If the promise rejects the refresh interval will stop and the error thrown
	     */
	    onRefresh?: (props: OnRefreshProps) => void;
	    /**
	     * Callback for when the refresh interval changes.
	     * Supply onRefreshChange to show refresh interval inputs in quick select popover
	     */
	    onRefreshChange?: ApplyRefreshInterval;
	    /**
	     * Callback for when the time changes.
	     */
	    onTimeChange: (props: OnTimeChangeProps) => void;
	    recentlyUsedRanges: DurationRange[];
	    /**
	     * Refresh interval in milliseconds
	     */
	    refreshInterval: Milliseconds;
	    /**
	     * Set showUpdateButton to false to immediately invoke onTimeChange for all start and end changes.
	     */
	    showUpdateButton: boolean;
	    start: ShortDate;
	    /**
	     * Specifies the formatted used when displaying times
	     */
	    timeFormat: string;
	    utcOffset?: number;
	    /**
	     * Props passed to the update button
	     */
	    updateButtonProps?: Partial<Omit<EuiSuperUpdateButtonProps, 'needsUpdate' | 'showTooltip' | 'isLoading' | 'isDisabled' | 'onClick'>>;
	};
	interface EuiSuperDatePickerState {
	    end: ShortDate;
	    hasChanged: boolean;
	    isEndDatePopoverOpen: boolean;
	    isInvalid: boolean;
	    isStartDatePopoverOpen: boolean;
	    prevProps: {
	        end: ShortDate;
	        start: ShortDate;
	    };
	    showPrettyDuration: boolean;
	    start: ShortDate;
	}
	export class EuiSuperDatePicker extends Component<EuiSuperDatePickerProps, EuiSuperDatePickerState> {
	    static defaultProps: {
	        commonlyUsedRanges: DurationRange[];
	        dateFormat: string;
	        end: string;
	        isAutoRefreshOnly: boolean;
	        isDisabled: boolean;
	        isPaused: boolean;
	        recentlyUsedRanges: never[];
	        refreshInterval: number;
	        showUpdateButton: boolean;
	        start: string;
	        timeFormat: string;
	    };
	    asyncInterval?: AsyncInterval;
	    state: EuiSuperDatePickerState;
	    static getDerivedStateFromProps(nextProps: EuiSuperDatePickerProps, prevState: EuiSuperDatePickerState): {
	        prevProps: {
	            start: string;
	            end: string;
	        };
	        start: string;
	        end: string;
	        isInvalid: boolean;
	        hasChanged: boolean;
	        showPrettyDuration: boolean;
	    } | null;
	    setTime: ({ end, start }: DurationRange) => void;
	    componentDidMount: () => void;
	    componentDidUpdate: () => void;
	    componentWillUnmount: () => void;
	    setStart: EuiDatePopoverContentProps['onChange'];
	    setEnd: EuiDatePopoverContentProps['onChange'];
	    applyTime: () => void;
	    applyQuickTime: ApplyTime;
	    hidePrettyDuration: () => void;
	    onStartDatePopoverToggle: () => void;
	    onStartDatePopoverClose: () => void;
	    onEndDatePopoverToggle: () => void;
	    onEndDatePopoverClose: () => void;
	    onRefreshChange: ApplyRefreshInterval;
	    stopInterval: () => void;
	    startInterval: (refreshInterval: number) => void;
	    renderDatePickerRange: () => JSX.Element;
	    handleClickUpdateButton: () => void;
	    renderUpdateButton: () => JSX.Element | undefined;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\date_picker\super_date_picker' {
	export * from '@elastic\eui\src\components\date_picker\super_date_picker\date_popover';
	export * from '@elastic\eui\src\components\date_picker\super_date_picker\quick_select_popover';
	export { AsyncInterval } from '@elastic\eui\src\components\date_picker\super_date_picker\async_interval';
	export { EuiSuperDatePicker, EuiSuperDatePickerProps, OnTimeChangeProps, OnRefreshProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\super_date_picker';
	export { EuiSuperUpdateButton, EuiSuperUpdateButtonProps, } from '@elastic\eui\src\components\date_picker\super_date_picker\super_update_button';
	export { prettyDuration, commonDurationRanges } from '@elastic\eui\src\components\date_picker\super_date_picker\pretty_duration';

}
declare module '@elastic/eui' {
	export * from '@elastic\eui\src\components\date_picker\super_date_picker';
	export { EuiDatePicker, EuiDatePickerProps } from '@elastic\eui\src\components\date_picker\date_picker';
	export { EuiDatePickerRange, EuiDatePickerRangeProps, } from '@elastic\eui\src\components\date_picker\date_picker_range';
	export { DurationRange as EuiSuperDatePickerCommonRange, DurationRange as EuiSuperDatePickerDurationRange, DurationRange as EuiSuperDatePickerRecentRange, TimeUnitId, TimeUnitFromNowId, TimeUnitLabel, TimeUnitLabelPlural, AbsoluteDateMode, RelativeDateMode, NowDateMode, DateMode, OnRefreshChangeProps, ShortDate, RelativeParts, RelativeOption, QuickSelect, QuickSelectPanel as EuiSuperDatePickerQuickSelectPanel, } from '@elastic\eui\src\components\date_picker\types';

}
declare module '@elastic\eui\src\components\delay_hide\delay_hide' {
	import { Component, ReactNode } from 'react';
	export interface EuiDelayHideProps {
	    hide: boolean;
	    minimumDuration: number;
	    render: () => ReactNode;
	}
	interface EuiDelayHideState {
	    hide: boolean;
	    countdownExpired?: boolean;
	}
	export class EuiDelayHide extends Component<EuiDelayHideProps, EuiDelayHideState> {
	    static defaultProps: {
	        hide: boolean;
	        minimumDuration: number;
	    };
	    static getDerivedStateFromProps(nextProps: EuiDelayHideProps, prevState: EuiDelayHideState): {
	        hide: boolean;
	        countdownExpired: boolean | undefined;
	    };
	    state: {
	        hide: boolean;
	        countdownExpired: boolean;
	    };
	    private timeoutId?;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: EuiDelayHideProps): void;
	    componentWillUnmount(): void;
	    startCountdown: () => void;
	    finishCountdown: () => void;
	    render(): {} | null | undefined;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiDelayHide, EuiDelayHideProps } from '@elastic\eui\src\components\delay_hide\delay_hide';

}
declare module '@elastic\eui\src\components\description_list\description_list_title' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const EuiDescriptionListTitle: FunctionComponent<CommonProps & HTMLAttributes<HTMLElement>>;

}
declare module '@elastic\eui\src\components\description_list\description_list_description' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const EuiDescriptionListDescription: FunctionComponent<CommonProps & HTMLAttributes<HTMLElement>>;

}
declare module '@elastic\eui\src\components\description_list\description_list' {
	import { HTMLAttributes, ReactNode, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiDescriptionListType = keyof typeof typesToClassNameMap;
	export type EuiDescriptionListAlignment = keyof typeof alignmentsToClassNameMap;
	export type EuiDescriptionListTextStyle = keyof typeof textStylesToClassNameMap;
	export interface EuiDescriptionListProps {
	    listItems?: Array<{
	        title: NonNullable<ReactNode>;
	        description: NonNullable<ReactNode>;
	    }>;
	    /**
	     * Text alignment
	     */
	    align?: EuiDescriptionListAlignment;
	    /**
	     * Smaller text and condensed spacing
	     */
	    compressed?: boolean;
	    /**
	     * How should the content be styled, by default
	     * this will emphasize the title
	     */
	    textStyle?: EuiDescriptionListTextStyle;
	    /**
	     * How each item should be laid out
	     */
	    type?: EuiDescriptionListType;
	    /**
	     * Props object to be passed to `EuiDescriptionListTitle`
	     */
	    titleProps?: HTMLAttributes<HTMLElement>;
	    /**
	     * Props object to be passed to `EuiDescriptionListDescription`
	     */
	    descriptionProps?: HTMLAttributes<HTMLElement>;
	} const typesToClassNameMap: {
	    row: string;
	    inline: string;
	    column: string;
	    responsiveColumn: string;
	};
	export const TYPES: ("inline" | "column" | "row" | "responsiveColumn")[]; const alignmentsToClassNameMap: {
	    center: string;
	    left: string;
	};
	export const ALIGNMENTS: ("left" | "center")[]; const textStylesToClassNameMap: {
	    normal: string;
	    reverse: string;
	};
	export const TEXT_STYLES: ("normal" | "reverse")[];
	export const EuiDescriptionList: FunctionComponent<CommonProps & HTMLAttributes<HTMLDListElement> & EuiDescriptionListProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiDescriptionList, EuiDescriptionListProps, } from '@elastic\eui\src\components\description_list\description_list';
	export { EuiDescriptionListTitle } from '@elastic\eui\src\components\description_list\description_list_title';
	export { EuiDescriptionListDescription } from '@elastic\eui\src\components\description_list\description_list_description';

}
declare module '@elastic\eui\src\components\empty_prompt\empty_prompt' {
	import { FunctionComponent, HTMLAttributes, ReactElement, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiTitleSize } from '@elastic\eui\src\components\title';
	import { IconColor, IconType } from '@elastic\eui\src\components\icon';
	export type EuiEmptyPromptProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
	    iconType?: IconType;
	    /**
	     * Color for `iconType` when passed as an `IconType`
	     */
	    iconColor?: IconColor;
	    /**
	     * Custom icon replacing the one generated by `iconType`
	     */
	    icon?: ReactNode;
	    /**
	     * Requires passing a single element that gets wrapped in an EuiTitle.
	     * Recommendation is a heading, preferrably an `<h2>` if in its own section
	     */
	    title?: ReactElement<any>;
	    /**
	     * Choose from one of the `EuiTitle.size` options
	     */
	    titleSize?: EuiTitleSize;
	    /**
	     * Gets wrapped in a subdued EuiText block.
	     * Recommendation is to pass typical text elements like `<p>`
	     */
	    body?: ReactNode;
	    /**
	     * Pass a single or an array of actions (buttons) that get stacked at the bottom.
	     * Recommendation is to pass the primary action first and secondary actions as empty buttons
	     */
	    actions?: ReactNode;
	};
	export const EuiEmptyPrompt: FunctionComponent<EuiEmptyPromptProps>;

}
declare module '@elastic/eui' {
	export { EuiEmptyPrompt, EuiEmptyPromptProps } from '@elastic\eui\src\components\empty_prompt\empty_prompt';

}
declare module '@elastic\eui\src\components\expression\expression' {
	import { ButtonHTMLAttributes, HTMLAttributes, MouseEventHandler, ReactNode, FunctionComponent } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common'; const colorToClassNameMap: {
	    subdued: string;
	    primary: string;
	    success: string;
	    secondary: string;
	    accent: string;
	    warning: string;
	    danger: string;
	}; const textWrapToClassNameMap: {
	    'break-word': null;
	    truncate: string;
	};
	export const COLORS: ("primary" | "secondary" | "success" | "accent" | "warning" | "danger" | "subdued")[];
	export type ExpressionColor = keyof typeof colorToClassNameMap; const displayToClassNameMap: {
	    inline: null;
	    columns: string;
	};
	export type EuiExpressionProps = CommonProps & {
	    /**
	     * First part of the expression
	     */
	    description: ReactNode;
	    descriptionProps?: HTMLAttributes<HTMLSpanElement>;
	    /**
	     * Second part of the expression
	     */
	    value?: ReactNode;
	    valueProps?: HTMLAttributes<HTMLSpanElement>;
	    /**
	     * Color of the `description`
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: ExpressionColor;
	    /**
	     * Should the `description` auto-uppercase?
	     */
	    uppercase?: boolean;
	    /**
	     * Adds an solid border at the bottom
	     */
	    isActive?: boolean;
	    /**
	     * Turns the component into a button and adds an editable style border at the bottom
	     */
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Sets the display style for the expression. Defaults to `inline`
	     */
	    display?: keyof typeof displayToClassNameMap;
	    /**
	     * Forces color to display as `danger` and shows an `alert` icon
	     */
	    isInvalid?: boolean;
	    /**
	     * Sets a custom width for the description when using the columns layout.
	     * Set to a number for a custom width in `px`.
	     * Set to a string for a custom width in custom measurement.
	     * Defaults to `20%`
	     */
	    descriptionWidth?: number | string;
	    /**
	     * Sets how to handle the wrapping of long text.
	     */
	    textWrap?: keyof typeof textWrapToClassNameMap;
	}; type Buttonlike = EuiExpressionProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> & {
	    onClick: MouseEventHandler<HTMLButtonElement>;
	}; type Spanlike = EuiExpressionProps & Omit<HTMLAttributes<HTMLSpanElement>, 'value'>;
	export const EuiExpression: FunctionComponent<ExclusiveUnion<Buttonlike, Spanlike>>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiExpression, EuiExpressionProps } from '@elastic\eui\src\components\expression\expression';

}
declare module '@elastic\eui\src\components\facet\facet_button' {
	import { FunctionComponent, HTMLAttributes, MouseEventHandler, ReactNode, RefCallback } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiFacetButtonProps extends CommonProps, Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
	    buttonRef?: RefCallback<HTMLButtonElement>;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    /**
	     * Any node, but preferably a `EuiIcon` or `EuiAvatar`
	     */
	    icon?: ReactNode;
	    isDisabled?: boolean;
	    /**
	     * Adds/swaps for loading spinner & disables
	     */
	    isLoading?: boolean;
	    /**
	     * Changes visual of button to indicate it's currently selected
	     */
	    isSelected?: boolean;
	    onClick?: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Adds a notification indicator for displaying the quantity provided
	     */
	    quantity?: number;
	}
	export const EuiFacetButton: FunctionComponent<EuiFacetButtonProps>;

}
declare module '@elastic\eui\src\components\facet\facet_group' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; type FacetGroupLayout = 'vertical' | 'horizontal';
	export const LAYOUTS: ("horizontal" | "vertical")[]; type FacetGroupGutterSize = 'none' | 's' | 'm' | 'l';
	export const GUTTER_SIZES: ("s" | "m" | "l" | "none")[];
	export type EuiFacetGroupProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * Vertically in a column, or horizontally in one wrapping line
	     */
	    layout?: FacetGroupLayout;
	    /**
	     * Distance between facet buttons.
	     * Horizontal layout always adds more distance horizontally between buttons.
	     */
	    gutterSize?: FacetGroupGutterSize;
	};
	export const EuiFacetGroup: FunctionComponent<EuiFacetGroupProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiFacetButton, EuiFacetButtonProps } from '@elastic\eui\src\components\facet\facet_button';
	export { EuiFacetGroup, EuiFacetGroupProps } from '@elastic\eui\src\components\facet\facet_group';

}
declare module '@elastic\eui\src\components\form\form_row\make_id' {
	 function makeId(): string;
	export default makeId;

}
declare module '@elastic\eui\src\components\header\header_section\header_section' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; type HeaderSectionSide = 'left' | 'right';
	export type EuiHeaderSectionProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    side?: HeaderSectionSide;
	    grow?: boolean;
	};
	export const EuiHeaderSection: FunctionComponent<EuiHeaderSectionProps>;
	export {};

}
declare module '@elastic\eui\src\components\header\header_section\header_section_item' {
	import { FunctionComponent, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; type Border = 'left' | 'right' | 'none';
	export type EuiHeaderSectionItemProps = CommonProps & {
	    /**
	     * Side to display a short border on.
	     * Not supported in Amsterdam theme.
	     */
	    border?: Border;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	};
	export const EuiHeaderSectionItem: FunctionComponent<EuiHeaderSectionItemProps>;
	export {};

}
declare module '@elastic\eui\src\components\header\header_section\header_section_item_button' {
	import React from 'react';
	import { EuiNotificationBadgeProps } from '@elastic\eui\src\components\badge\notification_badge\badge_notification';
	import { EuiButtonEmptyProps } from '@elastic\eui\src\components\button';
	export type EuiHeaderSectionItemButtonProps = EuiButtonEmptyProps & {
	    /**
	     * Inserts the node into a EuiBadgeNotification and places it appropriately against the button.
	     * Or pass `true` to render a simple dot
	     */
	    notification?: EuiNotificationBadgeProps['children'] | boolean;
	    /**
	     * Changes the color of the notification background
	     */
	    notificationColor?: EuiNotificationBadgeProps['color'];
	};
	export type EuiHeaderSectionItemButtonRef = (HTMLButtonElement & {
	    euiAnimate: () => void;
	}) | null;
	export const EuiHeaderSectionItemButton: React.ForwardRefExoticComponent<(import ("@elastic\eui\src\components\common").DisambiguateSet<import ("@elastic\eui\src\components\common").PropsForAnchor<import ("@elastic\eui\src\components\button\button_empty\button_empty").CommonEuiButtonEmptyProps, {}>, import ("@elastic\eui\src\components\common").PropsForButton<import ("@elastic\eui\src\components\button\button_empty\button_empty").CommonEuiButtonEmptyProps, {}>> & import ("@elastic\eui\src\components\button\button_empty\button_empty").CommonEuiButtonEmptyProps & {
	    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
	} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
	    /**
	     * Inserts the node into a EuiBadgeNotification and places it appropriately against the button.
	     * Or pass `true` to render a simple dot
	     */
	    notification?: EuiNotificationBadgeProps['children'] | boolean;
	    /**
	     * Changes the color of the notification background
	     */
	    notificationColor?: EuiNotificationBadgeProps['color'];
	} & {
	    children?: React.ReactNode;
	} & React.RefAttributes<EuiHeaderSectionItemButtonRef>) | (import ("@elastic\eui\src\components\common").DisambiguateSet<import ("@elastic\eui\src\components\common").PropsForButton<import ("@elastic\eui\src\components\button\button_empty\button_empty").CommonEuiButtonEmptyProps, {}>, import ("@elastic\eui\src\components\common").PropsForAnchor<import ("@elastic\eui\src\components\button\button_empty\button_empty").CommonEuiButtonEmptyProps, {}>> & import ("@elastic\eui\src\components\button\button_empty\button_empty").CommonEuiButtonEmptyProps & {
	    href?: string | undefined;
	    onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
	} & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	    /**
	     * Inserts the node into a EuiBadgeNotification and places it appropriately against the button.
	     * Or pass `true` to render a simple dot
	     */
	    notification?: EuiNotificationBadgeProps['children'] | boolean;
	    /**
	     * Changes the color of the notification background
	     */
	    notificationColor?: EuiNotificationBadgeProps['color'];
	} & {
	    children?: React.ReactNode;
	} & React.RefAttributes<EuiHeaderSectionItemButtonRef>)>;

}
declare module '@elastic\eui\src\components\header\header_section' {
	export { EuiHeaderSection, EuiHeaderSectionProps } from '@elastic\eui\src\components\header\header_section\header_section';
	export { EuiHeaderSectionItem, EuiHeaderSectionItemProps, } from '@elastic\eui\src\components\header\header_section\header_section_item';
	export { EuiHeaderSectionItemButton, EuiHeaderSectionItemButtonProps, } from '@elastic\eui\src\components\header\header_section\header_section_item_button';

}
declare module '@elastic\eui\src\components\header\header_breadcrumbs\header_breadcrumbs' {
	import { FunctionComponent } from 'react';
	import { EuiBreadcrumbsProps } from '@elastic\eui\src\components\breadcrumbs';
	export const EuiHeaderBreadcrumbs: FunctionComponent<EuiBreadcrumbsProps>;

}
declare module '@elastic\eui\src\components\header\header_breadcrumbs' {
	export { EuiHeaderBreadcrumbs } from '@elastic\eui\src\components\header\header_breadcrumbs\header_breadcrumbs';

}
declare module '@elastic\eui\src\components\header\header' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiHeaderSectionItemProps } from '@elastic\eui\src\components\header\header_section';
	import { EuiBreadcrumb, EuiBreadcrumbsProps } from '@elastic\eui\src\components\breadcrumbs'; type EuiHeaderSectionItemType = EuiHeaderSectionItemProps['children']; type EuiHeaderSectionBorderType = EuiHeaderSectionItemProps['border'];
	export interface EuiHeaderSections {
	    /**
	     * An arry of items that will be wrapped in a #EuiHeaderSectionItem
	     */
	    items?: EuiHeaderSectionItemType[];
	    /**
	     * Apply the passed border side to each #EuiHeaderSectionItem
	     */
	    borders?: EuiHeaderSectionBorderType;
	    /**
	     * Breadcrumbs in the header cannot be wrapped in a #EuiHeaderSection in order for truncation to work.
	     * Simply pass the array of EuiBreadcrumb objects
	     */
	    breadcrumbs?: EuiBreadcrumb[];
	    /**
	     * Other props to pass to #EuiHeaderBreadcrumbs
	     */
	    breadcrumbProps?: Omit<EuiBreadcrumbsProps, 'breadcrumbs'>;
	}
	export type EuiHeaderProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * An array of objects to wrap in a #EuiHeaderSection.
	     * Each section is spaced using `space-between`.
	     * See #EuiHeaderSectionsProp for object details.
	     * This prop disregards the prop `children` if both are passed.
	     */
	    sections?: EuiHeaderSections[];
	    /**
	     * Helper that positions the header against the window body and
	     * adds the correct amount of top padding to the window when in `fixed` mode
	     */
	    position?: 'static' | 'fixed';
	    /**
	     * The `default` will inherit its coloring from the light or dark theme.
	     * Or, force the header into pseudo `dark` theme for all themes.
	     */
	    theme?: 'default' | 'dark';
	};
	export const EuiHeader: FunctionComponent<EuiHeaderProps>;
	export {};

}
declare module '@elastic\eui\src\components\header\header_logo' {
	import { FunctionComponent, AnchorHTMLAttributes, ReactNode } from 'react';
	import { IconType } from '@elastic\eui\src\components\icon';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiHeaderLogoProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
	    href?: string;
	    rel?: string;
	    target?: string;
	    iconType?: IconType;
	    iconTitle?: string;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	};
	export const EuiHeaderLogo: FunctionComponent<EuiHeaderLogoProps>;

}
declare module '@elastic\eui\src\components\header\header_alert\header_alert' {
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiHeaderAlertProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
	    /**
	     * Adds a link to the alert.
	     */
	    action?: ReactNode;
	    date: ReactNode;
	    text?: ReactNode;
	    title: ReactNode;
	    /**
	     * Accepts an `EuiBadge` that displays on the alert
	     */
	    badge?: ReactNode;
	};
	export const EuiHeaderAlert: FunctionComponent<EuiHeaderAlertProps>;

}
declare module '@elastic\eui\src\components\header\header_alert' {
	export { EuiHeaderAlert, EuiHeaderAlertProps } from '@elastic\eui\src\components\header\header_alert\header_alert';

}
declare module '@elastic\eui\src\components\header\header_links\header_link' {
	import { FunctionComponent } from 'react';
	import { EuiButtonEmptyProps } from '@elastic\eui\src\components\button';
	export type EuiHeaderLinkProps = EuiButtonEmptyProps & {
	    /**
	     * Simple prop to update color based on active state.
	     * Can be overridden with `color`
	     */
	    isActive?: boolean;
	};
	export const EuiHeaderLink: FunctionComponent<EuiHeaderLinkProps>;

}
declare module '@elastic\eui\src\components\header\header_links\header_links' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon';
	import { EuiPopoverProps } from '@elastic\eui\src\components\popover';
	import { EuiHeaderSectionItemButtonProps } from '@elastic\eui\src\components\header\header_section';
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint'; type EuiHeaderLinksGutterSize = 'xs' | 's' | 'm' | 'l'; type EuiHeaderLinksPopoverButtonProps = Partial<EuiHeaderSectionItemButtonProps> & {
	    iconType?: IconType;
	};
	export type EuiHeaderLinksProps = CommonProps & HTMLAttributes<HTMLElement> & {
	    /**
	     * Spacing between direct children
	     */
	    gutterSize?: EuiHeaderLinksGutterSize;
	    /**
	     * A list of named breakpoints at which to show the popover version
	     */
	    popoverBreakpoints?: EuiBreakpointSize[] | 'all' | 'none';
	    /**
	     * Extend the functionality of the EuiPopover.button which is a EuiHeaderSectionItemButton.
	     * With the addition of `iconType` to change the display icon which defaults to `apps`
	     */
	    popoverButtonProps?: EuiHeaderLinksPopoverButtonProps;
	    /**
	     * Extend the functionality of the EuiPopover
	     */
	    popoverProps?: Omit<EuiPopoverProps, 'button' | 'closePopover'>;
	};
	export const GUTTER_SIZES: ("xs" | "s" | "m" | "l")[];
	export const EuiHeaderLinks: FunctionComponent<EuiHeaderLinksProps>;
	export {};

}
declare module '@elastic\eui\src\components\header\header_links' {
	export { EuiHeaderLink, EuiHeaderLinkProps } from '@elastic\eui\src\components\header\header_links\header_link';
	export { EuiHeaderLinks, EuiHeaderLinksProps } from '@elastic\eui\src\components\header\header_links\header_links';

}
declare module '@elastic/eui' {
	export { EuiHeader, EuiHeaderProps, EuiHeaderSections } from '@elastic\eui\src\components\header\header';
	export { EuiHeaderAlert, EuiHeaderAlertProps } from '@elastic\eui\src\components\header\header_alert';
	export { EuiHeaderBreadcrumbs } from '@elastic\eui\src\components\header\header_breadcrumbs';
	export { EuiHeaderLink, EuiHeaderLinkProps, EuiHeaderLinks, EuiHeaderLinksProps, } from '@elastic\eui\src\components\header\header_links';
	export { EuiHeaderLogo, EuiHeaderLogoProps } from '@elastic\eui\src\components\header\header_logo';
	export { EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiHeaderSectionItemButtonProps, } from '@elastic\eui\src\components\header\header_section';

}
declare module '@elastic\eui\src\components\health\health' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconColor } from '@elastic\eui\src\components\icon';
	export const TEXT_SIZES: ("xs" | "s" | "m" | "inherit")[];
	export type EuiHealthProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
	    /**
	     * Sets the color of the dot icon.
	     * It accepts any `IconColor`: `default`, `primary`, `success`, `accent`, `warning`, `danger`, `text`,
	     * `subdued` or `ghost`; or any valid CSS color value as a `string`
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    color?: IconColor;
	    /**
	     * Matches the text scales of EuiText.
	     * The `inherit` style will get its font size from the parent element
	     */
	    textSize?: typeof TEXT_SIZES[number];
	};
	export const EuiHealth: FunctionComponent<EuiHealthProps>;

}
declare module '@elastic/eui' {
	export { EuiHealth, EuiHealthProps } from '@elastic\eui\src\components\health\health';

}
declare module '@elastic\eui\src\components\image\image' {
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common'; type ImageSize = 's' | 'm' | 'l' | 'xl' | 'fullWidth' | 'original'; type Floats = 'left' | 'right'; type Margins = 's' | 'm' | 'l' | 'xl';
	export const SIZES: string[]; type FullScreenIconColor = 'light' | 'dark'; type _EuiImageSrcOrUrl = ExclusiveUnion<{
	    /**
	     * Requires either `src` or `url` but defaults to using `src` if both are provided
	     */
	    src: string;
	}, {
	    url: string;
	}>;
	export type EuiImageProps = CommonProps & _EuiImageSrcOrUrl & HTMLAttributes<HTMLImageElement> & {
	    /**
	     * Separate from the caption is a title on the alt tag itself.
	     * This one is required for accessibility.
	     */
	    alt: string;
	    /**
	     * Accepts `s` / `m` / `l` / `xl` / `original` / `fullWidth` / or a CSS size of `number` or `string`.
	     * `fullWidth` will set the figure to stretch to 100% of its container.
	     * `string` and `number` types will max both the width or height, whichever is greater.
	     */
	    size?: ImageSize | number | string;
	    /**
	     * Changes the color of the icon that floats above the image when it can be clicked to fullscreen.
	     * The default value of `light` is fine unless your image has a white background, in which case you should change it to `dark`.
	     */
	    fullScreenIconColor?: FullScreenIconColor;
	    /**
	     * Provides the visible caption to the image
	     */
	    caption?: ReactNode;
	    /**
	     * When set to `true` (default) will apply a slight shadow to the image
	     */
	    hasShadow?: boolean;
	    /**
	     * When set to `true` will make the image clickable to a larger version
	     */
	    allowFullScreen?: boolean;
	    /**
	     * Float the image to the left or right. Useful in large text blocks.
	     */
	    float?: Floats;
	    /**
	     * Margin around the image.
	     */
	    margin?: Margins;
	};
	export const EuiImage: FunctionComponent<EuiImageProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiImage, EuiImageProps } from '@elastic\eui\src\components\image\image';

}
declare module '@elastic\eui\src\components\key_pad_menu\key_pad_menu' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiKeyPadMenuProps = CommonProps & HTMLAttributes<HTMLUListElement>;
	export const EuiKeyPadMenu: FunctionComponent<EuiKeyPadMenuProps>;

}
declare module '@elastic\eui\src\components\key_pad_menu\key_pad_menu_item' {
	import { AnchorHTMLAttributes, ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon';
	interface EuiKeyPadMenuItemCommonProps {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    isDisabled?: boolean;
	    label: ReactNode;
	    /**
	     * Add a badge to the card to label it as "Beta" or other non-GA state
	     */
	    betaBadgeLabel?: string;
	    /**
	     * Supply an icon type if the badge should just be an icon
	     */
	    betaBadgeIconType?: IconType;
	    /**
	     * Add a description to the beta badge (will appear in a tooltip)
	     */
	    betaBadgeTooltipContent?: ReactNode;
	    onClick?: () => void;
	    href?: string;
	    rel?: string;
	}
	export type EuiKeyPadMenuItemProps = CommonProps & ExclusiveUnion<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>> & EuiKeyPadMenuItemCommonProps;
	export const EuiKeyPadMenuItem: FunctionComponent<EuiKeyPadMenuItemProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiKeyPadMenu, EuiKeyPadMenuProps } from '@elastic\eui\src\components\key_pad_menu\key_pad_menu';
	export { EuiKeyPadMenuItem, EuiKeyPadMenuItemProps } from '@elastic\eui\src\components\key_pad_menu\key_pad_menu_item';

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_types' {
	import { ComponentType, ReactNode } from 'react';
	import { VFile } from 'vfile';
	import { Node as UnistNode, Position as UnistPosition } from 'unist';
	import { Parser } from 'remark-parse';
	import { VFileMessage } from 'vfile-message';
	import { IconType } from '@elastic\eui\src\components\icon';
	export interface RemarkParser {
	    Parser: typeof Parser;
	    tokenizeInline: Function;
	    file: VFile;
	}
	export interface RemarkTokenizer {
	    (this: RemarkParser, eat: Function & {
	        now: Function;
	    }, value: string, silent: boolean): boolean | void;
	    locator?: (value: string, fromIndex: number) => number;
	    notInLink?: boolean;
	}
	interface RehypeNode {
	}
	interface RemarkRehypeHandlerCallback {
	    (node: UnistPosition, tagName: string, props: Object, children: RehypeNode[]): RehypeNode;
	}
	export interface RemarkRehypeHandler {
	    (h: RemarkRehypeHandlerCallback, node: UnistNode): RehypeNode;
	}
	export interface EuiMarkdownEditorUiPluginEditorProps<NodeShape> {
	    node: NodeShape | null;
	    onCancel: () => void;
	    onSave: (markdown: string, config: EuiMarkdownStringTagConfig) => void;
	}
	export const isPluginWithImmediateFormatting: (x: PluginWithImmediateFormatting | PluginWithDelayedFormatting<any>) => x is PluginWithImmediateFormatting;
	export interface PluginWithImmediateFormatting {
	    formatting: EuiMarkdownFormatting;
	    editor?: never;
	}
	export interface PluginWithDelayedFormatting<NodeShape> {
	    formatting?: never;
	    editor: ComponentType<EuiMarkdownEditorUiPluginEditorProps<NodeShape>>;
	}
	export type EuiMarkdownEditorUiPlugin<NodeShape = any> = {
	    name: string;
	    button: {
	        label: string;
	        iconType: IconType;
	    };
	    helpText?: ReactNode;
	} & (PluginWithImmediateFormatting | PluginWithDelayedFormatting<NodeShape>);
	export interface EuiMarkdownFormatting {
	    prefix?: string;
	    suffix?: string;
	    blockPrefix?: string;
	    blockSuffix?: string;
	    multiline?: boolean;
	    replaceNext?: string;
	    prefixSpace?: boolean;
	    scanFor?: string;
	    surroundWithNewlines?: boolean;
	    orderedList?: boolean;
	    trimFirst?: boolean;
	}
	export interface EuiMarkdownAstNode {
	    type: string;
	    children?: EuiMarkdownAstNode[];
	    position: EuiMarkdownAstNodePosition;
	}
	export interface EuiMarkdownAstNodePosition {
	    start: {
	        line: number;
	        column: number;
	        offset: number;
	    };
	    end: {
	        line: number;
	        column: number;
	        offset: number;
	    };
	}
	export type EuiMarkdownParseError = string | VFileMessage | Error;
	export interface EuiMarkdownDropHandler {
	    supportedFiles: string[];
	    accepts: (itemType: string) => boolean;
	    getFormattingForItem: (file: File) => EuiMarkdownDragAndDropResult | Promise<EuiMarkdownDragAndDropResult>;
	}
	export interface EuiMarkdownStringTagConfig {
	    block: boolean;
	}
	export interface EuiMarkdownDragAndDropResult {
	    text: string;
	    config: EuiMarkdownStringTagConfig;
	}
	export {};

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_actions' {
	
	import { EuiMarkdownEditorUiPlugin, EuiMarkdownFormatting } from '@elastic\eui\src\components\markdown_editor\markdown_types'; class MarkdownActions {
	    editorID: string;
	    styles: Record<string, EuiMarkdownEditorUiPlugin>;
	    constructor(editorID: string, uiPlugins: EuiMarkdownEditorUiPlugin[]);
	    /**
	     * .do() accepts a string and retrieves the correlating style object (defined in the
	     * constructor). It passes this to applyStyle() that does the text manipulation.
	     *
	     * @param {string} pluginName
	     * @memberof MarkdownActions
	     */
	    do(pluginName: string): true | ({
	        name: string;
	        button: {
	            label: string;
	            iconType: import ("@elastic\eui\src\components\icon").IconType; /**
	             * This object is in the format:
	             * [nameOfAction]: {[styles to apply]}
	             */
	        };
	        helpText?: import("react").ReactNode;
	    } & import ("@elastic\eui\src\components\markdown_editor\markdown_types").PluginWithDelayedFormatting<any>);
	    /**
	     * Sets the default styling object and then superimposes the changes to make on top of
	     * it. Calls the `styleSelectedText` helper function that does the heavy lifting.
	     * Adapted from https://github.com/github/markdown-toolbar-element/blob/main/src/index.ts
	     *
	     * @param {object} incomingStyle
	     * @memberof MarkdownActions
	     */
	    applyStyle(incomingStyle: EuiMarkdownFormatting): void;
	}
	interface SelectionRange {
	    text: string;
	    selectionStart?: number;
	    selectionEnd?: number;
	}
	export function insertText(textarea: HTMLTextAreaElement, { text, selectionStart, selectionEnd }: SelectionRange): void;
	export default MarkdownActions;

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_modes' {
	export const MODE_EDITING: "editing";
	export const MODE_VIEWING: "viewing";
	export type MARKDOWN_MODE = typeof MODE_EDITING | typeof MODE_VIEWING;

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_context' {
	
	import { EuiMarkdownEditorUiPlugin } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	interface MarkdownPosition {
	    start: {
	        line: number;
	        column: number;
	        offset: number;
	    };
	    end: {
	        line: number;
	        column: number;
	        offset: number;
	    };
	}
	export interface ContextShape {
	    openPluginEditor: (plugin: EuiMarkdownEditorUiPlugin) => void;
	    replaceNode(position: MarkdownPosition, next: string): void;
	}
	export const EuiMarkdownContext: import("react").Context<ContextShape>;
	export {};

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_editor_toolbar' {
	import React, { HTMLAttributes, MouseEventHandler } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { MARKDOWN_MODE } from '@elastic\eui\src\components\markdown_editor\markdown_modes';
	import { EuiMarkdownEditorUiPlugin } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	import MarkdownActions from '@elastic\eui\src\components\markdown_editor\markdown_actions';
	export type EuiMarkdownEditorToolbarProps = HTMLAttributes<HTMLDivElement> & CommonProps & {
	    selectedNode?: null | any;
	    markdownActions: MarkdownActions;
	    viewMode: MARKDOWN_MODE;
	    onClickPreview: MouseEventHandler<HTMLButtonElement>;
	    uiPlugins: EuiMarkdownEditorUiPlugin[];
	};
	export const EuiMarkdownEditorToolbar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CommonProps & {
	    selectedNode?: null | any;
	    markdownActions: MarkdownActions;
	    viewMode: MARKDOWN_MODE;
	    onClickPreview: MouseEventHandler<HTMLButtonElement>;
	    uiPlugins: EuiMarkdownEditorUiPlugin[];
	} & React.RefAttributes<HTMLDivElement>>;

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_editor_text_area' {
	import React, { TextareaHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiMarkdownEditorTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & CommonProps & {
	    isInvalid?: boolean;
	    fullWidth?: boolean;
	    compressed?: boolean;
	    height: string;
	    maxHeight: string;
	};
	export const EuiMarkdownEditorTextArea: React.ForwardRefExoticComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement> & CommonProps & {
	    isInvalid?: boolean | undefined;
	    fullWidth?: boolean | undefined;
	    compressed?: boolean | undefined;
	    height: string;
	    maxHeight: string;
	} & React.RefAttributes<HTMLTextAreaElement>>;

}
declare module '@elastic\eui\src\components\markdown_editor\plugins\remark\remark_prismjs' {
	import { Plugin } from 'unified'; const attacher: Plugin;
	export default attacher;

}
declare module '@elastic\eui\src\components\markdown_editor\plugins\markdown_tooltip' {
	import { FunctionComponent } from 'react';
	import { EuiMarkdownAstNodePosition } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	import { Plugin } from 'unified';
	interface TooltipNodeDetails {
	    type: 'tooltipPlugin';
	    content: string;
	} const tooltipPlugin: {
	    name: string;
	    button: {
	        label: string;
	        iconType: string;
	    };
	    formatting: {
	        prefix: string;
	        suffix: string;
	        trimFirst: boolean;
	    };
	    helpText: JSX.Element;
	}; const TooltipParser: Plugin; const tooltipMarkdownRenderer: FunctionComponent<TooltipNodeDetails & {
	    position: EuiMarkdownAstNodePosition;
	}>;
	export { tooltipPlugin as plugin, TooltipParser as parser, tooltipMarkdownRenderer as renderer, };

}
declare module '@elastic\eui\src\components\markdown_editor\plugins\markdown_checkbox' {
	import { FunctionComponent } from 'react';
	import { EuiMarkdownAstNodePosition } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	import { Plugin } from 'unified';
	interface CheckboxNodeDetails {
	    type: 'checkboxPlugin';
	    lead: string;
	    label: string;
	    isChecked: boolean;
	} const CheckboxParser: Plugin; const CheckboxMarkdownRenderer: FunctionComponent<CheckboxNodeDetails & {
	    position: EuiMarkdownAstNodePosition;
	}>;
	export { CheckboxParser as parser, CheckboxMarkdownRenderer as renderer };

}
declare module '@elastic\eui\src\components\markdown_editor\plugins\markdown_link_validator' {
	interface LinkOrTextNode {
	    type: string;
	    url?: string;
	    title?: string | null;
	    value?: string;
	    children?: Array<{
	        value: string;
	    }>;
	}
	export function markdownLinkValidator(): (ast: any) => void;
	export function mutateLinkToText(node: LinkOrTextNode): LinkOrTextNode;
	export function validateUrl(url: string): boolean;
	export {};

}
declare module '@elastic\eui\src\components\markdown_editor\plugins\markdown_default_plugins' {
	import React from 'react';
	import { Plugin, PluggableList, Attacher, Pluggable, Settings } from 'unified';
	import { Options as Remark2RehypeOptions } from 'mdast-util-to-hast';
	import rehype2react from 'rehype-react';
	import { EuiMarkdownEditorUiPlugin } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	export const getDefaultEuiMarkdownParsingPlugins: () => PluggableList<Settings>;
	export const defaultParsingPlugins: PluggableList<Settings>;
	export interface Rehype2ReactOptions {
	    components: {
	        [key: string]: React.ComponentType<any>;
	    };
	    [key: string]: any;
	}
	export const getDefaultEuiMarkdownProcessingPlugins: () => [
	    [
	        Plugin,
	        Remark2RehypeOptions
	    ],
	    [
	        typeof rehype2react,
	        Rehype2ReactOptions
	    ],
	    ...PluggableList
	];
	export const defaultProcessingPlugins: [[Attacher<[(Settings | undefined)?], Settings>, Remark2RehypeOptions], [typeof rehype2react, Rehype2ReactOptions], ...Pluggable<any[], Settings>[]];
	export const getDefaultEuiMarkdownUiPlugins: () => EuiMarkdownEditorUiPlugin[];
	export const defaultUiPlugins: EuiMarkdownEditorUiPlugin<any>[];

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_format' {
	import { FunctionComponent } from 'react';
	import { PluggableList } from 'unified';
	export interface EuiMarkdownFormatProps {
	    children: string;
	    /** array of unified plugins to parse content into an AST */
	    parsingPluginList?: PluggableList;
	    /** array of unified plugins to convert the AST into a ReactNode */
	    processingPluginList?: PluggableList;
	}
	export const EuiMarkdownFormat: FunctionComponent<EuiMarkdownFormatProps>;

}
declare module '@elastic\eui\src\components\modal\modal' {
	import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
	export interface EuiModalProps extends HTMLAttributes<HTMLDivElement> {
	    className?: string;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    onClose: (event?: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
	    /**
	     * Sets the max-width of the modal.
	     * Set to `true` to use the default (`euiBreakpoints 'm'`),
	     * set to `false` to not restrict the width,
	     * set to a number for a custom width in px,
	     * set to a string for a custom width in custom measurement.
	     */
	    maxWidth?: boolean | number | string;
	    /**
	     * Specifies what element should initially have focus.
	     * Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.
	     */
	    initialFocus?: HTMLElement | (() => HTMLElement) | string;
	}
	export const EuiModal: FunctionComponent<EuiModalProps>;

}
declare module '@elastic\eui\src\components\modal\modal_footer' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiModalFooterProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps>;
	export const EuiModalFooter: EuiModalFooterProps;

}
declare module '@elastic\eui\src\components\modal\modal_header' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiModalHeaderProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps>;
	export const EuiModalHeader: EuiModalHeaderProps;

}
declare module '@elastic\eui\src\components\modal\modal_header_title' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiModalHeaderTitleProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps>;
	export const EuiModalHeaderTitle: EuiModalHeaderTitleProps;

}
declare module '@elastic\eui\src\components\modal\modal_body' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiModalBodyProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps>;
	export const EuiModalBody: EuiModalBodyProps;

}
declare module '@elastic\eui\src\components\modal\confirm_modal' {
	import React, { FunctionComponent, ReactNode } from 'react';
	import { EuiModalProps } from '@elastic\eui\src\components\modal\modal';
	import { ButtonColor } from '@elastic\eui\src\components\button';
	export interface EuiConfirmModalProps extends Omit<EuiModalProps, 'children' | 'initialFocus' | 'onClose' | 'title'> {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children?: ReactNode;
	    title?: ReactNode;
	    cancelButtonText?: ReactNode;
	    confirmButtonText?: ReactNode;
	    onCancel: (event?: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
	    onConfirm?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	    confirmButtonDisabled?: boolean;
	    className?: string;
	    defaultFocusedButton?: typeof CONFIRM_BUTTON | typeof CANCEL_BUTTON;
	    buttonColor?: ButtonColor;
	    /**
	     * Sets the max-width of the modal.
	     * Set to `true` to use the default (`euiBreakpoints 'm'`),
	     * set to `false` to not restrict the width,
	     * set to a number for a custom width in px,
	     * set to a string for a custom width in custom measurement.
	     */
	    maxWidth?: boolean | number | string;
	    /**
	     * Passes `isLoading` prop to the confirm button
	     */
	    isLoading?: boolean;
	}
	export const CONFIRM_BUTTON = "confirm";
	export const CANCEL_BUTTON = "cancel";
	export const EuiConfirmModal: FunctionComponent<EuiConfirmModalProps>;

}
declare module '@elastic/eui' {
	export { EuiConfirmModal, EuiConfirmModalProps, CONFIRM_BUTTON as EUI_MODAL_CONFIRM_BUTTON, CANCEL_BUTTON as EUI_MODAL_CANCEL_BUTTON, } from '@elastic\eui\src\components\modal\confirm_modal';
	export { EuiModal, EuiModalProps } from '@elastic\eui\src\components\modal\modal';
	export { EuiModalFooter, EuiModalFooterProps } from '@elastic\eui\src\components\modal\modal_footer';
	export { EuiModalHeader, EuiModalHeaderProps } from '@elastic\eui\src\components\modal\modal_header';
	export { EuiModalBody, EuiModalBodyProps } from '@elastic\eui\src\components\modal\modal_body';
	export { EuiModalHeaderTitle, EuiModalHeaderTitleProps, } from '@elastic\eui\src\components\modal\modal_header_title';

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_editor_footer' {
	import React from 'react';
	import { EuiMarkdownDropHandler, EuiMarkdownEditorUiPlugin, EuiMarkdownParseError } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	interface EuiMarkdownEditorFooterProps {
	    uiPlugins: EuiMarkdownEditorUiPlugin[];
	    isUploadingFiles: boolean;
	    openFiles: () => void;
	    errors: EuiMarkdownParseError[];
	    hasUnacceptedItems: boolean;
	    dropHandlers: EuiMarkdownDropHandler[];
	}
	export const EuiMarkdownEditorFooter: React.ForwardRefExoticComponent<EuiMarkdownEditorFooterProps & React.RefAttributes<HTMLDivElement>>;
	export {};

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_editor_drop_zone' {
	import { FunctionComponent } from 'react';
	import { EuiMarkdownEditorUiPlugin, EuiMarkdownParseError, EuiMarkdownDropHandler, EuiMarkdownStringTagConfig } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	interface EuiMarkdownEditorDropZoneProps {
	    uiPlugins: EuiMarkdownEditorUiPlugin[];
	    errors: EuiMarkdownParseError[];
	    dropHandlers: EuiMarkdownDropHandler[];
	    insertText: (text: string, config: EuiMarkdownStringTagConfig) => void;
	    hasUnacceptedItems: boolean;
	    setHasUnacceptedItems: (hasUnacceptedItems: boolean) => void;
	    setEditorFooterHeight: (height: number) => void;
	    isEditing: boolean;
	}
	export const EuiMarkdownEditorDropZone: FunctionComponent<EuiMarkdownEditorDropZoneProps>;
	export {};

}
declare module '@elastic\eui\src\components\markdown_editor\markdown_editor' {
	import React, { HTMLAttributes } from 'react';
	import { PluggableList } from 'unified';
	import { VFileMessage } from 'vfile-message';
	import { CommonProps, OneOf } from '@elastic\eui\src\components\common';
	import { MARKDOWN_MODE } from '@elastic\eui\src\components\markdown_editor\markdown_modes';
	import { EuiMarkdownAstNode, EuiMarkdownDropHandler, EuiMarkdownEditorUiPlugin, EuiMarkdownParseError } from '@elastic\eui\src\components\markdown_editor\markdown_types';
	import { ContextShape } from '@elastic\eui\src\components\markdown_editor\markdown_context'; type CommonMarkdownEditorProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & CommonProps & {
	    /** aria-label OR aria-labelledby must be set */
	    'aria-label'?: string;
	    /** aria-label OR aria-labelledby must be set */
	    'aria-labelledby'?: string;
	    /** ID of an element describing the text editor, useful for associating error messages */
	    'aria-describedby'?: string;
	    /** a unique ID to attach to the textarea. If one isn't provided, a random one
	     * will be generated */
	    editorId?: string;
	    /** A markdown content */
	    value: string;
	    /** callback function when markdown content is modified */
	    onChange: (value: string) => void;
	    /**
	     * Sets the `height` in pixels of the editor/preview area or pass `full` to allow
	     * the EuiMarkdownEditor to fill the height of its container.
	     * When in `full` mode the vertical resize is not allowed.
	     */
	    height?: number | 'full';
	    /**
	     * Sets the `max-height` in pixels of the editor/preview area.
	     * It has no effect when the `height` is set to `full`.
	     */
	    maxHeight?: number;
	    /**
	     * Automatically adjusts the preview height to fit all the content and avoid a scrollbar.
	     */
	    autoExpandPreview?: boolean;
	    /** plugins to identify new syntax and parse it into an AST node */
	    parsingPluginList?: PluggableList;
	    /** plugins to process the markdown AST nodes into a React nodes */
	    processingPluginList?: PluggableList;
	    /** defines UI for plugins' buttons in the toolbar as well as any modals or extra UI that provides content to the editor */
	    uiPlugins?: EuiMarkdownEditorUiPlugin[];
	    /** errors to bubble up */
	    errors?: EuiMarkdownParseError[];
	    /** callback triggered when parsing results are available */
	    onParse?: (error: EuiMarkdownParseError | null, data: {
	        messages: VFileMessage[];
	        ast: EuiMarkdownAstNode;
	    }) => void;
	    /** initial display mode for the editor */
	    initialViewMode?: MARKDOWN_MODE;
	    /** array defining any drag&drop handlers */
	    dropHandlers?: EuiMarkdownDropHandler[];
	};
	export type EuiMarkdownEditorProps = OneOf<CommonMarkdownEditorProps, 'aria-label' | 'aria-labelledby'>;
	interface EuiMarkdownEditorRef {
	    textarea: HTMLTextAreaElement | null;
	    replaceNode: ContextShape['replaceNode'];
	}
	export const EuiMarkdownEditor: React.ForwardRefExoticComponent<(Pick<CommonMarkdownEditorProps, "height" | "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "data-test-subj" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "value" | "maxHeight" | "uiPlugins" | "parsingPluginList" | "processingPluginList" | "errors" | "dropHandlers" | "editorId" | "autoExpandPreview" | "onParse" | "initialViewMode"> & Pick<Required<CommonMarkdownEditorProps>, "aria-label"> & {
	    "aria-labelledby"?: undefined;
	} & React.RefAttributes<EuiMarkdownEditorRef>) | (Pick<CommonMarkdownEditorProps, "height" | "color" | "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "data-test-subj" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "value" | "maxHeight" | "uiPlugins" | "parsingPluginList" | "processingPluginList" | "errors" | "dropHandlers" | "editorId" | "autoExpandPreview" | "onParse" | "initialViewMode"> & Pick<Required<CommonMarkdownEditorProps>, "aria-labelledby"> & {
	    "aria-label"?: undefined;
	} & React.RefAttributes<EuiMarkdownEditorRef>)>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiMarkdownEditor, EuiMarkdownEditorProps } from '@elastic\eui\src\components\markdown_editor\markdown_editor';
	export { getDefaultEuiMarkdownParsingPlugins, getDefaultEuiMarkdownProcessingPlugins, getDefaultEuiMarkdownUiPlugins, } from '@elastic\eui\src\components\markdown_editor\plugins\markdown_default_plugins';
	export { EuiMarkdownContext } from '@elastic\eui\src\components\markdown_editor\markdown_context';
	export { EuiMarkdownFormat, EuiMarkdownFormatProps } from '@elastic\eui\src\components\markdown_editor\markdown_format';
	export { EuiMarkdownParseError, EuiMarkdownAstNode, EuiMarkdownAstNodePosition, EuiMarkdownFormatting, EuiMarkdownEditorUiPlugin, RemarkRehypeHandler, RemarkTokenizer, } from '@elastic\eui\src\components\markdown_editor\markdown_types';

}
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable import/no-duplicates */

declare module 'remark-emoji' {
  import { Plugin } from 'unified';
  const RemarkEmoji: Plugin;
  export = RemarkEmoji;
}

declare module 'mdast-util-to-hast/lib/all' {
  // eslint-disable-next-line import/no-unresolved
  import { Node } from 'unist';
  import { H } from 'mdast-util-to-hast';

  const all: (h: H, node: Node) => Node[];
  export = all;
}
declare module '@elastic\eui\src\components\notification\notification_event_meta' {
	import { FunctionComponent, ReactNode, ReactElement } from 'react';
	import { IconType } from '@elastic\eui\src\components\icon';
	import { EuiBadgeProps } from '@elastic\eui\src\components\badge';
	import { EuiContextMenuItem, EuiContextMenuItemProps } from '@elastic\eui\src\components\context_menu';
	export type EuiNotificationEventMetaProps = {
	    id: string;
	    /**
	     * Type of event (e.g. "Alert", "Cloud", etc..). Shows inside a badge.
	     */
	    type: string;
	    /**
	     * A unique, human-friendly name for the event to be used in aria attributes (e.g. "alert-critical-01", "cloud-no-severity-12", etc..).
	     */
	    eventName: string;
	    /**
	     * Type of severity (e.g. "Critical", "Warning", etc..). Shows as a text after the `type` following the format "Alert: Critical".
	     */
	    severity?: string;
	    /**
	     * Accepts either our palette colors (primary, success ..etc) or a hex value `#FFFFFF`, `#000`.
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    badgeColor?: EuiBadgeProps['color'];
	    /**
	     * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
	     */
	    iconType?: IconType;
	    /**
	     * Specify an `aria-label` for the icon.
	     * If no `aria-label` is passed we assume the icon is purely decorative.
	     */
	    iconAriaLabel?: string;
	    /**
	     * Indicates when the event was received.
	     */
	    time: ReactNode;
	    /**
	     * Necessary to trigger `onOpenContextMenu` from #EuiNotificationEvent
	     */
	    onOpenContextMenu?: () => Array<ReactElement<EuiContextMenuItemProps, typeof EuiContextMenuItem>>;
	};
	export const EuiNotificationEventMeta: FunctionComponent<EuiNotificationEventMetaProps>;

}
declare module '@elastic\eui\src\components\notification\notification_event_messages' {
	import { FunctionComponent } from 'react';
	export type EuiNotificationEventMessagesProps = {
	    messages: string[];
	    /**
	     * A unique, human-friendly name for the event to be used in aria attributes (e.g. "alert-critical-01", "cloud-no-severity-12", etc..).
	     */
	    eventName: string;
	};
	export const EuiNotificationEventMessages: FunctionComponent<EuiNotificationEventMessagesProps>;

}
declare module '@elastic\eui\src\components\notification\notification_event_read_button' {
	import { FunctionComponent } from 'react';
	import { EuiButtonIconProps } from '@elastic\eui\src\components\button';
	export type EuiNotificationEventReadButtonProps = Omit<EuiButtonIconProps, 'iconType' | 'isDisabled' | 'isSelected' | 'size'> & {
	    id: string;
	    /**
	     * Shows an indicator of the read state of the event
	     */
	    isRead: boolean;
	    /**
	     * Applies an `onClick` handler to the `read` indicator.
	     */
	    onClick: () => void;
	    /**
	     * A unique, human-friendly name for the event to be used in aria attributes (e.g. "alert-critical-01", "cloud-no-severity-12", etc..).
	     */
	    eventName: string;
	};
	export const EuiNotificationEventReadButton: FunctionComponent<EuiNotificationEventReadButtonProps>;

}
declare module '@elastic\eui\src\components\notification\notification_event_read_icon' {
	import { FunctionComponent } from 'react';
	import { EuiIconProps } from '@elastic\eui\src\components\icon';
	export type EuiNotificationEventReadIconProps = Omit<EuiIconProps, 'type' | 'color' | 'size'> & {
	    id: string;
	    /**
	     * Shows an indicator of the read state of the event
	     */
	    isRead: boolean;
	    /**
	     * A unique, human-friendly name for the event to be used in aria attributes (e.g. "alert-critical-01", "cloud-no-severity-12", etc..).
	     */
	    eventName: string;
	};
	export const EuiNotificationEventReadIcon: FunctionComponent<EuiNotificationEventReadIconProps>;

}
declare module '@elastic\eui\src\components\notification\notification_event' {
	import { FunctionComponent, ReactElement } from 'react';
	import { EuiNotificationEventMetaProps } from '@elastic\eui\src\components\notification\notification_event_meta';
	import { EuiNotificationEventMessagesProps } from '@elastic\eui\src\components\notification\notification_event_messages';
	import { EuiNotificationEventReadButtonProps } from '@elastic\eui\src\components\notification\notification_event_read_button';
	import { EuiButtonEmptyProps } from '@elastic\eui\src\components\button';
	import { EuiContextMenuItem, EuiContextMenuItemProps } from '@elastic\eui\src\components\context_menu';
	export type EuiNotificationHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export type EuiNotificationEventProps = Omit<EuiNotificationEventMetaProps, 'onOpenContextMenu' | 'onRead' | 'eventName' | 'id'> & Omit<EuiNotificationEventReadButtonProps, 'onClick' | 'color' | 'eventName' | 'isRead' | 'id'> & {
	    /**
	     * A unique identifier
	     */
	    id: string;
	    /**
	     * The title of the event.
	     */
	    title: string;
	    /**
	     * The heading level of the title.
	     */
	    headingLevel?: EuiNotificationHeadingLevel;
	    /**
	     * Returns the `id` and applies an `onClick` handler to the title.
	     */
	    onClickTitle?: (id: string) => void;
	    /**
	     * The label of the primary action
	     */
	    primaryAction?: string;
	    /**
	     * Apply more props to the `primaryAction` button. See #EuiPrimaryActionProps.
	     */
	    primaryActionProps?: EuiButtonEmptyProps;
	    /**
	     * Returns the `id` and applies an `onClick` handler to the `primaryAction`.
	     */
	    onClickPrimaryAction?: (id: string) => void;
	    /**
	     * Notification messages as an array of strings. More than one message wraps in an accordion.
	     */
	    messages: EuiNotificationEventMessagesProps['messages'];
	    /**
	     * Shows an indicator of the read state of the event. Leave as `undefined` to hide the indicator.
	     */
	    isRead?: boolean | undefined;
	    /**
	     * Returns the `id` and `isRead` state. Applies an `onClick` handler to the `read` indicator.
	     */
	    onRead?: (id: string, isRead: boolean) => void;
	    /**
	     * Provided the `id` of the event must return an array of #EuiContextMenuItem elements.
	     */
	    onOpenContextMenu?: (id: string) => Array<ReactElement<EuiContextMenuItemProps, typeof EuiContextMenuItem>>;
	};
	export const EuiNotificationEvent: FunctionComponent<EuiNotificationEventProps>;

}
declare module '@elastic/eui' {
	export { EuiNotificationEvent } from '@elastic\eui\src\components\notification\notification_event';

}
declare module '@elastic\eui\src\components\page\_restrict_width' {
	/**
	 * The `restrictedWidth` property is the same for all EuiPage components.
	 * This is file contains the type specific to that prop and a helper
	 * function for creating the corresponding classNames and style tags
	 * based on the consumer's configuration
	 *
	 * @param {restrictWidth} boolean | number | string The prop value
	 * @param {style} CSSProperties An object of style attributes if provided
	 * @returns {{widthClassName: string, newStyle: CSSProperties}} Returns an object with keys for the class name to append to the component's class and the updated style props
	 */
	import { CSSProperties } from 'react';
	export type _EuiPageRestrictWidth = {
	    /**
	     * Sets the max-width of the page,
	     * set to `true` to use the default size of `1000px (1200 for Amsterdam)`,
	     * set to `false` to not restrict the width,
	     * set to a number for a custom width in px,
	     * set to a string for a custom width in custom measurement.
	     */
	    restrictWidth?: boolean | number | string;
	};
	export function setPropsForRestrictedPageWidth(restrictWidth: _EuiPageRestrictWidth['restrictWidth'], style?: CSSProperties): {
	    widthClassName?: string;
	    newStyle?: CSSProperties;
	};

}
declare module '@elastic\eui\src\components\page\page' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { _EuiPageRestrictWidth } from '@elastic\eui\src\components\page\_restrict_width';
	export const SIZES: ("s" | "m" | "l" | "none")[];
	export const DIRECTIONS: ("column" | "row")[];
	export interface EuiPageProps extends CommonProps, HTMLAttributes<HTMLDivElement>, _EuiPageRestrictWidth {
	    /**
	     * Adjust the padding.
	     * When using this setting it's best to be consistent throughout all similar usages
	     */
	    paddingSize?: typeof SIZES[number];
	    /**
	     * Adds `flex-grow: 1` to the whole page for stretching to fit vertically.
	     * Must be wrapped inside a flexbox, preferrably with `min-height: 100vh`
	     */
	    grow?: boolean;
	    /**
	     * Changes the `flex-direction` property.
	     * Flip to `column` when not including a sidebar.
	     */
	    direction?: 'row' | 'column';
	}
	export const EuiPage: FunctionComponent<EuiPageProps>;

}
declare module '@elastic\eui\src\components\page\page_body\page_body' {
	import React, { PropsWithChildren, ComponentType, ComponentProps } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { _EuiPageRestrictWidth } from '@elastic\eui\src\components\page\_restrict_width';
	import { EuiPanelProps } from '@elastic\eui\src\components\panel';
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[]; type ComponentTypes = keyof JSX.IntrinsicElements | ComponentType<any>;
	export type EuiPageBodyProps<T extends ComponentTypes = 'main'> = CommonProps & ComponentProps<T> & _EuiPageRestrictWidth & {
	    /**
	     * Sets the HTML element for `EuiPageBody`.
	     */
	    component?: T;
	    /**
	     * Uses an EuiPanel as the main component instead of a plain div
	     */
	    panelled?: boolean;
	    /**
	     * Extends any extra EuiPanel props if `panelled=true`
	     */
	    panelProps?: Omit<EuiPanelProps, 'paddingSize'>;
	    /**
	     * Adjusts the padding
	     */
	    paddingSize?: typeof PADDING_SIZES[number];
	};
	export const EuiPageBody: <T extends React.ElementType<any>>({ children, restrictWidth, style, className, component: Component, panelled, panelProps, paddingSize, borderRadius, ...rest }: React.PropsWithChildren<EuiPageBodyProps<T>>) => JSX.Element;
	export {};

}
declare module '@elastic\eui\src\components\page\page_body' {
	export { EuiPageBody, EuiPageBodyProps } from '@elastic\eui\src\components\page\page_body\page_body';

}
declare module '@elastic\eui\src\components\page\page_content\page_content' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { PanelPaddingSize, _EuiPanelProps, _EuiPanelDivlike } from '@elastic\eui\src\components\panel\panel';
	import { HTMLAttributes } from 'enzyme';
	export type EuiPageContentVerticalPositions = 'center';
	export type EuiPageContentHorizontalPositions = 'center';
	export type EuiPageContentProps = CommonProps & _EuiPanelProps & Omit<_EuiPanelDivlike, 'onClick' | 'role'> & {
	    /**
	     * **DEPRECATED: use `paddingSize` instead.**
	     */
	    panelPaddingSize?: PanelPaddingSize;
	    verticalPosition?: EuiPageContentVerticalPositions;
	    horizontalPosition?: EuiPageContentHorizontalPositions;
	    /**
	     * There should only be one EuiPageContent per page and should contain the main contents.
	     * If this is untrue, set role = `null`, or change it to match your needed aria role
	     */
	    role?: HTMLAttributes['role'] | null;
	};
	export const EuiPageContent: FunctionComponent<EuiPageContentProps>;

}
declare module '@elastic\eui\src\components\page\page_content\page_content_body' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { _EuiPageRestrictWidth } from '@elastic\eui\src\components\page\_restrict_width';
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[];
	export interface EuiPageContentBodyProps extends CommonProps, HTMLAttributes<HTMLDivElement>, _EuiPageRestrictWidth {
	    /**
	     * Adjust the padding.
	     * When using this setting it's best to be consistent throughout all similar usages
	     */
	    paddingSize?: typeof PADDING_SIZES[number];
	}
	export const EuiPageContentBody: FunctionComponent<EuiPageContentBodyProps>;

}
declare module '@elastic\eui\src\components\page\page_content\page_content_header' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiPageContentHeaderProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	    /**
	     * Set to false if you don't want the children to stack
	     * at small screen sizes.
	     */
	    responsive?: boolean;
	}
	export const EuiPageContentHeader: FunctionComponent<EuiPageContentHeaderProps>;

}
declare module '@elastic\eui\src\components\page\page_content\page_content_header_section' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiPageContentHeaderSectionProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	}
	export const EuiPageContentHeaderSection: FunctionComponent<EuiPageContentHeaderSectionProps>;

}
declare module '@elastic\eui\src\components\page\page_content' {
	export { EuiPageContent, EuiPageContentProps } from '@elastic\eui\src\components\page\page_content\page_content';
	export { EuiPageContentBody, EuiPageContentBodyProps, } from '@elastic\eui\src\components\page\page_content\page_content_body';
	export { EuiPageContentHeader, EuiPageContentHeaderProps, } from '@elastic\eui\src\components\page\page_content\page_content_header';
	export { EuiPageContentHeaderSection, EuiPageContentHeaderSectionProps, } from '@elastic\eui\src\components\page\page_content\page_content_header_section';

}
declare module '@elastic\eui\src\components\page\page_header\page_header_content' {
	import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiIconProps, IconType } from '@elastic\eui\src\components\icon';
	import { EuiTabsProps } from '@elastic\eui\src\components\tabs';
	import { Props as EuiTabProps } from '@elastic\eui\src\components\tabs\tab';
	import { EuiFlexGroupProps } from '@elastic\eui\src\components\flex';
	export const ALIGN_ITEMS: readonly ["top", "bottom", "center", "stretch"]; type Tab = EuiTabProps & {
	    /**
	     * Visible text of the tab
	     */
	    label: ReactNode;
	};
	export type EuiPageHeaderContentTitle = {
	    /**
	     * Wrapped in an `H1` so choose appropriately.
	     * A simple string is best
	     */
	    pageTitle?: ReactNode;
	    /**
	     * Optional icon to place to the left of the title
	     */
	    iconType?: IconType;
	    /**
	     * Additional EuiIcon props to apply to the optional icon
	     */
	    iconProps?: Partial<Omit<EuiIconProps, 'type'>>;
	};
	export type EuiPageHeaderContentTabs = {
	    /**
	     * In-app navigation presented as large borderless tabs.
	     * Accepts an array of `EuiTab` objects;
	     * HELP: This is evaluating to `any[]` in the props table
	     */
	    tabs?: Tab[];
	    /**
	     * Any extras to apply to the outer tabs container.
	     * Extends `EuiTabs`
	     */
	    tabsProps?: Omit<EuiTabsProps, 'size' | 'expand' | 'display'>;
	}; type EuiPageHeaderContentLeft = EuiPageHeaderContentTitle & EuiPageHeaderContentTabs & {
	    /**
	     * Position is dependent on existing with a `pageTitle` or `tabs`
	     * Automatically get wrapped in a single paragraph tag inside an EuiText block
	     */
	    description?: string | ReactNode;
	};
	export type EuiPageHeaderContentProps = CommonProps & HTMLAttributes<HTMLDivElement> & EuiPageHeaderContentLeft & {
	    /**
	     * Set to false if you don't want the children to stack at small screen sizes.
	     * Set to `reverse` to display the right side content first for the sack of hierarchy (like global time)
	     */
	    responsive?: boolean | 'reverse';
	    /**
	     * Vertical alignment of the left and right side content;
	     * Default is `middle` for custom content, but `top` for when `pageTitle` or `tabs` are included
	     */
	    alignItems?: typeof ALIGN_ITEMS[number];
	    /**
	     * Pass custom an array of content to this side usually up to 3 buttons.
	     * The first button should be primary, usually with `fill` and will be visually displayed as the last item,
	     * but first in the tab order
	     */
	    rightSideItems?: ReactNode[];
	    /**
	     * Additional EuiFlexGroup props to pass to the container of the `rightSideItems`
	     */
	    rightSideGroupProps?: Partial<EuiFlexGroupProps>;
	    /**
	     * Custom children will be rendered before the `tabs` unless no `pageTitle` is present, then it will be the last item
	     */
	    children?: ReactNode;
	};
	export const EuiPageHeaderContent: FunctionComponent<EuiPageHeaderContentProps>;
	export {};

}
declare module '@elastic\eui\src\components\page\page_header\page_header' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiPageHeaderContentProps } from '@elastic\eui\src\components\page\page_header\page_header_content';
	import { _EuiPageRestrictWidth } from '@elastic\eui\src\components\page\_restrict_width';
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[];
	export type EuiPageHeaderProps = CommonProps & HTMLAttributes<HTMLElement> & EuiPageHeaderContentProps & _EuiPageRestrictWidth & {
	    /**
	     * Adjust the padding.
	     * When using this setting it's best to be consistent throughout all similar usages
	     */
	    paddingSize?: typeof PADDING_SIZES[number];
	    /**
	     * Adds a bottom border to separate it from the content after
	     */
	    bottomBorder?: boolean;
	};
	export const EuiPageHeader: FunctionComponent<EuiPageHeaderProps>;

}
declare module '@elastic\eui\src\components\page\page_header\page_header_section' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiPageHeaderSectionProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	}
	export const EuiPageHeaderSection: FunctionComponent<EuiPageHeaderSectionProps>;

}
declare module '@elastic\eui\src\components\page\page_header' {
	export { EuiPageHeader, EuiPageHeaderProps } from '@elastic\eui\src\components\page\page_header\page_header';
	export { EuiPageHeaderContent, EuiPageHeaderContentProps, } from '@elastic\eui\src\components\page\page_header\page_header_content';
	export { EuiPageHeaderSection, EuiPageHeaderSectionProps, } from '@elastic\eui\src\components\page\page_header\page_header_section';

}
declare module '@elastic\eui\src\components\page\page_side_bar\page_side_bar' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export const PADDING_SIZES: ("s" | "m" | "l" | "none")[];
	export interface EuiPageSideBarProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	    /**
	     * Adds `position: sticky` and affords for any fixed position headers
	     */
	    sticky?: boolean;
	    /**
	     * Adds padding around the children
	     */
	    paddingSize?: typeof PADDING_SIZES[number];
	}
	export const EuiPageSideBar: FunctionComponent<EuiPageSideBarProps>;

}
declare module '@elastic\eui\src\components\page\page_side_bar' {
	export { EuiPageSideBar, EuiPageSideBarProps } from '@elastic\eui\src\components\page\page_side_bar\page_side_bar';

}
declare module '@elastic\eui\src\components\page\page_template' {
	import { CSSProperties, FunctionComponent, ReactNode } from 'react';
	import { EuiPageProps, SIZES } from '@elastic\eui\src\components\page\page';
	import { EuiPageSideBarProps } from '@elastic\eui\src\components\page\page_side_bar';
	import { EuiPageBodyProps } from '@elastic\eui\src\components\page\page_body';
	import { EuiPageHeaderProps } from '@elastic\eui\src\components\page\page_header';
	import { EuiPageContentProps, EuiPageContentBodyProps } from '@elastic\eui\src\components\page\page_content';
	import { EuiBottomBarProps } from '@elastic\eui\src\components\bottom_bar';
	export const TEMPLATES: readonly ["default", "centeredBody", "centeredContent", "empty"];
	export type EuiPageTemplateProps = Omit<EuiPageProps, 'paddingSize'> & {
	    /**
	     * Choose between 3 types of templates.
	     * `default`: Typical layout with nothing centered
	     * `centeredBody`: The panelled content is centered
	     * `centeredContent`: The content inside the panel is centered
	     * `empty`: Removes the panneling of the page content
	     */
	    template?: typeof TEMPLATES[number];
	    /**
	     * Padding size will not get applied to the over-arching #EuiPage,
	     * but will propogate through all the components to keep them in sync
	     */
	    paddingSize?: typeof SIZES[number];
	    /**
	     * Optionally include #EuiPageSideBar content.
	     * The inclusion of this will affect the whole layout
	     */
	    pageSideBar?: ReactNode;
	    /**
	     * Gets passed along to the #EuiPageSideBar component
	     */
	    pageSideBarProps?: EuiPageSideBarProps;
	    /**
	     * Optionally include an #EuiPageHeader by passing an object of its props
	     */
	    pageHeader?: EuiPageHeaderProps;
	    /**
	     * Gets passed along to the #EuiPageBody component
	     */
	    pageBodyProps?: EuiPageBodyProps;
	    /**
	     * Gets passed along to the #EuiPageContent component
	     */
	    pageContentProps?: EuiPageContentProps;
	    /**
	     * Gets passed along to the #EuiPageContentBody component
	     */
	    pageContentBodyProps?: EuiPageContentBodyProps;
	    /**
	     * Adds contents inside of an EuiBottomBar.
	     * Only works when `template = 'default'`
	     */
	    bottomBar?: EuiBottomBarProps['children'];
	    /**
	     * Gets passed along to the #EuiBottomBar component if `bottomBar` has contents
	     */
	    bottomBarProps?: EuiBottomBarProps;
	    /**
	     * Stretches or restricts the height to 100% of the parent;
	     * `true`: scrolls the EuiPageContentBody;
	     * `noscroll`: removes all scroll ability;
	     * Only works when `template = 'default | empty'` and breakpoint is `m` and above
	     */
	    fullHeight?: boolean | 'noscroll';
	    /**
	     * Minimum height in which to enforce scrolling
	     */
	    minHeight?: CSSProperties['minHeight'];
	};
	export const EuiPageTemplate: FunctionComponent<EuiPageTemplateProps>;

}
declare module '@elastic/eui' {
	export { EuiPage, EuiPageProps } from '@elastic\eui\src\components\page\page';
	export { EuiPageBody, EuiPageBodyProps } from '@elastic\eui\src\components\page\page_body';
	export { EuiPageContent, EuiPageContentProps, EuiPageContentBody, EuiPageContentBodyProps, EuiPageContentHeader, EuiPageContentHeaderProps, EuiPageContentHeaderSection, EuiPageContentHeaderSectionProps, } from '@elastic\eui\src\components\page\page_content';
	export { EuiPageHeader, EuiPageHeaderContent, EuiPageHeaderContentProps, EuiPageHeaderProps, EuiPageHeaderSection, EuiPageHeaderSectionProps, } from '@elastic\eui\src\components\page\page_header';
	export { EuiPageSideBar, EuiPageSideBarProps } from '@elastic\eui\src\components\page\page_side_bar';
	export { EuiPageTemplate, EuiPageTemplateProps } from '@elastic\eui\src\components\page\page_template';

}
declare module '@elastic\eui\src\components\resizable_container\types' {
	import { KeyboardEvent, MouseEvent, TouchEvent } from 'react';
	export type PanelModeType = 'collapsible' | 'main' | 'custom';
	export type PanelPosition = 'first' | 'middle' | 'last';
	export type PanelDirection = 'left' | 'right';
	export interface EuiResizablePanelController {
	    id: string;
	    size: number;
	    getSizePx: () => number;
	    minSize: string[];
	    mode?: PanelModeType;
	    isCollapsed: boolean;
	    prevSize: number;
	    position: PanelPosition;
	}
	export interface EuiResizableButtonController {
	    id: string;
	    ref: HTMLElement;
	    isDisabled: boolean;
	    isFocused: boolean;
	}
	export interface EuiResizableContainerRegistry {
	    panels: {
	        [key: string]: EuiResizablePanelController;
	    };
	    resizers: {
	        [key: string]: EuiResizableButtonController;
	    };
	}
	export type EuiResizableButtonMouseEvent = MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>;
	export type EuiResizableButtonKeyDownEvent = KeyboardEvent<HTMLButtonElement>;
	export interface EuiResizableContainerState {
	    isDragging: boolean;
	    currentResizerPos: number;
	    prevPanelId: string | null;
	    nextPanelId: string | null;
	    containerSize: number;
	    isHorizontal?: boolean;
	    panels: EuiResizableContainerRegistry['panels'];
	    resizers: EuiResizableContainerRegistry['resizers'];
	}
	export interface ActionToggleOptions {
	    direction: PanelDirection;
	}
	interface ActionReset {
	    type: 'EUI_RESIZABLE_RESET';
	}
	interface ActionInit {
	    type: 'EUI_RESIZABLE_CONTAINER_INIT';
	    payload: {
	        isHorizontal: boolean;
	    };
	}
	export interface ActionDragStart {
	    type: 'EUI_RESIZABLE_DRAG_START';
	    payload: {
	        prevPanelId: string;
	        nextPanelId: string;
	        position: number;
	    };
	}
	export interface ActionDragMove {
	    type: 'EUI_RESIZABLE_DRAG_MOVE';
	    payload: {
	        prevPanelId: string;
	        nextPanelId: string;
	        position: number;
	    };
	}
	export interface ActionKeyMove {
	    type: 'EUI_RESIZABLE_KEY_MOVE';
	    payload: {
	        prevPanelId: string;
	        nextPanelId: string;
	        direction: 'forward' | 'backward';
	    };
	}
	export interface ActionResize {
	    type: 'EUI_RESIZABLE_RESIZE';
	    payload: {};
	}
	export interface ActionToggle {
	    type: 'EUI_RESIZABLE_TOGGLE';
	    payload: {
	        panelId: string;
	        options: ActionToggleOptions;
	    };
	}
	interface ActionRegisterPanel {
	    type: 'EUI_RESIZABLE_PANEL_REGISTER';
	    payload: {
	        panel: EuiResizablePanelController;
	    };
	}
	interface ActionDeregisterPanel {
	    type: 'EUI_RESIZABLE_PANEL_DEREGISTER';
	    payload: {
	        panelId: EuiResizablePanelController['id'];
	    };
	}
	interface ActionRegisterResizer {
	    type: 'EUI_RESIZABLE_BUTTON_REGISTER';
	    payload: {
	        resizer: EuiResizableButtonController;
	    };
	}
	interface ActionDeregisterResizer {
	    type: 'EUI_RESIZABLE_BUTTON_DEREGISTER';
	    payload: {
	        resizerId: EuiResizableButtonController['id'];
	    };
	}
	export interface ActionFocus {
	    type: 'EUI_RESIZABLE_BUTTON_FOCUS';
	    payload: {
	        resizerId: EuiResizableButtonController['id'];
	    };
	}
	interface ActionBlur {
	    type: 'EUI_RESIZABLE_BUTTON_BLUR';
	}
	interface ActionOnChange {
	    type: 'EUI_RESIZABLE_ONCHANGE';
	}
	export type EuiResizableContainerAction = ActionReset | ActionInit | ActionRegisterPanel | ActionDeregisterPanel | ActionRegisterResizer | ActionDeregisterResizer | ActionDragStart | ActionDragMove | ActionKeyMove | ActionResize | ActionToggle | ActionFocus | ActionBlur | ActionOnChange;
	export interface EuiResizableContainerActions {
	    reset: () => void;
	    initContainer: (isHorizontal: boolean) => void;
	    registerPanel: (panel: EuiResizablePanelController) => void;
	    deregisterPanel: (panelId: EuiResizablePanelController['id']) => void;
	    registerResizer: (resizer: EuiResizableButtonController) => void;
	    deregisterResizer: (resizerId: EuiResizableButtonController['id']) => void;
	    dragStart: ({ prevPanelId, nextPanelId, position, }: ActionDragStart['payload']) => void;
	    dragMove: ({ prevPanelId, nextPanelId, position, }: ActionDragMove['payload']) => void;
	    keyMove: ({ prevPanelId, nextPanelId, direction, }: ActionKeyMove['payload']) => void;
	    resizerFocus: (resizerId: ActionFocus['payload']['resizerId']) => void;
	    resizerBlur: () => void;
	    togglePanel: (panelId: ActionToggle['payload']['panelId'], options: ActionToggle['payload']['options']) => void;
	}
	export {};

}
declare module '@elastic\eui\src\components\resizable_container\context' {
	
	import { EuiResizableContainerRegistry } from '@elastic\eui\src\components\resizable_container\types';
	interface ContainerContextProps {
	    registry?: EuiResizableContainerRegistry;
	}
	interface ContextProviderProps extends Required<ContainerContextProps> {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: any;
	}
	export function EuiResizableContainerContextProvider({ children, registry, }: ContextProviderProps): JSX.Element;
	export const useEuiResizableContainerContext: () => ContainerContextProps;
	export {};

}
declare module '@elastic\eui\src\components\resizable_container\helpers' {
	import { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
	import { EuiResizableContainerRegistry, EuiResizableContainerState, EuiResizableContainerActions } from '@elastic\eui\src\components\resizable_container\types';
	interface Params {
	    initialState: EuiResizableContainerState;
	    containerRef: React.RefObject<HTMLDivElement>;
	    onPanelWidthChange?: ({}: {
	        [key: string]: number;
	    }) => any;
	}
	export const pxToPercent: (proportion: number, whole: number) => number;
	export const sizesOnly: (panelObject: EuiResizableContainerRegistry['panels']) => {
	    [key: string]: number;
	};
	export const getPanelMinSize: (panelMinSize: string[], containerSize: number) => number;
	export const getPosition: (event: ReactMouseEvent | ReactTouchEvent, isHorizontal: boolean) => number;
	export const useContainerCallbacks: ({ initialState, containerRef, onPanelWidthChange, }: Params) => [EuiResizableContainerActions, EuiResizableContainerState];
	export {};

}
declare module '@elastic\eui\src\components\resizable_container\resizable_button' {
	import { FunctionComponent, ButtonHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiResizableButtonController, EuiResizableButtonMouseEvent, EuiResizableButtonKeyDownEvent } from '@elastic\eui\src\components\resizable_container\types';
	interface EuiResizableButtonControls {
	    onKeyDown: (eve: EuiResizableButtonKeyDownEvent) => void;
	    onMouseDown: (eve: EuiResizableButtonMouseEvent) => void;
	    onTouchStart: (eve: EuiResizableButtonMouseEvent) => void;
	    onFocus: (id: string) => void;
	    onBlur: () => void;
	    registration: {
	        register: (resizer: EuiResizableButtonController) => void;
	        deregister: (resizerId: EuiResizableButtonController['id']) => void;
	    };
	    isHorizontal: boolean;
	}
	export interface EuiResizableButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof EuiResizableButtonControls>, CommonProps, Partial<EuiResizableButtonControls> {
	}
	export const EuiResizableButton: FunctionComponent<EuiResizableButtonProps>;
	export function euiResizableButtonWithControls(controls: EuiResizableButtonControls): (props: CommonProps) => JSX.Element;
	export {};

}
declare module '@elastic\eui\src\components\resizable_container\resizable_collapse_button' {
	import { FunctionComponent } from 'react';
	import { EuiButtonIconPropsForButton } from '@elastic\eui\src\components\button';
	import { ToggleOptions } from '@elastic\eui\src\components\resizable_container\resizable_panel';
	import { EuiResizableContainerProps } from '@elastic\eui\src\components\resizable_container\resizable_container';
	export type EuiResizableCollapseButtonProps = Omit<EuiButtonIconPropsForButton, 'iconType'> & {
	    /**
	     * Position of the toggle button.
	     * Enums based on the `direction` of the EuiResizableContainer
	     */
	    internalPosition?: ToggleOptions['position'];
	    /**
	     * Position of the toggle button.
	     * Enums based on the `direction` of the EuiResizableContainer
	     */
	    externalPosition?: 'before' | 'after';
	    /**
	     * Same direction derived from EuiResizableContainer
	     */
	    direction?: EuiResizableContainerProps['direction'];
	    /**
	     *
	     */
	    isVisible?: boolean;
	    isCollapsed?: boolean;
	};
	export const EuiResizableCollapseButton: FunctionComponent<EuiResizableCollapseButtonProps>;

}
declare module '@elastic\eui\src\components\resizable_container\resizable_panel' {
	import { CSSProperties, ReactNode, FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { PanelPaddingSize, _EuiPanelProps } from '@elastic\eui\src\components\panel\panel';
	import { EuiResizablePanelController, ActionToggleOptions, PanelModeType } from '@elastic\eui\src\components\resizable_container\types';
	export interface ToggleOptions {
	    'data-test-subj'?: string;
	    className?: string;
	    /**
	     * Position of the toggle button.
	     * Enums based on the `direction` of the EuiResizableContainer
	     */
	    position?: 'top' | 'middle' | 'bottom' | 'left' | 'right';
	}
	export type ModeOptions = PanelModeType | [PanelModeType, Partial<ToggleOptions>];
	export type ToggleCollapseCallback = (panelId: EuiResizablePanelController['id'], options: ActionToggleOptions) => void;
	export const getModeType: (mode?: "main" | "collapsible" | "custom" | [PanelModeType, Partial<ToggleOptions>] | undefined) => "main" | "collapsible" | "custom" | undefined;
	export const getToggleOptions: (mode?: "main" | "collapsible" | "custom" | [PanelModeType, Partial<ToggleOptions>] | undefined) => {
	    'data-test-subj': string | undefined;
	    className: string | null;
	    position: string;
	};
	export interface EuiResizablePanelControls {
	    isHorizontal: boolean;
	    registration: {
	        register: (panel: EuiResizablePanelController) => void;
	        deregister: (panelId: EuiResizablePanelController['id']) => void;
	    };
	    /**
	     * #ToggleCollapseCallback
	     */
	    onToggleCollapsed?: ToggleCollapseCallback;
	    onToggleCollapsedInternal: ToggleCollapseCallback;
	}
	export interface EuiResizablePanelProps extends _EuiPanelProps, CommonProps, Partial<EuiResizablePanelControls> {
	    /**
	     * Specify a desired minimum panel size in pixels or percents,
	     * for example "300px" or "30%"
	     * The actual minimum size will be calculated,
	     * using the larger of this prop and the panelProps.paddingSize
	     */
	    minSize?: string;
	    /**
	     * Specify id of panel if you want to track panel size in "onPanelWidthChange" callback
	     */
	    id?: string;
	    /**
	     * Initial size of the panel in percents
	     * Specify this prop if you don't need to handle the panel size from outside
	     */
	    initialSize?: number;
	    /**
	     * Size of the panel in percents.
	     * Specify this prop if you want to control the size from outside, the panel will ignore the "initialSize"
	     */
	    size?: number;
	    /**
	     * Add Eui scroll and overflow for the panel
	     */
	    scrollable?: boolean;
	    mode?: ModeOptions;
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    /**
	     * Custom CSS properties applied to the wrapping `.euiResizablePanel` div
	     */
	    style?: CSSProperties;
	    /**
	     * Props to add to the wrapping `.euiResizablePanel` div
	     */
	    wrapperProps?: HTMLAttributes<HTMLDivElement>;
	    /**
	     * Padding to add directly to the wrapping `.euiResizablePanel` div
	     * Gives space around the actual panel.
	     */
	    wrapperPadding?: PanelPaddingSize;
	}
	export const EuiResizablePanel: FunctionComponent<EuiResizablePanelProps>;
	export function euiResizablePanelWithControls(controls: EuiResizablePanelControls): (props: EuiResizablePanelProps) => JSX.Element;

}
declare module '@elastic\eui\src\components\resizable_container\resizable_container' {
	import { ReactNode, CSSProperties, FunctionComponent, HTMLAttributes, ComponentType } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiResizableButtonProps } from '@elastic\eui\src\components\resizable_container\resizable_button';
	import { EuiResizablePanelProps, ToggleCollapseCallback } from '@elastic\eui\src\components\resizable_container\resizable_panel';
	import { EuiResizableContainerActions } from '@elastic\eui\src\components\resizable_container\types'; const containerDirections: {
	    vertical: string;
	    horizontal: string;
	};
	export interface EuiResizableContainerProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
	    /**
	     * Specify the container direction
	     */
	    direction?: keyof typeof containerDirections;
	    /**
	     * Pure function which accepts Panel and Resizer components in arguments
	     * and returns a component tree
	     */
	    children: (Panel: ComponentType<EuiResizablePanelProps>, Resizer: ComponentType<EuiResizableButtonProps>, actions: Partial<EuiResizableContainerActions>) => ReactNode;
	    /**
	     * Pure function which accepts an object where keys are IDs of panels, which sizes were changed,
	     * and values are actual sizes in percents
	     */
	    onPanelWidthChange?: ({}: {
	        [key: string]: number;
	    }) => any;
	    onToggleCollapsed?: ToggleCollapseCallback;
	    style?: CSSProperties;
	}
	export const EuiResizableContainer: FunctionComponent<EuiResizableContainerProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiResizableContainer, EuiResizableContainerProps, } from '@elastic\eui\src\components\resizable_container\resizable_container';

}
declare module '@elastic\eui\src\components\selectable\selectable_option' {
	import React, { HTMLAttributes } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	export type EuiSelectableOptionCheckedType = 'on' | 'off' | undefined;
	export type EuiSelectableOptionBase = CommonProps & {
	    /**
	     * Visible label of option.
	     * Must be unique across items if `key` is not supplied
	     */
	    label: string;
	    /**
	     * Optionally change the searchable term by passing a different string other than the `label`.
	     * Best used when creating a custom `optionRender` to separate the label from metadata but allowing to search on both
	     */
	    searchableLabel?: string;
	    /**
	     * Must be unique across items.
	     * Will be used to match options instead of `label`
	     */
	    key?: string;
	    /**
	     * Leave `undefined` to indicate not selected,
	     * 'on' to indicate inclusion and
	     * 'off' to indicate exclusion
	     */
	    checked?: EuiSelectableOptionCheckedType;
	    disabled?: boolean;
	    /**
	     * Optional `boolean`.
	     * Set to `true` to indicate object is just a grouping label, not a selectable item
	     */
	    isGroupLabel?: false;
	    /**
	     * Node to add between the selection icon and the label
	     */
	    prepend?: React.ReactNode;
	    /**
	     * Node to add to the far right of the item
	     */
	    append?: React.ReactNode;
	    ref?: (optionIndex: number) => void;
	    /**
	     * Disallow `id` from being set.
	     * Option item `id`s are coordinated at a higher level for a11y reasons.
	     */
	    id?: never;
	}; type _EuiSelectableGroupLabelOption = Omit<EuiSelectableOptionBase, 'isGroupLabel'> & Exclude<HTMLAttributes<HTMLDivElement>, 'id'> & {
	    isGroupLabel: true;
	};
	export type EuiSelectableGroupLabelOption<T> = _EuiSelectableGroupLabelOption & T; type _EuiSelectableLIOption = EuiSelectableOptionBase & Exclude<HTMLAttributes<HTMLLIElement>, 'id'>;
	export type EuiSelectableLIOption<T> = _EuiSelectableLIOption & T;
	export type EuiSelectableOption<T = {}> = ExclusiveUnion<EuiSelectableGroupLabelOption<T>, EuiSelectableLIOption<T>>;
	export {};

}
declare module '@elastic\eui\src\components\selectable\matching_options' {
	import { EuiSelectableOption } from '@elastic\eui\src\components\selectable\selectable_option';
	export const getMatchingOptions: <T>(options: import ("@elastic\eui\src\components\common").ExclusiveUnion<import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableGroupLabelOption<T>, import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableLIOption<T>>[], searchValue: string, isPreFiltered?: boolean | undefined, selectedOptions?: import ("@elastic\eui\src\components\common").ExclusiveUnion<import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableGroupLabelOption<T>, import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableLIOption<T>>[] | undefined) => import ("@elastic\eui\src\components\common").ExclusiveUnion<import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableGroupLabelOption<T>, import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableLIOption<T>>[];

}
declare module '@elastic\eui\src\components\selectable\selectable_search\selectable_search' {
	import { Component } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFieldSearchProps } from '@elastic\eui\src\components\form';
	import { EuiSelectableOption } from '@elastic\eui\src\components\selectable\selectable_option';
	export type EuiSelectableSearchProps<T> = Omit<EuiFieldSearchProps, 'onChange'> & CommonProps & {
	    /**
	     * Passes back (matchingOptions, searchValue)
	     */
	    onChange: (matchingOptions: Array<EuiSelectableOption<T>>, searchValue: string) => void;
	    options: Array<EuiSelectableOption<T>>;
	    defaultValue: string;
	    /**
	     * The id of the visible list to create the appropriate aria controls
	     */
	    listId?: string;
	    isPreFiltered: boolean;
	};
	export interface EuiSelectableSearchState {
	    searchValue: string;
	}
	export class EuiSelectableSearch<T> extends Component<EuiSelectableSearchProps<T>, EuiSelectableSearchState> {
	    static defaultProps: {
	        defaultValue: string;
	    };
	    constructor(props: EuiSelectableSearchProps<T>);
	    componentDidMount(): void;
	    onSearchChange: (value: string) => void;
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\selectable\selectable_search' {
	export { EuiSelectableSearch, EuiSelectableSearchProps, } from '@elastic\eui\src\components\selectable\selectable_search\selectable_search';

}
declare module '@elastic\eui\src\components\selectable\selectable_message\selectable_message' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiSelectableMessageProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & CommonProps & {
	    /**
	     * Match this to the `listProps.bordered` property of your `EuiSelectable` instance
	     */
	    bordered?: boolean;
	};
	export const EuiSelectableMessage: FunctionComponent<EuiSelectableMessageProps>;

}
declare module '@elastic\eui\src\components\selectable\selectable_message' {
	export { EuiSelectableMessage, EuiSelectableMessageProps, } from '@elastic\eui\src\components\selectable\selectable_message\selectable_message';

}
declare module '@elastic\eui\src\components\selectable\selectable_list\selectable_list_item' {
	import React, { Component, LiHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiSelectableOptionCheckedType } from '@elastic\eui\src\components\selectable\selectable_option';
	import { EuiBadgeProps } from '@elastic\eui\src\components\badge';
	export type EuiSelectableListItemProps = LiHTMLAttributes<HTMLLIElement> & CommonProps & {
	    children?: React.ReactNode;
	    /**
	     * Applies an icon and visual styling to activated items
	     */
	    checked?: EuiSelectableOptionCheckedType;
	    /**
	     * Shows icons based on `checked` type
	     */
	    showIcons?: boolean;
	    /**
	     * Highlights the item for pseudo focus
	     */
	    isFocused?: boolean;
	    disabled?: boolean;
	    prepend?: React.ReactNode;
	    append?: React.ReactNode;
	    allowExclusions?: boolean;
	    /**
	     * When enabled by setting to either `true` or passing custom a custom badge,
	     * shows a hollow badge as an append (far right) when the item is focused.
	     * The default content when `true` is `??? to select/deselect/include/exclude`
	     */
	    onFocusBadge?: boolean | EuiBadgeProps;
	};
	export class EuiSelectableListItem extends Component<EuiSelectableListItemProps> {
	    static defaultProps: {
	        showIcons: boolean;
	        onFocusBadge: boolean;
	    };
	    constructor(props: EuiSelectableListItemProps);
	    render(): JSX.Element;
	}

}
declare module '@elastic\eui\src\components\selectable\selectable_list\selectable_list' {
	import React, { Component, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiSelectableListItemProps } from '@elastic\eui\src\components\selectable\selectable_list\selectable_list_item';
	import { EuiSelectableOption } from '@elastic\eui\src\components\selectable\selectable_option';
	import { FixedSizeList, ListProps, ListChildComponentProps as ReactWindowListChildComponentProps } from 'react-window';
	interface ListChildComponentProps<T> extends ReactWindowListChildComponentProps {
	    data: Array<EuiSelectableOption<T>>;
	}
	export type EuiSelectableOptionsListProps = CommonProps & HTMLAttributes<HTMLDivElement> & {
	    /**
	     * The index of the option to be highlighted as pseudo-focused;
	     * Good for use when only one selection is allowed and needing to open
	     * directly to that option
	     */
	    activeOptionIndex?: number;
	    /**
	     *  The height of each option in pixels. Defaults to `32`
	     */
	    rowHeight: number;
	    /**
	     * Show the check/cross selection indicator icons
	     */
	    showIcons?: boolean;
	    singleSelection?: 'always' | boolean;
	    /**
	     * Any props to send specifically to the react-window `FixedSizeList`
	     */
	    windowProps?: Partial<ListProps>;
	    /**
	     * Adds a border around the list to indicate the bounds;
	     * Useful when the list scrolls, otherwise use your own container
	     */
	    bordered?: boolean;
	    /**
	     * When enabled by setting to either `true` or passing custom text,
	     * shows a hollow badge as an append (far right) when the item is focused.
	     * The default content when `true` is `??? to select/deselect/include/exclude`
	     */
	    onFocusBadge?: EuiSelectableListItemProps['onFocusBadge'];
	};
	export type EuiSelectableListProps<T> = EuiSelectableOptionsListProps & {
	    /**
	     * All possible options
	     */
	    options: Array<EuiSelectableOption<T>>;
	    /**
	     * Filtered options list (if applicable)
	     */
	    visibleOptions?: Array<EuiSelectableOption<T>>;
	    /**
	     * Search value to highlight on the option render
	     */
	    searchValue: string;
	    /**
	     * Returns the array of options with altered checked state
	     */
	    onOptionClick: (options: Array<EuiSelectableOption<T>>) => void;
	    /**
	     * Custom render for the label portion of the option;
	     * Takes (option, searchValue), returns ReactNode
	     */
	    renderOption?: (option: EuiSelectableOption<T>, searchValue: string) => ReactNode;
	    /**
	     * Sets the max height in pixels or pass `full` to allow
	     * the whole group to fill the height of its container and
	     * allows the list grow as well
	     */
	    height?: number | 'full';
	    /**
	     * Allow cycling through the on, off and undefined state of option.checked
	     * and not just on and undefined
	     */
	    allowExclusions?: boolean;
	    searchable?: boolean;
	    makeOptionId: (index: number | undefined) => string;
	    listId: string;
	    setActiveOptionIndex: (index: number, cb?: () => void) => void;
	};
	export class EuiSelectableList<T> extends Component<EuiSelectableListProps<T>> {
	    static defaultProps: {
	        rowHeight: number;
	        searchValue: string;
	    };
	    listRef: FixedSizeList | null;
	    listBoxRef: HTMLUListElement | null;
	    setListRef: (ref: FixedSizeList | null) => void;
	    removeScrollableTabStop: (ref: HTMLDivElement | null) => void;
	    setListBoxRef: (ref: HTMLUListElement | null) => void;
	    componentDidUpdate(): void;
	    constructor(props: EuiSelectableListProps<T>);
	    ListRow: React.MemoExoticComponent<({ data, index, style }: ListChildComponentProps<T>) => JSX.Element>;
	    render(): JSX.Element;
	    onAddOrRemoveOption: (option: EuiSelectableOption<T>) => void;
	    private onAddOption;
	    private onRemoveOption;
	    private onExcludeOption;
	}
	export {};

}
declare module '@elastic\eui\src\components\selectable\selectable_list' {
	export { EuiSelectableList, EuiSelectableListProps, EuiSelectableOptionsListProps, } from '@elastic\eui\src\components\selectable\selectable_list\selectable_list';
	export { EuiSelectableListItem, EuiSelectableListItemProps, } from '@elastic\eui\src\components\selectable\selectable_list\selectable_list_item';

}
declare module '@elastic\eui\src\components\selectable\selectable' {
	import React, { Component, HTMLAttributes, ReactNode, ReactElement, KeyboardEvent } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { EuiSelectableSearch } from '@elastic\eui\src\components\selectable\selectable_search';
	import { EuiSelectableMessage } from '@elastic\eui\src\components\selectable\selectable_message';
	import { EuiSelectableList } from '@elastic\eui\src\components\selectable\selectable_list';
	import { EuiSelectableOption } from '@elastic\eui\src\components\selectable\selectable_option';
	import { EuiSelectableOptionsListProps } from '@elastic\eui\src\components\selectable\selectable_list\selectable_list';
	import { EuiSelectableSearchProps } from '@elastic\eui\src\components\selectable\selectable_search\selectable_search'; type RequiredEuiSelectableOptionsListProps = Omit<EuiSelectableOptionsListProps, keyof typeof EuiSelectableList['defaultProps']>; type OptionalEuiSelectableOptionsListProps = Omit<EuiSelectableOptionsListProps, keyof RequiredEuiSelectableOptionsListProps>; type EuiSelectableOptionsListPropsWithDefaults = RequiredEuiSelectableOptionsListProps & Partial<OptionalEuiSelectableOptionsListProps>; type EuiSelectableSearchableProps<T> = ExclusiveUnion<{
	    searchable: false;
	}, {
	    /**
	     * Hooks up a search box to filter the list (boolean)
	     */
	    searchable: true;
	    /**
	     * Passes props down to the `EuiFieldSearch`
	     */
	    searchProps?: Partial<EuiSelectableSearchProps<T>>;
	}>;
	export type EuiSelectableProps<T = {}> = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> & EuiSelectableSearchableProps<T> & {
	    /**
	     * Function that takes the `list` node and then
	     * the `search` node (if `searchable` is applied)
	     */
	    children?: (list: ReactElement<typeof EuiSelectableMessage | typeof EuiSelectableList>, search: ReactElement<EuiSelectableSearch<T>> | undefined) => ReactNode;
	    /**
	     * Array of EuiSelectableOption objects. See #EuiSelectableOptionProps
	     */
	    options: Array<EuiSelectableOption<T>>;
	    /**
	     * Passes back the altered `options` array with selected options as
	     */
	    onChange?: (options: Array<EuiSelectableOption<T>>) => void;
	    /**
	     * Sets the single selection policy of
	     * `false`: allows multiple selection
	     * `true`: only allows one selection
	     * `always`: can and must have only one selection
	     */
	    singleSelection?: EuiSelectableOptionsListProps['singleSelection'];
	    /**
	     * Allows marking options as `checked='off'` as well as `'on'`
	     */
	    allowExclusions?: boolean;
	    /**
	     * Show an loading indicator while you load and hook up your data
	     */
	    isLoading?: boolean;
	    /**
	     * Sets the max height in pixels or pass `full` to allow
	     * the whole group to fill the height of its container and
	     * allows the list grow as well
	     */
	    height?: number | 'full';
	    /**
	     * See #EuiSelectableOptionsList
	     */
	    listProps?: EuiSelectableOptionsListPropsWithDefaults;
	    /**
	     * Custom render function for each option.
	     * Returns `(option, searchValue)`
	     */
	    renderOption?: (option: EuiSelectableOption<T>, searchValue: string) => ReactNode;
	    /**
	     * Customize the loading message. Pass a string to simply change the text,
	     * or a node to replace the whole content.
	     */
	    loadingMessage?: ReactElement | string;
	    /**
	     * Customize the no matches message. Pass a string to simply change the text,
	     * or a node to replace the whole content.
	     */
	    noMatchesMessage?: ReactElement | string;
	    /**
	     * Customize the empty message. Pass a string to simply change the text,
	     * or a node to replace the whole content.
	     */
	    emptyMessage?: ReactElement | string;
	    /**
	     * Control whether or not options get filtered internally or if consumer will filter
	     * Default: false
	     */
	    isPreFiltered?: boolean;
	};
	export interface EuiSelectableState<T> {
	    activeOptionIndex?: number;
	    searchValue: string;
	    visibleOptions: Array<EuiSelectableOption<T>>;
	    isFocused: boolean;
	}
	export class EuiSelectable<T = {}> extends Component<EuiSelectableProps<T>, EuiSelectableState<T>> {
	    static defaultProps: {
	        options: never[];
	        singleSelection: boolean;
	        searchable: boolean;
	        isPreFiltered: boolean;
	    };
	    private containerRef;
	    private optionsListRef;
	    rootId: (idSuffix?: string) => string;
	    constructor(props: EuiSelectableProps<T>);
	    static getDerivedStateFromProps<T>(nextProps: EuiSelectableProps<T>, prevState: EuiSelectableState<T>): {
	        visibleOptions: ExclusiveUnion<import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableGroupLabelOption<T>, import ("@elastic\eui\src\components\selectable\selectable_option").EuiSelectableLIOption<T>>[];
	        activeOptionIndex: number | undefined;
	    };
	    hasActiveOption: () => boolean;
	    onFocus: () => void;
	    onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
	    incrementActiveOptionIndex: (amount: number) => void;
	    onSearchChange: (visibleOptions: Array<EuiSelectableOption<T>>, searchValue: string) => void;
	    onContainerBlur: (e: React.FocusEvent) => void;
	    onOptionClick: (options: Array<EuiSelectableOption<T>>) => void;
	    scrollToItem: (index: number, align?: "center" | "end" | "auto" | "start" | "smart" | undefined) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic\eui\src\components\selectable\selectable_templates\selectable_template_sitewide_option' {
	import React from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiIconProps } from '@elastic\eui\src\components\icon';
	import { EuiAvatarProps } from '@elastic\eui\src\components\avatar\avatar';
	import { EuiSelectableOption } from '@elastic\eui\src\components\selectable\selectable_option';
	export interface EuiSelectableTemplateSitewideMetaData extends CommonProps {
	    /**
	     * Required to display the metadata
	     */
	    text: string;
	    /**
	     * Styles the metadata according to Elastic's schema.
	     * Can be one of 'application', 'deployment', 'article', 'case', 'platform',
	     * or a custom string to associate with your own schema.
	     * Appends the string to the class name as `euiSelectableTemplateSitewide__optionMeta--[type]`
	     */
	    type?: 'application' | 'deployment' | 'article' | 'case' | 'platform' | string;
	    /**
	     * Will wrap the meta tag in EuiHighlight to mark the portions that match the search text
	     */
	    highlightSearchString?: boolean;
	}
	/**
	 * The generic extension allows consumers to keep their data objects
	 * intact without needing to do key lookups when using `renderOption`
	 */
	export type EuiSelectableTemplateSitewideOption<T = {
	    [key: string]: any;
	}> = {
	    /**
	     * Displayed on the left (`prepend`).
	     * Object of `EuiIconProps` for display of the solution/application's logo
	     */
	    icon?: EuiIconProps;
	    /**
	     * Displayed on the right (`append`).
	     * Object of `EuiAvatarProps` for display of the space (default) or user
	     */
	    avatar?: EuiAvatarProps;
	    /**
	     * An array of inline #MetaData displayed beneath the label and separated by bullets.
	     */
	    meta?: EuiSelectableTemplateSitewideMetaData[];
	} & EuiSelectableOption<T>;
	export const euiSelectableTemplateSitewideFormatOptions: (options: EuiSelectableTemplateSitewideOption[]) => ({
	    className: string;
	    prepend: {} | null | undefined;
	    append: {} | null | undefined;
	    /**
	     * Displayed on the left (`prepend`).
	     * Object of `EuiIconProps` for display of the solution/application's logo
	     */
	    icon?: EuiIconProps | undefined;
	    /**
	     * Displayed on the right (`append`).
	     * Object of `EuiAvatarProps` for display of the space (default) or user
	     */
	    avatar?: (Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & import ("@elastic\eui\src\components\common").DisambiguateSet<(import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    }) | (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }), {
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    }> & {
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    } & {
	        name: string;
	        color?: string | null | undefined;
	        type?: "space" | "user" | undefined;
	        size?: "s" | "m" | "l" | "xl" | undefined;
	        isDisabled?: boolean | undefined;
	    }) | (Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    }, (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    }) | (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    })> & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    } & {
	        name: string;
	        color?: string | null | undefined;
	        type?: "space" | "user" | undefined;
	        size?: "s" | "m" | "l" | "xl" | undefined;
	        isDisabled?: boolean | undefined;
	    }) | (Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    }, (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    }) | (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    })> & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    } & {
	        name: string;
	        color?: string | null | undefined;
	        type?: "space" | "user" | undefined;
	        size?: "s" | "m" | "l" | "xl" | undefined;
	        isDisabled?: boolean | undefined;
	    }) | undefined;
	    /**
	     * An array of inline #MetaData displayed beneath the label and separated by bullets.
	     */
	    meta?: EuiSelectableTemplateSitewideMetaData[] | undefined;
	    'aria-label'?: string | undefined;
	    'data-test-subj'?: string | undefined;
	    label: string;
	    searchableLabel?: string | undefined;
	    key: string;
	    checked?: "off" | "on" | undefined;
	    disabled?: boolean | undefined;
	    isGroupLabel?: false | undefined;
	    ref?: ((optionIndex: number) => void) | undefined;
	    id?: undefined;
	    defaultChecked?: boolean | undefined;
	    defaultValue?: string | number | string[] | undefined;
	    suppressContentEditableWarning?: boolean | undefined;
	    suppressHydrationWarning?: boolean | undefined;
	    accessKey?: string | undefined;
	    contentEditable?: boolean | "inherit" | "true" | "false" | undefined;
	    contextMenu?: string | undefined;
	    dir?: string | undefined;
	    draggable?: boolean | "true" | "false" | undefined;
	    hidden?: boolean | undefined;
	    lang?: string | undefined;
	    placeholder?: string | undefined;
	    slot?: string | undefined;
	    spellCheck?: boolean | "true" | "false" | undefined;
	    style?: React.CSSProperties | undefined;
	    tabIndex?: number | undefined;
	    title: string;
	    translate?: "no" | "yes" | undefined;
	    radioGroup?: string | undefined;
	    role?: string | undefined;
	    about?: string | undefined;
	    datatype?: string | undefined;
	    inlist?: any;
	    prefix?: string | undefined;
	    property?: string | undefined;
	    resource?: string | undefined;
	    typeof?: string | undefined;
	    vocab?: string | undefined;
	    autoCapitalize?: string | undefined;
	    autoCorrect?: string | undefined;
	    autoSave?: string | undefined;
	    color?: string | undefined;
	    itemProp?: string | undefined;
	    itemScope?: boolean | undefined;
	    itemType?: string | undefined;
	    itemID?: string | undefined;
	    itemRef?: string | undefined;
	    results?: number | undefined;
	    security?: string | undefined;
	    unselectable?: "off" | "on" | undefined;
	    inputMode?: "search" | "email" | "text" | "none" | "tel" | "url" | "numeric" | "decimal" | undefined;
	    is?: string | undefined;
	    'aria-activedescendant'?: string | undefined;
	    'aria-atomic'?: boolean | "true" | "false" | undefined;
	    'aria-autocomplete'?: "both" | "list" | "none" | "inline" | undefined;
	    'aria-busy'?: boolean | "true" | "false" | undefined;
	    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
	    'aria-colcount'?: number | undefined;
	    'aria-colindex'?: number | undefined;
	    'aria-colspan'?: number | undefined;
	    'aria-controls'?: string | undefined;
	    'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
	    'aria-describedby'?: string | undefined;
	    'aria-details'?: string | undefined;
	    'aria-disabled'?: boolean | "true" | "false" | undefined;
	    'aria-dropeffect'?: "link" | "copy" | "none" | "execute" | "move" | "popup" | undefined;
	    'aria-errormessage'?: string | undefined;
	    'aria-expanded'?: boolean | "true" | "false" | undefined;
	    'aria-flowto'?: string | undefined;
	    'aria-grabbed'?: boolean | "true" | "false" | undefined;
	    'aria-haspopup'?: boolean | "grid" | "menu" | "true" | "false" | "listbox" | "tree" | "dialog" | undefined;
	    'aria-hidden'?: boolean | "true" | "false" | undefined;
	    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
	    'aria-keyshortcuts'?: string | undefined;
	    'aria-labelledby'?: string | undefined;
	    'aria-level'?: number | undefined;
	    'aria-live'?: "off" | "assertive" | "polite" | undefined;
	    'aria-modal'?: boolean | "true" | "false" | undefined;
	    'aria-multiline'?: boolean | "true" | "false" | undefined;
	    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
	    'aria-orientation'?: "horizontal" | "vertical" | undefined;
	    'aria-owns'?: string | undefined;
	    'aria-placeholder'?: string | undefined;
	    'aria-posinset'?: number | undefined;
	    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
	    'aria-readonly'?: boolean | "true" | "false" | undefined;
	    'aria-relevant'?: "text" | "additions" | "additions text" | "all" | "removals" | undefined;
	    'aria-required'?: boolean | "true" | "false" | undefined;
	    'aria-roledescription'?: string | undefined;
	    'aria-rowcount'?: number | undefined;
	    'aria-rowindex'?: number | undefined;
	    'aria-rowspan'?: number | undefined;
	    'aria-selected'?: boolean | "true" | "false" | undefined;
	    'aria-setsize'?: number | undefined;
	    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
	    'aria-valuemax'?: number | undefined;
	    'aria-valuemin'?: number | undefined;
	    'aria-valuenow'?: number | undefined;
	    'aria-valuetext'?: string | undefined;
	    children?: React.ReactNode;
	    dangerouslySetInnerHTML?: {
	        __html: string;
	    } | undefined;
	    onCopy?: ((event: React.ClipboardEvent<HTMLLIElement>) => void) | undefined;
	    onCopyCapture?: ((event: React.ClipboardEvent<HTMLLIElement>) => void) | undefined;
	    onCut?: ((event: React.ClipboardEvent<HTMLLIElement>) => void) | undefined;
	    onCutCapture?: ((event: React.ClipboardEvent<HTMLLIElement>) => void) | undefined;
	    onPaste?: ((event: React.ClipboardEvent<HTMLLIElement>) => void) | undefined;
	    onPasteCapture?: ((event: React.ClipboardEvent<HTMLLIElement>) => void) | undefined;
	    onCompositionEnd?: ((event: React.CompositionEvent<HTMLLIElement>) => void) | undefined;
	    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLLIElement>) => void) | undefined;
	    onCompositionStart?: ((event: React.CompositionEvent<HTMLLIElement>) => void) | undefined;
	    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLLIElement>) => void) | undefined;
	    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLLIElement>) => void) | undefined;
	    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLLIElement>) => void) | undefined;
	    onFocus?: ((event: React.FocusEvent<HTMLLIElement>) => void) | undefined;
	    onFocusCapture?: ((event: React.FocusEvent<HTMLLIElement>) => void) | undefined;
	    onBlur?: ((event: React.FocusEvent<HTMLLIElement>) => void) | undefined;
	    onBlurCapture?: ((event: React.FocusEvent<HTMLLIElement>) => void) | undefined;
	    onChange?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onChangeCapture?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onBeforeInput?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onBeforeInputCapture?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onInput?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onInputCapture?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onReset?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onResetCapture?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onSubmit?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onSubmitCapture?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onInvalid?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onInvalidCapture?: ((event: React.FormEvent<HTMLLIElement>) => void) | undefined;
	    onLoad?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onError?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onErrorCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onKeyDown?: ((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
	    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
	    onKeyPress?: ((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
	    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
	    onKeyUp?: ((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
	    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
	    onAbort?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onAbortCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onCanPlay?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onDurationChange?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onEmptied?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onEncrypted?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onEnded?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onEndedCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadedData?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadStart?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onPause?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onPauseCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onPlay?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onPlayCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onPlaying?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onProgress?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onProgressCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onRateChange?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSeeked?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSeeking?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onStalled?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onStalledCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSuspend?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onVolumeChange?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onWaiting?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onAuxClick?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onAuxClickCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onClick?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onClickCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onContextMenu?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onContextMenuCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onDoubleClick?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onDrag?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragEnd?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragEndCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragEnter?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragEnterCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragExit?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragExitCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragLeave?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragLeaveCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragOver?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragOverCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragStart?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDragStartCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDrop?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onDropCapture?: ((event: React.DragEvent<HTMLLIElement>) => void) | undefined;
	    onMouseDown?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseDownCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseEnter?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseLeave?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseMove?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseOut?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseOutCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseOver?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseOverCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseUp?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onMouseUpCapture?: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
	    onSelect?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onSelectCapture?: ((event: React.SyntheticEvent<HTMLLIElement, Event>) => void) | undefined;
	    onTouchCancel?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchEnd?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchEndCapture?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchMove?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchStart?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onTouchStartCapture?: ((event: React.TouchEvent<HTMLLIElement>) => void) | undefined;
	    onPointerDown?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerDownCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerMove?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerUp?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerUpCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerCancel?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerEnter?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerLeave?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerOver?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerOverCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerOut?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onPointerOutCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onGotPointerCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onLostPointerCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLLIElement>) => void) | undefined;
	    onScroll?: ((event: React.UIEvent<HTMLLIElement, UIEvent>) => void) | undefined;
	    onScrollCapture?: ((event: React.UIEvent<HTMLLIElement, UIEvent>) => void) | undefined;
	    onWheel?: ((event: React.WheelEvent<HTMLLIElement>) => void) | undefined;
	    onWheelCapture?: ((event: React.WheelEvent<HTMLLIElement>) => void) | undefined;
	    onAnimationStart?: ((event: React.AnimationEvent<HTMLLIElement>) => void) | undefined;
	    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLLIElement>) => void) | undefined;
	    onAnimationEnd?: ((event: React.AnimationEvent<HTMLLIElement>) => void) | undefined;
	    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLLIElement>) => void) | undefined;
	    onAnimationIteration?: ((event: React.AnimationEvent<HTMLLIElement>) => void) | undefined;
	    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLLIElement>) => void) | undefined;
	    onTransitionEnd?: ((event: React.TransitionEvent<HTMLLIElement>) => void) | undefined;
	    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLLIElement>) => void) | undefined;
	} | {
	    className: string;
	    prepend: {} | null | undefined;
	    append: {} | null | undefined;
	    /**
	     * Displayed on the left (`prepend`).
	     * Object of `EuiIconProps` for display of the solution/application's logo
	     */
	    icon?: EuiIconProps | undefined;
	    /**
	     * Displayed on the right (`append`).
	     * Object of `EuiAvatarProps` for display of the space (default) or user
	     */
	    avatar?: (Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & import ("@elastic\eui\src\components\common").DisambiguateSet<(import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    }) | (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }), {
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    }> & {
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    } & {
	        name: string;
	        color?: string | null | undefined;
	        type?: "space" | "user" | undefined;
	        size?: "s" | "m" | "l" | "xl" | undefined;
	        isDisabled?: boolean | undefined;
	    }) | (Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    }, (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    }) | (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    })> & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    } & {
	        name: string;
	        color?: string | null | undefined;
	        type?: "space" | "user" | undefined;
	        size?: "s" | "m" | "l" | "xl" | undefined;
	        isDisabled?: boolean | undefined;
	    }) | (Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id" | "lang" | "style" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "title" | "slot" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & CommonProps & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        iconType: import ("@elastic\eui\src\components\icon").IconType;
	        iconSize?: "s" | "m" | "l" | "xl" | "original" | "xxl" | undefined;
	        iconColor?: string | null | undefined;
	    }, (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }, {
	        imageUrl: string;
	    }> & {
	        imageUrl: string;
	    }) | (import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    })> & import ("@elastic\eui\src\components\common").DisambiguateSet<{
	        imageUrl: string;
	    }, {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    }> & {
	        initials?: string | undefined;
	        initialsLength?: 1 | 2 | undefined;
	    } & {
	        name: string;
	        color?: string | null | undefined;
	        type?: "space" | "user" | undefined;
	        size?: "s" | "m" | "l" | "xl" | undefined;
	        isDisabled?: boolean | undefined;
	    }) | undefined;
	    /**
	     * An array of inline #MetaData displayed beneath the label and separated by bullets.
	     */
	    meta?: EuiSelectableTemplateSitewideMetaData[] | undefined;
	    id?: undefined;
	    'aria-label'?: string | undefined;
	    'data-test-subj'?: string | undefined;
	    ref?: ((optionIndex: number) => void) | undefined;
	    label: string;
	    disabled?: boolean | undefined;
	    checked?: "off" | "on" | undefined;
	    key: string;
	    searchableLabel?: string | undefined;
	    defaultChecked?: boolean | undefined;
	    defaultValue?: string | number | string[] | undefined;
	    suppressContentEditableWarning?: boolean | undefined;
	    suppressHydrationWarning?: boolean | undefined;
	    accessKey?: string | undefined;
	    contentEditable?: boolean | "inherit" | "true" | "false" | undefined;
	    contextMenu?: string | undefined;
	    dir?: string | undefined;
	    draggable?: boolean | "true" | "false" | undefined;
	    hidden?: boolean | undefined;
	    lang?: string | undefined;
	    placeholder?: string | undefined;
	    slot?: string | undefined;
	    spellCheck?: boolean | "true" | "false" | undefined;
	    style?: React.CSSProperties | undefined;
	    tabIndex?: number | undefined;
	    title: string;
	    translate?: "no" | "yes" | undefined;
	    radioGroup?: string | undefined;
	    role?: string | undefined;
	    about?: string | undefined;
	    datatype?: string | undefined;
	    inlist?: any;
	    prefix?: string | undefined;
	    property?: string | undefined;
	    resource?: string | undefined;
	    typeof?: string | undefined;
	    vocab?: string | undefined;
	    autoCapitalize?: string | undefined;
	    autoCorrect?: string | undefined;
	    autoSave?: string | undefined;
	    color?: string | undefined;
	    itemProp?: string | undefined;
	    itemScope?: boolean | undefined;
	    itemType?: string | undefined;
	    itemID?: string | undefined;
	    itemRef?: string | undefined;
	    results?: number | undefined;
	    security?: string | undefined;
	    unselectable?: "off" | "on" | undefined;
	    inputMode?: "search" | "email" | "text" | "none" | "tel" | "url" | "numeric" | "decimal" | undefined;
	    is?: string | undefined;
	    'aria-activedescendant'?: string | undefined;
	    'aria-atomic'?: boolean | "true" | "false" | undefined;
	    'aria-autocomplete'?: "both" | "list" | "none" | "inline" | undefined;
	    'aria-busy'?: boolean | "true" | "false" | undefined;
	    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
	    'aria-colcount'?: number | undefined;
	    'aria-colindex'?: number | undefined;
	    'aria-colspan'?: number | undefined;
	    'aria-controls'?: string | undefined;
	    'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
	    'aria-describedby'?: string | undefined;
	    'aria-details'?: string | undefined;
	    'aria-disabled'?: boolean | "true" | "false" | undefined;
	    'aria-dropeffect'?: "link" | "copy" | "none" | "execute" | "move" | "popup" | undefined;
	    'aria-errormessage'?: string | undefined;
	    'aria-expanded'?: boolean | "true" | "false" | undefined;
	    'aria-flowto'?: string | undefined;
	    'aria-grabbed'?: boolean | "true" | "false" | undefined;
	    'aria-haspopup'?: boolean | "grid" | "menu" | "true" | "false" | "listbox" | "tree" | "dialog" | undefined;
	    'aria-hidden'?: boolean | "true" | "false" | undefined;
	    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
	    'aria-keyshortcuts'?: string | undefined;
	    'aria-labelledby'?: string | undefined;
	    'aria-level'?: number | undefined;
	    'aria-live'?: "off" | "assertive" | "polite" | undefined;
	    'aria-modal'?: boolean | "true" | "false" | undefined;
	    'aria-multiline'?: boolean | "true" | "false" | undefined;
	    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
	    'aria-orientation'?: "horizontal" | "vertical" | undefined;
	    'aria-owns'?: string | undefined;
	    'aria-placeholder'?: string | undefined;
	    'aria-posinset'?: number | undefined;
	    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
	    'aria-readonly'?: boolean | "true" | "false" | undefined;
	    'aria-relevant'?: "text" | "additions" | "additions text" | "all" | "removals" | undefined;
	    'aria-required'?: boolean | "true" | "false" | undefined;
	    'aria-roledescription'?: string | undefined;
	    'aria-rowcount'?: number | undefined;
	    'aria-rowindex'?: number | undefined;
	    'aria-rowspan'?: number | undefined;
	    'aria-selected'?: boolean | "true" | "false" | undefined;
	    'aria-setsize'?: number | undefined;
	    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
	    'aria-valuemax'?: number | undefined;
	    'aria-valuemin'?: number | undefined;
	    'aria-valuenow'?: number | undefined;
	    'aria-valuetext'?: string | undefined;
	    children?: React.ReactNode;
	    dangerouslySetInnerHTML?: {
	        __html: string;
	    } | undefined;
	    onCopy?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
	    onCopyCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
	    onCut?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
	    onCutCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
	    onPaste?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
	    onPasteCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
	    onCompositionEnd?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
	    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
	    onCompositionStart?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
	    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
	    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
	    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
	    onFocus?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
	    onFocusCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
	    onBlur?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
	    onBlurCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
	    onChange?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onChangeCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onBeforeInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onBeforeInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onReset?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onResetCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onSubmit?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onSubmitCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onInvalid?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onInvalidCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
	    onLoad?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onError?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onErrorCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onKeyDown?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
	    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
	    onKeyPress?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
	    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
	    onKeyUp?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
	    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
	    onAbort?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onAbortCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onCanPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onDurationChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onEmptied?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onEncrypted?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onEnded?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onEndedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadedData?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadStart?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onPause?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onPauseCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onPlaying?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onProgress?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onProgressCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onRateChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSeeked?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSeeking?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onStalled?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onStalledCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSuspend?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onVolumeChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onWaiting?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onAuxClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onAuxClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onContextMenu?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onContextMenuCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onDoubleClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onDrag?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragEnd?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragEndCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragEnter?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragEnterCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragExit?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragExitCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragLeave?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragLeaveCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragOver?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragOverCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragStart?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDragStartCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDrop?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onDropCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
	    onMouseDown?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseDownCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseEnter?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseLeave?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseMove?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseOut?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseOutCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseOver?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseOverCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseUp?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onMouseUpCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	    onSelect?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onSelectCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
	    onTouchCancel?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchEnd?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchEndCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchMove?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchStart?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onTouchStartCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
	    onPointerDown?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerDownCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerMove?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerUp?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerUpCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerCancel?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerEnter?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerLeave?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerOver?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerOverCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerOut?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onPointerOutCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onGotPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onLostPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
	    onScroll?: ((event: React.UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
	    onScrollCapture?: ((event: React.UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
	    onWheel?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
	    onWheelCapture?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
	    onAnimationStart?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
	    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
	    onAnimationEnd?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
	    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
	    onAnimationIteration?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
	    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
	    onTransitionEnd?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
	    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
	    isGroupLabel: true;
	})[];
	export const euiSelectableTemplateSitewideRenderOptions: (option: EuiSelectableTemplateSitewideOption, searchValue: string) => JSX.Element;

}
declare module '@elastic\eui\src\components\selectable\selectable_templates\selectable_template_sitewide' {
	import { FunctionComponent, ReactNode, CSSProperties, ReactElement } from 'react';
	import { EuiSelectableProps } from '@elastic\eui\src\components\selectable\selectable';
	import { Props as PopoverProps } from '@elastic\eui\src\components\popover\popover';
	import { EuiSelectableTemplateSitewideOption } from '@elastic\eui\src\components\selectable\selectable_templates\selectable_template_sitewide_option';
	import { EuiBreakpointSize } from '@elastic\eui\src\services\breakpoint';
	export type EuiSelectableTemplateSitewideProps = Partial<Omit<EuiSelectableProps<{
	    [key: string]: any;
	}>, 'options'>> & {
	    /**
	     * Extends the typical EuiSelectable #Options with the addition of pre-composed elements
	     * such as `icon`, `avatar`and `meta`
	     */
	    options: EuiSelectableTemplateSitewideOption[];
	    /**
	     * Override some of the EuiPopover props housing the list.
	     * The default width is `600`
	     */
	    popoverProps?: Partial<PopoverProps> & {
	        width?: CSSProperties['width'];
	    };
	    /**
	     * Optionally provide a title for the popover
	     */
	    popoverTitle?: ReactNode;
	    /**
	     * Optionally provide a footer for the popover
	     */
	    popoverFooter?: ReactNode;
	    /**
	     * Optionally provide a separate button for toggling the display of the popover.
	     */
	    popoverButton?: ReactElement;
	    /**
	     * Pass an array of named breakpoints for which to show the `popoverButton`.
	     * If `undefined`, the `popoverButton` will always show (if provided)
	     */
	    popoverButtonBreakpoints?: EuiBreakpointSize[];
	};
	export const EuiSelectableTemplateSitewide: FunctionComponent<EuiSelectableTemplateSitewideProps>;

}
declare module '@elastic\eui\src\components\selectable\selectable_templates' {
	export { EuiSelectableTemplateSitewide, EuiSelectableTemplateSitewideProps, } from '@elastic\eui\src\components\selectable\selectable_templates\selectable_template_sitewide';
	export { EuiSelectableTemplateSitewideOption, EuiSelectableTemplateSitewideMetaData, euiSelectableTemplateSitewideFormatOptions, euiSelectableTemplateSitewideRenderOptions, } from '@elastic\eui\src\components\selectable\selectable_templates\selectable_template_sitewide_option';

}
declare module '@elastic/eui' {
	export { EuiSelectable, EuiSelectableProps } from '@elastic\eui\src\components\selectable\selectable';
	export { EuiSelectableList, EuiSelectableListProps, EuiSelectableListItem, EuiSelectableListItemProps, EuiSelectableOptionsListProps, } from '@elastic\eui\src\components\selectable\selectable_list';
	export { EuiSelectableMessage, EuiSelectableMessageProps, } from '@elastic\eui\src\components\selectable\selectable_message';
	export { EuiSelectableOption } from '@elastic\eui\src\components\selectable\selectable_option';
	export { EuiSelectableSearch, EuiSelectableSearchProps, } from '@elastic\eui\src\components\selectable\selectable_search';
	export { EuiSelectableTemplateSitewide, EuiSelectableTemplateSitewideProps, EuiSelectableTemplateSitewideOption, EuiSelectableTemplateSitewideMetaData, euiSelectableTemplateSitewideRenderOptions, } from '@elastic\eui\src\components\selectable\selectable_templates';

}
declare module '@elastic\eui\src\components\side_nav\side_nav_item' {
	import { ReactNode, ReactElement, MouseEventHandler } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	/**
	 * The props that are exposed to, or altered for, the consumer
	 * for use in the object of items in `EuiSideNav`
	 * can be found in the `side_nave_types.ts` file.
	 */
	export type _EuiSideNavItemButtonProps = CommonProps & {
	    /**
	     * Is an optional string to be passed as the navigation item's `href` prop,
	     * and by default it will force rendering of the item as an `<a>`
	     */
	    href?: string;
	    target?: string;
	    rel?: string;
	    /**
	     * Callback function to be passed as the navigation item's `onClick` prop,
	     * and by default it will force rendering of the item as a `<button>` instead of a link
	     */
	    onClick?: MouseEventHandler<HTMLButtonElement | HTMLElement>;
	    children: ReactNode;
	    disabled?: boolean;
	};
	export interface _EuiSideNavItemProps {
	    /**
	     * React node which will be rendered as a small icon to the
	     * left of the navigation item text
	     */
	    icon?: ReactElement;
	    /**
	     * If set to true it will render the item in a visible
	     * "selected" state, and will force all ancestor navigation items
	     * to render in an "open" state
	     */
	    isSelected?: boolean;
	    /**
	     * Enhances the whole item's section (including nested items) with
	     * a slight background and bold top item
	     */
	    emphasize?: boolean;
	    /**
	     * Restrict the item's text length to a single line
	     */
	    truncate?: boolean;
	    /**
	     * Passed to the actual `.euiSideNavItemButton` element
	     */
	    buttonClassName?: string;
	    items?: ReactNode;
	    isOpen?: boolean;
	    isParent?: boolean;
	    depth?: number;
	    childrenOnly?: boolean;
	} type ExcludeEuiSideNavItemProps<T> = Pick<T, Exclude<keyof T, keyof _EuiSideNavItemProps | 'renderItem'>>; type OmitEuiSideNavItemProps<T> = {
	    [K in keyof ExcludeEuiSideNavItemProps<T>]: T[K];
	};
	export type RenderItem<T> = (props: OmitEuiSideNavItemProps<T> & _EuiSideNavItemButtonProps) => JSX.Element;
	export type EuiSideNavItemProps<T> = T extends {
	    renderItem: Function;
	} ? T & {
	    renderItem: RenderItem<T>;
	} : T;
	export function EuiSideNavItem<T extends _EuiSideNavItemButtonProps & _EuiSideNavItemProps & {
	    renderItem?: (props: any) => JSX.Element;
	}>({ isOpen, isSelected, isParent, icon, onClick, href: _href, rel, target, items, children, renderItem: RenderItem, depth, className, truncate, emphasize, buttonClassName, childrenOnly, ...rest }: EuiSideNavItemProps<T>): JSX.Element;
	export {};

}
declare module '@elastic\eui\src\components\side_nav\side_nav_types' {
	import { ReactNode } from 'react';
	import { RenderItem, _EuiSideNavItemButtonProps, _EuiSideNavItemProps } from '@elastic\eui\src\components\side_nav\side_nav_item';
	export interface EuiSideNavItemType<T> extends Omit<_EuiSideNavItemButtonProps, 'children'>, Omit<_EuiSideNavItemProps, 'isParent' | 'depth' | 'isOpen' | 'childrenOnly'> {
	    /**
	     * A value that is passed to React as the `key` for this item
	     */
	    id: string | number;
	    /**
	     * If set to true it will force the item to display in an "open" state at all times.
	     */
	    forceOpen?: boolean;
	    /**
	     * Array containing additional item objects, representing nested children of this navigation item.
	     */
	    items?: Array<EuiSideNavItemType<T>>;
	    /**
	     * React node representing the text to render for this item (usually a string will suffice).
	     */
	    name: ReactNode;
	    /**
	     * Function overriding default rendering for this navigation item ??? when called, it should return a React node representing a replacement navigation item.
	     */
	    renderItem?: RenderItem<T>;
	}

}
declare module '@elastic\eui\src\components\side_nav\side_nav' {
	import { Component, ReactNode, MouseEventHandler } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { RenderItem } from '@elastic\eui\src\components\side_nav\side_nav_item';
	import { EuiSideNavItemType } from '@elastic\eui\src\components\side_nav\side_nav_types';
	import { EuiTitleProps } from '@elastic\eui\src\components\title';
	import { EuiBreakpointSize } from '@elastic\eui\src\services';
	export type EuiSideNavHeadingProps = Partial<EuiTitleProps> & {
	    /**
	     * The actual HTML heading element to wrap the `heading`.
	     * Default is `h2`
	     */
	    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
	    /**
	     * For best accessibility, `<nav>` elements should have a nested heading. But you can hide this element if it's redundent from something else (except on mobile).
	     */
	    screenReaderOnly?: boolean;
	};
	export type EuiSideNavProps<T = {}> = T & CommonProps & {
	    /**
	     * `children` are not rendered. Use `items` to specify navigation items instead.
	     */
	    children?: never;
	    /**
	     * Class names to be merged into the final `className` property.
	     */
	    className?: string;
	    /**
	     * Creates an associated heading element and uses the same node as default for `mobileTitle`
	     */
	    heading?: ReactNode;
	    /**
	     * Adds a couple extra #EuiSideNavHeading props and extends the props of EuiTitle that wraps the `heading`
	     */
	    headingProps?: EuiSideNavHeadingProps;
	    /**
	     * When called, toggles visibility of the navigation menu at mobile responsive widths. The callback should set the `isOpenOnMobile` prop to actually toggle navigation visibility.
	     */
	    toggleOpenOnMobile?: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * If `true`, the navigation menu will be open at mobile device widths. Use in conjunction with the `toggleOpenOnMobile` prop.
	     */
	    isOpenOnMobile?: boolean;
	    /**
	     * A React node to render at mobile responsive widths, representing the title of this navigation menu.
	     */
	    mobileTitle?: ReactNode;
	    /**
	     * Array of breakpoint names for when to show the mobile version.
	     * Set to `undefined` to remove responsive behavior
	     */
	    mobileBreakpoints?: EuiBreakpointSize[];
	    /**
	     *  An array of #EuiSideNavItem objects. Lists navigation menu items.
	     */
	    items: Array<EuiSideNavItemType<T>>;
	    /**
	     * Overrides default navigation menu item rendering. When called, it should return a React node representing a replacement navigation item.
	     */
	    renderItem?: RenderItem<T>;
	    /**
	     * Truncates the text of all items to stick to a single line
	     */
	    truncate?: boolean;
	};
	export class EuiSideNav<T> extends Component<EuiSideNavProps<T>> {
	    static defaultProps: {
	        items: never[];
	        mobileBreakpoints: string[];
	    };
	    isItemOpen: (item: EuiSideNavItemType<T>) => boolean;
	    renderTree: (items: Array<EuiSideNavItemType<T>>, depth?: number) => JSX.Element[];
	    render(): JSX.Element;
	}

}
declare module '@elastic/eui' {
	export { EuiSideNav, EuiSideNavProps } from '@elastic\eui\src\components\side_nav\side_nav';
	export * from '@elastic\eui\src\components\side_nav\side_nav_types';

}
declare module '@elastic\eui\src\components\stat\stat' {
	import { HTMLAttributes, FunctionComponent, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiTitleSize } from '@elastic\eui\src\components\title\title'; const colorToClassNameMap: {
	    default: null;
	    subdued: string;
	    primary: string;
	    secondary: string;
	    success: string;
	    danger: string;
	    accent: string;
	};
	export const COLORS: ("default" | "primary" | "secondary" | "success" | "accent" | "danger" | "subdued")[]; const textAlignToClassNameMap: {
	    left: string;
	    center: string;
	    right: string;
	};
	export const isColorClass: (input: string) => input is "default" | "primary" | "secondary" | "success" | "accent" | "danger" | "subdued";
	export const ALIGNMENTS: ("left" | "right" | "center")[];
	export interface EuiStatProps {
	    /**
	     * Set the description (label) text
	     */
	    description: ReactNode;
	    /**
	     * Will hide the title with an animation until false
	     */
	    isLoading?: boolean;
	    /**
	     * Flips the order of the description and title
	     */
	    reverse?: boolean;
	    textAlign?: keyof typeof textAlignToClassNameMap;
	    /**
	     * The (value) text
	     */
	    title: ReactNode;
	    /**
	     * The color of the title text
	     * **`secondary` color is DEPRECATED, use `success` instead**
	     */
	    titleColor?: keyof typeof colorToClassNameMap | string;
	    /**
	     * Size of the title. See EuiTitle for options ('s', 'm', 'l'... etc)
	     */
	    titleSize?: EuiTitleSize;
	    /**
	     * HTML Element to be used for title
	     */
	    titleElement?: string;
	    /**
	     * HTML Element to be used for description
	     */
	    descriptionElement?: string;
	}
	export const EuiStat: FunctionComponent<CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'> & EuiStatProps>;
	export {};

}
declare module '@elastic/eui' {
	export { EuiStat, EuiStatProps } from '@elastic\eui\src\components\stat\stat';

}
declare module '@elastic\eui\src\components\steps\step_strings' {
	 type Props = {
	    number?: number;
	    title?: string;
	};
	export const useI18nStep: ({ number, title }: Props) => string;
	export const useI18nCompleteStep: ({ number, title }: Props) => string;
	export const useI18nWarningStep: ({ number, title }: Props) => string;
	export const useI18nErrorsStep: ({ number, title }: Props) => string;
	export const useI18nIncompleteStep: ({ number, title }: Props) => string;
	export const useI18nDisabledStep: ({ number, title }: Props) => string;
	export const useI18nLoadingStep: ({ number, title }: Props) => string;
	export {};

}
declare module '@elastic\eui\src\components\steps\step_number' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiStepProps } from '@elastic\eui\src\components\steps\step';
	export const STATUS: ("warning" | "danger" | "disabled" | "loading" | "incomplete" | "complete")[];
	export type EuiStepStatus = typeof STATUS[number];
	export interface EuiStepNumberProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	    /**
	     * May replace the number provided in props.number with alternate styling
	     */
	    status?: EuiStepStatus;
	    number?: number;
	    /**
	     * **DEPRECATED IN AMSTERDAM**
	     * Uses a border and removes the step number.
	     */
	    isHollow?: boolean;
	    /**
	     * Title sizing equivalent to EuiTitle, but only `m`, `s` and `xs`. Defaults to `s`
	     */
	    titleSize?: EuiStepProps['titleSize'];
	}
	export const EuiStepNumber: FunctionComponent<EuiStepNumberProps>;

}
declare module '@elastic\eui\src\components\steps\step' {
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiTitleProps } from '@elastic\eui\src\components\title';
	import { EuiStepStatus } from '@elastic\eui\src\components\steps\step_number';
	export interface EuiStepInterface {
	    /**
	     * ReactNode to render as this component's content
	     */
	    children: ReactNode;
	    /**
	     * The HTML tag used for the title
	     */
	    headingElement?: string;
	    /**
	     * The number of the step in the list of steps
	     */
	    step?: number;
	    title: string;
	    /**
	     * May replace the number provided in props.step with alternate styling.
	     */
	    status?: EuiStepStatus;
	    /**
	     * Title sizing equivalent to EuiTitle, but only `m`, `s` and `xs`. Defaults to `s`
	     */
	    titleSize?: Exclude<EuiTitleProps['size'], 'xxxs' | 'xxs' | 'l'>;
	}
	export type EuiStepProps = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'> & EuiStepInterface;
	export const EuiStep: FunctionComponent<EuiStepProps>;

}
declare module '@elastic\eui\src\components\steps\steps' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiStepProps } from '@elastic\eui\src\components\steps\step';
	export type EuiContainedStepProps = Omit<EuiStepProps, 'step'>;
	export interface EuiStepsProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
	    /**
	     * An array of `EuiStep` objects excluding the `step` prop
	     */
	    steps: EuiContainedStepProps[];
	    /**
	     * The number the steps should begin from
	     */
	    firstStepNumber?: number;
	    /**
	     * The HTML tag used for the title
	     */
	    headingElement?: string;
	    /**
	     * Title sizing equivalent to EuiTitle, but only `m`, `s` and `xs`. Defaults to `s`
	     */
	    titleSize?: EuiStepProps['titleSize'];
	}
	export const EuiSteps: FunctionComponent<EuiStepsProps>;

}
declare module '@elastic\eui\src\components\steps\sub_steps' {
	import { HTMLAttributes, FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export type EuiSubStepsProps = FunctionComponent<HTMLAttributes<HTMLDivElement> & CommonProps>;
	export const EuiSubSteps: EuiSubStepsProps;

}
declare module '@elastic\eui\src\components\steps\step_horizontal' {
	import { ButtonHTMLAttributes, FunctionComponent, MouseEventHandler } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiStepStatus } from '@elastic\eui\src\components\steps\step_number';
	export interface EuiStepHorizontalProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>, CommonProps {
	    /**
	     * **DEPRECATED IN AMSTERDAM**
	     * Adds to the line before the indicator for showing current progress
	     */
	    isSelected?: boolean;
	    /**
	     * **DEPRECATED IN AMSTERDAM**
	     * Adds to the line after the indicator for showing current progress
	     */
	    isComplete?: boolean;
	    onClick: MouseEventHandler<HTMLButtonElement>;
	    /**
	     * Makes the whole step button disabled.
	     */
	    disabled?: boolean;
	    /**
	     * The number of the step in the list of steps
	     */
	    step?: number;
	    title?: string;
	    /**
	     * Visual representation of the step number indicator.
	     * May replace the number provided in props.step with alternate styling.
	     * The `isSelected`, `isComplete`, and `disabled` props will override these.
	     */
	    status?: EuiStepStatus;
	}
	export const EuiStepHorizontal: FunctionComponent<EuiStepHorizontalProps>;

}
declare module '@elastic\eui\src\components\steps\steps_horizontal' {
	import { FunctionComponent, OlHTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiStepHorizontalProps } from '@elastic\eui\src\components\steps\step_horizontal';
	export interface EuiStepsHorizontalProps extends OlHTMLAttributes<HTMLOListElement>, CommonProps {
	    /**
	     * An array of `EuiStepHorizontal` objects excluding the `step` prop
	     */
	    steps: Array<Omit<EuiStepHorizontalProps, 'step'>>;
	}
	export const EuiStepsHorizontal: FunctionComponent<EuiStepsHorizontalProps>;

}
declare module '@elastic/eui' {
	export { EuiStep, EuiStepProps } from '@elastic\eui\src\components\steps\step';
	export { EuiSteps, EuiStepsProps } from '@elastic\eui\src\components\steps\steps';
	export { EuiSubSteps, EuiSubStepsProps } from '@elastic\eui\src\components\steps\sub_steps';
	export { EuiStepHorizontal } from '@elastic\eui\src\components\steps\step_horizontal';
	export { EuiStepsHorizontal, EuiStepsHorizontalProps, } from '@elastic\eui\src\components\steps\steps_horizontal';
	export { EuiStepStatus, EuiStepNumber, EuiStepNumberProps, } from '@elastic\eui\src\components\steps\step_number';

}
declare module '@elastic\eui\src\components\suggest\suggest_item' {
	import { FunctionComponent, HTMLAttributes, ButtonHTMLAttributes, MouseEventHandler } from 'react';
	import { CommonProps, ExclusiveUnion } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon';
	interface Type {
	    iconType: IconType;
	    color: string | keyof typeof colorToClassNameMap;
	}
	interface EuiSuggestItemPropsBase {
	    /**
	     * Takes 'iconType' for EuiIcon and 'color'. 'color' can be tint1 through tint9.
	     */
	    type: Type;
	    /**
	     * Label or primary text.
	     */
	    label: string;
	    /**
	     * Description or secondary text (optional).
	     */
	    description?: string;
	    /**
	     * Label display is 'fixed' by default. Label will increase its width beyond 50% if needed with 'expand'.
	     */
	    labelDisplay?: keyof typeof labelDisplayToClassMap;
	    /**
	     * Width of 'label' when 'labelDisplay' is set to 'fixed'.
	     * Accepts multiples of 10, from 20 to 90. Defaults to 50.
	     */
	    labelWidth?: LabelWidthSize;
	    /**
	     * Set the way in which 'description' is displayed, defaults to 'truncate'.
	     */
	    descriptionDisplay?: keyof typeof descriptionDisplayToClassMap;
	} type PropsForDiv = Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>; type PropsForButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> & {
	    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	};
	export type EuiSuggestItemProps = CommonProps & EuiSuggestItemPropsBase & ExclusiveUnion<PropsForDiv, PropsForButton>;
	interface ColorToClassMap {
	    tint0: string;
	    tint1: string;
	    tint2: string;
	    tint3: string;
	    tint4: string;
	    tint5: string;
	    tint6: string;
	    tint7: string;
	    tint8: string;
	    tint9: string;
	    tint10: string;
	    [key: string]: string;
	} type LabelWidthSize = '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90'; const colorToClassNameMap: ColorToClassMap;
	export const COLORS: (string | number)[]; const labelDisplayToClassMap: {
	    fixed: string;
	    expand: string;
	}; const descriptionDisplayToClassMap: {
	    truncate: string;
	    wrap: string;
	};
	export const DISPLAYS: ("fixed" | "expand")[];
	export const EuiSuggestItem: FunctionComponent<EuiSuggestItemProps>;
	export {};

}
declare module '@elastic\eui\src\components\suggest\suggest_input' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiFieldTextProps } from '@elastic\eui\src\components\form';
	import { EuiSuggestItemProps } from '@elastic\eui\src\components\suggest\suggest_item';
	export type EuiSuggestInputProps = CommonProps & EuiFieldTextProps & {
	    tooltipContent?: string;
	    /**
	     * Status of the current query 'unsaved', 'saved', 'unchanged' or 'loading'.
	     */
	    status?: 'unsaved' | 'saved' | 'unchanged' | 'loading';
	    /**
	     * Element to be appended to the input bar.
	     */
	    append?: JSX.Element;
	    /**
	     * List of suggestions to display using 'suggestItem'.
	     */
	    suggestions: JSX.Element[] | EuiSuggestItemProps[];
	    sendValue?: Function;
	};
	export const EuiSuggestInput: FunctionComponent<EuiSuggestInputProps>;

}
declare module '@elastic\eui\src\components\suggest\suggest' {
	import { FunctionComponent } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { EuiSuggestItemProps } from '@elastic\eui\src\components\suggest\suggest_item';
	import { EuiSuggestInputProps } from '@elastic\eui\src\components\suggest\suggest_input';
	export type EuiSuggestProps = CommonProps & EuiSuggestInputProps & {
	    /**
	     * List of suggestions to display using 'suggestItem'.
	     */
	    suggestions: EuiSuggestItemProps[];
	    /**
	     * Handler for click on a suggestItem.
	     */
	    onItemClick?: (item: EuiSuggestItemProps) => void;
	    onInputChange?: (target: EventTarget) => void;
	};
	export const EuiSuggest: FunctionComponent<EuiSuggestProps>;

}
declare module '@elastic/eui' {
	export { EuiSuggestInput, EuiSuggestInputProps } from '@elastic\eui\src\components\suggest\suggest_input';
	export { EuiSuggestItem, EuiSuggestItemProps } from '@elastic\eui\src\components\suggest\suggest_item';
	export { EuiSuggest, EuiSuggestProps } from '@elastic\eui\src\components\suggest\suggest';

}
declare module '@elastic\eui\src\components\table\mobile' {
	export { EuiTableHeaderMobile } from '@elastic\eui\src\components\table\mobile\table_header_mobile';
	export { EuiTableSortMobile, EuiTableSortMobileProps, } from '@elastic\eui\src\components\table\mobile\table_sort_mobile';
	export { EuiTableSortMobileItem, EuiTableSortMobileItemProps, } from '@elastic\eui\src\components\table\mobile\table_sort_mobile_item';

}
declare module '@elastic\eui\src\components\text_diff\text_diff' {
	import { HTMLAttributes, ElementType } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	interface Props {
	    /**
	     * The starting string
	     */
	    beforeText: string;
	    /**
	     * The string used to compare against `beforeText`
	     */
	    afterText: string;
	    /**
	     * HTML element to wrap insertion differences.
	     * Defaults to `ins`
	     */
	    insertComponent?: ElementType;
	    /**
	     * HTML element to wrap deletion differences.
	     * Defaults to `del`
	     */
	    deleteComponent?: ElementType;
	    /**
	     * HTML element to wrap text with no differences.
	     * Doesn't wrap with anything by default
	     */
	    sameComponent?: ElementType;
	    /**
	     * Time in milliseconds. Passing a timeout of value '0' disables the timeout state
	     */
	    timeout?: number;
	}
	export type EuiTextDiffProps = CommonProps & Props & HTMLAttributes<HTMLElement>;
	export const useEuiTextDiff: ({ className, insertComponent, deleteComponent, sameComponent, beforeText, afterText, timeout, ...rest }: EuiTextDiffProps) => (JSX.Element | [0 | 1 | -1, string][])[];
	export {};

}
declare module '@elastic/eui' {
	export { useEuiTextDiff, EuiTextDiffProps } from '@elastic\eui\src\components\text_diff\text_diff';

}
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

declare module 'text-diff' {
  interface ConstructorProps {
    timeout: number;
  }

  type DiffElement = [-1 | 0 | 1, string];

  class Diff {
    constructor({ timeout }: ConstructorProps);
    main: (initialText: string, currentText: string) => DiffElement[];
  }
  export = Diff;
}
declare module '@elastic\eui\src\services\time\timer' {
	export class Timer {
	    id: any;
	    callback: undefined | (() => void);
	    finishTime: number | undefined;
	    timeRemaining: number | undefined;
	    constructor(callback: () => void, timeMs: number);
	    pause: () => void;
	    resume: () => void;
	    clear: () => void;
	    finish: () => void;
	}

}
declare module '@elastic\eui\src\services\time' {
	export { Timer } from '@elastic\eui\src\services\time\timer';

}
declare module '@elastic\eui\src\components\toast\global_toast_list_item' {
	import { FunctionComponent, ReactElement } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface EuiGlobalToastListItemProps {
	    isDismissed?: boolean;
	    /**
	     * ReactElement to render as this component's content
	     */
	    children?: ReactElement;
	}
	export const EuiGlobalToastListItem: FunctionComponent<CommonProps & EuiGlobalToastListItemProps>;

}
declare module '@elastic\eui\src\components\toast\toast' {
	import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { IconType } from '@elastic\eui\src\components\icon'; type ToastColor = 'primary' | 'success' | 'warning' | 'danger';
	export const COLORS: ("primary" | "success" | "warning" | "danger")[];
	export interface EuiToastProps extends CommonProps, Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	    title?: ReactNode;
	    color?: ToastColor;
	    iconType?: IconType;
	    onClose?: () => void;
	}
	export const EuiToast: FunctionComponent<EuiToastProps>;
	export {};

}
declare module '@elastic\eui\src\components\toast\global_toast_list' {
	import { Component, ReactChild } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	import { Timer } from '@elastic\eui\src\services\time';
	import { EuiToastProps } from '@elastic\eui\src\components\toast\toast'; type ToastSide = 'right' | 'left';
	export const SIDES: import ("@elastic\eui\src\components\button\button_content").ButtonContentIconSide[];
	export const TOAST_FADE_OUT_MS = 250;
	export interface Toast extends EuiToastProps {
	    id: string;
	    text?: ReactChild;
	    toastLifeTimeMs?: number;
	}
	export interface EuiGlobalToastListProps extends CommonProps {
	    toasts: Toast[];
	    dismissToast: (this: EuiGlobalToastList, toast: Toast) => void;
	    toastLifeTimeMs: number;
	    /**
	     * Determines which side of the browser window the toasts should appear
	     */
	    side?: ToastSide;
	}
	interface State {
	    toastIdToDismissedMap: {
	        [toastId: string]: boolean;
	    };
	}
	export class EuiGlobalToastList extends Component<EuiGlobalToastListProps, State> {
	    state: State;
	    dismissTimeoutIds: number[];
	    toastIdToTimerMap: {
	        [toastId: string]: Timer;
	    };
	    isScrollingToBottom: boolean;
	    isScrolledToBottom: boolean;
	    isUserInteracting: boolean;
	    isScrollingAnimationFrame: number;
	    startScrollingAnimationFrame: number;
	    listElement: Element | null;
	    static defaultProps: {
	        toasts: never[];
	        side: string;
	    };
	    startScrollingToBottom(): void;
	    onMouseEnter: () => void;
	    onMouseLeave: () => void;
	    onScroll: () => void;
	    scheduleAllToastsForDismissal: () => void;
	    scheduleToastForDismissal: (toast: Toast) => void;
	    dismissToast: (toast: Toast) => void;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: EuiGlobalToastListProps): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiToast } from '@elastic\eui\src\components\toast\toast';
	export { EuiGlobalToastList, EuiGlobalToastListProps, Toast as EuiGlobalToastListToast, } from '@elastic\eui\src\components\toast\global_toast_list';
	export { EuiGlobalToastListItem, EuiGlobalToastListItemProps, } from '@elastic\eui\src\components\toast\global_toast_list_item';

}
declare module '@elastic\eui\src\components\tour\tour_step_indicator' {
	import { FunctionComponent, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common'; const statusToClassNameMap: {
	    complete: string;
	    incomplete: string;
	    active: string;
	};
	export const STATUS: ("active" | "incomplete" | "complete")[];
	export type EuiTourStepStatus = keyof typeof statusToClassNameMap;
	export interface EuiTourStepIndicatorProps extends CommonProps, HTMLAttributes<HTMLLIElement> {
	    number: number;
	    status: EuiTourStepStatus;
	}
	export const EuiTourStepIndicator: FunctionComponent<EuiTourStepIndicatorProps>;
	export {};

}
declare module '@elastic\eui\src\components\tour\tour_step' {
	import { CSSProperties, FunctionComponent, ReactElement, ReactNode } from 'react';
	import { CommonProps, NoArgCallback } from '@elastic\eui\src\components\common';
	import { EuiPopoverProps } from '@elastic\eui\src\components\popover'; type PopoverOverrides = 'button' | 'closePopover'; type EuiPopoverPartials = Partial<Pick<EuiPopoverProps, PopoverOverrides>>;
	export interface EuiTourStepProps extends CommonProps, Omit<EuiPopoverProps, PopoverOverrides>, EuiPopoverPartials {
	    /**
	     * Element to which the tour step popover attaches when open
	     */
	    children: ReactElement;
	    /**
	     * Contents of the tour step popover
	     */
	    content: ReactNode;
	    /**
	     * Step will display if set to `true`
	     */
	    isStepOpen?: boolean;
	    /**
	     * Sets the min-width of the tour popover,
	     * set to `true` to use the default size,
	     * set to `false` to not restrict the width,
	     * set to a number for a custom width in px,
	     * set to a string for a custom width in custom measurement.
	     */
	    minWidth?: boolean | number | string;
	    /**
	     * Function to call for 'Skip tour' and 'End tour' actions
	     */
	    onFinish: NoArgCallback<void>;
	    /**
	     * The number of the step within the parent tour. 1-based indexing.
	     */
	    step: number;
	    /**
	     * The total number of steps in the tour
	     */
	    stepsTotal: number;
	    /**
	     * Optional, standard DOM `style` attribute. Passed to the EuiPopover panel.
	     */
	    style?: CSSProperties;
	    /**
	     * Smaller title text that appears atop each step in the tour. The subtitle gets wrapped in the appropriate heading level.
	     */
	    subtitle: ReactNode;
	    /**
	     * Larger title text specific to this step. The title gets wrapped in the appropriate heading level.
	     */
	    title: ReactNode;
	    /**
	     * Extra visual indication of step location
	     */
	    decoration?: 'none' | 'beacon';
	    /**
	     * Element to replace the 'Skip tour' link in the footer
	     */
	    footerAction?: ReactElement;
	}
	export const EuiTourStep: FunctionComponent<EuiTourStepProps>;
	export {};

}
declare module '@elastic\eui\src\components\tour\types' {
	export interface EuiTourState {
	    currentTourStep: number;
	    isTourActive: boolean;
	    tourPopoverWidth: number;
	    tourSubtitle: string;
	}
	interface ActionFinish {
	    type: 'EUI_TOUR_FINISH';
	    payload: {
	        resetTour?: boolean;
	    };
	}
	interface ActionReset {
	    type: 'EUI_TOUR_RESET';
	}
	interface ActionDecrement {
	    type: 'EUI_TOUR_PREVIOUS';
	}
	interface ActionIncrement {
	    type: 'EUI_TOUR_NEXT';
	}
	interface ActionGotoStep {
	    type: 'EUI_TOUR_GOTO';
	    payload: {
	        step: number;
	        isTourActive?: boolean;
	    };
	}
	export type EuiTourAction = ActionFinish | ActionReset | ActionDecrement | ActionIncrement | ActionGotoStep;
	export interface EuiTourActions {
	    finishTour: (resetTour?: boolean) => void;
	    resetTour: () => void;
	    decrementStep: () => void;
	    incrementStep: () => void;
	    goToStep: (step: number, isTourActive?: boolean) => void;
	}
	export {};

}
declare module '@elastic\eui\src\components\tour\useEuiTour' {
	import { EuiTourStepProps } from '@elastic\eui\src\components\tour\tour_step';
	import { EuiTourActions, EuiTourState } from '@elastic\eui\src\components\tour\types';
	export type EuiStatelessTourStep = Omit<EuiTourStepProps, keyof EuiTourState> & Partial<EuiTourState>;
	export const useEuiTour: (stepsArray: EuiStatelessTourStep[], initialState: EuiTourState) => [EuiTourStepProps[], EuiTourActions, EuiTourState];

}
declare module '@elastic\eui\src\components\tour\tour' {
	import { FunctionComponent, ReactElement } from 'react';
	import { EuiStatelessTourStep } from '@elastic\eui\src\components\tour\useEuiTour';
	import { EuiTourStepProps } from '@elastic\eui\src\components\tour\tour_step';
	import { EuiTourActions, EuiTourState } from '@elastic\eui\src\components\tour\types';
	export interface EuiTourProps {
	    children: (steps: EuiTourStepProps[], actions: EuiTourActions, state: EuiTourState) => ReactElement;
	    steps: EuiStatelessTourStep[];
	    initialState: EuiTourState;
	}
	export const EuiTour: FunctionComponent<EuiTourProps>;

}
declare module '@elastic/eui' {
	export { EuiTour, EuiTourProps } from '@elastic\eui\src\components\tour\tour';
	export { EuiTourStep, EuiTourStepProps } from '@elastic\eui\src\components\tour\tour_step';
	export { EuiTourStepIndicator, EuiTourStepIndicatorProps, } from '@elastic\eui\src\components\tour\tour_step_indicator';
	export { useEuiTour, EuiStatelessTourStep } from '@elastic\eui\src\components\tour\useEuiTour';
	export * from '@elastic\eui\src\components\tour\types';

}
declare module '@elastic\eui\src\components\tree_view\tree_view' {
	import React, { Component, HTMLAttributes } from 'react';
	import { CommonProps } from '@elastic\eui\src\components\common';
	export interface Node {
	    /** An array of EuiTreeViewNodes to render as children
	     */
	    children?: Node[];
	    /** The readable label for the item
	     */
	    label: React.ReactNode;
	    /** A unique ID
	     */
	    id: string;
	    /** An icon to use on the left of the label
	     */
	    icon?: React.ReactElement;
	    /** Display a different icon when the item is expanded.
	    For instance, an open folder or a down arrow
	    */
	    iconWhenExpanded?: React.ReactElement;
	    /** Use an empty icon to keep items without an icon
	    lined up with their siblings
	    */
	    useEmptyIcon?: boolean;
	    /** Whether or not the item is expanded.
	     */
	    isExpanded?: boolean;
	    /** Optional class to throw on the node
	     */
	    className?: string;
	    /** Function to call when the item is clicked.
	     The open state of the item will always be toggled.
	     */
	    callback?(): string;
	}
	export type EuiTreeViewDisplayOptions = 'default' | 'compressed';
	interface EuiTreeViewState {
	    openItems: string[];
	    activeItem: string;
	    treeID: string;
	    expandChildNodes: boolean;
	}
	export type CommonTreeProps = CommonProps & HTMLAttributes<HTMLUListElement> & {
	    /** An array of EuiTreeViewNodes
	     */
	    items: Node[];
	    /** Optionally use a variation with smaller text and icon sizes
	     */
	    display?: EuiTreeViewDisplayOptions;
	    /** Set all items to open on initial load
	     */
	    expandByDefault?: boolean;
	    /** Display expansion arrows next to all items
	     * that contain children
	     */
	    showExpansionArrows?: boolean;
	};
	export type EuiTreeViewProps = Omit<CommonTreeProps, 'aria-label' | 'aria-labelledby'> & ({
	    'aria-label': string;
	} | {
	    'aria-labelledby': string;
	});
	export class EuiTreeView extends Component<EuiTreeViewProps, EuiTreeViewState> {
	    treeIdGenerator: (idSuffix?: string) => string;
	    static contextType: React.Context<string>;
	    isNested: boolean;
	    state: EuiTreeViewState;
	    componentDidUpdate(prevProps: EuiTreeViewProps): void;
	    buttonRef: Array<HTMLButtonElement | undefined>;
	    setButtonRef: (ref: HTMLButtonElement | HTMLAnchorElement | null, index: number) => void;
	    handleNodeClick: (node: Node, ignoreCallback?: boolean) => void;
	    isNodeOpen: (node: Node) => boolean;
	    onKeyDown: (event: React.KeyboardEvent, node: Node) => void;
	    onChildrenKeydown: (event: React.KeyboardEvent, index: number) => void;
	    render(): JSX.Element;
	}
	export {};

}
declare module '@elastic/eui' {
	export { EuiTreeView, EuiTreeViewProps } from '@elastic\eui\src\components\tree_view\tree_view';

}
declare module '@elastic\eui\src\themes\themes' {
	export interface EUI_THEME {
	    text: string;
	    value: string;
	}
	export const EUI_THEMES: EUI_THEME[];

}
declare module '@elastic/eui' {
	export { EUI_THEMES, EUI_THEME } from '@elastic\eui\src\themes\themes';

}
declare module '@elastic\eui\src\utils\prop_types\is' {
	export const is: <T>(expectedValue: any) => {
	    (props: T, propName: keyof T, componentName: string): Error | null;
	    isRequired(props: T, propName: keyof T, componentName: string): Error | null;
	};

}
declare module '@elastic\eui\src\utils\prop_types\with_required_prop' {
	/**
	 * PropType validation that, if the property is present,
	 * validates against a proptype and verifies that another property exists
	 *
	 * example:
	 * ExampleComponent.propTypes = {
	 *   items: PropTypes.array,
	 *   itemId: withRequiredProp(PropTypes.string, 'items', 'itemId is required to extract the ID from an item')
	 * }
	 *
	 * this validator warns if ExampleComponent is passed an `items` prop but not `itemId`
	 */
	export const withRequiredProp: (proptype: any, requiredPropName: string, messageDescription?: string | undefined) => (...args: any[]) => any;

}
declare module '@elastic\eui\src\utils\prop_types' {
	export const EuiPropTypes: {
	    is: <T>(expectedValue: any) => {
	        (props: T, propName: keyof T, componentName: string): Error | null;
	        isRequired(props: T, propName: keyof T, componentName: string): Error | null;
	    };
	    withRequiredProp: (proptype: any, requiredPropName: string, messageDescription?: string | undefined) => (...args: any[]) => any;
	};

}
declare module '@elastic/eui' {
	export * from '@elastic\eui\src\utils\prop_types';

}



declare module '@elastic/eui' {
  export type EuiTokensObject = {
    "euiAccordion.isLoading": any;
"euiBasicTable.tableCaptionWithPagination": any;
"euiBasicTable.tableAutoCaptionWithPagination": any;
"euiBasicTable.tableSimpleAutoCaptionWithPagination": any;
"euiBasicTable.tableAutoCaptionWithoutPagination": any;
"euiBasicTable.selectAllRows": any;
"euiBasicTable.selectThisRow": any;
"euiBasicTable.tablePagination": any;
"euiCollapsedItemActions.allActions": any;
"euiBottomBar.screenReaderHeading": any;
"euiBottomBar.customScreenReaderAnnouncement": any;
"euiBottomBar.screenReaderAnnouncement": any;
"euiBreadcrumbs.collapsedBadge.ariaLabel": any;
"euiCardSelect.selected": any;
"euiCardSelect.unavailable": any;
"euiCardSelect.select": any;
"euiCodeEditor.startInteracting": any;
"euiCodeEditor.startEditing": any;
"euiCodeEditor.stopInteracting": any;
"euiCodeEditor.stopEditing": any;
"euiCodeBlock.copyButton": any;
"euiCodeBlock.fullscreenCollapse": any;
"euiCodeBlock.fullscreenExpand": any;
"euiColorPicker.colorLabel": any;
"euiColorPicker.colorErrorMessage": any;
"euiColorPicker.transparent": any;
"euiColorPicker.swatchAriaLabel": any;
"euiColorPicker.alphaLabel": any;
"euiColorPicker.openLabel": any;
"euiColorPicker.closeLabel": any;
"euiColorPicker.screenReaderAnnouncement": any;
"euiColorStopThumb.buttonAriaLabel": any;
"euiColorStopThumb.buttonTitle": any;
"euiColorStopThumb.screenReaderAnnouncement": any;
"euiColorStopThumb.stopLabel": any;
"euiColorStopThumb.stopErrorMessage": any;
"euiColorStopThumb.removeLabel": any;
"euiColorStops.screenReaderAnnouncement": any;
"euiHue.label": any;
"euiSaturation.roleDescription": any;
"euiSaturation.screenReaderAnnouncement": any;
"euiComboBoxPill.removeSelection": any;
"euiComboBoxOptionsList.loadingOptions": any;
"euiComboBoxOptionsList.delimiterMessage": any;
"euiComboBoxOptionsList.alreadyAdded": any;
"euiComboBoxOptionsList.createCustomOption": any;
"euiComboBoxOptionsList.noMatchingOptions": any;
"euiComboBoxOptionsList.noAvailableOptions": any;
"euiComboBoxOptionsList.allOptionsSelected": any;
"euiControlBar.screenReaderHeading": any;
"euiControlBar.customScreenReaderAnnouncement": any;
"euiControlBar.screenReaderAnnouncement": any;
"euiColumnActions.hideColumn": any;
"euiColumnActions.sort": any;
"euiColumnActions.moveLeft": any;
"euiColumnActions.moveRight": any;
"euiColumnSelector.button": any;
"euiColumnSelector.buttonActiveSingular": any;
"euiColumnSelector.buttonActivePlural": any;
"euiColumnSelector.search": any;
"euiColumnSelector.searchcolumns": any;
"euiColumnSelector.selectAll": any;
"euiColumnSelector.hideAll": any;
"euiColumnSortingDraggable.defaultSortAsc": any;
"euiColumnSortingDraggable.defaultSortDesc": any;
"euiColumnSortingDraggable.activeSortLabel": any;
"euiColumnSortingDraggable.removeSortLabel": any;
"euiColumnSortingDraggable.toggleLegend": any;
"euiColumnSorting.button": any;
"euiColumnSorting.buttonActive": any;
"euiColumnSorting.emptySorting": any;
"euiColumnSorting.pickFields": any;
"euiColumnSorting.sortFieldAriaLabel": any;
"euiColumnSorting.clearAll": any;
"euiDataGridCellButtons.expandButtonTitle": any;
"euiDataGridCell.row": any;
"euiDataGridCell.column": any;
"euiDataGridHeaderCell.headerActions": any;
"euiDataGridSchema.booleanSortTextAsc": any;
"euiDataGridSchema.booleanSortTextDesc": any;
"euiDataGridSchema.currencySortTextAsc": any;
"euiDataGridSchema.currencySortTextDesc": any;
"euiDataGridSchema.dateSortTextAsc": any;
"euiDataGridSchema.dateSortTextDesc": any;
"euiDataGridSchema.numberSortTextAsc": any;
"euiDataGridSchema.numberSortTextDesc": any;
"euiDataGridSchema.jsonSortTextAsc": any;
"euiDataGridSchema.jsonSortTextDesc": any;
"euiDataGrid.ariaLabelGridPagination": any;
"euiDataGrid.ariaLabelledByGridPagination": any;
"euiDataGrid.fullScreenButton": any;
"euiDataGrid.fullScreenButtonActive": any;
"euiDataGrid.ariaLabel": any;
"euiDataGrid.ariaLabelledBy": any;
"euiDataGrid.screenReaderNotice": any;
"euiStyleSelector.buttonText": any;
"euiStyleSelector.buttonLegend": any;
"euiStyleSelector.labelExpanded": any;
"euiStyleSelector.labelNormal": any;
"euiStyleSelector.labelCompact": any;
"euiRelativeTab.numberInputError": any;
"euiRelativeTab.numberInputLabel": any;
"euiRelativeTab.unitInputLabel": any;
"euiRelativeTab.roundingLabel": any;
"euiRelativeTab.relativeDate": any;
"euiRelativeTab.fullDescription": any;
"euiCommonlyUsedTimeRanges.legend": any;
"euiQuickSelect.legendText": any;
"euiQuickSelect.quickSelectTitle": any;
"euiQuickSelect.previousLabel": any;
"euiQuickSelect.nextLabel": any;
"euiQuickSelect.tenseLabel": any;
"euiQuickSelect.valueLabel": any;
"euiQuickSelect.unitLabel": any;
"euiQuickSelect.applyButton": any;
"euiQuickSelect.fullDescription": any;
"euiRecentlyUsed.legend": any;
"euiRefreshInterval.legend": any;
"euiRefreshInterval.start": any;
"euiRefreshInterval.stop": any;
"euiRefreshInterval.fullDescription": any;
"euiSuperDatePicker.showDatesButtonLabel": any;
"euiSuperUpdateButton.refreshButtonLabel": any;
"euiSuperUpdateButton.updatingButtonLabel": any;
"euiSuperUpdateButton.updateButtonLabel": any;
"euiSuperUpdateButton.cannotUpdateTooltip": any;
"euiSuperUpdateButton.clickToApplyTooltip": any;
"euiFilterButton.filterBadge": any;
"euiFlyout.closeAriaLabel": any;
"euiFieldPassword.showPassword": any;
"euiFieldPassword.maskPassword": any;
"euiFilePicker.clearSelectedFiles": any;
"euiFilePicker.filesSelected": any;
"euiFilePicker.removeSelected": any;
"euiFormControlLayoutClearButton.label": any;
"euiForm.addressFormErrors": any;
"euiSuperSelectControl.selectAnOption": any;
"euiSuperSelect.screenReaderAnnouncement": any;
"euiHeaderLinks.openNavigationMenu": any;
"euiHeaderLinks.appNavigation": any;
"euiImage.closeImage": any;
"euiImage.openImage": any;
"euiLink.external.ariaLabel": any;
"euiLink.newTarget.screenReaderOnlyText": any;
"euiPinnableListGroup.pinExtraActionLabel": any;
"euiPinnableListGroup.pinnedExtraActionLabel": any;
"euiMarkdownEditorFooter.uploadingFiles": any;
"euiMarkdownEditorFooter.openUploadModal": any;
"euiMarkdownEditorFooter.unsupportedFileType": any;
"euiMarkdownEditorFooter.supportedFileTypes": any;
"euiMarkdownEditorFooter.showSyntaxErrors": any;
"euiMarkdownEditorFooter.showMarkdownHelp": any;
"euiMarkdownEditorFooter.errorsTitle": any;
"euiMarkdownEditorFooter.syntaxTitle": any;
"euiMarkdownEditorFooter.descriptionPrefix": any;
"euiMarkdownEditorFooter.descriptionSuffix": any;
"euiMarkdownEditorFooter.closeButton": any;
"euiMarkdownEditorToolbar.editor": any;
"euiMarkdownEditorToolbar.previewMarkdown": any;
"euiModal.closeModal": any;
"euiNotificationEventMessages.accordionButtonText": any;
"euiNotificationEventMessages.accordionAriaLabelButtonText": any;
"euiNotificationEventMessages.accordionHideText": any;
"euiNotificationEventMeta.contextMenuButton": any;
"euiNotificationEventReadButton.markAsReadAria": any;
"euiNotificationEventReadButton.markAsUnreadAria": any;
"euiNotificationEventReadButton.markAsRead": any;
"euiNotificationEventReadButton.markAsUnread": any;
"euiNotificationEventReadIcon.readAria": any;
"euiNotificationEventReadIcon.unreadAria": any;
"euiNotificationEventReadIcon.read": any;
"euiNotificationEventReadIcon.unread": any;
"euiPaginationButton.longPageString": any;
"euiPaginationButton.shortPageString": any;
"euiPagination.previousPage": any;
"euiPagination.disabledPreviousPage": any;
"euiPagination.firstRangeAriaLabel": any;
"euiPagination.lastRangeAriaLabel": any;
"euiPagination.nextPage": any;
"euiPagination.disabledNextPage": any;
"euiPagination.pageOfTotalCompressed": any;
"euiPopover.screenReaderAnnouncement": any;
"euiProgress.valueText": any;
"euiResizableButton.horizontalResizerAriaLabel": any;
"euiResizableButton.verticalResizerAriaLabel": any;
"euiResizablePanel.toggleButtonAriaLabel": any;
"euiSelectableListItem.includedOption": any;
"euiSelectableListItem.includedOptionInstructions": any;
"euiSelectableListItem.excludedOption": any;
"euiSelectableListItem.excludedOptionInstructions": any;
"euiSelectableTemplateSitewide.searchPlaceholder": any;
"euiSelectableTemplateSitewide.loadingResults": any;
"euiSelectableTemplateSitewide.noResults": any;
"euiSelectableTemplateSitewide.onFocusBadgeGoTo": any;
"euiSelectable.loadingOptions": any;
"euiSelectable.noMatchingOptions": any;
"euiSelectable.noAvailableOptions": any;
"euiSelectable.placeholderName": any;
"euiStat.loadingText": any;
"euiStepStrings.step": any;
"euiStepStrings.simpleStep": any;
"euiStepStrings.complete": any;
"euiStepStrings.simpleComplete": any;
"euiStepStrings.warning": any;
"euiStepStrings.simpleWarning": any;
"euiStepStrings.errors": any;
"euiStepStrings.simpleErrors": any;
"euiStepStrings.incomplete": any;
"euiStepStrings.simpleIncomplete": any;
"euiStepStrings.disabled": any;
"euiStepStrings.simpleDisabled": any;
"euiStepStrings.loading": any;
"euiStepStrings.simpleLoading": any;
"euiTableSortMobile.sorting": any;
"euiTableHeaderCell.titleTextWithDesc": any;
"euiTablePagination.rowsPerPage": any;
"euiTablePagination.rowsPerPageOption": any;
"euiToast.dismissToast": any;
"euiToast.newNotification": any;
"euiToast.notification": any;
"euiTourStepIndicator.isActive": any;
"euiTourStepIndicator.isComplete": any;
"euiTourStepIndicator.isIncomplete": any;
"euiTourStepIndicator.ariaLabel": any;
"euiTourStep.endTour": any;
"euiTourStep.skipTour": any;
"euiTourStep.closeTour": any;
"euiTreeView.listNavigationInstructions": any;
"euiTreeView.ariaLabel": any;
  }
}
  