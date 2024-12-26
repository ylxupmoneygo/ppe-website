// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// 模拟产品数据
const featuredProducts = [
  {
    id: 1,
    name: '安全头盔',
    description: '高强度防护头盔，适用于建筑施工场所',
    image: '/images/helmet.jpg',
  },
  {
    id: 2,
    name: '防护手套',
    description: '防切割防刺穿工业手套',
    image: '/images/gloves.jpg',
  },
  {
    id: 3,
    name: '护目镜',
    description: '防飞溅防尘防雾护目镜',
    image: '/images/goggles.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">专业的个人防护装备解决方案</h1>
            <p className="text-xl mb-8">为您的安全保驾护航</p>
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              浏览产品
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">热门产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    href={`/products/${product.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    了解更多 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">我们的优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">品质保证</h3>
              <p className="text-gray-600">所有产品均通过严格质量认证</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">快速发货</h3>
              <p className="text-gray-600">24小时内发货，全国配送</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业支持</h3>
              <p className="text-gray-600">专业团队提供技术支持</p>
            </div>
          </div>
        </div>
      </section>
            {/* Industry Solutions */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">行业解决方案</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {['建筑施工', '化工制造', '医疗卫生', '消防救援'].map((industry) => (
                    <div 
                      key={industry} 
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <div className="p-6 bg-gradient-to-t from-black/60 to-transparent absolute inset-0 flex items-end">
                          <h3 className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                            {industry}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* News & Updates */}
            <section className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">新闻资讯</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: '最新防护标准更新',
                      date: '2024-01-15',
                      description: '关于个人防护装备最新国家标准的解读与应用指南'
                    },
                    {
                      title: '新品发布会预告',
                      date: '2024-01-20',
                      description: '即将发布全新一代智能防护装备，敬请期待'
                    },
                    {
                      title: '安全生产月活动',
                      date: '2024-02-01',
                      description: '参与我们的安全生产月活动，获取专业防护知识'
                    }
                  ].map((news) => (
                    <div key={news.title} className="bg-white rounded-lg shadow-md p-6">
                      <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                      <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                      <p className="text-gray-600">{news.description}</p>
                      <Link 
                        href="#" 
                        className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                      >
                        阅读更多 →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Contact CTA */}
            <section className="py-16 bg-blue-600 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">需要专业建议？</h2>
                <p className="text-xl mb-8">我们的专家团队随时为您提供支持</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    联系我们
                  </Link>
                  <Link 
                    href="/products" 
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    查看产品目录
                  </Link>
                </div>
              </div>
            </section>
      
            {/* Certification */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">资质认证</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {['ISO 9001', 'CE 认证', '3C 认证', 'ISO 45001'].map((cert) => (
                    <div key={cert} className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-600">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </div>
  );
}