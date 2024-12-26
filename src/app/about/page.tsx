// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 公司简介 */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">关于我们</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              我们是专业的个人防护装备供应商，致力于为各行业提供高品质的安全防护解决方案。
              通过持续创新和严格的质量控制，我们为客户提供最可靠的防护装备。
            </p>
          </div>
        </section>

        {/* 公司优势 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">我们的优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '专业团队',
                description: '拥有经验丰富的专业团队，提供专业的技术支持和服务'
              },
              {
                title: '品质保证',
                description: '所有产品都通过严格的质量检测，确保安全可靠'
              },
              {
                title: '快速响应',
                description: '24小时快速响应客户需求，提供及时的解决方案'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 联系信息 */}
        <section>
          <h2 className="text-3xl font-bold mb-8">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">联系方式</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-medium mr-2">地址：</span>
                  <span className="text-gray-600">上海市浦东新区XX路XX号</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">电话：</span>
                  <span className="text-gray-600">021-XXXXXXXX</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">邮箱：</span>
                  <span className="text-gray-600">contact@example.com</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">营业时间</h3>
              <p className="text-gray-600">
                周一至周五：9:00 - 18:00<br />
                周六：9:00 - 12:00<br />
                周日：休息
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}