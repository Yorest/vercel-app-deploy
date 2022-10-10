import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function index({}) {
  return (
    <MainLayout>
      <h2>Pricing page</h2>
      <h1 className=".title">
        Ir <Link href="/">Home</Link>
      </h1>

      <p className=".description">
        Get started by editing
        <code className=".code">pages/princing/index.jsx</code>
      </p>
    </MainLayout>
  )
}
