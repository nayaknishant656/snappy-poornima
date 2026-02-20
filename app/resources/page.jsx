import React, { Suspense } from 'react'
import Resources from "../../components/feature/resoruces/resourcemain"
export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Resources />
    </Suspense>
  )
}
