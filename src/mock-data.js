// src/mock-data.js - BẢN SỬA LỖI TẬN GỐC

// ✨ FIX: Nhân đôi danh sách producers để Swiper có đủ slide cho chế độ loop
export const producers = [
  {
    id: "hoaprox",
    name: "Hoaprox",
    avatar: "https://i.pravatar.cc/200?u=hoaprox",
    tagline: "Vinahouse Specialist",
    description:
      "Master of Vietnamese electronic music with signature Vinahouse beats that dominate clubs across Asia.",
    tracks: 156,
    followers: "2.4M",
    verified: true,
  },
  {
    id: "masew",
    name: "Masew",
    avatar: "https://i.pravatar.cc/200?u=masew",
    tagline: "Melodic Master",
    description:
      "Creating emotional melodies that touch souls. Known for chart-topping hits and collaborations.",
    tracks: 89,
    followers: "1.8M",
    verified: true,
  },
  {
    id: "kicm",
    name: "K-ICM",
    avatar: "https://i.pravatar.cc/200?u=kicm",
    tagline: "Vbass Innovator",
    description:
      "Revolutionary Vbass producer pushing boundaries with innovative sounds and heavy bass drops.",
    tracks: 124,
    followers: "3.1M",
    verified: true,
  },
  {
    id: "cm1x",
    name: "CM1X",
    avatar: "https://i.pravatar.cc/200?u=cm1x",
    tagline: "Club House King",
    description:
      "Energetic club house beats that keep the dance floor alive all night. Festival favorite worldwide.",
    tracks: 203,
    followers: "1.5M",
    verified: true,
  },
  // Lặp lại danh sách
  {
    id: "hoaprox-2",
    name: "Hoaprox",
    avatar: "https://i.pravatar.cc/200?u=hoaprox",
    tagline: "Vinahouse Specialist",
    description:
      "Master of Vietnamese electronic music with signature Vinahouse beats that dominate clubs across Asia.",
    tracks: 156,
    followers: "2.4M",
    verified: true,
  },
  {
    id: "masew-2",
    name: "Masew",
    avatar: "https://i.pravatar.cc/200?u=masew",
    tagline: "Melodic Master",
    description:
      "Creating emotional melodies that touch souls. Known for chart-topping hits and collaborations.",
    tracks: 89,
    followers: "1.8M",
    verified: true,
  },
  {
    id: "kicm-2",
    name: "K-ICM",
    avatar: "https://i.pravatar.cc/200?u=kicm",
    tagline: "Vbass Innovator",
    description:
      "Revolutionary Vbass producer pushing boundaries with innovative sounds and heavy bass drops.",
    tracks: 124,
    followers: "3.1M",
    verified: true,
  },
  {
    id: "cm1x-2",
    name: "CM1X",
    avatar: "https://i.pravatar.cc/200?u=cm1x",
    tagline: "Club House King",
    description:
      "Energetic club house beats that keep the dance floor alive all night. Festival favorite worldwide.",
    tracks: 203,
    followers: "1.5M",
    verified: true,
  },
];

// Các dữ liệu còn lại giữ nguyên
export const tracks = [
  {
    id: 1,
    title: "VinaHey",
    producer: producers[0],
    genre: "Vinahouse",
    bpm: 140,
    price: 1.99,
    cover: "https://picsum.photos/id/10/200/200",
  },
  {
    id: 2,
    title: "Lak Lak Lak",
    producer: producers[1],
    genre: "House Lak",
    bpm: 135,
    price: 2.99,
    cover: "https://picsum.photos/id/20/200/200",
  },
  {
    id: 3,
    title: "Goa Spirit",
    producer: producers[2],
    genre: "Psytrance",
    bpm: 145,
    price: 0.99,
    cover: "https://picsum.photos/id/30/200/200",
  },
  {
    id: 4,
    title: "Club Banger",
    producer: producers[3],
    genre: "Vbass",
    bpm: 128,
    price: 1.99,
    cover: "https://picsum.photos/id/40/200/200",
  },
  {
    id: 5,
    title: "EDM Anthem",
    producer: producers[1],
    genre: "EDM",
    bpm: 128,
    price: 2.99,
    cover: "https://picsum.photos/id/50/200/200",
  },
];

export const topTracks = tracks.slice(0, 4);

export const genres = [
  {
    id: "vinahouse",
    name: "Vinahouse",
    image: "https://picsum.photos/id/1015/500/500",
  },
  {
    id: "houselak",
    name: "House Lak",
    image: "https://picsum.photos/id/1016/500/500",
  },
  {
    id: "psytrance",
    name: "Psytrance",
    image: "https://picsum.photos/id/1018/500/500",
  },
  {
    id: "vbass",
    name: "Vbass",
    image: "https://picsum.photos/id/1025/500/500",
  },
];

export const featuredProducer = {
  id: "hoaprox",
  name: "Hoaprox",
  avatar: "https://i.pravatar.cc/200?u=hoaprox",
  tagline: "Producer of the Week",
  stats: { tracks: 42, followers: 12500, sales: 2100 },
};
