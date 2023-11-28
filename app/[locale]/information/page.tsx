import Information from "components/Information";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Page/Information");
  return (
    <div>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="text-lg font-normal text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            {t("description")}
          </p>
        </div>
      </div>
      <Information />
    </div>
  );
}
