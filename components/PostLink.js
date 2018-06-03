import Link from 'next/link';

export default (props) => (
    <div>
        <li key={props.post.id}>
            <Link as={`/p/${props.post.id}`} href={`/post?id=${props.post.id}`}>
                <a>{props.post.name}</a>
            </Link>
        </li>

        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </div>
);