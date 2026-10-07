import Link from 'next/link'
import { Dumbbell, Users, Gift, Share2, Package, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-slate-900/50 backdrop-blur-md border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-white">GymPro</span>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login" className="px-4 py-2 text-white hover:text-primary transition">
            Iniciar Sesión
          </Link>
          <Link href="/auth/register" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition">
            Registro
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Transforma tu <span className="text-primary">Experiencia en el Gimnasio</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl animate-fade-in">
          Gestiona membresías, gana recompensas, invita amigos y sigue tu progreso con nuestro sistema completo de entrenamiento
        </p>
        <div className="flex gap-4 flex-wrap justify-center animate-fade-in">
          <Link href="/auth/register" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition">
            Comenzar Gratis
          </Link>
          <Link href="#features" className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition">
            Conocer Más
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Características Principales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-primary transition">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gestión de Membresías</h3>
              <p className="text-slate-300">
                Múltiples planes para gimnasio, MMA, Muaytai, Jiu Jitsu y Kickboxing
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-primary transition">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sistema de Recompensas</h3>
              <p className="text-slate-300">
                Gana puntos de fidelización y canjéalos por descuentos y accesorios
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-primary transition">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Programa de Referidos</h3>
              <p className="text-slate-300">
                Invita amigos y gana recompensas exclusivas por cada invitación
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-primary transition">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tienda de Productos</h3>
              <p className="text-slate-300">
                Compra suplementos, ropa y accesorios con descuentos especiales
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-primary transition">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rutinas y Rachas</h3>
              <p className="text-slate-300">
                Sigue rutinas personalizadas y mantén tus rachas de entrenamiento
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-primary transition">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Comunidad</h3>
              <p className="text-slate-300">
                Conecta con otros miembros y comparte tu progreso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Gimnasio', 'MMA', 'Muaytai', 'Jiu Jitsu', 'Kickboxing'].map((service) => (
              <div key={service} className="bg-primary/20 border border-primary rounded-lg p-6 text-center hover:bg-primary/30 transition">
                <h3 className="text-xl font-bold text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 px-6 py-8 text-center text-slate-400">
        <p>&copy; 2024 GymPro. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
