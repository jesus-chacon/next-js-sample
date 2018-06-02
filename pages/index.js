import Link from 'next/link';

import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Index = () => (
    <Layout>
        <h1>My Blog</h1>

        <ul>
            <PostLink title="Hello Next.js"></PostLink>
            <PostLink title="Learn Next.js is awensome"></PostLink>
            <PostLink title="Deploy apps with Zeit"></PostLink>
        </ul>
    </Layout>
);

export default Index;