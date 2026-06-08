import type { Element, ElementContent, Root } from 'hast';

function createSection(children: ElementContent[]): Element {
  return { type: 'element', tagName: 'section', properties: {}, children };
}

// Groups the flat h2/paragraph stream MDX produces into <section>s — one
// per "## heading + its content" — as direct siblings, giving CSS a
// structural hook (.article > section) to space sections apart instead of
// relying on margins on the body text itself.
export function rehypeSectionizeWork() {
  return (tree: Root) => {
    const sections: Element[] = [];
    let current: Element | null = null;

    for (const node of tree.children) {
      const child = node as ElementContent;
      if (child.type === 'element' && child.tagName === 'h2') {
        current = createSection([child]);
        sections.push(current);
      } else if (current) {
        current.children.push(child);
      }
    }

    tree.children = sections;
  };
}
