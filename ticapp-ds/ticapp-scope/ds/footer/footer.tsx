import React, { ReactNode } from 'react';
import './footer.scss';

export type FooterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  classCSS?:any;
};

export function Footer({ children, classCSS }: FooterProps) {
  return (
    <div className={classCSS}>
      {children}
    </div>
  );
}
