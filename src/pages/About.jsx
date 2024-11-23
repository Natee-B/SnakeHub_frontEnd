import React, { useEffect } from 'react'
import useOrderStore from '../store/orderStore'
import useAuthStore from '../store/authStore'

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">เกี่ยวกับเรา</h1>
      <p className="text-gray-700 text-base mb-6">
        ยินดีต้อนรับสู่ [ชื่อเว็บไซต์]! เราคือผู้เชี่ยวชาญในการขายงูหลากหลายสายพันธุ์ 
        ทั้งงูเลี้ยงและงูป่า เรามุ่งมั่นที่จะให้ข้อมูลที่ถูกต้องและช่วยให้คุณเลือกงูที่เหมาะสมกับคุณ
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">พันธุ์งูที่เรามี</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>งูบอลไพธอน</li>
        <li>งูคอนสไตป์</li>
        <li>งูแอนนาคอนด้า</li>
        <li>งูพิษ</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">ทำไมต้องเลือกเรา?</h2>
      <p className="text-gray-700 text-base mb-6">
        เรามีความเชี่ยวชาญในด้านการดูแลและการเลี้ยงงู พร้อมให้คำแนะนำที่ดีที่สุด 
        เพื่อให้คุณสามารถเลี้ยงงูได้อย่างมีความสุขและปลอดภัย
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">ติดต่อเรา</h2>
      <p className="text-gray-700 text-base">
        หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่ 
        <a href="mailto:info@example.com" className="text-blue-500 underline"> info@example.com</a>
      </p>
    </div>
  );
};

export default About;

