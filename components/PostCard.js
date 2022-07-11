import Image from 'next/image';
import Logo from '../static/logo.png';

const styles = {
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    authorImage: 'object-cover',
    authorName: 'font-semibold',
    title: 'font-bold text-2xl',
    briefing: 'text-[#787878]',
    detailsContainer: '',
    articleDetails: '',
    postDetails: '',
}

const PostCard = () => {
    return(
        <div>
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

            <h1 className={styles.title}>Nota Dari Diri.</h1>

            <div className={styles.briefing}>I've got something to tell you even though you already knew it.</div>

        </div>
    )
}

export default PostCard