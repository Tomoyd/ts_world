// import { isJSDoc } from 'typescript';
import React from 'react';
/**
 *@param {object} props
 * @param {number} [props.a=1]
 * @param {...*} [props.rest]
 */
export function FunA  ({
  a, // tfyuft
  b,
  ...rest}) {
    console.log()
  return <div>{ a+b}</div>
}




