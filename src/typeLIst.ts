/**
 * TypeScriptの拡張子
 * ts: 通常のTypeScriptの拡張子
 * tsx: Reactの.jsxをサポートした拡張子
 */

/**
 * TypeScriptの基本の型
 * const/let 変数: 型 = 値;
 */

//boolean true/false
let bool: boolean = true;

//number 数値
let num: number = 0;

//string 文字列
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any 全ての型を変数に格納できる(なるべく使わない)
let any1: any = false;

//void 戻り値なし(returnが書かれていないなら:voidを省略できる)
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object(あまり使わない)
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
