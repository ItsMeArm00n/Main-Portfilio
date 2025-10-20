"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, Users, FileText, Trophy, Calendar, Shield } from "lucide-react"

function HackathonContent() {
  const { t } = useLanguage()

  const linkButtons = [
    {
      title: "DESAFIA",
      url: "https://desafia.tech",
      icon: <ExternalLink size={20} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "SaltaDev",
      url: "https://salta.dev.ar/",
      icon: <ExternalLink size={20} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Grupo WhatsApp",
      url: "https://chat.whatsapp.com/BYj9i3LBxryCpcq84IPINl",
      icon: <Users size={20} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Discord",
      url: "https://discord.gg/kqzWbStGQ6",
      icon: <Users size={20} />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Formulario de Inscripción",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSejnuzx6-63LW2VKjtmF-qnVhhlShNd-mJWWqGr4tqrBwsYfg/viewform",
      icon: <FileText size={20} />,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* YouTube Video */}
              <div className="w-full max-w-3xl mx-auto mb-12">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/cvK1kWxeYgI"
                    title="Hackathon del Milagro Video"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Hackathon del Milagro
                </h1>
                <p className="text-xl md:text-2xl text-white/80">DESAFIA x SaltaDev</p>
              </div>

              {/* Prize Banner */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Trophy className="text-yellow-400" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Premios: +$100.000 pesos</h2>
                </div>
                <p className="text-white/80">
                  Crea una app para ayudar a encontrar mascotas perdidas y gana increíbles premios
                </p>
              </div>

              {/* Sponsors & Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white/90">💎 SPONSORS & ENLACES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {linkButtons.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden rounded-xl p-6 glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} text-white`}>{link.icon}</div>
                        <span className="font-semibold text-white group-hover:text-white/90 transition-colors">
                          {link.title}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Key Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="glass rounded-xl p-6 border border-white/10">
                  <Calendar className="text-blue-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">Entrega Final</h4>
                  <p className="text-white/80">10/09 (23:59 ART)</p>
                </div>
                <div className="glass rounded-xl p-6 border border-white/10">
                  <Users className="text-green-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">Equipos</h4>
                  <p className="text-white/80">Individual o hasta 3 integrantes</p>
                </div>
                <div className="glass rounded-xl p-6 border border-white/10">
                  <Shield className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">Tema</h4>
                  <p className="text-white/80">App para mascotas perdidas</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeWrapper>

        {/* Detailed Rules Section */}
        <ScrollFadeWrapper delay={200}>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📜 Bases & Condiciones
              </h2>

              <div className="space-y-8">
                {/* Eligibility */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">👥 Elegibilidad</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Abierto a personas individuales o equipos de hasta 3 integrantes</li>
                    <li>
                      • <strong>13 a 17 años</strong>: pueden participar y cobrar a su propio CBU/Alias
                    </li>
                    <li>
                      • <strong>Menores de 13</strong>: pueden participar, pero el cobro se realizará a través de un
                      tutor legal
                    </li>
                    <li>• Staff/jurado y familiares directos no pueden participar</li>
                  </ul>
                </div>

                {/* Fair Play */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">🎮 Fair Play & Originalidad</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>
                      • Se permite usar <strong>IA, plantillas y boilerplates</strong>, siempre que se declare en el
                      README
                    </li>
                    <li>
                      • <strong>NO se permite</strong> reutilizar código propio
                    </li>
                    <li>• Prohibido: plagio sin atribución, software pirateado, scraping sin consentimiento</li>
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">📦 Entregables Obligatorios</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>
                      • App <strong>deployada y accesible públicamente</strong> (Vercel, Netlify, etc.)
                    </li>
                    <li>• Repositorio público con README claro</li>
                    <li>• Pitch en video (máx. 3 min, en español, con cara visible)</li>
                    <li>• Un único formulario de entrega por equipo</li>
                  </ul>
                </div>

                {/* Functional Requirements */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">🐾 Requisitos Funcionales Mínimos</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>
                      • Publicar aviso de animal perdido/encontrado con foto(s), descripción, especie, zona y contacto
                    </li>
                    <li>
                      • Permitir <strong>búsqueda y filtros</strong> por zona, especie, fecha y estado
                    </li>
                    <li>
                      • Funcionalidad de <strong>marcar como resuelto</strong>
                    </li>
                    <li>
                      • Sistema básico de <strong>moderación</strong>: botón "Reportar" y lógica antispam
                    </li>
                    <li>
                      • Diseño <strong>mobile-first</strong> y carga rápida
                    </li>
                    <li>
                      • <strong>Privacidad por defecto</strong>: evitar domicilios exactos, placas o rostros de menores
                    </li>
                  </ul>
                </div>

                {/* Evaluation Criteria */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">🏆 Criterios de Evaluación</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Usabilidad</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Impacto social & claridad</span>
                        <span className="font-bold">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Creatividad & innovación</span>
                        <span className="font-bold">20%</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Calidad técnica</span>
                        <span className="font-bold">15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Presentación</span>
                        <span className="font-bold">10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voting */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">🗳️ Votación & Evaluación</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>
                      • Sistema de evaluación: <strong>40% votos populares + 60% jurado</strong>
                    </li>
                    <li>• Un voto por persona en el canal oficial de Discord</li>
                    <li>• Picos anómalos de votos serán auditados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeWrapper>
      </main>

      <Footer />
    </div>
  )
}

export default function HackathonPage() {
  return <HackathonContent />
}
