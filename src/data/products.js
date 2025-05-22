const products = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    name2: "سماعات الأذن اللاسلكية الاحترافية",
    price2: "١٬٢٩٠٫٩٩",
    description2: "خصم ٢٠٪🔥. تقنية إلغاء الضوضاء النشط، بطارية تعمل حتى ٣٠ ساعة مع حافظة الشحن.",
    information2: "تتميز سماعات SoundMaster Pro اللاسلكية بتقنية إلغاء الضوضاء النشطة الهجينة المتقدمة مع ٦ ميكروفونات لمكالمات واضحة تمامًا. يوفر التصميم المريح راحة طوال اليوم مع ٤ أحجام لأطراف الأذن المضمنة. استمتع بالاقتران السلس مع بلوتوث ٥.٢ والشحن السريع (٥ ساعات تشغيل من ١٥ دقيقة شحن). تشمل الميزات عناصر تحكم باللمس، مقاومة للماء بمعيار IPX5، ومعادل صوت قابل للتخصيص عبر التطبيق المصاحب. مثالية للمسافرين، وعشاق اللياقة البدنية، ومحبي الصوت الباحثين عن جودة صوت ممتازة.",
    rating2: "٤٫٥/٥",
    warranty2: "سنتان",
    price: 1290.99,
    image: "/images/earbuds.jpg",
    description: "Discount️\u200d 20%🔥.Active noise-cancelling, 30hr battery with case.",
    information: "SoundMaster Pro wireless earbuds feature advanced hybrid active noise cancellation with 6 microphones for crystal clear calls. The ergonomic design provides all-day comfort with 4 included ear tip sizes. Enjoy seamless pairing with Bluetooth 5.2 and quick charging (5 hours playback from 15 minutes charge). Features touch controls, IPX5 water resistance, and customizable EQ through the companion app. Perfect for commuters, fitness enthusiasts, and audiophiles seeking premium sound quality.",
    company: "SoundMaster",
    company2: "ساوند ماستر",

    warranty: "2 years",
    category: "electronics",
    rating: 4.5
  },
  {
    id: 2,
    name: "Nova N1 Smartphone",
    price: 18999.99,
    name2: "هاتف نوفا إن١ الذكي",
    price2: "١٨٬٩٩٩٫٩٩",
    description2: "خصم ٢٠٪🔥. شاشة أموليد ٦٫٧ بوصة، تخزين ٢٥٦ جيجابايت، دعم 5G.",
    information2: "يتميز Nova X20 Pro بشاشة Dynamic AMOLED 2X مذهلة بحجم ٦.٧ بوصة مع معدل تحديث ١٢٠ هرتز ودعم HDR10+. يعمل بمعالج Snapdragon 8 Gen 2 الأحدث مع ذاكرة بسعة ١٢ جيجابايت رام وتخزين UFS 4.0 بسعة ٢٥٦ جيجابايت. يشمل نظام الكاميرا الثلاثية مستشعرًا رئيسيًا بدقة ١٠٨ ميجابكسل مع تسجيل فيديو بدقة 8K. يتضمن ماسح بصمة تحت الشاشة، مقاومة للماء بمعيار IP68، وبطارية بسعة ٥٠٠٠ مللي أمبير مع شحن سريع بقدرة ٦٥ واط. يأتي مع واجهة Nova OneUI ٥ المبنية على اندرويد ١٥ مع ضمان تحديثات للنظام لمدة ٤ سنوات.",
    rating2: "٤٫٨/٥",
    warranty2: "سنتان",
    image: "/images/phone.jpg",
    description: "Discount️\u200d 20%🔥. 6.7\" OLED, 256GB storage, 5G capable.",
    information: "The Nova X20 Pro features a stunning 6.7\" Dynamic AMOLED 2X display with 120Hz refresh rate and HDR10+ support. Powered by the latest Snapdragon 8 Gen 2 processor with 12GB RAM and 256GB UFS 4.0 storage. The triple camera system includes a 108MP main sensor with 8K video recording. Includes under-display fingerprint scanner, IP68 water resistance, and 5000mAh battery with 65W fast charging. Comes with Nova's OneUI 5 based on Android 13 with 4 years of OS updates guaranteed.",
    company: "Nova",
    company2: "نوڤا",

    warranty: "2 years",
    category: "electronics",
    rating: 4.8
  },
  {
    id: 3,
    name: "Ultrabook Laptop",
    price: 40000.99,
    name2: "لاب توب ألترابوك المحمول",
    rating2: "٤٫٧/٥",
    warranty2: "سنتان",
    price2: "٤٠٬٠٠٠٫٩٩",
    description2: "شاشة ١٤ بوصة بدقة 4K، ١٦ جيجابايت رام، ١ تيرابايت SSD.",
    information2: "يتميز TitanBook Pro 14 بشاشة لمس IPS بدقة 4K مقاس ١٤ بوصة وبدقة ألوان ١٠٠٪ من DCI-P3. مزود بمعالج Intel Core i9-13900H وذاكرة RAM من نوع LPDDR5 بسعة ١٦ جيجابايت، وقرص SSD من نوع PCIe 4.0 بسعة ١ تيرابايت. هيكله المصنوع من سبيكة الماغنيسيوم يزن فقط ١.٣ كجم مع توفير متانة بمعيار MIL-STD-810H. يتضمن منافذ Thunderbolt 4، و واي فاي 6E، ولوحة مفاتيح بإضاءة خلفية. توفر البطارية بسعة ٧٢ واط-ساعة ما يصل إلى ١٢ ساعة من الإنتاجية. يأتي مثبتًا مسبقًا بنظام ويندوز ١١ برو ويتضمن باقة دعم Titan المتميزة.",
    image: "/images/laptop.jpg",
    description: "14\" 4K display, 16GB RAM, 1TB SSD.",
    information: "The TitanBook Pro 14 features a brilliant 14\" 4K IPS touchscreen with 100% DCI-P3 color accuracy. Equipped with Intel Core i9-13900H processor, 16GB LPDDR5 RAM, and 1TB PCIe 4.0 SSD. The magnesium alloy chassis weighs just 1.3kg while offering MIL-STD-810H durability. Includes Thunderbolt 4 ports, WiFi 6E, and a backlit keyboard. The 72Wh battery provides up to 12 hours of productivity. Comes pre-installed with Windows 11 Pro and includes Titan's premium support package.",
    company: "Titan",
    company2: "تيتان",

    warranty: "2 years",
    category: "electronics",
    rating: 4.7
  },
  {
    id: 4,
    name: "4K Smart TV",
    price: 10999.99,
    name2: "تلفزيون ذكي 4K",
    price2: "١٠٬٩٩٩٫٩٩",
    description2: "تلفزيون ذكي ٥٥ بوصة بدقة 4K UHD مع HDR",
    information2: "يتميز VisionPlus QLED55 بشاشة Quantum Dot مقاس ٥٥ بوصة بدقة 4K، ودعم HDR10+، ومعدل تحديث ١٢٠ هرتز. يعمل بمعالج Cognitive Processor XR للترقية الفائقة ومعالجة الصور. يتضمن نظام اندرويد تلفاز مساعد جوجل وChromecast مدمجين مع إمكانية الوصول إلى آلاف التطبيقات. تشمل الميزات منافذ HDMI 2.1 للألعاب (بدعم VRR/ALLM)، وتقنيات Dolby Vision/Atmos، ونظام مكبر صوت ٢.١ قناة بقدرة ٦٠ واط. يأتي التصميم ذو الحواف فائقة النحافة مع حامل معدني فاخر.",
    rating2: "٤٫٦/٥",
    warranty2: "سنتان للشاشة",
    image: "/images/tv.jpg",
    description: "55-inch 4K UHD Smart TV with HDR",
    information: "The VisionPlus QLED55 features a 55\" Quantum Dot display with 4K resolution, HDR10+, and 120Hz refresh rate. Powered by the Cognitive Processor XR for superior upscaling and image processing. The Android TV platform includes built-in Google Assistant and Chromecast with access to thousands of apps. Features HDMI 2.1 ports for gaming (VRR/ALLM supported), Dolby Vision/Atmos, and a 60W 2.1 channel speaker system. The ultra-thin bezel design comes with a premium metal stand.",
    company: "VisionPlus",
    company2: "ڤيجون بلس",

    warranty: "2 years panel warranty",
    category: "electronics",
    rating: 4.6
  },
  {
    id: 5,
    name: "Xbox One",
    price: 35499.99,
    name2: "اكس بوكس وان",
    price2: "٣٥٬٤٩٩٫٩٩",
    description2: "ألعاب الجيل القادم بدقة 4K",
    information2: "تتميز اكس بوكس وان بمعالج مخصص من نوع AMD Zen 2 ورسوميات RDNA 2 لتقديم تجربة ألعاب حقيقية بدقة ٤K بمعدل ١٢٠ إطارًا في الثانية. تتضمن قرص SSD فائق السرعة بسعة ١ تيرابايت مع فك ضغط عبر العتاد لزمن تحميل شبه فوري. يوفر وحدة التحكم DualSense Pro ردود فعل لمسية، ومشغلات تكيفية، وتصميمًا مريحًا محسّنًا. متوافقة مع الإصدارات السابقة لآلاف من ألعاب GameSphere 4. تأتي مرفقة بعنوان AAA حصري واحد من اختيارك. تدعم تتبع الأشعة، الصوت ثلاثي الأبعاد، ومخرج 8K لتجربة ألعاب جاهزة للمستقبل.",
    rating2: "٤٫٩/٥",
    warranty2: "سنتان",
    image: "/images/console.jpg",
    description: "Next-gen gaming with 4K resolution",
    information: "The Xbox one features a custom AMD Zen 2 processor and RDNA 2 graphics delivering true 4K gaming at 120fps. Includes 1TB ultra-high speed SSD with hardware decompression for near instant load times. The DualSense Pro controller offers haptic feedback, adaptive triggers, and improved ergonomics. Backward compatible with thousands of GameSphere 4 titles. Comes bundled with one exclusive AAA title of your choice. Supports ray tracing, 3D audio, and 8K output for future-ready gaming.",
    company: "Microsoft ",
    company2: "مايكروسوفت",

    warranty: "2 years",
    category: "electronics",
    rating: 4.9
  },
  {
    id: 6,
    name: "Smart tracker",
    price: 5249.99,
    name2: "المتتبع الذكي",
    price2: "٥٬٢٤٩٫٩٩",
    description2: "تتبع اللياقة مع قياس معدل ضربات القلب",
    information2: "تتميز HealthTrack Pro 5 بشاشة AMOLED دائمة التشغيل مقاس ١.٧٨ بوصة وسطوع ٤٥٠ نيت. تتابع معدل ضربات القلب، نسبة الأكسجين في الدم، التوتر، النوم، وأكثر من ١٠٠ وضع تمرين. تتضمن نظام GPS مدمج، مدفوعات عبر NFC، ومقاومة للماء حتى 5ATM. الهيكل المصنوع من التيتانيوم خفيف الوزن لكنه متين مع زجاج كريستال الياقوت. تدوم البطارية حتى ١٤ يومًا في وضع الساعة الذكية. تتزامن مع أجهزة اندرويد و ابل. تشمل مؤشرات صحية متقدمة مثل ECG، ودرجة حرارة الجلد، وتتبع صحة المرأة.",
    rating2: "٤٫٣/٥",
    warranty2: "سنتان",
    image: "/images/smartracker.jpg",
    description: "Fitness tracking with heart rate monitor",
    information: "The HealthTrack Pro 5 features a 1.78\" always-on AMOLED display with 450nit brightness. Tracks heart rate, blood oxygen, stress, sleep, and over 100 workout modes. Includes built-in GPS, NFC payments, and 5ATM water resistance. The titanium case is lightweight yet durable with sapphire crystal glass. Battery lasts up to 14 days in smartwatch mode. Syncs with both Android and iOS devices. Includes advanced health metrics like ECG, skin temperature, and women's health tracking.",
    company: "HealthTrack",
    company2: "هيلث تراكر",

    warranty: "2 years",
    category: "electronics",
    rating: 4.3
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    name2: "سماعة بلوتوث",
    price2: "٢٬٠٨٩٫٩٩",
    description2: "سماعة بلوتوث محمولة مضادة للماء",
    information2: "يقدم SoundBoom Xtreme صوتًا بزاوية ٣٦٠° مع مشغلات مزدوجة بقدرة ٣٠ واط ومشعات سلبية لجهير عميق. يتميز بتصنيف IP67 المقاوم للماء والغبار، مما يجعله مثاليًا لحفلات المسابح أو الرحلات الشاطئية. يشمل التصميم القوي مقبض حمل مدمج وغطاء خارجي مطاطي. استمتع بما يصل إلى ٢٤ ساعة من التشغيل عند مستوى صوت معتدل. يتضمن PartyBoost لربط عدة مكبرات صوت، وميكروفون مدمج للمكالمات، وشحن عبر USB-C. يطفو المكبر على الماء ويمكنه تحمل السقوط من ارتفاع ١ متر.",
    rating2: "٤٫٤/٥",
    warranty2: "سنة واحدة",
    price: 2089.99,
    image: "/images/speaker.jpg",
    description: "Portable waterproof Bluetooth speaker",
    information: "The SoundBoom Xtreme delivers 360° sound with dual 30W drivers and passive radiators for deep bass. Features IP67 waterproof and dustproof rating, making it perfect for pool parties or beach trips. The rugged design includes a built-in carrying handle and rubberized exterior. Enjoy up to 24 hours of playtime at moderate volume. Includes PartyBoost to pair multiple speakers, built-in mic for calls, and USB-C charging. The speaker floats in water and can withstand drops from 1 meter.",
    company: "SoundBoom",
    company2: "سواند بووم",

    warranty: "1 year",
    category: "electronics",
    rating: 4.4
  },
  {
    id: 8,
    name: "DSLR Camera",
    price: 6799.99,
    name2: "كاميرا DSLR",
    price2: "٦٬٧٩٩٫٩٩",
    description2: "كاميرا ٢٤ ميجابكسل مع عدسة كيت",
    information2: "تتميز FotoMaster EOS R50 بمستشعر CMOS كامل الإطار بدقة ٢٤.١ ميجابكسل ومعالج صور DIGIC X. تشمل عدسة طقم RF 24-105 مم f/4L IS USM مع تقنية Nano USM لتركيز تلقائي سريع وهادئ. تصوير فيديو 4K بمعدل ٣٠ إطارًا في الثانية مع دعم Canon Log، وتركيز تلقائي CMOS ثنائي البكسل مع اكتشاف العين. تحتوي على شاشة لمس LCD بزاوية متغيرة، هيكل من سبيكة الماغنيسيوم مقاوم للطقس، وتثبيت داخل الجسم بخمسة محاور. يوفر المنظار البصري تغطية بنسبة ١٠٠٪ مع تكبير ٠.٧٦x. تشمل الاتصال عبر واي فاي وبلوتوث وشحن USB.",
    rating2: "٤٫٧/٥",
    warranty2: "سنتان",
    image: "/images/camera.jpg",
    description: "24MP DSLR camera with kit lens",
    information: "The FotoMaster EOS R50 features a 24.1MP full-frame CMOS sensor with DIGIC X image processor. Includes RF 24-105mm f/4L IS USM kit lens with Nano USM for fast, quiet autofocus. 4K 30p video with Canon Log support, dual pixel CMOS AF with eye detection. Features a vari-angle touchscreen LCD, weather-sealed magnesium alloy body, and 5-axis in-body stabilization. The optical viewfinder provides 100% coverage with 0.76x magnification. Includes WiFi, Bluetooth, and USB charging.",
    company: "FotoMaster",
    company2: "فوتو ماستر",

    warranty: "2 years",
    category: "electronics",
    rating: 4.7
  },
  {
    id: 9,
    name: "Noise Cancelling Headphones",
    price: 1349.99,
    name2: "سماعات إلغاء الضوضاء",
    price2: "١٬٣٤٩٫٩٩",
    description2: "سماعات رأس عالية الجودة بإلغاء ضوضاء",
    information2: "تتميز سماعات QuietPro XM5 بإلغاء ضوضاء رائد في الصناعة مع ٨ ميكروفونات تحلل الصوت المحيط. توفر مشغلات ٤٠ مم جودة صوت استثنائية مع دعم LDAC للصوت اللاسلكي عالي الدقة. استمتع بما يصل إلى ٣٠ ساعة من عمر البطارية مع الشحن السريع (٥ دقائق = ٥ ساعات). توفر وسادات الأذن من الفوم الميموري راحة طوال اليوم. تشمل الميزات عناصر تحكم باللمس، تقنية التحدث للتوقف المؤقت، واتصال بلوتوث متعدد النقاط. تأتي مع حقيبة حمل صلبة فاخرة وكابل ٣.٥ مم للاستخدام السلكي.",
    rating2: "٤٫٨/٥",
    warranty2: "سنة واحدة",
    image: "/images/headphones.jpg",
    description: "Premium over-ear noise cancelling",
    information: "The QuietPro XM5 headphones feature industry-leading noise cancellation with 8 microphones analyzing ambient sound. The 40mm drivers deliver exceptional audio quality with LDAC support for high-resolution wireless. Enjoy up to 30 hours of battery life with quick charging (5 minutes = 5 hours). The plush memory foam earpads provide all-day comfort. Features touch controls, speak-to-chat technology, and multipoint Bluetooth connection. Comes with a premium hard carrying case and 3.5mm cable for wired use.",
    company: "QuietPro",
    company2: "كوايت برو",

    warranty: "1 year",
    category: "electronics",
    rating: 4.8
  },
  {
    id: 10,
    name: "Tablet Pro",
    price: 10449.99,
    image: "/images/tablet.jpg",
    name2: "تابلت برو",
    price2: "١٠٬٤٤٩٫٩٩",
    description2: "تابلت ١٠٫٥ بوصة مع دعم القلم",
    information2: "تتميز NovaTab S8 Ultra بشاشة AMOLED مذهلة مقاس ١٤,٦ بوصة بمعدل تحديث ١٢٠ هرتز مع قلم S-Pen مرفق. يعمل بمعالج Snapdragon 8 Gen 1 مع ذاكرة RAM سعة ١٢ جيجابايت وتخزين ٢٥٦ جيجابايت (قابل للتوسيع). التصميم فائق النحافة بسمك ٥.٥ ملم يشمل كاميرا أمامية تحت الشاشة. وضع DeX يحولها إلى تجربة كمبيوتر مكتبي. تشمل السماعات الرباعية المضبوطة بواسطة AKG، و واي فاي 6E، وبطارية بسعة ١١,٢٠٠ مللي أمبير-ساعة. لوحة مفاتيح Book Cover مرفقة، مما يجعلها بديلًا مثاليًا للابتوب. تأتي مع ٣ سنوات من تحديثات نظام التشغيل.",
    rating2: "٤٫٥/٥",
    warranty2: "سنة واحدة",
    description: "10.5-inch tablet with stylus support",
    information: "The NovaTab S8 Ultra features a stunning 14.6\" 120Hz AMOLED display with S-Pen included. Powered by the Snapdragon 8 Gen 1 processor with 12GB RAM and 256GB storage (expandable). The ultra-thin 5.5mm design includes an under-display front camera. DeX mode transforms it into a desktop experience. Includes quad speakers tuned by AKG, WiFi 6E, and 11,200mAh battery. The Book Cover Keyboard is included, making it a perfect laptop replacement. Comes with 3 years of OS updates.",
    company: "Nova",
    company2: "نوڤا",

    warranty: "1 year",
    category: "electronics",
    rating: 4.5
  },
  {
    id: 11,
    name: "Wireless Keyboard",
    price: 679.99,
    name2: "لوحة مفاتيح لاسلكية",
    price2: "٦٧٩٫٩٩",
    description2: "تصميم مريح، مفاتيح صامتة",
    information2: "يقدم SwiftType K300 تصميمًا فائق النحافة مع مفاتيح مقصية ناعمة وهادئة لكتابة مريحة لساعات طويلة. متوافق مع أنظمة ويندوز وماك ولينكس عبر بلوتوث 5.1 أو مستقبل USB. يتميز بأرجل قابلة للتعديل للانحناء، وبطارية قابلة للشحن تدوم حتى ٣ أشهر، وربط متعدد الأجهزة مع مفاتيح تبديل سريعة. التصميم المقاوم للانسكاب يضمن المتانة في أماكن العمل المزدحمة. مثالي للمكاتب المنزلية والإعدادات المحمولة، ويشمل مفاتيح اختصار قابلة للتخصيص ووضع توفير طاقة ذكي.",
    rating2: "٤٫٤/٥",
    warranty2: "سنتان",
    image: "/images/keyboard.jpg",
    description: "Ergonomic design, silent keys",
    information: "The SwiftType K300 offers an ultra-slim design with soft, quiet scissor-switch keys for comfortable long-hour typing. Compatible with Windows, MacOS, and Linux systems via Bluetooth 5.1 or USB receiver. Features adjustable tilt legs, rechargeable battery lasting up to 3 months, and multi-device pairing with quick-switch keys. The spill-resistant design ensures durability in busy workspaces. Ideal for home offices and mobile setups, it includes customizable hotkeys and smart energy-saving mode.",
    company: "SwiftType",
    company2: "سويفت تايب",

    warranty: "2 years",
    category: "electronics",
    rating: 4.4
  },
  {
    id: 12,
    name: "Gaming Mouse",
    price: 359.99,
    name2: "ماوس الألعاب",
    price2: "٣٥٩٫٩٩",
    description2: "إضاءة RGB، ١٦٠٠٠ DPI",
    information2: "مزود HyperClaw V7 بمستشعر بصري بدقة ١٦,٠٠٠ DPI لدقة متناهية واستجابة فائقة السرعة. التصميم المريح يناسب قبضتي المخلب والكف بشكل مريح. إضاءة RGB قابلة للتخصيص تتزامن مع إعدادات الألعاب الخاصة بك عبر مجموعة برامج HyperClaw. يحتوي على ٧ أزرار قابلة للبرمجة، وملفات تعريف ذاكرة مدمجة، ومفاتيح Omron فائقة التحمل مصنفة لتحمل ٥٠ مليون نقرة. مثالي للألعاب التنافسية وأعباء العمل الإبداعية.",
    rating2: "٤٫٦/٥",
    warranty2: "سنتان",
    image: "/images/mouse.jpg",
    description: "RGB lighting, 16000 DPI",
    information: "The HyperClaw V7 is equipped with a 16,000 DPI optical sensor for pinpoint accuracy and lightning-fast response. The ergonomic design fits comfortably in both claw and palm grips. Customizable RGB lighting syncs with your gaming setup via the HyperClaw software suite. Features 7 programmable buttons, onboard memory profiles, and ultra-durable Omron switches rated for 50 million clicks. Perfect for competitive gaming and creative workloads.",
    company: "HyperClaw",
    company2: "هيير كلاو",

    warranty: "2 years",
    category: "electronics",
    rating: 4.6
  },
  {
    id: 13,
    name: "External SSD",
    name2: "قرص SSD خارجي",
    price2: "١٬١٢٩٫٩٩",
    description2: "قرص SSD محمول سعة ١ تيرابايت، منفذ USB-C",
    information2: "يعد SpeedVault X1 قرص SSD محمول بسعة ١ تيرابايت يقدم سرعات قراءة وكتابة فائقة تصل إلى ١٠٥٠ ميجابايت/ثانية عبر USB 3.2 Gen 2 Type-C. متوافق مع أنظمة ويندوز وماك واندرويد وأجهزة الألعاب. يحمي غلافه المصنوع من الألمنيوم المقاوم للصدمات البيانات أثناء التنقل. تضمن وظيفة التوصيل والتشغيل نسخًا احتياطية سهلة، بينما يحمي التشفير الصلب AES 256-بت الملفات الحساسة. يأتي مع حقيبة سفر مدمجة ومحول USB-C إلى A للاتصال المتعدد الاستخدامات.",
    rating2: "٤٫٧/٥",
    warranty2: "سنتان",
    price: 1129.99,
    image: "/images/ssd.jpg",
    description: "1TB portable SSD, USB-C",
    information: "The SpeedVault X1 is a portable 1TB SSD offering lightning-fast read/write speeds up to 1050MB/s via USB 3.2 Gen 2 Type-C. Compatible with Windows, macOS, Android, and game consoles. Its shock-resistant, rugged aluminum casing protects your data on the move. Plug-and-play functionality ensures easy backups, while AES 256-bit hardware encryption safeguards sensitive files. Comes with a compact travel pouch and USB-C to A adapter for versatile connectivity.",
    company: "SpeedVault",
    company2: "سبيد ڤالت",

    warranty: "2 years",
    category: "electronics",
    rating: 4.7
  },
  {
    id: 14,
    name: "Action Camera",
    price: 11299.99,
    name2: "كاميرا أكشن",
    price2: "١١٬٢٩٩٫٩٩",
    description2: "فيديو 4K، غلاف مقاوم للماء مرفق",
    information2: "تسجل XploreCam Ultra فيديو بدقة 4K بسرعة ٦٠ إطارًا في الثانية وصور ثابتة بدقة ٢٠ ميجابكسل، مثالية لعشاق المغامرة. تشمل الميزات تثبيت HyperSmooth، وتأثير timewarp، وتسوية الأفق لتصوير سينمائي. تأتي مع غلاف مقاوم للماء مصنف للغمر حتى عمق ٤٠ مترًا. تدعم التحكم الصوتي، والبث المباشر، والتقاط الصور بصيغة RAW. توفر شاشتان لتسهيل التأطير سواء كنت تواجه الكاميرا أو خلف العدسة. متوافقة مع مجموعة واسعة من الحوامل والملحقات.",
    rating2: "٤٫٥/٥",
    warranty2: "سنتان",
    image: "/images/actioncam.jpg",
    description: "4K video, waterproof case included",
    information: "The XploreCam Ultra records stunning 4K60fps video and 20MP stills, perfect for adventure lovers. Features include HyperSmooth stabilization, timewarp, and horizon leveling for cinematic footage. Comes with a waterproof housing rated for depths up to 40 meters. Supports voice control, live streaming, and RAW image capture. Dual screens allow for easy framing whether you're front-facing or behind the lens. Compatible with a wide range of mounts and accessories.",
    company: "XploreCam",
    company2: "اكسبلور كام",

    warranty: "2 years",
    category: "electronics",
    rating: 4.5
  },
  {
    id: 15,
    name: "E-Reader",
    price: 8139.99,
    name2: "قارئ إلكتروني",
    price2: "٨٬١٣٩٫٩٩",
    description2: "شاشة خالية من الوهج، أسابيع من عمر البطارية",
    information2: "يقدم PageTurner S7 شاشة e-ink Carta عالية التباين بحجم ٧ بوصات مع ضوء دافئ قابل للتعديل للقراءة نهارًا وليلاً. الجسم مقاوم للماء بتصنيف IPX8 مما يسمح بالاستخدام الآمن بجانب المسبح أو في حوض الاستحمام. تتميز الشاشة بدقة ٣٠٠ نقطة في البوصة لحدة تشبه الورق، واتصال  واي فاي، وذاكرة داخلية بسعة ٨ جيجابايت لآلاف الكتب. يدعم صيغ ePub وPDF وMOBI والمزيد. تدوم البطارية حتى ٦ أسابيع بشحنة واحدة.",
    rating2: "٤٫٦/٥",
    warranty2: "سنة واحدة",
    image: "/images/ereader.jpg",
    description: "Glare-free display, weeks of battery",
    information: "The PageTurner S7 offers a 7 high-contrast e-ink Carta display with adjustable warm light for day and night reading. Waterproof IPX8-rated body allows safe poolside or bathtub use. Features a 300 PPI screen for paper-like sharpness, WiFi connectivity, and 8GB of internal storage for thousands of books. Supports ePub, PDF, MOBI, and more formats. Battery life lasts up to 6 weeks on a single charge.",
    company: "PageTurner",
    company2: "بيدج تيرنر",

    warranty: "1 year",
    category: "electronics",
    rating: 4.6
  },
  {
    id: 16,
    name: "Fitness Tracker",
    price: 999.99,
    name2: "متتبع اللياقة",
    price2: "٩٩٩٫٩٩",
    description2: "قياس معدل ضربات القلب، تتبع النوم، مقاوم للماء",
    information2: "يقدم FitCore Band 6 مراقبة صحية طوال اليوم تشمل معدل ضربات القلب، وSpO2، وتحليل النوم. يتميز بمقاومة للماء حتى ٥ وعمر بطارية يصل إلى ١٤ يومًا، وأكثر من ١٢٠ وضع تمرين مع الكشف التلقائي. شاشة AMOLED بحجم ١.١ بوصة توفر صورًا واضحة تحت ضوء الشمس المباشر. يدعم الإشعارات الذكية، التحكم في الموسيقى، ووظيفة زر تشغيل الكاميرا. يتزامن مع أجهزة اندرويد وابل عبر تطبيق FitCore لتحليلات متقدمة.",
    rating2: "٤٫٣/٥",
    warranty2: "سنة واحدة",
    image: "/images/tracker.jpg",
    description: "Heart rate, sleep tracking, waterproof",
    information: "The FitCore Band 6 provides all-day health monitoring, including heart rate, SpO2, and sleep analysis. Features 5ATM water resistance, 14-day battery life, and 120+ exercise modes with auto-detection. The 1.1 AMOLED display offers crisp visuals under direct sunlight. Supports smart notifications, music control, and camera shutter function. Syncs with both Android and iOS through the FitCore app for advanced analytics.",
    company: "FitCore",
    company2: "فيت كور",

    warranty: "1 year",
    category: "electronics",
    rating: 4.3
  },
  {
    id: 17,
    name: "Portable Projector",
    price: 5349.99,
    name2: "بروجيكتور محمول",
    price2: "٥٬٣٤٩٫٩٩",
    description2: "1080p بدقة HD، مكبر صوت مدمج",
    information2: "يعرض BeamCast Mini صورًا واضحة بدقة 1080p HD تصل إلى ١٢٠ بوصة بألوان زاهية وتباين عميق. يتميز بسماعة Hi-Fi مدمجة، ومنافذ HDMI وUSB، وعكس شاشة لاسلكي عبر AirPlay وMiracast. التصميم المدمج والخفيف الوزن يجعله مثاليًا لليالي الأفلام الداخلية والتجمعات الخارجية. يوفر التصحيح التلقائي للتشويه (keystone) وضبط التركيز إعدادًا سهلاً في أي مكان.",
    rating2: "٤٫٤/٥",
    warranty2: "سنتان",
    image: "/images/projector.jpg",
    description: "1080p HD, built-in speaker",
    information: "The BeamCast Mini projects sharp 1080p HD images up to 120 inches with vibrant colors and deep contrast. Features a built-in Hi-Fi speaker, HDMI and USB ports, and wireless screen mirroring via AirPlay and Miracast. Compact and lightweight design makes it ideal for both indoor movie nights and outdoor gatherings. Auto keystone correction and focus adjustment offer hassle-free setup in any space.",
    company: "BeamCast",
    company2: "بييم كاست",

    warranty: "2 years",
    category: "electronics",
    rating: 4.4
  },
  {
    id: 18,
    name: "VR Headset",
    price: 13399.99,
    name2: "نظارة الواقع الافتراضي",
    price2: "١٣٬٣٩٩٫٩٩",
    description2: "تجربة غامرة للواقع الافتراضي",
    information2: "يقدم VirtuaView XR2 تجربة واقع افتراضي مذهلة بدقة 4K لكل عين ومعدل تحديث ١٢٠ هرتز لصور فائقة السلاسة. يتميز بتتبع من الداخل للخارج دون الحاجة لأجهزة استشعار خارجية، وحزام رأس مريح على شكل هالة. يدعم الألعاب المستقلة وألعاب الواقع الافتراضي عبر الكمبيوتر باستخدام USB-C أو  واي فاي 6. توفر أجهزة التحكم المعاد تصميمها ردود فعل لمسية دقيقة والتعرف على الإيماءات. يشمل الوصول إلى مكتبة محتوى VR الواسعة من VirtuaView.",
    rating2: "٤٫٢/٥",
    warranty2: "سنة واحدة",
    image: "/images/vr.jpg",
    description: "Immersive virtual reality experience",
    information: "The VirtuaView XR2 delivers stunning VR immersion with 4K per-eye resolution and a 120Hz refresh rate for ultra-smooth visuals. Features inside-out tracking, no external sensors required, and a comfortable halo head strap. Supports both standalone and PC VR gaming via USB-C or WiFi 6. The redesigned controllers offer precise haptic feedback and gesture recognition. Includes access to VirtuaView’s expansive VR content library.",
    company: "VirtuaView",
    company2: "ڤيرتشوال ڤيو",

    warranty: "1 year",
    category: "electronics",
    rating: 4.2
  },
  {
    id: 19,
    name: "Dash Cam",
    price: 11129.99,
    name2: "كاميرا السيارة",
    price2: "١١٬١٢٩٫٩٩",
    description2: "تسجيل بدقة 1440p، رؤية ليلية",
    information2: "يسجل RoadEye V3 لقطات واضحة بدقة ١٤٤٠ بكسل مع مجال رؤية واسع بزاوية ١٦٠° ورؤية ليلية متقدمة. يتميز بالتسجيل المتكرر، وكاشف صدمات G-sensor، ووضع مراقبة الركن. يدعم الاتصال عبر  واي فاي لنقل الملفات بسهولة والمعاينة الحية عبر التطبيق. يشمل بطاقة microSD بسعة ٣٢ جيجابايت وقاعدة لاصقة للتثبيت. التصميم الأنيق والمنخفض يضمن تركيبًا خفيًا على الزجاج الأمامي.",
    rating2: "٤٫٥/٥",
    warranty2: "سنة واحدة",
    image: "/images/dashcam.jpg",
    description: "1440p recording, night vision",
    information: "The RoadEye V3 records crystal-clear 1440p footage with wide 160° field of view and advanced night vision. Features loop recording, G-sensor impact detection, and parking surveillance mode. Supports WiFi connectivity for easy file transfers and app-based live preview. Includes a 32GB microSD card and adhesive mount. The sleek, low-profile design ensures discreet windshield installation.",
    company: "RoadEye",
    company2: "روود أي",

    warranty: "1 year",
    category: "electronics",
    rating: 4.5
  },
  {
    id: 20,
    name: "Smart Doorbell",
    price: 699.99,
    name2: "جرس الباب الذكي",
    price2: "٦٩٩٫٩٩",
    description2: "فيديو HD، صوت ثنائي الاتجاه",
    information2: "يقدم SecureRing 3 فيديو عالي الدقة 1080p واضح مع رؤية ليلية وصوت ثنائي الاتجاه في الوقت الحقيقي عبر هاتفك الذكي. يتميز بتنبيهات اكتشاف الحركة، وخيارات التخزين السحابي والمحلي، ومناطق كشف قابلة للتخصيص. متوافق مع Alexa وGoogle Assistant لتكامل سلس مع المنزل الذكي. يشمل بطارية قابلة لإعادة الشحن ومجموعة توصيل سلكي اختيارية للطاقة المستمرة.",
    rating2: "٤٫٦/٥",
    warranty2: "سنة واحدة",
    image: "/images/doorbell.jpg",
    description: "HD video, two-way audio",
    information: "The SecureRing 3 offers crisp 1080p HD video with night vision and real-time two-way audio via your smartphone. Features motion detection alerts, cloud and local storage options, and customizable detection zones. Compatible with Alexa and Google Assistant for seamless smart home integration. Includes a rechargeable battery and optional hardwiring kit for continuous power.",
    company: "SecureRing",
    company2: "سيكيور رينج",

    warranty: "1 year",
    category: "electronics",
    rating: 4.6
  },
  {
    id: 21,
    name: "Men's Casual Shirt",
    price: 229.99,
    image: "/images/shirt.jpg",
    name2: "تي شيرت رجالي كاجوال",
    price2: "٢٢٩٫٩٩",
    description2: "خصم ٢٠٪🔥. ١٠٠٪ قطن، قابل للغسيل الآلي.",
    information2: "تي شيرت UrbanClassic بدون أزرار مصنوع من قطن مصري نقي ١٠٠٪ عالي الجودة ليمنح نعومة وتنفس استثنائيين. يتميز بقصة كلاسيكية مع شكل مائل قليلاً، مثالي لكل من العمل والملابس الكاجوال. ياقة وقصة الأزرار المعززة تحافظ على الشكل بعد الغسيل المتكرر. متوفر في ١٢ لونًا متنوعًا من الأبيض النقي إلى الكحلي الداكن. العلامة بدون تاج تمنع التهيج. يُغسل في الغسالة بالماء البارد ويُجفف على حرارة منخفضة للعناية السهلة. يتناسب تمامًا مع بنطلونات رسمية أو جينز لخيارات تنسيق متعددة.",
    rating2: "٤٫٢/٥",
    warranty2: "٦ أشهر ضد عيوب التصنيع",
    description: "Discount️\u200d 20%🔥. 100% cotton, machine washable.",
    information: "The UrbanClassic no buttons-down shirt is crafted from premium 100% Egyptian cotton for exceptional softness and breathability. Features a classic fit with slightly tapered silhouette, perfect for both office and casual wear. The reinforced collar and button placket maintain structure after repeated washing. Available in 12 versatile colors from crisp white to deep navy. Tagless label prevents irritation. Machine wash cold and tumble dry low for easy care. Pairs perfectly with dress pants or jeans for versatile styling options.",
    company: "UrbanClassic",
    company2: "اربان كلاسيك",

    warranty: "6 months against manufacturing defects",
    category: "clothing",
    rating: 4.2
  },
  {
    id: 22,
    name: "Women's Running Shoes",
    price: 489.99,
    image: "/images/shoes.jpg",
    name2: "حذاء رياضي نسائي",
    price2: "٤٨٩٫٩٩",
    description2: "خصم ٢٠٪🔥. خفيفة الوزن، شبكة علوية تنفس.",
    information2: "تتميز أحذية الجري النسائية RunFlex Pro بنعل وسطي ثوري يعيد الطاقة ويوفر ٢٠٪ أكثر ارتدادًا مقارنة بالرغوة العادية. الجزء العلوي من الشبكة المصممة يوفر تنفسًا مستهدفًا مع بناء بدون درزات لمنع التهيج. تشمل بطانة OrthoLite لإدارة الرطوبة والتحكم في الروائح. النعل الخارجي المطاطي المتين يحتوي على نتوءات متعددة الاتجاهات للثبات على مختلف الأسطح. يزن الحذاء الواحد ٢٢٠ جرامًا (المقاس ٧). مثالي للجري على الطرق لمسافات تصل إلى الماراثون. متوفر في ٨ تركيبات ألوان زاهية.",
    rating2: "٤٫٦/٥",
    warranty2: "شهران حصري",
    description: "Discount️\u200d 20%🔥. Lightweight, breathable mesh upper.",
    information: "The RunFlex Pro women's running shoes feature a revolutionary energy-return midsole that provides 20% more rebound than standard foam. The engineered mesh upper offers targeted breathability with seamless construction to prevent irritation. Includes OrthoLite sockliner for moisture management and odor control. The durable rubber outsole features multi-directional lugs for traction on various surfaces. Weighs just 220g per shoe (size 7). Perfect for road running up to marathon distances. Available in 8 vibrant color combinations.",
    company: "RunFlex",
    company2: "ران فليكس",

    warranty: "2 months sole warranty",
    category: "clothing",
    rating: 4.6
  },
  {
    id: 23,
    name: "Denim Jeans",
    price: 349.99,
    name2: "جينز دينيم",
    price2: "٣٤٩٫٩٩",
    description2: "قصير ضيق، قماش دينيم مرن",
    information2: "يجمع جينز DenimCraft Slim Stretch بين مظهر الدينيم السيلفيدج الأصيل والراحة الحديثة. مصنوع من ٩٨٪ قطن و٢٪ إيلاستين للمرونة دون فقدان الشكل. يتميز بخصر متوسط الارتفاع وفتحة ساق مدببة. يوفر الطلاء المصبوغ بعد التصنيع لونًا غنيًا مشبعًا يقاوم التلاشي. نقاط الضغط المعززة في الجيوب والدرزات تضمن المتانة. تستخدم عملية التصنيع الصديقة للبيئة ٣٠٪ ماء أقل من إنتاج الدينيم التقليدي. متوفر بألوان النيلي الخام، والأسود، والتشطيب المتوسط الغسيل.",
    rating2: "٤٫٣/٥",
    warranty2: "٦ أشهر حصري",
    image: "/images/jeans.jpg",
    description: "Slim fit, stretch denim fabric",
    information: "The DenimCraft Slim Stretch jeans combine authentic selvedge denim look with modern comfort. Made with 98% cotton and 2% elastane for flexibility without losing shape. Features a mid-rise waist and tapered leg opening. The garment-dyed finish provides rich, saturated color that resists fading. Reinforced stress points at pockets and seams ensure durability. The eco-friendly manufacturing process uses 30% less water than conventional denim production. Available in raw indigo, black, and medium wash finishes.",
    company: "DenimCraft",
    company2: "دينم كرافت",

    warranty: "6 months sole warranty",
    category: "clothing",
    rating: 4.3
  },
  {
    id: 24,
    name: "Winter Jacket",
    price: 1129.99,
    name2: "جاكيت شتوي ثقيل",
    price2: "١٬١٢٩٫٩٩",
    description2: "مقاوم للماء مع عزل حراري",
    information2: "تتميز سترة الشتاء ArcticShield Extreme بعزل من الريش بقوة حشو ٦٥٠ مع معالجة مقاومة للماء HydroDown. الغلاف ثلاثي الطبقات StormArmor مقاوم تمامًا للماء (تصنيف ٢٠,٠٠٠ ملم) مع تهوية عالية. تشمل قبعة عاصفة قابلة للتعديل، وأساور محبوكة، وتنورة عاصفة داخلية لمنع تسرب الرياح والثلج. جيوب متعددة بسحابات بما في ذلك جيب أمان داخلي. المرفقان المفصليان وتحت الإبطين المثلثان يسمحان بحرية حركة كاملة. مصنفة لتحمل درجات حرارة تصل إلى -٣٠ درجة مئوية (-٢٢ درجة فهرنهايت). مثالية للرياضات الشتوية أو الظروف الباردة القاسية.",
    rating2: "٤٫٧/٥",
    warranty2: "سنة واحدة",
    image: "/images/jacket.jpg",
    description: "Waterproof with thermal insulation",
    information: "The ArcticShield Extreme winter jacket features 650-fill power down insulation with HydroDown water-resistant treatment. The 3-layer StormArmor shell is completely waterproof (20,000mm rating) yet highly breathable. Includes adjustable storm hood, rib-knit cuffs, and inner storm skirt to seal out wind and snow. Multiple zippered pockets including internal security pocket. The articulated elbows and gusseted underarms allow complete freedom of movement. Rated for temperatures down to -30°C (-22°F). Perfect for winter sports or extreme cold weather conditions.",
    company: "ArcticShield",
    company2: "اركيتيك شيلد",

    warranty: "1 year",
    category: "clothing",
    rating: 4.7
  },
  {
    id: 25,
    name: "Silk Tie",
    price: 174.99,
    name2: "ربطة عنق حريرية",
    price2: "١٧٤٫٩٩",
    description2: "حرير فاخر، ألوان متعددة",
    information2: "ربطة العنق LuxeSilk مصنوعة يدويًا من حرير التوت الخالص ١٠٠٪ بتشطيب فاخر ملتف يدويًا. تتميز بتصميم تقليدي مكون من سبع طبقات لعقدة وطي مثالية. العرض ٣.٥ بوصة مثالي للملابس العملية العصرية. كل ربطة تقطع على المائل لتحقيق محاذاة مثالية للنمط القطري. تشمل حلقة مخفية للتثبيت ونهاية تحمل العلامة التجارية. مدعمة ببطانة صوفية فاخرة للهيكل. متوفرة بأكثر من ٥٠ نقشة من الألوان الصلبة الكلاسيكية إلى التصاميم الهندسية المعاصرة. تُغسل يدويًا بالماء البارد مع منظف خفيف وتُعلق لتجف للحفاظ على اللمعان.",
    rating2: "٤٫١/٥",
    warranty2: "٣٠ يومًا",
    image: "/images/tie.jpg",
    description: "Premium silk, various colors",
    information: "The LuxeSilk necktie is handcrafted from 100% pure mulberry silk with a luxurious hand-rolled finish. Features traditional seven-fold construction for perfect knotting and drape. The 3.5\" width is ideal for modern business attire. Each tie is cut on the bias for optimal diagonal pattern alignment. Includes hidden loop keeper and branded tipping. Backed with premium wool interlining for structure. Available in over 50 patterns from classic solids to contemporary geometric designs. Hand wash cold with mild detergent and hang dry to maintain luster.",
    company: "LuxeSilk",
    company2: "لوكسي سيلك",

    warranty: "30 days",
    category: "clothing",
    rating: 4.1
  },
  {
    id: 26,
    name: "Yoga Pants",
    price: 239.99,
    name2: "بنطلون يوجا",
    price2: "٢٣٩٫٩٩",
    description2: "خصر مرتفع، امتصاص العرق",
    information2: "سراويل اليوغا FlexiFit عالية الخصر مصنوعة من قماش ثوري مزيج النايلون والإيلاستين بامتداد رباعي الاتجاهات لحرية حركة كاملة. توفر الخصر العريض تحكمًا في البطن دون التدلي. تتميز بتقنية امتصاص العرق ومعالجة مقاومة للرائحة. الحفرة المثلثة والدرزات المسطحة تمنع الاحتكاك أثناء التمارين المكثفة. جيوب جانبية تحافظ بأمان على الهواتف أو الأغراض الصغيرة. التصميم بطول الكاحل مع ألواح شبكية خفية يوفر التغطية والتهوية. يمكن غسلها في الغسالة مع تقنية تثبيت اللون للحفاظ على اللون الأسود العميق.",
    rating2: "٤٫٥/٥",
    warranty2: "شهران حصري",
    image: "/images/yogapants.jpg",
    description: "High-waisted, moisture-wicking",
    information: "The FlexiFit High-Waist Yoga Pants are made from revolutionary Nylon-Spandex blend fabric with 4-way stretch for complete freedom of movement. The wide waistband provides tummy control without rolling down. Features sweat-wicking technology with odor-resistant treatment. The gusseted crotch and flatlock seams prevent chafing during intense workouts. Side pockets securely hold phones or small essentials. The ankle-length design with subtle mesh panels offers both coverage and ventilation. Machine washable with color-lock technology to maintain deep black hue.",
    company: "FlexiFit",
    company2: "فليكسي فيت",

    warranty: "2 months sole warranty",
    category: "clothing",
    rating: 4.5
  },
  {
    id: 27,
    name: "Baseball Cap",
    price: 109.99,
    name2: "قبعة بيسبول",
    price2: "١٠٩٫٩٩",
    description2: "قابلة للتعديل، قماش تنفس",
    information2: "تتميز قبعة SportFlex Performance بقماش يمتص الرطوبة ويجف سريعًا ليبقيك باردًا في الظروف الحارة. توفر الحافة المنحنية حماية ممتازة من الشمس مع جانب سفلي مضاد للوهج. تتميز بإغلاق قابل للتعديل بنظام سناب باك للملاءمة المثالية. تحافظ الألواح الأمامية المنظمة على الشكل بينما تعزز الألواح الشبكية الخلفية التهوية. يتم معالجة شريط العرق بتقنية مضادة للميكروبات لمنع الروائح. الشعار المطرز مصنوع بخيط مقاوم للأشعة فوق البنفسجية. مثالية للأنشطة الخارجية والرياضات أو الملابس الكاجوال. يُنصح بالغسيل اليدوي للحفاظ على الشكل واللون.",
    rating2: "٤/٥",
    warranty2: "٣٠ يومًا",
    image: "/images/cap.jpg",
    description: "Adjustable, breathable fabric",
    information: "The SportFlex Performance Cap features moisture-wicking, quick-dry fabric that keeps you cool in hot conditions. The curved visor provides excellent sun protection with anti-glare underside. Features an adjustable snapback closure for perfect fit. The structured front panels maintain shape while the mesh back panels enhance ventilation. The sweatband is treated with antimicrobial technology to prevent odor. The embroidered logo is crafted with UV-resistant thread. Perfect for outdoor activities, sports, or casual wear. Hand wash recommended to preserve shape and color.",
    company: "SportFlex",
    company2: "سبورت فليكس",

    warranty: "30 days",
    category: "clothing",
    rating: 4
  },
  {
    id: 28,
    name: "Cotton Socks (6-Pack)",
    price: 154.99,
    name2: "جوارب قطنية (٦ قطع)",
    price2: "١٥٤٫٩٩",
    description2: "قطن تنفس، ألوان متنوعة",
    information2: "تُصنع جوارب ComfortStep Everyday من قطن ممشط عالي الجودة مع كعب وأصابع معززة لمتانة طويلة الأمد. تتميز بدعم للقوس وإغلاق بدون درز عند الأصابع لراحة طوال اليوم. تحافظ تقنية امتصاص الرطوبة على جفاف القدمين بينما تعزز الألواح الشبكية القابلة للتهوية تدفق الهواء. يستخدم التصميم الثابت مقابض سيليكون لمنع الانزلاق. كل عبوة تحتوي على ٣ أزواج من الجوارب بطول الكاحل و٣ أزواج من جوارب الكاحل بألوان متناسقة. يوفر الضغط التدريجي دعمًا خفيفًا دون تقييد الدورة الدموية. يُغسل في الغسالة بماء دافئ ويُجفف على حرارة منخفضة.",
    rating2: "٤٫٢/٥",
    warranty2: "٣٠ يومًا",
    image: "/images/socks.jpg",
    description: "Breathable cotton, assorted colors",
    information: "The ComfortStep Everyday Socks are crafted from premium combed cotton with reinforced heel and toe for extended durability. Features arch support and seamless toe closure for all-day comfort. The moisture-wicking technology keeps feet dry while the breathable mesh panels enhance airflow. The stay-up design uses silicone grippers to prevent slipping. Each pack includes 3 pairs of crew length and 3 pairs of ankle socks in coordinating colors. The gradual compression provides light support without restricting circulation. Machine wash warm, tumble dry low.",
    company: "ComfortStep",
    company2: "كومفورت ستيب",

    warranty: "30 days",
    category: "clothing",
    rating: 4.2
  },
  {
    id: 29,
    name: "Leather Belt",
    price: 134.99,
    name2: "حزام جلد طبيعي",
    price2: "١٣٤٫٩٩",
    description2: "جلد إيطالي، قابل للتعديل",
    information2: "يُصنع حزام HeritageGenuine من جلد إيطالي كامل الحبوب يتطور ليصبح ذا لون غني مع مرور الوقت. يتميز بإبزيم من النحاس الأصفر الصلب مع طلاء مقاوم للخدش. العرض ١.٥ بوصة مثالي للارتداء الكاجوال والعملي. الجلد المعالج نباتيًا خالٍ من المواد الكيميائية والأصباغ الضارة. الحزام قابل للعكس بنمط حبيبي خفيف على جانب وتشطيب ناعم على الجانب الآخر. يشمل ٧ ثقوب ضبط لاستيعاب تغيرات الخصر. يُطلى كل حزام يدويًا للحصول على تشطيب مميز يتحسن مع العمر.",
    rating2: "٤٫٤/٥",
    warranty2: "٦ أشهر حصري",
    image: "/images/belt.jpg",
    description: "Genuine leather, adjustable",
    information: "The HeritageGenuine leather belt is crafted from full-grain Italian leather that develops a rich patina over time. Features a solid brass buckle with scratch-resistant coating. The 1.5\" width is ideal for both casual and business wear. The vegetable-tanned leather is free from harmful chemicals and dyes. The belt is reversible with a subtle grain pattern on one side and smooth finish on the other. Includes 7 adjustment holes to accommodate waist fluctuations. Each belt is hand-burnished for a distinctive finish that improves with age.",
    company: "Heritage",
    company2: "هيرتيتج",

    warranty: "6 months sole warranty",
    category: "clothing",
    rating: 4.4
  },
  {
    id: 30,
    name: "Wool Scarf",
    name2: "كوفية صوفي",
    price2: "٩٩٫٩٩",
    description2: "١٠٠٪ ميرينو صوفي، إكسسوار شتوي",
    information2: "يُنسج كوفية AlpineWool Merino يدويًا من صوف الميرينو الناعم جدًا بقطر ١٨.٥ ميكرون ليمنح نعومة استثنائية دون حكة. الأبعاد الكبيرة ١٢ × ٧٢ بوصة توفر تغطية واسعة بينما ينسدل القماش الخفيف بشكل جميل. ينظم درجة حرارة الجسم طبيعيًا ويمتص الرطوبة. يضيف النمط الخفيف على شكل عظم السمك ملمسًا دون زيادة في السماكة. الأطراف المزينة بالأهداب معقودة يدويًا للمتانة. متوفر في ٨ ألوان كلاسيكية من الفحم إلى الجمل. مقاوم طبيعي للروائح والتجاعيد. يُغسل يدويًا بالماء البارد مع منظف الصوف ويُوضع مسطحًا ليجف للحفاظ على الشكل.",
    rating2: "٤٫٣/٥",
    warranty2: "شهران",
    price: 99.99,
    image: "/images/scarf.jpg",
    description: "100% merino wool, winter accessory",
    information: "The AlpineWool Merino Scarf is handwoven from extra-fine 18.5 micron merino wool for exceptional softness without itchiness. The oversized 12\" x 72\" dimensions provide ample coverage while the lightweight fabric drapes beautifully. Naturally regulates body temperature and wicks moisture away. The subtle herringbone pattern adds texture without bulk. The fringed ends are hand-knotted for durability. Available in 8 classic colors from charcoal to camel. Naturally resistant to odors and wrinkles. Hand wash cold with wool detergent and lay flat to dry to maintain shape.",
    company: "AlpineWool",
    company2: "الفاين وول",

    warranty: "2 months",
    category: "clothing",
    rating: 4.3
  },
  {
    id: 31,
    name: "Summer Dress",
    price: 949.99,
    image: "/images/dress.jpg",
    name2: "فساتين صيفية",
    price2: "٩٤٩٫٩٩",
    description2: "قطن خفيف الوزن، نقش زهري",
    information2: "تم صنع فستان SunWeave الصيفي من ١٠٠٪ قطن عضوي بنسيج قابل للتنفس وخفيف مثالي للطقس الحار. يتميز بحزام خصر قابل للتعديل، جيوب جانبية مخفية، وقصة A-line جذابة. الطباعة الزهرية النابضة بالحياة مقاومة للتلاشي حتى بعد الغسلات المتكررة. مبطّن بطبقة داخلية ناعمة ومضادة للحساسية للمعتمة. يُغسل في الغسالة بماء بارد ويُجفف على حرارة منخفضة للحفاظ على اللون والشكل.",
    rating2: "٤٫٥/٥",
    warranty2: "شهران",
    description: "Lightweight cotton, floral pattern",
    information: "The SunWeave Summer Dress is crafted from 100% organic cotton with a breathable, airy weave perfect for warm weather. Features an adjustable waist tie, hidden side pockets, and a flattering A-line silhouette. The vibrant floral print is fade-resistant even after repeated washes. Lined for opacity with a soft, hypoallergenic inner layer. Machine wash cold and tumble dry low to preserve color and shape.",
    company: "SunWeave",
    company2: "سان ويڤ",

    warranty: "2 months",
    category: "clothing",
    rating: 4.5
  },
  {
    id: 32,
    name: "Leather Wallet",
    price: 139.99,
    name2: "محفظة جلدية",
    price2: "١٣٩٫٩٩",
    description2: "جلد طبيعي، حماية RFID",
    information2: "محفظة UrbanHide الجلدية مصنوعة من جلد إيطالي كامل الحبوب ومخاطة يدويًا للمتانة. تتميز بـ ٨ فتحات بطاقات، و٢ جيوب مخفية، وتقنية حجب RFID للحماية من السرقة الرقمية. تتطور الباتينا الطبيعية للجلد مع مرور الوقت لتعطي مظهرًا فريدًا. تشمل نافذة هوية قابلة للإزالة وجيب عملات آمن. يُنصح بتجديد الجلد باستخدام بلسم الجلد كل ٦ أشهر للحفاظ على المرونة.",
    rating2: "٤٫٤/٥",
    warranty2: "شهران",
    image: "/images/wallet.jpg",
    description: "Genuine leather, RFID protection",
    information: "The UrbanHide Leather Wallet is made from full-grain Italian leather, hand-stitched for durability. Features 8 card slots, 2 hidden compartments, and RFID-blocking technology to protect against digital theft. The natural leather patina develops over time for a unique look. Includes a removable ID window and a secure coin pouch. Condition with leather balm every 6 months to maintain suppleness.",
    company: "UrbanHide",
    company2: "اربان هايد",

    warranty: "2 months",
    category: "clothing",
    rating: 4.4
  },
  {
    id: 33,
    name: "Swim Trunks",
    price: 134.99,
    name2: "شورت سباحة",
    price2: "١٣٤٫٩٩",
    description2: "قماش سريع الجفاف، حماية UPF ٥٠+",
    information2: "تم تصميم سراويل السباحة AquaVenture للأداء مع قماش مقاوم للكلور وسريع الجفاف يوفر حماية شمسية UPF ٥٠+. يتميز بجيب بسحاب آمن، حزام خصر قابل للتعديل بسلسلة، وبطانة شبكية خفيفة الوزن. طول الدخل ٧ بوصات يوفر حرية الحركة مع الحفاظ على التغطية. مقاوم للتلاشي وأضرار مياه البحر المالحة. يُشطف بعد الاستخدام ويُعلق ليجف.",
    rating2: "٤٫٣/٥",
    warranty2: "شهران",
    image: "/images/swimtrunks.jpg",
    description: "Quick-dry fabric, UPF 50+",
    information: "The AquaVenture Swim Trunks are designed for performance with chlorine-resistant, quick-dry fabric that provides UPF 50+ sun protection. Features a secure zip pocket, adjustable drawstring waist, and a lightweight mesh liner. The 7-inch inseam offers freedom of movement while maintaining coverage. Resistant to fading and saltwater damage. Rinse after use and hang dry.",
    company: "AquaVenture",
    company2: "اكوا ڤينتشر",

    warranty: "2 months",
    category: "clothing",
    rating: 4.3
  },
  {
    id: 34,
    name: "Winter Gloves",
    price: 124.99,
    name2: "قفازات شتوية",
    price2: "١٢٤٫٩٩",
    description2: "عزل حراري، متوافقة مع الشاشات اللمسية",
    information2: "تجمع قفازات FrostGrip الشتوية بين العزل الحراري ونهايات الأصابع المتوافقة مع شاشات اللمس للراحة. الغلاف الخارجي مقاوم للماء، بينما تحافظ البطانة الداخلية من الفليس على الحرارة في درجات الحرارة تحت الصفر. الخياطة المعززة في نقاط الضغط تضمن طول العمر. حزام المعصم القابل للتعديل يوفر ملاءمة محكمة. يُغسل يدويًا بمنظف لطيف ويُجفف بالهواء.",
    rating2: "٤٫٢/٥",
    warranty2: "شهران",
    image: "/images/gloves.jpg",
    description: "Thermal insulation, touchscreen compatible",
    information: "The FrostGrip Winter Gloves combine thermal insulation with touchscreen-compatible fingertips for convenience. The outer shell is water-resistant, while the inner fleece lining retains heat in sub-zero temperatures. Reinforced stitching at stress points ensures longevity. The adjustable wrist strap provides a snug fit. Hand wash with mild detergent and air dry.",
    company: "FrostGrip",
    company2: "فروست جريب",

    warranty: "2 months",
    category: "clothing",
    rating: 4.2
  },
  {
    id: 35,
    name: "Athletic Shorts",
    price: 129.99,
    name2: "شورت رياضي",
    price2: "١٢٩٫٩٩",
    description2: "امتصاص العرق، طول ٧ بوصة",
    information2: "تم تصميم شورتات FlexRun الرياضية من قماش يمتد بأربع اتجاهات لحركة غير مقيدة. تحافظ تقنية امتصاص الرطوبة على جفافك أثناء التدريبات المكثفة، بينما يمنع العلاج المضاد للرائحة تراكم البكتيريا. تتميز بجيب مفاتيح مخفي وشعارات عاكسة للظهور في الإضاءة المنخفضة. يُغسل في الغسالة بماء بارد وتجنب استخدام منعمات الأقمشة.",
    rating2: "٤٫٤/٥",
    warranty2: "شهران",
    image: "/images/shorts.jpg",
    description: "Moisture-wicking, 7\" inseam",
    information: "The FlexRun Athletic Shorts are engineered with 4-way stretch fabric for unrestricted movement. The moisture-wicking technology keeps you dry during intense workouts, while the anti-odor treatment prevents bacterial buildup. Features a hidden key pocket and reflective logos for low-light visibility. Machine wash cold and avoid fabric softeners.",
    company: "FlexRun",
    company2: "فليكس ران",

    warranty: "2 months",
    category: "clothing",
    rating: 4.4
  },
  {
    id: 36,
    name: "Knit Sweater",
    price: 459.99,
    name2: "سترة صوف",
    price2: "٤٥٩٫٩٩",
    description2: "مزيج صوفي، رقبة مستديرة",
    information2: "تم تصنيع سترة HeritageKnit من مزيج فاخر يحتوي على ٨٠٪ صوف ميرينو و٢٠٪ كشمير ليمنح نعومة ودفء لا مثيل لهما. الأساور والحافة المضلعة توفر ملاءمة مصممة، بينما الأكتاف المعززة تقاوم التمدد. مصممة لمقاومة تكون الحبوب مع العناية المناسبة. تُغسل يدويًا في ماء بارد وتُفرد لتجف.",
    rating2: "٤٫٣/٥",
    warranty2: "شهران",
    image: "/images/sweater.jpg",
    description: "Wool blend, crew neck",
    information: "The HeritageKnit Sweater is crafted from a premium 80% merino wool and 20% cashmere blend for unmatched softness and warmth. The ribbed cuffs and hem provide a tailored fit, while the reinforced shoulders resist stretching. Designed to resist pilling with proper care. Hand wash in cold water and lay flat to dry.",
    company: "HeritageKnit",
    company2: "هيرتيتج كنيت",

    warranty: "2 months",
    category: "clothing",
    rating: 4.3
  },
  {
    id: 37,
    name: "Rain Jacket",
    price: 1079.99,
    name2: "جاكيت مطر",
    price2: "١٬٠٧٩٫٩٩",
    description2: "قماش مقاوم للماء والتنفس",
    information2: "تتميز سترة المطر StormShield بغشاء Gore-Tex ثلاثي الطبقات لتوفير حماية ١٠٠٪ من الماء دون التضحية بالتنفسية. مغلقة بالكامل بخياطة محكمة مع غطاء رأس وأساور وحافة قابلة للتعديل لتناسب مخصص. تشمل فتحات تحت الإبط لتنظيم الحرارة وضمان ضمان مدى الحياة ضد عيوب التصنيع. تُنظف بالبقع باستخدام قطعة قماش مبللة ويعاد تطبيق العازل سنويًا.",
    rating2: "٤٫٥/٥",
    warranty2: "سنتان (عيوب التصنيع)",
    image: "/images/rainjacket.jpg",
    description: "Waterproof, breathable fabric",
    information: "The StormShield Rain Jacket features a 3-layer Gore-Tex membrane for 100% waterproofing without sacrificing breathability. Fully seam-sealed with adjustable hood, cuffs, and hem for a customizable fit. Includes underarm vents for temperature regulation and a lifetime warranty against manufacturing defects. Spot clean with a damp cloth and reproof annually.",
    company: "StormShield",
    company2: "ستورم شيلد",

    warranty: "2 years (manufacturing defects)",
    category: "clothing",
    rating: 4.5
  },
  {
    id: 38,
    name: "Graphic T-Shirt",
    price: 319.99,
    name2: "تيشرت مطبوع",
    price2: "٣١٩٫٩٩",
    description2: "١٠٠٪ قطن، تصميم مطبوع",
    information2: "تستخدم تيشيرت ArtTease الجرافيكي قطن حلقي فائق النعومة لشعور فاخر. يضمن عملية الصبغ الصديقة للبيئة ألوانًا زاهية وطويلة الأمد لا تتشقق أو تتلاشى. يحتفظ القماش المنكمش مسبقًا بشكله بعد الغسيل. مصمم بملاءمة مدببة قليلاً لمظهر عصري. يُغسل من الداخل بماء بارد للحفاظ على الطباعة.",
    rating2: "٤٫١/٥",
    warranty2: "شهران",
    image: "/images/tshirt.jpg",
    description: "100% cotton, printed design",
    information: "The ArtTease Graphic T-Shirt uses ultra-soft ring-spun cotton for a premium feel. The eco-friendly dye process ensures vibrant, long-lasting prints that won’t crack or fade. Pre-shrunk fabric maintains shape after washing. Designed with a slightly tapered fit for a modern silhouette. Wash inside out in cold water to preserve print.",
    company: "ArtTease",
    company2: "ارت تييس",

    warranty: "2 months",
    category: "clothing",
    rating: 4.1
  },
  {
    id: 39,
    name: "Formal Blazer",
    price: 949.99,
    name2: "بليزر رسمي",
    price2: "٩٤٩٫٩٩",
    description2: "قصير ضيق، مزيج صوفي",
    information2: "تم تفصيل بلازر ExecutiveCraft من مزيج فاخر من الصوف والإيلاستان لمنح هيكل مع قابلية للتمدد. يتميز بياقة مقطوعة وأزرار أكمام وظيفية وبطانة ساتان قابلة للتنفس. تم تحسين الشكل للحركة مع الحفاظ على طية حادة. يشمل جيب داخلي للأقلام وحامل تذاكر. للتنظيف الجاف فقط.",
    rating2: "٤٫٦/٥",
    warranty2: "شهران",
    image: "/images/blazer.jpg",
    description: "Slim fit, wool blend",
    information: "The ExecutiveCraft Blazer is tailored from a luxurious wool-elastane blend for structure with stretch. Features a notched lapel, functional cuff buttons, and a breathable satin lining. The silhouette is optimized for movement while maintaining a sharp drape. Includes an interior pen pocket and ticket holder. Dry clean only.",
    company: "ExecutiveCraft",
    company2: "اكسكيوتيڤ كرافت",

    warranty: "2 months",
    category: "clothing",
    rating: 4.6
  },
  {
    id: 40,
    name: "Hooded Sweatshirt",
    price: 344.99,
    name2: "سويت شيرت / هودي",
    price2: "٣٤٤٫٩٩",
    description2: "بطانة صوفية، خصر قابل للتعديل",
    information2: "تم بناء سترة StreetFlex بداخل مزدوج من الصوف للفّ الخفيف للدفء وخارج من قطن وبوليستر متين. يتميز بجيب كنغر، وخياطة معززة، وباطن مشطوف للراحة. يغلق غطاء الرأس القابل للتعديل وأساور مضلعة الحرارة داخليًا. يُغسل بالغسالة بماء بارد ويُجفف على حرارة منخفضة.",
    rating2: "٤٫٤/٥",
    warranty2: "شهران",
    image: "/images/hoodie.jpg",
    description: "Fleece lining, adjustable drawstring",
    information: "The StreetFlex Hoodie is built with a double-layered fleece interior for warmth and a durable cotton-polyester exterior. Features a kangaroo pocket, reinforced stitching, and a brushed interior for comfort. The adjustable drawstring hood and ribbed cuffs seal in heat. Machine wash cold and tumble dry low.",
    company: "StreetFlex",
    company2: "ستريت فليكس",

    warranty: "2 months",
    category: "clothing",
    rating: 4.4
  },
  {
    id: 41,
    name: "Chronograph Watch",
    price: 799.99,
    image: "/images/watch1.jpg",
    name2: "ساعة كرونوغراف",
    price2: "٧٩٩٫٩٩",
    description2: "خصم ٢٠٪🔥. فولاذ مقاوم للصدأ، مقاومة للماء",
    information2: "يتميز كرونوغراف PrecisionTime بحركة كوارتز سويسرية مع عدادات فرعية للثواني والدقائق والساعات. علبة من الفولاذ المقاوم للصدأ بحجم ٤٢ مم مقاومة للخدوش مع وجه من الكريستال الياقوتي. مقاوم للماء حتى ١٠٠ متر (١٠ أتم)، مناسب للسباحة. يشمل حزام جلد أصلي مع دبابيس سريعة التحرير لتبديل سهل. عمر البطارية سنتان مع خلية قابلة للاستبدال.",
    rating2: "٤٫٦/٥",
    warranty2: "سنتان",
    description: "Discount️\u200d 20%🔥. Stainless steel, water resistant",
    information: "The PrecisionTime Chronograph features a Swiss quartz movement with sub-dials for seconds, minutes, and hours. The 42mm stainless steel case is scratch-resistant with a sapphire crystal face. Water-resistant to 100m (10ATM), suitable for swimming. Includes a genuine leather strap with quick-release pins for easy swapping. 2-year battery life with replaceable cell.",
    company: "PrecisionTime",
    company2: "بريسيشن تايم",

    warranty: "2 years",
    category: "watches",
    rating: 4.6
  },
  {
    id: 42,
    name: "Smart Fitness Watch",
    price: 1059.99,
    name2: "ساعة لياقة ذكية",
    price2: "١٬٠٥٩٫٩٩",
    description2: "خصم ٢٠٪🔥. قياس معدل القلب، تتبع GPS",
    information2: "تتميز ساعة FitTech Pro الذكية بمراقبة معدل ضربات القلب على مدار ٢٤ ساعة طوال الأسبوع، وGPS مدمج لتتبع المسار، وشاشة لمس اموليد بحجم ١.٤ بوصة. تتعقب مراحل النوم، ومستويات الأكسجين في الدم، والسعرات الحرارية المحروقة بدقة ٩٥٪. متوافقة مع أنظمة ابل و اندرويد مع عمر بطارية يصل إلى ٧ أيام. مقاومة للسباحة حتى ٥٠ مترًا وتشمل خوارزميات تتبع التوتر. تتزامن لاسلكيًا مع تطبيق FitTech لتحليلات صحية مفصلة.",
    rating2: "٤٫٥/٥",
    warranty2: "سنتان",
    image: "/images/watch2.jpg",
    description: "Discount️\u200d 20%🔥. Heart rate monitor, GPS tracking",
    information: "The FitTech Pro Smart Watch features 24/7 heart rate monitoring, built-in GPS for route tracking, and a 1.4\" AMOLED touchscreen. Tracks sleep stages, blood oxygen levels, and calories burned with 95% accuracy. Compatible with iOS and Android, with 7-day battery life. Swim-proof up to 50m and includes stress-tracking algorithms. Syncs wirelessly to the FitTech app for detailed health analytics.",
    company: "FitTech",
    company2: "فيت تيك",

    warranty: "2 years",
    category: "watches",
    rating: 4.5
  },
  {
    id: 43,
    name: "Luxury Dress Watch",
    price: 1499.99,
    name2: "ساعة رسمية فاخرة",
    price2: "١٬٤٩٩٫٩٩",
    description2: "حركة سويسرية، سوار جلدي",
    information2: "تتميز ساعة Horologe السويسرية الفاخرة بحركة أوتوماتيكية دقيقة من طراز ETA 2892-A2، مرئية من خلال ظهر العلبة المصنوع من الكريستال الياقوتي. العلبة بقطر ٤٠ ملم مطلية بالذهب الوردي وتترافق مع حزام من جلد العجل الإيطالي مخيط يدويًا. تحتوي على ميناء مزخرف بنمط Guilloché مع أرقام رومانية واحتياطي طاقة يصل إلى ٤٢ ساعة. مقاومة للماء حتى ٣٠ مترًا. يُنصح بالصيانة كل ٥ سنوات للحفاظ على الدقة.",
    rating2: "٤٫٨/٥",
    warranty2: "٥ سنوات",
    image: "/images/watch3.jpg",
    description: "Swiss movement, leather strap",
    information: "The Horologe Swiss Dress Watch is powered by a precise ETA 2892-A2 automatic movement, visible through the sapphire crystal caseback. The 40mm rose gold-plated case pairs with a hand-stitched Italian calfskin strap. Features a guilloché dial with Roman numerals and a power reserve of 42 hours. Water-resistant to 30m. Servicing recommended every 5 years to maintain accuracy.",
    company: "Horologe",
    company2: "هورولوج",

    warranty: "5 years",
    category: "watches",
    rating: 4.8
  },
  {
    id: 44,
    name: "Digital Sports Watch",
    price: 979.99,
    name2: "ساعة رياضية رقمية",
    price2: "٩٧٩٫٩٩",
    description2: "مؤقت، إضاءة خلفية، منبه",
    information2: "تم بناء ساعة TitanTrack الرقمية للرياضيين مع علبة من الألياف الزجاجية مقاومة للصدمات وشاشة LCD عالية التباين. تشمل ٥ منبهات، ذاكرة لـ ١٠٠ لفة، ومؤقت عد تنازلي. يوفر الإضاءة الخلفية الكهربائية التلألؤية رؤية واضحة في ظروف الإضاءة المنخفضة. مقاومة للماء حتى ١٠٠ متر، مما يجعلها مناسبة للسباحة. تعمل ببطارية ليثيوم تدوم ١٠ سنوات.",
    rating2: "٤٫٢/٥",
    warranty2: "٣ سنوات",
    image: "/images/watch4.jpg",
    description: "Stopwatch, backlight, alarm",
    information: "The TitanTrack Digital Watch is built for athletes with a shock-resistant fiberglass case and a high-contrast LCD display. Includes 5 alarms, 100-lap memory, and a countdown timer. The electroluminescent backlight ensures visibility in low light. Water-resistant to 100m, making it suitable for swimming. Powered by a 10-year lithium battery.",
    company: "TitanTrack",
    company2: "تايتن تراك",

    warranty: "3 years",
    category: "watches",
    rating: 4.2
  },
  {
    id: 45,
    name: "Diver's Watch",
    price: 1299.99,
    name2: "ساعة غوص",
    price2: "١٬٢٩٩٫٩٩",
    description2: "مقاومة ماء ٢٠٠ متر، إطار أحادي الاتجاه",
    information2: "تفي ساعة الغواص AbyssMaster بمعايير ISO 6425 مع مقاومة للماء حتى ٢٠٠ متر وصمام هروب الهيليوم. الحافة الخزفية أحادية الاتجاه تتعقب وقت الغوص، بينما تتوهج العلامات الفلورية لأكثر من ٢٥ ساعة. تتميز بحركة أوتوماتيكية Miyota 9015 وزجاج ياقوتي مقاوم للخدوش. تم اختبار الضغط لضمان الاعتمادية عند الأعماق.",
    rating2: "٤٫٧/٥",
    warranty2: "٥ سنوات",
    image: "/images/watch5.jpg",
    description: "200m water resistance, unidirectional bezel",
    information: "The AbyssMaster Diver's Watch meets ISO 6425 standards with 200m water resistance and a helium escape valve. The ceramic unidirectional bezel tracks dive time, while the luminescent markers glow for 25+ hours. Features a Miyota 9015 automatic movement and a scratch-resistant sapphire crystal. Pressure-tested to ensure reliability at depth.",
    company: "AbyssMaster",
    company2: "ابيس ماستر",

    warranty: "5 years",
    category: "watches",
    rating: 4.7
  },
  {
    id: 46,
    name: "Minimalist Watch",
    price: 1029.99,
    name2: "ساعة مينيماليست",
    price2: "١٬٠٢٩٫٩٩",
    description2: "تصميم أنيق، سوار شبكي معدني",
    information2: "تتميز ساعة Nuovo Minimalist بحالة من التيتانيوم بحجم ٣٨ مم وحزام شبكي ميلانيز لراحة خفيفة الوزن للغاية. حركة كوارتز يابانية فائقة النحافة بسمك ٦ مم فقط. الميناء الأسود غير اللامع بدون أرقام لتصميم أنيق وبسيط. مقاومة للماء حتى ٥٠ مترًا. مثالية للاستخدام اليومي مع الملابس الرسمية أو الكاجوال.",
    rating2: "٤٫٤/٥",
    warranty2: "٣ سنوات",
    image: "/images/watch6.jpg",
    description: "Slim design, mesh metal band",
    information: "The Nuovo Minimalist Watch features a 38mm titanium case and a Milanese mesh strap for featherlight comfort. The ultra-thin Japanese quartz movement measures just 6mm thick. The matte black dial has no numerals for a clean aesthetic. Water-resistant to 50m. Ideal for everyday wear with business or casual attire.",
    company: "Nuovo",
    company2: "نيوڤو",

    warranty: "3 years",
    category: "watches",
    rating: 4.4
  },
  {
    id: 47,
    name: "Pilot Watch",
    price: 1349.99,
    name2: "ساعة طيار",
    price2: "١٬٣٤٩٫٩٩",
    description2: "تصميم طيران، مؤشرات مضيئة",
    information2: "تتميز ساعة AeroClassic Pilot بحافظة من الفولاذ المقاوم للصدأ بحجم ٤٤ مم مع إطار دوار لحسابات الطيران. تتميز العقارب والمؤشرات بطبقة Super-LumiNova لضمان وضوح الرؤية في الظلام. تعمل بحركة سويسرية Sellita SW200-1 مع احتياطي طاقة لمدة ٣٨ ساعة. تشمل قفص فاراداي مضاد للمغناطيسية لضمان الدقة. مقاومة للماء حتى ١٠٠ متر.",
    rating2: "٤٫٦/٥",
    warranty2: "٤ سنوات",
    image: "/images/watch7.jpg",
    description: "Aviation-inspired, luminous hands",
    information: "The AeroClassic Pilot Watch boasts a 44mm stainless steel case with a slide-rule bezel for aviation calculations. The Super-LumiNova-coated hands and markers ensure readability in darkness. Powered by a Swiss Sellita SW200-1 movement with a 38-hour reserve. Includes a anti-magnetic Faraday cage for precision. Water-resistant to 100m.",
    company: "AeroClassic",
    company2: "ايرو كلاسيك",

    warranty: "4 years",
    category: "watches",
    rating: 4.6
  },
  {
    id: 48,
    name: "Kids Digital Watch",
    price: 424.99,
    name2: "ساعة أطفال رقمية",
    price2: "٤٢٤٫٩٩",
    description2: "ملونة، متينة، مقاومة للرش",
    information2: "تتميز ساعة PlayTime Kids بحزام من السيليكون بمواد مضادة للحساسية ووجه زجاج معدني مقاوم للكسر. تشمل ساعة توقيت، مؤقت تنازلي، ودعم لصيغ ١٢/٢٤ ساعة. مقاومة للرذاذ أثناء غسل اليدين والمطر (غير مخصصة للسباحة). تتيح الضوابط الأبوية تخصيص التنبيهات. تدوم البطارية لمدة عامين مع الاستخدام المعتاد.",
    rating2: "٤٫١/٥",
    warranty2: "سنة واحدة",
    image: "/images/watch8.jpg",
    description: "Colorful, durable, splash-proof",
    information: "The PlayTime Kids Watch features a silicone band with hypoallergenic materials and a shatter-resistant mineral crystal face. Includes a stopwatch, countdown timer, and 12/24-hour formats. Splash-proof for handwashing and rain (not for swimming). Parental controls allow alarm customization. Battery lasts 2 years with typical use.",
    company: "PlayTime",
    company2: "بلاي تايم",

    warranty: "1 year",
    category: "watches",
    rating: 4.1
  },
  {
    id: 49,
    name: "Solar-Powered Watch",
    price: 1079.99,
    name2: "ساعة تعمل بالطاقة الشمسية",
    price2: "١٬٠٧٩٫٩٩",
    description2: "صديقة للبيئة، لا تحتاج بطارية",
    information2: "تقوم ساعة EcoDrive الشمسية بتحويل ضوء الشمس أو الضوء الصناعي إلى طاقة تُخزن في خلية قابلة لإعادة الشحن تدوم لأكثر من ٦ أشهر في الظلام. تحتوي العلبة المصنوعة من الفولاذ المقاوم للصدأ بقياس ٤١ ملم على حركة Eco-Drive يابانية بدقة ±١٥ ثانية شهريًا. تشمل نافذة للتاريخ ومقاومة للماء حتى ١٠٠ متر. لا حاجة لتبديل البطارية.",
    rating2: "٤٫٥/٥",
    warranty2: "٥ سنوات",
    image: "/images/watch9.jpg",
    description: "Eco-friendly, never needs battery",
    information: "The EcoDrive Solar Watch converts sunlight or artificial light into energy, stored in a rechargeable cell for 6+ months in darkness. The 41mm stainless steel case houses a Japanese Eco-Drive movement with ±15 seconds/month accuracy. Features a date window and 100m water resistance. No battery replacements needed.",
    company: "EcoDrive",
    company2: "ايكو درايف",

    warranty: "5 years",
    category: "watches",
    rating: 4.5
  },
  {
    id: 50,
    name: "Fashion Bracelet Watch",
    price: 689.99,
    name2: "ساعة إسوارة موضة",
    price2: "٦٨٩٫٩٩",
    description2: "تصميم عصري، أَسْوَرة قابلة للتبديل",
    information2: "تقدم ساعة StyleLink السوار تصميمًا معياريًا مع أحزمة سريعة الإزالة (مرفقة: شبكة من الفولاذ المقاوم للصدأ، جلد، وسيلكون). تحتوي العلبة الوردية الذهبية بقياس 36 ملم على حركة كوارتز Miyota موثوقة. يتغير ميناء من عرق اللؤلؤ في اللون حسب الضوء. مقاومة للماء حتى ٣٠ مترًا. مثالية للتنسيق مع مختلف الإطلالات.",
    rating2: "٤٫٣/٥",
    warranty2: "سنتان",
    image: "/images/watch10.jpg",
    description: "Trendy design, interchangeable bands",
    information: "The StyleLink Bracelet Watch offers a modular design with quick-release bands (included: stainless steel mesh, leather, and silicone). The 36mm rose gold case houses a reliable Miyota quartz movement. The mother-of-pearl dial changes hue under light. Water-resistant to 30m. Perfect for mixing and matching with outfits.",
    company: "StyleLink",
    company2: "ستايل لينك",

    warranty: "2 years",
    category: "watches",
    rating: 4.3
  },
  {
    id: 51,
    name: "Smartwatch Pro",
    price: 6229.99,
    name2: "ساعة ذكية محترفة",
    price2: "٦٬٢٢٩٫٩٩",
    description2: "شاشة AMOLED، قياس الأكسجين بالدم",
    information2: "تتميز OmniSmart Pro بشاشة اموليد دائمة التشغيل مقاس ١.٦ بوصة وسطوع ١٠٠٠ نت. تتابع مخطط القلب الكهربائي (ECG)، مستوى الأكسجين في الدم (SpO2)، ودرجة حرارة الجلد. تشمل اتصال LTE، مساعد صوتي، وذاكرة تخزين ١٢٨ جيجابايت. الهيكل من التيتانيوم وزجاج الياقوت يتحملان الظروف القاسية. تدوم البطارية ٣ أيام مع الاستخدام المكثف أو ٧ أيام في وضع توفير الطاقة.",
    rating2: "٤٫٦/٥",
    warranty2: "٣ سنوات",
    image: "/images/watch11.jpg",
    description: "AMOLED display, blood oxygen monitor",
    information: "The OmniSmart Pro features a 1.6\" Always-On AMOLED display with 1000-nit brightness. Tracks ECG, SpO2, and skin temperature. Includes LTE connectivity, voice assistant, and 128GB storage. The titanium case and sapphire crystal withstand extreme conditions. Battery lasts 3 days with heavy use or 7 days in power-saving mode.",
    company: "OmniSmart",
    company2: "اومني سمارت",

    warranty: "3 years",
    category: "watches",
    rating: 4.6
  },
  {
    id: 52,
    name: "Military Tactical Watch",
    price: 1049.99,
    name2: "ساعة عسكرية تكتيكية",
    price2: "١٬٠٤٩٫٩٩",
    description2: "مقاومة للصدمات، بوصلة مدمجة",
    information2: "تفي ساعة Tactix Military بمعايير MIL-STD-810G لمقاومة الصدمات والاهتزازات والحرارة. تشمل بوصلة رقمية مدمجة، مقياس ارتفاع، ومقياس ضغط جوي لدعم التنقل في الهواء الطلق. هيكل معزز بألياف الكربون وحزام NATO يضمنان المتانة. متوافقة مع الرؤية الليلية مع وضع التخفي لتعطيل جميع الأضواء. مقاومة للماء حتى عمق ٢٠٠ متر.",
    rating2: "٤٫٤/٥",
    warranty2: "٥ سنوات",
    image: "/images/watch12.jpg",
    description: "Shock resistant, compass feature",
    information: "The Tactix Military Watch meets MIL-STD-810G standards for shock, vibration, and thermal resistance. The built-in digital compass, altimeter, and barometer support outdoor navigation. The carbon fiber-reinforced case and NATO strap ensure durability. Night-vision compatible with a stealth mode to disable all lights. Water-resistant to 200m.",
    company: "Tactix",
    company2: "تاكتيكس",

    warranty: "5 years",
    category: "watches",
    rating: 4.4
  },
  {
    id: 53,
    name: "Rose Gold Watch",
    price: 1979.99,
    name2: "ساعة ذهب وردي",
    price2: "١٬٩٧٩٫٩٩",
    description2: "تصميم أنيق، سوار جلد طبيعي",
    information2: "تتميز ساعة LuxeRose Gold بحافظة ٤٠ مم مطلية بالذهب الوردي عيار 18 قيراط مع حركة كوارتز سويسرية من Ronda للدقة. يشتمل الحزام على جلد تمساح أصلي مخيط يدوياً وبطانة من جلد العجل الناعم. يتميز قرص المينا من أم اللؤلؤ بعلامات مؤشرات مقطوعة بالألماس ونافذة للتاريخ عند الساعة ٣. مقاومة للماء حتى ٥٠ متر. تشمل علبة عرض وقطعة تلميع.",
    rating2: "٤٫٥/٥",
    warranty2: "٥ سنوات",
    image: "/images/watch13.jpg",
    description: "Elegant design, genuine leather strap",
    information: "The LuxeRose Gold Watch features a 40mm 18k rose gold-plated case with a Swiss Ronda quartz movement for precision. The genuine alligator leather strap is hand-stitched and lined with soft calfskin. The mother-of-pearl dial is adorned with diamond-cut indices and a date window at 3 o'clock. Water-resistant to 50m. Includes a presentation box and polishing cloth.",
    company: "LuxeRose",
    company2: "لوكسي روز",

    warranty: "5 years",
    category: "watches",
    rating: 4.5
  },
  {
    id: 54,
    name: "Analog-Digital Watch",
    price: 1099.99,
    name2: "ساعة أنالوج-رقمية",
    price2: "١٬٠٩٩٫٩٩",
    description2: "شاشة هجينة، مناطق زمنية متعددة",
    information2: "تجمع ساعة ChronoHybrid بين الأناقة التناظرية والوظائف الرقمية. تحتوي العلبة المصنوعة من الفولاذ المقاوم للصدأ بحجم ٤٢ مم على حركة يابانية تعمل بالطاقة الشمسية وشاشة LCD فرعية تعرض منطقة زمنية ثانية، منبه، وكرونوغراف. البلور الياقوتي مقاوم للانعكاس، وسوار الساعة قابل للتعديل مع مشبك زر دفع. مقاومة للماء حتى ١٠٠ متر.",
    rating2: "٤٫٣/٥",
    warranty2: "٣ سنوات",
    image: "/images/watch14.jpg",
    description: "Hybrid display, multiple time zones",
    information: "The ChronoHybrid Watch combines analog elegance with digital functionality. The 42mm stainless steel case houses a Japanese solar-powered movement and an LCD sub-display showing a second time zone, alarm, and stopwatch. The sapphire crystal is anti-reflective, and the bracelet is adjustable with a push-button clasp. Water-resistant to 100m.",
    company: "ChronoHybrid",
    company2: "كرونو هيبرد",

    warranty: "3 years",
    category: "watches",
    rating: 4.3
  },
  {
    id: 55,
    name: "Limited Edition Watch",
    price: 15599.99,
    name2: "ساعة إصدار محدود",
    price2: "١٥٬٥٩٩٫٩٩",
    description2: "قطعة جامعية، أرقام مسلسلة",
    information2: "تتميز ساعة Heritage Limited Edition (#/٥٠٠ ) بحركة توربيون سويسرية مجمعة يدويًا تظهر من خلال الميناء الهيكلي. العلبة مصنوعة من البلاتين بقياس ٤٤ مم مع حزام جلد نعام مخيط يدويًا. تأتي كل ساعة مع شهادة الأصالة وخدمة كونسيرج خاصة للصيانة. مقاومة للماء حتى ٣٠ مترًا.",
    rating2: "٤٫٧/٥",
    warranty2: "مدى الحياة (الأجزاء الميكانيكية)",
    image: "/images/watch15.jpg",
    description: "Collector's item, numbered series",
    information: "The Heritage Limited Edition (#/500) features a hand-assembled Swiss tourbillon movement visible through the skeletonized dial. The 44mm platinum case is paired with a hand-stitched ostrich leather strap. Each watch includes a certificate of authenticity and a private concierge service for maintenance. Water-resistant to 30m.",
    company: "Heritage",
    company2: "هيرتيتج",

    warranty: "Lifetime (mechanical parts)",
    category: "watches",
    rating: 4.7
  },
  {
    id: 56,
    name: "Wooden Watch",
    price: 819.99,
    name2: "ساعة خشبية",
    price2: "٨١٩٫٩٩",
    description2: "خيزران مستدام، تَخْشِين فريد",
    information2: "تستخدم ساعة EcoWood خشب التيك وخيزران معاد تدويرهما لصنع علبة خفيفة الوزن ومضادة للحساسية. تضمن حركة Miyota اليابانية الدقة، بينما يضفي نقوش الخشب الطبيعية تميزًا فريدًا لكل ساعة. حزام الجلد النباتي قابل للتحلل الحيوي. مقاومة للماء حتى ٣٠ مترًا (مقاومة للرذاذ).",
    rating2: "٤٫٢/٥",
    warranty2: "سنتان",
    image: "/images/watch16.jpg",
    description: "Sustainable bamboo, unique grain",
    information: "The EcoWood Watch uses reclaimed teak and bamboo for a lightweight, hypoallergenic case. The Japanese Miyota movement ensures accuracy, while the natural wood grain ensures no two watches are identical. The plant-based leather strap is biodegradable. Water-resistant to 30m (splash-proof).",
    company: "EcoWood",
    company2: "ايكو وود",

    warranty: "2 years",
    category: "watches",
    rating: 4.2
  },
  {
    id: 57,
    name: "Thin Dress Watch",
    price: 1059.99,
    name2: "ساعة رسمية رفيعة",
    price2: "١٬٠٥٩٫٩٩",
    description2: "سماكة ٦ مم فقط",
    information2: "تتميز ساعة SlimHorizon بسُمك ٦ مم فقط مع علبة من الفولاذ المقاوم للصدأ بحجم ٣٨ مم وحركة كوارتز سويسرية. تتميز المينا بتصميم بسيط مع عقارب رفيعة جدًا وملمس دقيق. سوار شبكي ميلانيزي مدمج قابل للتعديل لملاءمة مثالية. مثالية للارتداء الرسمي. مقاومة للماء حتى ٣٠ مترًا.",
    rating2: "٤٫٤/٥",
    warranty2: "٣ سنوات",
    image: "/images/watch17.jpg",
    description: "Ultra-slim 6mm profile",
    information: "The SlimHorizon Watch measures just 6mm thick with a 38mm stainless steel case and a Swiss quartz movement. The minimalist dial features razor-thin hands and a micro-textured finish. The integrated Milanese mesh strap adjusts for a seamless fit. Ideal for formal wear. Water-resistant to 30m.",
    company: "SlimHorizon",
    company2: "سليم هوريزون",

    warranty: "3 years",
    category: "watches",
    rating: 4.4
  },
  {
    id: 58,
    name: "Rugged Outdoor Watch",
    price: 1399.99,
    image: "/images/watch18.jpg",
    name2: "ساعة خارجية متينة",
    price2: "١٬٣٩٩٫٩٩",
    description2: "مقياس ارتفاع وضغط جوي مدمج",
    information2: "تتمتع ساعة TerraTrek Outdoor بشهادة MIL-STD-810G لمقاومة الصدمات والغبار ودرجات الحرارة القصوى. تحتوي على مجسات ABC (مقياس الارتفاع، البارومتر، البوصلة) لعرض بيانات بيئية في الوقت الحقيقي. تأتي بعلبة من التيتانيوم بحجم ٤٦ مم مع زجاج ياقوتي مطلي مضاد للانعكاس. تدوم البطارية لمدة سنة في وضع الرحلات الاستكشافية. مقاومة للماء حتى ٢٠٠ متر.",
    rating2: "٤٫٥/٥",
    warranty2: "٥ سنوات",
    description: "Built-in altimeter and barometer",
    information: "The TerraTrek Outdoor Watch is MIL-STD-810G certified for shock, dust, and extreme temperatures. The ABC sensors (altimeter, barometer, compass) provide real-time environmental data. The 46mm titanium case has a sapphire crystal with anti-glare coating. Battery lasts 1 year in expedition mode. Water-resistant to 200m.",
    company: "TerraTrek",
    company2: "تيرا تريك",

    warranty: "5 years",
    category: "watches",
    rating: 4.5
  },
  {
    id: 59,
    name: "Vintage Watch",
    price: 9249.99,
    name2: "ساعة كلاسيكية",
    price2: "٩٬٢٤٩٫٩٩",
    description2: "تصميم رجعي، حركة يدوية",
    information2: "تُحيي ساعة RetroClassic تصميم الستينيات بحركة سويسرية يدوية التعبئة من نوع ETA 2801. تحتوي العلبة المصنوعة من الفولاذ المقاوم للصدأ بقياس ٣٦ مم على زجاج هيساليت مقوس لزيادة الأصالة. العقارب المصنوعة من الفولاذ الأزرق الحراري والميناء الكريمي تتقدمان في العمر بأناقة. تأتي مع حزام جلدي على الطراز القديم. مقاومة للماء حتى ٣٠ مترًا.",
    rating2: "٤٫٦/٥",
    warranty2: "٤ سنوات",
    image: "/images/watch19.jpg",
    description: "Retro design, hand-wound movement",
    information: "The RetroClassic Watch revives a 1960s design with a manually wound Swiss ETA 2801 movement. The 36mm stainless steel case has a domed hesalite crystal for authenticity. The heat-blued steel hands and cream dial age gracefully. Includes a vintage-style leather strap. Water-resistant to 30m.",
    company: "RetroClassic",
    company2: "ريترو كلاسيك",

    warranty: "4 years",
    category: "watches",
    rating: 4.6
  },
  {
    id: 60,
    name: "Connected Watch",
    price: 1479.99,
    name2: "ساعة متصلة",
    price2: "١٬٤٧٩٫٩٩",
    description2: "إشعارات ذكية، دعم تطبيقات",
    information2: "تتزامن ساعة LinkSmart مع أجهزة اندرويد وابل لعرض المكالمات والرسائل والتنبيهات من التطبيقات. تتميز بشاشة AMOLED مقاس ١٫٣ بوصة بمعدل تحديث ٦٠ هرتز. تتابع معدل ضربات القلب، الخطوات، والنوم. العلبة المصنوعة من الألمنيوم مقترنة بسوار من الفلوروالإيلاستومر لراحة فائقة. تدوم البطارية حتى ٥ أيام. مقاومة للماء حتى عمق ٥٠ مترًا.",
    rating2: "٤٫٣/٥",
    warranty2: "سنتان",
    image: "/images/watch20.jpg",
    description: "Smart notifications, app support",
    information: "The LinkSmart Watch syncs with iOS/Android to display calls, texts, and app alerts. The 1.3\" AMOLED touchscreen has a 60Hz refresh rate. Tracks heart rate, steps, and sleep. The aluminum case is paired with a fluoroelastomer band for comfort. Battery lasts 5 days. Water-resistant to 50m.",
    company: "LinkSmart",
    company2: "لينك سمارت",

    warranty: "2 years",
    category: "watches",
    rating: 4.3
  },
  {
    id: 61,
    name: "Organic Apples (1kg)",
    price: 63.99,
    name2: "تفاح عضوي (١ كجم)",
    price2: "٦٣٫٩٩",
    description2: "خصم ٢٠٪🔥. طازج وخالي من المبيدات",
    information2: "تنمو في بساتين عضوية معتمدة في ولاية واشنطن. مقرمشة وعصرية بطعم متوازن بين الحلاوة والحموضة. غنية بالألياف وفيتامين C. يُنصح بتخزينها في الثلاجة للحفاظ على نضارتها لمدة تصل إلى ٤ أسابيع. حاصلة على شهادتي USDA Organic وNon-GMO Project Verified.",
    rating2: "٤٫٧/٥",
    freshness_guarantee2: "١٤ يومًا",
    image: "/images/apples.jpg",
    description: "Discount️\u200d 20%🔥. Fresh, pesticide-free",
    information: "Grown in certified organic orchards in Washington State. Crisp and juicy with a balanced sweet-tart flavor. Rich in fiber and vitamin C. Store in the refrigerator to maintain freshness for up to 4 weeks. USDA Organic and Non-GMO Project Verified.",
    company: "GreenOrchard",
    company2: "جرين اوركارد",

    freshness_guarantee: "14 days",
    category: "groceries",
    rating: 4.7
  },
  {
    id: 62,
    name: "Whole Grain Bread",
    name2: "خبز القمح الكامل",
    price2: "٥٫٤٩",
    description2: "خصم ٢٠٪🔥. غني بالألياف، بدون مواد حافظة",
    information2: "يُخبز يوميًا باستخدام دقيق القمح الكامل المطحون على الحجر، وبذور الكتان، والكينوا. يحتوي على 5 غرامات من الألياف في كل شريحة. خالٍ من الإضافات الصناعية وشراب الذرة عالي الفركتوز. يُفضل تناوله خلال ٥ أيام أو تجميده لمدة تصل إلى ٣ أشهر. حاصل على شهادتي الحلال والنباتي.",
    rating2: "٤٫٥/٥",
    shelf_life2: "٥ أيام (مغلق)",
    price: 5.49,
    image: "/images/bread.jpg",
    description: "Discount️\u200d 20%🔥. High fiber, no preservatives",
    information: "Baked daily with stone-ground whole wheat, flaxseeds, and quinoa. Contains 5g of fiber per slice. Free from artificial additives and high-fructose corn syrup. Best consumed within 5 days or freeze for up to 3 months. Certified halal and Vegan.",
    company: "PureGrains",
    company2: "بيور جيرانس",

    shelf_life: "5 days (unopened)",
    category: "groceries",
    rating: 4.5
  },
  {
    id: 63,
    name: "Free-Range Eggs (12)",
    name2: "بيض المراعي (١٢)",
    price2: "٧٥٫٠٠",
    description2: "درجة AA، حجم كبير",
    information2: "مأخوذة من دجاج تربى في المراعي ويتغذى على علف عضوي. تتميز البيضات بصفار برتقالي داكن وبياض متماسك. غنية بالأوميغا-٣ وفيتامين D. تُحفظ في الثلاجة بدرجة حرارة لا تتجاوز ٤ درجات مئوية. حاصلة على شهادتي الإنسانية والعضوية. يُفضل استخدامها خلال 3 أسابيع من تاريخ الشراء.",
    rating2: "٤٫٨/٥",
    freshness_guarantee2: "٢١ يومًا",
    price: 75,
    image: "/images/eggs.jpg",
    description: "Grade AA, large",
    information: "Sourced from hens raised on pasture with access to organic feed. Eggs have deep orange yolks and firm whites. Rich in omega-3s and vitamin D. Store in the refrigerator at ≤4°C. Certified Humane and Organic. Use within 3 weeks of purchase.",
    company: "HappyHen Farms",
    company2: "هابي هين فارمس",

    freshness_guarantee: "21 days",
    category: "groceries",
    rating: 4.8
  },
  {
    id: 64,
    name: "Organic Milk (1L)",
    name2: "حليب عضوي (١ لتر)",
    price2: "٤٠٫٩٩",
    description2: "مبستر، مدعّم بفيتامين د",
    information2: "يُستخلص حليب CreamTop العضوي من أبقار تتغذى على الأعشاب ولم تُعالج بالمضادات الحيوية أو الهرمونات الاصطناعية. غني بالأوميغا-٣ وفيتامين D، ويخضع للتجانس للحصول على قوام موحد وللبسترة الفائقة لتمديد فترة الصلاحية. يُرج جيداً قبل الاستخدام. يُفضل استهلاكه خلال ٧ أيام من الفتح. يُحفظ مبرداً بدرجة حرارة لا تتجاوز ٤ درجات مئوية. حاصل على شهادة USDA العضوية.",
    rating2: "٤٫٦/٥",
    shelf_life2: "١٤ يومًا (مغلق)، ٧ أيام (مفتوح)",
    price: 40.99,
    image: "/images/milk.jpg",
    description: "Pasteurized, vitamin D enriched",
    information: "CreamTop Organic Milk is sourced from grass-fed cows raised without antibiotics or synthetic hormones. Rich in omega-3s and vitamin D, it's homogenized for consistent texture and ultra-pasteurized to extend freshness. Shake well before use. Best enjoyed within 7 days of opening. Store refrigerated at ≤4°C. USDA Organic certified.",
    company: "CreamTop",
    company2: "كريم توب",

    shelf_life: "14 days unopened, 7 days after opening",
    category: "groceries",
    rating: 4.6
  },
  {
    id: 65,
    name: "Extra Virgin Olive Oil",
    name2: "زيت زيتون بكر ممتاز",
    price2: "١٠٨٫٩٩",
    description2: "عصر على البارد، ٥٠٠ مل",
    information2: "يُستخلص زيت الزيتون البكر الممتاز Olivo Prima على البارد خلال ٢٤ ساعة من الحصاد من زيتون الكورونيكي في جزيرة كريت. يتميز بنسبة حموضة أقل من ٠٫٣%، بطعم فلفلي ونكهات التفاح الأخضر. مثالي للتتبيلات أو الطهي على درجات حرارة منخفضة. يُخزن في مكان بارد ومظلم للحفاظ على مضادات الأكسدة. معتمد من المجلس الدولي للزيتون وغير مفلتر لضمان نكهة غنية.",
    rating2: "٤٫٧/٥",
    shelf_life2: "٢٤ شهرًا (٦ أشهر بعد الفتح)",
    price: 108.99,
    image: "/images/oliveoil.jpg",
    description: "Cold pressed, 500ml",
    information: "Olivo Prima Extra Virgin Olive Oil is cold-extracted within 24 hours of harvest from Koroneiki olives in Crete. With an acidity level <0.3%, it has a peppery finish and notes of green apple. Ideal for dressings or low-heat cooking. Store in a cool, dark place to preserve antioxidants. IOC certified and unfiltered for maximum flavor.",
    company: "Olivo Prima",
    company2: "اوليفو بريما",

    shelf_life: "24 months (after opening: 6 months)",
    category: "groceries",
    rating: 4.7
  },
  {
    id: 66,
    name: "Organic Chicken Breast 1KG",
    price: 239.99,
    name2: "صدور دجاج عضوي (١ كجم)",
    price2: "٢٣٩٫٩٩",
    description2: "تبريد هوائي، بدون مضادات حيوية",
    information2: "دجاج PurePasture العضوي يُبرّد بالهواء (وليس بالماء) للحفاظ على قوامه ونكهته المميزة. يُربّى على علف عضوي مع إمكانية الوصول إلى الهواء الطلق. تُقطع كل صدور الدجاج يدويًا وتُغلف بتفريغ الهواء للحفاظ على الطزاجة. للحصول على أفضل النتائج، يُطهى حتى تصل درجة الحرارة الداخلية إلى ٧٤ درجة مئوية. يُستخدم أو يُجمد خلال يومين من الشراء.",
    rating2: "٤٫٦/٥",
    freshness_guarantee2: "٣ أيام (مبرد)، ٩ أشهر (مجمّد)",
    image: "/images/chicken.jpg",
    description: "Air-chilled, no antibiotics",
    information: "PurePasture Organic Chicken is air-chilled (never water-injected) for superior texture and flavor. Raised on certified organic feed with outdoor access. Each breast is hand-trimmed and vacuum-sealed for freshness. For best results, cook to an internal temperature of 74°C. Use or freeze within 2 days of purchase.",
    company: "PurePasture",
    company2: "بيور باستري",

    freshness_guarantee: "3 days refrigerated, 9 months frozen",
    category: "groceries",
    rating: 4.6
  },
  {
    id: 67,
    name: "Fresh Spinach (200g)",
    name2: "سبانخ طازجة (٢٠٠ جم)",
    price2: "٥٫٢٩",
    description2: "مغسول مسبقًا، جاهز للأكل",
    information2: "سبانخ GreenLeaf تُغسل ثلاث مرات بماء معالج بالأوزون لضمان السلامة. تُعبأ في عبوات قابلة للتهوية لتقليل التلف. غنية بالحديد وفيتامين K وحمض الفوليك. الأوراق طرية وتحتوي على أقل قدر من السيقان. يُفضل حفظها مبردة غير مفتوحة وتُستهلك خلال ٥ أيام. لتمديد الطزاجة، يُنصح بوضع مناديل ورقية داخل العبوة لامتصاص الرطوبة.",
    rating2: "٤٫٤/٥",
    shelf_life2: "٥ أيام (مغلق)",
    price: 5.29,
    image: "/images/spinach.jpg",
    description: "Pre-washed, ready to eat",
    information: "GreenLeaf Spinach is triple-washed in ozone-treated water for safety. Packed in breathable clamshells to reduce spoilage. Rich in iron, vitamin K, and folate. Leaves are tender with minimal stems. Refrigerate unopened and consume within 5 days. For extended freshness, line container with paper towels to absorb moisture.",
    company: "GreenLeaf",
    company2: "جرين لييف",

    shelf_life: "5 days unopened",
    category: "groceries",
    rating: 4.4
  },
  {
    id: 68,
    name: "Greek Yogurt (500g)",
    name2: "زبادي يوناني (٥٠٠ جم)",
    price2: "١٣٫٤٩",
    description2: "بروتين عالي، بروبيوتيك",
    information2: "زبادي Yoguri اليوناني الأصيل يُصفى لمدة ٢٤ ساعة للحصول على قوام كثيف وكريمي، ويحتوي على ١٠غ بروتين لكل ١٠٠غ. يحتوي على بكتيريا حية نشطة (L. acidophilus و Bifidus). لا يُضاف إليه جيلاتين أو مواد مكثفة. يُمكن تناوله مع العسل أو استخدامه كبديل للقشطة الحامضة. يُحرّك قبل الاستخدام في حال الانفصال. كوشير وخالٍ من الغلوتين.",
    rating2: "٤٫٥/٥",
    shelf_life2: "٣٠ يومًا (مغلق)، ٧ أيام (مفتوح)",
    price: 13.49,
    image: "/images/yogurt.jpg",
    description: "High protein, probiotic",
    information: "Yoguri Authentic Greek Yogurt is strained for 24 hours to achieve a thick, creamy texture with 10g protein per 100g. Contains live active cultures (L. acidophilus, Bifidus). No gelatin or thickeners added. Enjoy with honey or as a sour cream substitute. Stir before use if separated. Kosher and gluten-free.",
    company: "Yoguri",
    company2: "يوجري",

    shelf_life: "30 days unopened, 7 days after opening",
    category: "groceries",
    rating: 4.5
  },
  {
    id: 69,
    name: "Dark Chocolate (100g)",
    name2: "شوكولاتة داكنة (١٠٠ جم)",
    price2: "٥٢٫٩٩",
    description2: "٧٠٪ كاكاو، عضوية",
    information2: "شوكولاتة CacaoReal الداكنة مصنوعة من حبوب الكاكاو البيروفية أحادية المصدر. تُخمر ببطء لمدة ٧٢ ساعة لتطوير نكهات معقدة من التوت الأحمر والمكسرات. مُحلّاة بسكر القصب العضوي. نباتية وخالية من منتجات الألبان. تُحفظ بعيدًا عن الحرارة وأشعة الشمس لتجنب التحبب. حاصلة على شهادات التجارة العادلة وتحالف الغابات المطيرة.",
    rating2: "٤٫٨/٥",
    shelf_life2: "١٨ شهرًا",
    price: 52.99,
    image: "/images/chocolate.jpg",
    description: "70% cocoa, organic",
    information: "CacaoReal Dark Chocolate is made from single-origin Peruvian cocoa beans. Slow-conched for 72 hours to develop complex flavors of red berries and nuts. Sweetened with organic cane sugar. Vegan and dairy-free. Store away from heat and sunlight to prevent bloom. Certified Fair Trade and Rainforest Alliance.",
    company: "CacaoReal",
    company2: "كاكو رييل",

    shelf_life: "18 months",
    category: "groceries",
    rating: 4.8
  },
  {
    id: 70,
    name: "Organic Coffee Beans 500gm",
    name2: "حبوب قهوة عضوية (٥٠٠ جم)",
    price2: "١٩٧٫٩٩",
    description2: "تجارة عادلة، تحميص متوسط",
    information2: "قهوة BeanCraft العضوية تزرع في الظل في جبال الأنديز في كولومبيا. تحميص متوسط يبرز نكهات الكراميل والحمضيات. الحبوب الكاملة تحتفظ بالزيوت لفترة أطول — يُفضل طحنها قبل التحضير مباشرة. لأفضل نكهة، يُستخدم خلال ٣ أسابيع من الفتح. يُخزن في وعاء محكم بعيدًا عن الضوء. معتمدة عضويًا وصديقة للطيور.",
    rating2: "٤٫٧/٥",
    shelf_life2: "١٢ شهرًا (مغلق)، ٣ أسابيع (مفتوح)",
    price: 197.99,
    image: "/images/coffee.jpg",
    description: "Fair trade, medium roast",
    information: "BeanCraft Organic Coffee is shade-grown in Colombia’s Andes Mountains. Medium roast highlights notes of caramel and citrus. Whole beans retain oils longer—grind just before brewing. For best flavor, use within 3 weeks of opening. Store in an airtight container away from light. Certified Organic and Bird Friendly.",
    company: "BeanCraft",
    company2: "بيين كرافت",

    shelf_life: "12 months unopened, 3 weeks after opening",
    category: "groceries",
    rating: 4.7
  },
  {
    id: 71,
    name: "Honey (500g)",
    name2: "عسل (٥٠٠ جم)",
    price2: "١٠٦٫٩٩",
    description2: "خام، غير مصفّى",
    information2: "عسل SunHive الخام يُحصّل من خلايا نحل حضرية، يحافظ على الإنزيمات الطبيعية وحبوب اللقاح. التبلور أمر طبيعي — يُسخّن بلطف في ماء دافئ للسائل. يُستخدم لتهدئة التهاب الحلق أو لتحلية الشاي. غير موصى به للأطفال تحت سنة. لا يُسخّن أبداً فوق ٤٠ درجة مئوية للحفاظ على فوائده. نقي ١٠٠% بدون أي إضافات.",
    rating2: "٤٫٦/٥",
    shelf_life2: "غير محدد (يفضل خلال سنتين)",
    price: 106.99,
    image: "/images/honey.jpg",
    description: "Raw, unfiltered local honey",
    information: "SunHive Raw Honey is harvested from urban apiaries, preserving natural enzymes and pollen. Crystallization is normal—warm gently in water to liquefy. Use to soothe sore throats or sweeten teas. Not recommended for infants under 1 year. Never heat above 40°C to maintain benefits. 100% pure with no additives.",
    company: "SunHive",
    company2: "سان هيڤ",

    shelf_life: "Indefinite (best within 2 years)",
    category: "groceries",
    rating: 4.6
  },
  {
    id: 72,
    name: "Almonds (200g)",
    name2: "لوز (٢٠٠ جم)",
    price2: "١٠٥٫٩٩",
    description2: "خام، غير مملح، لوز كاليفورنيا",
    information2: "لوز NutriGrove معتمد من مشروع عدم التعديل الوراثي (Non-GMO) ومعبأ بفيتامين E والدهون الصحية. محمص جاف على درجات حرارة منخفضة للحفاظ على العناصر الغذائية. مثالي للتناول كوجبة خفيفة، الخبز، أو لصنع حليب اللوز. يُخزن في الفريزر لمنع التلف. حقيبة قابلة لإعادة الإغلاق تحافظ على الطزاجة. كوشير ونباتي.",
    rating2: "٤٫٥/٥",
    shelf_life2: "٢٤ شهرًا (مغلق)، ٦ أشهر (مفتوح)",
    price: 105.99,
    image: "/images/almonds.jpg",
    description: "Raw, unsalted California almonds",
    information: "NutriGrove Almonds are Non-GMO Project Verified and packed with vitamin E and healthy fats. Dry-roasted at low temperatures to preserve nutrients. Ideal for snacking, baking, or making almond milk. Store in the freezer to prevent rancidity. Resealable bag maintains freshness. Kosher and vegan.",
    company: "NutriGrove",
    company2: "نوتري جروڤ",

    shelf_life: "24 months unopened, 6 months after opening",
    category: "groceries",
    rating: 4.5
  },
  {
    id: 73,
    name: "Basmati Rice (1kg)",
    name2: "أرز بسمتي (١ كجم)",
    price2: "٤٤٫٤٩",
    description2: "أرز حبة طويلة فاخر",
    information2: "رويال هارفست بسمتي مُعتق لمدة 12 شهرًا ليمنح رائحة فاخرة وطول حبة متفرد. يزرع في سفوح جبال الهيمالايا، حيث تبقى كل حبة منفصلة عند الطهي. يُشطف قبل الطهي لإزالة النشا الزائد. يُخزن في وعاء محكم لمنع امتصاص الرطوبة. غير معدل وراثيًا وخالي من الغلوتين.",
    rating2: "٤٫٤/٥",
    shelf_life2: "٢٤ شهرًا",
    price: 44.49,
    image: "/images/rice.jpg",
    description: "Premium long grain rice",
    information: "RoyalHarvest Basmati is aged for 12 months for superior aroma and elongation. Grown in the Himalayan foothills, each grain remains separate when cooked. Rinse before cooking to remove excess starch. Store in an airtight container to prevent moisture absorption. Non-GMO and gluten-free.",
    company: "RoyalHarvest",
    company2: "رويال هارڤست",

    shelf_life: "24 months",
    category: "groceries",
    rating: 4.4
  },
  {
    id: 74,
    name: "Tomato Sauce (500g)",
    name2: "صلصة طماطم (٥٠٠ جم)",
    price2: "٢٢٫٩٩",
    description2: "بدون سكر مضاف، طماطم عضوية",
    information2: "صلصة فيتا توماتو مصنوعة من طماطم سان مارزانو المطهوة ببطء مع الريحان والثوم. تعبئة خالية من BPA. حمضية منخفضة (درجة الحموضة ٤٫٣) مناسبة للمعدة الحساسة. تستخدم كقاعدة بيتزا أو صلصة معكرونة. يُحفظ في الثلاجة بعد الفتح ويُستهلك خلال ٥ أيام. معتمدة من وزارة الزراعة الأمريكية عضوية وشهادة DOP إيطالية.",
    rating2: "٤٫٣/٥",
    shelf_life2: "١٨ شهرًا (مغلق)، ٥ أيام (مفتوح)",
    price: 22.99,
    image: "/images/tomatosauce.jpg",
    description: "No added sugar, organic tomatoes",
    information: "VitaTomato Sauce uses San Marzano tomatoes slow-simmered with basil and garlic. BPA-free packaging. Low acidity (pH 4.3) for sensitive stomachs. Use as a pizza base or pasta sauce. Refrigerate after opening and consume within 5 days. USDA Organic and Italian DOP certified.",
    company: "VitaTomato",
    company2: "ڤيتا توماتو",

    shelf_life: "18 months unopened, 5 days after opening",
    category: "groceries",
    rating: 4.3
  },
  {
    id: 75,
    name: "Frozen Berries (500g)",
    name2: "توت مجمد (٥٠٠ جم)",
    price2: "٦٥٫٤٩",
    description2: "مزيج توت، تجميد سريع",
    information2: "مزيج بيري فروست يشمل الفراولة والتوت الأزرق والتوت الأحمر المجمدة في ذروة نضجها للحفاظ على العناصر الغذائية. بدون إضافات من الشراب أو المحليات. يُستخدم في العصائر، الخَبز، أو يُذاب ليُضاف كزينة. الحقيبة قابلة للإغلاق لإدارة الحصص. يُحفظ في درجة حرارة -١٨°م أو أقل. منتج من الولايات المتحدة وكندا.",
    rating2: "٤٫٥/٥",
    shelf_life2: "٢٤ شهرًا (مجمّد)",
    price: 65.49,
    image: "/images/berries.jpg",
    description: "Mixed berries, flash frozen",
    information: "BerryFrost Blend includes strawberries, blueberries, and raspberries frozen at peak ripeness to lock in nutrients. No added syrups or sweeteners. Use in smoothies, baking, or thaw for toppings. Resealable bag allows portion control. Store at -18°C or below. Product of USA and Canada.",
    company: "BerryFrost",
    company2: "بيري فروست",

    shelf_life: "24 months frozen",
    category: "groceries",
    rating: 4.5
  },
  {
    id: 76,
    name: "Granola (400g)",
    name2: "جرانولا (٤٠٠ جم)",
    price2: "٦٤٫٩٩",
    description2: "خالي من الغلوتين، مُحلى بالعسل",
    information2: "جرانولا كرنش كرافت تجمع الشوفان الملفوف واللوز وبذور عباد الشمس مع لمسة من عسل محلي. تُخبز على دفعات صغيرة لضمان قرمشة متساوية. خالية من السكريات المكررة والمواد اللاصقة الصناعية. استمتع بها مع الزبادي أو كوجبة خفيفة. يُحفظ في وعاء محكم الغلق للحفاظ على القرمشة. معتمدة خالية من الغلوتين من قبل GFCO.",
    rating2: "٤٫٤/٥",
    shelf_life2: "٣ أشهر (مغلق)، شهران (مفتوح)",
    price: 64.99,
    image: "/images/granola.jpg",
    description: "Gluten-free, honey sweetened",
    information: "CrunchCraft Granola combines rolled oats, almonds, and sunflower seeds with a touch of local honey. Baked in small batches for even crispness. Free from refined sugars and artificial binders. Enjoy with yogurt or as a snack. Store in an airtight container to maintain crunch. Certified gluten-free by GFCO.",
    company: "CrunchCraft",
    company2: "كرانش كرافت",

    shelf_life: "3 months unopened, 2 months after opening",
    category: "groceries",
    rating: 4.4
  },
  {
    id: 77,
    name: "Green Tea (20 bags)",
    name2: "شاي أخضر (٢٠ كيس)",
    price2: "٤٣٫٤٩",
    description2: "غني بمضادات الأكسدة، عضوي",
    information2: "شاي ISIS الأخضر يُحضَّر من أول حصاد لأوراق الشاي من منطقة شيزوكا في اليابان. يتم تبخيره للحفاظ على مادة الكاتيشين وL-ثيانين. كل كيس يُحضِّر من ٢ إلى ٣ أكواب. يُفضل نقعه على حرارة ٨٠°م لمدة دقيقتين. يُخزن بعيدًا عن الضوء والروائح القوية لتجنب فقدان النكهة. معتمد عضويًا من USDA وJAS.",
    rating2: "٤٫٦/٥",
    shelf_life2: "١٨ شهرًا",
    price: 43.49,
    image: "/images/greentea.jpg",
    description: "Antioxidant rich, organic",
    information: "ISIS Green Tea uses first-flush leaves from Japan’s Shizuoka region. Steam-pressed to preserve catechins and L-theanine. Each bag brews 2-3 cups. Best steeped at 80°C for 2 minutes. Store away from light and strong odors to prevent flavor loss. USDA Organic and JAS certified.",
    company: "isis",
    company2: "ايزيس",

    shelf_life: "18 months",
    category: "groceries",
    rating: 4.6
  },
  {
    id: 78,
    name: "Peanut Butter (500g)",
    name2: "زبدة فول سوداني (٥٠٠ جم)",
    price2: "١١٤٫٢٩",
    description2: "١٠٠٪ فول سوداني، بدون إضافات",
    information2: "زبدة الفول السوداني ناتبيور مصنوعة من فول سوداني فالنسيا ذو الأصل الواحد، محمصة ببطء ومطحونة على حجر لتحقيق أقصى نكهة. لا تحتوي على زيوت مضافة أو سكريات أو مواد حافظة. فصل الزيت الطبيعي أمر طبيعي - يُحرك جيدًا قبل الاستخدام. غنية بالبروتين والدهون الصحية. يُحفظ في درجة حرارة الغرفة لمدة تصل إلى ٣ أشهر بعد الفتح. معتمدة عضويًا ونباتية.",
    rating2: "٤٫٧/٥",
    shelf_life2: "١٢ شهرًا (مغلق)، شهر واحد (مفتوح)",
    price: 114.29,
    image: "/images/peanutbutter.jpg",
    description: "100% peanuts, no additives",
    information: "NutPure Peanut Butter is made from single-origin Valencia peanuts, slow-roasted and stone-ground for maximum flavor. Contains no added oils, sugars, or preservatives. Natural oil separation is normal - stir before use. Rich in protein and healthy fats. Store at room temperature for up to 3 months after opening. Certified organic and vegan.",
    company: "NutPure",
    company2: "نات بيور",

    shelf_life: "12 months unopened, 1 month after opening",
    category: "groceries",
    rating: 4.7
  },
  {
    id: 79,
    name: "Pasta (500g)",
    name2: "باستا (٥٠٠ جم)",
    price2: "١٩٫٩٩",
    description2: "قمح القاسي، قطع قوالب برونزية",
    information2: "باستا فينو هي باستا حرفية تُصنع عبر قوالب برونزية تعطيها ملمسًا خشنًا يساعد على تثبيت الصلصة بشكل مثالي. مصنوعة من سميد القمح الإيطالي الصلب ١٠٠%. تُجفف ببطء في درجات حرارة منخفضة للحفاظ على العناصر الغذائية والنكهة. تُطهى إلى درجة أل دنتي في ٨-١٠ دقائق. يُحفظ في مكان بارد وجاف. معتمدة غير معدلة وراثيًا وكوشير.",
    rating2: "٤٫٣/٥",
    shelf_life2: "٢٤ شهرًا",
    price: 19.99,
    image: "/images/pasta.jpg",
    description: "Durum wheat, bronze die cut",
    information: "PastaFino artisan pasta is extruded through bronze dies for a rough texture that holds sauce perfectly. Made from 100% Italian durum wheat semolina. Slow-dried at low temperatures to preserve nutrients and flavor. Cooks al dente in 8-10 minutes. Store in a cool, dry place. Non-GMO and kosher certified.",
    company: "PastaFino",
    company2: "باستا فينو",

    shelf_life: "24 months",
    category: "groceries",
    rating: 4.3
  },
  {
    id: 80,
    name: "Mineral Water (6x1L)",
    name2: "مياه معدنية (٦ × ١ لتر)",
    price2: "٤٣٫٩٩",
    description2: "مياه نبع طبيعية",
    information2: "مياه هيبار الربيعية الطبيعية مأخوذة من طبقة مائية جوفية محمية في جبال الألب. تتم ترشيحها طبيعيًا عبر طبقات صخرية غنية بالمعادن، وتحتوي على إلكتروليتات متوازنة. معبأة من المصدر في زجاجات PET خالية من مادة BPA. يُفضل استهلاكها خلال ٦ أشهر من التعبئة. تُحفظ بعيدًا عن أشعة الشمس المباشرة. تتوافق مع معايير مياه المعادن في الاتحاد الأوروبي.",
    rating2: "٤٫٥/٥",
    shelf_life2: "٢٤ شهرًا (مغلق)",
    price: 43.99,
    image: "/images/water.jpg",
    description: "Natural spring water",
    information: "Hepar Natural Spring Water is sourced from a protected underground aquifer in the Alps. Naturally filtered through mineral-rich rock strata, containing balanced electrolytes. Bottled at source in BPA-free PET. Best consumed within 6 months of bottling. Store away from direct sunlight. Meets EU mineral water standards.",
    company: "Hepar",
    company2: "هيبار",

    shelf_life: "24 months unopened",
    category: "groceries",
    rating: 4.5
  },
  {
    id: 81,
    name: "Smart Air Conditioner",
    price: 21599.99,
    name2: "مكيف هواء ذكي",
    price2: "٢١٬٥٩٩٫٩٩",
    description2: "خصم ٢٠٪🔥. مزود بـ  واي فاي، موفر للطاقة",
    information2: "يتميز مكيف ClimateMaster Pro من فريش بتقنية العاكر لتوفير ٤٠٪ من الطاقة وتشغيل هادئ (١٩ ديسيبل). يتصل بأنظمة المنزل الذكي عبر  واي فاي للتحكم الصوتي وتحديد الموقع الجغرافي. يغطي ٣٠ مترًا مربعًا بدقة ±٠٫٥°م. يحتوي على فلتر HEPA ومُؤين لتنقية الهواء. وظيفة التنظيف التلقائي تمنع تكون العفن.",
    rating2: "٤٫٦/٥",
    warranty2: "٥ سنوات (١٠ سنوات على الضاغط)",
    image: "/images/aircon.jpg",
    description: "Discount️\u200d 20%🔥. WiFi enabled, energy efficient",
    information: "The Fresh ClimateMaster Pro features inverter technology for 40% energy savings and ultra-quiet operation (19dB). Connects to smart home systems via WiFi for voice control and geofencing. Covers 30 sqm with precise ±0.5°C temperature control. Includes HEPA filter and ionizer for air purification. Auto-cleaning function prevents mold buildup.",
    company: "Fresh",
    company2: "فريش",

    warranty: "5 years (10 years on compressor)",
    category: "home appliances",
    rating: 4.6
  },
  {
    id: 82,
    name: "Robot Vacuum Cleaner",
    price: 1949.99,
    name2: "مكنسة كهربائية",
    price2: "١٬٩٤٩٫٩٩",
    description2: "خصم ٢٠٪🔥. شحن ذاتي، تحكم بالتطبيق",
    information2: "يتميز RoboClean X9 بملاحة LIDAR لرسم الخرائط وتحديد المناطق المحظورة. شفط بقوة ٢٠٠٠ باسكال مع ترشيح HEPA يلتقط ٩٩٫٩٧٪ من الجسيمات. يعمل مع Alexa/Google Home. يعود تلقائيًا للشحن ويستأنف العمل. يتضمن وظيفة المسح مع تحكم إلكتروني بالمياه. تشغيل لمدة ١٥٠ دقيقة على الأرضيات الصلبة.",
    rating2: "٤٫٤/٥",
    warranty2: "٣ سنوات",
    image: "/images/vacuum.jpg",
    description: "Discount️\u200d 20%🔥. Self-charging, app controlled",
    information: "The RoboClean X9 features LIDAR navigation for efficient room mapping and no-go zones. Powerful 2000Pa suction with HEPA filtration captures 99.97% of particles. Works with Alexa/Google Home. Automatically returns to charge and resumes cleaning. Includes mopping function with electronic water control. 150min runtime on hard floors.",
    company: "RoboClean",
    company2: "روبو كلين",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.4
  },
  {
    id: 83,
    name: "Air Fryer",
    price: 1129.99,
    name2: "قلاية هوائية",
    price2: "١٬١٢٩٫٩٩",
    description2: "سعة ٤٫٥ لتر، تحكم رقمي",
    information2: "تستخدم AirCrisp Pro تكنولوجيا الهواء الدوار ٣٦٠° لنتائج مقرمشة باستخدام ٨٥٪ أقل من الزيت. ٧ برامج مسبقة ونطاق حراري ٤٠-٢٠٠°م. سلة غير لاصقة آمنة للغسيل الآلي. تتضمن تطبيقًا مع ٢٠٠+ وصفة. حماية من السخونة الزائدة وإيقاف تلقائي. تطهو البطاطس في ١٥ دقيقة.",
    rating2: "٤٫٧/٥",
    warranty2: "سنتان",
    image: "/images/airfryer.jpg",
    description: "4.5L capacity, digital controls",
    information: "The AirCrisp Pro uses rapid air technology with 360° circulation for crispy results using 85% less oil. Features 7 preset programs and 40-200°C temperature range. Non-stick basket is dishwasher safe. Includes recipe app with 200+ ideas. Overheat protection and auto-shutoff for safety. Cooks fries in 15 minutes.",
    company: "AirCrisp",
    company2: "اير كريسب",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.7
  },
  {
    id: 84,
    name: "Blender Pro",
    price: 999.99,
    name2: "خلاط احترافي",
    price2: "٩٩٩٫٩٩",
    description2: "١٥٠٠ واط، ٦ سرعات",
    information2: "يتميز BlendMaster Pro بنظام ٦ شفرات فولاذية تطحن الثلج خلال ثوان. تحكم بسرعات ١٠٬٠٠٠-٣٠٬٠٠٠ دورة/دقيقة. وعاء Tritan سعة ١٫٨ لتر خالٍ من BPA. وظيفة النبض للقوام المثالي. يتضمن مكبسًا للخليط الكثيف. ضمان المحرك ٣ سنوات. معتمد للاستخدام التجاري.",
    rating2: "٤٫٥/٥",
    warranty2: "٣ سنوات (المحرك)، سنة واحدة (القطع)",
    image: "/images/blender.jpg",
    description: "1500W, 6-speed settings",
    information: "The BlendMaster Pro features a stainless steel 6-blade system that crushes ice in seconds. Variable speed control from 10,000-30,000 RPM. BPA-free 1.8L Tritan jar with ergonomic handle. Pulse function for perfect texture. Includes tamper for thick mixtures. 3-year motor warranty. NSF certified for commercial use.",
    company: "BlendMaster",
    company2: "بليند ماستر",

    warranty: "3 years (motor), 1 year (parts)",
    category: "home appliances",
    rating: 4.5
  },
  {
    id: 85,
    name: "Microwave Oven",
    price: 1649.99,
    name2: "فرن ميكروويف",
    price2: "١٬٦٤٩٫٩٩",
    description2: "٢٥ لتر، ١٠ مستويات طاقة",
    information2: "يجمع WaveChef بين وظائف الميكروويف والحمل والشوي. يحتوي على طبخ بالاستشعار لـ٣٠+ طعام وتقنية العاكر للتسخين المتجانس. داخلية من الفولاذ المقاوم مع طلاء سيراميكي سهل التنظيف. قفل أطفال ووضع توفير الطاقة. يتضمن وظيفة التنظيف بالبخار وطاولة دوارة.",
    rating2: "٤٫٤/٥",
    warranty2: "سنتان",
    image: "/images/microwave.jpg",
    description: "25L, 10 power levels",
    information: "The WaveChef Smart Oven combines microwave, convection, and grill functions. Features sensor cooking for 30+ foods and inverter technology for even heating. Stainless steel interior with ceramic enamel coating for easy cleaning. Child lock and eco mode. Includes steam cleaning function and rotating glass turntable.",
    company: "WaveChef",
    company2: "ويڤ شيف",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.4
  },
  {
    id: 86,
    name: "Coffee Maker",
    price: 1179.99,
    name2: "صانعة القهوة",
    price2: "١٬١٧٩٫٩٩",
    description2: "برمجة لـ١٢ فنجانًا",
    information2: "تتميز آلة BrewMaster Elite بجهاز ترمس من الفولاذ المقاوم للصدأ يحافظ على حرارة القهوة لمدة ٤ ساعات. توفر تحضيرًا دقيقًا مع ٥ إعدادات درجة حرارة  (٨٨-٩٦° مئوية) وفترة توقف للتفتح لتحقيق استخلاص مثالي. ساعة قابلة للبرمجة لمدة ٢٤ ساعة مع بدء تلقائي. تحتوي على خزان ماء قابل للإزالة وسلة تحضير سهلة التنظيف. تشمل فلتر دائم بلون ذهبي.",
    rating2: "٤٫٦/٥",
    warranty2: "٣ سنوات",
    image: "/images/coffeemaker.jpg",
    description: "12-cup programmable",
    information: "The BrewMaster Elite features thermal stainless steel carafe that keeps coffee hot for 4 hours. Precision brewing with 5 temperature settings (88-96°C) and bloom pause for optimal extraction. 24-hour programmable clock with auto-start. Removable water reservoir and brew basket for easy cleaning. Includes permanent gold-tone filter.",
    company: "BrewMaster",
    company2: "بِرو ماستر",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.6
  },
  {
    id: 87,
    name: "Food Processor",
    price: 999.99,
    name2: "محضر طعام",
    price2: "٩٩٩٫٩٩",
    description2: "سعة ٨ أكواب، ملحقات متعددة",
    information2: "تحتوي PrepPro XL على ١٠ ملحقات تشمل شفرة العجين، وأقراص تقطيع وتقطيع عكسية، وعصارة حمضيات، وشفرة خفق. محرك بقوة ١٠٠٠ واط يتعامل مع المهام الصعبة مثل عجن عجين الخبز. تحكم بنبضات لضبط التقطيع بدقة. أوعية خالية من مادة BPA مع علامات قياس. قفل أمان يمنع التشغيل عند التجميع غير الصحيح.",
    rating2: "٤٫٥/٥",
    warranty2: "٣ سنوات",
    image: "/images/foodprocessor.jpg",
    description: "8-cup capacity, multiple attachments",
    information: "The PrepPro XL includes 10 attachments: dough blade, reversible shredding/slicing discs, citrus press, and emulsifying blade. 1000W motor handles tough jobs like kneading bread dough. Pulse control for precise chopping. BPA-free bowls with measurement markings. Safety interlock prevents operation when improperly assembled.",
    company: "PrepPro",
    company2: "بريب برو",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.5
  },
  {
    id: 88,
    name: "Electric Kettle",
    price: 649.99,
    name2: "غلاية كهربائية",
    price2: "٦٤٩٫٩٩",
    description2: "سعة ١٫٧ لتر، حماية من الغليان الجاف",
    information2: "يتميز QuickBoil Pro بتحكم بدرجة حرارة متغير (٤٠-١٠٠ درجة مئوية) بدرجات ١ درجة مئوية. قوة تسخين ٣٠٠٠ واط تغلي الماء خلال ٤٥ ثانية. داخل من الفولاذ المقاوم للصدأ مع عنصر تسخين مخفي. إيقاف تلقائي وحماية من الغليان الجاف. وظيفة إبقاء الحرارة لمدة ٣٠ دقيقة. تصميم بدون سلك مع قاعدة دوارة ٣٦٠°.",
    rating2: "٤٫٤/٥",
    warranty2: "سنتان",
    image: "/images/kettle.jpg",
    description: "1.7L, boil-dry protection",
    information: "The QuickBoil Pro features variable temperature control (40-100°C) for different teas, with 1°C increments. 3000W rapid heating brings water to boil in 45 seconds. Stainless steel interior with concealed heating element. Automatic shutoff and boil-dry protection. Keep-warm function maintains temperature for 30 minutes. Cordless design with 360° base.",
    company: "QuickBoil",
    company2: "كويك بويل",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.4
  },
  {
    id: 89,
    name: "Toaster Oven",
    price: 989.99,
    name2: "فرن تحميص",
    price2: "٩٨٩٫٩٩",
    description2: "سعة ٦ شرائح، حمل حراري",
    information2: "يجمع فرن ToastPro Convection بين ٧ وظائف طهي (خبز، شوي، تحميص، وغيرها) مع تقنية True Convection لتوزيع الحرارة بالتساوي. يحتوي على مؤقت لمدة ٦٠ دقيقة مع إيقاف تلقائي وضوء داخلي للفرن. داخل غير لاصق مع صينية فتات لتسهيل التنظيف. يتسع لبيتزا بحجم ١٢ بوصة أو ٦ شرائح توست. يشمل صينية خبز ورف للشوي.",
    rating2: "٤٫٣/٥",
    warranty2: "سنتان",
    image: "/images/toasteroven.jpg",
    description: "6-slice capacity, convection",
    information: "The ToastPro Convection Oven combines 7 cooking functions (bake, broil, toast, etc.) with True Convection technology for even heating. Features a 60-minute timer with auto-shutoff and interior oven light. Non-stick interior with crumb tray for easy cleaning. Fits a 12\" pizza or 6 slices of toast. Includes baking pan and broiling rack.",
    company: "ToastPro",
    company2: "توست برو",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.3
  },
  {
    id: 90,
    name: "Stand Mixer",
    price: 1299.99,
    name2: "خلاط ستاند",
    price2: "١٬٢٩٩٫٩٩",
    description2: "وعاء ٥٫٥ لتر، ١٠ سرعات",
    information2: "يتميز جهاز MixMaster Elite بمحرك تيار مستمر بقوة ١٠٠٠ واط قادر على معالجة العجائن الثقيلة دون ارتفاع في درجة الحرارة. حركة الخلط الكوكبية تضمن دمج المكونات بالكامل. يشمل وعاء من الفولاذ المقاوم للصدأ، مضرب مسطح، خطاف للعجين، ومضرب سلكي. تصميم رأس قابل للإمالة مع آلية قفل. منفذ إضافات لوصل أدوات مثل صانعات المعكرونة أو مطاحن اللحم.",
    rating2: "٤٫٨/٥",
    warranty2: "٤ سنوات (المحرك)، سنة واحدة (القطع)",
    image: "/images/mixer.jpg",
    description: "5.5qt bowl, 10 speeds",
    information: "The MixMaster Elite features a 1000W DC motor that handles thick doughs without overheating. Planetary mixing action ensures complete ingredient incorporation. Includes stainless steel bowl, flat beater, dough hook, and wire whip. Tilt-head design with locking mechanism. Accessory port for attachments like pasta makers or meat grinders.",
    company: "MixMaster",
    company2: "ميكس ماستر",

    warranty: "4 years (motor), 1 year (parts)",
    category: "home appliances",
    rating: 4.8
  },
  {
    id: 91,
    name: "Slow Cooker",
    price: 699.99,
    name2: "طباخ بطيء",
    price2: "٦٩٩٫٩٩",
    description2: "سعة ٦ لترات، مؤقت برمجي",
    information2: "يقدم طباخ SimmerPro البطيء ٣ أوضاع للطهي (منخفض/مرتفع/دافئ) مع مؤقت رقمي للعد التنازلي (حتى ٢٠ ساعة). وعاء من الفخار آمن للاستخدام في الفرن حتى ٢٠٠ درجة مئوية وقابل للغسل في غسالة الصحون. غطاء قابل للقفل لمنع الانسكاب أثناء النقل. تقنية EvenHeat تمنع تكون البقع الساخنة. يشمل كتاب وصفات يحتوي على ٥٠ وجبة طهي بطيء.",
    rating2: "٤٫٥/٥",
    warranty2: "٣ سنوات",
    image: "/images/slowcooker.jpg",
    description: "6-quart, programmable timer",
    information: "The SimmerPro Slow Cooker offers 3 cooking modes (Low/High/Warm) with digital countdown timer (up to 20 hours). Stoneware pot is oven-safe up to 200°C and dishwasher safe. Locking lid prevents spills during transport. EvenHeat technology prevents hot spots. Includes recipe book with 50 slow-cooker meals.",
    company: "SimmerPro",
    company2: "سيمر برو",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.5
  },
  {
    id: 92,
    name: "Rice Cooker",
    price: 559.99,
    name2: "طنجرة أرز",
    price2: "٥٥٩٫٩٩",
    description2: "منطق ضبابي، سعة ١٠ أكواب",
    information2: "يستخدم طباخ RicePerfect تقنية الذكاء الاصطناعي مع منطق ضبابي لضبط وقت ودرجة حرارة الطهي للحصول على أرز مثالي في كل مرة. يحتوي على ١١ قائمة مسبقة للأرز الأبيض/البني/السوشي، العصيدة، وحتى الكيك. وعاء داخلي غير لاصق مع قاع يمتص الحرارة. مؤقت تأخير حتى ٢٤ ساعة. وظيفة الحفاظ على الحرارة تلقائيًا حتى ١٢ ساعة بدون جفاف.",
    rating2: "٤٫٤/٥",
    warranty2: "٣ سنوات",
    image: "/images/ricecooker.jpg",
    description: "Fuzzy logic, 10-cup capacity",
    information: "The RicePerfect Cooker uses AI-powered fuzzy logic to adjust cooking time and temperature for perfect rice every time. 11 preset menus for white/brown/sushi rice, porridge, and even cake. Non-stick inner pot with heat-absorbing bottom. Delay timer up to 24 hours. Automatic keep-warm for up to 12 hours without drying out.",
    company: "RicePerfect",
    company2: "رايس بيرفيكت",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.4
  },
  {
    id: 93,
    name: "Hand Mixer",
    price: 439.99,
    name2: "خفاق يدوي",
    price2: "٤٣٩٫٩٩",
    description2: "٥ سرعات، ملحقات متضمنة",
    information2: "يتميز الخلاط اليدوي QuickMix بقوة ٢٥٠ واط مع وظيفة Turbo Boost للمكونات الصعبة. يشمل خطافات للعجين، مضارب وخفاقة. مقبض ناعم مريح مع تحكم بسرعة بأطراف الأصابع. تخزين السلك في القاعدة. زر تحرير سهل لتغيير المرفقات بسرعة. وزن خفيف يبلغ ١.٢ كجم فقط.",
    rating2: "٤٫٣/٥",
    warranty2: "سنتان",
    image: "/images/handmixer.jpg",
    description: "5-speed, includes attachments",
    information: "The QuickMix Hand Mixer features 250W power with Turbo Boost function for tough ingredients. Includes dough hooks, beaters, and whisk attachments. Ergonomic soft-grip handle with finger-tip speed control. Cord storage in base. Easy-release button for quick attachment changes. Lightweight at just 1.2kg.",
    company: "QuickMix",
    company2: "كويك ميكس",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.3
  },
  {
    id: 94,
    name: "Electric Grill",
    price: 729.99,
    name2: "شواية كهربائية",
    price2: "٧٢٩٫٩٩",
    description2: "شواء داخلي بدون دخان",
    information2: "يستخدم GrillMaster Indoor تسخين بالأشعة تحت الحمراء وتصميم بدون تقطير لتشغيل بدون دخان. درجة حرارة قابلة للتعديل حتى ٢٣٠ درجة مئوية. طاقة ٢٠٠٠ واط لشواء الستيك بعلامات شواء مثالية. الألواح غير اللاصقة قابلة للإزالة وآمنة للغسل في غسالة الصحون. يشمل صينية شحوم ومعلقة. ميل قابل للتعديل ١٥° لتصريف الدهون.",
    rating2: "٤٫٥/٥",
    warranty2: "سنتان",
    image: "/images/grill.jpg",
    description: "Indoor smokeless grilling",
    information: "The GrillMaster Indoor uses infrared heating and a drip-free design for smokeless operation. Adjustable temperature up to 230°C. 2000W power sears steaks with perfect grill marks. Removable non-stick plates are dishwasher safe. Includes grease tray and spatula. 15° adjustable tilt for draining fats.",
    company: "GrillMaster",
    company2: "جريل ماستر",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.5
  },
  {
    id: 95,
    name: "Juicer",
    price: 689.99,
    name2: "عصارة",
    price2: "٦٨٩٫٩٩",
    description2: "عصر بارد، تنظيف سهل",
    information2: "يعمل Juicemax Cold Press بسرعة ٦٠ دورة في الدقيقة لتقليل الحرارة والأكسدة، مما يحافظ على العناصر الغذائية. محرك بقوة ١٥٠ واط يتعامل مع الخضروات الصلبة مثل الجزر والشمندر. يشمل حاوية عصير بسعة ١ لتر وحاوية لب الفاكهة. جميع الأجزاء القابلة للإزالة آمنة للغسل في غسالة الصحون. ينتج حتى ٣٠٪ عصير أكثر من النماذج الطردية.",
    rating2: "٤٫٤/٥",
    warranty2: "سنتان",
    image: "/images/juicer.jpg",
    description: "Cold press, easy clean",
    information: "The Juicemax Cold Press operates at 60 RPM to minimize heat and oxidation, preserving nutrients. 150W motor handles hard vegetables like carrots and beets. Includes 1L juice container and pulp container. All removable parts are dishwasher safe. Produces up to 30% more juice than centrifugal models.",
    company: "Juicemax",
    company2: "جوس ماكس",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.4
  },
  {
    id: 96,
    name: "Dehumidifier",
    price: 1499.99,
    name2: "مجفف هواء",
    price2: "١٬٤٩٩٫٩٩",
    description2: "٢٠ لتر/يوم، إيقاف تلقائي",
    information2: "يزيل جهاز DryAir Pro حتى ٢٠ لتر من الرطوبة يوميًا مع تحكم ذكي في الرطوبة (٣٠-٨٠٪ RH). يحتوي على خزان مياه بسعة ٥ لتر مع تنبيه امتلاء الخزان وخيار تصريف مستمر. المرشح الأولي قابل للغسل لالتقاط الجسيمات الكبيرة. يعمل بهدوء عند ٣٨ ديسيبل. معتمد من Energy Star ويستهلك طاقة أقل بنسبة ٣٠٪ مقارنة بالنماذج القياسية.",
    rating2: "٤٫٦/٥",
    warranty2: "٥ سنوات (الضاغط)، سنة واحدة (القطع)",
    image: "/images/dehumidifier.jpg",
    description: "20L/day, auto shut-off",
    information: "The DryAir Pro removes up to 20L of moisture daily with intelligent humidity control (30-80% RH). Features a 5L water tank with full-tank alert and continuous drainage option. Washable pre-filter captures large particles. Operates quietly at 38dB. Energy Star certified with 30% less power consumption than standard models.",
    company: "DryAir",
    company2: "دراي اير",

    warranty: "5 years (compressor), 1 year (parts)",
    category: "home appliances",
    rating: 4.6
  },
  {
    id: 97,
    name: "Air Purifier",
    price: 1649.99,
    name2: "منقي هواء",
    price2: "١٬٦٤٩٫٩٩",
    description2: "فلتر HEPA، مستشعر ذكي",
    information2: "تتميز منظفة الهواء PureBreeze Smart بتقنية ترشيح رباعية المراحل: مرشح أولي، True HEPA، الكربون النشط، وضوء UV-C. تغطي مساحة ٥٠ متر مربع مع معدل تبادل هواء ٤٠٠ م³/س. شاشة عرض جودة الهواء في الوقت الحقيقي مع وضع تلقائي. تعمل مع Alexa للتحكم الصوتي. مؤشر عمر الفلتر. وضع الليل يعمل عند مستوى ضوضاء ٢٢ ديسيبل فقط.",
    rating2: "٤٫٥/٥",
    warranty2: "٣ سنوات",
    image: "/images/airpurifier.jpg",
    description: "HEPA filter, smart sensor",
    information: "The PureBreeze Smart Purifier features 4-stage filtration: pre-filter, True HEPA, activated carbon, and UV-C light. Covers 50 sqm rooms with CADR of 400 m³/h. Real-time air quality display with auto mode. Works with Alexa for voice control. Filter life indicator. Night mode operates at just 22dB.",
    company: "PureBreeze",
    company2: "بيور بريز",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.5
  },
  {
    id: 98,
    name: "Steam Iron",
    price: 659.99,
    name2: "مكواة بخار",
    price2: "٦٥٩٫٩٩",
    description2: "١٨٠٠ واط، بخار عمودي",
    information2: "تقدم مكواة البخار PressPro قوة ١٨٠٠ واط مع بخار مستمر بمعدل ٥٠ جرام/دقيقة وتعزيز بخار ٢٠٠ جرام. قاعدة سيراميكية تنزلق بسلاسة على الأقمشة. وظيفة التنظيف الذاتي تمنع تراكم المعادن. تشمل نظام مضاد للتنقيط وإيقاف تلقائي (٣٠ ثانية أفقيًا / ٨ دقائق رأسيًا). خزان الماء سهل التعبئة وقابل للفصل.", rating2: "٤٫٣/٥",
    warranty2: "سنتان",
    image: "/images/iron.jpg",
    description: "1800W, vertical steam",
    information: "The PressPro Steam Iron delivers 1800W power with 50g/min continuous steam and 200g steam boost. Ceramic soleplate glides smoothly over fabrics. Self-cleaning function prevents mineral buildup. Includes anti-drip system and auto shut-off (30 sec horizontal/8 min vertical). Water tank is easy to fill and detachable.",
    company: "PressPro",
    company2: "بريس برو",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.3
  },
  {
    id: 99,
    name: "Electric Blanket",
    price: 779.99,
    name2: "بطانية كهربائية",
    price2: "٧٧٩٫٩٩",
    description2: "مقاس كوين، ١٠ مستويات حرارة",
    information2: "تتميز بطانية CozyNight بتحكم في درجة الحرارة مزدوج المنطقة (يمكن ضبط كل جانب بشكل مستقل). قماش ميكروبلاش فائق النعومة مع ١٠ مستويات تسخين. إيقاف تلقائي بعد ١٠ ساعات. قابلة للغسل في الغسالة (يتم إزالة وحدة التحكم). تستخدم تقنية منخفضة الفولتية تقلل من الإشعاع الكهرومغناطيسي. تشمل سلك طاقة بطول ٢ متر مع جيب للتخزين.",
    rating2: "٤٫٤/٥",
    warranty2: "٣ سنوات",
    image: "/images/blanket.jpg",
    description: "Queen size, 10 heat settings",
    information: "The CozyNight Blanket features dual-zone temperature control (each side adjustable independently). Ultra-soft microplush fabric with 10 heating levels. Auto shut-off after 10 hours. Machine washable (controller removed). Low-voltage technology is EMF-reduced. Includes 2m power cord with storage pocket.",
    company: "CozyNight",
    company2: "كوزي نايت",

    warranty: "3 years",
    category: "home appliances",
    rating: 4.4
  },
  {
    id: 100,
    name: "Humidifier",
    price: 369.99,
    name2: "مرطب هواء",
    price2: "٣٦٩٫٩٩",
    description2: "موجات فوق صوتية، خزان ٤ لتر",
    information2: "يستخدم مرطب MistCare تقنية الموجات فوق الصوتية لإصدار رذاذ ناعم وبارد دون غبار أبيض. يغطي مساحة تصل إلى ٣٠ متر مربع لمدة ٢٤ ساعة بملء واحد. إخراج الرذاذ قابل للتعديل مع فوهة دوارة ٣٦٠°. ضوء ليلي مع خيار التشغيل/الإيقاف. إيقاف تلقائي عند النفاد. تشغيل هادئ جداً عند ٢٨ ديسيبل. يشمل صينية لزيوت العطر للعلاج بالروائح.", rating2: "٤٫٥/٥",
    warranty2: "سنتان",
    image: "/images/humidifier.jpg",
    description: "Ultrasonic, 4L tank",
    information: "The MistCare Humidifier uses ultrasonic technology to create a fine, cool mist without white dust. Covers up to 30 sqm for 24 hours on one fill. Adjustable mist output with 360° nozzle. Night light with on/off option. Auto shut-off when empty. Whisper-quiet operation at 28dB. Includes essential oil tray for aromatherapy.",
    company: "MistCare",
    company2: "ميست كير",

    warranty: "2 years",
    category: "home appliances",
    rating: 4.5
  }
]
export default products;

