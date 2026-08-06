import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import VideoGallery, { type VideoGalleryItem } from "@/components/media/VideoGallery";
import { getAssetImages, getAssetVideos, ASSET_FOLDERS } from "@/lib/assets";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Locale } from "@/lib/i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/video-gallery",
    title: {
      en: `${dict.products.videoGalleryPage.title} | VilmoraTex`,
      ar: `${dict.products.videoGalleryPage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.products.videoGalleryPage.description,
      ar: dict.products.videoGalleryPage.description,
    },
  });
}

/** Pairs each video file with a same-name poster image if one exists, else a factory fallback photo. */
function buildVideoItems(lang: Locale): VideoGalleryItem[] {
  const videos = getAssetVideos(ASSET_FOLDERS.videos);
  const posterCandidates = getAssetImages(ASSET_FOLDERS.videos);
  const fallbackPoster =
    getAssetImages(ASSET_FOLDERS.factory)[0] ??
    "https://picsum.photos/seed/vilmora-factory-video/900/506";

  return videos.map((src) => {
    const base = src.replace(/\.[^./]+$/, "");
    const poster = posterCandidates.find((img) => img.startsWith(base)) ?? fallbackPoster;
    const fileTitle =
      src
        .split("/")
        .pop()
        ?.replace(/\.[^./]+$/, "")
        .replace(/[-_]/g, " ") ?? "VilmoraTex";
    return {
      type: "local" as const,
      src,
      poster,
      title: lang === "ar" ? fileTitle : fileTitle,
    };
  });
}

export default async function VideoGalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const items = buildVideoItems(lang);

  const tourMessage =
    lang === "ar"
      ? "أهلاً فيلمورا تكس، أحب أشوف فيديو جولة داخل المصنع وعمليات التصنيع."
      : "Hello VilmoraTex, I'd like to see a video tour of your factory and manufacturing process.";

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.common.nav.videoGallery },
        ]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.videoGalleryPage.eyebrow}
          title={dict.products.videoGalleryPage.title}
          description={dict.products.videoGalleryPage.description}
          align="center"
        />

        <div className="mt-10">
          {items.length > 0 ? (
            <VideoGallery items={items} emptyMessage={dict.products.videoGalleryPage.emptyState} />
          ) : (
            <div className="rounded-2xl border border-dashed border-brand-plum/20 p-16 text-center">
              <p className="text-brand-charcoal/70">{dict.products.videoGalleryPage.emptyState}</p>
              <a
                href={buildWhatsAppLink(tourMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                {dict.products.videoGalleryPage.emptyStateCta}
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
