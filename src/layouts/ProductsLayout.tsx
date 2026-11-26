import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Breadcrumbs } from '@/shared/components';
import { BreadcrumbProvider } from '@/shared/context/BreadcrumbContext';

import styles from './ProductsLayout.module.scss';

export const ProductsLayout = () => {
  const location = useLocation();

  const preserveScroll = (location.state as { preserveScroll?: boolean } | null)
    ?.preserveScroll;

  useEffect(() => {
    if (preserveScroll) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname, preserveScroll]);

  return (
    <BreadcrumbProvider>
      <Breadcrumbs />

      <section className={styles.body}>
        <Outlet />
      </section>
    </BreadcrumbProvider>
  );
};
