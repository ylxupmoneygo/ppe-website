// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">联系我们</h3>
            <p>电话: 123-456-7890</p>
            <p>邮箱: contact@example.com</p>
          </div>
          <div>
            <p className="text-sm">© 2024 PPE Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}