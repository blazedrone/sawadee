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

// Temas libres: siempre abiertos, no hace falta aprobar niveles para verlos.
// Vocabulario pedido por Fabián en el chat (8 nov). Los ids siguen tras los niveles.
window.TOPICS = [
  {
    id: 11, icon: "💬", title: "Conocer a una chica",
    tip: "Termina tus frases con «khráp» para sonar educado. Añadir «ná» al final suena más dulce y cercano.",
    items: [
      ["คุณชื่ออะไร{p}", "khun chûe à-rai {pr}", "¿Cómo te llamas?"],
      ["คุณทำงานอะไร{p}", "khun tham ngaan à-rai {pr}", "¿A qué te dedicas?"],
      ["คุณชอบทำอะไร{p}", "khun châwp tham à-rai {pr}", "¿Qué te gusta hacer?"],
      ["{I}กำลังเรียนภาษาไทย", "{Ir} gam-lang rian phaa-sǎa thai", "Estoy aprendiendo tailandés"],
      ["สอน{I}หน่อยได้ไหม", "sǎwn {Ir} nòi dâai mǎi", "¿Me enseñas?"],
      ["มีแฟนหรือยัง{p}", "mii faen rǔe yang {pr}", "¿Tienes novio?"],
      ["ไม่มีแฟนมานานแล้วเหรอ{p}", "mâi mii faen maa naan láeo rǒe {pr}", "¿Hace mucho tiempo que no tienes novio?"],
      ["ทำไมไม่มีแฟน", "tham-mai mâi mii faen", "¿Por qué no tienes novio?"],
      ["{I}ก็ไม่มีแฟนมานานแล้ว", "{Ir} gâw mâi mii faen maa naan láeo", "Yo tampoco tengo pareja desde hace tiempo"],
      ["ขอไลน์ได้ไหม{p}", "khǎw lai dâai mǎi {pr}", "¿Me das tu LINE?"],
      ["ชอบคุยกับคุณ", "châwp khui gàp khun", "Me gusta hablar contigo"],
      ["ไปกินกาแฟด้วยกันไหม{p}", "bpai gin gaa-fae dûai gan mǎi {pr}", "¿Vamos a tomar un café juntos?"],
      ["พรุ่งนี้ว่างไหม", "phrûng-níi wâang mǎi", "¿Estás libre mañana?"],
      ["ไปกินข้าวเย็นกัน", "bpai gin khâao yen gan", "Vamos a cenar"],
      ["{I}เลี้ยงเอง", "{Ir} líang eeng", "Te invito yo (yo pago)"],
      ["อยากเจอคุณอีก", "yàak joe khun ìik", "Quiero volver a verte"],
      ["เจอกันวันเสาร์ไหม", "joe gan wan sǎo mǎi", "¿Nos vemos el sábado?"]
    ]
  },
  {
    id: 12, icon: "😍", title: "Cumplidos y cariño",
    tip: "«Rák khun» (te quiero) es muy fuerte en tailandés: guárdala para más adelante. «Khít thǔeng» (te echo de menos) se usa muchísimo.",
    items: [
      ["คุณสวยมาก{p}", "khun sǔai mâak {pr}", "Eres muy guapa"],
      ["น่ารักจัง", "nâa-rák jang", "¡Qué mona! / ¡Qué tierna!"],
      ["คุณยิ้มสวย", "khun yím sǔai", "Tienes una sonrisa bonita"],
      ["ตาคุณสวยมาก", "dtaa khun sǔai mâak", "Tus ojos son muy bonitos"],
      ["คุณนิสัยดีมาก", "khun ní-sǎi dii mâak", "Eres muy buena persona"],
      ["คุณหวานจัง", "khun wǎan jang", "¡Qué dulce eres!"],
      ["คุณทำให้{I}มีความสุข", "khun tham hâi {Ir} mii khwaam-sùk", "Me haces feliz"],
      ["ชอบคุณ", "châwp khun", "Me gustas"],
      ["รักคุณ", "rák khun", "Te quiero"],
      ["คิดถึง", "khít-thǔeng", "Te echo de menos"],
      ["คิดถึงคุณมาก", "khít-thǔeng khun mâak", "Te echo mucho de menos"],
      ["คิดถึง{I}ไหม", "khít-thǔeng {Ir} mǎi", "¿Me echas de menos?"],
      ["{I}ก็คิดถึงคุณ", "{Ir} gâw khít-thǔeng khun", "Yo también te echo de menos"],
      ["อยากเป็นมากกว่าเพื่อน", "yàak bpen mâak gwàa phûean", "Quiero ser más que amigos"],
      ["ฝันดีนะ", "fǎn dii ná", "Dulces sueños"]
    ]
  },
  {
    id: 13, icon: "📱", title: "Chat del día a día",
    tip: "Preguntar «¿ya has comido?» es una forma muy tailandesa de decir que te importa. Y en el chat «555» es «jajaja» (el 5 se dice «hâa»).",
    items: [
      ["อรุณสวัสดิ์{p}", "à-run sà-wàt {pr}", "Buenos días"],
      ["ทำอะไรอยู่", "tham à-rai yùu", "¿Qué haces?"],
      ["ไม่ได้ทำอะไร คิดถึงคุณ", "mâi dâai tham à-rai, khít-thǔeng khun", "Nada, pensando en ti"],
      ["กินข้าวหรือยัง", "gin khâao rǔe yang", "¿Ya has comido?"],
      ["เหนื่อยไหม", "nùeai mǎi", "¿Estás cansada?"],
      ["ง่วงนอน", "ngûang nawn", "Tengo sueño"],
      ["พักผ่อนนะ", "phák-phàwn ná", "Descansa"],
      ["ไปนอนนะ", "bpai nawn ná", "Vete a dormir"],
      ["นอนดึกไหม", "nawn dùek mǎi", "¿Te acuestas tarde?"],
      ["นอนกี่โมง", "nawn gìi moong", "¿A qué hora te acuestas?"],
      ["ยังไม่นอนอีกเหรอ", "yang mâi nawn ìik rǒe", "¿Todavía no duermes?"],
      ["อย่านอนดึกนะ", "yàa nawn dùek ná", "No te acuestes tarde"],
      ["{I}ตื่นเช้า", "{Ir} dtùen cháo", "Me levanto temprano"],
      ["ดูแลตัวเองนะ", "duu-lae dtua eeng ná", "Cuídate"],
      ["แอบดู{I}อยู่เหรอ", "àep duu {Ir} yùu rǒe", "¿Me estás espiando? (en broma)"],
      ["แอบดู", "àep duu", "Espiar (mirar a escondidas)"],
      ["สายลับ", "sǎai-láp", "Espía"]
    ]
  },
  {
    id: 14, icon: "🍲", title: "Comida tailandesa",
    tip: "«Gin» (comer) también se usa para beber: «gin náam» = beber agua. Si algo no te gusta, lo educado es «mâi à-ròi» (no está rico).",
    items: [
      ["ส้มตำ", "sôm-dtam", "Ensalada de papaya verde"],
      ["แกงเขียวหวาน", "gaeng khǐao-wǎan", "Curry verde"],
      ["แกงมัสมั่น", "gaeng mát-sà-màn", "Curry massaman (suave)"],
      ["ผัดกะเพรา", "phàt gà-phrao", "Salteado con albahaca santa"],
      ["ข้าวซอย", "khâao sawi", "Khao soi (sopa de curry del norte)"],
      ["ลาบ", "lâap", "Larb (ensalada de carne picada)"],
      ["ข้าวเหนียวมะม่วง", "khâao nǐao mà-mûang", "Arroz glutinoso con mango"],
      ["ชอบกินอะไร", "châwp gin à-rai", "¿Qué te gusta comer?"],
      ["ยังไม่เคยลอง{p}", "yang mâi khoei lawng {pr}", "Todavía no lo he probado"],
      ["อยากลอง{p}", "yàak lawng {pr}", "Quiero probarlo"],
      ["หวาน", "wǎan", "Dulce (sabor)"],
      ["ขนม", "khà-nǒm", "Postre / Dulces"],
      ["ถั่ว", "thùa", "Judías / Legumbres"],
      ["ถั่วฝักยาว", "thùa fàk yaao", "Judías verdes"],
      ["ถั่วแดง", "thùa daeng", "Alubias rojas"],
      ["ถั่วเหลือง", "thùa lǔeang", "Soja"],
      ["ถั่วลิสง", "thùa lí-sǒng", "Cacahuete"],
      ["ดื่มน้ำ", "dùuem náam", "Beber agua"],
      ["หิวน้ำ", "hǐw náam", "Tengo sed"],
      ["น้ำเย็น", "náam yen", "Agua fría"]
    ]
  },
  {
    id: 15, icon: "🌦️", title: "Clima y noticias",
    tip: "Noviembre es temporada fresca (rúe-duu nǎao), pero aun así hace calor. «Fǒn dtòk nàk» = llueve fuerte (literalmente «pesado»).",
    items: [
      ["อากาศ", "aa-gàat", "El tiempo / El clima"],
      ["วันนี้อากาศเป็นยังไง", "wan-níi aa-gàat bpen yang-ngai", "¿Qué tiempo hace hoy?"],
      ["อากาศดี", "aa-gàat dii", "Hace buen tiempo"],
      ["ฝน", "fǒn", "Lluvia"],
      ["ตอนนี้ฝนตกหนักมาก", "dtawn-níi fǒn dtòk nàk mâak", "Ahora está lloviendo mucho"],
      ["ที่นั่นฝนตกไหม", "thîi-nân fǒn dtòk mǎi", "¿Allí llueve?"],
      ["ฝนจะตกไหม", "fǒn jà dtòk mǎi", "¿Va a llover?"],
      ["แดดร้อน", "dàet ráwn", "Hace un sol fuerte"],
      ["มีเมฆ", "mii mêek", "Está nublado"],
      ["ลมแรง", "lom raeng", "Hace mucho viento"],
      ["พายุ", "phaa-yú", "Tormenta"],
      ["ฟ้าร้อง", "fáa ráwng", "Truenos"],
      ["น้ำท่วม", "náam thûam", "Inundación"],
      ["หนาว", "nǎao", "Hace frío"],
      ["อุณหภูมิ", "un-hà-phuum", "Temperatura"],
      ["กี่องศา", "gìi ong-sǎa", "¿Cuántos grados hace?"],
      ["สามสิบองศา", "sǎam-sìp ong-sǎa", "30 grados"],
      ["ข่าว", "khàao", "Noticias"],
      ["ดูข่าวหรือยัง", "duu khàao rǔe yang", "¿Has visto las noticias?"],
      ["พยากรณ์อากาศ", "phá-yaa-gawn aa-gàat", "Previsión del tiempo"],
      ["วันนี้ร้อนมาก ดื่มน้ำเยอะๆ นะ", "wan-níi ráwn mâak, dùuem náam yóe-yóe ná", "Hoy hace mucho calor, bebe mucha agua"]
    ]
  },
  {
    id: 16, icon: "✅", title: "Sí y no",
    tip: "En tailandés casi siempre se responde repitiendo el verbo. A «¿châwp mǎi?» (¿te gusta?) respondes «châwp» (sí) o «mâi châwp» (no).",
    items: [
      ["ใช่", "châi", "Sí, eso es"],
      ["ครับ", "khráp", "Sí (educado, lo dice un hombre)"],
      ["ได้", "dâai", "Sí, vale / Se puede"],
      ["ไม่", "mâi", "No"],
      ["ไม่ใช่", "mâi châi", "No, no es así"],
      ["ไม่เป็นไร", "mâi bpen rai", "No pasa nada"],
      ["ไม่เอา{p}", "mâi ao {pr}", "No, gracias (no quiero)"],
      ["ชอบไหม", "châwp mǎi", "¿Te gusta?"],
      ["ชอบ", "châwp", "Sí, me gusta"],
      ["ไม่ชอบ", "mâi châwp", "No me gusta"]
    ]
  },
  {
    id: 17, icon: "📅", title: "Días de la semana y números",
    tip: "Todos los días empiezan por «wan» (día). Números: el 1 al final se dice «èt» (11 = sìp-èt) y el 20 es «yîi-sìp».",
    items: [
      ["วันจันทร์", "wan jan", "Lunes"],
      ["วันอังคาร", "wan ang-khaan", "Martes"],
      ["วันพุธ", "wan phút", "Miércoles"],
      ["วันพฤหัสบดี", "wan phá-rúe-hàt", "Jueves"],
      ["วันศุกร์", "wan sùk", "Viernes"],
      ["วันเสาร์", "wan sǎo", "Sábado"],
      ["วันอาทิตย์", "wan aa-thít", "Domingo"],
      ["วันนี้วันอะไร", "wan-níi wan à-rai", "¿Qué día es hoy?"],
      ["ศูนย์", "sǔun", "Cero (0)", ["0"]],
      ["สิบห้า", "sìp-hâa", "Quince (15)", ["15"]],
      ["ยี่สิบเอ็ด", "yîi-sìp-èt", "Veintiuno (21)", ["21"]],
      ["สามสิบ", "sǎam-sìp", "Treinta (30)", ["30"]],
      ["สี่สิบห้า", "sìi-sìp-hâa", "Cuarenta y cinco (45)", ["45"]],
      ["หนึ่งหมื่น", "nùeng mùen", "Diez mil (10.000)", ["10000"]],
      ["หนึ่งแสน", "nùeng sǎen", "Cien mil (100.000)", ["100000"]]
    ]
  },
  {
    id: 18, icon: "🐘", title: "Animales",
    tip: "Animal se dice «sàt». El elefante (cháang) es el animal nacional de Tailandia. Las lagartijas de las paredes son «jîng-jòk».",
    items: [
      ["หมา", "mǎa", "Perro"],
      ["แมว", "maeo", "Gato"],
      ["นก", "nók", "Pájaro"],
      ["กระต่าย", "grà-dtàai", "Conejo"],
      ["เป็ด", "bpèt", "Pato"],
      ["วัว", "wua", "Vaca"],
      ["ควาย", "khwaai", "Búfalo"],
      ["ม้า", "máa", "Caballo"],
      ["ช้าง", "cháang", "Elefante"],
      ["เสือ", "sǔea", "Tigre"],
      ["ลิง", "ling", "Mono"],
      ["งู", "nguu", "Serpiente"],
      ["จระเข้", "jaw-rá-khêe", "Cocodrilo"],
      ["เต่า", "dtào", "Tortuga"],
      ["หมี", "mǐi", "Oso"],
      ["ปลาโลมา", "bplaa loo-maa", "Delfín"],
      ["ปลาฉลาม", "bplaa chà-lǎam", "Tiburón"],
      ["จิ้งจก", "jîng-jòk", "Lagartija"],
      ["ตุ๊กแก", "dtúk-gae", "Geco grande (tokay)"],
      ["มีสัตว์เลี้ยงไหม", "mii sàt líang mǎi", "¿Tienes mascota?"],
      ["{I}ชอบแมว", "{Ir} châwp maeo", "Me gustan los gatos"]
    ]
  },
  {
    id: 19, icon: "🐜", title: "Insectos y ¡qué asco!",
    tip: "Insecto se dice «má-laeng». Lleva repelente («yaa gan yung») y, si algo te da asco, la exclamación típica es «ǐi!».",
    items: [
      ["ยุง", "yung", "Mosquito"],
      ["ยุงกัด", "yung gàt", "Me ha picado un mosquito"],
      ["ยากันยุง", "yaa gan yung", "Repelente de mosquitos"],
      ["แมลงวัน", "má-laeng wan", "Mosca"],
      ["มด", "mót", "Hormiga"],
      ["แมลงสาบ", "má-laeng sàap", "Cucaracha"],
      ["ผึ้ง", "phûeng", "Abeja"],
      ["ผีเสื้อ", "phǐi-sûea", "Mariposa"],
      ["แมงมุม", "maeng-mum", "Araña"],
      ["แมงป่อง", "maeng-bpàwng", "Escorpión"],
      ["จิ้งหรีด", "jîng-rìit", "Grillo"],
      ["ตะขาบ", "dtà-khàap", "Ciempiés"],
      ["{I}กลัวแมลงสาบ", "{Ir} glua má-laeng sàap", "Me dan miedo las cucarachas"],
      ["น่ารังเกียจ", "nâa rang-gìat", "Asqueroso"],
      ["ขยะแขยง", "khà-yà-khà-yǎeng", "Me da asco"],
      ["อี๋", "ǐi", "¡Qué asco!"],
      ["สกปรก", "sòk-gà-bpròk", "Sucio"],
      ["เหม็น", "měn", "Huele mal"],
      ["ไม่อร่อย", "mâi à-ròi", "No está rico"]
    ]
  },
  {
    id: 20, icon: "📚", title: "Lectura y amigos",
    tip: "«Àan nǎng-sǔe» significa leer un libro, pero también se usa para decir «estudiar».",
    items: [
      ["อ่าน", "àan", "Leer"],
      ["หนังสือ", "nǎng-sǔe", "Libro"],
      ["อ่านหนังสือ", "àan nǎng-sǔe", "Leer un libro / Estudiar"],
      ["นิยาย", "ní-yaai", "Novela"],
      ["การ์ตูน", "gaa-dtuun", "Cómic / Dibujos"],
      ["ห้องสมุด", "hâwng sà-mùt", "Biblioteca"],
      ["ร้านหนังสือ", "ráan nǎng-sǔe", "Librería"],
      ["เขียน", "khǐan", "Escribir"],
      ["คำ", "kham", "Palabra"],
      ["{I}ชอบอ่านหนังสือ", "{Ir} châwp àan nǎng-sǔe", "Me gusta leer"],
      ["อ่านอะไรอยู่", "àan à-rai yùu", "¿Qué estás leyendo?"],
      ["{I}ยังอ่านภาษาไทยไม่ได้", "{Ir} yang àan phaa-sǎa thai mâi dâai", "Todavía no sé leer tailandés"],
      ["เพื่อนสนิท", "phûean sà-nìt", "Mejor amigo / amiga"],
      ["เขาเป็นเพื่อน{I}", "khǎo bpen phûean {Ir}", "Es mi amigo"],
      ["ไปกับเพื่อนเหรอ", "bpai gàp phûean rǒe", "¿Vas con tus amigas?"],
      ["เป็นเพื่อนกัน", "bpen phûean gan", "Solo amigos"]
    ]
  }
];

