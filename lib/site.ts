/**
 * Content for the inner pages, taken from the live site (biznovators.in)
 * on 2026-11-02. BEQ (/SignIn.aspx) is intentionally NOT ported — to be added later.
 */

export const ASSET_ROOT =
  process.env.NEXT_PUBLIC_ASSET_ROOT ?? "https://www.biznovators.in";
export const assetUrl = (p: string) => `${ASSET_ROOT}/${p}`;

export const navItems = [
  { slug: "", en: "Home", mr: "मुख्यपृष्ठ" },
  { slug: "about", en: "About", mr: "आमच्याबद्दल" },
  { slug: "services", en: "Services", mr: "सेवा" },
  { slug: "media", en: "Media", mr: "मीडिया" },
  { slug: "testimonials", en: "Testimonials", mr: "अभिप्राय" },
  { slug: "blog", en: "Blog & Announcement", mr: "ब्लॉग" },
  { slug: "presentation", en: "Presentation", mr: "सादरीकरण" },
  { slug: "contact", en: "Contact Us", mr: "संपर्क" },
] as const;

// ---------------------------------------------------------------- ABOUT
export const about = {
  history: {
    title: "History",
    text: "The business Journey began in January 1990 as S. H.Chem.Tech., under whose aegis a number of Chemical Turnkey projects were handled successfully. S. H.Chem.Tech., is successfully active even today. Along with Chemical project Consulting, there soon developed a torrent of Business Consultancy requirements. Hence, it naturally evolved as a concern offering a wide umbrella of services in the Business Consultancy segment. Then known around 1991 we began working in the profession of Market Research and Survey segment. Since then we have carried out research studies for a wide range of well respected and world-renowned clients from every sphere of the business world, from agriculture, Pharmaceuticals to IT.",
  },
  specialities: {
    title: "Specialities",
    text: "Acclaimed research Expert in Market Research Studies & Surveys, Growth Potential Analysis, New Market Development And Growth Consulting. Start-up consultant for Entrepreneurial Development And Expansions. Vast experience in Chemical and allied Project Consulting and chemical product development.",
  },
  founder: {
    title: "About Our Founder",
    name: "Harshavardhan Ranade",
    tagline: "Harsh is a Tremendously Successful Entrepreneur Himself.",
    photo: "images/director.jpg",
    paras: [
      "Harshavardhan (Harsh) Ranade is the Founder of Biznovators and Udyogshalam उद्योगशालाम्, and founder Partner of S.H. Chem. Tech., a chemical project consulting company. He has also created a marketing platform for Art-entrepreneurs called de’ la’ artestra. Harsh is also one of the founders of Biznovators Entrepreneurship Development Foundation, a Sec.8 not for Profit Entrepreneurship Development Company created to develop and promote general, non-engineering, socio-commercial, agro-based & specific entrepreneurship.",
      "He is also a past founder director of Gaea Consulting Solutions Pvt. Ltd.",
      "Harsh, as a super-entrepreneur mentor, as some patrons call him, has been motivating people to start their own business and he mentors them till they reach the top. Being a true entrepreneur at heart he believes that every person should have something, which one can call it; as their own! Harsh has trained over 22000+ budding entrepreneurs and has mentored and helped countless number of entrepreneurs to establish their business ventures.",
      "Harsh has an active 32 years of experience and has accomplished more than 5000+ of product based Market Research studies and several Techno-Commercial studies. Harsh also has rich experience in Chemical and allied Project Consulting. He was also the chairperson of mentor’s chapter of Bharatiya Yuva Shakti Trust’s (BYST) Shivajinagar, Pune chapter, through this trust he mentored many entrepreneurs and their mentors from 1996-97 to 2012.",
      "He is a known expert mentor and motivational speaker in the field of Entrepreneurial Development & start-ups Management along with Marketing and mindset change programs.",
      "On these subjects, Harsh has rendered various lectures and speeches as a professional subject-expert at various esteemed organizations like World Trade Center, Mumbai; Fruit and Vegetable processing cluster of World bank at Pune and other Special clusters like that garment cluster of Bhoom and Spices cluster of Peth in rural Maharashtra; MCCIA, Pune; Sakal International Learning Center, Agro won, IT Expo and many leading organizations, management and educational institutes.",
      "Harsh’s brainchild Biznovators motivates and mentors budding and established entrepreneurs to reach to the apex through its’ research & consulting modules.",
      "Harsh’s self-designed patented 1000 days mentoring concept Udyogshalam उद्योगशालाम्, trains potential entrepreneurs for achieving commercial success in their 1st generation startups and also in their 2nd, 3rd generation entrepreneurial crusade in family run businesses. This module is based on principle of “how to share and support, handhold and grow without bypassing the origin”!!",
    ],
  },
  marathi: {
    title: "हर्षवर्धन चंद्रकांत रानडे यांच्या बद्दल माहिती",
    bullets: [
      "१९७५ चे बाल शिक्षण मंदिर शाळेचे माजी विद्यार्थी, हर्षवर्धन (हर्ष) रानडे आज एक यशस्वी उद्योजक आणि ख्यातनाम उद्योजक मार्गदर्शक आहेत. गेली ३० वर्षे ते बाजारपेठ विश्लेषक, उद्योजकता मार्गदर्शक आणि रासायनिक प्रकल्प सल्लागार हा व्यवसाय करतात.",
      "हर्षवर्धन स्वतः रासायनिक अभियंता असून त्यांनी उद्योजकतेमधील विशेष प्रशिक्षण घेतले असून ते आंतरराष्ट्रीय स्तरावर City and guilds, UK यांनी मानांकित केलेले अधिकृत उद्योजक मार्गदर्शक - Accredited Mentor - आहेत.",
      "हर्ष; उद्योजकता, विपणन, विकास प्रेरणा आणि कृतीशिल वैचारीक जडणघडण म्हणजे माइंडसेट चेंज या विषयातील सुप्रसिद्ध वक्ते आहेत.",
      "तसेच हर्षवर्धन रानडे हे बाजारपेठ संशोधन आणि विकास (मार्केट रिसर्च) - या संबंधीत; प्रशंसित संशोधन तज्ञ आणि सर्वेक्षण, वृद्धी संभाव्य विश्लेषण, नवीन बाजार विकास आणि ग्रोथ कन्सल्टिंग तसेच स्टार्ट-अप्स, उद्योजकीय विकास आणि विस्तारासाठी विषय-तज्ञ म्हणून प्रसिद्ध आहेत.",
      "हर्षवर्धन स्वतः रासायनिक अभियंता असून बिझनोव्हेटर्स आणि उद्योगशालाम् या उद्योग आणि उद्योजकता मार्गदर्शक क्षेत्रात उल्लेखनीय कामगिरी करणाऱ्या संस्थांचे संस्थापक आहेत. तसेच एस.एच. केम टेक. चे संस्थापक भागीदार आहेत. ही संस्था गेली ३० वर्षे रासायनिक उत्पादने व संबंधित प्रकल्प सल्लागार आणि बिगर-अभियांत्रिकी मार्केट रिसर्च सेंटर म्हणून काम करीत आहे.",
      "हर्षवर्धन रानडे यांनी कला-उद्योजकांसाठी एक विपणन (मार्केटिंग) प्लॅटफॉर्म विकसित केला आहे ज्याला \"डे ’ला’ आर्टेस्ट्रा\" असे म्हणतात.",
      "तसेच हर्ष, बिझनोव्हेटर्स उद्योजकता विकास फाउंडेशनचे आणि, एस. एच. कन्सल्टंटस् याही कंपन्यांचे संस्थापक आहेत.",
      "हर्षवर्धन रानडे: सुपर-उद्योजक मार्गदर्शक म्हणून ओळखले जातात. लोकांना त्यांचा स्वतःचा व्यवसाय सुरू करण्यास प्रोत्साहन देण्यासाठी त्यांनी उल्लेखनीय कार्य केले आहे. या उद्योजकांना शीर्षस्थानी पोहोचण्यापर्यंत हर्षवर्धन त्यांना मार्गदर्शन करतात. अनेक यशस्वी उद्योजक आणि उद्योग घडवण्याचा त्यांचा दांडगा अनुभव आहे.",
      "ते खरा हाडाचा उद्योजक असल्याने 'प्रत्येक व्यक्तीचे स्वतःचे म्हणता येईल काहीतरी असावे किंवा यशस्वी असा स्वतः चा उद्योग असावा आणि त्यासाठी आपण त्यांना मदत करावी' असे हर्षवर्धन रानडे यांचे ध्येयवादी स्वप्न आहे!",
      "हेच तत्व आत्मसात करून घेत हर्षने आत्तापर्यंत 22000 वर संभाव्य उद्योजकांना प्रशिक्षण आणि मार्गदर्शन केले आहे, या व्यतिरिक्त आपल्या सक्रिय 31 वर्षांच्या अनुभवात हर्षने 5000+ उत्पादन आधारित बाजार संशोधन अभ्यास आणि तंत्रज्ञान-व्यावसायिक प्रकल्प-अभ्यासप्रबंध (प्रोजेक्ट रिपोर्ट) स्वतः कार्यांवित केले (अभ्यासले) आहेत.",
    ],
    skillsTitle: "हर्षची कौशल्ये",
    skills: [
      "संशोधन तज्ज्ञ.",
      "टेक्नो-कमर्शियल अभ्यास तज्ञ.",
      "केमिकल प्रोजेक्ट सल्लागार.",
      "मार्गदर्शक आणि प्रेरक वक्ता म्हणून.",
      "हर्ष एक जाणकार तज्ञ सल्लागार आणि निष्णात प्रेरक वक्ते आहेत.",
      "उद्योजकीय विकास, स्टार्ट अप्स मॅनेजमेंट, विपणन आणि व्यवसाय वृध्दी तसेच उद्योग - उद्यमशीलता आणि मानसिकता बदल इत्यादी उद्योग वृध्दी संबंधित विषयांवर हर्षच्या विविध कार्यशाळा, व्याख्याने व संबोधने (भाषणे) प्रसिध्द आहेत.",
      "ते भारतीय युवा शक्ती ट्रस्टचे शिवाजीनगर, पुणे मेंटर्स चॅप्टरचे चेअरपर्सनही होते. ही संस्था उद्योजकांना विनातारण भांडवल ऊपलब्ध करून देते.",
    ],
    notableTitle: "हर्ष यांचे काही उल्लेखनीय कार्य",
    notable: [
      "जागतिक व्यापार केंद्र, (WTC) मुंबई यांच्यासाठी संशोधन;",
      "जागतिक बँकेने विकसित केलेले फळ आणि भाजीपाला प्रक्रिया क्लस्टर पुणे येथील आणि महाराष्ट्रातील क्लस्टरसारख्या इतर विशेष उद्योग समूह तसेच ग्रामीण महाराष्ट्रातील भूम च्या कपड्यांच्या आणि पेठ वडगावच्या मसाल्यांच्या क्लस्टर उद्योजिकांना मार्गदर्शन softskill development; एमसीसीआयए -MCCIA-, पुणे; सकाळ आंतरराष्ट्रीय शिक्षण केंद्र, अ‍ॅग्रो वन, आय.टी. एक्सपो आणि बर्‍याच आघाडीच्या व्यवस्थापन, शैक्षणिक संस्था; यासारख्या विविध सन्माननीय संस्थांमधील एक व्यावसायिक विषय-तज्ञ आणि वक्ते म्हणून हर्ष प्रसिद्ध आहेत.",
      "याप्रकारच्या विविध संस्थांमधे त्यांनी विविध कार्यक्रमातून शेकडो व्याख्याने व भाषणे दिली आहेत.",
    ],
    venturesTitle: "हर्षवर्धन रानडे यांची आस्थापने",
    ventures: [
      {
        name: "बिझनोव्हेटर्स",
        text: "हर्षची ब्रेनचाइल्ड, बिझनोव्हेटर्स; होतकरू नवउद्योजकांना प्रोत्साहन देते आणि मार्गदर्शन, सल्लामसलत आणि ‘संबोधन आणि संशोधनातून’ यशस्वीपणे उद्योगाचे शिखर गाठावे यासाठी मदत करते.",
      },
      {
        name: "उद्योगशालाम्",
        text: "हर्षची स्वत:ची डिझाइन केलेली 1000 दिवसांच्या उद्योगमार्गदर्शनाची संकल्पना! उद्योगात व्यावसायिक यश मिळविण्यासाठी संभाव्य उद्योजकांना प्रशिक्षण दिले जाते. त्यांच्या पहिल्या पिढीच्या स्टार्टअपमध्ये तसेच दुसऱ्या किंवा तिसर्‍या पिढीमधील कौटुंबिक पातळीवर अस्तित्वात असलेल्या व्यवसायात उद्योजकीय गुणधर्म विकसित करण्यावर हे मॉड्यूल आधारित आहे.",
      },
      {
        name: "बीई आणि आय क्यू",
        text: "हर्षने बीई अँड आयक्यू हे तंत्र देखील विकसित केले आहे जे एक चाचणी आहे — एखाद्याच्या उद्योजकीय आणि इंट्राप्रेनीयूरियल क्षमतेवर अवलंबून असलेल्या आजूबाजूच्या परिस्थितीच्या वैयक्तिक अनुभव समृद्ध विश्लेषणावर आधारित ही परीक्षा एखाद्याची उद्योजकीय निर्णय घेण्याची क्षमता समजून घेण्यासाठी वापरली जाते. उद्योजकाची ही पूर्णपणे सूचक चाचणी आहे आणि निर्णय क्षमता कल करण्यासाठी उपयुक्त ठरेल अशी ही चाचणी आहे.",
      },
      { name: "एस.एच. केम टेक", text: "" },
      { name: "डे ’ला’ आर्टेस्ट्रा", text: "" },
      {
        name: "बिझनोव्हेटर्स उद्योजकता विकास फाउंडेशन आणि एस. एच. कन्सल्टंटस्, पुणे.",
        text: "",
      },
    ],
  },
  gallery: [
    "images/whatsapp_image_20211102_at_10.09.22_am_2.jpg",
    "images/whatsapp_image_20211102_at_10.11.07_am.jpg",
    "images/whatsapp_image_20211102_at_10.23.25_amb.jpg",
    "images/whatsapp_image_20211102_at_10.09.18_am_1.jpg",
  ],
  training: {
    title: "Our training modules focus on following main segments",
    modules: [
      {
        h: "1. Entrepreneurship: “Bringing growth by Following the 25 Golden Rules of Entrepreneurship”",
        p: [
          "Harsh Ranade has formulated 25 rules for entrepreneurs, which guides entrepreneurs & business corporate and makes them understand where they go wrong and what’s to be avoided so that can achieve what they want. These 25 golden rules guarantee success for people who religiously follow them and achieve excellent growth in their personal life and business ventures. This module focuses greatly on entrepreneurs and intrapreneurs and is useful in building your own self innovatively and creatively to achieve the goals by creating a strong vision. The result orientation of the previous seminars on this subject was highly appreciated and indeed useful to ones who attended it; in achieving their growth vision…..",
        ],
      },
      {
        h: "2. Market yourself for growth: “The only way to success”",
        p: [
          "A comprehensive training on marketing and self-improvement. Marketing is said to be the mother of entrepreneurship. People who do not concentrate on their marketing never climb the ladder of success. Marketing is not “how much” you sell but it is always how you sell yourself successfully!!",
          "Main points covered are:",
        ],
        list: [
          "4 stages of marketing",
          "Know yourself",
          "Communication",
          "Marketing approach",
          "Marketing planning - Market research",
          "Demand and supply analysis",
          "Advertising, brand creation",
          "Packaging design aspects",
          "Selling skills",
          "Market positioning",
        ],
      },
      {
        h: "3. Conducting industry interface – management program for students, apprentices and management enthusiasts",
        p: [
          "Through this week long training an exposure is given to the target group with respect to standards and expectations from the corporate world from these future corporate workforces. Training module focuses on; Knowing oneself; Self analysis through NLP based programme; Personality development; Etiquettes and ethics of the corporate world; Importance of Management functions and Quality standards; Communication skills and behavioral aspects; Entrepreneurship; Change management; Handling stress; Goal setting; Bring self growth by adopting golden rules of success. The main motto of this module is create the mindset “Full Of Liveliness, Personal Prosperity And Self Motivation” to achieve their dreams through this management programme.",
        ],
      },
      {
        h: "4. Initiating an Entrepreneurial Development initiative at education and management institute.",
        p: [
          "Biznovators, highly values the spirit of smart entrepreneurship, in today’s world opportunities give highest benefit to those ones who act smart, innovatively and creatively, to conquer the disbelief of uncertainty and impossibility. It has been the endeavor of Biznovators to support and help individuals through entrepreneurship initiative to bring growth. Biznovators also believes that Students deserve to receive the highest benefit through exploration of entrepreneurial opportunities around them. In fact if the need based training of Entrepreneurship is imparted, by giving understanding of true values and benefits of the concept, will not only open the doors of unlimited growth to these youngsters but will also give them the required strength to face their future with honour. This is the need of the time.",
          "Biznovators helps in establishing an Entrepreneurial Development initiative at education and management institute levels for the deserving students. Harsh calls this endeavour - our dream project - Biznovators Udyogshalam उद्योगशालाम्…",
          "Udyogshalam…Creating smart Entrepreneurship at various levels of prospective entrepreneurs such as individual, budding and 2nd generation entrepreneurs to participants & students from various skill training, education and management institutes.",
        ],
      },
    ],
  },
  udyogshalam: {
    title: "Udyogshalam उद्योगशालाम्",
    about: {
      h: "About Udyogshalam…",
      p: "It's a 1000 days mentoring concept for budding entrepreneurs by Mr. Harshavardhan Ranade*, Founder - Biznovators. 1000 days mentoring involving classroom training, weekly tasks, personal & in group mentoring, hand holding and bonding of togetherness to achieve the goal of converting our budding entrepreneurs into self-sufficient smart entrepreneurs.",
    },
    vision: {
      h: "Vision of our Founder",
      p: [
        "Biznovators, highly values the spirit of smart entrepreneurship. In today’s world opportunities give highest benefit to those ones who act smart, innovatively and creatively; to conquer the disbelief of uncertainty and impossibility.",
        "It has been the endeavor of Biznovators to support and help individuals through entrepreneurship initiative to bring growth. Biznovators also believes that every entrepreneur deserve to receive the highest benefit through exploration of entrepreneurial opportunities around them. In fact if the need based training of Entrepreneurship is imparted, by giving understanding of true values and benefits of the concept, it will not only open the doors of unlimited growth to these youngsters but will also give them the required strength to face their future with honor. This is the need of the time.",
        "Biznovators through our Entrepreneurial Development initiative develops smart entrepreneurship at various levels of prospective entrepreneurs such as individual budding and 2nd generation entrepreneurs to participants & students from various skills training, education and management institutes. Harsh calls this endeavor - our dream project - Biznovators-Udyogshalam. Training module focuses on:",
      ],
      list: [
        "Knowing oneself",
        "Self-analysis through our own assessment and analytical modules",
        "Entrepreneurial Personality development; Etiquettes and ethics of the corporate world",
        "Importance of entrepreneurial functions and Excellence of values",
        "Communication skills and behavioral aspects towards achieving smart Entrepreneurship",
        "Change management; Handling stress; Goal setting",
        "Bringing self-growth by adopting golden rules of success mantras.",
        "To create the mindset “Full Of Liveliness, Personal Prosperity And Self-Motivation” to accomplish the vision.",
      ],
    },
  },
  shchem: {
    title: "S.H.Chem. Tech",
    subtitle: "Chemical Project Consultants — Techno-Commercial Studies",
    specialities: [
      "Established in December 1989",
      "Consultants for chemical industries",
      "Project Management in Chemical & Allied Areas",
      "Pollution Control, Waste Minimization & Recycling",
      "Non-Conventional Energy Sources",
      "Technology transfer",
    ],
    what: [
      "S.H.CHEM TECH offers expert advice and provides support services to Chemical and allied industries to gain competitive advantage.",
      "32 years of age, backed by experience and in-depth knowledge of the chemical industry and understandings of the market and knowledge of technological developments has built a rigid base for us.",
      "S.H.CHEM TECH has built two groups of eminent professional in specialized areas. One group specializes in technological innovations including:",
    ],
    techGroup: [
      "Agro-based Chemicals",
      "Chemical Engineering",
      "Dyes and Dye Intermediates",
      "Fermentation and Biotechnology",
      "Inorganic Chemicals",
      "Pharmaceutical Products and Pharmaceutical Intermediates",
      "Specialty Polymers",
      "Specialty Chemicals",
    ],
    mgmtIntro: "While second group is formed by management specialists covering:",
    mgmtGroup: ["Market Research", "Marketing", "Exports", "Finance", "Industrial management"],
    offer: [
      {
        h: "1] Project Management Consultancy in Chemical and allied fields. Activities covered are:",
        list: [
          "Project Identification Studies",
          "Project Evaluation & Feasibility Studies",
          "Market Research & Survey Studies",
          "Providing Complete Process Know-how/Technology Licensing",
          "Chemical Plant and Equipment Designing",
          "Turnkey Assignments",
          "Productivity Improvement Studies",
          "Troubleshooting Problems",
          "Diagnostic Studies for Sick Units",
        ],
      },
      {
        h: "2] Environmental and pollution control consultancy with special emphasis on waste minimization & recycling.",
      },
      {
        h: "3] Non-conventional energy sources consultancy, with particular reference to energy generation by utilizing bio-waste (Agro-waste, Agro-industrial waste and other biodegradable matters).",
      },
      {
        h: "4] Technology transfer with foreign organizations, industrial federations and individuals in India and Foreign countries.",
      },
    ],
    completedTitle: "Assignments Completed",
    completedIntro:
      "More than 1000 product based assignments completed in the field of Chemical and allied industries:",
    completed: [
      "Project Identification & Feasibility Studies",
      "Market Surveys & Research Studies",
      "Plant & Equipment Designing",
      "Project Management",
      "Turnkey Projects",
      "Product Launching",
      "Field Research Studies",
      "Effluent Treatment, waste Minimization & Recycling.",
    ],
  },
  artestra: {
    title: "De La Artestra",
    paras: [
      "\"De la Artestra\" the platform meant for providing a marketplace for Exclusive and genuine art like exclusive paintings by famous painters And original genuine music, art and handicraft..",
      "De La Artestra is a Marketing Platform created for genuine and exclusive Art. It is a platform where artists can showcase, trade-sell and display their talent, collection and creativity of their Art form say – dance, music, Paintings, handicraft and traditional craftsmanship.",
      "It helps Artists and Musicians help realize the true value of their Art. It helps them in becoming Entrepreneurs from the Art Place. We have tie ups with well known artists and art lovers and art enthusiasts that is exceptionally useful to our artists. We boast to have big names associated with us.",
      "Since 2012 this platform has provided our platform to leading and upcoming artists",
    ],
  },
  directors: {
    title: "Directors — About the founders",
    people: [
      {
        name: "Mr. Harshavardhan Ranade",
        text: "A chemical engineer with specialization in Entrepreneurship is the Resource Head & backbone of the Organization. Has worked in Market research & consulting for last 20+ years.",
      },
      {
        name: "Ms. Vinita Ranade",
        text: "A Management Graduate of University of Pune with specialization in Finance, is the commercial think tank. A founder director with over 17+ years of work exposure.",
      },
    ],
    note: "Both the directors have to their credit whole hearted participation in all the assignments; such as Market Research, Research Studies, Field Research, Techno-Economic Feasibility Studies, Export market search, Collaboration and Technology Transfer Search; motivational training and similar consulting assignments.",
  },
  team: {
    title: "Our Team",
    paras: [
      "We as a company policy have built up a strong associate network of experts, in every management discipline along with a support team of field work force. This field force includes senior investigators, management associates as well as data analysts, and a close software support of associates having expertise in software development and data entry of all types.",
      "These associates work with us on job-to-job basis all over India. The field team selection is done strictly on the basis of assignment requirements. Similarly, as a policy this entire network is controlled centrally, by the directors (- a mutually shared responsibility-) with an able assistance of the support team. This support team is constantly kept in check based on a work performance yardstick, so there are few expected periodic replacements; to gives us the required quality. Apart from this we have a management committee in charge of taking the decisions related to company policies and strategies.",
      "Considering the business need, we have our set up located at the most central and prominent location in Pune - Deccan Gymkhana, off J.M.Road. Our well-resourced and creative set up is equipped to handle all of our corporate operations.",
      "Further plans: We are in a process of establishing a research centre in Pune. Research center’s main aim is to develop the new growth strategies based on Market research and Techno-commercial principles and also to get the client - Entrepreneurs - an exact idea about the commerciality of their ventures to develop the business Purposefully.",
      "Biznovators as a brand: We have developed ourselves as a brand, which aims to nurture opportunities for entrepreneurs by providing a variety of growth solutions!!",
    ],
  },
};

