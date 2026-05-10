import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import LoadingScreen from '@/components/ui/LoadingScreen'
import SenteursLoadingScreen from '@/components/senteurs/SenteursLoadingScreen'

import HomePage from '@/pages/HomePage'
import GroupPage from '@/pages/GroupPage'
import UniversPage from '@/pages/UniversPage'
import OffersPage from '@/pages/OffersPage'
import GalleryPage from '@/pages/GalleryPage'
import ContactPage from '@/pages/ContactPage'
import SenteursPage from '@/pages/SenteursPage'

const STANDALONE_ROUTES = ['/senteurs']

function Layout() {
  const location = useLocation()
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname)

  return (
    <>
      {isStandalone ? <SenteursLoadingScreen /> : <LoadingScreen />}
      <ScrollToTop />
      {!isStandalone && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/groupe" element={<GroupPage />} />
          <Route path="/univers" element={<UniversPage />} />
          <Route path="/offres" element={<OffersPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/senteurs" element={<SenteursPage />} />
        </Routes>
      </AnimatePresence>
      {!isStandalone && <Footer />}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#F5F0E8',
            borderRadius: '4px',
            border: '1px solid #C9A84C',
          },
          success: {
            iconTheme: { primary: '#C9A84C', secondary: '#1A1A1A' },
          },
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
