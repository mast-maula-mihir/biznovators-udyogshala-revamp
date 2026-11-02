export type Locale = "en" | "mr";
export const locales: Locale[] = ["en", "mr"];

/**
 * Image base. Defaults to the live site so the clone works immediately.
 * After running `npm run assets`, set NEXT_PUBLIC_ASSET_BASE=/images
 */
const ROOT = process.env.NEXT_PUBLIC_ASSET_ROOT ?? "https://www.biznovators.in";
export const ASSET_BASE = `${ROOT}/images`;

export const social = [
  {
    label: "Biznovators Udyogshala",
    href: "https://www.facebook.com/pages/category/Product-Service/Biznovators-%E0%A4%89%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A4%B6%E0%A4%BE%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A5%8D-%E0%A4%89%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A4%B6%E0%A4%BE%E0%A4%B3%E0%A4%BE-by-Harshavardhan-Ranade-108848527325539/",
    icon: "fb",
  },
  {
    label: "Biznovators",
    href: "https://www.facebook.com/Biznovators-Market-research-ConsultingA-Harshavardhan-Ranade-Venture-211012242262898/about/",
    icon: "fb",
  },
  {
    label: "Harshodyog-Sutras हर्षोद्योग-सूत्र",
    href: "https://www.facebook.com/Harshodyog-Sutras-%E0%A4%B9%E0%A4%B0%E0%A5%8D%E0%A4%B7%E0%A5%8B%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%B8%E0%A5%82%E0%A4%A4%E0%A5%8D%E0%A4%B0-562038447484889/",
    icon: "fb",
  },
  {
    label: "Harshavardhan Vinit Ranade",
    href: "https://www.facebook.com/harshavardhan.vinit.ranade",
    icon: "fb",
  },
  {
    label: "Biznovators LinkedIn",
    href: "https://www.linkedin.com/in/harshvinitranade",
    icon: "link",
  },
  {
    label: "Biznovators YouTube",
    href: "https://www.youtube.com/channel/UCDLVyiznrJOm8xsBZm6qFLw",
    icon: "yt",
  },
] as const;

export const ventures = [
  {
    logo: "logo_shc.png",
    name: { en: "S.H. Chem. Tech.", mr: "S.H. Chem. Tech." },
    desc: {
      en: "Chemical Project Consulting",
      mr: "रासायनिक प्रकल्प सल्लागार",
    },
  },
  {
    logo: "logo_biznovators.png",
    name: { en: "Biznovators", mr: "बिझनोव्हेटर्स" },
    desc: {
      en: "Market Research & surveys, Chemical Project Consulting, Entrepreneurial development and expansions, Entrepreneurial Mentoring, Growth potential analysis, Growth consulting, new market development.",
      mr: "मार्केट रिसर्च व सर्वेक्षण, रासायनिक प्रकल्प सल्ला, उद्योजकता विकास व विस्तार, उद्योजक मार्गदर्शन, वाढीच्या क्षमतेचे विश्लेषण, ग्रोथ कन्सल्टिंग, नवीन बाजारपेठ विकास.",
    },
  },
  {
    logo: "logo_udyogshalam.png",
    name: {
      en: "Biznovators Udyogshalam उद्योगशालाम्",
      mr: "बिझनोव्हेटर्स उद्योगशालाम्",
    },
    desc: {
      en: "It's a 1000 days mentoring concept for budding entrepreneurs by Mr. Harshavardhan Ranade. Mentoring Entrepreneurial development and expansions.",
      mr: "नवोदित उद्योजकांसाठी श्री. हर्षवर्धन रानडे यांची १००० दिवसांची मार्गदर्शन संकल्पना. उद्योजकता विकास आणि विस्तार मार्गदर्शन.",
    },
  },
  {
    logo: "logo_art.png",
    name: { en: "De ’la Artestra", mr: "De ’la Artestra" },
    desc: {
      en: "The platform meant for marketing exclusive and genuine art like exclusive paintings of famous artists and original music by genuine musicians and Handicraft.",
      mr: "प्रसिद्ध कलाकारांची खास चित्रे, अस्सल संगीतकारांचे मूळ संगीत आणि हस्तकला यांच्या विपणनासाठीचे व्यासपीठ.",
    },
  },
  {
    logo: "logo_edf.png",
    name: {
      en: "Biznovators Entrepreneurship Development Foundation (Created in 2012)",
      mr: "बिझनोव्हेटर्स एंटरप्रिन्युअरशिप डेव्हलपमेंट फाउंडेशन (स्थापना २०१२)",
    },
    desc: {
      en: "Sec.8 not for profit Entrepreneurship Development company created to develop and promote general, non-engineering, socio-commercial, agro-based and specific entrepreneurship.",
      mr: "कलम ८ अंतर्गतना-नफा उद्योजकता विकास कंपनी — सर्वसाधारण, अ-अभियांत्रिकी, सामाजिक-व्यावसायिक, कृषी-आधारित व विशिष्ट उद्योजकतेचा विकास व प्रसार.",
    },
  },
] as const;