// ------------------------------------------------------------- SERVICES
export const services = {
  title: "What We Offer",
  tagline: "One Stop Shop: For Business Planning",
  providedTitle: "Services Provided:",
  provided: [
    "Entrepreneurial growth, Expansions and Development",
    "Market Research Studies",
    "Start ups - Enterprise Planning",
    "B2B Events - PR - Trade meets",
    "Branding / Marketing Consultancy",
    "1 TO 1 Mentoring",
    "Training",
    "Commercial Real Estate Database (CRED)",
    "Venture Consulting",
    "Recruitment Management Consultancy",
  ],
  expertiseTitle: "Expertise",
  blocks: [
    {
      h: "Service 1: Research Studies",
      sub: "Research Studies Include",
      list: [
        "Market Survey / Research",
        "Product Related",
        "Customer Related",
        "Growth Potential Analysis",
        "Customized Market Research",
        "Technical Feasibility",
        "Commercial Viability",
        "Socio-Commercial",
        "Techno-Commercial",
      ],
      note: "Research Experience Across ALL Major Segments of Industry & Trade.",
    },
    {
      h: "Service 2: Enterprise Planning",
      list: [
        "Access to Best-in-Class Expertise",
        "Sophisticated Analytical System",
        "Creative Lateral Thinking",
        "Growth Strategy",
        "Brutal Honesty",
      ],
      note: "Business Pyramid: Our Unique Planning Model",
    },
    {
      h: "Service 3: B2B Platform",
      list: [
        "Direct Contact with Diverse Vendors and Businesses",
        "Huge Database",
        "Exceptional Openness",
      ],
      note: "“B2B networking”: Biznovators B2B",
      links: [
        {
          label: "Biznovators B2B on Facebook",
          href: "https://www.facebook.com/groups/113130902040593",
        },
        { label: "E-commerce space: www.digin.in", href: "http://www.digin.in" },
      ],
    },
    {
      h: "Service 4: Branding / Marketing",
      list: [
        "Exceptional Knowledge of Market Trends",
        "Access to Best-in-Class Expertise",
        "B2B Platform",
        "Understanding of Business Needs",
        "Export Market Search",
      ],
    },
    {
      h: "Service 5: Recruitment Management",
      list: [
        "Specially for Top-Level Management Jobs",
        "Access to Diverse Evaluators",
        "Experienced Personality Evaluation",
      ],
    },
    {
      h: "Service 6: Start-up Venture Consulting",
      list: [
        "Technology transfer & JV search",
        "Excellent Trade Contacts",
        "Financial Understanding",
        "Access to Opportunities",
        "Chemical Project consulting",
      ],
    },
    {
      h: "Service 7: Training & Mentoring",
      sub: "Training in:",
      list: [
        "Udyogshalam उद्योगशालाम्… The 1000 days mentoring concept for budding entrepreneurs invented by our Founder Harshavardhan Ranade.",
        "Entrepreneurship — Growth Motivation seminars through Success sutras and growth mantras.",
        "Well Developed Modules / Programs based on needs of corporates & education institutes",
      ],
    },
    {
      h: "Service 8: Udyogparva Modules",
      sub: "Well Appreciated Udyogparva Training Modules",
      list: [
        "Success Mantras For Growth!",
        "Market Yourself For Growth!",
        "Business Opportunity Growth!",
        "Market Development Initiative!!",
        "Commerciality Development!!",
      ],
    },
    {
      h: "Service 9: C-RED – Commercial Real-Estate Database",
      sub: "Strategic Location plays an Important part in the Success of Many a Business!",
      list: ["Highly Developed Contacts", "Huge Database", "Understanding of Business Needs"],
    },
    {
      h: "Service 10: BEIQ",
      sub: "Successful entrepreneurs are self made. But BEIQ makes you more confident!!",
      paras: [
        "This indicative analysis developed by our founder Harshavardhan Ranade, is test of one's entrepreneurial ability depending on their personal experience of surrounding circumstances. This test may be used for understanding one's decision making ability to be an entrepreneur. This purely indicative analysis will be helpful to get an idea of one's entrepreneurial vision.",
      ],
    },
  ],
  teamTitle: "Team Biznovators brings to each Project",
  team: [
    "Complete Commitment to Success of the Project",
    "Total Involvement",
    "Wide-Ranging Experience",
    "Well Planned and Detailed Execution",
    "Scientific Approach",
    "Techno-Commercial Understanding",
    "Detailed Analysis of Data",
    "Transparency",
    "Succinct and Incisive Reporting",
  ],
  aims:
    "Aims - Biznovators as a brand: We have developed ourselves as a brand, which aims to nurture opportunities for entrepreneurs by providing a variety of growth solutions!!",
  further:
    "Further plans: We are in a process of establishing a research centre in Pune. Research centre’s main aim is to develop the new growth strategies based on Market research and Techno-commercial principles and also to get the client - Entrepreneurs - an exact idea about the commerciality of their ventures to develop the business Purposefully.",
  presentationsCta: "For Details Of Each Activity Please Go Through The Presentations",
};

