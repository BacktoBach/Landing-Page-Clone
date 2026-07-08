export default function Stats() {
  const statData = [
    { number: "50M+", label: "Events tracked daily" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "2,400+", label: "Teams worldwide" },
    { number: "<50ms", label: "Query response time" },
  ]

  return (
    <section className="bg-[#121115] py-16 sm:py-20 border-b border-gray-900/20">
      <div className="container mx-auto px-6 lg:px-24">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-12 text-center">
          {statData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center space-y-2 group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {item.number}
              </div>
              <div className="text-[11px] sm:text-sm font-light text-gray-500 tracking-wide uppercase px-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}