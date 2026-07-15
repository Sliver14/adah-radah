import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#1b0d35] bg-foreground text-slate-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/adah-radah.png" alt="Adah Radah Company Logo" className="h-9 w-9 object-contain rounded-lg border border-slate-800" />
              <span className="font-bold text-white text-lg">
                Adah <span className="font-extralight text-white/85">Radah</span> <span className="text-secondary text-xs block font-normal -mt-1">Company</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              CAC-accredited business registration, trademark filing, and compliance for Nigerian entrepreneurs everywhere.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348069204009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/adaradah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/adaradah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Services</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/services/business-name-registration" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Business Name Registration
              </Link>
              <Link href="/services/limited-company-registration" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Company Incorporation (RC)
              </Link>
              <Link href="/services/trademark-registration" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Trademark Registration
              </Link>
            </div>
          </div>

          {/* Advisory Column */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Advisory</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Advisory Hub
              </Link>
              <Link href="/faqs" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Blog Articles
              </Link>
              <Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Free Templates
              </Link>
              <Link href="/business-plan" className="text-sm text-slate-400 hover:text-white transition-colors font-light">
                Business Plan Builder
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Contact</p>
            <div className="flex flex-col gap-2.5 text-sm text-slate-400">
              <a href="https://wa.me/2348069204009" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-light">
                WhatsApp Chat
              </a>
              <a href="tel:+2348069204009" className="hover:text-white transition-colors font-light">
                +234 806 920 4009
              </a>
              <a href="mailto:info@adaradah.com" className="hover:text-white transition-colors font-light">
                info@adaradah.com
              </a>
              <span className="block leading-relaxed font-light">
                3388 Guda Abdullahi Road, Off Zaria Road, Kano
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#1b0d35] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© 2026 Adah Radah Company · RC: 9269612 · CAC Agent: 5081957 · CAC-Accredited</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer >
  )
}
