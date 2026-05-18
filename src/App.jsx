import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import LoadingScreen from '@/components/ui/LoadingScreen'
import SenteursLoadingScreen from '@/components/senteurs/SenteursLoadingScreen'
import RituelLoadingScreen from '@/components/rituel/RituelLoadingScreen'
import ZeyaLoadingScreen from '@/components/zeya/ZeyaLoadingScreen'
import LalouLoadingScreen from '@/components/lalou/LalouLoadingScreen'

import HomePage from '@/pages/HomePage'
import GroupPage from '@/pages/GroupPage'
import UniversPage from '@/pages/UniversPage'
import OffersPage from '@/pages/OffersPage'
import GalleryPage from '@/pages/GalleryPage'
import ContactPage from '@/pages/ContactPage'
import SenteursPage from '@/pages/SenteursPage'
import RituelPage from '@/pages/RituelPage'
import ZeyaPage from '@/pages/ZeyaPage'
import LalouPage from '@/pages/LalouPage'

const STANDALONE_ROUTES = ['/senteurs', '/rituel', '/zeya', '/lalou']

function Layout() {
  const location = useLocation()
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname)
  const isSenteurs = location.pathname === '/senteurs'
  const isRituel = location.pathname === '/rituel'
  const isZeya = location.pathname === '/zeya'
  const isLalou = location.pathname === '/lalou'

  const LoadingComponent = isSenteurs
    ? SenteursLoadingScreen
    : isRituel
    ? RituelLoadingScreen
    : isZeya
    ? ZeyaLoadingScreen
    : isLalou
    ? LalouLoadingScreen
    : LoadingScreen

  return (
    <>
      <LoadingComponent />
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
          <Route path="/rituel" element={<RituelPage />} />
          <Route path="/zeya" element={<ZeyaPage />} />
          <Route path="/lalou" element={<LalouPage />} />
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
