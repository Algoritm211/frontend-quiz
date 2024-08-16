import React from 'react';

import { Icon } from '@/shared/components';

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <Icon name="footer-stub" className="w-9 h-9 fill-current" />
        <p>Frontend Quiz, Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};
