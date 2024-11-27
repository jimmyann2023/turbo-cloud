import { cva, type VariantProps } from 'class-variance-authority';

/*
  创建的一个类名Variant(翻译成变体)函数。它封装了头像组件的类名，并支持通过 shape 和 size 属性来动态切换样式。
 */
export const avatarVariant = cva(
  // 初始类名 是头像组件的基础样式
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
  {
    variants: {
      // 控制头像的形状
      shape: {
        circle: 'rounded-full', // 圆形
        square: 'rounded-md', // 矩形 带小圆角
      },
      // 控制头像大小
      size: {
        base: 'h-16 w-16 text-2xl',
        lg: 'h-32 w-32 text-5xl',
        sm: 'h-10 w-10 text-xs',
      },
    },
  },
);

export type AvatarVariants = VariantProps<typeof avatarVariant>;
