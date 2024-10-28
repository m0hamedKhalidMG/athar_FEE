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
  color: #4d2d2d;
  padding: 5px 10px;
  background-color: #f9f6f0;
  border-radius: 8px;
  border: 1px solid #d9c8b1;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0e8df;
  }
`;

const ArchaeologicalPlacesPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const locationsData = {
    المدينة_المنورة: {
      images: [
        require('../images/المدينة المنورة/1.jpg'),
        require('../images/المدينة المنورة/3.jpg'),
        require('../images/المدينة المنورة/4.jpg'),
        require('../images/المدينة المنورة/5.jpg'),
       
      ],
      description:
        'المدينة المنورة، مهد الحضارة الإسلامية وتاريخ عريق، تضم عدداً من المواقع الأثرية.',
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
    الجوف: {
      images: [
        require('../images/الجوف/1.jpg'),
        require('../images/الجوف/2.jpg'),
        require('../images/الجوف/3.jpg'),
        require('../images/الجوف/4.jpg'),
      ],
      description:
        'منطقة الجوف التاريخية، غنية بالمواقع الأثرية التي تعكس حضارتها العريقة.',
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
    الرياض: {
      images: [
        require('../images/الرياض/1.png'),
        require('../images/الرياض/2.png'),
        require('../images/الرياض/3.png'),
        require('../images/الرياض/4.png'),
      ],
      description:
        'الرياض، العاصمة العريقة للمملكة، وتضم مواقع أثرية ومعالم تراثية.',
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
        'القصيم، منطقة ذات تاريخ غني، تحتوي على نقوش أثرية ومواقع تعكس ثقافتها العريقة.',
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
        'حائل، تشتهر بمواقعها الأثرية العريقة وجبالها ذات النقوش الصخرية.',
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
    تبوك: {
      images: [
        require('../images/تبوك/1.jpg'),
        require('../images/تبوك/2.jpg'),
        require('../images/تبوك/3.jpg'),
        require('../images/تبوك/4.jpg'),
      ],
      description:
        'تبوك، منطقة تجمع بين التاريخ الأثري والطبيعة الجبلية، تحتوي على العديد من المواقع الأثرية.',
      places: [
        'قلعة تبوك الأثرية',
        'محطة الأخضر',
        'قلعة المعظم الأثرية',
        'موقع قرية وقرية كلوة الأثري',
        'بئر هداج',
        'قصر الحمراء',
        'سور تيماء وقصر الرضم',
        'البلدة التراثية بتيماء (قصر الإمارة القديم، سوق الناجم التراثي)',
        'موقع رجوم صعصع الأثري',
        'جبل النصلة',
        'قلعة الملك عبد العزيز',
        'مغاير شعيب',
        'بئر السعيداني وواحة عينونة',
        'قلعة المويلح',
        'قلعة الزريب',
        'مبنى المالية في أملج',
        'آثار قرية الديسة',
      ],
    },
    عسير: {
      images: [
        require('../images/عسير/1.jpg'),
        require('../images/عسير/2.jpg'),
        require('../images/عسير/3.png'),
        require('../images/عسير/4.jpg'),
      ],
      description:
        'عسير، منطقة تتميز بالتراث العريق والمناظر الطبيعية، وتحتوي على مواقع أثرية وثقافية.',
      places: [
        'موقع جرش الأثري وموقع العبلاء',
        'درب البخور وبرك الغماد',
        'آثار وادي تثليث ووادي عيا',
        'قرية رجال ألمع التراثية',
        'قرية المفتاحة',
        'قلعة شمسان وحصن أبها التراثي',
        'قصر آل عبيد التراثي وقصر شدا التاريخي',
        'قصر آل أبو نقطة المتحمي وحي البسطة التراثي',
        'حي النصب التراثي',
        'مسجد صدرايد التاريخي في النماص',
        'مسجد طبب التاريخي',
      ],
    },
    المنطقة_الشرقية: {
      images: [
        require('../images/المنطقة الشرقية/1.jpg'),
        require('../images/المنطقة الشرقية/2.jpg'),
        require('../images/المنطقة الشرقية/3.jpg'),
        require('../images/المنطقة الشرقية/4.jpg'),
      ],
      description:
        'المنطقة الشرقية، موطن للآثار العريقة والتراث الثقافي، وتحتوي على مواقع تعود لآلاف السنين.',
      places: [
        'مدينة ثاج الأثرية',
        'عين جاوان وآثار جزيرة جنة',
        'قلعة تاروت وموقع الدوسرية',
        'قصر الملك عبدالعزيز في النعيرية وأم عقلا وقرية العليا',
        'مسجد جواثا التاريخي',
        'ميناء العقير وقصر العقير',
        'حي الكوت',
        'قصر إبراهيم وسوق القيصرية',
      ],
    },
    ينبع: {
      images: [require('../images/ينبع/2.webp')],
      description:
        'ينبع، مدينة ساحلية ذات طابع تاريخي مميز، تحتوي على مواقع أثرية وتراثية.',
      places: ['قصر البنت في ينبع', 'ينبع البلد', 'جبل لؤلؤة'],
    },
    مكة_المكرمة: {
      images: [
        require('../images/مكة المكرمة/1.png'),
        require('../images/مكة المكرمة/2.png'),
        require('../images/مكة المكرمة/3.png'),
        require('../images/مكة المكرمة/4.png'),
      ],
      description:
        'مكة المكرمة، المدينة المقدسة ومركز الإسلام، تحتوي على مواقع تاريخية وأثرية عظيمة.',
      places: [
        'الكعبة المشرفة',
        'جبل ثور وجبل الرحمة',
        'مسجد المشعر الحرام بمزدلفة',
        'عين زبيدة',
        'حي غار حراء',
        'قبر أم المؤمنين السيدة ميمونة بنت الحارث',
      ],
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
              {location.replace(/_/g, ' ')} (
              {locationsData[location].places.length})
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
              {selectedLocation.replace(/_/g, ' ')} (
              {locationsData[selectedLocation].places.length})
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