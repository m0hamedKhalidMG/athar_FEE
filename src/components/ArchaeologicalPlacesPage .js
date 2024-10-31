import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f8f3e8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 40px;
  }
`;

const Sidebar = styled.div`
  background-color: #3b1112;
  padding: 25px;
  width: 320px;
  color: #fdfaf4;
  border-radius: 15px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 2px solid #d9c8b1;
  @media (min-width: 1024px) {
    margin-top: 0;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  color: #fdfaf4;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

// const LocationList = styled.ul`
//   list-style: none;
//   padding: 0;
//   max-height: 70vh;
// `;
const LocationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LocationItem = styled.li`
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 1.8;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: rgba(59, 17, 18, 0.8);
  color: #f1dfd0;
  &:hover {
    color: #e5c4b7;
    transform: scale(1.05);
    background-color: #5e3939;
  }
`;

const Content = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  flex-grow: 1;
  color: #3b1112;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease;
  max-width: 100%;
  margin-top: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  border: 2px solid #d9c8b1;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  width: calc(33% - 15px);
  max-width: 250px;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid #d9c8b1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: sepia(0.3);
`;

const ArchaeologicalPlacesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 0;
`;

const ArchaeologicalPlace = styled.li`
  font-size: 18px;
  line-height: 1.6;
  list-style-type: disc;
 
  padding: 5px 10px;
  
`;

const ArchaeologicalPlacesPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const locationsData = {
    الرياض: {
      images: [
        require('../images/الرياض/1.png'),
        require('../images/الرياض/2.png'),
        require('../images/الرياض/3.png'),
        require('../images/الرياض/4.png'),
      ],
      description:
        'الرياض هي عاصمة المملكة العربية السعودية، تقع الرياض وسط شبه الجزيرة العربية في هضبة نجد وتضم 58 مواقعا ومعلم اثريا .',
      places: [
        'قرية الفاو',
        'موقع المقر',
        'مسجد اليمامة الأثري',
        'الدروب الحجرية في جبال طويق',
        'آثار وادي حنيفة',
        'الرسوم والنقوش الصخرية',
        'عقرباء',
        'الحنين',
        'البليدة',
        'صفاقة الأثري',
        'موقع الثمامة',
        'قصر المصمك',
        'مركز الملك عبد العزيز التاريخي',
        'المتحف الوطني',
        'قصر المربع',
        'قصر البديعة التاريخي',
        'قصر أبو جفان بالرياض',
        'القصر الأحمر',
        'حي الديرة',
        'حي الدحو',
        'منطقة قصر الحكم بالرياض',
        'قصر الأميرة نورة بنت عبد الرحمن (الشمسية)',
        'القصور التراثية وسط الرياض',
        'سوق الزل بالرياض',
        'بلدة أشيقر الوراثية',
        'البلدة التراثية في شقراء',
        'القرية التراثية في عودة سدير',
        'بلدة سدوس التراثية',
        'البلدة التراثية بمحافظة الغاط',
        'قصر الملك عبد العزيز بالخرج',
        'قصر السبيعي في شقراء',
        'قصر العسكر التاريخي في المجمعة',
        'قصر الملك عبد العزيز التاريخي بوادي الدواسر',
        'قصر الراشد بالقصب',
        'مرقب رغبة التاريخي',
        'مرقب جبل منيح بالمجمعة',
        'قلعة الإمام تركي بن عبد الله في حوطة بني تميم',
        'البلدة التراثية في روضة سدير',
        'البلدة التراثية بالتويم',
        'البلدة التراثية بحرمة',
        'بلدة صلبوخ التراثية',
        'المزاحمية القديمة',
        'قصر الإمام تركي بن عبد الله في ضرماء',
        'حي النبعة برغبة',
        'جامع حرمة القديم',
        'سور الدلم',
        'وقف الملك عبد العزيز بوسط المجمعة',
        'جامع الداخلة',
        'متحف المزعل بالمجمعة',
        'سد السبعين بروضة سدير',
        'بيت ابن ماضي بروضة سدير',
        'بلدة ثادق القديمة',
        'بلدة البير القديمة',
        'قصر العناقر',
        'سوق المجلس التراثي بشقراء',
        'قصر زيد الحسين بالحريق',
        'قرية العمار التراثية بالأفلاج',
        'برج الكوت بالسلمية',
      ],
    },
    القصيم: {
      images: [
        require('../images/القصيم/1.jpg'),
        require('../images/القصيم/2.jpg'),
        require('../images/القصيم/3.jpg'),
        require('../images/القصيم/4.jpg'),
      ],
      description:
        'منطقة القصيم هي إحدى المناطق الإدارية وهي ذات تاريخ غني بالمواقع والنقوش الأثرية وتضم 41 موقعا  .',
      places: [
        'شعيب الأدغم',
        'قصر وصخرة عنترة',
        'مواقع الكتابات والرسوم الصخرية',
        'محطات طريق الحج الكوفي (درب زبيدة)',
        'محطات طريق الحج البصري',
        'رامة',
        'قصر مارد',
        'المنشآت الحجرية بجبل قطن',
        'المنشآت والنقوش الحجرية بجبل إبان الأسمر',
        'موقع الصنقر (المرقب)',
        'موقع العوسجة',
        'البلدة التاريخية في عيون الجواء',
        'برج الشناسة بالرس',
        'سوق المسوكف',
        'بيت البسام التراثي',
        'قلعة جدعية التراثية',
        'قصر الدبيخي التراثي',
        'بلدة المذنب التراثية',
        'متحف العقيلات',
        'بلدة رياض الخبراء التراثية',
        'قصر الملك عبد العزيز في قبة',
        'قصر المشقوق',
        'بلدة الخبراء التراثية',
        'مسجد المعارك التاريخي',
        'قصر ابن حجاج التراثي بالقوارة',
        'بيت القاضي',
        'ليت الصالحي التراثي',
        'مقصورة الراجحي',
        'سور البكيرية القديم',
        'مقصورة السويلم',
        'بيت السبيعي (بيت المنصور)',
        'بيت العويس التراثي',
        'مئذنة الجامع الكبير في عنيزة',
        'مسجد الجوز',
        'مسجد محمد بن عبد الوهاب',
        'مسجد الخريزة التراثي بعنيزة',
        'مسجد المقبل',
        'مسجد البرقاء التاريخي',
        'مسجد العجلان',
        'جامع عقلة الصقور التاريخي',
        'النزل التراثية',
      ],
    },
    
    حائل: {
      images: [
        require('../images/حائل/1.jpg'),
        require('../images/حائل/3.jpg'),
        require('../images/حائل/4.png'),
        require('../images/حائل/5.jpg'),
      ],
      description:
        'منطقة حائل هي احد المناطق الإدارية وتقع شمال نجد ، تشتهر بمواقعها الأثرية العريقة وجبالها ذات النقوش الصخرية وتضم 47 موقعا .',
      places: [
        'موقع المعترضة',
        'الكهيفية',
        'المنبطح',
        'بدائع البادية',
        'جبل أبرق غوث',
        'جبل أركان',
        'مواقع التراث العالمي في منطقة حائل',
        'جبل هطاله وجرقوق وحبشي',
        'الفنون الصخرية في جبة',
        'الفنون الصخرية في شويمس',
        'موقع جثا',
        'الضبية',
        'جبل جانين',
        'محجة',
        'المليحة',
        'جبل عرنان',
        'جبل ياطب',
        'جبل الأسد',
        'طوال الخطة',
        'الدحوة',
        'القور',
        'وادي الجيب',
        'الغوطة',
        'خشم القطعاء',
        'ضلع الأصابع',
        'جبل القاعد',
        'شعيب البويب',
        'الفنون الصخرية في بقعاء',
        'أبا الصبان',
        'الكهوف والحرات',
        'مدينة فيد الأثرية',
        'محطات درب زبيدة',
        'قصر القشلة',
        'قلعة أعيرف',
        'قصر برزان',
        'قصر رشيد بن ليلي',
        'قصر الدولة',
        'مقصورة القنون',
        'قصر النايف',
        'قرية غزيزة التراثية',
        'السوق الشعبي بالحائط',
        'البلدة التراثية في الغزالة',
        'مسجد فيد',
        'مسجد المطلق',
        'مسجد الجراد',
        'مسجد الجلعود',
        'مسجد قفار',
      ],
    },
    الجوف: {
      images: [
        require('../images/الجوف/1.jpg'),
        require('../images/الجوف/2.jpg'),
        require('../images/الجوف/3.jpg'),
        require('../images/الجوف/4.jpg'),
      ],
      description:
        'منطقة الجوف هي إحدى مناطق المملكة العربية السعودية وتقع في شمال المملكة العربية، تشتهر بالمواقع الأثرية التي تعود للعصور الحجرية وتضم 12 موقعا .',
      places: [
        'دومة الجندل',
        'قلعة زعبل',
        'قلعة ذات الحاج',
        'محطة حالة عمار',
        'محطة بئر بن هرماس',
        'محطة الحزم',
        'أعمدة الرجاجيل',
        'بئر سيسرا',
        'الشويحطية',
        'قصر كاف',
        'قصر إثره',
        'قلعة الصعيدي',
      ],
    },

    تبوك: {
      images: [
        require('../images/تبوك/1.jpg'),
        require('../images/تبوك/2.jpg'),
        require('../images/تبوك/3.jpg'),
        require('../images/تبوك/4.jpg'),
      ],
      description:
        'منطقة تبوك هي احدى المناطق الشمالية في المملكة وكانت موطناً لأمم عديدة قبل الإسلام، كالعرب البائدة مثل ثمودو مدين ، وتضم 34 موقعا .',
        places: [
          'الرسوم الصخرية في ابا العجل',
          'قلعة تبوك الاثرية',
          'محطة الاخضر',
          'محطة سكة الحديد التاريخية',
          'قلعة المعظم الاثرية',
          'قرية الاثري',
          'كلوة الاثري',
          'بئر هداج',
          'قصر الحمراء',
          'قصر الرضم بتيماء',
          'سور تيماء',
          'قصر الإمارة القديم',
          'سوق الناجم التراثي',
          'قصر البجيدي',
          'قصر السموأل',
          'رجوم صعصع الاثري',
          'جبل غنيم',
          'الصفاة الماردة',
          'جبال النصلة',
          'قلعة الملك عبدالعزيز',
          'مغاير شعيب',
          'بئر السعيداني',
          'واحة عينونه',
          'قلعة الازنم',
          'قلعة المويلح',
          'البلدة التراثية بالوجة',
          'مبنى القاووش',
          'قلعة البلدة',
          'قلعة الزريب',
          'الرسوم الصخرية في المنجور',
          'قصر املج التاريخي',
          'مسجد ابو جبل التاريخي',
          'قرية الديسه'
      ]
      
    },
    'المدينة المنورة': {
      images: [
        require('../images/المدينة المنورة/1.jpg'),
        require('../images/المدينة المنورة/3.jpg'),
        require('../images/المدينة المنورة/4.jpg'),
        require('../images/المدينة المنورة/5.jpg'),
       
      ],
      description:
        'المَدِينَة المُنَورَة هي أول عاصمة في تاريخ الإسلام وثاني أقدس الأماكن للمسلمين بعد مكة. تقع في الحجاز التاريخية غرب المملكة العربية ، وتضم 42 موقعا .',
      places: [
        'المدينة المنورة',
        'العلا',
        'الربذة',
        'مدائن صالح',
        'محطة الهدية',
        'قلعة الصورة',
        'محطة زمرد',
        'حصن الحجر',
        'ينبع النخل',
        'البريكة',
        'حصن الحفيرة',
        'محطة جذاعة',
        'محطة العذيب',
        'محطة مدائن صالح',
        'محطة أبو طاقة',
        'مدينة بدر القديمة',
        'محطة العلا',
        'محطة البدائع',
        'محطة مشهد',
        'جسر مطران',
        'محطة سهل مطران',
        'محطة البئر الجديد',
        'محطة الطويرة',
        'محطة المدرج',
        'جسر الهدية',
        'محطة أبو النعم',
        'محطة اسطبل عنتر',
        'محطة البوير',
        'محطة بئر نصيف',
        'محطة بواط',
        'محطة مخيط',
        'محطة المدينة المنورة',
        'سيد الصهباء',
        'المابيات',
        'خيبر القديمة',
        'قلعة الفقير',
        'قلعة قباء',
        'حرة خيبر',
        'حرة رهط',
        'حرة كشب',
        'سد الحصيد',
        'سد معاوية',
      ],
    },
    ينبع: {
      images: [require('../images/ينبع/2.webp')],
      description:
        'ينبع هي إحدى محافظات منطقة المدينة المنورة في المملكة العربية السعودية ، ذات طابع تاريخي مميز وتضم 3 مواقع أثرية.',
      places: ['قصر البنت في ينبع', 'ينبع البلد', 'جبل لؤلؤة'],
    },
  جدة: {
      images: [require('../images/ينبع/2.webp')],
      description:
        'جدة إحدى محافظات منطقة مكة المكرمة، وتقع في غرب المملكة العربية السعودية على ساحل البحر الأحمر ، تشتهر بتراثها والمواقع التاريخية والأثرية وتضم 9 مواقع أثرية .',
        places: [
          'سور جدة',
          'جدة البلد',
          'أسواق جدة التاريخية',
          'مسجد عثمان بن عفان',
          'مسجد الشافعي',
          'مسجد الباشا',
          'مسجد عكاش',
          'مسجد معمار',
          'الحارات التاريخية'
      ]
      
    },
    الطائف: {
      images: [require('../images/ينبع/2.webp')],
      description:
        'الطائف مدينة سعودية تقع في المنطقة الغربية ، تمتلك مخزونا وإرثا ثقافيا وتضم 43 موقعا .',
        places: [
          'سوق عكاظ',
          'آثار العرفاء',
          'درب الجمالة',
          'قرية الوهط',
          'قصر شبرا',
          'قصر الكعكي',
          'قصر الكاتب',
          'قصر جبرة',
          'مسجد القنطرة',
          'مسجد عبدالله بن عباس',
          'سد ثلبة',
          'سد صعب',
          'سد القصيبة',
          'سد سداد',
          'سد الخير',
          'سد الداما',
          'سد غروق',
          'سد السلامة',
          'سد سيسد'
      ]
      
      
    },
   
    عسير: {
      images: [
        require('../images/عسير/1.jpg'),
        require('../images/عسير/2.jpg'),
        require('../images/عسير/3.png'),
        require('../images/عسير/4.jpg'),
      ],
      description:
        'منطقة عسير هي احدى مناطق المملكة وتقع في الجنوب الغربي منها، تتميز بالتراث العريق والمناظر الطبيعية وتضم 45 موقعا .',
        places: [
          'موقع جرش الأثري',
          'موقع العبلاء الأثري',
          'آثار بادية بني عمرو',
          'درب البخور',
          'برك الغماد',
          'موقع بني رزام الأثري',
          'آثار وادي تثليث',
          'النقوش الحجرية في تنومة',
          'وادي نعام',
          'موقع هضبة العروس',
          'آثار وادي عيا',
          'قرية رجال ألمع',
          'قرية المفتاحية',
          'قلعة شمسان',
          'حصن أبها التراثي',
          'قرية آل محدل',
          'قصر آل عبيد',
          'قصر شدا التاريخي',
          'قصور أبو نقطة المتحمي',
          'قصور آل أبو سراح',
          'حي البسطة',
          'الوسط التاريخي',
          'حي النصب التاريخي',
          'قرية آل عليان',
          'قصر الحضارات',
          'قصر ثربان التاريخي',
          'قرية آل خلف',
          'النقوش الصخرية في بيشة',
          'قلعة الشقيقة (قلعة بن شكبان التاريخية)',
          'قرية العكاس',
          'قصر أبو ملحة',
          'قرية المسقي',
          'قصور آل مشيط',
          'قصر مالك التراثي',
          'قصر العسابلة',
          'مسجد العاسرة',
          'مسجد صدر أيد',
          'مسجد سبت العلايا',
          'مسجد المضفاة الأثري',
          'مسجد طبب التاريخي',
          'مسجد السرو التاريخي'
      ]
      
    },
   " مكة المكرمة": {
      images: [
        require('../images/مكة المكرمة/1.png'),
        require('../images/مكة المكرمة/2.png'),
        require('../images/مكة المكرمة/3.png'),
        require('../images/مكة المكرمة/4.png'),
      ],
      description:
        'مكَّة المكرَّمة هي المدينة الأقدس عند المسلمين ، تقع غرب المملكة العربية السعودية وتتميز بتاريخها وارثها العظيم ، تضم 18 موقعا .',
        places: [
          'الكعبة المشرفة',
          'جبل ثور',
          'جبل الرحمة',
          'مسجد المشعر الحرام بمزدلفة',
          'خاصرة عين زبيدة',
          'غار حراء',
          'قبر أم المؤمنين السيدة ميمونة بنت الحارث',
          'قلعة شنقل',
          'الأبواء',
          'حصن الجحفة',
          'قصر هارون الرشيد',
          'قلعة عسفان',
          'مسجد البيعة',
          'قصر ابن ثعلي',
          'حرة نواصيف',
          'سد السمقلي',
          'سد العقرب',
          'قرية الخرفي',
          'المناحل التاريخية'
      ]
      
    },
  
   
    "المنطقة الشمالية": {
      images: [require('../images/ينبع/2.webp')],
      description:
        'المنطقة الشمالية تقع في شمال المملكة العربية السعودية وتتميز بطبيعة ذات طابع صحراوي وتراث مميز وتضم اكثر من 300 موقعا .',
        places: [
          'قرية زبالا الأثرية في رفحاء',
          'قصر بركة',
          'قصر دوقرة الأثري',
          'جبل اقرن في طريف',
          'قصر الملك عبدالعزيز التاريخي بلينة',
          'سوق لينة الشعبي',
          'مسجد لينة التاريخي',
          'قرية خنصر التراثية',
          'القرو التراثي',
          'جمرك طريف',
          'مطار طريف القديم',
          'السوق القديم بالعويقيلة',
          'جامع الدويد',
          'أطول أنابيب نفط بالعالم - التابلاين',
          'درب زبيدة'
      ]
      
    },
   
    "المنطقة الشرقية": {
      images: [
        require('../images/المنطقة الشرقية/1.jpg'),
        require('../images/المنطقة الشرقية/2.jpg'),
        require('../images/المنطقة الشرقية/3.jpg'),
        require('../images/المنطقة الشرقية/4.jpg'),
      ],
      description:
        'المنطقة الشرقية هي أكبر مناطق السعودية مساحةً ، تقع شرق المملكة العربية السعودية على ساحل الخليج العربي. تشتهر بتراثها التأريخي وتعكس العديد من الحضارات ، تضم  42 موقعا .',
        places: [
          'مدينة ثاج',
          'عين جاوان',
          'آثار جزيرة جنة',
          'موقع الدفي',
          'موقع المردومة بالجبيل',
          'قرية الراكة الأثرية',
          'قلعة تاروت',
          'موقع الدوسرية',
          'آثار دارين',
          'آثار يبرين',
          'مدافن الظهران',
          'مدافن بقيق',
          'مدافن موقع الرفيعة',
          'موقع الضبطية',
          'قصر الملك عبدالعزيز في النعيرية',
          'وسط قطيف',
          'حمام أبو لوزة',
          'وسط دارين',
          'مبنى مطار دارين',
          'مركز زوار دارين',
          'حي الديرة في تاروت',
          'برج الطوية',
          'قصر الملك عبدالعزيز في أم عقلا',
          'قصر الملك عبدالعزيز في العليا',
          'عين قناص',
          'مسجد جواثا التاريخي',
          'موقع جواثا',
          'ميناء العقير',
          'قصر إبراهيم',
          'المدرسة الأميرية',
          'سوق القيصرية',
          'قصر صاهود',
          'بيت البيعة',
          'قصر خزام',
          'عين نجم',
          'قصر محيرس',
          'قلعة العقير التاريخية',
          'حي الكوت',
          'وسط العيون التاريخي',
          'برج أبو زهمول',
          'قصر الوزية',
          'مسجد الجعلانية',
          'مسجد التهيمية'
      ]
      
    },
  
   
  };

  return (
    <Container>
      <Sidebar>
        <Title>الأماكن الأثرية</Title>
        <LocationList>
          {Object.keys(locationsData).map((location) => (
            <LocationItem
              key={location}
              onClick={() => setSelectedLocation(location)}
            >
              {location} 
            </LocationItem>
          ))}
        </LocationList>
      </Sidebar>

      <Content isVisible={selectedLocation !== null}>
        {selectedLocation && (
          <>
            <h3
              style={{
                fontSize: '30px',
                color: '#4d2d2d',
                marginBottom: '15px',
              }}
            >
              {selectedLocation} 
             
            </h3>
            <p
              style={{ fontSize: '18px', lineHeight: '1.8', color: '#3b1112' }}
            >
              {locationsData[selectedLocation].description}
            </p>
            <ArchaeologicalPlacesGrid>
              {locationsData[selectedLocation].places.map((place, index) => (
                <ArchaeologicalPlace key={index}>{place}</ArchaeologicalPlace>
              ))}
            </ArchaeologicalPlacesGrid>
            <ImagesContainer>
              {locationsData[selectedLocation].images.map((image, index) => (
                <ImageContainer key={index}>
                  <ContentImage
                    src={image}
                    alt={`${selectedLocation.replace(/_/g, ' ')} - ${
                      index + 1
                    }`}
                  />
                </ImageContainer>
              ))}
            </ImagesContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ArchaeologicalPlacesPage;
