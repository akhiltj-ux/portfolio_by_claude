import type { MDXComponents } from 'mdx/types';
import MdxHeading from './MdxHeading';
import MdxText from './MdxText';

export const mdxComponents: MDXComponents = {
  h2: MdxHeading,
  p: MdxText,
};
