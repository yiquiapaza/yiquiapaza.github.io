import rss from '@astrojs/rss';

export function GET(context) {
    const posts = Object.values(postImportResult);
    return rss({
        title: 'Personal Page',
        description: 'List about my research and my publications',
        site: context.site,
        trailingSlash: false,
        items: posts.map((post) => ({
            link: post.url,
            ...post.frontmatter,
        })),
    });
}
