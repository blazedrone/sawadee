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
