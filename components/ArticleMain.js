import Image from 'next/image';
import PP from '../static/pp.jpg';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineLink } from 'react-icons/hi';
import { BiBookmarks } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Banner from './../static/banner.png';

const styles = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
    content: `h-screen w-full p-[2rem] px-[20rem]`,
    postHeaderContaienr: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    column: `flex-1 flex flex-col justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
    space: `2-[.5rem]`,
    bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    image: `object-cover`,
    title: `font-bold text-3xl`,
    subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
}

const ArticleMain = ( ) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContaienr}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image 
                                className={`object-cover`}
                                src={PP}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.column}>
                            <div>Syaheera Raudhah</div>
                            <div className={styles.postDetails}>
                                <span>May 8 · 1 Min Read ·</span><span className={styles.listenButton}>
                                    <AiFillPlayCircle /> Listen
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <IoLogoTwitter />
                        <FaFacebook />
                        <GrLinkedin />
                        <HiOutlineLink />
                        <div className={styles.space} />
                        <BiBookmarks />
                        <FiMoreHorizontal />
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image 
                            className={styles.image}
                            src={Banner}
                            height={100}
                            width={100}
                        />
                    </div>
                    <h1 className={styles.title}>Nota Dari Diri.</h1>
                    <h4 className={styles.subtitle}>
                        <div>
                            
                        </div>
                    </h4>
                    <div className={styles.articleText}>
                    Selamat datang. Ini dunia aku dimana tersimpan serba sedikit tentang isi hati yang tidak mampu dibacarakan oleh mulut dan seribu satu memori yang disimpan jauh di sudut sukma. Tidaklah aku cerita perjalanan hidupku kerana itu sajalah harta yang aku ada.
                    </div>
                    <div></div>
                    <div className={styles.articleText}>
                    Aku ingin ceritakan tentang seorang Raja yang bertakhta di hati tanpa ada pengganti. Sebelum itu cerita ini sekadar perkongsian dimana aku sangat bahagia berada di sisinya. Dia seorang yang sangat tegas tetapi aku suka caranya yang tidak terlalu ‘over’. Aku tersangatlah bahagia sehinggakan Tuhan mencemburuinya. Sejak itu, tiada siapa yang mempu membuat aku bahagia lebih daripadanya. Dialah ‘Istana Ku’.
                    </div>
                    <div></div>
                    <div className={styles.articleText}>
                    Kemudian.. mereka inilah penyeri hidupku walaupun terkadang aku terasa seperti bukan siapa siapa di sisi mereka. Jatuh bangun kami tetap bersama. Tiada apa yang ingin dikatakan tentang mereka.. sekadar ingin mengatakan hilangnya mereka hilanglah separuh hidupku. Merekalah ‘Tempat Teduhan Ku’.
                    </div>
                    <div></div>
                    <div className={styles.articleText}>
                    Seterusnya.. sejujurnya aku sayang dengan orang ini tetapi kerana dia aku TRAUMA akan sekelilingku. Dulunya aku dipandang seperti sisa yang boleh dia hancurkan sehancur hancurnya. Tetapi sekarang aku tinggi sehinggakan bercakap saja sudah cukup gerun untuknya. Dialah ‘Payung Ku’.
                    </div>
                    <div></div>
                    <div className={styles.articleText}>
                    Dan yang terakhir.. orang ini tidak pernah aku paksa akan kehadirannya malah juga tidak dijangka. Sejenak aku terfikir apakah dia mampu menjadi ‘istana’ kedua aku? Perwatakannya tidaklah sehebat mana tetapi gaya pemikatnya mampu kembali pulihkan trauma aku. Ya.. aku sedang berusaha sekerasnya untuk memiliki hati dan perasaannya. Dialah ‘Pondok Kecil Ku’.
                    </div>
                    <div></div>
                    <div className={styles.articleText}>
                    Semoga saja pada sesiapa yang membaca ini terus kuat dalam hidupnya dan memiliki apa sahaja yang disemogakannya. Jika kamu salah seorangnya.. Maka tanpa sedar kamu telah dalami duniaku pada halaman sinopsis.
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default ArticleMain;