// --------------------------------------------------------- TESTIMONIALS
export const testimonials: { name: string; role?: string; text: string[]; lang?: "mr" }[] = [
  {
    name: "Shrirang Gokhale",
    role: "Product Design, Management, Quality and Mentorship.",
    text: [
      "I know Mr. Harshavardhan Ranade for almost last 10 years. Today is a director of Biznovators Pune. I interacted with him for training of some entrepreneurs. He is very dedicated and well informed about how to motivate a person. Planning a business, scaling it up, this he trains no doubt, but his speciality is mindset improvement for which he has his own study and cases.",
      "I always admired his skill of networking and is always ready to share information.",
      "Harshwardhan, let's keep exchanging ideas and I will always depend on your expertise in business related issues. You are unique and inspiring Guru to achievement of our dreams",
    ],
  },
  {
    name: "Tarique Muhammad",
    text: [
      "Hi Dear All,",
      "Harshwardhan Sir as I respectfully call him is not a person you would find on this planet in these selfish turbulent times. He really is a gem of a person, a perfectionist to the core and a workaholic to the hilt. He is above, well much much above us mere Mortals of these days. His command over everything he does is awe inspiring, he is an Institution in himself. He is the only person I have seen across 9 Countries, who is A Jack Of All Trades And Master Of All.... He is an amalgamation of Honey and Ambergris and Floral and wooden fragrances all combined into something very unique. He speaks with utmost humility, but, with Authority, in fact it wouldn't be incorrect to call him a living Encyclopedia. For me he is a Super Hero, a humane face of diminishing humanity, he is a Sheen of Luminescent light in the dark hatred of this world. He is the Rarest of Rare Diamonds ever found in this generation. I know him since 1998, and, it was he who really introduced me to the corporate world, corporate culture. It wouldn't be incorrect if I call him a living legend and an Institution within himself, he really has that heart of a Brave Warrior, Soft Lover, And Above all a true pious disciple and worshiper of Ganesha. I can vouch for him if his name is considered for Bharat Ratna and The Nobel Prize.",
      "He really is what we want to see in people, but, in reality we find such people in fantasies and fairy tales. My heartiest wishes to My Harsh Sir for everything he Does In his life.",
      "These 20 years are worth 20 Centuries of knowing MY HARSH SIR.",
      "Regards:- Adv. Sahabzaada Siddiqui MUHAMMAD Tariq Rizvi. B.Com, MPM, LLB.",
    ],
  },
  {
    name: "Kedar Ranade",
    text: [
      "Dear Dada,",
      "the first time I met you, my impression of you was someone with a big dream, thinking positively and a doer.",
      "I remember that you always had and still have that 'apan karu na' 'no problem' attitude. That is the memory of you that will remain with me.",
    ],
  },
  {
    name: "Avadooth Pol",
    text: [
      "I know Harshavardhan for the past 14+ years, first as neighbours and then because of his expertise in the field of coaching entrepreneurs. We have an annual event at our institute wherein students setup stalls to sell / market various products and services.",
      "The idea is to germinate and nurture the spirit of entrepreneurship in young budding managers. The students participate with huge enthusiasm and are evaluated on different parameters like innovation, product uniqueness, marketing strategy, profit margins and others.",
      "Mr. Harshavardhan had been kind enough in judging this event in the past and also guiding them wherever required. He regularly spends time in interacting with the students at the various stalls, asking them right questions and simultaneously mentoring them. His speech at the prize distribution ceremony is also looked forward to, as he educates the audience with the current trends in entrepreneurship/ start-ups and also guiding them to reduce the possible mistakes. With his vast experience in the field of coaching entrepreneurs of various genres, he is the right person to do this job.",
    ],
  },
  {
    name: "Prashant Ahir (Maher)",
    text: [
      "I first met Harsh ('Vinit' as he was fondly known) sometime in 2003 while I was working as Head HR for Thermax Group and Anu Aga had nominated me on BYST - a non-profit making body that was engaged in generating entrepreneurship amongst youth; not only by extending credit and capital but by guiding, mentoring and hand-holding them. Harsh and I were on the same committee and soon we discovered that we shared similar thought-process, enthusiasm, a will to make difference and also love for food and affection for dogs. We did a lot of work together and grew in mutual respect and friendship. Professionally, Harsh then was better known as an MR consultant and chemical industry player. However, his passion for developing entrepreneurs and more than that, entrepreneurship, was evident. Since he himself had started on his own at a young age, he was able to understand and appreciate entrepreneur's mindset, their aspirations, dreams and fears; better than most of us. In those days, as we worked together, I used to think, though never expressed explicitly, that it would be shame if Harsh was asked to do anything other than propagating entrepreneurship. Later, we got busy with our individual lives and could not catch-up seriously with each other's activity but I was delighted to meet him after some years to discover that he had continued with his passion of helping entrepreneurs through a venture called 'Biznovators' and had expanded and deepened his activity in this area through teaching, mentoring and also by designing various tools to uncover 'blind spots' in an individual's journey to becoming a successful entrepreneur. While I was with Tata Motors, I had invited Harsh to talk to a self-help group managed by employees' wives and lady relatives, called Tata Motors Grihini. Later, from the feedback received, I learnt to my delight that Harsh surely had scaled new hills of mentorship in entrepreneurs' development. He is amongst the rare who have courage and conviction to respond to their calling. I wish him the best and pray to God to guide him to success in his chosen field of work. May his dreams in entrepreneurship be fulfilled; awakening such dreams in multiple hearts in the process so that many more live a life of fulfilment!",
    ],
  },
  {
    name: "Kaustubh Khare",
    text: [
      "I run a business of manufacturing, packing and selling natural and traditionally made products under a brand IndicWisdom. Me and my wife Prajakta started this business in 2016 with no experience of manufacturing or food industry in general. In 2016, Harshavardhan Ranade for you all and My Vinit dada agreed to be my mentor. I was operating from Mumbai and he seats in Pune but that was never a hurdle as he was always just a phone call away.. I will never forget his 1000 days mantra as it helped me a lot..",
      "He also helped me with many contacts which formed crucial part of my business ecosystem later. Currently I am into business for more than 850 days and I am experiencing his 1000 days mantra exactly being rolled as he described.. For every new start.. guidance and professional mentoring is MUST.. I am fortunate enough to receive it at right time and from right person which helped me a lot in my business journey.. I thank Vinit dada and his biznovators team and wish them all the best in their future endeavors.. Regards, Kaustubh",
    ],
  },
  {
    name: "Sobhna Kale, Starkids",
    lang: "mr",
    text: [
      "तुझे आई वडील आणि काकांसारख्या ज्येष्ठ नातेवाईकां बद्दल असलेली आदराची भावना बघून आनंद होतो. नेहमी असाच रहा आयुष्यात. मोठ्यांचे आशिर्वाद आपल्या पाठी नेहमीच असावेत तुझे सर्वांना मदत करणे आणि त्यांना बरोबर घेऊन पुढे जाणे हे देखील प्रशंसनीय आहे.",
      "तुझ्या व्यवसायाला तीस वर्षे पूर्ण होत आहेत ह्या बद्दल हार्दिक अभिनंदन आणि खूप शुभेछा. मी काही लेखिका नाही त्यामुळे काही लिहिणार नव्हते पण तुझ्या आग्रहाखातर लिहिले.",
    ],
  },
  {
    name: "Jayant Ghate, Mumbai",
    role: "An Inspired Entrepreneur Inspiring Entrepreneurs",
    text: [
      "I know Harshavardhan Ranade for several years. And I have always felt that he truly is \"An Inspired Entrepreneur whose Mission Is To Inspire others To Become an Entrepreneur\". Perhaps this is one of the toughest task. But he has the guts to face each and every challenge smilingly and successfully. My first meeting with him was more than two and half decades ago. I was working with the prestigious World Trade Centre Mumbai and had assigned one research project to the MITCON from Pune. Harshavardhan was Associate Consultant at MITCON. And he carried out the assignment with great efforts and painstakingly. It was indeed an outstanding output and I suggested him to make final presentation personally rather than his seniors. And without any hesitation, he did it very effectively. This work brought us together and closer. Subsequently I encouraged him to undertake more challenging assignments and he went on to become a really good Consultant. With his background in Engineering and training in Management, many more assignments came to him, he executed these successfully and one fine morning he found himself in the shoes of a Consultant-cum-Entrepreneur on his own. And thereafter it was a natural progression to Trainer as well. At the WTC Mumbai, I entrusted him with many more projects and he conducted all these excellently. He is equally focussed upon the outcome and its use in practice which is a hallmark of an entrepreneur. One assignment that I remember very clearly was on “Export Potential of Indian Ayurvedic Medicines”. It was for the first time such study was carried out in our country and we had to update it three more times. It led to policy formulation at government level as well as decision-making at industry and business level in new directions. We also associated him for WTC Mumbai flagship event Global Economic Summit as a Supporting Organisation from Pune. And he did his job so well that WTC gave him an Award as the Best Supporting Organisation among more than 30 such organisations. I do not recall when our business relations came to personal realm. I visited his home often and became his family member. His parents – no more now – as well as his wife and daughter have always welcomed me. In fact his family has been a strength and inspiration for him to achieve more and contribute more to the society. Always cheerful and eager to accept challenging tasks, I am sure he will continue to inspire others to realise their full potential.",
    ],
  },
];

