import React, { useEffect } from 'react';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import icons from '@paljs/icons';
import Spinner from '@paljs/ui/Spinner';
import SimpleLayout from '../Layouts/SimpleLayout';
import { MeQuery, MeQueryVariables, useMeQuery } from 'generated';
import { ApolloQueryResult } from '@apollo/client';
import { useRouter } from 'next/router';

interface ContextProps {
  me?: MeQuery['me'] | null;
  refetch?: (variables?: MeQueryVariables | undefined) => Promise<ApolloQueryResult<MeQuery>>;
  children?: React.ReactNode;
}

const initialContext: ContextProps = {};

export const LayoutContext: React.Context<ContextProps> = React.createContext(initialContext);

const LayoutPage: React.FC = () => {
  const { data: userData, loading, refetch } = useMeQuery();
  const router = useRouter();
  const authLayout = router.pathname.startsWith('/auth');

  useEffect(() => {
    if (!loading && !userData?.me && !authLayout) {
      router.push('/auth/login');
    } else if (authLayout && userData?.me && !loading) {
      router.push('/');
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
                  <LayoutColumn>Hi</LayoutColumn>
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
