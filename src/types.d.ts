declare module 'sonner' {
  import * as React from 'react';
  export const Toaster: React.FC<Record<string, unknown>>;
}

declare module '@radix-ui/react-tooltip' {
  import * as React from 'react';
  export const Provider: React.FC<Record<string, unknown>>;
  export const Root: React.FC<Record<string, unknown>>;
  export const Trigger: React.FC<Record<string, unknown>>;
  export const Content: React.FC<Record<string, unknown>>;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}
