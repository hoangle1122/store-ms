// src/App.jsx - PHIÊN BẢN HOÀN CHỈNH

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FooterPlayer from "./components/FooterPlayer";
import ProducerCard from "./components/ProducerCard";
import TrackRow from "./components/TrackRow";
import MarketplaceEntrance from "./components/MarketplaceEntrance"; // Import component mới
import {
  topTracks as mockTopTracks,
  producers as mockProducers,
} from "./mock-data";
import { api } from "./api/client";
import CustomFullpage from "./components/CustomFullpage";
import GlobalBackground from "./components/GlobalBackground"; // THÊM DÒNG NÀY

// Import Swiper và CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import CSS của ứng dụng
import "./App.css";
import "./components/FeaturedProducers.css";
import "./components/GenreSection.css";
import ProducerModal from "./components/ProducerModal";

function App() {
  const [isPlayerVisible, setPlayerVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [producersData, setProducersData] = useState(mockProducers);
  const [topTracksData, setTopTracksData] = useState(mockTopTracks);
  const [producersQuery, setProducersQuery] = useState("");
  const [selectedProducer, setSelectedProducer] = useState(null);

  // Fetch top tracks from backend with graceful fallback to mocks
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const t = await api.topTracks();
        if (mounted) {
          if (Array.isArray(t) && t.length) setTopTracksData(t);
        }
      } catch (err) {
        // Keep mock data on failure; optionally log
        // console.debug('API fallback to mocks', err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Fetch producers with debounce when search query changes
  useEffect(() => {
    let canceled = false;
    const h = setTimeout(async () => {
      try {
        const list = await api.producers(
          producersQuery ? { q: producersQuery, limit: 50 } : {}
        );
        if (!canceled && Array.isArray(list) && list.length) {
          setProducersData(list);
        } else if (!canceled && !producersQuery) {
          // if no results and empty query, keep mocks
          setProducersData(mockProducers);
        } else if (!canceled) {
          setProducersData([]);
        }
      } catch (e) {
        if (!canceled && !producersQuery) setProducersData(mockProducers);
      }
    }, 300);
    return () => {
      canceled = true;
      clearTimeout(h);
    };
  }, [producersQuery]);

  const handleSectionChange = (index) => {
    setHeaderVisible(index === 0);
    setPlayerVisible(index > 0);
  };

  return (
    <div>
      <GlobalBackground /> {/* THÊM DÒNG NÀY */}
      <Header isVisible={isHeaderVisible} />
      <CustomFullpage
        navigationTooltips={[
          "Trang chủ",
          "Bảng Xếp Hạng",
          "Nghệ Sĩ",
          "Chợ", // Đổi tên section cuối
        ]}
        onSectionChange={handleSectionChange}
      >
        {/* SLIDE 1: HERO */}
        <div className="section">
          <Hero />
        </div>

        {/* SLIDE 2: TOP CHARTS */}
        <div className="section top-charts-section">
          <div className="fullpage-content-container responsive-container">
            <h2 className="section-title">
              <span className="gradient-text">Top</span> Charts
            </h2>
            <div
              id="top-charts-list"
              className="track-list responsive-list"
              style={{ overflowY: "auto", height: "60vh" }} // Allow scrolling
            >
              {topTracksData.map((track, index) => (
                <TrackRow key={track.id} track={track} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* SLIDE 3: FEATURED STORES */}
        <div className="section featured-producers-section">
          <div className="fullpage-content-container responsive-container">
            <h2 className="section-title">
              <span className="gradient-text">Featured</span> Stores
            </h2>
            <div className="content-panel">
              <div className="section-content-wrapper responsive-content">
                <div className="producers-search">
                  <input
                    type="text"
                    placeholder="Search producers..."
                    value={producersQuery}
                    onChange={(e) => setProducersQuery(e.target.value)}
                    aria-label="Search producers"
                  />
                </div>
                <div className="producers-slider-wrapper">
                  {producersData.length === 0 ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "#ccc",
                        padding: "1rem",
                      }}
                    >
                      No producers found.
                    </div>
                  ) : (
                    <Swiper
                      modules={[Navigation, A11y]}
                      slidesPerView={1.2}
                      spaceBetween={15}
                      centeredSlides={true}
                      loop={true}
                      navigation
                      className="producers-slider swiper"
                      breakpoints={{
                        480: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2.5, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                        1200: { slidesPerView: 3.5, spaceBetween: 50 },
                      }}
                    >
                      {producersData.map((producer) => (
                        <SwiperSlide key={producer.id}>
                          <ProducerCard
                            producer={producer}
                            onOpen={(p) => setSelectedProducer(p)}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 4: MARKETPLACE ENTRANCE */}
        <div className="section">
          <MarketplaceEntrance />
        </div>
      </CustomFullpage>
      <FooterPlayer isVisible={isPlayerVisible} />
      <ProducerModal
        producer={selectedProducer}
        onClose={() => setSelectedProducer(null)}
      />
    </div>
  );
}
export default App;
