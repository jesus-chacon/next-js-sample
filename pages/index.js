import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>

        <ul>
            {props.shows.map(({show}) => (
                <PostLink post={show} />
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {shows: data};
};

export default Index;