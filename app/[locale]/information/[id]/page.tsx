import CopyURLButton from "components/CopyURLButton";
import InformationCard from "components/InformationCard";
import { Information } from "domains/Information";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { InformationContent } from "types/microcms";
import { Link } from "utils/i18n/navigation";
import { fetchContent } from "utils/microCMS";

type Props = {
  params: { id: string };
};

async function getContent(id: string) {
  // cache lifetime (60 sec)
  const data = await fetchContent<InformationContent>(
    "informations",
    id,
    {},
    { next: { revalidate: 60 } },
  );
  return Information.create(data);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  try {
    const content = await getContent(id);
    return {
      title: content.title,
    };
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export default async function Page({ params }: Props) {
  const id = params.id;
  const content = await getContent(id);
  const t = await getTranslations("Common");

  if (!content) notFound();

  return (
    <div className="container mx-auto">
      <div className="mx-4 md:mx-8">
        <div className="my-8 flex items-center space-x-4">
          <Link
            className="inline-flex items-center text-gray-500 hover:text-gray-600"
            href="/information"
          >
            <svg
              className="ms-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 21.308L.692 12L10 2.692l1.063 1.064L2.82 12l8.244 8.244z"
              />
            </svg>

            {t("nav/back")}
          </Link>
        </div>

        <div className="my-8">
          <InformationCard content={content} />
        </div>

        <div className="my-8 flex items-center justify-center">
          <CopyURLButton />
        </div>
      </div>
    </div>
  );
}
