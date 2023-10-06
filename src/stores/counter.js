import { ref ,computed} from 'vue'
import { defineStore } from 'pinia'

export const product = defineStore('product', () => {
const productList = ref([
{name:'มิตรผล',type:'น้ำตาลทรายขาว',price:25,img:'https://img.th.my-best.com/product_images/f4fa14350e220bf12a76809ab1e9f1fa.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=7cdb9c949fee325ce0e95eeff08967d9',discription:"หากพูดถึงผู้ผลิตน้ำตาลคุณภาพแล้ว เชื่อว่าหลายคนน่าจะต้องนึกถึง 'มิตรผล' แบรนด์ผลิตน้ำตาลที่ครองใจคนไทยมาอย่างยาวนานกันอย่างแน่นอน ด้วยกระบวนการผลิตที่ได้มาตรฐานระดับโลก ตั้งแต่ขั้นตอนในการคัดสรรอ้อยธรรมชาติ 100% ในการผลิต นำมาผ่านกระบวนการกรองหลายขั้นตอนจนได้น้ำตาลทรายขาวใส ไม่ผ่านการฟอกสี และยังได้เม็ดน้ำตาลมีความละเอียด ละลายน้ำได้ดี"},
{name:'วังขนาย',type:'น้ำตาลทรายแดง ออร์แกนิค',price:29 ,img:'https://img.th.my-best.com/product_images/0439dad6c9000c84c71ac0beeaf39144.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=33bf4218cad34206a61f1b2a5ba65b2c',discription:"น้ำตาลออร์แกนิคจากวังขนาย ตอบโจทย์คนรักสุขภาพที่มองหาน้ำตาลที่ใส่ใจในทุกขั้นตอนในการผลิต เริ่มตั้งแต่การคัดสายพันธุ์อ้อยและปลูกด้วยกรรมวิธีเกษตรอินทรีย์ ไม่มีการใช้สารเคมีและบำรุงดินด้วยปุ๋ยจากธรรมชาติ ทำให้ได้น้ำตาลอ้อยที่ปลอดภัย พร้อมใช้ปรุงอาหารและเครื่องดื่ม ไม่เพียงเท่านั้น ยังเป็นแบรนด์ที่ได้รับรองมาตรฐานมากมายจากทั่วโลก"},
{name:'Equal',type:'สารให้ความหวานแทนน้ำตาล สตีเวีย',price:112,img:'https://img.th.my-best.com/product_images/ca203a020c7eeb4b5f7b028dcd47d4d3.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=6bf8acf5281b48cb279b4cb546947cd3',discription:'ด้วยเทรนด์รักสุขภาพที่กำลังมาแรงในขณะนี้ ทำให้หลายคนให้มาเลือกใช้สารให้ความหวานแทนน้ำตาลกันมากยิ่งขึ้น ซึ่งทางแบรนด์ Equal เองก็ได้ผลิตสารให้ความหวานสตีเวียเพื่อตอบสนองความต้องการของใครหลายคนเช่นกัน โดยจะใช้สารอิริทริทอล (Erythritol)และสตีวิออลไกลโคไซด์ (Steviol Glycoside) หรือสารสกัดจากหญ้าหวานมาใช้แทนน้ำตาลจากอ้อย'},
{name:'NIZE',type:'น้ำตาลคีโต น้ำตาลอิริทริทอล',price:95 ,img:'https://img.th.my-best.com/product_images/9840f8622df3c319dd0fcbe7094724e5.png?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=1b466a2289d4c7fa2194b5915e58fa0e',discription:'คนไหนที่รับประทานคีโตเจนิกเพื่อดูแลสุขภาพและรักษารูปร่าง น้ำตาลคีโตจาก NIZE สูตรนี้สามารถใช้แทนน้ำตาลจากอ้อยได้ เนื่องจากเป็นสารให้ความหวานแทนน้ำตาลชื่อ อิริทริทอล ที่ให้ความหวานได้เทียบเท่ากับน้ำตาลแต่ไม่ให้พลังงาน และไม่มีผลต่อน้ำตาลในเส้นเลือดและอินซูลิน ผู้ที่ป่วยเป็นเบาหวานหรือควบคุมระดับน้ำตาลในเส้นเลือดก็สามารถรับประทานได้'},
{name:'มิตรผล',type:'น้ำตาลอ้อยผสมน้ำตาลมะพร้าว',price:56,img:'https://img.th.my-best.com/product_images/1119f2b49ceb48e4c15d6769cdee28e9.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=9f539335d0785147748c4c9a5059314e',discription:'สำหรับน้ำตาลตัวนี้จากมิตรผลนั้น เป็นน้ำตาลอ้อยผสมน้ำตาลมะพร้าว ที่ให้เนื้อสัมผัสเนียนไม่แยกชั้น สามารถละลายได้ง่าย ไม่จับตัวเป็นก้อน มีจุดเด่นอยู่ที่กลิ่นหอมหวานเป็นเอกลักษณ์ของน้ำตาลมะพร้าว เหมาะสำหรับนำมาปรุงทั้งอาหารคาวและหวาน จะช่วยเพิ่มรสชาติที่กลมกล่อมและเข้มข้นได้มากยิ่งขึ้น อีกทั้งยังช่วยเพิ่มสีสันให้อาหารน่ารับประทานอีกด้วย'},
{name:'ซองเดอร์',type:'น้ำตาลทรายแดง',price:40,img:'https://img.th.my-best.com/product_images/048877d50514869d5e060a8a23d1a401.png?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=0814e3cbe4cbcd4d03dd2631dac73cc4',discription:'ซองเดอร์ (Xongdur) แบรนด์ผลิตอาหารเพื่อสุขภาพที่กำลังได้รับความนิยมก็ได้ผลิตน้ำตาลทรายแดงออกมาด้วยเช่นกัน จุดเด่นของน้ำตาลทรายแดงนั้นคือเป็นน้ำตาลที่ผลิตจากอ้อยสด ไม่ผ่านการฟอกสีหรือผสมวัตถุกันเสีย น้ำตาลมีลักษณะเป็นเม็ดละเอียดสามารถผสมเข้ากับส่วนผสมต่าง ๆ ได้เป็นอย่างดี ทั้งอาหารคาวและอาหารหวาน รวมถึงสามารถใช้เติมความหวานอร่อยให้กับเครื่องดื่มได้เป็นอย่างดี'},
{name:'PRAOWAN',type:'น้ำตาลดอกมะพร้าว ',price:230,img:'https://img.th.my-best.com/product_images/a18bd368c5dc2b8f2fed87a78ce0f047.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=706ee26ee95145d9ad600a08cb4b0665',discription:'ใครที่ต้องการเพิ่มความหวานให้กับขนมไทยหรืออาหารไทยเมนูต่าง ๆ วันนี้เราก็มีน้ำตาลดอกมะพร้าวมาแนะนำเช่นกัน ซึ่งน้ำตาลดอกมะพร้าวตัวนี้ผลิตจากช่อดอกมะพร้าวสายพันธุ์ดี ไม่มีการผสมน้ำตาลทรายหรือสารกันเสีย และปราศจากการใช้สารเคมีทุกชนิด โดยทางแบรนด์ได้เลือกใช้กรรมวิธีการผลิตแบบดั้งเดิมที่สืบทอดกันมายาวนานถึง 90 ปีของชาวอัมพวามาใช้ในการทำน้ำตาล'},
{name:'ลิน',type:'น้ำตาลทรายขาวบริสุทธิ์ ชนิดขวด',price: 27 ,img:'https://img.th.my-best.com/product_images/d8895fe535ed77daf87e159223697653.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=3e356a2b0fa79efc8a390fc97e5643a5',discription:'หากคุณกำลังมองหาน้ำตาลทรายขาวบริสุทธิ์ที่มาในบรรจุภัณฑ์ที่ใช้งานง่าย ไม่ต้องเสียเวลาหาภาชนะบรรจุหากใช้ไม่หมด วันนี้เราก็มีน้ำตาลทรายขาวจาก ลิน มาแนะนำค่ะ โดยน้ำตาลตัวนี้เป็นน้ำตาลเกรดพิเศษของทางแบรนด์ที่มีความใสสะอาดมากที่สุด เมื่อนำไปใช้ปรุงอาหารเมนูต่าง ๆ จึงไม่ทำให้อาหารเปลี่ยนสี แถมยังให้รสชาติที่กลมกล่อมละมุน ไม่หวานแหลมจนเกินไปอีกด้วย'},
{name:'PROUD',type:'น้ำตาลทรายขาวบริสุทธิ์',price:25,img:'https://img.th.my-best.com/product_images/d8c78a80cc3b62e0fe0dff55e10ebeef.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=f4ad15bf383de491a69042e188c909f2',discription:'ไม่ว่าจะปรุงอาหารหรือขนมเมนูไหน ๆ ก็หวานอร่อย ด้วยน้ำตาลทรายขาวบริสุทธิ์ที่ผลิตจากอ้อยธรรมชาติ 100% โดยทางแบรนด์จะเก็บเกี่ยวอ้อยด้วยวิธีการตัดสด ไม่ใช้การเผา ก่อนนำมาเข้ากระบวนการผลิตจนกลายเป็นน้ำตาลทรายขาวเกล็ดเล็ก สะอาด ใช้ปรุงอาหารได้โดยไม่เปลี่ยนสีหรือกลิ่นของอาหาร ซึ่งนอกจากนำมาใช้ปรุงอาหารกับขนมหวานได้แล้ว ยังสามารถนำมาประยุกต์ทำน้ำเชื่อมได้อีกด้วย'},
{name:'Imperial',type:'น้ำตาลทรายขาว ชนิดก้อน',price:110,img:'https://prod-thaitrade-media.s3-ap-southeast-1.amazonaws.com/media/catalog/product/4/s/4ssza6hlk.png',discription:'คุณสมบัติเด่นของน้ำตาลทรายขาว ชนิดก้อนจาก Imperial นั้น อยู่ที่กระบวนการผลิตที่เลือกใช้อ้อยคุณภาพมาผ่านขั้นตอนการผลิตที่พิถีพิถัน ทำให้ได้รสชาติที่เป็นธรรมชาติและได้กลิ่นหอมจากอ้อยอย่างแท้จริง รสชาติของน้ำตาลหวานกลมกล่อม มาในรูปทรงก้อนสี่เหลี่ยมลูกบาศก์ขนาดเล็ก แต่ยังคงสามารถละลายเข้ากับเครื่องดื่มทุกเมนูได้เป็นอย่างดี โดยมีปริมาณบรรจุอยู่ที่ 250 กรัม'}
])

 
const cartList = ref([]);

const orderList = ref([]);
const id = ref(0);
const sumcart = computed(() => {
  return cartList.value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count; // Assuming your cart items have a 'count' property
  }, 0 );
});

const sumprice = computed(() => {
  return cartList.value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price* currentValue.count; // Assuming your cart items have a 'count' property
  }, 0 );
});

function add(name,price,count,img) {
  const item = {
    name: name,
    price: price,
    count:count,
    img:img
  }
  const findId = cartList.value.find(e => e.name == item.name)
  if(findId) {
    const findIndexProduct = cartList.value.findIndex(e => e.name == item.name)
    cartList.value[findIndexProduct].count = cartList.value[findIndexProduct].count + count
} else {
  cartList.value.push(item)
}
}

const delcart = (i) => { 
  cartList.value.splice(i, 1)
}
  function idcard(i){
    id.value = i
  }


  return { productList, cartList, orderList, id ,sumcart , sumprice , delcart, idcard, add }
})
