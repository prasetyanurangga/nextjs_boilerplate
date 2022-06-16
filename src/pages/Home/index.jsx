import React from "react";
import Link from "next/link";
// import Image from "next/image";
import PropTypes from "prop-types";

import MainLayout from "@/layouts/MainLayout";
import ItemArticle from "@/components/Custom/Article/ItemArticle";
import RightBackgroundPattern from "@/components/BackgroundPattern/RightBackgroundPattern";
import LeftBackgroundPattern from "@/components/BackgroundPattern/LeftBackgroundPattern";
import CenterBackgroundPattern from "@/components/BackgroundPattern/CenterBackgroundPattern";
import FullBackgroundPattern from "@/components/BackgroundPattern/FullBackgroundPattern";
import BodyTwo from "@/components/Typograph/BodyTwo";
import BodyOne from "@/components/Typograph/BodyOne";
import HeadingTwo from "@/components/Typograph/HeadingTwo";

export default function Home(props) {
  const { posts } = props;
  return (
    <div className="relative bg-white mt-2">
      <MainLayout>
        <div className="relative bg-white overflow-hidden">
          <LeftBackgroundPattern />
          <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 ">
            <main>
              <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-26 mb-6">
                  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h1>
                      <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                        <span className="block text-gray-900">
                          <span className="text-orange-500">Khalisah</span>{" "}
                          Khalid
                        </span>
                        <span className="block text-2xl font-normal text-gray-700">
                          sang
                          <span className="text-orange-500">
                            {" "}
                            perempuan
                          </span>{" "}
                        </span>
                      </span>
                    </h1>
                    <div className="flex items-center mt-2">
                      <p className="text-lg text-gray-900 sm:text-xl">
                        Pelancong
                      </p>
                      <div className="ml-4 pl-4 border-l border-gray-300">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <p className="text-lg text-orange-500 sm:text-xl">
                              Penulis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 pl-4 border-l border-gray-300">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">
                              Contoh
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Yang paling baru!
                    </p>
                    <p className="mt-3 text-base text-gray-500 sm:mt-2 sm:text-2xl lg:text-lg xl:text-2xl">
                      Soroti Kasus Wadas, Greenpeace:
                      <span className="text-orange-500">
                        {" "}
                        Potret Paling Nyata Kekerasan Negara Setelah 24 Tahun
                        Reformasi
                      </span>
                    </p>
                    <div className="mt-8 w-full sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                      <div className="w-full bg-orange-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base text-center font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-500">
                      <Link href="/article">
                        <a>
                          Lihat Selengkapnya
                        </a>
                      </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                      <button
                        type="button"
                        className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        <span className="sr-only">
                          Watch our video to learn more
                        </span>
                        <img className="w-full" src="/img/home/9.jpeg" alt="" />
                        {/* <Image
                      priority
                      src="/img/home/9.jpeg"
                      className="rounded-lg shadow-lg object-cover object-center"
                      alt={name}
                      layout="fill"
                    /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="relative sm:py-16 lg:py-4">
            <RightBackgroundPattern />
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Artikel
                </h2>
                <ParagraphOne
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed."
                />
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                  <ItemArticle post={post} key={post.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative bg-white py-8 sm:py-6">
            <div className="mt-4 bg-white relative overflow-hidden">
              <FullBackgroundPattern />
              <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                  <HeadingTwo title="Galeri" />
                  <BodyOne
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                        libero labore natus atque, ducimus sed."
                  />
                </div>
                {/*<PictureHome />*/}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative bg-gray-50 py-8 sm:py-6">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
              <div className="relative sm:py-16 lg:py-0">
                <CenterBackgroundPattern />
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                  {/* Testimonial card*/}
                  <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src="/img/gallery/22.JPG"
                      alt="Picture of the author"
                      resizeMode="cover"
                      layout="fill"
                    />
                    <div className="absolute inset-0 bg-orange-500 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-600 opacity-90" />
                    <div className="relative px-8">
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <svg
                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-orange-400"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="relative">
                            Aktivis Lingkungan hadir karena bumi yang rapuh ini perlu
                            suara. Butuh solusi. Butuh perubahan. Butuh aksi.
                          </p>
                        </div>

                        <footer className="mt-4">
                          <p className="text-base font-semibold text-orange-200">
                            Khalisa Khalid, Indonesia
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                    Visi
                  </h2>
                  <div className="mt-6 text-gray-500 space-y-6">
                    <BodyTwo>
                      “Musim semi yang sunyi, burung-burung menghilang”. Sosok perempuan
                      bernama Carson, menuangkan kekhawatiran atas maraknya penggunaan
                      bahan kimia untuk kebutuhan pangan yang berdampak buruk pada
                      manusia dan makhluk hidup lainnya. Silent Spring (1962), keresahan
                      yang dituliskan menjadi pemicu lahirnya gerakan lingkungan hidup
                      di berbagai belahan dunia.
                    </BodyTwo>
                    <BodyTwo>
                      Setelah lebih dari setengah abad berlalu, penduduk bumi dihadapkan
                      pada satu kenyataan pahit saat bumi terus meranggas. Bahkan
                      semakin hari, tingkat pencemaran dan penghancuran lingkungan hidup
                      semakin tak terkendali, tangan-tangan 1% manusia rakus seperti
                      mesin-mesin yang mengeksploitasi alam dan manusia dalam waktu yang
                      bersamaan. Pandemi Covid-19 dan krisis iklim menjadi penyampai
                      pesan pilu, bagaimana pemimpin-pemimpin negara di dunia telah
                      gagal menyelesaikan krisis global yang melanda dunia.
                    </BodyTwo>
                    <BodyTwo>
                      Mengutuk keadaan akan semakin membuat kita dan masa depan generasi
                      yang akan datang semakin buram. Tangan-tangan kecil yang saling
                      menggenggam dan suara-suara lirih resah diaransemen menjadi
                      suara-suara gugatan, memperluas solidaritas dan soliditas di
                      antara sesama dengan keragaman yang indah adalah kekuatan untuk
                      menyelamatkan planet bumi ini.
                    </BodyTwo>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

Home.defaultProps = {
  posts: [
    {
      title:
        "Soroti Kasus Wadas, Greenpeace: Potret Paling Nyata Kekerasan Negara Setelah 24 Tahun Reformasi",
      to: "article",
      category: { name: "Artikel", to: "articledetail" },
      description:
        "Aktivis Greenpeace Indonesia Khalisa Khalid menilai penanganan terhadap lingkungan dan sumber daya alam di bawah kendali pemerintahan Presiden Jokowi-Wapres Maruf Amin malah mengalami degradasi setelah reformasi yang kini sudah berusia 24 tahun.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl: "/img/home/5.jpeg",
      readingTime: "6 min",
      author: {
        name: "Khalisah Khalid",
        href: "#",
        imageUrl: "/img/home/khalisakhalid.jpeg",
      },
    },
    {
      title:
        "Limbah Batu Bara dan Sawit Tak Masuk Kategori B3, Walhi: Ini yang Dikhawatirkan dari UU Cipta Kerja",
      to: "article",
      category: { name: "Artikel", to: "articledetail" },
      description:
        "Ketua Desk Politik Wahana Lingkungan Hidup Indonesia (Walhi) Khalisa Khalid mengatakan, pihaknya sudah mengkhawatirkan sejak awal bahwa disahkannya Undang-Undang (UU) Cipta Kerja akan berdampak pada instrumen perlindungan lingkungan hidup",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl: "/img/home/6.jpeg",
      readingTime: "4 min",
      author: {
        name: "Khalisah Khalid",
        href: "#",
        imageUrl: "/img/home/khalisakhalid.jpeg",
      },
    },
    {
      title:
        "Ekosida: Kejahatan Lingkungan yang Berpotensi Melahirkan Genosida",
      to: "article",
      category: { name: "Artikel", to: "articledetail" },
      description:
        "Ada istilah yang terus dipopulerkan untuk kejahatan lingkungan hidup, yaitu ekosida atau ecoside. Penamaan secara khusus itu penting, untuk memberi tekanan bahwa perusakan lingkungan adalah sebuah kejahatan. Namun, menurut Kepala Desk Politik, Wahana Lingkungan Hidup (Walhi) Nasional, Khalisah Khalid, itu bukan kampanye yang mudah",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl: "/img/home/7.jpeg",
      readingTime: "11 min",
      author: {
        name: "Khalisah Khalid",
        href: "#",
        imageUrl: "/img/home/khalisakhalid.jpeg",
      },
    },
  ],
};

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};