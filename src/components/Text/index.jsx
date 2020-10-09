import React from 'react';
import { FunA } from './FunA';
import TestNo from './TestNo';

/**
 * @param {'red'|"black"|'grey'} props.type  可选项
 * @param {'xs'|'md'|'xd'} props.size 可选项
 */

 const Text = ({ type, size }) => {
  return (
    <div>
      <TestNo name type></TestNo>
      <FunA a="1" b="">
      </FunA>
      {type}
      {size}
    </div>
  );
};
export {Text}
const add = (a, b) => {
  return a + b;
};

const c = add(1, 0);
console.log('c', c);
