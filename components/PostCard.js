import Image from 'next/image';
import Logo from '../static/logo.png';
import {FiBookmark} from 'react-icons/fi';
import Link from 'next/link';

const styles = {
    wrapper: 'flex mac-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    authorImage: 'object-cover',
    authorName: 'font-semibold',
    title: 'font-bold text-2xl',
    briefing: 'text-[#787878]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    articleDetails: 'my-2 text-[.8rem]',
    category: 'bg-[#f2f2f2] p-1 rounded-full',
    bookmarkContainer: 'cursor-pointer',
    postDetails: 'dlex-[2.5rem] flex flex-col',
}

const PostCard = () => {
    return(
        <Link href={'/post/123'}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <Link href={'profile/@quinnovasara'}>
                        <div className={styles.authorContainer}>
                            <div className={styles.authorImageContainer}>
                                <Image 
                                    src={Logo}
                                    className={styles.authorImage}
                                    width={40}
                                    height={40}
                                />
                            </div>

                            <div className={styles.authorName}>Syaheera Raudhah</div>
                        </div>
                    </Link>

                    <h1 className={styles.title}>Nota Dari Diri.</h1>

                    <div className={styles.briefing}>I've got something to tell you even though you already knew it.</div>

                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>May 8 · 1 min read · <span className={styles.category}>Productivity</span></span>

                        <span className={styles.bookmarkContainer}>
                            <FiBookmark className='h-5 w-5'/>
                        </span>
                    </div>
                </div>

                <div className={styles.thumbnailContainer}>
                    <Image
                        height={100}
                        width={100}
                        src={Logo}
                    />
                </div>
            </div>
        </Link>
    )
}

export default PostCard