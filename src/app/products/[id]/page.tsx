// src/app/products/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// 模拟产品详细数据
const productDetails: { [key: string]: { name: string; category: string; description: string; image: string; features: string[]; specifications: { material: string; weight: string; certification: string; size: string; }; applications: string[]; } } = {
    1: {
        name: '安全头盔',
        category: '头部防护',
        description: '高强度防护头盔，适用于建筑施工场所',
        image: '/images/helmet.jpg',
        features: ['抗冲击', '轻量化设计', '透气性好'],
        specifications: {
            material: '高强度ABS',
            weight: '380g',
            certification: 'CE认证、ISO9001',
            size: '可调节(54-62cm)',
        },
        applications: [
            '建筑施工',
            '工业生产',
            '矿山作业',
        ],
    },
    // 可以添加更多产品...
};

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params; // 使用 params

    // 获取对应的产品信息
    const product = productDetails[id]; // 使用字符串索引

    // 如果没有找到产品，您可以选择返回一个404页面或其他处理
    if (!product) {
        return <div>产品未找到</div>;
    }

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 返回按钮 */}
                <Link
                    href="/products"
                    className="inline-flex items-center text-blue-600 mb-8 hover:text-blue-800"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    返回产品列表
                </Link>

                {/* 产品详情 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* 产品图片 */}
                    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* 产品信息 */}
                    <div>
                        <div className="text-sm text-blue-600 mb-2">{product.category}</div>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-6">{product.description}</p>

                        {/* 产品特点 */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">产品特点</h2>
                            <div className="flex flex-wrap gap-2">
                                {product.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 技术规格 */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">技术规格</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key}>
                                        <div className="text-gray-600">{key}</div>
                                        <div className="font-medium">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 应用场景 */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">应用场景</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {product.applications.map((app) => (
                                    <li key={app}>{app}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}