import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const SOURCE_BASE_URL = 'http://localhost:8888/headless';
const TARGET_BASE_URL = 'http://localhost:3000';


const SITEMAP_INDEX_URL = `${SOURCE_BASE_URL}/sitemap_index.xml`;

const setPriority = (url) => {

	if (url === 'http://localhost:3000/' || url === TARGET_BASE_URL) {
		return 1.0; // Homepage
	} else if (url.includes('/services/')) {
		return 0.8;
	} else if (url.includes('/case-studies/')) {
		return 0.7;
	} else if (url.includes('/about-us/')) {
		return 0.6;
	} else if (
		url.includes('/category/') ||
		url.includes('/author/') ||
		url.includes('/case-study-category/')
	) {
		return 0.5; // Categories, authors, and case study categories might be of lesser priority
	}
	// Default
	return 0.5;
};



const parseSitemapEntry = (entry) => {
	const originalUrl = entry?.loc?.[0];
	const modifiedUrl = originalUrl
		? originalUrl.replace(SOURCE_BASE_URL, TARGET_BASE_URL)
		: '';

	return {
		url: modifiedUrl,
		lastModified: new Date(entry?.lastmod?.[0] || Date.now()),
		changeFrequency: entry?.changefreq?.[0] || 'monthly',
		priority: setPriority(modifiedUrl), // Set priority dynamically
	};
};


export default async function sitemap() {
	try {
		// Fetch the sitemap index.
		const response = await axios.get(SITEMAP_INDEX_URL, {
			next: { tags: ['cms'] },
		});
		const parsedIndexXml = await parseStringPromise(response.data);

		// Extract sitemap URLs from the sitemap index.
		const sitemapUrls = parsedIndexXml.sitemapindex.sitemap.map(
			(s) => s.loc[0]
		);

		let allEntries = [];
		let seenUrls = new Set(); // This set keeps track of URLs we've seen

		// Fetch and parse each individual sitemap.
		for (let sitemapUrl of sitemapUrls) {
			const sitemapResponse = await axios.get(sitemapUrl);
			const parsedSitemapXml = await parseStringPromise(sitemapResponse.data);

			if (parsedSitemapXml.urlset && parsedSitemapXml.urlset.url) {
				const entries = parsedSitemapXml.urlset.url
					.map(parseSitemapEntry)
					.filter((entry) => {
						// If we've seen the URL before, filter it out, else add to the set
						if (seenUrls.has(entry.url)) {
							return false;
						} else {
							seenUrls.add(entry.url);
							return true;
						}
					});

				allEntries = [...allEntries, ...entries];
			}
		}

		return allEntries;
	} catch (error) {
		console.error('Error fetching sitemap:', error);
		return [];
	}
}

