/**
 * @fileoverview 按钮组件的样式变体配置文件
 * 使用 class-variance-authority 来管理按钮的样式变体
 */

import { cva } from 'class-variance-authority';

/**
 * 按钮的样式变体配置
 * @const buttonVariants
 * @description 定义按钮的基础样式和各种变体样式
 *
 * 基础样式包括：
 * - 弹性布局
 * - 圆角边框
 * - 文本样式
 * - 过渡效果
 * - 焦点状态
 * - 禁用状态
 */
// :class="cn(buttonVariants({ variant, size }), props.class)"
// 1.根据传入的 variant 和 size 属性动态生成对应的样式类 2.支持自定义类名覆盖（通过 props.class）
export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed  disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      /**
       * 按钮尺寸变体
       * @property {object} size
       * @param {string} default - 默认尺寸 (h-9 px-4 py-2)
       * @param {string} icon - 图标按钮尺寸 (h-8 w-8)
       * @param {string} lg - 大尺寸 (h-10 px-8)
       * @param {string} sm - 小尺寸 (h-8 px-3)
       * @param {string} xs - 超小尺寸 (h-8 w-8)
       */
      size: {
        default: 'h-9 px-4 py-2',
        icon: 'h-8 w-8 rounded-sm px-1 text-lg',
        lg: 'h-10 rounded-md px-8',
        sm: 'h-8 rounded-md px-3 text-xs',
        xs: 'h-8 w-8 rounded-sm px-1 text-xs',
      },
      /**
       * 按钮样式变体
       * @property {object} variant
       * @param {string} default - 主要按钮样式
       * @param {string} destructive - 危险操作按钮样式
       * @param {string} ghost - 幽灵按钮样式
       * @param {string} heavy - 重要按钮样式
       * @param {string} icon - 图标按钮样式
       * @param {string} link - 链接按钮样式
       * @param {string} outline - 轮廓按钮样式
       * @param {string} secondary - 次要按钮样式
       */
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-hover',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        heavy: 'hover:bg-heavy hover:text-heavy-foreground',
        icon: 'hover:bg-accent hover:text-accent-foreground text-foreground/80',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      },
    },
  },
);
