// Home.jsx
import React, { useState } from 'react';
import PostList from '../components/PostList';
import Pagination from 'react-js-pagination';
import '../styles/Home.css';

const Home = () => {
  const [filter, setFilter] = useState(null);
  const postsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    { id: 1, subject: 'spor', title: 'Galatasaray', content: 'Galatasaray dan galibiyet rekoru', text: 'Galatasaray Futbol Takımı, Spor Toto Süper Lig in 25. haftasında konuk ettiği Kasımpaşa yı yenerek galibiyet serisini 14 maça çıkardı ve ligde üst üste en fazla maç kazanma rekorunun yeni sahibi oldu. Sarı kırmızılıar resmi maçlardaki galibiyet serisini de 17 maça yükseltti.' },
    { id: 2, subject: 'yazılım', title: 'React', content: 'React e başlamanın 5 basit yolu!', text: 'React, Facebook tarafından ön uç uygulamaları oluşturmak için oluşturulmuş popüler bir JavaScript frameworküdür.' },
    { id: 3, subject: 'dünya', title: 'Güneş', content: 'Güneş te son yılların en büyük patlaması', text: 'Dünya daki radyo sinyalleri devre dışı kaldı.    ABD Havacılık ve Uzay Dairesi (NASA), Güneş te yaşanan son yıllardaki en güçlü patlamanın, Dünya daki radyo sinyallerini geçici devre dışı bıraktığını duyurdu.' },
    { id: 4, subject: 'finans', title: 'Borsa', content: 'New York borsası karışık seyirle açıldı', text: 'New York borsası, ABD Merkez Bankası (Fed) yetkilisinin faiz indirimlerinin gelecek yıl başlayacağına yönelik iyimser havayı zayıflatan açıklamaları sonrası haftanın son işlem gününe karışık seyirle başladı.' },
    
    { id: 5, subject: 'kültür-sanat', title: 'Ali Kuşçu', content: 'Astronomi ve matematiğin kutbu', text: 'Osmanlı İmparatorluğu nda matematik ve astronomi alanındaki çalışmalara canlılık kazandıran Türk astronom, matematikçi ve dil bilimci Ali Kuşçu, vefatının 549. yılında yad ediliyor.    ' },
    { id: 6, subject: 'magazin', title: 'Türkan Şoray', content: 'Beni hayrete düşürdü.', text: 'Türkan Şoray, Kırklareli nin Lüleburgaz ilçesinde düzenlenen şair, yazar, tiyatro ve sinema sanatçısı Cahit Irgat ın anma programına katıldı' },
    { id: 7, subject: 'sağlık', title: 'Bakan Koca', content: '2028 de tüm aşılar yüzde 100 Türkiye de üretiliyor olacak', text: 'Sağlık Bakanı Fahrettin Koca, "Çocukluk çağı bağışıklama programındaki kuduz, Hepatit A ve suçiçeği gibi üç aşıyı teknoloji transferi ile Türkiye de üreteceğiz. Bağışıklama programındaki diğer tüm aşılar Hıfzıssıhha da üretilecek. 2028 de tüm aşılar yüzde 100 Türkiye de üretiliyor olacak" dedi.' },
    { id: 8, subject: 'bilim', title: 'Science Dergisi', content: '2023 ün çığır açan buluşları', text: 'Yılın çığır açan buluşu: Zayıflama ilaçları: Science, hem bir "kamu sağlığı krizi" hem de çetrefilli bir "kişisel mücadele" olarak tanımladığı obeziteye yönelik ilaç tedavilerinin hayal kırıklığı yaratan geçmişine dikkat çekiyor:   1940 lı yıllardan itibaren kadınları hedefleyen sağlıksız "gökkuşağı diyet haplarından" 1990 larda yükselişe geçen ancak ağır kalp ve akciğer rahatsızlıklarını tetikleyenlere, bu ilaçların tarihi çok sayıda başarısızlıkla gölgelendi.' },
    
    { id: 9, subject: 'spor', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 10, subject: 'yazılım', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 11, subject: 'dünya', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 12, subject: 'finans', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    
    { id: 13, subject: 'kültür-sanat', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 14, subject: 'magazin', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 15, subject: 'sağlık', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 16, subject: 'bilim', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },

    { id: 17, subject: 'spor', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 18, subject: 'yazılım', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 19, subject: 'dünya', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 20, subject: 'finans', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    
    { id: 21, subject: 'kültür-sanat', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 22, subject: 'magazin', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 23, subject: 'sağlık', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 24, subject: 'bilim', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },

    { id: 25, subject: 'spor', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 26, subject: 'yazılım', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 27, subject: 'dünya', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 28, subject: 'finans', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    
    { id: 29, subject: 'kültür-sanat', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 30, subject: 'magazin', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 31, subject: 'sağlık', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
    { id: 32, subject: 'bilim', title: 'React Hooks', content: 'An introduction to React Hooks and how to use them.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.An introduction to React Hooks and how to use them.' },
  ];

  // getAllSubjects fonksiyonu Home bileşeni içine taşındı
  const getAllSubjects = () => {
    const subjects = new Set();
    posts.forEach((post) => {
      subjects.add(post.subject);
    });
    return Array.from(subjects);
  };

  const handleFilterChange = (selectedSubject) => {
    setFilter(selectedSubject);
    setCurrentPage(1);
  };

  const getFilteredPosts = () => {
    let filteredPosts;
    if (!filter) {
      filteredPosts = posts;
    } else {
      filteredPosts = posts.filter((post) => post.subject === filter);
    }
  
    return filteredPosts;
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getFilteredPosts().slice(indexOfFirstPost, indexOfLastPost);

  return (
  <div className="home-container">
    <div className="header-filter-section">
      <div className="header">
        <h2>Welcome to My Blog</h2>
      </div>
      <div className="filter-section">
        <p>Select a subject to filter:</p>
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="">All Subjects</option>
          {getAllSubjects().map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
    </div>
    {getFilteredPosts().length > 0 ? (
      <div>
        <PostList posts={currentPosts} />

        {/* Yatay ortalanmış sayfalama düğmeleri */}
        <div className="pagination-container">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={postsPerPage}
            totalItemsCount={posts.length} // Burada değişiklik yapıldı
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    ) : (
      <p>No posts found.</p>
    )}
  </div>
);
};

export default Home;