// Guía de frases con audio (antes frases.html). Cada frase: [tailandés, pronunciación, significado, literal, ejemplo opcional]
window.GUIDE = [{"t": "Saludos y cortesía", "r": [["สวัสดีครับ", "sawàt-dii khráp", "Hola / Adiós", "bienestar (cortesía)"], ["สบายดีไหมครับ", "sabaai-dii mái khráp", "¿Cómo estás?", "cómodo bien ¿no? (cortesía)"], ["สบายดีครับ", "sabaai-dii khráp", "Estoy bien", "cómodo bien (cortesía)"], ["แล้วคุณล่ะ", "láew khun lâ", "¿Y tú?", "y tú ¿eh?"], ["วันนี้เป็นยังไงบ้าง", "wan-níi pen yang-ngai bâang", "¿Qué tal tu día?", "día este es cómo un poco"], ["ขอบคุณครับ", "khàwp-khun khráp", "Gracias", "recibir favor (cortesía)"], ["ไม่เป็นไร", "mâi pen rai", "De nada / No pasa nada", "no es nada"], ["ขอโทษครับ", "khǎw-thôot khráp", "Perdón / Disculpe", "pedir castigo"], ["ยินดีที่ได้รู้จัก", "yin-dii thîi dâi rúu-jàk", "Encantado de conocerte", "contento que pude conocer"], ["แล้วเจอกันครับ", "láew jer gan khráp", "Nos vemos", "luego encontrarnos mutuamente"], ["ฝันดี", "fǎn dii", "Buenas noches", "soñar bien"]]}, {"t": "Conversación", "r": [["คุณชื่ออะไร", "khun chûe a-rai", "¿Cómo te llamas?", "tú nombre qué"], ["ผมชื่อฟาเบียน", "phǒm chûe Fabian", "Me llamo Fabián", "yo (hombre) nombre Fabián"], ["ผมมาจากสเปน", "phǒm maa jàak sa-peen", "Soy de España", "yo venir desde España"], ["คุณอายุเท่าไหร่", "khun aa-yú thâo-rài", "¿Cuántos años tienes?", "tú edad cuánto"], ["ผมพูดไทยนิดหน่อย", "phǒm phûut thai nít-nòi", "Hablo un poco de tailandés", "yo hablar tailandés poquito"], ["ไม่เข้าใจครับ", "mâi khâo-jai khráp", "No entiendo", "no entrar corazón"], ["พูดช้าๆ หน่อยได้ไหม", "phûut cháa-cháa nòi dâi mái", "¿Puedes hablar más despacio?", "hablar lento-lento un poco ¿puede no?"], ["อันนี้ภาษาไทยเรียกว่าอะไร", "an-níi phaa-sǎa thai rîak wâa a-rai", "¿Cómo se dice esto en tailandés?", "esto idioma tailandés llamar que qué"], ["ใช่ / ไม่ใช่", "châi / mâi châi", "Sí / No", "correcto / no correcto"], ["จริงเหรอ", "jing rǒe", "¿En serio?", "verdad ¿eh?"], ["เยี่ยมเลย", "yîam loei", "¡Genial!", "excelente del todo"], ["สนุกมาก", "sa-nùk mâak", "Muy divertido", "divertido mucho"], ["เป็นไงบ้างครับ", "pen ngai bâang khráp", "¿Qué tal? / ¿Cómo va?", "es cómo un poco (cortesía)"], ["กินข้าวหรือยังครับ", "kin khâao rǔe yang khráp", "¿Has comido ya? (saludo típico)", "comer arroz o todavía (cortesía)"], ["ไปไหนครับ", "pai nǎi khráp", "¿A dónde vas?", "ir dónde (cortesía)"], ["ทำอะไรอยู่ครับ", "tham a-rai yùu khráp", "¿Qué estás haciendo?", "hacer qué estar (cortesía)"]]}, {"t": "Comida y compras", "r": [["อร่อยมาก", "a-ròi mâak", "Está muy rico", "delicioso mucho"], ["ไม่เผ็ด", "mâi phèt", "Sin picante", "no picante"], ["เผ็ดนิดหน่อย", "phèt nít-nòi", "Un poco picante", "picante poquito"], ["เช็คบิลครับ", "chék bin khráp", "La cuenta, por favor", "check bill (cortesía)"], ["เท่าไหร่ครับ", "thâo-rài khráp", "¿Cuánto cuesta?", "cuánto (cortesía)"], ["ลดได้ไหม", "lót dâi mái", "¿Me hace descuento?", "bajar ¿puede no?"], ["แพงไป", "phaeng pai", "Es demasiado caro", "caro pasarse"], ["ห้องน้ำอยู่ที่ไหน", "hâwng-náam yùu thîi-nǎi", "¿Dónde está el baño?", "cuarto agua estar dónde"], ["อันนี้เท่าไหร่ครับ", "an-níi thâo-rài khráp", "¿Cuánto cuesta esto?", "esto cuánto (cortesía)"], ["เอาอันนี้ครับ", "ao an-níi khráp", "Me llevo este", "tomar esto (cortesía)"]]}, {"t": "Restaurante", "r": [["ขอเมนูหน่อย", "khǎw mee-nuu nòi", "¿Me trae la carta?", "pedir menú un poco"], ["ขอน้ำเปล่า", "khǎw náam-plàao", "Agua, por favor", "pedir agua vacía (natural)"], ["ขอเบียร์หนึ่งขวด", "khǎw bia nùeng khùat", "Una cerveza, por favor", "pedir cerveza una botella"], ["ไม่ใส่ผักชี", "mâi sài phàk-chii", "Sin cilantro", "no poner cilantro"], ["ผมแพ้ถั่ว", "phǒm pháe thùa", "Soy alérgico a los cacahuetes", "yo perder-contra cacahuete"], ["กินที่นี่ / กลับบ้าน", "kin thîi-nîi / klàp bâan", "Para tomar aquí / para llevar", "comer aquí / volver casa"], ["อิ่มแล้ว", "ìm láew", "Ya estoy lleno", "lleno ya"], ["ไม่ใส่น้ำแข็ง", "mâi sài náam-khǎeng", "Sin hielo", "no poner agua dura"]]}, {"t": "Hotel", "r": [["ผมจองห้องไว้", "phǒm jawng hâwng wái", "Tengo una reserva", "yo reservar habitación guardado"], ["มีห้องว่างไหม", "mii hâwng wâang mái", "¿Hay habitaciones libres?", "hay habitación vacía ¿no?"], ["คืนละเท่าไหร่", "khuen lá thâo-rài", "¿Cuánto por noche?", "noche cada cuánto"], ["เช็คอิน / เช็คเอาท์กี่โมง", "chék-in / chék-áo kìi moong", "¿A qué hora es el check-in / check-out?", "check-in cuántas horas"], ["รหัสไวไฟคืออะไร", "rá-hàt wai-fai khue a-rai", "¿Cuál es la clave del wifi?", "código wifi es qué"], ["แอร์เสีย", "ae sǐa", "El aire acondicionado no funciona", "aire estropeado"], ["ขอผ้าเช็ดตัวเพิ่ม", "khǎw phâa-chét-tua phôem", "¿Me da más toallas?", "pedir tela secar cuerpo más"], ["ฝากกระเป๋าได้ไหม", "fàak krà-pǎo dâi mái", "¿Puedo dejar la maleta?", "confiar maleta ¿puede no?"]]}, {"t": "Taxi y transporte", "r": [["ไป...ครับ", "pai ... khráp", "A ... por favor", "ir ... (cortesía)"], ["ไปสนามบิน", "pai sa-nǎam-bin", "Al aeropuerto", "ir campo volar"], ["เปิดมิเตอร์ได้ไหม", "pòet mí-toe dâi mái", "¿Puede poner el taxímetro?", "abrir metro ¿puede no?"], ["ไปเท่าไหร่", "pai thâo-rài", "¿Cuánto cuesta ir?", "ir cuánto"], ["จอดตรงนี้", "jàwt trong-níi", "Pare aquí", "aparcar justo aquí"], ["เลี้ยวซ้าย / เลี้ยวขวา", "líao sáai / líao khwǎa", "Gire a la izquierda / derecha", "girar izquierda / derecha"], ["ตรงไป", "trong pai", "Todo recto", "recto ir"], ["ช้าๆ หน่อย", "cháa-cháa nòi", "Más despacio", "lento-lento un poco"], ["...อยู่ที่ไหน", "... yùu thîi-nǎi", "¿Dónde está...?", "... estar dónde"], ["ไกลไหม", "klai mái", "¿Está lejos?", "lejos ¿no?"], ["ใกล้", "klâi", "Cerca", "cerca"], ["สถานีรถไฟฟ้า", "sa-thǎa-nii rót-fai-fáa", "Estación de metro (BTS)", "estación vehículo fuego cielo"]]}, {"t": "Aeropuerto y llegada", "r": [["ผมมาเที่ยวครับ", "phǒm maa thîao khráp", "Vengo de vacaciones", "yo venir pasear (cortesía)"], ["ผมอยู่สองอาทิตย์", "phǒm yùu sǎawng aa-thít", "Me quedo dos semanas", "yo estar dos semanas"], ["ซื้อซิมการ์ดได้ที่ไหน", "súe sim-káat dâi thîi-nǎi", "¿Dónde compro una tarjeta SIM?", "comprar SIM poder dónde"], ["แลกเงินได้ที่ไหน", "lâek ngoen dâi thîi-nǎi", "¿Dónde puedo cambiar dinero?", "cambiar dinero poder dónde"], ["ตู้เอทีเอ็มอยู่ที่ไหน", "tûu ee-thii-em yùu thîi-nǎi", "¿Dónde hay un cajero?", "armario ATM estar dónde"], ["ประตูขึ้นเครื่องอยู่ที่ไหน", "pra-tuu khûen khrûeang yùu thîi-nǎi", "¿Dónde está la puerta de embarque?", "puerta subir máquina estar dónde"], ["กระเป๋าผมหาย", "krà-pǎo phǒm hǎai", "Mi maleta se ha perdido", "maleta yo desaparecer"], ["ที่นี่ที่ไหนครับ", "thîi-nîi thîi-nǎi khráp", "¿Dónde estamos?", "aquí dónde (cortesía)"]]}, {"t": "Compras y mercado", "r": [["ขอดูหน่อยได้ไหม", "khǎw duu nòi dâi mái", "¿Puedo verlo?", "pedir mirar un poco ¿puede no?"], ["ลองได้ไหม", "lawng dâi mái", "¿Me lo puedo probar?", "probar ¿puede no?"], ["มีไซส์ใหญ่กว่านี้ไหม", "mii sái yài kwàa níi mái", "¿Lo hay más grande?", "hay talla grande más que esto ¿no?"], ["มีสีอื่นไหม", "mii sǐi ùen mái", "¿Lo hay en otro color?", "hay color otro ¿no?"], ["สองอันร้อยบาทได้ไหม", "sǎawng an ráwy bàat dâi mái", "¿Dos por 100 baht?", "dos cosa cien baht ¿puede no?"], ["ราคาสุดท้ายเท่าไหร่", "raa-khaa sùt-tháai thâo-rài", "¿Cuál es el último precio?", "precio final cuánto"], ["รับบัตรเครดิตไหม", "ráp bàt khre-dìt mái", "¿Aceptan tarjeta?", "recibir tarjeta crédito ¿no?"], ["ขอถุงด้วย", "khǎw thǔng dûay", "Una bolsa, por favor", "pedir bolsa también"], ["ไม่เป็นไรครับ แค่ดูเฉยๆ", "mâi pen rai khráp, khâe duu chǒei-chǒei", "No gracias, solo estoy mirando", "no es nada, solo mirar sin más"]]}, {"t": "Playa, templos y excursiones", "r": [["ไปทะเลยังไง", "pai tha-lee yang-ngai", "¿Cómo se va a la playa?", "ir mar cómo"], ["เรือไปเกาะออกกี่โมง", "ruea pai kàw àwk kìi moong", "¿A qué hora sale el barco a la isla?", "barco ir isla salir cuántas horas"], ["ตั๋วไปกลับเท่าไหร่", "tǔa pai klàp thâo-rài", "¿Cuánto es la ida y vuelta?", "billete ir volver cuánto"], ["ถ่ายรูปได้ไหม", "thàai rûup dâi mái", "¿Se pueden hacer fotos?", "sacar foto ¿puede no?"], ["ช่วยถ่ายรูปให้หน่อยได้ไหม", "chûay thàai rûup hâi nòi dâi mái", "¿Me hace una foto, por favor?", "ayudar sacar foto dar un poco ¿puede no?"], ["ต้องถอดรองเท้าไหม", "tâwng thàwt rawng-tháo mái", "¿Hay que quitarse los zapatos?", "deber quitar zapatos ¿no?"], ["เช่ามอเตอร์ไซค์วันละเท่าไหร่", "châo maw-toe-sai wan lá thâo-rài", "¿Cuánto cuesta alquilar una moto al día?", "alquilar moto día cada cuánto"], ["นวดไทยชั่วโมงละเท่าไหร่", "nûat thai chûa-moong lá thâo-rài", "¿Cuánto cuesta una hora de masaje tailandés?", "masaje tailandés hora cada cuánto"], ["เบาๆ หน่อย / แรงอีกหน่อย", "bao-bao nòi / raeng ìik nòi", "Más suave / Más fuerte (en el masaje)", "suave-suave un poco / fuerte más un poco"], ["สวยมาก", "sǔay mâak", "¡Qué bonito!", "bonito mucho"]]}, {"t": "Emergencias y salud", "r": [["ช่วยด้วย", "chûay dûay", "¡Socorro!", "ayudar también"], ["เรียกตำรวจ", "rîak tam-rùat", "¡Llame a la policía!", "llamar policía"], ["โรงพยาบาลอยู่ที่ไหน", "roong-pha-yaa-baan yùu thîi-nǎi", "¿Dónde está el hospital?", "edificio cuidar enfermo estar dónde"], ["ร้านขายยา", "ráan khǎai yaa", "Farmacia", "tienda vender medicina"], ["ผมไม่สบาย", "phǒm mâi sa-baai", "Me encuentro mal", "yo no cómodo"], ["ปวดหัว / ปวดท้อง", "pùat hǔa / pùat tháwng", "Me duele la cabeza / la tripa", "doler cabeza / doler barriga"], ["ผมหลงทาง", "phǒm lǒng thaang", "Me he perdido", "yo perderse camino"], ["กระเป๋าตังค์หาย", "krà-pǎo-tang hǎai", "He perdido la cartera", "bolsa dinero desaparecer"]]}, {"t": "Ligar y amistad", "r": [["คุณสวยมาก", "khun sǔay mâak", "Eres muy guapa", "tú bonita mucho"], ["คุณหล่อมาก", "khun làw mâak", "Eres muy guapo", "tú guapo mucho"], ["มีแฟนหรือยัง", "mii faen rǔe yang", "¿Tienes pareja?", "tener novio(a) o todavía"], ["ไปดื่มด้วยกันไหม", "pai dùem dûay-kan mái", "¿Vamos a tomar algo?", "ir beber juntos ¿no?"], ["ขอไลน์ได้ไหม", "khǎw lai dâi mái", "¿Me das tu LINE?", "pedir LINE ¿puede no? (LINE es el WhatsApp de allí)"], ["คุณยิ้มสวย", "khun yím sǔay", "Tienes una sonrisa bonita", "tú sonreír bonito"], ["ผมชอบคุณ", "phǒm châwp khun", "Me gustas", "yo gustar tú"], ["คิดถึง", "khít-thǔeng", "Te echo de menos", "pensar llegar"], ["รักนะ", "rák ná", "Te quiero", "amar (cariño)"], ["น่ารัก", "nâa-rák", "Qué mono/a", "digno de amar"], ["คุณมาจากไหน", "khun maa jàak nǎi", "¿De dónde eres?", "tú venir desde dónde"], ["คุณทำงานอะไร", "khun tham-ngaan a-rai", "¿A qué te dedicas?", "tú hacer trabajo qué"], ["ขอนั่งด้วยได้ไหม", "khǎw nâng dûay dâi mái", "¿Puedo sentarme contigo?", "pedir sentar también ¿puede no?"], ["คุณน่ารักมาก", "khun nâa-rák mâak", "Eres muy mona / mono", "tú digno de amar mucho"], ["ตาคุณสวยมาก", "taa khun sǔay mâak", "Tienes unos ojos preciosos", "ojos tú bonitos mucho"], ["คุณแต่งตัวสวย", "khun tàeng-tua sǔay", "Vas muy guapa", "tú vestirse bonito"], ["หอมจัง", "hǎwm jang", "¡Qué bien hueles!", "oloroso tan"], ["คุณตลกมาก", "khun ta-lòk mâak", "Eres muy gracioso/a", "tú gracioso mucho"], ["ผมโสด", "phǒm sòot", "Estoy soltero", "yo soltero"], ["เต้นด้วยกันไหม", "tên dûay-kan mái", "¿Bailamos?", "bailar juntos ¿no?"], ["ถ่ายรูปด้วยกันไหม", "thàai rûup dûay-kan mái", "¿Nos hacemos una foto juntos?", "sacar foto juntos ¿no?"], ["ขอเบอร์โทรได้ไหม", "khǎw ber thoo dâi mái", "¿Me das tu número?", "pedir número teléfono ¿puede no?"], ["ไปกินข้าวด้วยกันไหม", "pai kin khâao dûay-kan mái", "¿Vamos a cenar juntos?", "ir comer arroz juntos ¿no?"], ["พรุ่งนี้ว่างไหม", "phrûng-níi wâang mái", "¿Estás libre mañana?", "mañana libre ¿no?"], ["เจอกันอีกได้ไหม", "jer kan ìik dâi mái", "¿Podemos volver a vernos?", "encontrarnos otra vez ¿puede no?"], ["ส่งข้อความหาผมนะ", "sòng khâw-khwaam hǎa phǒm ná", "Escríbeme, ¿vale?", "enviar mensaje hacia yo (cariño)"], ["กลับบ้านดีๆ นะ", "klàp bâan dii-dii ná", "Que llegues bien a casa", "volver casa bien-bien (cariño)"], ["ผมมีความสุขที่ได้อยู่กับคุณ", "phǒm mii khwaam-sùk thîi dâi yùu kàp khun", "Soy feliz contigo", "yo tener felicidad que poder estar con tú"], ["ที่รัก", "thîi-rák", "Cariño / mi amor", "que amar"], ["รักคุณ", "rák khun", "Te quiero", "amar tú"], ["คิดถึงนะ", "khít-thǔeng ná", "Te echo de menos, ¿eh?", "pensar llegar (cariño)"], ["ฝันดีนะ", "fǎn dii ná", "Dulces sueños", "soñar bien (cariño)"]]}, {"t": "Números básicos", "r": [["หนึ่ง สอง สาม สี่ ห้า", "nùeng, sǎawng, sǎam, sìi, hâa", "1, 2, 3, 4, 5", ""], ["หก เจ็ด แปด เก้า สิบ", "hòk, jèt, pàet, kâo, sìp", "6, 7, 8, 9, 10", ""], ["ร้อย / พัน", "ráwy / phan", "100 / 1000", ""], ["บาท", "bàat", "baht (la moneda)", ""]]}, {"t": "Expresiones muy útiles", "r": [["ได้ / ไม่ได้", "dâi / mâi dâi", "Sí se puede / No se puede", "poder / no poder"], ["เอา / ไม่เอา", "ao / mâi ao", "Lo quiero / No lo quiero", "tomar / no tomar"], ["พอแล้ว", "phaw láew", "Ya es suficiente", "bastar ya"], ["รอแป๊บนึง", "raw páep nueng", "Espera un momento", "esperar momentito uno"], ["ไม่รู้", "mâi rúu", "No sé", "no saber"], ["ไม่มีปัญหา", "mâi mii pan-hǎa", "Sin problema", "no hay problema"], ["สบายๆ", "sa-baai sa-baai", "Tranquilo, relax", "cómodo cómodo"], ["ใจเย็นๆ", "jai yen yen", "Calma", "corazón frío frío"], ["ได้ไหมครับ", "dâi mái khráp", "¿Se puede? / ¿Puedo?", "poder ¿no? (cortesía)"]]}, {"t": "Emociones y cómo estás", "r": [["ผมดีใจ", "phǒm dii-jai", "Estoy contento", "yo bueno corazón"], ["ผมมีความสุข", "phǒm mii khwaam-sùk", "Soy feliz", "yo tener felicidad"], ["ผมเศร้า", "phǒm sâo", "Estoy triste", "yo triste"], ["ผมโกรธ", "phǒm kròot", "Estoy enfadado", "yo enfadado"], ["ผมเหนื่อย", "phǒm nùeay", "Estoy cansado", "yo cansado"], ["ผมง่วง", "phǒm ngûang", "Tengo sueño", "yo sueño"], ["ผมหิว", "phǒm hǐw", "Tengo hambre", "yo hambre"], ["ผมหิวน้ำ", "phǒm hǐw náam", "Tengo sed", "yo hambre agua"], ["ผมร้อน / ผมหนาว", "phǒm ráwn / phǒm nǎao", "Tengo calor / Tengo frío", "yo caliente / yo frío"], ["ผมเบื่อ", "phǒm bùea", "Estoy aburrido", "yo aburrido"], ["ผมตื่นเต้น", "phǒm tùen-tên", "Estoy emocionado / nervioso", "yo despertar-saltar"], ["ผมกลัว", "phǒm klua", "Tengo miedo", "yo miedo"], ["ผมเครียด", "phǒm khrîat", "Estoy estresado", "yo estrés"], ["ผมเหงา", "phǒm ngǎo", "Me siento solo", "yo solitario"], ["ผมเขิน", "phǒm khǒen", "Me da vergüenza (me sonrojo)", "yo tímido"], ["ผมเมา", "phǒm mao", "Estoy borracho", "yo borracho"], ["ผมอิ่ม", "phǒm ìm", "Estoy lleno", "yo lleno"], ["ผมสบายดี", "phǒm sa-baai dii", "Estoy bien", "yo cómodo bien"], ["ไม่เป็นไร ไม่ต้องห่วง", "mâi pen rai, mâi tâwng hùang", "No pasa nada, no te preocupes", "no es nada, no deber preocupar"], ["คุณโอเคไหม", "khun oo-khee mái", "¿Estás bien?", "tú ok ¿no?"]]}, {"t": "Animales", "r": [["หมา", "mǎa", "Perro", "perro"], ["แมว", "maew", "Gato", "gato"], ["ช้าง", "cháang", "Elefante (símbolo de Tailandia)", "elefante"], ["ลิง", "ling", "Mono", "mono"], ["นก", "nók", "Pájaro", "pájaro"], ["ปลา", "plaa", "Pez / pescado", "pez"], ["ไก่", "kài", "Pollo / gallina", "gallina"], ["หมู", "mǔu", "Cerdo", "cerdo"], ["วัว", "wua", "Vaca", "vaca"], ["ม้า", "máa", "Caballo", "caballo"], ["เสือ", "sǔea", "Tigre", "tigre"], ["งู", "nguu", "Serpiente", "serpiente"], ["จิ้งจก", "jîng-jòk", "Lagartija (las de las paredes)", "lagartija"], ["ตุ๊กแก", "túk-kae", "Geco (el que grita \"to-kay\")", "geco"], ["ยุง", "yung", "Mosquito", "mosquito"], ["เต่า", "tào", "Tortuga", "tortuga"], ["กุ้ง", "kûng", "Gamba", "gamba"], ["ปู", "puu", "Cangrejo", "cangrejo"], ["หมึก", "mùek", "Calamar", "tinta"], ["ผีเสื้อ", "phǐi-sûea", "Mariposa", "fantasma camisa"]]}, {"t": "Colores", "r": [["สีแดง", "sǐi daeng", "Rojo", "color rojo"], ["สีน้ำเงิน", "sǐi náam-ngoen", "Azul", "color agua plata"], ["สีฟ้า", "sǐi fáa", "Azul claro", "color cielo"], ["สีเขียว", "sǐi khǐao", "Verde", "color verde"], ["สีเหลือง", "sǐi lǔeang", "Amarillo", "color amarillo"], ["สีส้ม", "sǐi sôm", "Naranja", "color naranja"], ["สีชมพู", "sǐi chom-puu", "Rosa", "color rosa"], ["สีม่วง", "sǐi mûang", "Morado", "color morado"], ["สีดำ", "sǐi dam", "Negro", "color negro"], ["สีขาว", "sǐi khǎao", "Blanco", "color blanco"], ["สีน้ำตาล", "sǐi náam-taan", "Marrón", "color agua azúcar"], ["สีเทา", "sǐi thao", "Gris", "color ceniza"]]}, {"t": "Familia y personas", "r": [["พ่อ / แม่", "phâw / mâe", "Padre / madre", "padre / madre"], ["พี่", "phîi", "Hermano/a mayor (y forma de llamar a alguien mayor)", "mayor"], ["น้อง", "náwng", "Hermano/a menor (y forma de llamar a alguien más joven)", "menor"], ["ลูก", "lûuk", "Hijo / hija", "hijo"], ["ปู่ ย่า / ตา ยาย", "pùu yâa / taa yaai", "Abuelos (paternos / maternos)", "abuelo abuela"], ["สามี / ภรรยา", "sǎa-mii / phan-ra-yaa", "Marido / esposa", "marido / esposa"], ["แฟน", "faen", "Novio/a, pareja", "pareja"], ["เพื่อน", "phûean", "Amigo/a", "amigo"], ["ผู้ชาย / ผู้หญิง", "phûu-chaai / phûu-yǐng", "Hombre / mujer", "persona macho / persona hembra"], ["เด็ก", "dèk", "Niño/a", "niño"], ["ครอบครัว", "khrâwp-khrua", "Familia", "familia"]]}, {"t": "Tiempo y clima", "r": [["วันนี้ / พรุ่งนี้ / เมื่อวาน", "wan-níi / phrûng-níi / mûea-waan", "Hoy / mañana / ayer", "día este / mañana / cuando ayer"], ["ตอนเช้า / ตอนเย็น / ตอนกลางคืน", "tawn cháo / tawn yen / tawn klaang-khuen", "Por la mañana / tarde / noche", "momento mañana / fresco / medio noche"], ["ตอนนี้", "tawn-níi", "Ahora", "momento este"], ["กี่โมงแล้ว", "kìi moong láew", "¿Qué hora es?", "cuántas horas ya"], ["อากาศร้อนมาก", "aa-kàat ráwn mâak", "Hace mucho calor", "aire caliente mucho"], ["อากาศดี", "aa-kàat dii", "Hace buen tiempo", "aire bueno"], ["ฝนตก", "fǒn tòk", "Está lloviendo", "lluvia caer"], ["แดดแรง", "dàet raeng", "El sol pega fuerte", "sol fuerte"], ["หนาว", "nǎao", "Hace frío", "frío"], ["ลมแรง", "lom raeng", "Hace mucho viento", "viento fuerte"]]}, {"t": "Palabras sueltas: comida y bebida", "r": [["ข้าว", "khâao", "Arroz / comida", ""], ["น้ำ", "náam", "Agua", ""], ["กาแฟ", "kaa-fae", "Café", ""], ["ชา", "chaa", "Té", ""], ["เบียร์", "bia", "Cerveza", ""], ["นม", "nom", "Leche", ""], ["น้ำแข็ง", "náam-khǎeng", "Hielo", "agua dura"], ["ผลไม้", "phǒn-la-mái", "Fruta", ""], ["มะม่วง", "ma-mûang", "Mango", ""], ["มะพร้าว", "ma-phráao", "Coco", ""], ["ไข่", "khài", "Huevo", ""], ["เนื้อ", "núea", "Carne de ternera", ""], ["ผัก", "phàk", "Verdura", ""], ["เผ็ด", "phèt", "Picante", ""], ["หวาน", "wǎan", "Dulce", ""], ["เค็ม", "khem", "Salado", ""], ["เปรี้ยว", "prîao", "Ácido", ""], ["อร่อย", "a-ròi", "Rico, delicioso", ""]]}, {"t": "Palabras sueltas: lugares y cosas", "r": [["ห้องน้ำ", "hâwng-náam", "Baño", "cuarto agua"], ["โรงแรม", "roong-raem", "Hotel", ""], ["ร้านอาหาร", "ráan aa-hǎan", "Restaurante", "tienda comida"], ["ตลาด", "ta-làat", "Mercado", ""], ["วัด", "wát", "Templo", ""], ["ทะเล", "tha-lee", "Mar / playa", ""], ["เกาะ", "kàw", "Isla", ""], ["สนามบิน", "sa-nǎam-bin", "Aeropuerto", "campo volar"], ["ถนน", "tha-nǒn", "Calle", ""], ["โรงพยาบาล", "roong-pha-yaa-baan", "Hospital", ""], ["เงิน", "ngoen", "Dinero", ""], ["ตั๋ว", "tǔa", "Billete, entrada", ""], ["กระเป๋า", "krà-pǎo", "Bolso / maleta", ""], ["โทรศัพท์", "thoo-ra-sàp", "Teléfono", ""], ["พาสปอร์ต", "pháat-sa-pàwt", "Pasaporte", ""], ["แผนที่", "phǎen-thîi", "Mapa", ""], ["กุญแจ", "kun-jae", "Llave", ""], ["ครีมกันแดด", "khriim kan dàet", "Crema solar", "crema proteger sol"], ["ยากันยุง", "yaa kan yung", "Antimosquitos", "medicina proteger mosquito"]]}, {"t": "Palabras sueltas: útiles", "r": [["ใช่", "châi", "Sí (es correcto)", ""], ["ไม่", "mâi", "No", ""], ["โอเค", "oo-khee", "Vale, OK", ""], ["ดี", "dii", "Bueno, bien", ""], ["ไม่ดี", "mâi dii", "Malo", "no bueno"], ["ใหญ่ / เล็ก", "yài / lék", "Grande / pequeño", ""], ["ร้อน / เย็น", "ráwn / yen", "Caliente / frío", ""], ["ถูก / แพง", "thùuk / phaeng", "Barato / caro", ""], ["ใกล้ / ไกล", "klâi / klai", "Cerca / lejos", ""], ["ที่นี่ / ที่นั่น", "thîi-nîi / thîi-nân", "Aquí / allí", ""], ["อะไร", "a-rai", "¿Qué?", ""], ["ที่ไหน", "thîi-nǎi", "¿Dónde?", ""], ["เมื่อไหร่", "mûea-rài", "¿Cuándo?", ""], ["ทำไม", "tham-mai", "¿Por qué?", ""], ["ใคร", "khrai", "¿Quién?", ""], ["เท่าไหร่", "thâo-rài", "¿Cuánto?", ""], ["อีก", "ìik", "Más, otra vez", ""], ["นิดหน่อย", "nít-nòi", "Un poco", ""], ["มาก", "mâak", "Mucho, muy", ""], ["เร็ว / ช้า", "reo / cháa", "Rápido / lento", ""]]}, {"t": "Partículas finales (palabras cortas al final de la frase)", "r": [["ครับ", "khráp", "Cortesía (lo dice el hombre)", "", ["ขอบคุณครับ", "khàwp-khun khráp", "Gracias"]], ["ค่ะ / คะ", "khâ / khá", "Cortesía (mujer). ค่ะ al afirmar, คะ al preguntar", "", ["สบายดีไหมคะ", "sabaai-dii mái khá", "¿Cómo estás?"]], ["ฮะ / งับ", "há / ngáp", "Versión informal y mona de ครับ, entre amigos", "", ["โอเคงับ", "oo-khee ngáp", "¡Vale!"]], ["ครับผม", "khráp phǒm", "\"Sí, señor\", muy educado", "", ["ครับผม", "khráp phǒm", "Entendido"]], ["นะ", "ná", "Suaviza la frase, como \"¿vale?\" o \"eh\"", "", ["รอนะ", "raw ná", "Espera, ¿vale?"]], ["นะครับ", "ná khráp", "Suave y educado a la vez", "", ["ขอบคุณนะครับ", "khàwp-khun ná khráp", "Muchas gracias, de verdad"]], ["จ้ะ / จ้า", "jâ / jâa", "Cariñoso, alegre. Muy usado con amigos y pareja", "", ["ได้จ้า", "dâi jâa", "¡Claro que sí!"]], ["ไหม / มั้ย", "mái", "Convierte la frase en pregunta de sí o no (มั้ย es la forma hablada)", "", ["หิวไหม", "hǐw mái", "¿Tienes hambre?"]], ["ป่ะ", "pà", "\"¿O qué?\", pregunta muy coloquial", "", ["ไปป่ะ", "pai pà", "¿Vamos o qué?"]], ["เหรอ / หรอ", "rǒe", "\"¿Ah sí?\", sorpresa o confirmación", "", ["จริงเหรอ", "jing rǒe", "¿En serio?"]], ["ล่ะ", "lâ", "\"¿Y...?\", para devolver la pregunta", "", ["แล้วคุณล่ะ", "láew khun lâ", "¿Y tú?"]], ["เนอะ", "nóe", "\"¿Verdad que sí?\", buscando complicidad", "", ["อร่อยเนอะ", "a-ròi nóe", "Está rico, ¿verdad?"]], ["สิ", "sì", "Anima o insiste: \"¡venga!\"", "", ["ลองสิ", "lawng sì", "¡Pruébalo!"]], ["เถอะ", "thòe", "Sugerencia: \"venga, vamos a...\"", "", ["ไปเถอะ", "pai thòe", "Venga, vámonos"]], ["เลย", "loei", "\"Ya\", \"del todo\", \"directamente\"", "", ["ไปเลย", "pai loei", "¡Vamos ya!"]], ["ด้วย", "dûay", "\"Por favor\" en peticiones, o \"también\"", "", ["เช็คบิลด้วย", "chék bin dûay", "La cuenta, por favor"]], ["หน่อย", "nòi", "\"Un poquito\", suaviza una petición", "", ["ขอน้ำหน่อย", "khǎw náam nòi", "¿Me das agua?"]], ["จัง", "jang", "\"¡Qué...!\", da emoción", "", ["น่ารักจัง", "nâa-rák jang", "¡Qué mono!"]], ["แล้ว", "láew", "\"Ya\" (algo ya ha pasado)", "", ["กินแล้ว", "kin láew", "Ya he comido"]], ["ก็ได้", "kâw dâi", "\"Vale, como quieras\"", "", ["อันนี้ก็ได้", "an-níi kâw dâi", "Este mismo vale"]], ["ว่าไง", "wâa ngai", "\"¿Qué pasa?\", \"¿qué tal?\" muy informal", "", ["ว่าไงครับ", "wâa ngai khráp", "¿Qué tal?"]]]}];
