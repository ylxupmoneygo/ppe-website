// src/app/products/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// 模拟产品数据
const products = [
  {
    id: 1,
    name: '安全头盔',
    category: '头部防护',
    description: '高强度防护头盔，适用于建筑施工场所',
    image: '/images/helmet.jpg',
    features: ['抗冲击', '轻量化设计', '透气性好'],
  },
  {
    id: 2,
    name: '防护手套',
    category: '手部防护',
    description: '防切割防刺穿工业手套',
    image: '/images/gloves.jpg',
    features: ['防切割', '防刺穿', '防滑设计'],
  },
  {
    id: 3,
    name: '护目镜',
    category: '眼部防护',
    description: '防飞溅防尘防雾护目镜',
    image: '/images/goggles.jpg',
    features: ['防飞溅', '防雾设计', '舒适佩戴'],
  },
  // 添加更多产品...
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12">
      {/* 产品分类筛选 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold mb-8">产品目录</h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {['全部', '头部防护', '手部防护', '眼部防护'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 产品列表 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{product.category}</div>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}