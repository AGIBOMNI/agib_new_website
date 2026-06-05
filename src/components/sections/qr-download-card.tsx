import Image from "next/image";

type QrDownloadCardProps = {
  alwaysShow?: boolean;
  className?: string;
};

export function QrDownloadCard({
  alwaysShow = false,
  className = "",
}: QrDownloadCardProps) {
  return (
    <div
      className={`relative mt-5 w-full ${
        alwaysShow ? "block" : "hidden md:block"
      } md:w-[130%] md:max-w-[546px] ${className}`}
    >
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#67b748] via-[#5da63e] to-[#4f9333] p-[1px] shadow-[0_20px_40px_rgba(103,183,72,0.22)]">
      <div className="rounded-[27px] bg-gradient-to-r from-[#67b748] via-[#61ad42] to-[#4f9333] px-4 py-4 text-white md:px-6 md:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <div className="mx-auto flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-[18px] bg-white p-2 shadow-sm md:mx-0 md:h-[126px] md:w-[126px]">
            <Image
              src="/agib_qr.png"
              alt="QR code to download the AGIB Bank Mobile App"
              width={110}
              height={110}
              className="h-auto w-full rounded-[10px]"
            />
          </div>

          <div className="flex-1">
            <p className="max-w-[26ch] text-[16px] font-semibold leading-[1.25] text-white md:text-[20px]">
              Scan to download our Mobile App.
            </p>

            <div className="mt-4 flex  items-center gap-3">
              <a
                href="#"
                aria-label="Download AGIB Bank Mobile App on the App Store"
                className="inline-block transition-transform hover:scale-[1.03]"
              >
                <Image
                  src="/images/apple_store_logo.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-11 w-auto rounded-xl md:h-12"
                />
              </a>
              <a
                href="#"
                aria-label="Download AGIB Bank Mobile App on Google Play"
                className="inline-block transition-transform hover:scale-[1.03]"
              >
                <Image
                  src="/images/play_store_logo.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-11 w-auto rounded-xl md:h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="border-beam pointer-events-none absolute inset-0 rounded-[28px] p-[3px]" />
    </div>
  );
}
