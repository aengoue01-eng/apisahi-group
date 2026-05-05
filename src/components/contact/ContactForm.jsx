import { useState } from 'react'
import toast from 'react-hot-toast'
import { SUBSIDIARIES } from '@/constants/subsidiaries'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  privacy: false,
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Veuillez indiquer votre nom.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresse e-mail invalide.'
    if (!form.message.trim()) e.message = 'Veuillez saisir votre message.'
    if (!form.privacy) e.privacy = 'Veuillez accepter la politique de confidentialité.'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setForm(INITIAL)
      setErrors({})
      toast.success('Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 48h.', {
        duration: 5000,
        icon: '✅',
      })
    }, 1200)
  }

  const field = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
  }

  const inputClass = (name) =>
    `w-full px-4 py-3 border rounded-sm text-sm outline-none transition-colors duration-200
     focus:border-gold bg-white
     ${errors[name] ? 'border-red-400' : 'border-gray-200'}`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-noir mb-1.5">Nom complet *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => field('name', e.target.value)}
            className={inputClass('name')}
            placeholder="Jean Dupont"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-noir mb-1.5">Adresse e-mail *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => field('email', e.target.value)}
            className={inputClass('email')}
            placeholder="jean@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-noir mb-1.5">Téléphone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => field('phone', e.target.value)}
            className={inputClass('phone')}
            placeholder="+225 00 00 00 00 00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-noir mb-1.5">Service souhaité</label>
          <select
            value={form.service}
            onChange={(e) => field('service', e.target.value)}
            className={`${inputClass('service')} cursor-pointer`}
          >
            <option value="">Choisir un service</option>
            {SUBSIDIARIES.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-noir mb-1.5">Message *</label>
        <textarea
          value={form.message}
          onChange={(e) => field('message', e.target.value)}
          className={`${inputClass('message')} resize-none`}
          rows={5}
          placeholder="Décrivez votre projet ou votre demande..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => field('privacy', e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
          />
          <span className="text-sm text-gray-600">
            J'accepte la politique de confidentialité et le traitement de mes données personnelles.
          </span>
        </label>
        {errors.privacy && <p className="mt-1 text-xs text-red-500">{errors.privacy}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Envoi en cours...
          </>
        ) : 'Envoyer le message'}
      </button>
    </form>
  )
}
