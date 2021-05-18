import React from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
  // -Navbar
  // -Footer
  // -Modal
  // -SideBar
  // -FeatureBar
  return (
    <div>
      Layout
      <main>{children}</main>
    </div>
  )
}
