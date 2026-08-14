import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        // {
        //     url: "https://onlynoer.github.io/portfolio/",
        //     lastModified: new Date(),
        //     priority: 1
        // }
    ]
}