export const copy = {
  en: {
    siteTitle: "Biznovators | Home",
    nav: { home: "Home", contact: "Contact", switch: "मराठी" },
    intro:
      "Biznovators is a Pune, India based forum, created for Start-up Consulting, Entrepreneurship Development And Training Programs, Chemical And Allied Projects Consulting And Market Research.",
    belief:
      "At Biznovators, we believe in sustainable entrepreneurship which can be facilitated with adequate guidance or mentoring. We, at Biznovators have supported almost 5000+ product based Market Research techno commercial Studies and Trained over 22000 budding entrepreneurs and Corporate leaders and students, since last 32 years.",
    domains: "Biznovators has following active business domains at their nuclei.",
    letterTitle: "In gratitude ......",
    letter: [
      "This story of our entrepreneurship is not less than a fairytale for me and for all who enjoyed this journey along with me. It all started just like Once Upon A Time ....... And Now are Living Happily Ever After!!",
      "On 1/1/2021, our business completed 31 years! Exactly 32 years ago, I started my entrepreneurial journey. While finishing my last year of Chemical Engineering, I underwent specialised training in Entrepreneurship in 1989-90, at the age of 20 years.",
      "About this time two of my senior partners came with me and we started S. H. Chem.Tech., a Chemical Project Consultancy in 1990. Although I was young, they took care of me and taught me the whole chemical industry technically and in the next two-three years we successfully started some turn-key chemical projects for our clients. From 1992-93, we were well known as Chemical Project Consultants, it is till date; chemical industry and we are now the equation!",
      "It was during this time that I started getting field work related to market research. At the beginning of 1992, only six [6] interviews job was received from IMRB and by 1996, it had grown to about three and a half thousand [3500] interviews at a time.",
      "That's when two most significant things happened: one, Thermax Ltd., chose us to conduct the first fuel survey in India based on Agro waste and we prepared first ever fuel survey report for a sugar factory in Kolhapur. And similarly we were honoured to complete first of its kind study on the export potential of herbal products and ayurvedic drugs for WORLD TRADE CENTRE, MUMBAI. This study is a major success.",
      "We have not looked back since that success; we did a lot of market research work all across geography and economy, and today, Biznovators and SH have become leaders in the market research & consulting field in India.",
      "Vinita Ranade also joined the business in 1998, as a result, the quality of work changed to more commercially excellent. To date, we have conducted over 5000 product based market research studies.",
      "Whether it is The Abhiruchi mall in Pune or a 150 year old jewelery firm, the first factory of Kandi pedhas, a traditional centuries old sweet, in Satara or the production of herbal and vegetable fruit powder as food supplement, to rubber chemical products or medicines, food processing or spice cluster projects; till date, we have helped and guided countless such industries and entrepreneurs.",
      "While accomplishing our task, we have never given up on entrepreneurship, we have been constantly striving for new entrepreneurial development and expansion keeping in mind the philosophy that we should be the hands of recipients. Since 2002, we took up creating entrepreneurial mindset among budding entrepreneurs. As a result I myself have guided, mentored and trained more than 22000 entrepreneurs and we have been implementing these through our endeavours Biznovators and उद्योगशाळा किंवा उद्योगशालाम्!",
      "We are proud that all our 100% entrepreneurs who associated, just 100%, with us are 100% successful and that is why I think, we and our business are successful.",
      "Before concluding, I wish to Thank you all very much! In fact, these words are really inadequate for the affection we received from our well-wishers, clients and associates!",
      "I pray to my lord Ganesha, for your continued support and to give all our well-wishers and patrons the best of the success and happiness ever after.....",
      "Always In gratitude.....",
    ],
    signoff: "Harshavardhan Ranade, Biznovators and उद्योगशालाम्, Pune.",
    follow: "Follow us on Facebook pages & other platforms",
    contact: {
      title: "Contact Us",
      address: "Address",
      addressLines: ["Shivajinagar, Ghole Road,", "Pune 411005, India"],
      call: "Call",
      email: "Email ID",
      touch: "Get in touch",
    },
    rights: "All Rights Reserved",
  },
  mr: {
    siteTitle: "बिझनोव्हेटर्स | मुख्यपृष्ठ",
    nav: { home: "मुख्यपृष्ठ", contact: "संपर्क", switch: "English" },
    intro:
      "बिझनोव्हेटर्स हे पुणे, भारत येथील एक व्यासपीठ आहे — स्टार्ट-अप सल्ला, उद्योजकता विकास व प्रशिक्षण कार्यक्रम, रासायनिक व संलग्न प्रकल्प सल्ला आणि मार्केट रिसर्चसाठी.",
    belief:
      "शाश्वत उद्योजकतेवर आमचा विश्वास आहे, जी योग्य मार्गदर्शन किंवा मेंटॉरिंगने साध्य होते. गेल्या ३२ वर्षांत आम्ही ५०००+ उत्पादनाधारित मार्केट रिसर्च टेक्नो-कमर्शियल अभ्यासांना सहाय्य केले आणि २२००० हून अधिक नवोदित उद्योजक, कॉर्पोरेट नेते व विद्यार्थ्यांना प्रशिक्षण दिले आहे.",
    domains: "बिझनोव्हेटर्सची खालील कार्यक्षेत्रे सक्रिय आहेत.",
    letterTitle: "कृतज्ञतेने......",
    letter: [
      "आमच्या उद्योजकतेची ही कहाणी माझ्यासाठी आणि माझ्यासोबत या प्रवासातील सर्वांसाठी एका परीकथेपेक्षा कमी नाही. अगदी एक आटपाट नगर होतं इथे सुरु होणारी ..... आणि आता ते आनंदाने राहू लागले, ईथपर्यंत पोचलेली, अगदी तशीच!",
      "१/१/२०२१ला आमच्या व्यवसायाला ३१ वर्षे पूर्ण झाली! बरोबर ३२ वर्षापूर्वी मी माझा उद्योजकतेचा प्रवास सुरू केला. १९८९-९० साली रासायनिक अभियंत्रकीच्या शेवटच्या वर्षी उद्योजकतेमधील प्रशिक्षण घेत असताना, वयाच्या २०व्या वर्षी आणि तो ही रासायनिक प्रकल्प सल्लागार म्हणून! याचवेळी माझे वरीष्ठ दोन भागीदार माझ्या बरोबर आले आणि आम्ही S. H. Chem.Tech. ची मुहूर्तमेढ केली. वयानी लहान असूनही नीट संभाळून घेत त्या दोघांनी मला आख्खी केमीकल इंडस्ट्री टेक्निकली शिकवली आणि पुढच्या तीन वर्षांत आम्ही यशस्वीपणे काही रासायनिक प्रकल्प पण सुरू करून दिले. १९९२-९३ पर्यंत आम्ही केमिकल प्रोजेक्ट सल्लागार म्हणून सगळ्यांना माहीत झालो, ते अगदी आजही रासायनिक उद्योग आणि आम्ही हे आता समीकरण झाले आहे!",
      "याच काळात मला मार्केट रिसर्च संबंधीत फील्डची कामे मिळायला लागली होती. १९९२ला सुरवातीला फक्त सहा इंटरव्ह्यूच एक काम IMRB कडून मिळाल होते आणि तेच वाढत वाढत १९९६ पर्यंत सुमारे साडेतीन हजार इंटरव्ह्यूझ पर्यंत पोहोचल.",
      "तेव्हाच दोन महत्त्वाच्या गोष्टी घडल्या Thermax नी भारतातला पहीला Agrowaste वर आधारीत fuel survey करायला आम्हाला निवडले आणि फील्डची कामे करण्यात पटाईत असलेल्या आम्ही, आमचा पहीला वाहीला fuel survey रिपोर्ट कोल्हापूर च्या एका साखर कारखान्यासाठी तयार केला. त्या यशानंतर आम्ही मागे वळून पाहिलेले नाही; अनेक मार्केट रिसर्च संबंधीत कामे आम्ही केली.",
      "१९९८ ला विनिता रानडे पण या व्यवसायात सामील झाल्या, आमच्या बरोबर इतर सहकारी होतेच. ह्यामूळे कामाचा दर्जा उत्कृष्ट प्राप्त होत राहीला. आजपर्यंत आम्ही पाच हजारांहून जास्त उत्पादनांवर [प्रोडक्टस् वर] मार्केट रिसर्च रिपोर्ट केले आहेत.",
      "यात भारताच्या निर्यातक्षमतेच्या (सर्व क्षेत्रातील) वरील अहवाल सादर करण्याचे काम आम्ही केले, विशेषत: World Trade Center, मुंबई यांच्यासाठी आम्ही केलेला भारतातला पहीला, आयुर्वेदिक औषधे आणि वनौषधी यांच्या निर्यातक्षमतेवरील अहवाल आमच्यासाठी निश्चितच अभिमानाची गोष्ट आहे..",
      "पुणे येथील अभिरुची मॉल असो किंवा एखादी १५० वर्ष जुनी दागिन्यांची पेढी, साताऱ्यातली कंदी पेढ्यांचा पहीला कारखाना असो की वनौषधी आणि भाजीपाला फळांच्या पावडरचे उत्पादन, केमिकल रबर उत्पादने असोत की औषधे, अन्न-प्रक्रिया असो की मसाल्यांचे क्लस्टरसारखे प्रकल्प.... अक्षरश: असंख्य उद्योग आणि उद्योजकांना आम्ही आजपर्यंत उदंड मदत आणि मार्गदर्शन केले आहे.",
      "हे करताना आम्ही उद्योजकतेची साथ कधीच सोडली नाही, घेता घेता देणाराचे हात बनायला हवे हे तत्त्वज्ञान ध्यानात ठेवून २००२ पासून आम्ही नवीन उद्योजकता विकास आणि विस्तारासाठी सतत प्रयत्नशील आहोत. मी स्वत: २२००० पेक्षा जास्त उद्योजकांना मार्गदर्शन केले आहे आणि २०१२ साली बिझनोव्हेटर्स आणि २०१६ पासून उद्योगशाळा किंवा उद्योगशालाम् हे प्रकल्प आम्ही उद्योजकता विकास आणि विस्तारासाठी राबवीत आहोत.",
      "अभिमान वाटतो की आमचे सर्व उद्योजक १००% यशस्वी आहेत आणि म्हणूनच मी, आम्ही आणि आमचा उद्योग यशस्वी आहे.",
      "या संवादलेखाच्या अंती, आजपर्यंत जे हजारो उद्योजक हितचिंतक आम्हाला लाभले; त्या सर्वांना शतश: धन्यवाद! खरतर हे शब्द खरंच अपूरे, तोकडे आहेत. या हितचिंतकांचा स्नेह असाच उदंड आमच्या मस्तकी आयुष्यभर आणि तद्नंतर ही तसाच रहावा, त्या सर्वांना उत्तम यश मिळो आणि ते सदैव आनंदात रहावे .....ही गणरायाच्या चरणी प्रार्थना. शुभं भवतु!",
    ],
    signoff: "हर्षवर्धन रानडे, पुणे.",
    follow: "फेसबुक पेजेस व इतर माध्यमांवर आम्हाला फॉलो करा",
    contact: {
      title: "संपर्क",
      address: "पत्ता",
      addressLines: ["शिवाजीनगर, घोले रोड,", "पुणे ४११००५, भारत"],
      call: "फोन",
      email: "ईमेल",
      touch: "संपर्कात रहा",
    },
    rights: "सर्व हक्क राखीव",
  },
} as const;

/**
 * TODO(owner): the two phone numbers were not captured when the live
 * Contact page was read. Fill them in (format "+91 XXXXX XXXXX").
 */
export const phones: string[] = [];
export const email = "biznovators@gmail.com";