// ---------------------------------------------------------------- MEDIA
const wa = (t: string) => `whatsapp_image_20211102_at_${t}.jpg`;
const galleryFiles = [
  wa("10.09.22_am_2"), wa("10.09.23_am_1"), wa("10.07.38_am_1"), wa("10.09.17_am"),
  wa("10.09.18_am_1"), wa("10.09.18_am"), wa("10.11.01_am"), wa("10.09.21_am_1"),
  wa("10.09.21_am_2"), wa("10.09.24_am_2"), wa("10.09.25_am"), wa("10.09.27_am_1"),
  wa("10.09.27_am"), wa("10.11.01_am_1"), wa("10.11.06_am"), wa("10.09.28_am_1"),
  wa("10.11.09_am_2"), wa("10.11.09_am"), wa("10.11.10_am"), wa("10.11.11_am_1"),
  wa("10.11.11_am"), wa("10.11.12_am"), wa("10.11.13_am_1"), wa("10.11.13_am"),
  wa("10.11.14_am_1"), wa("10.11.14_am"), wa("10.09.20_am"), wa("10.09.23_am"),
  wa("10.09.26_am_1"), wa("10.09.24_am_1"), wa("10.09.24_am"), wa("10.09.29_am"),
  wa("10.11.02_am_1"), wa("10.11.02_am"), wa("10.11.05_am_1"), wa("10.11.05_am"),
  wa("10.11.06_am_1"), wa("10.11.07_am_1"), wa("10.11.07_am"), wa("10.11.08_am_1"),
  wa("10.11.09_am_1"), wa("10.11.15_am"), wa("10.11.16_am"), wa("10.23.26_am"),
  wa("10.29.33_am"), wa("10.29.27_am"), wa("10.23.25_amb"), wa("10.29.32_am_1"),
  wa("10.29.32_am"),
  "c2221a9194bc4d20b50b2c6fe8184bc1.jpg", "press_1.jpg", "press_2.jpg", "press_4.jpg",
];
export const media = {
  title: "Photo gallery",
  caption: "Snaps are taken from various events",
  items: galleryFiles.map((f) => ({
    thumb: `gallery/vlb_thumbnails1/${f}`,
    full: `gallery/vlb_images1/${f}`,
  })),
};

// ----------------------------------------------------------------- BLOG
export const blog = {
  title: "Blog & Announcement",
  cta: "Visit Blog",
  href: "https://biznovatorsindia.blogspot.com/",
};

// --------------------------------------------------------- PRESENTATION
export const presentations = [
  { label: "Biznovators (Marathi)", file: "pdf/biznovators_mr.pdf" },
  { label: "Biznovators (Presentation)", file: "pdf/biznovators_PPT.pdf" },
  { label: "Udyogshalam", file: "pdf/udyogshalam.pdf" },
  { label: "Harshavardhan Ranade", file: "pdf/harshavardhan_ranade.pdf" },
];

/** Every file the pages reference — used by scripts/fetch-assets.sh */
export const allAssetPaths = [
  ...about.gallery,
  about.founder.photo,
  ...media.items.flatMap((i) => [i.thumb, i.full]),
  ...presentations.map((p) => p.file),
];
