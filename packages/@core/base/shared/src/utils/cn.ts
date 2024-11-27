import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/*
 twMerge 是一个用于合并 Tailwind CSS 类名的工具。
 它能够智能地合并重复的类名，尤其是 Tailwind 的某些类（如 text-red-500 和 text-red-600）在同一元素上使用时，
 twMerge 会根据优先级和覆盖规则来保持正确的类名组合。
 这个工具防止了 Tailwind CSS 类冲突和重复问题。
 */

function cn(...inputs: ClassValue[]) {
  /*
    clsx 是一个用于根据条件动态地构建类名的工具。它可以接受字符串、对象、数组等类型的输入，根据输入的条件生成类名。例如
    clsx('a', condition && 'b');  // 如果 condition 为 true，输出 'a b'，否则输出 'a'
  */
  return twMerge(clsx(inputs));
}

export { cn };

/**
 demo
 const buttonClass = cn('btn', 'btn-primary', condition && 'btn-disabled');
 如果 `condition` 为 true，按钮将会得到 'btn btn-primary btn-disabled' 类；
 如果 `condition` 为 false，按钮将只会得到 'btn btn-primary' 类。
 */
