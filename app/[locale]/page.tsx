import Top from "components/Top";
import Script from "next/script";
import { Link } from "utils/i18n/navigation";

export default function Home() {
  const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    "NEXT_PUBLIC_GA_MEASUREMENT_ID is not defined";
  return (
    <div>
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_ENABLE_LOG === "ON" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
          </Script>
        </>
      )}

      {/* TODO: 説明とi18n対応 */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            XXX XXX XXX
          </h1>
          <p className="text-lg font-normal text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
            XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
            XXX XXX
          </p>
          <div className="mt-6 inline-flex flex-col space-y-4 md:flex-row md:justify-center md:space-y-0">
            <Link
              href={"/information"}
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 sm:ms-4"
            >
              See Information
              <svg
                className="ms-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.175 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </Link>
            <Link
              href={
                "https://chat.openai.com/g/g-OvSZ5XwWK-isometric-room-vision"
              }
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 sm:ms-4"
            >
              See Image Generation GPT
              <svg
                className="ms-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.175 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Top />
    </div>
  );
}
