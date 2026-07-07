export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121115] border-t border-gray-900/60 py-10">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col space-y-6">
        
        {/* Top Minimal Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-medium text-gray-500">
          <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
          <span className="w-1 h-1 bg-gray-800 rounded-full hidden sm:inline"></span>
          <a href="#pricing" className="hover:text-gray-300 transition-colors">Pricing</a>
          <span className="w-1 h-1 bg-gray-800 rounded-full hidden sm:inline"></span>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">Documentation</a>
          <span className="w-1 h-1 bg-gray-800 rounded-full hidden sm:inline"></span>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">Blog</a>
          <span className="w-1 h-1 bg-gray-800 rounded-full hidden sm:inline"></span>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">Partners</a>
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-gray-900/40 w-full"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-600">
          <div>
            Copyright © {currentYear} Quantix. Design: <span className="text-[#ff5a5f]/80 font-medium">TemplateMo</span>
          </div>
          
          {/* Socials & Legal Docs */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-gray-500">
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.01-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-500">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">Privacy</a>
              <span className="w-[1px] h-3 bg-gray-800"></span>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}