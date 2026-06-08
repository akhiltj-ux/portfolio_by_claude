import type { MDXComponents } from 'mdx/types';
import { MdxHeading, MdxBody } from './MdxElements';

export const mdxComponents: MDXComponents = {
  h2: MdxHeading,
  p: MdxBody,
};
