// test/(test)/layout.tsx
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children} {/* Make sure to render the children */}
    </>
  );
}
