import React from 'react'

const Vision = () => {
  return (
    <section className="pt-10 pb-20 px-4 bg-background/50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white font-playfair">
      Our Vision
    </h2>

    <div className="glass-effect rounded-xl p-8 sm:p-12 space-y-12">
      <p className="text-xl sm:text-2xl text-white text-center font-playfair leading-relaxed">
        To become the No.1 Personal Branding Company in India by building a community-driven creative ecosystem powered by videographers, editors, and storytellers across Kerala.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-effect p-6 rounded-lg border border-white/20 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-white text-center">
            Build value-driven personal brands
          </h3>
        </div>

        <div className="glass-effect p-6 rounded-lg border border-white/20 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-white text-center">
            Create career opportunities for young creators
          </h3>
        </div>

        <div className="glass-effect p-6 rounded-lg border border-white/20 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-white text-center">
            Become the go-to brand for digital growth
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Vision