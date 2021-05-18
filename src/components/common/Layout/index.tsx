import React from 'react'
export function Layout({ children }: { children: React.ReactNode }) {
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
