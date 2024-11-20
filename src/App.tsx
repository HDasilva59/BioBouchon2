import React from 'react';
import { Leaf, Wine, RecycleIcon, ShieldCheck, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#faf6f1]">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#2c1810] to-[#4a2c1d]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 text-center px-4">
          <img 
            src="/bio-bouchon-logo.png" 
            alt="Bio Bouchon" 
            className="w-48 h-48 mx-auto mb-8"
          />
          <h1 className="text-5xl font-serif text-white mb-6">Bio Bouchon</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solutions écologiques pour l'industrie vinicole
          </p>
          <a href="#solutions">
            <button className="bg-[#c5a880] hover:bg-[#b39770] text-white px-8 py-3 rounded-full transition-all">
            Découvrir nos produits
          </button>
            </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 text-[#2c1810]">
            Pourquoi choisir Bio Bouchon?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Leaf className="w-8 h-8" />}
              title="100% Écologique"
              description="Bouchons biodégradables issus de forêts durables"
            />
            <FeatureCard 
              icon={<Wine className="w-8 h-8" />}
              title="Qualité Premium"
              description="Conservation optimale de vos vins les plus précieux"
            />
            <FeatureCard 
              icon={<RecycleIcon className="w-8 h-8" />}
              title="Circuit Responsable"
              description="Production locale et recyclage intégral"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-4 bg-[#f8f4ef]">
        <div className="max-w-6xl mx-auto" id='solutions'>
          <h2 className="text-3xl font-serif text-center mb-16 text-[#2c1810]">
            Nos Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <ProductCard 
              image="https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80"
              title="Bouchons Naturels"
              description="Qualité supérieure pour vos grands crus"
              price="À partir de €36/lot"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80"
              title="Bouchons Aglomérés"
              description="Innovation et performance"
              price="À partir de €25/lot"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white/80 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <p>info@biobouchon.fr</p>
            <p>+33 6 22 56 16 69</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">Adresse</h3>
            <p>41 Boulevard Vauban</p>
            <p>59800 Lille, France</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/hugo-da-silva-168ab2225/" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/hugo.dasilva59/" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center p-6 rounded-lg bg-[#faf6f1] hover:shadow-lg transition-shadow">
      <div className="inline-block p-3 bg-[#2c1810] text-white rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-3 text-[#2c1810]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProductCard({ image, title, description, price }: { image: string, title: string, description: string, price: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2 text-[#2c1810]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-[#c5a880] font-semibold">{price}</p>
        <button className="mt-4 bg-[#2c1810] text-white px-6 py-2 rounded-full hover:bg-[#3d241b] transition-colors">
          En savoir plus
        </button>
      </div>
    </div>
  );
}

export default App;