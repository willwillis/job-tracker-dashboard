import React, { useEffect, useRef, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from './themes';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import { SidebarRefObject, Sidebar, SidebarBody } from '@paljs/ui/Sidebar';
import icons from '@paljs/icons';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import Spinner from '@paljs/ui/Spinner';
import Header from './Header';
import SimpleLayout from './SimpleLayout';
import menuItems from './menuItem';
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
  const [theme, setTheme] = useState<DefaultTheme['name']>('corporate');
  const sidebarRef = useRef<SidebarRefObject>(null);
  const menuRef = useRef<MenuRefObject>(null);
  const { data: userData, loading, refetch } = useMeQuery();
  const router = useRouter();

  const changeTheme = (newTheme: DefaultTheme['name']) => {
    setTheme(newTheme);
  };

  const authLayout = router.pathname.startsWith('/auth');

  useEffect(() => {
    if (!loading && !userData?.me && !authLayout && router.pathname !== '/') {
      router.push('/auth/login');
    } else if (authLayout && userData?.me && !loading) {
      router.push('/');
    }
  }, [loading, userData]);

  return (
    <ThemeProvider theme={themes(theme)}>
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
            {!authLayout && (
              <Header theme={theme} changeTheme={changeTheme} toggleSidebar={() => sidebarRef.current?.toggle()} />
            )}
            <LayoutContainer>
              {!authLayout && userData?.me && userData.me.isAdmin && (
                <Sidebar ref={sidebarRef} property="start" containerFixed responsive className="menu-sidebar">
                  <SidebarBody>
                    <Menu
                      nextJs
                      className="sidebar-menu"
                      Link={Link}
                      ref={menuRef}
                      items={menuItems}
                      currentPath={router.pathname}
                      toggleSidebar={() => sidebarRef.current?.hide()}
                    />

                    {/* <SelectStyled
                      isSearchable={false}
                      shape="SemiRound"
                      placeholder="Themes"
                      value={themeOptions.find((item) => item.value === props.theme)}
                      options={themeOptions}
                      onChange={({ value }: { value: DefaultTheme['name'] }) => props.changeTheme(value)}
                    /> */}
                  </SidebarBody>
                </Sidebar>
              )}
              <LayoutContent>
                <LayoutColumns>
                  <LayoutColumn className="main-content">{children}</LayoutColumn>
                </LayoutColumns>
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </LayoutContext.Provider>
      )}
    </ThemeProvider>
  );
};

export default LayoutPage;
