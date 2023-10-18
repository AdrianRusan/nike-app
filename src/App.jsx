import { Hero } from './sections'
import Nav from './components/Nav'
import React, { Suspense } from 'react'

const PopularProducts = React.lazy(() => import('./sections/PopularProducts'))
const SuperQuality = React.lazy(() => import('./sections/SuperQuality'))
const Services = React.lazy(() => import('./sections/Services'))
const SpecialOffer = React.lazy(() => import('./sections/SpecialOffer'))
const CustomerReviews = React.lazy(() => import('./sections/CustomerReviews'))
const Subscribe = React.lazy(() => import('./sections/Subscribe'))
const Footer = React.lazy(() => import('./sections/Footer'))

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
			<Suspense fallback={<div>Loading</div>}>
				<PopularProducts />
			</Suspense>    
    </section>
    <section className="padding">
			<Suspense fallback={<div>Loading</div>}>
				<SuperQuality />
			</Suspense> 
    </section>
    <section className="padding-x py-10">
			<Suspense fallback={<div>Loading</div>}>
				<Services />
			</Suspense> 
    </section>
    <section className="padding">
			<Suspense fallback={<div>Loading</div>}>
				<SpecialOffer />
			</Suspense> 
    </section>
    <section className="bg-pale-blue padding">
			<Suspense fallback={<div>Loading</div>}>
				<CustomerReviews />
			</Suspense> 
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
			<Suspense fallback={<div>Loading</div>}>
				<Subscribe />
			</Suspense>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
			<Suspense fallback={<div>Loading</div>}>
				<Footer />
			</Suspense> 
    </section>
  </main>
)

export default App