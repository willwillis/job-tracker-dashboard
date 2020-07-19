import React from 'react';
import { DashBoard } from 'Components/DashBoard';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  return <DashBoard id={parseInt(router.query.id as string)} />;
}
