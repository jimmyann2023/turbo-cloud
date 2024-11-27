import type { AsTag } from 'radix-vue';

import type { ButtonVariants, ButtonVariantSize } from '../../ui';

import type { Component } from 'vue';

export interface VButtonProps {
  /**
   * The element or component this component should render as. Can be overwrite by `asChild`
   * 该组件应呈现为的元素或组件。可以被 `asChild` 覆盖
   * @defaultValue "div"
   */
  as?: AsTag | Component;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * 更改作为子级传递的元素的默认渲染元素，合并它们的 props 和行为
   * Read our [Composition](https://www.radix-vue.com/guides/composition.html) guide for more details.
   */
  asChild?: boolean;
  class?: any;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonVariantSize;
  variant?: ButtonVariants;
}
