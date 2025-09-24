declare module 'sonner' {
  import * as React from 'react';
  export const Toaster: React.FC<any>;
}

declare module '@radix-ui/react-tooltip' {
  import * as React from 'react';
  export const Provider: React.FC<any>;
  export const Root: React.FC<any>;
  export const Trigger: React.FC<any>;
  export const Content: React.FC<any>;
}
