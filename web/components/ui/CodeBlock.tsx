import React from 'react';

interface CodeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return <pre className="code-block">{children}</pre>;
}
