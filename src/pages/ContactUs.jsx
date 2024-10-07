import React from "react";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <div className=" w-[100%] h-[200px] overflow-hidden">
        <img className="w-full" src="https://www.picsum.photos/1500" alt="Snake Main" />
      </div>

      <div className="flex w-[80%] h-[400px] gap-4 ">

        <div className="flex flex-col w-1/2 justify-between">
    
          <input className = "border border-gray-300 h-8 pl-2 rounded-lg" placeholder="Name..."/>
       
          <input className = "border border-gray-300 h-8 pl-2 rounded-lg" placeholder="Email..."/>
          
          <input className = "border border-gray-300 h-8 pl-2 rounded-lg" placeholder="Phone Number..."/>
          <textarea className = 
          "w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          placeholder="Write your comments here..."
          ></textarea>
          <div>
          <button className = "border h-[50px] w-[150px] rounded-xl float-right bg-blue-100 hover:bg-blue-200">Send</button>
          </div>

        </div>

        <div className="border border-gray-300 rounded-lg w-1/2 p-4">

          <div className="flex flex-col gap-4">
            <p>บริษัท งอ.งู จำกัด  </p>
            <p>+66 1234 5678</p>
            <p>Ngo Ngoo Snake Farm</p>
            <p>@ngoo.farm</p>
            <p>7/1 ซอยพระรามที่ 2 ซอย54 แยก4-15 ถนนพระรามที่2 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพมหานคร 10150 </p>
            <p>info@ngongoofarm.com</p> 
          </div>

        </div>

      </div>

      <div className="border h-[150px] w-full px-8 pt-4">
      <samp className="font-bold text-xl">บริษัท งอ.งู จำกัด</samp> ก่อตั้งขึ้นเมื่อปี พ.ศ. 2560 โดยมุ่งเน้นการเป็นผู้นำในด้านการจำหน่ายและจัดหางูหลากหลายสายพันธุ์ อาทิเช่น งูใหญ่, งูสี, และงูpythonประเภทต่างๆ ซึ่งเรายึดถือมาตรฐานคุณภาพสูงสุดในการเพาะพันธุ์และดูแลรักษาสัตว์

ฟาร์มของเรามีความเชี่ยวชาญในด้านการเพาะพันธุ์งูในสภาพแวดล้อมที่เหมาะสมและปลอดภัย เพื่อให้ลูกค้าสามารถเลือกซื้อได้ตามความต้องการ พร้อมทั้งรับประกันความเป็นอยู่ที่ดีที่สุดของสัตว์เลี้ยงของท่าน นอกจากนี้ เรายังให้บริการคำปรึกษาเกี่ยวกับการดูแลและจัดเตรียมอุปกรณ์ที่จำเป็นสำหรับการเลี้ยงงู เพื่อให้ท่านสามารถสร้างสภาพแวดล้อมที่เหมาะสมที่สุด

บริษัทของเรามุ่งมั่นในการให้บริการที่มีคุณภาพและความน่าเชื่อถือ โดยให้ความสำคัญกับความพึงพอใจของลูกค้าเป็นอันดับแรก หากท่านกำลังมองหางูที่มีคุณภาพและบริการที่เป็นเลิศ บริษัท งอ.งู ยินดีที่จะตอบสนองทุกความต้องการของท่านอย่างเต็มที่
      </div>
    </div>
  );
}
