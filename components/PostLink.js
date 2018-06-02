import Link from 'next/link';

export default (props) => (
    <li key={props.post.id}>
        <Link as={`/p/${props.post.id}`} href={`/post?id=${props.post.id}`}>
            <a>{props.post.name}</a>
        </Link>
    </li>
);