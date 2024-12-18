"use client";

import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

export async function getSetverSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destinantion: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as : {user?.email}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout!</button>
    </>
  )
}
