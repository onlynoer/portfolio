import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // const samples = await fetch(`https://lightscatter.dri.edu/api/samples?fields=title`).then((res) => res.json());
    // const sampleRoutes = samples.data.map((sample: { title: string}) => ({
    //     // if title has spaces replace with %20 or +
    //     url: `https://lightscatter.dri.edu/samples/${sample.title.replace(/\s/g, '%20')}`,
    //     lastModified: new Date(),
    //     priority: 0.8
    // }))

    return [
        {
            url: "https://lightscatter.dri.edu/",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://lightscatter.dri.edu/samples",
            lastModified: new Date(),
            priority: 1
        },
        // ...sampleRoutes,
        {
            url: "https://lightscatter.dri.edu/papers",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://lightscatter.dri.edu/experimental",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://lightscatter.dri.edu/experimental/miescattering",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://lightscatter.dri.edu/news",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://lightscatter.dri.edu/contact",
            lastModified: new Date(),
            priority: 1
        }
    ]
}