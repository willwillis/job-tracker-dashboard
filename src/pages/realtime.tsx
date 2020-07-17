import React, { useEffect, useRef, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from '../Layouts/themes';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import { SidebarRefObject, Sidebar, SidebarBody } from '@paljs/ui/Sidebar';
import icons from '@paljs/icons';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import Spinner from '@paljs/ui/Spinner';
import Header from '../Layouts/Header';
import SimpleLayout from '../Layouts/SimpleLayout';
import menuItems from '../Layouts/menuItem';
import { MeQuery, MeQueryVariables, useMeQuery } from 'generated';
import { ApolloQueryResult } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ContextProps {
  me?: MeQuery['me'] | null;
  refetch?: (variables?: MeQueryVariables | undefined) => Promise<ApolloQueryResult<MeQuery>>;
  children?: React.ReactNode;
}

const initialContext: ContextProps = {};

export const LayoutContext: React.Context<ContextProps> = React.createContext(initialContext);

const LayoutPage: React.FC = ({ children }) => {
  const { data: userData, loading, refetch } = useMeQuery();
  const router = useRouter();
  const authLayout = router.pathname.startsWith('/admin/auth');

  useEffect(() => {
    if (!loading && !userData?.me && !authLayout) {
      router.push('/admin/auth/login');
    } else if (authLayout && userData?.me && !loading) {
      router.push('/admin');
    }
  }, [loading, userData]);

  return (
    <>
      {loading ? (
        <Spinner size="Giant" status="Primary" />
      ) : (
        <LayoutContext.Provider
          value={{
            me: userData?.me,
            refetch,
          }}
        >
          <SimpleLayout />
          <Layout evaIcons={icons} className={authLayout ? 'auth-layout' : ''}>
            <LayoutContainer>
              <LayoutContent>
                <LayoutColumns>
                  <LayoutColumn>{userData}</LayoutColumn>
                </LayoutColumns>
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </LayoutContext.Provider>
      )}
    </>
  );
};

export default LayoutPage;
