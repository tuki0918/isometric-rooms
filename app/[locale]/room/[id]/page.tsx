import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Page/Room");
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
      {/* TODO: room content */}
      <div>
        <div className="my-8 flex justify-center space-x-2 md:space-x-4">
          <span className="text-2xl font-bold text-gray-500">●</span>
          <span className="text-2xl font-bold text-gray-500">●</span>
          <span className="text-2xl font-bold text-gray-500">●</span>
        </div>
      </div>
    </div>
  );
}
