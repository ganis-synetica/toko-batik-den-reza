import { useState } from 'react'

// Product data
const products = {
  batik: [
    { id: 1, name: 'Kemeja Batik Parang Rusak', price: 'Rp 350.000', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Kemeja' },
    { id: 2, name: 'Dress Batik Kawung', price: 'Rp 425.000', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop', category: 'Dress' },
    { id: 3, name: 'Blouse Batik Truntum', price: 'Rp 275.000', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop', category: 'Blouse' },
    { id: 4, name: 'Kemeja Batik Sido Mukti', price: 'Rp 385.000', image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=500&fit=crop', category: 'Kemeja' },
    { id: 5, name: 'Kain Batik Tulis Jogja', price: 'Rp 750.000', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=500&fit=crop', category: 'Kain' },
    { id: 6, name: 'Sarung Batik Premium', price: 'Rp 450.000', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop', category: 'Sarung' },
  ],
  tas: [
    { id: 7, name: 'Tas Kulit Batik Kombinasi', price: 'Rp 525.000', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Tas' },
    { id: 8, name: 'Clutch Batik Elegan', price: 'Rp 185.000', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop', category: 'Clutch' },
    { id: 9, name: 'Tote Bag Batik Canvas', price: 'Rp 225.000', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=500&fit=crop', category: 'Tote' },
  ],
  aksesoris: [
    { id: 10, name: 'Sandal Batik Kulit', price: 'Rp 275.000', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=500&fit=crop', category: 'Sandal' },
    { id: 11, name: 'Dompet Batik Pria', price: 'Rp 165.000', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop', category: 'Dompet' },
    { id: 12, name: 'Ikat Pinggang Batik', price: 'Rp 145.000', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop', category: 'Aksesoris' },
    { id: 13, name: 'Selendang Batik Sutra', price: 'Rp 325.000', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop', category: 'Selendang' },
    { id: 14, name: 'Kipas Batik Kayu', price: 'Rp 85.000', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop', category: 'Souvenir' },
  ]
}

function App() {
  const [activeCategory, setActiveCategory] = useState('semua')

  const allProducts = [...products.batik, ...products.tas, ...products.aksesoris]
  
  const filteredProducts = activeCategory === 'semua' 
    ? allProducts 
    : activeCategory === 'batik' 
      ? products.batik 
      : activeCategory === 'tas' 
        ? products.tas 
        : products.aksesoris

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wide">Den Reza Laras</h1>
              <p className="text-amber-200 text-sm">Batik & Kerajinan Khas Jogja</p>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm">
              <a href="#beranda" className="hover:text-amber-300 transition">Beranda</a>
              <a href="#produk" className="hover:text-amber-300 transition">Produk</a>
              <a href="#tentang" className="hover:text-amber-300 transition">Tentang</a>
              <a href="#kontak" className="hover:text-amber-300 transition">Kontak</a>
            </nav>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-600/30 text-amber-200 px-4 py-1 rounded-full text-sm mb-6">
                ✨ Kerajinan Asli Yogyakarta
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Toko Batik<br />
                <span className="text-amber-400">Den Reza Laras</span>
              </h2>
              <p className="text-amber-100 text-lg mb-8 leading-relaxed">
                Menyediakan batik tulis dan cap berkualitas tinggi, tas, sandal, 
                dan pernak-pernik khas Jogja. Dibuat dengan cinta oleh pengrajin lokal.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#produk" 
                  className="bg-amber-500 hover:bg-amber-600 text-amber-950 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Lihat Koleksi
                </a>
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank"
                  className="border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-amber-950 px-8 py-3 rounded-full font-semibold transition"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop" 
                alt="Batik Jogja"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&h=400&fit=crop" 
                alt="Kain Batik"
                className="rounded-2xl shadow-2xl mt-8 transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🎨', title: 'Batik Asli', desc: '100% buatan tangan pengrajin Jogja' },
              { icon: '🚚', title: 'Pengiriman', desc: 'Kirim ke seluruh Indonesia' },
              { icon: '💯', title: 'Kualitas', desc: 'Bahan premium, jahitan rapi' },
              { icon: '💬', title: 'Konsultasi', desc: 'Gratis konsultasi via WhatsApp' },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium">Koleksi Kami</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mt-2">Produk Unggulan</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Temukan keindahan batik dan kerajinan khas Yogyakarta. Setiap produk dibuat dengan ketelitian 
              dan cinta oleh pengrajin berpengalaman.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'semua', label: 'Semua Produk' },
              { id: 'batik', label: 'Batik & Pakaian' },
              { id: 'tas', label: 'Tas' },
              { id: 'aksesoris', label: 'Aksesoris' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeCategory === cat.id 
                    ? 'bg-amber-800 text-white' 
                    : 'bg-white text-amber-800 hover:bg-amber-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-amber-950 text-xs px-3 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-amber-900 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-amber-600 font-bold">{product.price}</p>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${product.name}`}
                    target="_blank"
                    className="mt-3 block w-full bg-amber-100 hover:bg-amber-800 hover:text-white text-amber-800 text-center py-2 rounded-lg font-medium transition"
                  >
                    Pesan via WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop" 
                alt="Proses Membatik"
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=500&fit=crop" 
                alt="Koleksi Batik"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div>
              <span className="text-amber-600 font-medium">Tentang Kami</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mt-2 mb-6">
                Warisan Budaya dalam Setiap Helai
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Toko Batik Den Reza Laras</strong> didirikan dengan semangat melestarikan 
                warisan budaya Yogyakarta. Kami bekerja sama langsung dengan pengrajin batik 
                berpengalaman untuk menghadirkan produk berkualitas tinggi dengan harga terjangkau.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Setiap motif batik yang kami jual memiliki makna filosofis mendalam, 
                mulai dari Parang Rusak, Kawung, Truntum, hingga Sido Mukti. Kami juga menyediakan 
                tas, sandal, dan aksesoris khas Jogja yang cocok untuk oleh-oleh atau koleksi pribadi.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-gray-500 text-sm">Produk Tersedia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">10K+</div>
                  <div className="text-gray-500 text-sm">Pelanggan Puas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-gray-500 text-sm">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Tertarik dengan Koleksi Kami?
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Hubungi kami via WhatsApp untuk konsultasi gratis, pemesanan, atau kunjungi langsung toko kami di Yogyakarta.
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang produk batik" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat via WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium">Hubungi Kami</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mt-2">Lokasi & Kontak</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Alamat Toko</h3>
              <p className="text-gray-600">Jl. Malioboro No. 123<br />Yogyakarta 55271</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Telepon / WhatsApp</h3>
              <p className="text-gray-600">+62 812-3456-7890<br />+62 274-123456</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Jam Operasional</h3>
              <p className="text-gray-600">Senin - Sabtu: 09.00 - 21.00<br />Minggu: 10.00 - 18.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Den Reza Laras</h3>
              <p className="text-amber-200 mb-4">
                Toko batik dan kerajinan khas Yogyakarta. Menyediakan produk berkualitas dengan harga terjangkau.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition">
                  <span>📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition">
                  <span>📸</span>
                </a>
                <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition">
                  <span>🎵</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kategori</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition">Batik Tulis</a></li>
                <li><a href="#" className="hover:text-white transition">Batik Cap</a></li>
                <li><a href="#" className="hover:text-white transition">Tas & Clutch</a></li>
                <li><a href="#" className="hover:text-white transition">Aksesoris</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Informasi</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Cara Pemesanan</a></li>
                <li><a href="#" className="hover:text-white transition">Pengiriman</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-amber-300 text-sm">
            <p>&copy; 2026 Toko Batik Den Reza Laras. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
