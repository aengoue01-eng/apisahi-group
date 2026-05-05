const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.24.9-2.338 2.138-2.338h1.297c.516 0 .97.332 1.13.822l1.123 3.37a1.2 1.2 0 01-.275 1.24l-.88.88a9.054 9.054 0 004.952 4.952l.88-.88a1.2 1.2 0 011.24-.275l3.37 1.123c.49.16.822.614.822 1.13v1.297c0 1.238-1.1 2.138-2.338 2.138C8.306 19.95 4.05 15.694 2.25 6.338z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const INFO = [
  { label: 'Téléphone', value: '+225 XX XX XX XX XX', href: 'tel:+225XXXXXXXXXX', color: '#C9A84C', Icon: PhoneIcon },
  { label: 'WhatsApp', value: '+225 XX XX XX XX XX', href: 'https://wa.me/225XXXXXXXXXX', color: '#7A9E7E', Icon: WhatsAppIcon },
  { label: 'E-mail', value: 'contact@apisahigroup.com', href: 'mailto:contact@apisahigroup.com', color: '#C9A84C', Icon: MailIcon },
  { label: 'Adresse', value: 'Abidjan, Côte d\'ivoire', href: null, color: '#7A9E7E', Icon: LocationIcon },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-semibold text-noir text-xl mb-2">Nous contacter</h3>
        <div className="w-10 h-0.5 bg-gold mb-4" />
        <p className="text-gray-600 text-sm leading-relaxed">
          Notre équipe est à votre écoute pour vous accompagner et donner vie à vos envies avec professionnalisme, attention et réactivité.
        </p>
      </div>

      <div className="space-y-4">
        {INFO.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${item.color}18`, color: item.color }}
            >
              <item.Icon />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: item.color }}>
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="text-sm text-noir hover:text-gold transition-colors duration-200">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-noir">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-beige-dark">
        <p className="text-xs text-gray-400 italic">
          "Chez APISAHI Group, nous créons des expériences qui marquent, inspirent et transforment votre quotidien."
        </p>
      </div>
    </div>
  )
}
