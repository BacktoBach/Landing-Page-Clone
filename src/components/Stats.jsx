import { useRef } from 'react'
import { useCountUp } from 'react-countup'

function StatNumber({ value, decimals = 0, prefix = '', suffix = '', separator = '' }) {
  const countUpRef = useRef(null)

  useCountUp({
    ref: countUpRef,
    end: value,
    duration: 2.2,
    decimals,
    prefix,
    suffix,
    separator,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })

  return <span ref={countUpRef}>{prefix}0{suffix}</span>
}

export default function Stats() {
  const statData = [
    { value: 50, suffix: 'M+', label: 'Events tracked daily' },
    { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime SLA' },
    { value: 2400, suffix: '+', separator: ',', label: 'Teams worldwide' },
    { value: 50, prefix: '<', suffix: 'ms', label: 'Query response time' },
  ]

  return (
    <section className="bg-[#121115] py-16 sm:py-20 border-b border-gray-900/20" data-aos="fade-up">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-12 text-center">
          {statData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center space-y-2 group transition-transform duration-300 hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                <StatNumber
                  value={item.value}
                  decimals={item.decimals}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  separator={item.separator}
                />
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
