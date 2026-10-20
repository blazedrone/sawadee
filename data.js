// Temario. Cada frase: [tailandés, pronunciación, español, alternativas aceptadas al hablar]
// {p} = partícula de cortesía (ครับ khráp / ค่ะ khâ), {I} = "yo" (ผม phǒm / ฉัน chǎn)
window.LEVELS = [
  {
    id: 1, icon: "👋", title: "Saludos y cortesía",
    tip: "En tailandés se termina casi todo con una partícula de cortesía: los hombres dicen «khráp» y las mujeres «khâ». Úsala siempre, queda muy educado.",
    items: [
      ["สวัสดี{p}", "sà-wàt-dii {pr}", "Hola / Adiós"],
      ["ขอบคุณ{p}", "khàwp-khun {pr}", "Gracias"],
      ["ขอบคุณมาก{p}", "khàwp-khun mâak {pr}", "Muchas gracias"],
      ["ขอโทษ{p}", "khǎw-thôot {pr}", "Perdón / Disculpe"],
      ["ไม่เป็นไร{p}", "mâi bpen rai {pr}", "No pasa nada / De nada"],
      ["ใช่", "châi", "Sí, eso es"],
      ["ไม่ใช่", "mâi châi", "No, no es eso"],
      ["ได้", "dâai", "Vale / Se puede"],
      ["ไม่ได้", "mâi dâai", "No se puede"],
      ["สบายดีไหม{p}", "sà-baai dii mǎi {pr}", "¿Qué tal estás?"],
      ["สบายดี{p}", "sà-baai dii {pr}", "Estoy bien"],
      ["คุณชื่ออะไร{p}", "khun chûe à-rai {pr}", "¿Cómo te llamas?"],
      ["{I}ชื่อฟาเบียน{p}", "{Ir} chûe Fabian {pr}", "Me llamo Fabián"],
      ["ยินดีที่ได้รู้จัก{p}", "yin-dii thîi dâai rúu-jàk {pr}", "Encantado de conocerte"],
      ["แล้วเจอกัน{p}", "láeo joe gan {pr}", "Hasta luego / Nos vemos"],
      ["เข้าใจ{p}", "khâo-jai {pr}", "Entiendo"],
      ["ไม่เข้าใจ{p}", "mâi khâo-jai {pr}", "No entiendo"],
      ["พูดช้าๆ ได้ไหม{p}", "phûut cháa-cháa dâai mǎi {pr}", "¿Puede hablar más despacio?"],
      ["พูดภาษาอังกฤษได้ไหม{p}", "phûut phaa-sǎa ang-grìt dâai mǎi {pr}", "¿Habla inglés?"]
    ]
  },
  {
    id: 2, icon: "💰", title: "Números y dinero",
    tip: "Los números son la clave para regatear y pagar. Practica decir los precios en voz alta: «sǎwng ráwy bàat» = 200 baht.",
    items: [
      ["หนึ่ง", "nùeng", "Uno (1)", ["1"]],
      ["สอง", "sǎwng", "Dos (2)", ["2"]],
      ["สาม", "sǎam", "Tres (3)", ["3"]],
      ["สี่", "sìi", "Cuatro (4)", ["4"]],
      ["ห้า", "hâa", "Cinco (5)", ["5"]],
      ["หก", "hòk", "Seis (6)", ["6"]],
      ["เจ็ด", "jèt", "Siete (7)", ["7"]],
      ["แปด", "bpàet", "Ocho (8)", ["8"]],
      ["เก้า", "gâo", "Nueve (9)", ["9"]],
      ["สิบ", "sìp", "Diez (10)", ["10"]],
      ["สิบเอ็ด", "sìp-èt", "Once (11)", ["11"]],
      ["ยี่สิบ", "yîi-sìp", "Veinte (20)", ["20"]],
      ["ห้าสิบ", "hâa-sìp", "Cincuenta (50)", ["50"]],
      ["หนึ่งร้อย", "nùeng ráwy", "Cien (100)", ["100"]],
      ["หนึ่งพัน", "nùeng phan", "Mil (1.000)", ["1000"]],
      ["บาท", "bàat", "Baht (la moneda)"],
      ["เท่าไหร่{p}", "thâo-rài {pr}", "¿Cuánto es?"],
      ["สองร้อยบาท", "sǎwng ráwy bàat", "200 baht", ["200บาท"]],
      ["เงินทอน", "ngoen thawn", "El cambio (la vuelta)"],
      ["แลกเงินที่ไหน{p}", "lâek ngoen thîi-nǎi {pr}", "¿Dónde puedo cambiar dinero?"]
    ]
  },
  {
    id: 3, icon: "🍜", title: "Comida y restaurante",
    tip: "«Mâi phèt» (sin picante) te salvará la vida. «Phèt nít-nòi» es un poco picante… que en Tailandia sigue siendo bastante.",
    items: [
      ["หิวแล้ว", "hǐw láeo", "Tengo hambre"],
      ["ขอเมนู{p}", "khǎw mee-nuu {pr}", "La carta, por favor"],
      ["อร่อย", "à-ròi", "Rico / Delicioso"],
      ["อร่อยมาก{p}", "à-ròi mâak {pr}", "¡Está muy rico!"],
      ["เผ็ดไหม", "phèt mǎi", "¿Pica?"],
      ["ไม่เผ็ด", "mâi phèt", "Sin picante"],
      ["เผ็ดนิดหน่อย", "phèt nít-nòi", "Un poco picante"],
      ["น้ำเปล่า", "náam bplào", "Agua natural"],
      ["น้ำแข็ง", "náam-khǎeng", "Hielo"],
      ["เบียร์เย็นๆ", "bia yen-yen", "Una cerveza bien fría"],
      ["กาแฟเย็น", "gaa-fae yen", "Café con hielo"],
      ["ไม่หวาน", "mâi wǎan", "Sin azúcar / Poco dulce"],
      ["ข้าวผัดกุ้ง", "khâao phàt gûng", "Arroz frito con gambas"],
      ["ผัดไทย", "phàt thai", "Pad thai"],
      ["ต้มยำกุ้ง", "dtôm-yam gûng", "Sopa tom yum de gambas"],
      ["ไก่", "gài", "Pollo"],
      ["หมู", "mǔu", "Cerdo"],
      ["ปลา", "bplaa", "Pescado"],
      ["แพ้ถั่ว{p}", "pháe thùa {pr}", "Soy alérgico a los cacahuetes"],
      ["ขอน้ำเปล่าขวดหนึ่ง{p}", "khǎw náam bplào khùat nùeng {pr}", "Una botella de agua, por favor"],
      ["เช็คบิล{p}", "chék bin {pr}", "La cuenta, por favor"]
    ]
  },
  {
    id: 4, icon: "🛺", title: "Transporte y direcciones",
    tip: "En taxi pide siempre «bpòet mí-dtôe» (taxímetro). En tuk-tuk acuerda el precio antes de subir: «bpai … thâo-rài?»",
    items: [
      ["ห้องน้ำอยู่ที่ไหน{p}", "hâwng-náam yùu thîi-nǎi {pr}", "¿Dónde está el baño?"],
      ["ไปที่นี่{p}", "bpai thîi-nîi {pr}", "Lléveme aquí (enseñando el mapa)"],
      ["ตรงไป", "dtrong bpai", "Todo recto"],
      ["เลี้ยวซ้าย", "líao sáai", "Gire a la izquierda"],
      ["เลี้ยวขวา", "líao khwǎa", "Gire a la derecha"],
      ["จอดที่นี่{p}", "jàwt thîi-nîi {pr}", "Pare aquí, por favor"],
      ["ไกลไหม", "glai mǎi", "¿Está lejos?"],
      ["ใกล้ๆ", "glâi-glâi", "Muy cerca"],
      ["ไปสนามบิน{p}", "bpai sà-nǎam-bin {pr}", "Al aeropuerto, por favor"],
      ["เปิดมิเตอร์ได้ไหม{p}", "bpòet mí-dtôe dâai mǎi {pr}", "¿Puede poner el taxímetro?"],
      ["ไปเท่าไหร่{p}", "bpai thâo-rài {pr}", "¿Cuánto cuesta el viaje?"],
      ["ขับช้าๆ หน่อย{p}", "khàp cháa-cháa nòi {pr}", "Conduzca más despacio, por favor"],
      ["สถานีรถไฟฟ้า", "sà-thǎa-nii rót-fai-fáa", "Estación del tren elevado (BTS)"],
      ["ท่าเรือ", "thâa-ruea", "El muelle / el puerto"],
      ["ป้ายรถเมล์", "bpâai rót-mee", "Parada de autobús"],
      ["ที่นี่", "thîi-nîi", "Aquí"],
      ["ที่นั่น", "thîi-nân", "Allí"],
      ["รถออกกี่โมง", "rót àwk gìi moong", "¿A qué hora sale?"]
    ]
  },
  {
    id: 5, icon: "🏨", title: "Hotel y alojamiento",
    tip: "«Khǎw» + cosa + «nòi» es la forma educada de pedir algo: «khǎw phâa-chét-dtua nòi» = una toalla, por favor.",
    items: [
      ["จองไว้แล้ว{p}", "jawng wái láeo {pr}", "Ya tengo reserva"],
      ["มีห้องว่างไหม{p}", "mii hâwng wâang mǎi {pr}", "¿Tiene habitaciones libres?"],
      ["คืนละเท่าไหร่{p}", "khuen lá thâo-rài {pr}", "¿Cuánto cuesta por noche?"],
      ["เช็คอินกี่โมง", "chék-in gìi moong", "¿A qué hora es el check-in?"],
      ["เช็คเอาท์กี่โมง", "chék-áo gìi moong", "¿A qué hora es el check-out?"],
      ["รหัสไวไฟคืออะไร{p}", "rá-hàt wai-fai khue à-rai {pr}", "¿Cuál es la contraseña del wifi?"],
      ["แอร์ไม่เย็น", "ae mâi yen", "El aire acondicionado no enfría"],
      ["ไม่มีน้ำร้อน", "mâi mii náam ráwn", "No hay agua caliente"],
      ["ขอผ้าเช็ดตัวเพิ่ม{p}", "khǎw phâa-chét-dtua phôem {pr}", "Más toallas, por favor"],
      ["กุญแจห้อง", "gun-jae hâwng", "La llave de la habitación"],
      ["อาหารเช้ากี่โมง", "aa-hǎan cháo gìi moong", "¿A qué hora es el desayuno?"],
      ["ฝากกระเป๋าได้ไหม{p}", "fàak grà-bpǎo dâai mǎi {pr}", "¿Puedo dejar la maleta?"],
      ["ทำความสะอาดห้องได้ไหม", "tham khwaam sà-àat hâwng dâai mǎi", "¿Pueden limpiar la habitación?"]
    ]
  },
  {
    id: 6, icon: "🛍️", title: "Compras y regateo",
    tip: "Regatear con una sonrisa es normal en mercados. «Lót dâai mǎi?» (¿me hace descuento?) y si no te convence: «duu gàwn» (solo miro).",
    items: [
      ["อันนี้เท่าไหร่{p}", "an-níi thâo-rài {pr}", "¿Cuánto cuesta esto?"],
      ["แพงไป", "phaeng bpai", "Es demasiado caro"],
      ["ลดได้ไหม{p}", "lót dâai mǎi {pr}", "¿Me hace descuento?"],
      ["ถูกกว่านี้ได้ไหม", "thùuk gwàa níi dâai mǎi", "¿Puede ser más barato?"],
      ["เอาอันนี้", "ao an-níi", "Me llevo este"],
      ["ไม่เอา{p}", "mâi ao {pr}", "No, gracias (no lo quiero)"],
      ["ดูก่อน{p}", "duu gàwn {pr}", "Solo estoy mirando"],
      ["มีไซส์ใหญ่กว่านี้ไหม", "mii sái yài gwàa níi mǎi", "¿Tiene una talla más grande?"],
      ["จ่ายด้วยบัตรได้ไหม", "jàai dûai bàt dâai mǎi", "¿Puedo pagar con tarjeta?"],
      ["เงินสด", "ngoen sòt", "Efectivo"],
      ["ใหญ่", "yài", "Grande"],
      ["เล็ก", "lék", "Pequeño"],
      ["สวย", "sǔai", "Bonito"],
      ["ไม่เอาถุง{p}", "mâi ao thǔng {pr}", "Sin bolsa, por favor"],
      ["สองอันห้าร้อยได้ไหม", "sǎwng an hâa ráwy dâai mǎi", "¿Dos por 500?", ["2อัน500ได้ไหม"]]
    ]
  },
  {
    id: 7, icon: "🚑", title: "Emergencias y salud",
    tip: "Teléfonos útiles en Tailandia: policía turística 1155, ambulancia 1669. Están también en «Frases rápidas».",
    items: [
      ["ช่วยด้วย", "chûai dûai", "¡Socorro! / ¡Ayuda!"],
      ["เรียกตำรวจ", "rîak dtam-rùat", "¡Llame a la policía!"],
      ["เรียกรถพยาบาล", "rîak rót phá-yaa-baan", "¡Llame a una ambulancia!"],
      ["โรงพยาบาลอยู่ที่ไหน", "roong-phá-yaa-baan yùu thîi-nǎi", "¿Dónde está el hospital?"],
      ["ร้านขายยาอยู่ที่ไหน", "ráan khǎai yaa yùu thîi-nǎi", "¿Dónde hay una farmacia?"],
      ["{I}ไม่สบาย", "{Ir} mâi sà-baai", "Me encuentro mal"],
      ["ปวดหัว", "bpùat hǔa", "Me duele la cabeza"],
      ["ปวดท้อง", "bpùat tháwng", "Me duele la barriga"],
      ["เป็นไข้", "bpen khâi", "Tengo fiebre"],
      ["{I}หลงทาง", "{Ir} lǒng thaang", "Me he perdido"],
      ["กระเป๋าเงินหาย", "grà-bpǎo ngoen hǎai", "He perdido la cartera"],
      ["หนังสือเดินทางหาย", "nǎng-sǔe doen-thaang hǎai", "He perdido el pasaporte"],
      ["อันตราย", "an-dtà-raai", "¡Peligro!"],
      ["ยากันยุง", "yaa gan yung", "Repelente de mosquitos"],
      ["ครีมกันแดด", "khriim gan dàet", "Crema solar"]
    ]
  },
  {
    id: 8, icon: "🤝", title: "Conocer gente",
    tip: "A los tailandeses les encanta que un extranjero lo intente. «Phûut phaa-sǎa thai dâai nít-nòi» (hablo un poquito de tailandés) abre muchas puertas.",
    items: [
      ["คุณมาจากไหน{p}", "khun maa jàak nǎi {pr}", "¿De dónde eres?"],
      ["{I}มาจากสเปน{p}", "{Ir} maa jàak sà-bpeen {pr}", "Soy de España"],
      ["{I}มาเที่ยว{p}", "{Ir} maa thîao {pr}", "He venido de vacaciones"],
      ["{I}พูดภาษาไทยได้นิดหน่อย", "{Ir} phûut phaa-sǎa thai dâai nít-nòi", "Hablo un poco de tailandés"],
      ["ชอบเมืองไทยมาก", "châwp mueang thai mâak", "Me gusta mucho Tailandia"],
      ["คุณอายุเท่าไหร่", "khun aa-yú thâo-rài", "¿Cuántos años tienes?"],
      ["สนุกมาก", "sà-nùk mâak", "¡Muy divertido!"],
      ["สวยมาก", "sǔai mâak", "Muy bonito / Muy guapa"],
      ["ใจดีมาก", "jai-dii mâak", "Eres muy amable"],
      ["เพื่อน", "phûean", "Amigo / Amiga"],
      ["ขอถ่ายรูปได้ไหม{p}", "khǎw thàai rûup dâai mǎi {pr}", "¿Puedo hacer una foto?"],
      ["มีไลน์ไหม", "mii lai mǎi", "¿Tienes LINE? (la app de mensajes)"],
      ["ไปด้วยกันไหม", "bpai dûai gan mǎi", "¿Vamos juntos?"],
      ["ชนแก้ว", "chon gâeo", "¡Salud! (al brindar)"]
    ]
  },
  {
    id: 9, icon: "⏰", title: "Tiempo y horarios",
    tip: "«Gìi moong?» (¿a qué hora?) sirve para todo: abrir, cerrar, salir… «Ráw sàk-khrûu» significa «espere un momento».",
    items: [
      ["วันนี้", "wan-níi", "Hoy"],
      ["พรุ่งนี้", "phrûng-níi", "Mañana"],
      ["เมื่อวาน", "mûea-waan", "Ayer"],
      ["ตอนนี้", "dtawn-níi", "Ahora"],
      ["คืนนี้", "khuen-níi", "Esta noche"],
      ["ตอนเช้า", "dtawn cháo", "Por la mañana"],
      ["ตอนเย็น", "dtawn yen", "Por la tarde"],
      ["กี่โมงแล้ว", "gìi moong láeo", "¿Qué hora es?"],
      ["เปิดกี่โมง", "bpòet gìi moong", "¿A qué hora abre?"],
      ["ปิดกี่โมง", "bpìt gìi moong", "¿A qué hora cierra?"],
      ["รอสักครู่{p}", "raw sàk-khrûu {pr}", "Espere un momento"],
      ["อีกกี่นาที", "ìik gìi naa-thii", "¿Cuántos minutos más?"],
      ["ร้อนมาก", "ráwn mâak", "Hace mucho calor"],
      ["ฝนตก", "fǒn dtòk", "Está lloviendo"],
      ["อาทิตย์หน้า", "aa-thít nâa", "La semana que viene"]
    ]
  },
  {
    id: 10, icon: "🏆", title: "Conversación avanzada",
    tip: "Frases largas: escucha primero en modo lento, repite por trozos y luego entera. ¡Ya casi estás listo para el viaje!",
    items: [
      ["{I}อยากไปเกาะพีพี", "{Ir} yàak bpai gàw phii-phii", "Quiero ir a las islas Phi Phi"],
      ["{I}จะอยู่เมืองไทยสามอาทิตย์", "{Ir} jà yùu mueang thai sǎam aa-thít", "Voy a estar tres semanas en Tailandia"],
      ["แถวนี้มีร้านอาหารอร่อยๆ ไหม", "thǎeo níi mii ráan aa-hǎan à-ròi à-ròi mǎi", "¿Hay buenos restaurantes por aquí?"],
      ["คุณแนะนำอะไร{p}", "khun náe-nam à-rai {pr}", "¿Qué me recomienda?"],
      ["ช่วยถ่ายรูปให้หน่อยได้ไหม", "chûai thàai rûup hâi nòi dâai mǎi", "¿Me puede hacer una foto?"],
      ["ช่วยเขียนให้หน่อยได้ไหม", "chûai khǐan hâi nòi dâai mǎi", "¿Me lo puede escribir?"],
      ["พูดอีกครั้งได้ไหม{p}", "phûut ìik khráng dâai mǎi {pr}", "¿Puede repetirlo?"],
      ["แปลว่าอะไร", "bplae wâa à-rai", "¿Qué significa?"],
      ["ภาษาไทยเรียกว่าอะไร", "phaa-sǎa thai rîak wâa à-rai", "¿Cómo se dice en tailandés?"],
      ["{I}ไม่กินเนื้อวัว", "{Ir} mâi gin núea wua", "No como ternera"],
      ["ไม่ต้องทอน{p}", "mâi dtâwng thawn {pr}", "Quédese con el cambio"],
      ["ขอโทษที่มาสาย", "khǎw-thôot thîi maa sǎai", "Perdón por llegar tarde"],
      ["ไว้เจอกันใหม่นะ", "wái joe gan mài ná", "¡Ya nos veremos otra vez!"]
    ]
  }
];

// Frases rápidas extra (para el viaje, sin internet)
window.EXTRA = [
  { cat: "📞 Teléfonos de emergencia", items: [
    ["ตำรวจท่องเที่ยว 1155", "dtam-rùat thâwng-thîao", "Policía turística: 1155"],
    ["รถพยาบาล 1669", "rót phá-yaa-baan", "Ambulancia: 1669"],
    ["ตำรวจ 191", "dtam-rùat", "Policía: 191"]
  ]}
];
