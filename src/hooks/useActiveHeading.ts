import React from 'react';

export function useActiveHeading(contentElement: Element | null) {
  const [heading, setHeading] = React.useState<string | undefined>(undefined);

  const headings: NodeListOf<HTMLElement> | null = React.useMemo(
    () => contentElement && contentElement.querySelectorAll<HTMLElement>('.heading-anchor'),
    [contentElement],
  );

  const handler = React.useCallback(
    // throttle(
    () => {
      if (!headings) {
        return;
      }

      for (let i = 0; i < headings.length; i++) {
        if (headings[i].offsetTop > window.scrollY) {
          const newHeading = i === 0 ? undefined : headings[i - 1].getAttribute('id') || undefined;
          setHeading(newHeading);
          return;
        }
      }
    },
    [headings],
  );

  React.useEffect(() => {
    if (typeof window === 'undefined' || !headings || !headings.length) {
      return undefined;
    }

    window.addEventListener('scroll', handler, {
      capture: false,
    });

    handler();

    return () => window.removeEventListener('scroll', handler);
  }, [handler]);

  return heading;
}
